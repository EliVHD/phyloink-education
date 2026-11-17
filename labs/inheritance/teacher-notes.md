# Teacher answers and adaptation notes

Two synthetic demonstrations, independently adaptable. Keep the assumptions in SOURCES.md visible. Use the canonical application guides for controls; this file explains these questions rather than duplicating a usage guide.

## One locus: Aa x Aa

Each parent's A and a gametes have probability 1/2. The four equally likely parental combinations yield AA, Aa, Aa and aa. Genotype probabilities are 1/4 AA, 1/2 Aa and 1/4 aa. Complete dominance groups AA and Aa as A_, giving 3/4 A_ and 1/4 aa. Dominance groups phenotypes; it does not make A more likely to be transmitted.

At 32 offspring the expected phenotype counts are 24 A_ and 8 aa. Sampled counts are realized integers and may differ; the exact sample can be reproduced with the same parents, size and seed. A larger sample often gives proportions nearer the expectation, but no individual trial is guaranteed a closer match. Do not mark a learner wrong because their recorded sample differs from the expected ratio or another seed's result.

Variation: change one parent to aa. Aa x aa has no AA offspring, with 1/2 Aa and 1/2 aa; phenotype probabilities are also 1/2 each under this model. Changing parents clears old predictions/results. Ask learners to distinguish impossibility (zero probability) from an outcome missing in a small sample.

## Two loci: AaBb x AaBb

Each parent produces AB, Ab, aB and ab gametes with probability 1/4, under independent assortment. The chance of aa bb is (1/4) x (1/4) = 1/16. Complete-dominance phenotype probabilities are 9/16 A_ B_, 3/16 A_ bb, 3/16 aa B_ and 1/16 aa bb. At 32 offspring, expected counts are 18, 6, 6 and 2; at 1,000 they are 562.5, 187.5, 187.5 and 62.5. Fractional expectations do not mean fractional offspring in a sample.

Four cells produce genotype AaBb: AB with ab, Ab with aB, aB with Ab, and ab with AB. Each gamete-combination cell has probability 1/16, so the total genotype probability is 4/16 = 1/4. A cell probability must not be confused with the aggregated genotype or phenotype probability.

For linked loci, parental haplotypes and recombination matter; independent assortment cannot simply be assumed from this square. The app's bounded A03 model does not simulate linkage. Keep that as a model-boundary discussion rather than presenting an unsupported experiment. Population change and advanced mechanisms are separate application packages.

Variation: AAbb x aaBB produces only AaBb under the model. This separates a certain genotype outcome from stochastic sampling. It is an adaptation of the same two-locus demonstration, not an additional required lesson.

## Classroom care

Keep abstract labels or select a carefully sourced suitable organism example. Do not map eye colour, intelligence or other complex human traits to these single-gene rules. No supplied tree provides genotypes for this lab. Complete dominance, equal segregation and independent assortment are assumptions, not biological conclusions verified by the application. No pedigree inference or human risk assessment is performed.

Let learners answer in words, fractions, decimals or percentages. Distinguish conceptual reasoning from arithmetic slips and finite-sample variation. The app accepts explicit probability forms such as 1/4, 0.25 or 25%; a 3:1 ratio must first be converted to a probability for the requested outcome. No learning records or progress are saved.
