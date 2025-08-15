# Views in Google Analytics

- Major subdirectories of the VA.gov website receive their own view. For example, https://www.va.gov/education/ => Education view. This aligns the VA.gov information architecture with Google Analytics.

- Modernized content launched following the Web Brand Consolidation (WBC) are marked with "Modernized" within the view name. 

- Views are created using a filter by subdirectory. All the views should also have filters applied to exclude non-production and internal users.

- Additional views will be created if there's a need to provide an external party with restricted access to our data 

- Additional view configurations should also be applied in view settings: 

1. Exclude parameters that may contain personally identifiable information (e.g. `zipcode=XXXXX`)
1. Search parameters if an internal search engine is used in that subdirectory (e.g. `q=`). Keywords should also be removed from URLs.
1. Time zones should be kept on Eastern Standard Time (EST) to maintain consistency with other views.
1. Goals should be configured to align with the key performance indicators for the veteran facing tool. 
