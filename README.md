# PhyloInk education

**Example teaching activities and adaptable materials for PhyloInk.**

This is a finite showcase of what educators can do with **[PhyloInk — Phylogenetic Tree Editor & Illustrator](https://github.com/EliVHD/phyloink)**. The examples are independent starting points for teachers to adapt, not a full course or a promised sequence of additions. No fixed update or support schedule is offered.

> **Maintenance status:** This finite showcase is **not actively maintained**. If you need ongoing maintenance or different materials, maintain an independent fork. No support response times or release schedule are promised.

## Current application prerelease

The application features below are available in **[PhyloInk 0.1.2-dev.0](https://github.com/EliVHD/phyloink/releases/tag/v0.1.2-dev.0)**, published on 17 November 2026 as a **development prerelease**. Download the [browser ZIP](https://github.com/EliVHD/phyloink/releases/download/v0.1.2-dev.0/phyloink-0.1.2-dev.0-browser.zip) or [source ZIP](https://github.com/EliVHD/phyloink/releases/download/v0.1.2-dev.0/phyloink-0.1.2-dev.0-source.zip); companion SHA256 files and setup instructions are on the release page. The release targets application commit [`c70019d`](https://github.com/EliVHD/phyloink/commit/c70019dbf2fa9f1cefbf2422a4825cf54490303a).

The [2026-11-17 integration record](integration-verification.json) and [teaching-review verification](revisions/2026-11-17-teaching-review/verification.json) describe earlier exact commits/builds. Resource READMEs, dated verification reports and packaged materials retain their historical wording and hashes: statements that a recorded build was unreleased or a feature was proposed describe those original snapshots, not the published application above. Use each recorded build for exact artifact reproduction and the published prerelease for current use.

For current classroom use, read the [teaching-review corrections](revisions/2026-11-17-teaching-review/README.md). They provide the corrected selection worksheet and clarify older teacher notes without replacing historical packs or verification records.

## Choose an example

| Example | What it demonstrates | Downloads |
| --- | --- | --- |
| [01 — Common ancestry and clades](examples/01-common-ancestry/README.md) | Interpret a small selection from a published mammal tree. | [Complete pack](downloads/01-common-ancestry.zip) |
| [02 — One tree, different drawings](examples/02-one-tree/README.md) | Compare the same source relationships and selected taxa in rectangular and circular layouts. | [Complete pack](downloads/02-one-tree.zip) |
| [03 — Evidence-based illustration](examples/03-evidence-based-illustration/README.md) | Prepare and document a selected flowering-plant order diagram. | [Complete pack](downloads/03-evidence-based-illustration.zip) |

Each pack contains a project, student handout in editable and printable forms, teacher answers and adaptation notes, labeled/unlabeled SVGs, scientific source records and verification details. Begin with the README inside the pack. A printed activity can be used without student devices. Open `.treeproject.json` files in PhyloInk to explore or adapt the drawings. Save a separate copy of your work.

## Local interactive scenarios

The [two local Learn scenarios](scenarios/README.md) are the merged A02 examples: six mammals and an invented unresolved fork. They reuse question setups in Learn and save educator adaptations without learner answers or progress. Download either self-contained JSON file and use **Learn → Local activity scenarios → Open scenario**.

Use these files with the published prerelease, which includes the [A02 feature](https://github.com/EliVHD/phyloink/pull/4); historical Clade Studio releases do not include it. The [scenario workflow](https://github.com/EliVHD/phyloink/blob/main/docs/LEARNING-SCENARIOS.md) and [updated Teacher’s Guide](https://github.com/EliVHD/phyloink/blob/main/docs/teachers-guide.md) remain in the application repository. Their exact build, source hashes and browser checks are recorded in [scenario verification](scenarios/verification.json). Existing printable packs stay unchanged.

## Two inheritance walkthroughs

The [merged A03 feature](https://github.com/EliVHD/phyloink/pull/7) provides [two synthetic inheritance walkthroughs](labs/inheritance/README.md): one-locus segregation/genotype versus phenotype, and two-locus independent assortment. A short two-page handout, editable HTML/configuration, teacher answers and adaptation notes accompany explicit manual settings for **Learn → Inheritance lab**. They are independent demonstrations, not a course. Their verification record identifies the original pre-publication build. The published prerelease includes the lab; existing education releases and tree packs remain unchanged. Tree scenario files do not save inheritance setups.

## Two population-evolution walkthroughs

The [merged A04 feature](https://github.com/EliVHD/phyloink/pull/8) provides [two synthetic population walkthroughs](labs/population/README.md): genetic drift and selection with drift at one diploid locus. Explicit manual settings, an editable configuration/HTML handout, two-page PDF, teacher reasoning and model limits accompany the two independent demonstrations. Use their recorded build for exact historical reproduction, or the published prerelease for current use. These are not empirical population estimates, saved lab scenarios, a course or a continuing lesson programme. Existing tree packs, scenarios and inheritance materials remain separate and unchanged.

## One linkage test-cross example

The [merged A06.1 feature](https://github.com/EliVHD/phyloink/pull/10) provides [one adaptable linkage test cross](labs/linkage/README.md): explicit AB/ab × ab/ab chromosomes, a bounded recombination fraction, exact probabilities and seeded offspring. Its editable worksheet handout, native phase diagram, teacher reasoning and verification illustrate phase and finite sampling. Change phase, r or sample settings to adapt the same example. Use its recorded build for exact historical reproduction, or the published prerelease for current use; no chromosome mapping, organism data or continuing lesson collection is implied.

## One bottleneck and recovery example

The [merged A06.2 feature](https://github.com/EliVHD/phyloink/pull/11) provides [one adaptable neutral bottleneck/recovery example](labs/bottleneck/README.md): a 100 → 5 → 100 size schedule and a separate constant-size comparison, complete seeded counts, an editable/printable worksheet, native plots and full condition/generation CSV. Adapt severity, timing, duration or seed within this same example. Recovery cannot recreate absent alleles; one-locus H is not observed genotype or genome-wide diversity. Use its recorded build for exact historical reproduction, or the published prerelease for current use.

## One selection comparison example

The [merged A06.3 feature](https://github.com/EliVHD/phyloink/pull/12) provides [one adaptable selection comparison](labs/selection/README.md). Shared N, starting frequency and horizon hold both conditions fixed while only heterozygote fitness changes: directional A advantage versus heterozygote advantage. Use the [corrected student handout](revisions/2026-11-17-teaching-review/selection/student.pdf) with its [editable HTML](revisions/2026-11-17-teaching-review/selection/student.html) and [educator correction notes](revisions/2026-11-17-teaching-review/teacher-notes.md). Its comparison question explicitly requires Learn's no-drift references; the printed figures contain finite trials only. The original figures, complete count CSV and teacher reasoning remain applicable. This is a revision of the same example; the original handout and recorded build remain available for historical reproduction.

## Export your own worksheet

The [merged A05 feature](https://github.com/EliVHD/phyloink/pull/9) provides an [adaptation/export workflow](worksheet-export/README.md) for these existing resources. In Learn, use **Create worksheet** to edit prompts/instructions, preview A4/Letter and download separate student and teacher packages. Current/kept tree questions and current synthetic lab settings are supported; learner responses/progress and editor artwork are excluded. Printable offline HTML, editable text/SVG and exact source/model/hash context keep the work reusable. The workflow records its tested application build and preserves existing packs/handouts rather than adding more lessons. Both authoritative guides remain in the application repository.

## Guides and other trees

The release-matched authoritative [usage guide](https://github.com/EliVHD/phyloink/blob/v0.1.2-dev.0/public/guide.html) and [Teacher's Guide](https://github.com/EliVHD/phyloink/blob/v0.1.2-dev.0/docs/teachers-guide.md) remain in the application repository. Both are included offline in the built application. Its header's **Guides** link opens the usage guide, which links to the Teacher's Guide.

The [annotated Newick directory](sources/README.md) gives educators additional starting points, with scientific context, preparation notes, stated reuse terms and verification status. It is a dated reference collection. Downloading a file does not establish that it is suitable for a lesson or compatible with the application.

## Scope and scientific care

The examples were checked against the exact pre-publication **PhyloInk 0.1.2-dev.0** commits/builds in their records. The same version is now available as the published development prerelease linked above; a shared version string does not make earlier build identities identical to the release. Older Clade Studio releases retain their own names and release records. See the [integration record](integration-verification.json) for the earlier combined build and [historical compatibility and verification](VERIFICATION.md) for the original records. Imported projects preserve their scientific sources and may need text remeasurement on another device. Geometry QA does not authenticate biological conclusions.

Selected trees show only sampled taxa. Branch placement is nonmetric in these examples. Preserve rooting explanations, source selection, omitted memberships and limitations when adapting them. Learn's local tree scenarios, A03 inheritance lab, A04 population lab and A05 worksheet export are integrated on main, with their original development checks retained. A06.1 linkage/recombination, A06.2 bottleneck/recovery and A06.3 selection comparisons are also integrated, with separate original verification records; any further advanced experiment still requires an explicit product decision. Synthetic labs do not infer genotypes or empirical populations from a tree.

## Reuse

Our original text, activity configuration and helper code use [0BSD](LICENSE). Scientific datasets retain their own terms: the mammal source is CC0; the Kew source is CC BY 4.0. Attribution, source versions and modifications accompany each example in `SOURCES.md`. These terms do not grant rights to unrelated publisher figures. See [contribution guidance](CONTRIBUTING.md) before changing a resource.

Prepared files work independently after downloading. No account, student tracking, backend or automatic external data fetch is part of these packs.
