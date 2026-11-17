# Teacher reasoning and adaptation

One example changes **only Aa fitness**: S1 = 1.2/1.1/1, S2 = 1.2/1.4/1 for AA/Aa/aa. N = 100, initial A = 100 of 200 copies, 40 generations, four trials per condition, seed 1. S1 gives A a directional advantage. In S2 the heterozygote has greater fitness than either homozygote. No measured traits, genotypes or survival events are supplied.

## Reference reasoning

At p = 1/2, random-mating expected genotype proportions are 1/4 AA, 1/2 Aa and 1/4 aa. For q = 1−p, use `(p²wAA + pqwAa)/(p²wAA + 2pqwAa + q²waa)`. The first pre-sampling A frequencies are **23/44 ≈ 0.52272727** for S1 and **13/25 = 0.52** for S2. These are probabilities used for finite sampling, not required observed frequencies. Fitness weights are relative contributions, not survival percentages; multiplying all weights by the same positive factor leaves the analytic frequency unchanged within the permitted bounds.

Phenotype dominance does not determine heterozygote fitness. S2's stable interior no-drift equilibrium is `(wAa−waa)/(2wAa−wAA−waa) = 2/3`. Its reference at generation 40 is about **0.6650649793**; it has not reached equilibrium exactly. S1's generation-40 reference is about **0.9718090830**. These infinite-population recursions are not means of the finite trajectories under nonlinear selection.

## Exact seeded results

Each row contains A copies out of 200. The CSV retains all 328 records, including generation 0. Integer counts are authoritative; frequency is A/200. Student figures deliberately exclude theoretical reference curves, which can be explored in the application or teacher worksheet.

| Condition / trial | g1 | g20 | g40 |
| --- | --- | --- | --- |
| S1 / 1 | 108 | 181 | 192 |
| S1 / 2 | 104 | 167 | 183 |
| S1 / 3 | 98 | 175 | 200 |
| S1 / 4 | 103 | 177 | 200 |
| S2 / 1 | 96 | 129 | 161 |
| S2 / 2 | 111 | 169 | 121 |
| S2 / 3 | 104 | 130 | 150 |
| S2 / 4 | 108 | 134 | 137 |

S1 trial 3 first fixes A at generation 40; trial 4 at 39. No other path reaches an absorbing boundary in this trial set. This does not estimate a fixation probability or guarantee variation in S2. Finite populations can lose or fix an allele even under heterozygote advantage. Once absent, an allele cannot return in this closed model; locus fixation/loss is not species extinction.

Conditions use separate seeded streams. Matching trial numbers are not the same individuals or guaranteed counterfactuals. A few paths cannot establish selection, estimate fixation probability or guarantee a condition ranking. N and fitness weights are chosen inputs, not empirical estimates. No individual survival, genotype observations, pedigrees, mutation, migration, linked loci, changing environment, size changes, sex structure or zero-fitness extinction is modeled.

## Adapt this example

Change one input at a time. Compare a different Aa weight while retaining both homozygote weights, use an equal-weight neutral condition, change N at a fixed initial frequency (choose matching integer copies), or use another seed. Preserve exact settings and distinguish no-drift predictions from sampled results. Do not interpret a handful of runs as an ensemble estimate. This is a finite showcase for educators' own materials, not a course or a continuing lesson commitment.

Use **Create worksheet** to edit prompts and instructions, preview A4/Letter and export student and teacher packages separately. Review reference answers against your wording. Neither worksheet includes learner responses, feedback, progress or cursor/editor overlays. Disabling data removes plots/CSV; worksheet context and this manual configuration are not app import formats. Review every printed page; the accompanying PDF is four A4 pages at 100%.
