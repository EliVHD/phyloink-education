# Model, sources and rights

This is an original synthetic A/a comparison, not an organism dataset or a biological claim about a supplied phylogeny. Protocol `selection-comparison-v1` composes the unchanged `wright-fisher-selection-v1` simulation. All six genotype fitnesses are explicit fixed positive relative contributions; no phenotype-dominance, survival-percentage or genotype-observation interpretation is implied.

Expected random-mating genotype proportions p², 2pq and q² are weighted, then A copies are drawn binomially with 2N trials. The no-drift recursion applies the same weighting without finite sampling. It is not the mean of finite trajectories under nonlinear selection. The model assumes constant N, random mating, non-overlapping generations and a closed autosomal diploid locus. Missing alleles remain absent. No mutation, migration, linked loci, changing environment, size changes, sex structure, zero-fitness extinction or empirical/tree inference.

S1 uses the master seed; S2 uses master plus hexadecimal `0xc2b2ae35` modulo 2^32. Trials use the existing Mulberry32 v1 protocol with index offset `0x9e3779b9`. Separate streams are not paired individuals or guaranteed counterfactuals. Configured bounds: N 2–500, exact initial A copies 0–2N, 1–100 generations, 1–4 trials per condition, seed 0–4,294,967,295, each fitness 0.05–2. At most eight complete paths/808 records/800,000 potential draws. No thinning.

Background reading, consulted 2026-11-17:

- [Graham Coop, Notes on Population Genetics (2013)](https://gcbias.org/wp-content/uploads/2013/03/popgen_notes3.pdf): diploid selection and heterozygote advantage.
- [MIT HST.508, Quantitative Genomics notes (2005)](https://ocw.mit.edu/courses/hst-508-quantitative-genomics-fall-2005/aad420032640a927d69dc1a8b2a08750_hst508lecture1.pdf): selection and finite-population drift.

These are optional reading links, never fetched automatically. No upstream text, figures, data or code are bundled. The configuration, wording, helper code, original SVG figures and application-generated worksheet use 0BSD; [LICENSE](LICENSE) states the terms. Reading links do not grant permission to reuse third-party materials. There is no Newick dataset or project because this experiment does not infer anything from a tree.
