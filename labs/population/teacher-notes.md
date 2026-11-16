# Teacher reasoning and adaptation

Use either of these two independent synthetic demonstrations. Keep the assumptions in SOURCES.md visible and use the canonical application guides for controls. Do not interpret these invented trajectories as empirical evidence about organisms in a supplied tree.

## Drift: N = 20, 20 A copies, equal fitnesses

There are 40 gene copies and p(A) = 20/40 = 0.5 initially. Equal weights leave the pre-sampling probability at 0.5, so the no-drift reference stays flat. Finite next counts follow Binomial(40, current p), allowing rises, falls or no change. A dominant label or uppercase letter does not imply a transmission advantage here.

In the recorded v1 model, seed 1 gives Trial 1:

| Generation | A copies | a copies | p(A) | State |
| --- | --- | --- | --- | --- |
| 0 | 20 | 20 | 0.5 | Both alleles present |
| 20 | 25 | 15 | 0.625 | Both alleles present |
| 40 | 0 | 40 | 0 | A lost |

A is first lost at generation 36 in that trial. Other default trials end with 37, 21 and 7 A copies. They demonstrate varied paths under identical fitnesses and initial counts. Missing A cannot reappear because mutation and migration are excluded. This is loss at one locus, not population or species extinction.

With N = 200 and 200 initial A copies, the initial frequency remains 0.5. At the same p, neutral one-generation variance is p(1-p)/(2N), so it is ten times smaller than for N = 20. This is an ensemble statement, not a guarantee that every chosen large-population trace will be closer to the reference. Four runs do not determine a fixation probability or prove a cause of change. Invite explanation rather than grading the visual neatness of a chosen seed.

## Selection with drift: N = 100, 100 A copies, weights 1.2/1.1/1

At p = q = 0.5, expected genotype proportions are 1/4 AA, 1/2 Aa and 1/4 aa. Mean relative fitness is 1.1. The numerator for A frequency is (1/4)(1.2) + (1/4)(1.1) = 0.575, yielding 0.575/1.1 = 23/44, about 52.2727%, before finite sampling. These are expected proportions, not measured counts of individual genotypes. A weight of 1.2 is relative genetic contribution, not 120% absolute survival.

The no-drift reference is about 85.6745% at generation 20 and 97.1809% at generation 40. At generation 40 the four default finite trials have 192, 183, 200 and 200 A copies of 200. Trials 3 and 4 first fix A at generations 40 and 39. Exact counts depend on the recorded model/seed; the deterministic reference does not depend on the seed or finite N at the same starting frequency.

Sampling acts each generation and the selection recursion is nonlinear. The no-drift reference is therefore not the mean of these finite trials or a guaranteed path. A higher-contribution allele can still decrease or be lost by chance. Do not infer adaptation or selection solely from a rise/fixation in a few paths.

For the matched neutral comparison, hold N = 100, initial A copies = 100, horizon/trial count and seed constant, then set all weights to 1. Both drift and selection demonstrations keep random sampling; selection changes its expected probability. Try another seed to see a reproducible alternative rather than interpreting one path as a law.

## Boundaries and adaptations

The model is closed, constant-size, random-mating, diploid and single-locus with non-overlapping generations. Expected genotype proportions are fitness-weighted before drawing 2N gene copies. Individual survival, pedigrees, mutation, migration, linked loci, growth, changing environment, sex structure and zero-fitness extinction are not simulated. N is a model size, not an estimate of effective size for real organisms.

Set initial A copies to 0 or 2N to demonstrate absorbing loss/fixation from generation zero. Positive weights cannot bring back an absent allele. Changing N does not silently alter or round A copies: adjust them explicitly to preserve the intended initial frequency. A generation slider inspects stored results without resimulating. Predictions/settings/trajectories reset when returning to the editor and are excluded from tree scenario files and artwork projects. These are adaptations of the two examples, not a growing lesson series.
