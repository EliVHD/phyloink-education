# Model, assumptions and rights

All questions, explanatory prose, handout configuration, teacher notes and helper code are original PhyloInk contributions under 0BSD. No empirical tree/genotype dataset, publisher text, figure, photograph or external implementation is included. A/a identifies a synthetic model locus rather than organisms or traits inferred from a Newick tree.

The application model `wright-fisher-selection-v1` holds N diploid individuals and 2N gene copies in a closed, constant-size population with random mating and non-overlapping generations. For current A frequency p and q = 1-p, it weights expected random-mating genotype proportions p², 2pq and q² by positive relative genotype fitness. The post-selection probability is (p²wAA + pqwAa)/(p²wAA + 2pqwAa + q²waa), followed by a Binomial(2N, probability) A-copy draw. Genotypes, pedigrees and individual survival are not tracked. Neutral equal fitnesses leave the expected sampling probability at p.

Mutation, migration, linked loci, growth, environmental changes, sex structure and zero-fitness extinction are excluded. Loss/fixation at this locus is absorbing, including at generation zero. Relative weights are not survival percentages. N is an idealized model size, not an estimate for a real population. The no-drift reference omits finite sampling and is not the mean of finite trajectories under selection; a small set of trials does not establish selection, adaptation or fixation probability.

The v1 implementation uses Mulberry32 pseudo-random streams with trial-specific seeds. The same settings reproduce every count, including all generations. Increasing horizon/trial count preserves existing trial prefixes. All supported records are kept (up to eight trials with 101 generations each); displayed percentages are rounded but allele counts are exact. Each run restarts rather than continues earlier results. Settings and learner state are temporary, excluded from tree scenarios/projects/exports, and do not require network access.

Conceptual background checked 2026-11-16:

- [MIT HST.508 Quantitative Genomics: population-genetics notes, 2005](https://ocw.mit.edu/courses/hst-508-quantitative-genomics-fall-2005/aad420032640a927d69dc1a8b2a08750_hst508lecture1.pdf).
- [Graham Coop, Notes on Population Genetics, 2013: diploid-selection section](https://gcbias.org/wp-content/uploads/2013/03/popgen_notes3.pdf).

These are optional citations, not redistributed notes or implementation inputs. No external reading is loaded automatically. Downloaded handouts work offline; the interactive activities require the separate application commit/build in verification.json. Original materials' license does not grant rights to unrelated external articles, images or data.
