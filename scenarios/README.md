# Two local learning scenarios

These are independent, educator-adaptable demonstrations for the A02 development build of PhyloInk. They extend the finite showcase rather than adding a course or a promised lesson sequence. The application’s usage and Teacher’s Guides remain authoritative in its repository.

| Scenario | Demonstrates | Source and reuse |
| --- | --- | --- |
| [Six mammals](six-mammals.phyloink-activity.json) | Common ancestors, sampled clade membership and equivalent drawings, using the same taxa as examples 01 and 02. | Complete unchanged Upham S3 source, Dryad version 4, CC0-1.0; original activity text under 0BSD. |
| [An unresolved fork](unresolved-fork.phyloink-activity.json) | A deliberately unresolved C/D/E fork, complete descendants, and topology-preserving rotation. | Entirely invented A–E topology and original activity text under 0BSD; no empirical organism claims. |

## Use or adapt a scenario

1. Download either JSON file (on GitHub use the file’s download/raw option). Each includes its complete source; no separate project, source download or provider account is required.
2. In a PhyloInk development build with A02, choose **Learn → Local activity scenarios → Open scenario**. Select the downloaded file.
3. Read the introduction and source context. Choose a **Kept question**, then reason from its branching connections. **Check reasoning** and **Explain** calculate feedback locally. Selecting a question clears prior answers.
4. To adapt, change the title/introduction/educator notes. Use **Adapt / keep this question**, adjust its prompt/pair/node/layout/rotations and choose **Keep question**. It updates the selected question; selecting a different question type starts a new setup. **Save scenario** downloads your copy with up to 12 independent setups.

Changing the sample clears kept questions, since their identities may no longer apply. Save a copy before changing it. A file stores setups, not learner answers or progress. Educator notes are visible to everyone opening it; they may contain teaching explanations. There is no teacher-only answer compartment, student tracking or autosave. Returning to the editor discards practice and leaves the editor project unchanged.

The `.phyloink-activity.json` format is separate from the printable handouts’ `activity.json` configuration. These files do not replace the existing project, PDF or SVG packs. Use editor exports for printable artwork. Historical Clade Studio releases and the earlier guide-only build cannot open this new scenario format.

## Source-based reasoning and limits

In the mammal example, human and chimpanzee meet at source node n003716. That node has six full-source descendants: two are displayed and four are omitted. A complete source clade includes the omitted descendants. The file retains all 4,099 source tips (4,098 mammal species plus a lizard outgroup), the original root declaration, source hash and canonical citations. Display names are shortened separately. See [example 01’s source record](../examples/01-common-ancestry/SOURCES.md) for the same dataset and terms.

In the synthetic example, C, D and E share a deliberately unresolved fork. The supplied topology does not identify a closer pair among them. Reversing their drawing order neither resolves the fork nor dates divergence. A polytomy alone does not demonstrate simultaneous divergence. All five source tips are included, so the C/D/E displayed group is complete for this invented source.

Spacing in both scenarios is nonmetric. Prompts and educator metadata are authored material; validation checks file consistency, not biological truth. Review source suitability and separate source terms before distributing an adaptation. The mammal source is one published hypothesis, with its original sampling and limitations.

## Verification

See [verification.json](verification.json) for the exact application commit/build, SHA256 inventory and dated browser checks. Source bytes, citation identities, question targets, unresolved forks and repeated rotations were validated. Actual Edge checks covered opening both files, feedback, adaptation, save/reopen, rejected-file isolation, literal text rendering, narrow layout and an unchanged editor project. No PDF content or existing example pack was changed.

Run `node tools/verify-scenarios.mjs` from the repository root for independent inventory/source-hash checks. Add `--app /path/to/phyloink` to validate with the application’s strict scenario reader. This optional authoring check uses an explicit checkout; downloaded files themselves have no dependency on that path.
