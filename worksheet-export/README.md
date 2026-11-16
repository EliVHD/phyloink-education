# Adapt existing materials with worksheet export

This is an adaptation workflow for the existing examples, not another lesson collection. In the [A05 application change](https://github.com/EliVHD/phyloink/pull/9), **Learn → Create worksheet** uses educators' own prompts with current/kept tree questions or current synthetic lab settings. The exact unreleased application commit/build is recorded in [verification.json](verification.json); earlier releases do not include this feature. The authoritative usage and Teacher's Guides remain in the application repository and are available through **Guides**. See the [worksheet workflow and limits](https://github.com/EliVHD/phyloink/blob/b1bae13b74511cd7d2ee49b641d1aa2d25afaa90/docs/WORKSHEETS.md) for this exact build.

## Reuse a setup already here

- Open either [local tree scenario](../scenarios/README.md) in Learn. Use its current configured question or choose all kept questions in the worksheet dialog. Exact taxa/source identities, rotations, unresolved forks and omitted descendants remain linked to the original source.
- For [inheritance](../labs/inheritance/README.md), enter the manual parents, offspring count and seed from the existing configuration, then create a worksheet. Optional count tables are regenerated from that setup; current learner predictions/feedback are not copied.
- For [population evolution](../labs/population/README.md), use the recorded manual N, initial A copies, fitness, horizon, trial count and seed. Optional student plots show finite trials, while teacher plots add the no-drift reference. Printed tables explicitly show selected generations and CSV retains all generations.

Use the setup and citations you actually intend to teach. Do not reinterpret abstract lab parameters as observations of organisms in the phylogeny. Tree questions still require an appropriate declared root; synthetic labs are independent of the supplied tree.

## Author, review and distribute

1. Choose **Create worksheet** and the question scope. Current question includes unkept setup edits; all kept uses only kept questions. Changing scope resets worksheet prompts. These edits do not change Learn's stored question setups.
2. Write your title, student instructions, prompts and teacher-only notes. Choose A4 or Letter, blank answer lines and optional tip codes/data. Default source/model references answer the configured task rather than interpreting your custom prose; review them and add your own answers/adaptations to teacher notes.
3. **Prepare preview**, check both audiences and any draft findings, then download the student and teacher ZIPs separately. Keep teacher ZIPs private to the educator: they contain configured references, notes and an authoring record. Student packages exclude those fields and all learner responses/progress. Underlying source/model data remain available for reasoning; this is not a secure examination system.
4. Open the exported HTML locally and use Print / Save as PDF at 100% on the selected paper. Plain text and SVGs are editable. Review every printed page, including long prompts, tables and source notes. Fonts/geometry findings apply to the export browser. Oversized tree figures reject instead of shrinking labels; try codes, a smaller sample or explicit shorter display labels.
5. Keep source/mapping/citation/rights information and exact manifests with your educator copy. Tree ZIPs include the complete source, so review terms before sharing. Original data keep their separate rights, user text keeps its own rights, and template/software contributions are 0BSD. External edits invalidate the recorded file hashes; regenerate or refresh the inventory for a revised distribution.

Worksheet context/authoring JSON files document the export; they are not importable project/scenario formats. There is no worksheet reimport, autosave or learner tracking. Save a tree scenario to retain its underlying reusable question setup; lab settings can be copied from the exported context record manually. Returning to the editor discards temporary worksheet/lab drafts without changing artwork or history.

## Verification and scope

The [dated record](verification.json) identifies the application build, measured browser checks, twelve module/audience/paper print cases and existing resource hashes. `node tools/verify-worksheet-workflow.mjs --app /path/to/phyloink` checks those resource hashes, build identity and setup-derived audience-separated lab packages. It does not replace actual browser font measurement or print review. No new pre-made lesson, tree project, data source, PDF pack or runtime dependency is added here. The original tree packs, scenarios, inheritance and population handouts and their historical verification records remain unchanged. The collection stays finite, with no continuing content or support commitment.
