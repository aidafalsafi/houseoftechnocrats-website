import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const root = process.cwd();
const output = path.join(root, "dist");
const origin = "https://houseoftechnocrats.ir";
const excluded = new Set([".git", ".github", ".agents", ".codex", ".aws", "node_modules", "dist", "scripts", "package.json", "package-lock.json"]);
const existingPages = (await readdir(root, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
  .map((entry) => entry.name)
  .sort();
const profileRoutes = existingPages.filter((route) => route.endsWith("-profile.html"));

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (excluded.has(entry.name) || entry.name.startsWith(".")) continue;
  await cp(path.join(root, entry.name), path.join(output, entry.name), { recursive: true });
}

const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_BIN ? { executablePath: process.env.CHROME_BIN } : {})
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, locale: "fa-IR" });
const staticPage = await browser.newPage({ javaScriptEnabled: false });
const pageErrors = [];
page.on("pageerror", (error) => pageErrors.push(error.message));

async function render(route, query = "", attributes = {}) {
  const source = pathToFileURL(path.join(root, route)).href + query;
  pageErrors.length = 0;
  await page.goto(source, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => {
    const app = document.querySelector("#app");
    return app ? app.children.length > 0 : Boolean(document.querySelector("main h1"));
  }, null, { timeout: 12000 });
  await page.waitForTimeout(40);
  if (pageErrors.length) throw new Error(`${route} raised a browser error: ${pageErrors.join("; ")}`);
  return page.evaluate(({ attributes }) => {
    for (const [name, value] of Object.entries(attributes)) document.body.setAttribute(name, value);
    return document.documentElement.outerHTML;
  }, { attributes });
}

function categoryRoute(id) {
  return id === "continuity-architecture" ? "category-continuity-architecture.html" : `category-${id}.html`;
}

function patternRoute(slug) {
  return slug === "modular-survivability-architecture" ? "pattern-modular-survivability.html" : `pattern-${slug}.html`;
}

function queryFor(route) {
  if (route === "category-continuity-architecture.html") return "?category=continuity-architecture&lang=fa";
  if (route === "pattern-modular-survivability.html") return "?category=continuity-architecture&pattern=modular-survivability-architecture&lang=fa";
  return route.endsWith("-profile.html") ? "" : "?lang=fa";
}

// Render the radar once to discover its real category routes before snapshotting the site.
await render("radar-view.html", "?lang=fa");
const categories = await page.evaluate(() => Array.from(document.querySelectorAll(".radar-category-card"), (link) => {
  const url = new URL(link.getAttribute("href"), "https://houseoftechnocrats.ir/");
  return url.searchParams.get("category");
}));
if (!categories.length || new Set(categories).size !== categories.length) throw new Error("Could not discover unique Radar categories.");

const patterns = [];
for (const category of categories) {
  await render("category.html", `?category=${encodeURIComponent(category)}&lang=fa`);
  const records = await page.evaluate(() => Array.from(document.querySelectorAll("a.record-pattern-card"), (link) => {
    const url = new URL(link.getAttribute("href"), "https://houseoftechnocrats.ir/");
    return { category: url.searchParams.get("category"), slug: url.searchParams.get("pattern") };
  }));
  patterns.push(...records);
}
if (!patterns.length || new Set(patterns.map(({ slug }) => slug)).size !== patterns.length) throw new Error("Could not discover unique Radar patterns.");

const categoryRoutes = Object.fromEntries(categories.map((id) => [id, categoryRoute(id)]));
const patternRoutes = Object.fromEntries(patterns.map(({ slug }) => [slug, patternRoute(slug)]));
const publicPeople = profileRoutes.map((route) => route.slice(0, -"-profile.html".length));

