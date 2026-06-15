import { readFile, writeFile, mkdir } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

function extractConst(name, nextName) {
  const start = html.indexOf(`const ${name} =`);
  if (start === -1) throw new Error(`Could not find const ${name}`);
  const valueStart = html.indexOf("=", start) + 1;
  const endNeedle = nextName ? `const ${nextName} =` : "function normalize";
  const end = html.indexOf(endNeedle, valueStart);
  if (end === -1) throw new Error(`Could not find end for const ${name}`);
  const source = html.slice(valueStart, end).trim().replace(/;\s*$/, "");
  return Function(`"use strict"; return (${source});`)();
}

const catalog = {
  metadata: {
    name: "GenAI Index",
    description: "Track GenAI models, platforms, pricing, and availability in one place. Updated daily.",
    extractedAt: new Date().toISOString()
  },
  models: extractConst("models", "platforms"),
  platforms: extractConst("platforms", "pricingEvents"),
  pricingEvents: extractConst("pricingEvents", "updates"),
  updates: extractConst("updates", "matrixPlatforms"),
  matrixPlatforms: extractConst("matrixPlatforms", "availability"),
  availability: extractConst("availability", null)
};

await mkdir(new URL("../data", import.meta.url), { recursive: true });
await writeFile(
  new URL("../data/catalog.json", import.meta.url),
  `${JSON.stringify(catalog, null, 2)}\n`
);

console.log(`Extracted ${catalog.models.length} models and ${catalog.platforms.length} platforms.`);
