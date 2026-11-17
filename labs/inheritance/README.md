# Two inheritance walkthroughs

These are independent starting points for educators using **Learn → Inheritance lab** in the A03 PhyloInk development change. Choose either walkthrough and adapt its questions. There is no required sequence, full course, student tracking or commitment to more lessons.

## Start

Use the exact application commit/build in [verification.json](verification.json). The canonical usage and Teacher's Guides remain in that application checkout, available through **Guides**. Historical Clade Studio releases and the earlier tree-scenario build do not include this lab.

1. Open **Learn → Inheritance lab**. Choose **Try Aa × Aa** for segregation or **Try AaBb × AaBb** for independent assortment.
2. Use the questions in the [editable HTML handout](student-handout.html) or [two-page PDF](student-handout.pdf). Predict before **Check reasoning / Explain cross**.
3. Sample 32 offspring with seed 1, then adapt the size or seed. Each click restarts that trial; identical settings reproduce the same sample. All offspring enter the totals, while at most the first 64 genotypes are displayed.
4. Use [teacher notes](teacher-notes.md) for expected answers, limitations and suggested variations.

The two crosses are synthetic autosomal complete-dominance models. Two loci are explicitly assumed independent. They use no organism observations or traits inferred from a phylogeny. Read [assumptions and sources](SOURCES.md) before adapting them. A seed provides repeatability, not saved progress or a statistical guarantee that counts will match a ratio.

## Files and adaptation

`activity.json` is an editable handout authoring configuration, **not a file to open in the application**. It records manual control settings, student text and questions, with no learner responses. `student-handout.html` is a standalone printable/editable presentation; `student-handout.pdf` contains the same two pages. Teacher answers remain in `teacher-notes.md`. `manifest.json` lists exact files, sizes and SHA256 hashes; `LICENSE` covers our original contributions.

Lab controls, predictions and samples are temporary. Switching Learn modules keeps temporary practice, but returning to the editor discards it. The existing `.phyloink-activity.json` tree-scenario format does not store these lab setups. These walkthroughs therefore supply explicit manual settings and printable questions rather than a tree project, SVG or Newick file. No empirical tree or genotype dataset is needed or implied. The existing three tree packs and their source records are separate and unchanged.

To regenerate the handouts, run `python tools/render-inheritance.py` from the repository root with ReportLab installed. Verify with `node tools/verify-inheritance.mjs --app /path/to/phyloink`, then visually inspect both PDF pages after any meaningful change. Downloaded HTML/PDF files do not depend on authoring tools or an application checkout. Original material is 0BSD; background reading is linked, not redistributed.
