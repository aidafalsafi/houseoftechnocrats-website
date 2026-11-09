import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { diffManifests, ENDPOINT, HOST, KEY, KEY_FILE, KEY_LOCATION, makePayload, submitUrls, validateKey, validateUrl } from "./indexnow.mjs";

const a = "https://houseoftechnocrats.ir/a.html";
const b = "https://houseoftechnocrats.ir/b.html";
const c = "https://houseoftechnocrats.ir/c.html";

test("validates the supplied key, filename, exact contents, and public location", async () => {
  const contents = await readFile(KEY_FILE, "utf8");
  validateKey(KEY, KEY_FILE, contents);
  assert.equal(KEY_LOCATION, `https://${HOST}/${KEY}.txt`);
  assert.throws(() => validateKey(KEY, KEY_FILE, `${contents}\n`));
});

test("detects new, meaningfully updated, deleted, and duplicate URLs", () => {
  const diff = diffManifests({ pages: { [a]: "old", [b]: "same" } }, { pages: { [a]: "new", [b]: "same", [c]: "new" } });
  assert.deepEqual(diff.updated, [a]);
  assert.deepEqual(diff.added, [c]);
  assert.deepEqual(diff.deleted, []);
  assert.deepEqual(diff.urls, [a, c]);
  assert.deepEqual(diffManifests({ pages: { [a]: "old" } }, { pages: {} }).deleted, [a]);
});

test("initializes an absent baseline and handles empty changes without submission", () => {
  assert.deepEqual(diffManifests(null, { pages: { [a]: "hash" } }).urls, []);
  assert.deepEqual(diffManifests({ pages: { [a]: "hash" } }, { pages: { [a]: "hash" } }).urls, []);
});

test("rejects noncanonical, foreign, asset, and query URLs", () => {
  for (const url of ["http://houseoftechnocrats.ir/a.html", "https://example.com/a.html", `${a}?x=1`, "https://houseoftechnocrats.ir/site.css"]) assert.throws(() => validateUrl(url));
});

test("formats and de-duplicates the official batch request", () => {
  assert.deepEqual(makePayload([b, a, b]), { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: [a, b] });
});

test("logs success and retries rate limits with bounded backoff", async () => {
  const requests = [];
  const delays = [];
  const logs = [];
  const responses = [new Response("", { status: 429 }), new Response("", { status: 200 })];
  const status = await submitUrls([a], {
    fetchImpl: async (url, request) => { requests.push({ url, request }); return responses.shift(); },
    sleep: async (delay) => delays.push(delay),
    logger: { log: (line) => logs.push(JSON.parse(line)) }
  });
  assert.equal(status, 200);
  assert.equal(requests[0].url, ENDPOINT);
  assert.equal(requests[0].request.headers["content-type"], "application/json; charset=utf-8");
  assert.deepEqual(JSON.parse(requests[0].request.body), makePayload([a]));
  assert.deepEqual(delays, [500]);
  assert.deepEqual(logs.map(({ status: value }) => value), [429, 200]);
});

test("does not retry permanent validation errors", async () => {
  let attempts = 0;
  await assert.rejects(submitUrls([a], { fetchImpl: async () => { attempts += 1; return new Response("invalid", { status: 422 }); }, logger: { log() {} } }), /HTTP 422/);
  assert.equal(attempts, 1);
});

test("workflow deploys before verification/submission and protects the baseline", async () => {
  const workflow = await readFile(".github/workflows/deploy.yml", "utf8");
  const deploy = workflow.indexOf("name: Deploy website");
  const verify = workflow.indexOf("name: Verify production and notify IndexNow");
  assert.ok(deploy > 0 && verify > deploy);
  assert.match(workflow, /concurrency:\s+[\s\S]*cancel-in-progress: false/);
  assert.match(workflow, /verify indexnow-diff\.json indexnow-current\.json && node scripts\/indexnow\.mjs submit/);
  assert.match(workflow, /aws s3 cp indexnow-current\.json s3:\/\/houseoftechnocrats\/\.indexnow\/manifest\.json/);
});
