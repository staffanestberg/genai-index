import { readFile, writeFile, mkdir } from "node:fs/promises";

const catalogUrl = new URL("../data/catalog.json", import.meta.url);
const outputUrl = new URL("../data/catalog.generated.js", import.meta.url);
const sourceStatusUrl = new URL("../data/source-status.json", import.meta.url);

const catalog = JSON.parse(await readFile(catalogUrl, "utf8"));

let sourceStatus = null;
try {
  sourceStatus = JSON.parse(await readFile(sourceStatusUrl, "utf8"));
} catch {
  sourceStatus = null;
}

catalog.metadata = {
  ...catalog.metadata,
  lastBuiltAt: new Date().toISOString(),
  sourceStatus
};

await mkdir(new URL("../data", import.meta.url), { recursive: true });
await writeFile(
  outputUrl,
  `window.GENAI_CATALOG = ${JSON.stringify(catalog, null, 2)};\n`
);

console.log(`Built data/catalog.generated.js with ${catalog.models.length} models and ${catalog.platforms.length} platforms.`);
