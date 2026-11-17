# Model, assumptions and rights

All handout prose, questions, configuration, teacher notes and helper code are original PhyloInk contributions under 0BSD. No scientific dataset, publisher text, figure, photograph or external implementation is bundled. A/a and B/b are abstract labels in an invented cross, not measured organisms or taxa from a Newick source.

The application model `mendelian-independent-v1` assumes one or two diploid autosomal loci, two alleles per locus, equal segregation, random fertilization, complete dominance, and independent assortment for two loci. It excludes linkage, sex linkage, mutation, selection, penetrance variation, epistasis and environmental effects. A_ means AA or Aa; B_ means BB or Bb. Dominance describes the phenotype relationship in this model, not frequency, strength or transmission advantage.

The application uses integer allele-copy combination counts for exact probabilities and a deterministic Mulberry32 stream for finite offspring trials. Repeating parents, size and seed reproduces the same trial. All sampled offspring are counted; only the first 64 individual genotypes are shown. Each click restarts the trial rather than creating another generation. Expected counts may be fractional; actual counts are integers and need not follow a probability ratio exactly. No tree inference, trait inference or empirical genetic validation is performed.

Background reading, checked 2026-11-16:

- [NHGRI: Mendelian inheritance](https://www.genome.gov/genetics-glossary/Mendelian-Inheritance).
- [Clarifying Mendelian vs non-Mendelian inheritance, Genetics (2024), DOI 10.1093/genetics/iyae078](https://doi.org/10.1093/genetics/iyae078).

These citations provide conceptual background and do not grant reuse rights to unrelated publisher material. The app makes no external requests for these links. The handouts and notes require no network access after download; using the interactive exercise requires the separate A03 application build recorded in verification.json.
