# Additional Newick sources

A small, dated directory of starting points for educators preparing their own examples. It complements the Hug, Upham, dos Reis and Kew datasets already bundled in PhyloInk. It is not an exhaustive catalogue or a commitment to continuous monitoring.

**Availability, import compatibility and scientific suitability are separate checks.** Read the provider's terms and study documentation before adapting or distributing a tree. A parsed or successfully imported Newick file has not thereby become a biologically verified classroom resource.

## Starting points

| Source | Teaching possibilities | Obtaining a tree | Reuse and verification |
| --- | --- | --- | --- |
| [Fish Tree of Life](https://fishtreeoflife.org/downloads/) | Ray-finned fish diversity; selected clades; topology versus source distance. | Download a Newick phylogram or timetree; decompress XZ first. Prefer a small selected group for a drawing. | [Provider CC0 statement and citations](https://fishtreeoflife.org/about/). Representative RAxML file checked; see import-checks.json for the exact hash and result. |
| [Open Tree of Life](https://opentreeoflife.github.io/browse/) | Select familiar organisms across groups; discuss where scientific phylogenies and taxonomy contribute to a synthesis. | Download a subtree through the browser, or extract the Newick field from an API response. Select a bounded subtree rather than the complete tree. | [CC0 policy subject to pre-existing terms](https://tree.opentreeoflife.org/about/licenses). A five-taxon API subtree checked; retain query IDs, synthesis information when supplied, retrieval date and file hash. |
| [Insect Phylogeny Database](https://insectphylo.org/ipd_v2/) | Discover insect examples from published phylogenies and their accompanying study records. | Version 2 is a tab-separated collection: tree ID, then Newick. Extract one complete Newick field and retain its ID and spreadsheet entry. | The [archived version 1 record](https://www.scidb.cn/en/detail?dataSetId=4db6d9dd08ef4ba0baebbe145b07ecc7) declares CC0. Reconfirm terms for the version selected. The version 2 download could not be retrieved on 2026-11-11; no file is marked import-tested. |
| [Ensembl gene trees](https://rest.ensembl.org/documentation/info/genetree) | Advanced work on gene duplication, orthologues/paralogues, and gene histories versus species histories. | Export an individual gene tree as Newick; the documented REST route is useful when preparing a bounded example. Retain stable gene-tree and tip identifiers. | See [Ensembl's export/reuse policy](https://asia.ensembl.org/info/data/export.html). Documentation checked 2026-11-09; no representative import tested. Interfaces and archives may differ. |
| [Genome Taxonomy Database](https://gtdb.ecogenomic.org/downloads) | Advanced bacterial and archaeal diversity; genome-based classification. | Release directories provide Newick reference trees and taxonomy mappings. Genome accessions need their accompanying metadata. Begin with a manageable group. | [CC BY-SA 4.0](https://gtdb.ecogenomic.org/licenses). [File descriptions](https://data.gtdb.ecogenomic.org/releases/release232/232.0/FILE_DESCRIPTIONS.txt) explain tree contents. Documentation checked 2026-11-09; no representative import tested. |
| [TreeHub](https://www.nature.com/articles/s41597-025-05282-4) | Discover published examples across plants, animals, fungi, microbes and other groups. | Follow study metadata to a Newick file in the dataset or original deposit. Select one appropriate tree rather than downloading the whole collection for a classroom. | The dataset paper describes CC BY 4.0 terms. Check the individual source and any upstream terms. Documentation checked 2026-11-09; no representative import tested. |

## Additional teaching-use link

[TimeTree](https://timetree.org/) is useful for exploring published timescales and offers Newick export. Its provider states that personal research and teaching use are allowed, but redistribution of its data and transformations is prohibited. This directory links to the service; no TimeTree data or derived tree is included in these packs. Terms checked 2026-11-11. A TimeTree export does not add dated-tree functionality to PhyloInk.

## Before using a source

Record what its tips represent: species, sampled specimens, genomes, genes, populations or higher-level groups. Identify the scientific basis, root evidence, branch-length meaning and uncertainty. A taxonomy-derived link is not automatically an inferred evolutionary relationship, and a gene tree is not automatically a species tree.

For a reusable example, retain the paper/deposit URL, authors, year, release/version, license evidence, original file hash and any extraction steps. Preserve original bytes separately from display-name shortening, selected membership and drawing geometry. Do not resolve ambiguous branches for visual convenience.

PhyloInk's documented Newick input limits are 20 MB, 100,000 nodes and nesting depth 800, not speed guarantees. Complete provider trees may exceed them. Unpack archives; extract one tree from multi-tree or NEXUS containers without resolving or rearranging it. Renaming a container's extension does not convert its format.

See [import-checks.json](import-checks.json) for exact representative files, preparation and results. Raw external test downloads are not bundled here. No dataset's availability or import result implies endorsement by its authors.
