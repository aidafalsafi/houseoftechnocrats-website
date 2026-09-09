const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

const diagrams = [
  ["site-information-architecture-en.html", "site-information-architecture-en.png"],
  ["site-information-architecture-fa.html", "site-information-architecture-fa.png"],
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  try {
    for (const [source, output] of diagrams) {
      const page = await browser.newPage({
        viewport: { width: 4200, height: 2200 },
        deviceScaleFactor: 1.25,
      });

      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(pathToFileURL(path.join(__dirname, source)).href, {
        waitUntil: "load",
      });
      await page.evaluate(() => document.fonts.ready);

      const metrics = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
        viewport: [window.innerWidth, window.innerHeight],
        overflowingNodes: [...document.querySelectorAll(".tree-node, .cross-label")]
          .filter((element) => element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight)
          .map((element) => ({
            className: element.className,
            text: element.innerText.replace(/\s+/g, " ").slice(0, 80),
            client: [element.clientWidth, element.clientHeight],
            scroll: [element.scrollWidth, element.scrollHeight],
          })),
      }));

      await page.screenshot({
        path: path.join(__dirname, output),
        type: "png",
        fullPage: false,
      });

      process.stdout.write(`${output}: ${JSON.stringify(metrics)}\n`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})();
