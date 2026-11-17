# Verification record — 2026-11-11

This is a checked snapshot of three independent examples, not a continuously maintained course. Each example's verification.json records the exact application source commit, build ID, browser version, source hash, selected identities, ancestor checks and saved views.

## Application and guides

The application changes are proposed in [PhyloInk PR 2](https://github.com/EliVHD/phyloink/pull/2), working version **0.1.2-dev.0**. Main has not been merged and no new release has been published. Both authoritative guides remain in that repository. The README links to their immutable tested source commit so it does not depend on the PR being merged.

- Strict TypeScript checking and 239 application regression tests passed.
- Browser checks covered the new header, usage/Teacher's Guide links, contents anchors and local guide links at desktop and narrow widths.
- An existing V3 project opened and saved as V4 with unchanged source records.
- Browser/source archives passed inventory checks. The extracted source archive installed locked dependencies from cache, type-checked and rebuilt to the same build identity.
- Scientific inputs, historical fixtures and old release notes were preserved as exact Git bytes. New Git attributes prevent Windows line-ending conversion of reviewed scientific inputs.

## Example materials

All three projects were authored with the application's browser modules and real browser font measurements. Their four accepted views report checked geometry. Each project was then opened in the application, all its saved structured views selected, saved again and exported. Source records and accepted scenes remained unchanged. New export names use the PhyloInk prefix.

The two mammal examples use the same complete Upham S3 input and the same six source tip identities. Their displayed graphs are identical across layouts. Teacher answers are checked by following source ancestors and counting represented and full-source descendants. The plant example uses six order records from the unchanged Kew order tree, with 63 source tips omitted from the drawing.

The three student PDFs contain four A4 pages in total. They were rendered with Poppler and visually inspected for readable labels, clipping, overlap, source notes and page flow. Each includes a text description of the represented relationships. Editable HTML and activity JSON accompany them. Static diagrams remain available as SVGs.

The verification/packaging tool checks source hashes and embedded content, selected memberships, paired SVG branch artwork, geometry status, local links, exact archive inventories and ZIP payload hashes. Each pack includes the original-content license and its separate scientific source terms.

## Newick directory

Fish Tree of Life's RAxML file and an Open Tree five-taxon subtree passed both parser and actual browser import/save checks, preserving their Newick contents and hashes. The exact tested files and preparation steps are recorded in sources/import-checks.json. Raw external test downloads are not bundled in this repository.

The Insect Phylogeny Database version 2 endpoint could not be retrieved during review. It remains a clearly labeled untested candidate; no compatibility or selected-version licensing claim is made for that unavailable file. Ensembl, GTDB and TreeHub are documentation-based starting points, not import-tested datasets. TimeTree is a teaching-use link only; its data and transformations are excluded from distribution.

## Limits and adaptation

The live workflow was tested in Microsoft Edge on Windows. Other browsers, fonts or application versions were not certified. Recheck a newly generated layout on the device used for teaching. Saved geometry and source records are distinct from a guarantee about every renderer.

Geometry checks are not biological validation. These examples retain one source hypothesis and incomplete sampling. They do not infer relationships, dates or traits. No future Learn, inheritance, population or worksheet-generator feature is required or claimed.

The main repository's changes remain in a draft PR for owner review. Existing release tags/assets are unchanged. Further corrections or additions are deliberate decisions, with no scheduled update programme.

## A02 local scenarios — 2026-11-11

Two self-contained scenario files are proposed as a separate development addition. Their [verification record](scenarios/verification.json) pins application commit 7cee4a249a60ec5876db12c29fe58f458e8662c9, build fa547e0c299b1ae2185e8409c7eae5cce3d461e88bc0905c1c284a1e2054b2da, source hashes and actual Edge checks. Both open, calculate feedback, replay complete-subtree rotations and save/reopen exactly. Question adaptation, invalid-file isolation, literal HTML-like text, a 390-pixel-wide page and an exactly unchanged saved editor document/SVG passed. No external requests or browser exceptions occurred. Strict application checking/build and all 253 tests passed; the source archive rebuilt identically offline.

The six-mammal file embeds the same complete reviewed Upham source as examples 01/02; the second embeds an entirely invented unresolved A–E topology. Source-based explanations and visible educator notes accompany both. No new provider dataset, PDF, project, SVG or existing ZIP pack was regenerated. Their original archive/PDF hashes are retained in the new record and checked by the scenario verifier. These two demonstrations are not a course or update schedule.
