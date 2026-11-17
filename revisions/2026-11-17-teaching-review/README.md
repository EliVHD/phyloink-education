# Teaching-review corrections — 17 November 2026

This revision corrects wording in the existing finite showcase. It adds no lesson or scientific mechanism. Original packs, source data, handouts, manifests and verification records remain unchanged.

## Selection worksheet for current use

Use [student.pdf](selection/student.pdf), [editable student HTML](selection/student.html) or [editable questions](selection/student.txt) in place of the original selection handout. The [student package instructions](selection/README.txt) explain local printing. Keep the full `selection/` folder together when distributing editable materials. It contains both finite-trial figures and all 328 count records; its student files contain no teacher answers or educator notes.

Question 2 now explicitly requires **Learn → Selection comparisons**: enter the printed settings, run both conditions, and compare the dashed no-drift references with the finite paths. The printed student figures deliberately show finite paths only. Students therefore need access to PhyloInk for this question; a teacher can instead supply the reference curves as question inputs for a paper-only adaptation. Do not distribute the teacher answer package to supply those curves.

The setup is unchanged: N = 100, initial A copies = 100, 40 generations, four trials per condition, seed 1; S1 AA/Aa/aa weights 1.2/1.1/1 and S2 1.2/1.4/1. [Activity configuration](selection-activity.json) is an editable authoring record, not an application import format. Original [teacher reasoning](../../labs/selection/teacher-notes.md) and [sources/assumptions](../../labs/selection/SOURCES.md) still apply, with the wording qualifications in [teacher-notes.md](teacher-notes.md).

To adapt this revision, use those settings in Learn, choose **Create worksheet**, and copy the title, instructions and three prompts from the activity configuration. Select A4, three answer lines and included data. Preview student and teacher versions separately, export the student package, and print its HTML at 100%. Review every page after edits. The [verification record](verification.json) identifies the exact application build and source changes used here; the [inventory](manifest.json) covers the revised files, including the PDF. Original records describe their original builds.

## Corrections to older teacher notes

Read [teacher-notes.md](teacher-notes.md) alongside the original one-tree, population, bottleneck and selection materials. It clarifies the implemented Learn workflow and the difference between an unreliable estimate from a few trials, a bounded-horizon outcome, and eventual fixation or loss.

The authoritative usage and Teacher's Guides remain in the [application repository](https://github.com/EliVHD/phyloink). The first ancestry activity now keeps one focal taxon fixed, allowing students to compare nested common ancestors or recognize equal relatedness without inferring ages from page spacing.

Original contributions use [0BSD](../../LICENSE). No empirical source, model parameters, seeded counts or scientific data rights changed. This remains an educator-adaptable example, not a course or continuing content commitment.
