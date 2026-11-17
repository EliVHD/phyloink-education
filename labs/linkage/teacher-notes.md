# Teacher reasoning and adaptation

The supplied handout uses **AB/ab × ab/ab**, r = 10%, n = 100 and seed 1. These are invented autosomal two-locus parameters, not measurements of an organism or observations from a phylogeny. The slash records phase, not a pedigree generation.

Parent 1's parental haplotypes are AB and ab, each with probability (1−0.10)/2 = **9/20 = 45%**. Recombinant types Ab and aB each have probability 0.10/2 = **1/20 = 5%**. Parent 2 produces ab with probability 1. Its homozygous markers cannot distinguish parental from recombinant routes; do not describe its gametes as observed recombinants.

| Parent 1 gamete | Offspring phase | Unphased genotype | Complete-dominance phenotype | Expected count in 100 | Supplied seeded count |
| --- | --- | --- | --- | --- | --- |
| AB | AB/ab | AaBb | A_ B_ | 45 | 52 |
| Ab | Ab/ab | Aabb | A_ bb | 5 | 2 |
| aB | aB/ab | aaBb | aa B_ | 5 | 7 |
| ab | ab/ab | aabb | aa bb | 45 | 39 |

All other genotypes have probability and count zero here. Counts sum to 100. Sampled parental/recombinant marker classes from Parent 1 total 91 and 9; 9% is a sample outcome, not an inferred true rate or a guaranteed ratio. Complete dominance affects phenotype grouping, not gamete transmission. Several gamete pairs can share a genotype/phenotype in general crosses; the ab/ab tester makes Parent 1's gamete identifiable through the idealized phenotype.

Changing Parent 1 to **Ab/aB** preserves genotype AaBb but changes phase. At r = 10%, Ab and aB become the 45% parental types, while AB and ab become 5% recombinant types. At r = 0%, only the parent's original two haplotypes occur. At r = 50%, all four gametes have probability 1/4 in either double-heterozygote phase. This matches independent assortment without proving that loci lie on different chromosomes. A small observed recombinant fraction can exceed 50%, although the model parameter is bounded to 50%.

Use phase, recombination setting or sample size as separate adaptation choices within this same demonstration. Compare expected probabilities first, then seeded finite counts. Changing a seed may still give coincident counts; larger samples need not be closer to expectation in every trial. The same settings replay the trial rather than breeding another generation. Offspring retain both inherited chromosomes; only their first 64 phased genotypes are displayed, while every offspring enters the tables.

Keep assumptions visible: equal segregation, symmetric recombination, random fertilization, one shared r for both parents and complete dominance at each locus. There is no sex-specific recombination, mutation, selection, epistasis, penetrance variation, environment, empirical chromosome mapping or breeding history. r is neither crossover count nor physical/map distance. See [background and reuse](SOURCES.md).

For your own worksheet, write prompts/instructions in the application and use separate student/teacher exports. Configured references follow the setup, not an interpretation of your custom prose; review them and add custom answers in teacher-only notes. Learner predictions/feedback/progress are excluded. Preserve source/model context and rights, review print layout and refresh inventories after external edits. This example is finite and adaptable, with no continuing content/support commitment.
