The CMS team can provide migration consulting and services to other product teams. 

As part of [CMS product discovery](../cms-product-discovery.md), we will identify the need for this service as well as a general time and strategy for its delivery. 

1. [CMS Product Discovery]. 
2. Review of destination content model
    * Plan changes that are necessary. (see [content model service](#))
3. Source data analysis
    * Analysis of CSVs, API sources, etc. A sample of data is sufficient for this analysis.
      * Data integrity (spilling out of container, multiple lines), columns maintain their lines
      * Suitable for migration
      * Do things map to other drupal entities (entity references, migration lookups)
      * Data map to specific fields.
4. Orientation to migration in VA CMS - meeting with migration developers 
    * Our custom modules
    * Drupal.org documentation 
    * Approach to testing
    * Code review process 
5. Code review for source data
6. Code review for migration
    * Code review
    * Basic QA
7. Testing 
    * [Devshop demo environment]  
