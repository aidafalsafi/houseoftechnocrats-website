import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const output = path.join(process.cwd(), "dist");
const origin = "https://houseoftechnocrats.ir";
const robots = await readFile(path.join(output, "robots.txt"), "utf8");
const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
const contentTypes = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain", ".xml": "application/xml", ".woff2": "font/woff2", ".ttf": "font/ttf" };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const route = pathname === "/" ? "index.html" : pathname.slice(1);
    const filename = path.resolve(output, route);
    if (!filename.startsWith(`${output}${path.sep}`)) throw new Error("Invalid path");
    const contents = await readFile(filename);
    response.writeHead(200, { "Content-Type": contentTypes[path.extname(filename)] || "application/octet-stream" });
    response.end(contents);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Not Found");
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
server.unref();
const localOrigin = `http://127.0.0.1:${server.address().port}`;
const robotsResponse = await fetch(`${localOrigin}/robots.txt`);
assert.equal(robotsResponse.status, 200, "robots.txt must return HTTP 200");
assert.match(robotsResponse.headers.get("content-type") || "", /^text\/plain\b/i);
assert.equal(await robotsResponse.text(), robots);
const sitemapResponse = await fetch(`${localOrigin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, "sitemap.xml must return HTTP 200");
assert.match(sitemapResponse.headers.get("content-type") || "", /^(application|text)\/xml\b/i);
assert.equal(await sitemapResponse.text(), sitemap);
const missingResponse = await fetch(`${localOrigin}/not-a-real-route.html`);
assert.equal(missingResponse.status, 404, "missing files must not use a homepage fallback");
assert.doesNotMatch(robots, /<!doctype\s+html|<html/i, "robots.txt must be plain text");
assert.match(robots, /^Sitemap: https:\/\/houseoftechnocrats\.ir\/sitemap\.xml\s*$/m);
assert.doesNotMatch(robots, /^\s*Disallow:\s*\/\s*$/im, "search crawlers must not be blocked");
assert.doesNotMatch(robots, /^User-agent:\s*GPTBot\s*$/im, "GPTBot training policy must remain unchanged");
const robotGroups = robots.split(/\n(?=User-agent:)/i);
for (const agent of ["OAI-SearchBot", "PerplexityBot", "Claude-SearchBot", "Googlebot", "Bingbot", "*"]) {
  const section = robotGroups.find((group) => group.split(/\r?\n/)[0].split(":")[1]?.trim().toLowerCase() === agent.toLowerCase()) || "";
  assert.match(section, /^Allow:\s*\/\s*$/im, `${agent} must be allowed to crawl`);
}

const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_BIN ? { executablePath: process.env.CHROME_BIN } : {})
});
const page = await browser.newPage({ javaScriptEnabled: false });
await page.setContent(sitemap, { waitUntil: "domcontentloaded" });
const sitemapError = await page.evaluate((xml) => new DOMParser().parseFromString(xml, "application/xml").querySelector("parsererror")?.textContent || "", sitemap);
assert.equal(sitemapError, "", `sitemap.xml must be valid XML: ${sitemapError}`);
const urls = await page.locator("urlset > url > loc").allTextContents();
assert.ok(urls.length > 0, "sitemap must contain public routes");
assert.equal(new Set(urls).size, urls.length, "sitemap must not contain duplicate URLs");
assert.ok(urls.includes(`${origin}/`), "sitemap must include the homepage");

const titles = new Map();
const descriptions = new Map();
const htmlRoutes = (await readdir(output)).filter((route) => route.endsWith(".html"));
const sitemapRouteSet = new Set(urls.map((url) => new URL(url).pathname === "/" ? "index.html" : decodeURIComponent(new URL(url).pathname.slice(1))));
const checks = [];
for (const url of urls) {
  const parsedUrl = new URL(url);
  assert.equal(parsedUrl.origin, origin, `${url} must use the canonical production host`);
  assert.equal(parsedUrl.search, "", `${url} must not contain tracking or state query parameters`);
  const route = parsedUrl.pathname === "/" ? "index.html" : decodeURIComponent(parsedUrl.pathname.slice(1));
  assert.ok(htmlRoutes.includes(route), `${url} must map to a real build output file`);
  const response = await page.goto(`${localOrigin}/${route}`, { waitUntil: "domcontentloaded" });
  assert.equal(response?.status(), 200, `${url} must be served by the local static build`);
  const details = await page.evaluate(() => {
    const canonical = document.querySelector('link[rel="canonical"]')?.href;
    const robots = document.querySelector('meta[name="robots"]')?.content || "";
    const jsonLd = Array.from(document.querySelectorAll('script[type="application/ld+json"]'), (item) => JSON.parse(item.textContent));
    const main = document.querySelector("main");
    const title = document.title.trim();
    const description = document.querySelector('meta[name="description"]')?.content || "";
    const internalLinks = Array.from(document.querySelectorAll("a[href]"), (anchor) => anchor.href)
      .filter((href) => new URL(href, location.href).origin === location.origin && /\.html(?:$|[?#])/.test(new URL(href, location.href).pathname));
    return {
      title,
      description,
      canonical,
      robots,
      lang: document.documentElement.lang,
      dir: document.documentElement.dir,
      h1: main?.querySelectorAll("h1").length || 0,
      textLength: main?.innerText.trim().length || 0,
      emptyApp: Boolean(document.querySelector("#app") && !document.querySelector("#app").children.length),
      skipLink: Boolean(document.body.firstElementChild?.matches('.seo-skip-link[href="#main-content"]')),
      mainId: main?.id,
      missingAlt: document.querySelectorAll("img:not([alt])").length,
      descriptions: Array.from(document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]'), (item) => item.content),
      openGraph: ["og:type", "og:title", "og:site_name", "og:url"].every((name) => document.querySelector(`meta[property="${name}"]`)),
      twitter: Boolean(document.querySelector('meta[name="twitter:card"]') && document.querySelector('meta[name="twitter:title"]')),
      schemaTypes: jsonLd.flatMap((data) => data["@graph"] || []).flatMap((item) => Array.isArray(item["@type"]) ? item["@type"] : [item["@type"]]),
      breadcrumbUrls: jsonLd.flatMap((data) => data["@graph"] || []).filter((item) => item["@type"] === "BreadcrumbList").flatMap((item) => item.itemListElement.map((crumb) => crumb.item)),
      internalLinks,
      unlabeledControls: Array.from(main?.querySelectorAll('input:not([type="hidden"]), textarea, select, button') || []).filter((control) => {
        const ids = (control.getAttribute("aria-labelledby") || "").split(/\s+/).filter(Boolean);
        const labelledBy = ids.length && ids.every((id) => document.getElementById(id)?.innerText.trim());
        const externalLabel = control.id && document.querySelector(`label[for="${CSS.escape(control.id)}"]`);
        return !(control.getAttribute("aria-label") || labelledBy || control.closest("label") || externalLabel || control.innerText?.trim() || control.title);
      }).length,
      noindex: /noindex/i.test(robots)
    };
  });
  assert.ok(details.title, `${route} needs a title`);
  assert.ok(details.description.length >= 50 && details.description.length <= 160, `${route} needs a useful 50–160 character description`);
  assert.equal(details.canonical, url, `${route} canonical must match its sitemap URL`);
  assert.equal(details.h1, 1, `${route} must have one primary heading`);
  assert.ok(details.textLength > 50, `${route} must have crawlable main content without JavaScript`);
  assert.equal(details.emptyApp, false, `${route} must not be an empty JavaScript shell`);
  assert.ok(details.skipLink && details.mainId === "main-content", `${route} needs a keyboard skip link and main target`);
  assert.equal(details.lang === "fa" ? details.dir === "rtl" : details.lang === "en" && details.dir === "ltr", true, `${route} language and direction must agree`);
  assert.equal(details.missingAlt, 0, `${route} has an image missing alt text`);
  assert.equal(details.unlabeledControls, 0, `${route} has an interactive control without an accessible name`);
  assert.ok(details.openGraph && details.twitter, `${route} needs Open Graph and Twitter metadata`);
  assert.deepEqual(details.descriptions, [details.description, details.description], `${route} social descriptions must match the page`);
  assert.ok(details.schemaTypes.includes("Organization") && details.schemaTypes.includes("WebPage"), `${route} needs organization and page structured data`);
  for (const breadcrumbUrl of details.breadcrumbUrls) {
    const item = new URL(breadcrumbUrl);
    assert.equal(item.origin, origin, `${route} breadcrumb items must use the canonical host`);
    assert.equal(item.search, "", `${route} breadcrumb items must not contain query parameters`);
    assert.notEqual(item.pathname, "/index.html", `${route} breadcrumb items must not reference the duplicate homepage URL`);
  }
  assert.equal(details.noindex, false, `${route} must be indexable because it is in the sitemap`);
  if (route.startsWith("article-")) assert.ok(details.schemaTypes.includes("Article"), `${route} needs Article structured data`);
  if (titles.has(details.title)) throw new Error(`Duplicate title "${details.title}" on ${titles.get(details.title)} and ${route}`);
  titles.set(details.title, route);
  if (descriptions.has(details.description)) throw new Error(`Duplicate description on ${descriptions.get(details.description)} and ${route}`);
  descriptions.set(details.description, route);
  for (const href of details.internalLinks) {
    const target = new URL(href);
    const targetRoute = decodeURIComponent(target.pathname.split("/").pop());
    assert.ok(htmlRoutes.includes(targetRoute), `${route} links to missing page ${targetRoute}`);
  }
  checks.push(route);
}

for (const route of htmlRoutes) {
  await page.goto(`${localOrigin}/${route}`, { waitUntil: "domcontentloaded" });
  const audit = await page.evaluate(() => ({
    noindex: /noindex/i.test(document.querySelector('meta[name="robots"]')?.content || ""),
    hasMain: Boolean(document.querySelector("main")),
    h1Count: document.querySelectorAll("main h1").length,
    hasSkipLink: Boolean(document.body.firstElementChild?.matches('.seo-skip-link[href="#main-content"]')),
    hasEmptyApp: Boolean(document.querySelector("#app") && !document.querySelector("#app").children.length),
    description: document.querySelector('meta[name="description"]')?.content || ""
  }));
  const noindex = audit.noindex;
  assert.ok(audit.hasMain, `${route} needs a main landmark`);
  assert.equal(audit.h1Count, 1, `${route} needs one primary heading`);
  assert.ok(audit.hasSkipLink, `${route} needs a skip link before navigation`);
  assert.equal(audit.hasEmptyApp, false, `${route} must not be an empty JavaScript shell`);
  assert.ok(audit.description.length >= 50 && audit.description.length <= 160, `${route} needs a useful description`);
  if (/noindex/i.test(noindex)) assert.ok(!sitemapRouteSet.has(route), `${route} must stay out of sitemap`);
}
assert.equal(htmlRoutes.filter((route) => /^category-.+\.html$/.test(route)).length, 16, "all 16 category pages must be generated");
assert.equal(htmlRoutes.filter((route) => /^pattern-.+\.html$/.test(route)).length, 32, "all 32 pattern pages must be generated");
for (const route of ["search.html", "membership.html", "participation-confirmation.html", "category.html", "pattern.html", "person.html"]) {
  assert.ok(!sitemapRouteSet.has(route), `${route} must remain out of sitemap`);
}
for (const route of [
  "ia-diagrams/proposed-information-architecture-en.html",
  "ia-diagrams/proposed-information-architecture-fa.html",
  "ia-diagrams/site-information-architecture-en.html",
  "ia-diagrams/site-information-architecture-fa.html"
]) {
  assert.match(await readFile(path.join(output, route), "utf8"), /<meta\s+name="robots"\s+content="noindex,follow"/i, `${route} must remain outside search indexing`);
}

for (const route of ["index.html", "continuity.html", "article-technical-recovery.html", "category-continuity-architecture.html", "pattern-modular-survivability.html"]) {
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${localOrigin}/${route}`, { waitUntil: "domcontentloaded" });
    const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    assert.ok(documentWidth <= width + 1, `${route} overflows horizontally at ${width}px (document width ${documentWidth}px)`);
  }
}

const runtime = await browser.newPage();
const runtimeErrors = [];
runtime.on("pageerror", (error) => runtimeErrors.push(error.message));
await runtime.goto(`${localOrigin}/`, { waitUntil: "domcontentloaded" });
await runtime.locator('a[href="category-continuity-architecture.html"]').first().click();
await runtime.waitForURL(/category-continuity-architecture\.html/);
await runtime.locator("a.record-pattern-card").first().click();
await runtime.waitForURL(/pattern-modular-survivability\.html/);
await runtime.locator(".language-toggle").click();
await runtime.waitForURL(/pattern-modular-survivability\.html\?lang=en/);
assert.equal(await runtime.locator("html").getAttribute("lang"), "en", "language toggle must keep working on stable pattern routes");
assert.equal(await runtime.locator("main h1").count(), 1, "stable routes must render their page content with JavaScript enabled");
assert.deepEqual(runtimeErrors, [], `runtime navigation raised browser errors: ${runtimeErrors.join("; ")}`);
await browser.close();
await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
console.log(`SEO checks passed for ${checks.length} indexable pages, ${htmlRoutes.length} HTML routes, robots.txt, sitemap.xml, responsive widths, and route/language navigation.`);
