import { readFile, writeFile } from "node:fs/promises";

const indexUrl = new URL("../index.html", import.meta.url);
let html = await readFile(indexUrl, "utf8");

if (!html.includes('src="data/catalog.generated.js"')) {
  html = html.replace(
    "\n  <script>",
    '\n  <script src="data/catalog.generated.js"></script>\n  <script>'
  );
}

const start = html.indexOf("    const models = [");
const end = html.indexOf("    function normalize", start);
if (start === -1 || end === -1) {
  throw new Error("Could not find inline catalog block.");
}

const replacement = `    const catalog = window.GENAI_CATALOG;\n    if (!catalog) {\n      throw new Error("Missing generated catalog data. Run npm run build.");\n    }\n\n    const { models, platforms, pricingEvents, updates, matrixPlatforms, availability } = catalog;\n\n`;

html = `${html.slice(0, start)}${replacement}${html.slice(end)}`;

await writeFile(indexUrl, html);
console.log("index.html now reads from data/catalog.generated.js.");
