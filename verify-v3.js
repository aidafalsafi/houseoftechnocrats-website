const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { fileURLToPath, pathToFileURL } = require("url");

const root = __dirname;

function pageUrl(file, params = {}) {
  const url = new URL(pathToFileURL(path.join(root, file)).href);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.href;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

(async () => {
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const runtimeErrors = [];
  const checks = [];

  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") runtimeErrors.push(message.text());
  });

  async function check(name, callback) {
    await callback();
    checks.push(name);
  }

  await check("Home exposes the eight top-level IA branches", async () => {
    await page.goto(pageUrl("index.html", { lang: "en" }));
    const labels = await page.locator(".desktop-nav > a, .desktop-nav > .nav-dropdown > button").evaluateAll((nodes) =>
      nodes.map((node) => node.textContent.trim().replace(/\s+/g, " "))
    );
    ["Continuity", "Deep Blue Radar", "Insights", "Technocratic Thinking", "The House", "People", "Technocratic Service Store", "About Us"].forEach((label) => {
      assert(labels.includes(label), `Missing top-level branch: ${label}`);
    });
    assert(labels.length === 8, `Expected 8 top-level branches, found ${labels.length}`);
    await page.screenshot({ path: path.join(root, "qa-v3-home-en.png"), fullPage: true });
  });

  await check("Radar navigation opens the unified Radar page", async () => {
    await page.goto(pageUrl("index.html", { lang: "en" }));
    assert(await page.locator("#radar-menu").count() === 0, "Radar still renders a dropdown menu");
    assert(await page.locator('a.nav-link[href="radar.html"]').count() === 1, "Radar is not a direct top-level link");
    await page.locator('a.nav-link[href="radar.html"]').click();
    await page.waitForURL(/radar\.html/);
    assert(await page.locator(".radar-wheel").count() === 1, "Unified Radar page does not show the rotating 16-part radar");
    assert(await page.locator(".radar-compact-card").count() === 16, "Unified Radar page does not show 16 Category cards");
    assert(await page.locator(".radar-report-card").count() === 1, "Unified Radar page does not show reports");
    assert(await page.locator(".radar-participate-section").count() === 1, "Unified Radar page does not show the participation CTA");
  });

  await check("Simplified top navigation matches the requested V3 structure", async () => {
    await page.goto(pageUrl("index.html", { lang: "en" }));
    const insights = await page.locator("#insights-menu a").evaluateAll((links) => links.map((link) => [link.textContent.trim(), link.getAttribute("href")]));
    assert(insights.length === 3, `Expected 3 Insights routes, found ${insights.length}`);
    assert(insights.map((item) => item[1]).join("|") === "podcast-ecosystem.html|video-core-banking.html|toolkit-gamecast.html", "Insights routes are incorrect");
    assert(await page.locator("#thinking-menu").count() === 0, "Technocratic Thinking still has a dropdown");
    assert(await page.locator('a.nav-link[href="technocratic-thinking.html"]').count() === 1, "Technocratic Thinking is not a direct link");
    const house = await page.locator("#house-menu a").evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    assert(house.join("|") === "house.html|participate.html", `Unexpected House menu: ${house.join("|")}`);
    assert(await page.locator("#services-menu").count() === 0, "Technocratic Service Store still has a dropdown");
    assert(await page.locator('a.nav-link[href="services.html"]').count() === 1, "Technocratic Service Store is not a direct link");
  });

  await check("Only one desktop dropdown can be open at a time", async () => {
    await page.goto(pageUrl("index.html", { lang: "en" }));
    await page.locator('[aria-controls="insights-menu"]').click();
    assert(await page.locator("#insights-menu").getAttribute("hidden") === null, "Insights dropdown did not open");
    await page.locator('[aria-controls="house-menu"]').click();
    assert(await page.locator("#insights-menu").getAttribute("hidden") !== null, "Insights dropdown stayed open after House opened");
    assert(await page.locator("#house-menu").getAttribute("hidden") === null, "House dropdown did not open");
  });

  await check("Secondary pages use full-width content without sidebar or hero metadata", async () => {
    for (const file of ["continuity.html", "radar.html", "radar-view.html", "reports.html", "technocratic-thinking.html", "services.html", "people.html"]) {
      await page.goto(pageUrl(file, { lang: "en" }));
      assert(await page.locator(".inner-sidebar").count() === 0, `${file} still renders a sidebar`);
      assert(await page.locator(".inner-meta").count() === 0, `${file} still renders hero metadata`);
      const columns = await page.locator(".inner-layout").evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length);
      assert(columns === 1, `${file} content is not full width`);
    }
  });

  await check("Single-page Thinking and Service Store retain their requested sections", async () => {
    await page.goto(pageUrl("technocratic-thinking.html", { lang: "en" }));
    const thinkingHeadings = await page.locator(".inner-section > h2").evaluateAll((nodes) => nodes.map((node) => node.textContent.trim()));
    ["About the Technocratic Book", "About the Technocratic Method"].forEach((heading) => {
      assert(thinkingHeadings.includes(heading), `Technocratic Thinking is missing ${heading}`);
    });
    await page.goto(pageUrl("services.html", { lang: "en" }));
    const serviceHeadings = await page.locator(".inner-section > h2").evaluateAll((nodes) => nodes.map((node) => node.textContent.trim()));
    ["Current Services", "Future Services"].forEach((heading) => {
      assert(serviceHeadings.includes(heading), `Service Store is missing ${heading}`);
    });
  });

  await check("Explorer contains a 4 by 4 linked Category card grid", async () => {
    await page.goto(pageUrl("radar-view.html", { lang: "en" }));
    const cards = page.locator(".radar-category-card");
    assert(await cards.count() === 16, `Explorer does not contain 16 Category cards, found ${await cards.count()}`);
    assert(await page.locator(".radar-preview").count() === 0, "Explorer still renders the removed preview panel");
    assert(await page.locator(".radar-category-card img").count() === 16, "Category cards do not all include images");
    const columns = await cards.nth(0).evaluate((card) => {
      const grid = card.closest(".radar-category-card-grid");
      return getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length;
    });
    assert(columns === 4, `Expected 4 columns in the desktop Category grid, found ${columns}`);
    await page.screenshot({ path: path.join(root, "qa-v3-radar-en.png"), fullPage: true });
    await Promise.all([
      page.waitForURL(/category\.html\?category=hardware-supply/),
      cards.nth(7).click(),
    ]);
    assert((await page.locator("h1").textContent()).includes("Hardware Supply"), "Category card did not open its Category record");
    assert(await page.locator(".record-pattern-card").count() === 2, "Category record does not show its two Patterns");
    await Promise.all([
      page.waitForURL(/pattern\.html\?category=hardware-supply/),
      page.locator(".record-pattern-card").first().click(),
    ]);
    assert(await page.locator(".pattern-record-layout").count() === 1, "Pattern card did not open its Pattern record");
  });

  await check("New IA branches render their intended child routes", async () => {
    const expected = {
      "technocratic-thinking.html": "Technocratic Thinking",
      "reports.html": "Reports & Updates",
      "technocratic-book.html": "About the Technocratic Book",
      "technocratic-method.html": "About the Technocratic Method",
      "house.html": "About the House",
      "house-packages.html": "Our Packages",
      "house-events.html": "Our Events",
      "services.html": "Technocratic Service Store",
      "current-services.html": "Current Services",
      "future-services.html": "Future Services",
      "about-us.html": "About Us",
      "toolkit-gamecast.html": "Toolkit Hossein",
    };
    for (const [file, heading] of Object.entries(expected)) {
      await page.goto(pageUrl(file, { lang: "en" }));
      const text = (await page.locator("h1").textContent()).trim();
      assert(text.includes(heading), `${file} rendered the wrong heading: ${text}`);
    }
  });

  await check("House exposes About, Packages, Events and Participate", async () => {
    await page.goto(pageUrl("house.html", { lang: "en" }));
    const hrefs = await page.locator("a.content-item").evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    ["house-packages.html", "house-events.html", "participate.html"].forEach((href) => {
      assert(hrefs.includes(href), `House branch is missing ${href}`);
    });
  });

  await check("Participation exposes the four routes in the IA", async () => {
    await page.goto(pageUrl("participate.html", { lang: "en" }));
    const routes = page.locator(".content-list .content-item");
    assert(await routes.count() === 4, `Expected 4 participation routes, found ${await routes.count()}`);
    const hrefs = await routes.evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    ["invitation.html", "membership.html", "referral.html", "join-conversation.html"].forEach((href) => {
      assert(hrefs.includes(href), `Participation route is missing ${href}`);
    });
  });

  await check("People directory is a linked gallery of unique portraits", async () => {
    await page.goto(pageUrl("people.html", { lang: "en" }));
    const cards = page.locator(".people-gallery-card");
    assert(await cards.count() === 8, `Expected 8 people cards, found ${await cards.count()}`);
    const galleryData = await cards.evaluateAll((items) => items.map((card) => ({
      href: card.getAttribute("href"),
      image: card.querySelector("img")?.getAttribute("src"),
      name: card.querySelector("h3")?.textContent.trim()
    })));
    assert(new Set(galleryData.map((item) => item.href)).size === 8, "People cards do not have unique profile links");
    assert(new Set(galleryData.map((item) => item.image)).size === 8, "People cards do not use unique portraits");
    assert(galleryData.every((item) => item.href.includes("person=")), "A people card does not link to a specific profile");
    const contained = await cards.evaluateAll((items) => items.every((card) => {
      const frame = card.querySelector(".person-photo");
      const image = frame && frame.querySelector("img");
      if (!frame || !image) return false;
      const f = frame.getBoundingClientRect();
      const i = image.getBoundingClientRect();
      return i.left >= f.left - 1 && i.top >= f.top - 1 && i.right <= f.right + 1 && i.bottom <= f.bottom + 1;
    }));
    assert(contained, "A people portrait escapes its card");
    await page.screenshot({ path: path.join(root, "qa-v3-people-en.png"), fullPage: true });
  });

  await check("Person profile contains the requested profile fields and contained image", async () => {
    await page.goto(pageUrl("person.html", { person: "leila-rahimi", lang: "en" }));
    assert((await page.locator("h1").textContent()).includes("Leila Rahimi"), "Selected person name was not rendered");
    assert(await page.locator(".person-profile-photo img").count() === 1, "Person portrait is missing");
    assert((await page.locator(".person-profile-photo img").getAttribute("src")).includes("people-portrait-02.png"), "Selected person portrait was not rendered");
    const bounds = await page.locator(".person-profile-photo").evaluate((frame) => {
      const image = frame.querySelector("img");
      const f = frame.getBoundingClientRect();
      const i = image.getBoundingClientRect();
      return { contained: i.left >= f.left - 1 && i.top >= f.top - 1 && i.right <= f.right + 1 && i.bottom <= f.bottom + 1 };
    });
    assert(bounds.contained, "Person portrait escapes its card");
    const body = await page.locator("body").innerText();
    const normalizedBody = body.toLowerCase();
    ["Role", "Occupation", "Biography", "Podcasts, videocasts and articles", "People referrals"].forEach((label) => {
      assert(normalizedBody.includes(label.toLowerCase()), `Person profile is missing ${label}. Visible text: ${body.slice(0, 900)}`);
    });
    await page.goto(pageUrl("person.html", { person: "leila-rahimi" }));
    assert((await page.locator("h1").textContent()).includes("لیلا رحیمی"), "Selected person name was not localized in Persian");
  });

  await check("Persian navigation and new pages are RTL and localized", async () => {
    await page.goto(pageUrl("technocratic-thinking.html"));
    assert(await page.locator("html").getAttribute("dir") === "rtl", "Persian page is not RTL");
    assert((await page.locator("h1").textContent()).includes("تفکر تکنوکراتیک"), "Persian Technocratic Thinking title is not localized");
    const navText = await page.locator(".mobile-panel").innerText();
    ["تفکر تکنوکراتیک", "فروشگاه خدمات", "دربارهٔ ما"].forEach((label) => {
      assert(navText.includes(label), `Persian navigation is missing ${label}`);
    });
    await page.screenshot({ path: path.join(root, "qa-v3-thinking-fa.png"), fullPage: true });
  });

  await check("Key mobile pages have no horizontal overflow", async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const file of ["index.html", "radar.html", "radar-view.html", "reports.html", "category.html", "pattern.html", "technocratic-thinking.html", "people.html", "person.html", "services.html", "participate.html"]) {
      await page.goto(pageUrl(file));
      const size = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }));
      assert(size.scrollWidth <= size.clientWidth + 1, `${file} overflows on mobile: ${size.scrollWidth}px > ${size.clientWidth}px`);
      if (file === "people.html") await page.screenshot({ path: path.join(root, "qa-v3-people-mobile-fa.png"), fullPage: true });
    }
    await page.screenshot({ path: path.join(root, "qa-v3-mobile-fa.png"), fullPage: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
  });

  await check("Every V3 HTML page renders and local links resolve", async () => {
    const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith(".html"));
    const missingTargets = [];
    for (const file of htmlFiles) {
      await page.goto(pageUrl(file, { lang: "en" }));
      assert((await page.locator("body").innerText()).trim().length > 0, `${file} rendered an empty page`);
      const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((link) => link.href));
      hrefs.forEach((href) => {
        const url = new URL(href);
        if (url.protocol === "file:" && !fs.existsSync(fileURLToPath(url))) missingTargets.push(`${file} -> ${url.pathname}`);
      });
    }
    assert(missingTargets.length === 0, `Missing local targets: ${missingTargets.join(" | ")}`);
  });

  assert(runtimeErrors.length === 0, `Runtime errors: ${runtimeErrors.join(" | ")}`);
  await browser.close();
  process.stdout.write(JSON.stringify({ ok: true, checks, screenshots: ["qa-v3-home-en.png", "qa-v3-radar-en.png", "qa-v3-people-en.png", "qa-v3-people-mobile-fa.png", "qa-v3-thinking-fa.png", "qa-v3-mobile-fa.png"] }, null, 2));
})().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exit(1);
});
