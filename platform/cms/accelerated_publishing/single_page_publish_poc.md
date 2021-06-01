This document contains information regarding the single page publishing POC: https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-cms/issues/5401.  *This document is for the current state of the POC, not what the final recommended architecture.*

## Infrastructure

The following resources were added to AWS to facility the single page publish POC: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5428

* SQS Queue Name: `dsva_vagov_dev_single_page_build`
* Lambda Name: `singlePageBuild`
* s3 Bucket: `content.dev.va.gov`
* Preview Server: http://preview-dev.vfs.va.gov/preview

## Lambda function

When processing a page to be published, the lambda function makes a request to the `dev` preview server.  The HTLM from the preview server is pushed to S3. 

![image](https://user-images.githubusercontent.com/121603/120035192-2d596900-bfcc-11eb-9b2b-ef7a534094e5.png)

## Lambda function deploy process

The source code for the lambda function is stored in the content-build repostiory at https://github.com/department-of-veterans-affairs/content-build/blob/1bd449c5fff6a2042843f81baf2ec13c49d646b3/src/platform/lambdas/single-page-build.js, current in PR: https://github.com/department-of-veterans-affairs/content-build/pull/177

1. When a new commits is pushed a Github Action runs: https://github.com/department-of-veterans-affairs/content-build/blob/1bd449c5fff6a2042843f81baf2ec13c49d646b3/.github/workflows/single-page-build.yml
1. Use webpack to compile a single javascript page: https://github.com/department-of-veterans-affairs/content-build/blob/1bd449c5fff6a2042843f81baf2ec13c49d646b3/config/webpack.single-page-build.js
1. Compress the javascript page and put on s3: `vetsgov-website-builds-s3-upload/single-page-build/master/function.zip`
1. Tell the lambda function to publish a new version using the new code from s3.

