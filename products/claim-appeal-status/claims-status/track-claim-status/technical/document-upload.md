This document outlines the general process when a veteran uploads a file to support their claim on VA.gov.

1. Select a claim from the list
2. Select the ['Files' tab](../../Screenshots/Claim%20Details%20-%20Files.png) within a claim's details
3. Select 'View Details' and then upload a file
4. The file is sent to vets-api
  - 4a. The file size and extension are validated
  - 4b. The file is stored in AWS S3
  
5. The client receives a response from vets-api (failure or ID of background job)
6. The background job retrieves the file from AWS S3 and sends to EVSS
7. If the background job fails, it is [retried approximately 25 times over the course of 21 days](https://github.com/mperham/sidekiq/wiki/Error-Handling#automatic-job-retry)
8. If the background job never succeeds, it is placed in a dead job queue and can be manually retried at a later date

More information about document upload design is located in the [Document Uploads product folder](../../../Document%20Uploads/document_upload_workflow.md)
