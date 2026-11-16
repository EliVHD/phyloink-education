# Two population-evolution walkthroughs

These independent synthetic demonstrations accompany **Learn → Population evolution** in PhyloInk's A04 development change. Choose genetic drift or selection with drift and adapt the questions. They are not a required lesson sequence, course or promise of continuing additions.

## Start

Use the exact unreleased application commit/build in [verification.json](verification.json). Its canonical usage and Teacher's Guides remain in the application repository and are available through **Guides**. Historical Clade Studio releases and earlier Learn builds do not include this lab.

1. Open **Learn → Population evolution**. Choose **Try genetic drift** or **Try selection with drift**; the manual settings are in `activity.json` and on the handout.
2. Predict the next frequency before finite sampling, then use **Check reasoning / Explain model** and **Run population trials**.
3. Inspect exact A/a counts with the generation slider. All recorded generations are retained; numbered lines have distinct dash patterns as well as colours. A narrow chart can scroll locally.
4. Use the [editable/printable HTML handout](student-handout.html), [two-page A4 PDF](student-handout.pdf) and separate [teacher notes](teacher-notes.md). Record actual trial counts rather than treating a reference as a required outcome.

These are idealized one-locus diploid allele-count models with explicit assumptions, not empirical populations or traits taken from a tree. Read [SOURCES.md](SOURCES.md) before adapting. N means individuals and 2N means gene copies. Allele fixation/loss is not species extinction, and a few trajectories do not establish selection or estimate fixation probability.

## Files, repeatability and adaptation

`activity.json` is an editable handout configuration for manual control settings, **not an application import file**. It contains no learner answers or progress. The HTML/PDF share its student text; teacher answers and adaptation notes remain separate. `manifest.json` inventories exact files and SHA256 hashes; `LICENSE` covers original contributions. No Newick source, tree project, SVG figure or measured genotype dataset is required or implied.

Supported application bounds are 2–500 individuals, 1–100 generations, 1–8 trials, initial A copies from 0 to 2N, positive relative fitnesses 0.05–2 and an integer seed from 0 to 4,294,967,295. Same settings reproduce all counts. Changing parameters clears results; rerunning restarts rather than continues the chosen trial. The no-drift reference is not the mean of finite trajectories under selection. Existing tree scenarios do not save population settings. Returning to the editor discards the lab without changing artwork or history.

Regenerate with `python tools/render-population.py` (ReportLab), inspect both PDF pages, and verify with `node tools/verify-population.mjs --app /path/to/phyloink` against the recorded application build. Downloaded HTML/PDF files work independently; optional authoring tools need the repository checkout. The existing tree packs, scenarios and inheritance walkthroughs remain separate and unchanged. Original material is 0BSD; background reading is linked rather than bundled.
