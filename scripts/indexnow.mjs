import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

export const HOST = "houseoftechnocrats.ir";
export const ORIGIN = `https://${HOST}`;
export const ENDPOINT = "https://api.indexnow.org/indexnow";
export const KEY = "37dda4f7ee42472da5e825c239300add";
export const KEY_FILE = `${KEY}.txt`;
export const KEY_LOCATION = `${ORIGIN}/${KEY_FILE}`;

export function validateKey(key, filename, contents) {
  assert.match(key, /^[A-Za-z0-9-]{8,128}$/, "IndexNow key must contain 8–128 allowed characters");
  assert.equal(filename, `${key}.txt`, "IndexNow key filename must match the key");
  assert.equal(contents, key, "IndexNow key file must contain exactly the key");
}

export function validateUrl(value) {
  const url = new URL(value);
  assert.equal(url.protocol, "https:", `IndexNow URL must use HTTPS: ${value}`);
  assert.equal(url.hostname, HOST, `IndexNow URL must belong to ${HOST}: ${value}`);
  assert.equal(url.username + url.password + url.search + url.hash, "", `IndexNow URL must be canonical: ${value}`);
  assert.ok(url.pathname === "/" || url.pathname.endsWith(".html"), `IndexNow URL is not a public page: ${value}`);
  return url.href;
}

export function diffManifests(previous, current) {
  if (!previous) return { initialized: true, added: [], updated: [], deleted: [], urls: [] };
  const before = previous.pages || {};
  const after = current.pages || {};
  const added = Object.keys(after).filter((url) => !before[url]);
  const updated = Object.keys(after).filter((url) => before[url] && before[url] !== after[url]);
  const deleted = Object.keys(before).filter((url) => !after[url]);
  const urls = [...new Set([...added, ...updated, ...deleted].map(validateUrl))].sort();
  return { initialized: false, added: added.sort(), updated: updated.sort(), deleted: deleted.sort(), urls };
}

export function makePayload(urls) {
  const urlList = [...new Set(urls.map(validateUrl))].sort();
  assert.ok(urlList.length > 0 && urlList.length <= 10_000, "IndexNow batches must contain 1–10,000 URLs");
  return { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
}

export async function submitUrls(urls, options = {}) {
  const fetchImpl = options.fetchImpl || fetch;
  const sleep = options.sleep || ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  const logger = options.logger || console;
  const payload = makePayload(urls);
  let response;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    response = await fetchImpl(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    });
    logger.log(JSON.stringify({ event: "indexnow_submission", time: new Date().toISOString(), urlCount: payload.urlList.length, status: response.status, attempt: attempt + 1 }));
    if ([200, 202].includes(response.status)) return response.status;
    if (![429, 500, 502, 503, 504].includes(response.status) || attempt === 3) {
      const body = (await response.text()).slice(0, 500);
      throw new Error(`IndexNow rejected ${payload.urlList.length} URL(s) with HTTP ${response.status}${body ? `: ${body}` : ""}`);
    }
    await sleep(500 * 2 ** attempt);
  }
}

async function pageHash(page, target) {
  const response = await page.goto(target, { waitUntil: "domcontentloaded" });
  const content = await page.evaluate(() => {
    const normalize = (value) => (value || "").replace(/\s+/g, " ").trim();
    const main = document.querySelector("main");
    const canonical = document.querySelector('link[rel="canonical"]')?.href || "";
    return {
      lang: document.documentElement.lang,
      dir: document.documentElement.dir,
      title: normalize(document.title),
      description: document.querySelector('meta[name="description"]')?.content || "",
      canonical,
      robots: document.querySelector('meta[name="robots"]')?.content || "",
      headings: Array.from(main?.querySelectorAll("h1,h2,h3,h4,h5,h6") || [], (node) => `${node.tagName}:${normalize(node.textContent)}`),
      text: normalize(main?.textContent),
      links: [...new Set(Array.from(main?.querySelectorAll("a[href]") || [], (node) => new URL(node.getAttribute("href"), canonical).href))].sort(),
      images: Array.from(main?.querySelectorAll("img") || [], (node) => [node.getAttribute("src") || "", node.getAttribute("alt") || ""])
    };
  });
  return { response, content, hash: createHash("sha256").update(JSON.stringify(content)).digest("hex") };
}

