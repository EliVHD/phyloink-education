# Optional authoring and packaging tools

Downloaded examples work without these tools. Use them only when regenerating or verifying the repository's materials.

`verify-and-package.py` uses Python's standard library, makes no network requests, verifies reviewed example contents and links, and recreates the three ZIPs and inventories. It requires the recorded browser and print checks to have passed.

```sh
python3 tools/verify-and-package.py
```

To recreate projects, supply an explicit checkout of the PhyloInk source commit recorded in verification.json. Build and serve it locally first. This optional authoring helper needs Node.js 22.18 or later, Playwright, and an installed Edge browser. Install authoring dependencies separately; they are not included in the packs or required by the app.

```sh
node tools/prepare-projects.mjs --app /path/to/phyloink --url http://127.0.0.1:4173
node tools/render-handouts.mjs
python3 tools/render-handouts.py
```

The last command needs ReportLab. `render-handouts.mjs` produces 300 dpi temporary figure PNGs with the browser; the Python helper creates printable handouts from the same activity.json. Review every rendered PDF page after any meaningful content/layout change. An optional `--playwright-module /path/to/playwright/index.mjs` argument allows an already installed Playwright module to be used without changing repository dependencies.

Prepare geometry in the browser, not only in a Node process: different JavaScript engines can produce tiny trigonometric differences that affect strict saved-scene replay. Font measurement alone is not sufficient to establish browser compatibility. Open, save and export the resulting project in the actual application before changing its verification record.

Regeneration changes document/operation identities and may change geometry with different browser fonts. Keep the resulting source/method/export records, repeat scientific answer checks, update the verification snapshot honestly, and rebuild archive inventories. Do not label an arbitrary regenerated file as reviewed just because it parses.
