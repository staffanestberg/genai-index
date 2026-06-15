import { readFile, writeFile, mkdir } from "node:fs/promises";

const sources = JSON.parse(await readFile(new URL("../data/sources.json", import.meta.url), "utf8"));

async function inspectSource(source) {
  const startedAt = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), source.timeoutMs || 8000);

  try {
    const response = await fetch(source.url, {
      signal: controller.signal,
      headers: {
        "user-agent": "GenAI Index source checker (+https://staffanestberg.com)"
      }
    });
    const text = await response.text();
    const lower = text.toLowerCase();
    const matches = Object.fromEntries(
      (source.watchTerms || []).map(term => [term, lower.includes(term.toLowerCase())])
    );

    return {
      id: source.id,
      name: source.name,
      url: source.url,
      ok: response.ok,
      status: response.status,
      checkedAt: new Date().toISOString(),
      durationMs: Date.now() - startedAt,
      matches
    };
  } catch (error) {
    return {
      id: source.id,
      name: source.name,
      url: source.url,
      ok: false,
      error: error.message,
      checkedAt: new Date().toISOString(),
      durationMs: Date.now() - startedAt,
      matches: {}
    };
  } finally {
    clearTimeout(timeout);
  }
}

const results = [];
for (const source of sources) {
  results.push(await inspectSource(source));
}

const status = {
  checkedAt: new Date().toISOString(),
  ok: results.every(result => result.ok),
  results
};

await mkdir(new URL("../data", import.meta.url), { recursive: true });
await writeFile(
  new URL("../data/source-status.json", import.meta.url),
  `${JSON.stringify(status, null, 2)}\n`
);

const failures = results.filter(result => !result.ok);
console.log(`Checked ${results.length} sources. ${failures.length} failed.`);
if (failures.length) {
  process.exitCode = 1;
}