async function generateManifest(directory, target) {
  const keyContents = await readFile(path.join(directory, KEY_FILE), "utf8");
  validateKey(KEY, KEY_FILE, keyContents);
  const sitemap = await readFile(path.join(directory, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replaceAll("&amp;", "&"));
  assert.ok(urls.length > 0, "sitemap.xml has no URLs");
  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_BIN ? { executablePath: process.env.CHROME_BIN } : {}) });
  const page = await browser.newPage({ javaScriptEnabled: false });
  const pages = {};
  try {
    for (const value of urls) {
      const url = validateUrl(value);
      const route = new URL(url).pathname === "/" ? "index.html" : decodeURIComponent(new URL(url).pathname.slice(1));
      const { content, hash } = await pageHash(page, pathToFileURL(path.join(directory, route)).href);
      assert.equal(content.canonical, url, `${route} canonical does not match the sitemap`);
      assert.doesNotMatch(content.robots, /noindex/i, `${route} is noindex and must not be submitted`);
      pages[url] = hash;
    }
  } finally {
    await browser.close();
  }
  await writeFile(target, `${JSON.stringify({ version: 1, pages }, null, 2)}\n`);
  console.log(`Created IndexNow manifest for ${Object.keys(pages).length} public URLs.`);
}

async function verifyProduction(diff, current) {
  let keyVerified = false;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch(KEY_LOCATION, { redirect: "manual", cache: "no-store" });
    const body = await response.text();
    keyVerified = response.status === 200 && /^text\/plain\b/i.test(response.headers.get("content-type") || "") && body === KEY;
    if (keyVerified) break;
    await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt));
  }
  assert.ok(keyVerified, "Production IndexNow key is unavailable, has the wrong MIME type, or does not match");
  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_BIN ? { executablePath: process.env.CHROME_BIN } : {}) });
  const page = await browser.newPage({ javaScriptEnabled: false });
  try {
    for (const url of [...diff.added, ...diff.updated]) {
      let live;
      for (let attempt = 0; attempt < 4; attempt += 1) {
        live = await pageHash(page, url);
        if (live.response?.status() === 200 && live.hash === current.pages[url]) break;
        await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt));
      }
      assert.equal(live?.response?.status(), 200, `${url} is not live with HTTP 200`);
      assert.equal(live.hash, current.pages[url], `${url} is still serving stale or unexpected content`);
      assert.match(live.response.headers()["content-type"] || "", /^text\/html\b/i, `${url} must serve HTML`);
    }
  } finally {
    await browser.close();
  }
  for (const url of diff.deleted) {
    let response;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      response = await fetch(url, { redirect: "manual", cache: "no-store" });
      if ([301, 302, 307, 308, 404, 410].includes(response.status)) break;
      await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt));
    }
    assert.ok([301, 302, 307, 308, 404, 410].includes(response.status), `${url} must return a redirect, 404, or 410 before deletion notification (received ${response.status})`);
    if ([301, 302, 307, 308].includes(response.status)) validateUrl(new URL(response.headers.get("location"), url).href);
  }
  console.log(`Verified the production key and ${diff.urls.length} changed URL(s).`);
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (command === "manifest") return generateManifest(args[0] || "dist", args[1] || "indexnow-current.json");
  if (command === "diff") {
    const current = JSON.parse(await readFile(args[1] || "indexnow-current.json", "utf8"));
    let previous = null;
    try { previous = JSON.parse(await readFile(args[0] || "indexnow-previous.json", "utf8")); } catch (error) { if (error.code !== "ENOENT") throw error; }
    const diff = diffManifests(previous, current);
    await writeFile(args[2] || "indexnow-diff.json", `${JSON.stringify(diff, null, 2)}\n`);
    console.log(diff.initialized ? "Initialized IndexNow baseline without submitting existing URLs." : `Detected ${diff.urls.length} changed public URL(s).`);
    return;
  }
  if (command === "verify") return verifyProduction(
    JSON.parse(await readFile(args[0] || "indexnow-diff.json", "utf8")),
    JSON.parse(await readFile(args[1] || "indexnow-current.json", "utf8"))
  );
  if (command === "submit") {
    const diff = JSON.parse(await readFile(args[0] || "indexnow-diff.json", "utf8"));
    if (!diff.urls.length) return console.log("No changed public URLs to submit to IndexNow.");
    const status = await submitUrls(diff.urls);
    return console.log(`IndexNow accepted ${diff.urls.length} changed URL(s); HTTP ${status}. Acceptance does not guarantee indexing.`);
  }
  throw new Error("Usage: node scripts/indexnow.mjs <manifest|diff|verify|submit> [files]");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch((error) => { console.error(error.message); process.exitCode = 1; });
