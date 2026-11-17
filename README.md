# PhyloInk education

**Example teaching activities and adaptable materials for PhyloInk.**

This is a finite showcase of what educators can do with **[PhyloInk — Phylogenetic Tree Editor & Illustrator](https://github.com/EliVHD/phyloink)**. The examples are independent starting points for teachers to adapt, not a full course or a promised sequence of additions. No fixed update or support schedule is offered.

## Choose an example

| Example | What it demonstrates | Downloads |
| --- | --- | --- |
| [01 — Common ancestry and clades](examples/01-common-ancestry/README.md) | Interpret a small selection from a published mammal tree. | [Complete pack](downloads/01-common-ancestry.zip) |
| [02 — One tree, different drawings](examples/02-one-tree/README.md) | Compare the same source relationships and selected taxa in rectangular and circular layouts. | [Complete pack](downloads/02-one-tree.zip) |
| [03 — Evidence-based illustration](examples/03-evidence-based-illustration/README.md) | Prepare and document a selected flowering-plant order diagram. | [Complete pack](downloads/03-evidence-based-illustration.zip) |

Each pack contains a project, student handout in editable and printable forms, teacher answers and adaptation notes, labeled/unlabeled SVGs, scientific source records and verification details. Begin with the README inside the pack. A printed activity can be used without student devices. Open `.treeproject.json` files in PhyloInk to explore or adapt the drawings. Save a separate copy of your work.

## Local interactive scenarios

The [two local Learn scenarios](scenarios/README.md) are a separate A02 development addition: six mammals and an invented unresolved fork. They reuse question setups in Learn and save educator adaptations without learner answers or progress. Download either self-contained JSON file and use **Learn → Local activity scenarios → Open scenario**.

These files require the tested A02 [development change](https://github.com/EliVHD/phyloink/pull/4), not a historical Clade Studio release. The [scenario workflow](https://github.com/EliVHD/phyloink/blob/7cee4a249a60ec5876db12c29fe58f458e8662c9/docs/LEARNING-SCENARIOS.md) and [updated Teacher’s Guide](https://github.com/EliVHD/phyloink/blob/7cee4a249a60ec5876db12c29fe58f458e8662c9/docs/teachers-guide.md) remain in the application repository. Their exact build, source hashes and browser checks are recorded in [scenario verification](scenarios/verification.json). Existing printable packs stay unchanged.

## Two inheritance walkthroughs

The [A03 development addition](https://github.com/EliVHD/phyloink/pull/7) provides [two synthetic inheritance walkthroughs](labs/inheritance/README.md): one-locus segregation/genotype versus phenotype, and two-locus independent assortment. A short two-page handout, editable HTML/configuration, teacher answers and adaptation notes accompany explicit manual settings for **Learn → Inheritance lab**. They are independent demonstrations, not a course. They require the exact unreleased application build in their verification record; existing releases and tree packs remain unchanged. Tree scenario files do not save inheritance setups.

## Two population-evolution walkthroughs

The [A04 development addition](https://github.com/EliVHD/phyloink/pull/8) provides [two synthetic population walkthroughs](labs/population/README.md): genetic drift and selection with drift at one diploid locus. Explicit manual settings, an editable configuration/HTML handout, two-page PDF, teacher reasoning and model limits accompany the two independent demonstrations. Use the exact unreleased application build in their verification record. These are not empirical population estimates, saved lab scenarios, a course or a continuing lesson programme. Existing tree packs, scenarios and inheritance materials remain separate and unchanged.

## One linkage test-cross example

The [A06.1 development addition](https://github.com/EliVHD/phyloink/pull/10) provides [one adaptable linkage test cross](labs/linkage/README.md): explicit AB/ab × ab/ab chromosomes, a bounded recombination fraction, exact probabilities and seeded offspring. Its editable worksheet handout, native phase diagram, teacher reasoning and verification illustrate phase and finite sampling. Change phase, r or sample settings to adapt the same example. Use its recorded unreleased application build; no chromosome mapping, organism data or continuing lesson collection is implied.

## One bottleneck and recovery example

The [A06.2 development addition](https://github.com/EliVHD/phyloink/pull/11) provides [one adaptable neutral bottleneck/recovery example](labs/bottleneck/README.md): a 100 → 5 → 100 size schedule and a separate constant-size comparison, complete seeded counts, an editable/printable worksheet, native plots and full condition/generation CSV. Adapt severity, timing, duration or seed within this same example. Recovery cannot recreate absent alleles; one-locus H is not observed genotype or genome-wide diversity. Use its recorded unreleased application build.

## Export your own worksheet

The [A05 development addition](https://github.com/EliVHD/phyloink/pull/9) provides an [adaptation/export workflow](worksheet-export/README.md) for these existing resources. In Learn, use **Create worksheet** to edit prompts/instructions, preview A4/Letter and download separate student and teacher packages. Current/kept tree questions and current synthetic lab settings are supported; learner responses/progress and editor artwork are excluded. Printable offline HTML, editable text/SVG and exact source/model/hash context keep the work reusable. The workflow records its tested application build and preserves existing packs/handouts rather than adding more lessons. Both authoritative guides remain in the application repository.

## Guides and other trees

For the checked development build, the authoritative [usage guide](https://github.com/EliVHD/phyloink/blob/f5578e7a1bedb0c8b051130f3cc22a3a63a8fb84/public/guide.html) and [Teacher's Guide](https://github.com/EliVHD/phyloink/blob/f5578e7a1bedb0c8b051130f3cc22a3a63a8fb84/docs/teachers-guide.md) remain in the application repository. Both are included offline in the built application. Its header's **Guides** link opens the usage guide, which links to the Teacher's Guide.

The [annotated Newick directory](sources/README.md) gives educators additional starting points, with scientific context, preparation notes, stated reuse terms and verification status. It is a dated reference collection. Downloading a file does not establish that it is suitable for a lesson or compatible with the application.

## Scope and scientific care

Examples are checked with **PhyloInk 0.1.2-dev.0**, an unreleased development build. Older Clade Studio releases retain their own names and release records. See [compatibility and verification](VERIFICATION.md) for the exact application commit/build and checks. Imported projects preserve their scientific sources and may need text remeasurement on another device. Geometry QA does not authenticate biological conclusions.

Selected trees show only sampled taxa. Branch placement is nonmetric in these examples. Preserve rooting explanations, source selection, omitted memberships and limitations when adapting them. Learn's local tree scenarios, A03 inheritance lab, A04 population lab and A05 worksheet export are implemented in their recorded development changes. A06.1 linkage/recombination and A06.2 bottleneck/recovery are separately recorded; any further advanced experiment still requires explicit selection. Synthetic labs do not infer genotypes or empirical populations from a tree.

## Reuse

Our original text, activity configuration and helper code use [0BSD](LICENSE). Scientific datasets retain their own terms: the mammal source is CC0; the Kew source is CC BY 4.0. Attribution, source versions and modifications accompany each example in `SOURCES.md`. These terms do not grant rights to unrelated publisher figures. See [contribution guidance](CONTRIBUTING.md) before changing a resource.

Prepared files work independently after downloading. No account, student tracking, backend or automatic external data fetch is part of these packs.