async function prepareHtml(html, route) {
  await staticPage.setContent(html, { waitUntil: "domcontentloaded" });
  await staticPage.evaluate(({ route, origin, categoryRoutes, patternRoutes, publicPeople }) => {
    const head = document.head;
    const main = document.querySelector("main");
    if (!main) throw new Error(`${route} has no main landmark`);
    if (!main.id) main.id = "main-content";
    const headings = Array.from(main.querySelectorAll("h1"));
    if (!headings.length) {
      const heading = main.querySelector("h2");
      if (!heading) throw new Error(`${route} has no primary heading`);
      heading.outerHTML = heading.outerHTML.replace(/^<h2\b/i, "<h1").replace(/<\/h2>$/i, "</h1>");
    } else {
      headings.slice(1).forEach((heading) => {
        heading.outerHTML = heading.outerHTML.replace(/^<h1\b/i, "<h2").replace(/<\/h1>$/i, "</h2>");
      });
    }

    if (!document.body.querySelector(":scope > .seo-skip-link")) {
      const skip = document.createElement("a");
      skip.className = "seo-skip-link";
      skip.href = "#main-content";
      skip.textContent = document.documentElement.lang === "fa" ? "رفتن به محتوای اصلی" : "Skip to main content";
      document.body.prepend(skip);
    }
    if (!head.querySelector("style[data-seo-accessibility]")) {
      const style = document.createElement("style");
      style.dataset.seoAccessibility = "true";
      style.textContent = ".seo-skip-link{position:absolute;z-index:10000;inset-block-start:1rem;inset-inline-start:1rem;transform:translateY(-180%);padding:.75rem 1rem;background:#071a2c;color:#fff;border:2px solid #fff}.seo-skip-link:focus{transform:translateY(0)}";
      head.append(style);
    }

    const profileSet = new Set(publicPeople);
    function routeLink(anchor) {
      const raw = anchor.getAttribute("href");
      if (!raw || raw.startsWith("#")) return;
      let url;
      try { url = new URL(raw, `${origin}/`); } catch { return; }
      if (url.origin !== origin) return;
      const source = url.pathname.split("/").pop();
      let destination = "";
      if (source === "category.html") destination = categoryRoutes[url.searchParams.get("category")];
      if (source === "pattern.html") destination = patternRoutes[url.searchParams.get("pattern")];
      if (source === "person.html") {
        const person = url.searchParams.get("person");
        if (profileSet.has(person)) destination = `${person}-profile.html`;
      }
      if (!destination) return;
      const query = new URLSearchParams();
      const lang = url.searchParams.get("lang");
      if (lang === "en" || (source === "person.html" && document.documentElement.lang === "fa")) query.set("lang", lang || "fa");
      anchor.setAttribute("href", destination + (query.size ? `?${query}` : "") + url.hash);
    }
    document.querySelectorAll("a[href]").forEach(routeLink);
    document.addEventListener("click", (event) => {
      const anchor = event.target.closest("a[href]");
      if (anchor) routeLink(anchor);
    }, true);

    const title = document.title.trim() || main.querySelector("h1")?.innerText.trim();
    const descriptionSource = main.querySelector(".inner-hero .lede, .hero-copy p:not(.dbr-label), .article-intro, .lede")
      || Array.from(main.querySelectorAll("p")).find((item) => item.innerText.trim().length > 40);
    const fallbackDescription = route === "about-us.html"
      ? `${title} — صفحهٔ تماس خانهٔ تکنوکرات‌ها برای ارتباط با مجموعه.`
      : `${title} — اطلاعات و محتوای این صفحه از خانهٔ تکنوکرات‌ها.`;
    let description = (descriptionSource?.innerText || fallbackDescription).replace(/\s+/g, " ").trim();
    if (route.startsWith("pattern-") && descriptionSource) description = `${main.querySelector("h1").innerText.trim()}: ${description}`;
    if (description.length < 50 && description !== title) description = `${title} — ${description}`;
    if (description.length > 160) description = `${description.slice(0, 157).replace(/\s+\S*$/, "").trim()}…`;
    document.documentElement.lang = document.documentElement.lang === "en" ? "en" : "fa";
    document.documentElement.dir = document.documentElement.lang === "fa" ? "rtl" : "ltr";
    document.body.dir = document.documentElement.dir;

    const canonicalPath = route === "index.html" ? "/" : `/${route}`;
    const canonical = `${origin}${canonicalPath}`;
    head.querySelectorAll('link[rel="canonical"]').forEach((item) => item.remove());
    const canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = canonical;
    head.append(canonicalLink);

    let robots = head.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      head.append(robots);
    }
    robots.content = route.startsWith("category-") || route.startsWith("pattern-") ? "index,follow" : robots.content || "index,follow";
    const ogType = route.startsWith("article-") ? "article" : "website";
    const metadata = {
      "og:type": ogType,
      "og:site_name": "House of Technocrats",
      "og:title": title,
      "og:description": description,
      "og:url": canonical,
      "og:locale": document.documentElement.lang === "fa" ? "fa_IR" : "en_US",
      "twitter:card": "summary",
      "twitter:title": title,
      "twitter:description": description
    };
    head.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]').forEach((item) => item.remove());
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content = description;
    head.append(descriptionMeta);
    for (const [name, content] of Object.entries(metadata)) {
      const meta = document.createElement("meta");
      if (name.startsWith("og:")) meta.setAttribute("property", name);
      else meta.name = name;
      meta.content = content;
      head.append(meta);
    }

    const crumbNav = main.querySelector("nav.breadcrumbs");
    const crumbs = crumbNav ? Array.from(crumbNav.querySelectorAll("a"), (anchor) => {
      const url = new URL(anchor.getAttribute("href"), `${origin}/`);
      if (url.origin === origin) {
        if (url.pathname === "/index.html") url.pathname = "/";
        url.search = "";
        url.hash = "";
      }
      return { name: anchor.innerText.trim(), item: url.href };
    }) : [];
    const finalCrumb = crumbNav?.lastElementChild?.innerText.trim();
    if (finalCrumb && finalCrumb !== crumbs.at(-1)?.name) crumbs.push({ name: finalCrumb, item: canonical });
    const graph = [
      { "@type": "Organization", "@id": `${origin}/#organization`, name: "House of Technocrats", url: `${origin}/` },
      { "@type": "WebSite", "@id": `${origin}/#website`, url: `${origin}/`, name: "House of Technocrats", inLanguage: ["fa", "en"], publisher: { "@id": `${origin}/#organization` } },
      {
        "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title,
        description, inLanguage: document.documentElement.lang, isPartOf: { "@id": `${origin}/#website` },
        ...(crumbs.length > 1 ? { breadcrumb: { "@id": `${canonical}#breadcrumb` } } : {})
      }
    ];
    if (crumbs.length > 1) graph.push({
      "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`,
      itemListElement: crumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, name: crumb.name, item: crumb.item }))
    });
    if (route.startsWith("article-")) graph.push({
      "@type": "Article", "@id": `${canonical}#article`, headline: title, description,
      mainEntityOfPage: { "@id": `${canonical}#webpage` }, publisher: { "@id": `${origin}/#organization` }
    });
    head.querySelectorAll('script[type="application/ld+json"]').forEach((item) => item.remove());
    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
    head.append(jsonLd);

    if (!head.querySelector('script[data-seo-routes]')) {
      const routeScript = document.createElement("script");
      routeScript.src = "seo-routes.js";
      routeScript.defer = true;
      routeScript.dataset.seoRoutes = "true";
      head.append(routeScript);
    }
  }, { route, origin, categoryRoutes, patternRoutes, publicPeople });
  return staticPage.content();
}

