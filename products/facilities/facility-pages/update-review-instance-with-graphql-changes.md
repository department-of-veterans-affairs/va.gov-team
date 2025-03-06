# Update Review Instance With GraphQL changes in content-build so that GQL changes can be shown

For example, if you make a change to graphql and it has not made it to main yet, but you want a review instance to show graphql query changes, 
you need to made updates to the RI build process.

RI do not pull graphql data using the `*.graphql` files in content-build, instead they use the script to download data from the last main build that pushed changes to the 
AWS cache.

## Get your current changes in a `pages.json` cache
1. In order to show graphql changes, build locally to get the correct `.cache/localhost/drupal/pages.json`
2. After the graphql metalsmith download completes, gzip the file `gzip .cache/localhost/drupal/pages.json` and put the gzipped file somewhere easy to access via terminal (gzip not bzip2 since the AWS instances for RI don't have bzip2)
3. Get the IO/URL of the RI for SSH (not the same as the URL for the RI - find it in the Jenkins dashboard for your build). Not everyone has read access to the Jenkins console data so you might need to ask someone to get this.
  1. For example `ssh dsva@ip-172-30-20-200.us-gov-west-1.compute.internal`
4. SCP the gzipped `pages.json.gz` into the instance in approximately the right directory
  1. e.g. `scp pages.json.gz dsva@ip-172-30-20-200.us-gov-west-1.compute.internal/home2/dsva/`
6. Check that the default build of content-build has completed or at least the stage of downloading the `.cache` has occurred (you can check `/home2/dsva/content-build/.cache` or look at the docker logs)
7. Gunzip the pages.json.gz file `gunzip pages.json.gz`
8. Then move the json file to the cache directory `mv pages.json /home2/dsva/content-build/.cache/localhost/drupal/`
9. Edit the `/home2/
