# Model, reading and rights

This example uses original synthetic parameters for `neutral-bottleneck-recovery-v1`, with no empirical population/genotype dataset, tree source or downloaded figure. The original native SVG plots model N and seeded allele frequencies at discrete generations. Original text, configuration, helper code and plot use 0BSD; this does not cover unrelated publisher material or educators' later additions.

Conceptual reading checked **2026-11-17**:

- [MIT HST.508 population-genetics notes (2005)](https://ocw.mit.edu/courses/hst-508-quantitative-genomics-fall-2005/aad420032640a927d69dc1a8b2a08750_hst508lecture1.pdf), drift, binomial resampling and fluctuating population sizes.
- [UC Berkeley Understanding Evolution — Bottlenecks and founder effects](https://evolution.berkeley.edu/bottlenecks-and-founder-effects/), for bottleneck terminology and teaching context.

Reading links are optional. No upstream text, figures, code or dataset is copied or bundled, and no URL is fetched automatically. Obtain any external reading directly under its own terms.

The neutral, closed, random-mating diploid A/a model uses non-overlapping generations and reproductive gene-copy sampling with replacement. It is not a mortality cull, a sample of surviving individuals or a pedigree/genotype simulation. One prescribed temporary size reduction is followed by one-step recovery to initial N. No mutation, migration, selection, sex structure, linked loci, gradual growth, demographic extinction or empirical inference is included. Conditions use separate streams rather than paired individuals.

Model N is not an empirical estimate; locus loss/fixation is not species extinction. H = 2p(1−p) is gene diversity at this one biallelic locus, not measured heterozygous individuals or genome-wide diversity. Recovery cannot recreate absent alleles. Individual H can increase even though the ensemble expectation declines. Exact N/A/a counts in CSV are authoritative; p_A and H_2pq are derived numerical columns. The pinned build, browser/print checks and exact inventory are recorded in verification.json and manifest.json.