for (const route of existingPages) {
  const attributes = {};
  let query = queryFor(route);
  if (route.startsWith("category-") && route !== "category-continuity-architecture.html") {
    attributes["data-category-id"] = route.slice("category-".length, -".html".length);
  }
  if (route.startsWith("pattern-") && route !== "pattern-modular-survivability.html") {
    attributes["data-pattern-id"] = route.slice("pattern-".length, -".html".length);
  }
  if (route === "category-continuity-architecture.html") attributes["data-category-id"] = "continuity-architecture";
  if (route === "pattern-modular-survivability.html") attributes["data-pattern-id"] = "modular-survivability-architecture";
  const html = await render(route, query, attributes);
  await writeFile(path.join(output, route), await prepareHtml(html, route));
}

for (const category of categories) {
  const route = categoryRoute(category);
  if (existingPages.includes(route)) continue;
  const html = await render("category.html", `?category=${encodeURIComponent(category)}&lang=fa`, { "data-category-id": category });
  await writeFile(path.join(output, route), await prepareHtml(html, route));
}

for (const { category, slug } of patterns) {
  const route = patternRoute(slug);
  if (existingPages.includes(route)) continue;
  const html = await render("pattern.html", `?category=${encodeURIComponent(category)}&pattern=${encodeURIComponent(slug)}&lang=fa`, {
    "data-category-id": category,
    "data-pattern-id": slug
  });
  await writeFile(path.join(output, route), await prepareHtml(html, route));
}

const routeScript = `(() => {
  const categoryRoutes = ${JSON.stringify(categoryRoutes)};
  const patternRoutes = ${JSON.stringify(patternRoutes)};
  const publicPeople = new Set(${JSON.stringify(publicPeople)});
  function canonicalRoute(anchor) {
    const raw = anchor.getAttribute("href");
    if (!raw || raw.startsWith("#")) return;
    let url;
    try { url = new URL(raw, location.href); } catch { return; }
    if (url.origin !== location.origin) return;
    const source = url.pathname.split("/").pop();
    let route = "";
    if (source === "category.html") route = categoryRoutes[url.searchParams.get("category")];
    if (source === "pattern.html") route = patternRoutes[url.searchParams.get("pattern")];
    if (source === "person.html" && publicPeople.has(url.searchParams.get("person"))) route = url.searchParams.get("person") + "-profile.html";
    if (!route) return;
    const query = new URLSearchParams();
    const language = url.searchParams.get("lang");
    if (language === "en" || (source === "person.html" && document.documentElement.lang === "fa")) query.set("lang", language || "fa");
    anchor.setAttribute("href", route + (query.size ? "?" + query : "") + url.hash);
  }
  document.addEventListener("DOMContentLoaded", () => document.querySelectorAll("a[href]").forEach(canonicalRoute));
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a[href]");
    if (anchor) canonicalRoute(anchor);
  }, true);
})();\n`;
await writeFile(path.join(output, "seo-routes.js"), routeScript);

const sitemapUrls = [];
for (const route of await readdir(output)) {
  if (!route.endsWith(".html")) continue;
  const html = await readFile(path.join(output, route), "utf8");
  const robots = html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i)?.[1] || "";
  if (/noindex/i.test(robots)) continue;
  sitemapUrls.push(`${origin}${route === "index.html" ? "/" : `/${route}`}`);
}
sitemapUrls.sort();
if (!sitemapUrls.includes(`${origin}/`)) throw new Error("Sitemap is missing the homepage.");
await writeFile(path.join(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>${url.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</loc></url>`).join("\n")}\n</urlset>\n`);

await browser.close();
console.log(`Built ${existingPages.length} pages and ${sitemapUrls.length} indexable sitemap URLs in dist/.`);
