# GenAI Index

Static GenAI media models/platforms directory.

## Local Development

```bash
npm run dev
```

Open `http://127.0.0.1:4173/`.

## Data Flow

- `data/catalog.json` is the curated source of truth.
- `data/sources.json` lists public pages and model terms to watch.
- `npm run update:sources` fetches those pages and writes `data/source-status.json`.
- `npm run build` generates `data/catalog.generated.js`.
- `index.html` reads `window.GENAI_CATALOG` from `data/catalog.generated.js`.

## Common Commands

```bash
npm run build
npm run update:sources
npm run update
```

Some public sites block automated fetches. Those failures are recorded in `data/source-status.json` instead of blocking the site build.
