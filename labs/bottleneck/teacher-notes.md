# Teacher reasoning and adaptation

The supplied configuration is invented: N = 100 and 100 A copies initially, small N = 5 at target generations 10–19, recovery to 100 at generation 20, horizon 40, four trials per condition and seed 1. There are 200 gene copies initially, 10 in each small generation and 200 again after recovery. No individual genotype or survivor is tracked. The constant-size condition always has 200 copies.

The first small generation is **10**, the last is **19**, and the first recovered generation is **20**. The no-drift A frequency remains **0.5**. In this neutral model, expected frequency across independent repetitions also stays 0.5, but the average of these four paths need not equal it. The target draw is Binomial(2N_t, A_(t−1)/(2N_(t−1))). Use the previous size for the probability denominator and the target size for the sampled total. Sampling with replacement represents reproduction rather than an instantaneous survivor cull.

For B trials N is 100 at g9, 5 at g10/g19 and 100 at g20/g40. C trials retain N = 100 throughout.

| Trial | A at g9 | A at g10 | A at g19 | A at g20 | A at g40 |
| --- | --- | --- | --- | --- | --- |
| B1 | 106 | 5 | 9 | 183 | 186 |
| B2 | 99 | 4 | 10 | 200 | 200 |
| B3 | 108 | 6 | 0 | 0 | 0 |
| B4 | 91 | 8 | 2 | 38 | 93 |
| C1 | 80 | 90 | 91 | 92 | 128 |
| C2 | 161 | 148 | 130 | 133 | 155 |
| C3 | 105 | 118 | 158 | 167 | 175 |
| C4 | 112 | 101 | 67 | 65 | 94 |

B = bottleneck; C = constant-size. All trials start with 100 A copies. The complete CSV records N explicitly in every row; use it to avoid misreading counts as frequencies across conditions. For example, B1's 9 copies at g19 mean p = 9/10 = 0.9, while 183 at g20 mean p = 183/200 = 0.915, not a twenty-fold frequency increase.

B2 fixes A at generation **18**. Its fixed copy count changes from 10 to 200 when N recovers, while frequency remains 1. B3 loses A at generation **14** and stays at 0 copies through recovery. The absent allele cannot be recreated without excluded mechanisms. Both alleles remain in B1 and B4. The four constant-size trials retain both alleles through generation 40, but another seed need not give that outcome.

H = 2p(1−p) is a gene-diversity index at this biallelic locus, not a measured count of heterozygous individuals or whole-genome variation. B4 has H = 0.32 at g19 (p = 0.2) and H = 0.49755 at g40 (p = 0.465). Thus an individual path can rise after a bottleneck when both alleles remain. Recovery does not reset H, guarantee a rise or recreate absent alleles. Across independent neutral repetitions, expected H_t = H₀ multiplied by (1−1/(2N_g)) for each target generation g. At g40 the model expectations are about **0.149999** for the bottleneck condition and **0.409160** for the constant-size condition. They are not the averages of this small set of traces.

Conditions use separate deterministic streams. Matching trial numbers do not follow the same individuals or guaranteed counterfactual pairs. Four trials cannot estimate a loss probability, guarantee that every bottleneck outcome is more extreme than every control, establish selection or justify a whole-genome/conservation prediction. N is an idealized input, not an empirical estimate; locus fixation/loss is not species extinction. This neutral model excludes mutation, migration, selection, sex structure, linked loci, individual genotypes, pedigrees and demographic extinction.

Adapt severity, timing, duration or seed while keeping other controls fixed. Repeat a seed to replay the full experiment, not advance it. Compare frequencies and exact counts first, then discuss H and its limits. Use the same one example as a starting point; no further lesson collection is required. For your own worksheet, review configured references against edited wording, add custom answers in teacher-only notes, retain model/rights context and inspect printed pages. Student/teacher packages stay separate and learner responses/progress are excluded.
