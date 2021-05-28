This document contains information regarding the single page publishing POC: https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-cms/issues/5401

## Infrastructure

The following resources were added to AWS to facility the single page publish POC: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5428

* SQS Queue Name: `dsva_vagov_dev_single_page_build`
* Lambda Name: `singlePageBuild`
* s3 Bucket: `content.dev.va.gov`
* Preview Server: http://preview-dev.vfs.va.gov/preview

![image](https://user-images.githubusercontent.com/121603/120035192-2d596900-bfcc-11eb-9b2b-ef7a534094e5.png)
