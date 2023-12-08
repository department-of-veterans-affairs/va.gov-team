# KISS (Keep It Simply Static)
## Overview
KISS provides a way to create arbitrary static data files from Drupal content. These static data files can then be fetched from the browser asynchronously.

## Implementation
[This PR](https://github.com/department-of-veterans-affairs/content-build/pull/1142) captures the work done to implement this feature.

 Here are the key pieces:
 ### Consumer code
 - content-build
    - Example:
       - `src/site/stages/build/drupal/static-data-files/config.js`
          - This is where KISS files can be configured. To include a new file in the build process, configure it in this file.
       ```
       {
         description: 'VAMC EHR System',
         filename: 'vamc-ehr.json',
         query: queryVamcEhrSystem,
         postProcess: postProcessVamcEhrSystem,
       },
       ```
 - vets-website
    - Example: 
       - `src/platform/site-wide/drupal-static-data/source-files/vamc-ehr/connect/index.js`
       ```
       connectDrupalStaticDataFile(dispatch, {
         fileName: 'vamc-ehr.json',
         preProcess: preProcessEhrData,
         statePropName: 'vamcEhrData',
       });
       ```
       - `src/platform/site-wide/drupal-static-data/source-files/vamc-ehr/selectors/index.js`
       ```
       selectDrupalStaticData(state)?.vamcEhrData?.data || {};
       ```
 ### Implementation code
 - `src/site/stages/build/index.js`
    - The static-data-file generation is added as a Metalsmith plugin. It's one of the first steps of the build to run.
    ```
    smith.use(generateStaticDataFiles(BUILD_OPTIONS), 'Build static data files');
    ```
 - `src/site/stages/build/plugins/generate-static-data-files.js`
    - As we see in the `smith.use()` call above, the top-level entry point is a call to `generateStaticDataFiles`. This function is currently just a wrapper around `generateStaticDataFilesFromDrupal`, but this abstraction/wrapper is added so that static files could someday be generated from a separate data source if needed.
 - `src/site/stages/build/drupal/static-data-files/generate.js`
    - This file implements `generateStaticDataFilesFromDrupal` and is where the meat of the implementation happens. This implementation boils down to looping through the files configured in `config.js` and executing the queries defined for each file. If a `postProcess` function is defined, this function calls that `postProcess` function before generating the final static data file. The final data file is created with the defined filename.
 - `script/github-actions/deploy.sh`
    - The sync with S3 happens in two passes so that we can ensure that assets will be available when pages that request them are synced. So, these assets are synced first, then the html pages second. We include KISS-generated data files in the first pass.


### KISS Endpoints
- https://www.va.gov/data/cms/vamc-ehr.json
- https://www.va.gov/data/cms/vamc-facility-supplemental-status.json
  
### Caching
There are a couple other PRs that implement a caching mechanism that follows the same approach as that used for content-build at large. When `--pull-drupal` is issued, a content build will query Drupal for new data. Otherwise, cached static data files will be used.
- https://github.com/department-of-veterans-affairs/content-build/pull/1363
- https://github.com/department-of-veterans-affairs/content-build/pull/1392
