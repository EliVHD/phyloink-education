# Adapting or correcting an example

These examples are starting points, not a curriculum. Fork or copy a pack and adapt its organisms, questions, diagram complexity or classroom format to your learners. Choose a new question before adding more taxa.

For an existing example, keep the source and its terms together. Record a changed selection, display-label shortening, rooting assumption or layout separately from the unchanged Newick input. Cite the original study and the exact dataset version. Make expected answers match the relationships actually represented.

Keep editable originals with printable exports. Check a handout at its intended print size, retain text descriptions, and avoid color-only distinctions. Record the application version and date used for verification. Keep student-facing tasks and teacher answers in clearly named files.

Corrections can improve this bounded collection; there is no commitment to accepting new lessons or maintaining a release cadence. Our original contributions use 0BSD. Included third-party data retain the rights recorded in each example's SOURCES.md; do not blanket-relicense them.

## Example convention

- `README.md`: question, purpose, prerequisites, files and adaptation route.
- `activity.json`: editable student introduction, questions, diagram placement and caption.
- `student-handout.pdf` and `student-handout.html`: printable and editable presentations.
- `teacher-notes.md`: answers, misconceptions and suggested variations.
- `project.treeproject.json`: editable project with source and saved views.
- `artwork/`: labeled and unlabeled SVGs for each accepted layout.
- `source.nwk`, `SOURCES.md`, `source-record.json`: exact input, citations, terms and transformations.
- `verification.json` and `manifest.json`: checks and SHA256 inventory.

The included tools verify and package existing examples without network access. Recreating projects requires an explicit PhyloInk checkout and browser-measured labels. Source and render operations belong in the record; changing generated artifacts alone is not a scientific update.

## Synthetic lab walkthroughs

The two inheritance walkthroughs in `labs/inheritance/` use explicit manual application settings, an editable handout configuration, printable HTML/PDF, teacher notes, sources/assumptions, LICENSE and an exact inventory/verification record. They have no empirical tree or genotype dataset; do not invent a Newick source, artwork SVG or project to imply otherwise. Their `activity.json` is an authoring configuration, not an application import format. Keep the two demonstrations bounded, test their parameters and expected outcomes in the recorded application build, render both PDF pages, and preserve the existing tree packs and scenario files.

The same convention applies to the two A04 walkthroughs in `labs/population/`. Verify exact allele counts, seeded trajectories, references and generation limits against their recorded build; do not treat a random path as a guaranteed answer. Keep all older verification dates, source records, artifacts and hashes unchanged when adding a separately verified lab.

A06.1 linkage adds one explicitly phased test-cross configuration, an application-generated editable/printable worksheet, native phase SVG, teacher reasoning and exact verification/inventory. Keep homozygous-marker ambiguity, the 50% model versus finite-sample distinction and nonmetric marker spacing explicit. Preserve older packs/handouts and their recorded builds.

A06.2 adds one bounded neutral bottleneck/recovery example, with explicit size schedules, complete condition/trial/generation CSV, native plots and an application-generated worksheet. Review dynamic-size count conservation, absorbing frequencies through recovery, separate streams and one-locus diversity limits. Preserve exact exported CSV bytes and all earlier materials/verification records.

## Worksheet adaptations

Use the A05 workflow in `worksheet-export/` to adapt existing questions/settings rather than expanding a course. Keep student and teacher exports separate; omit learner responses/progress and private pictures. Review configured reference answers against your own wording, retain complete source/citation/rights records and inspect printed pages. Export records are not application import formats; editing payloads invalidates their old hashes. Do not regenerate historical packs or overwrite their verification records merely to demonstrate the new exporter.
