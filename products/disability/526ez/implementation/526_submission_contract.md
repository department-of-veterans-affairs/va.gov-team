# 526 Submission vets-api contract with vets-website

After a Veteran has completed filling out the digital 526 form and clicks 'Submit application' on the Review page, the front end (vets-website) calls two back end (vets-api) api's. This document outlines the current and proposed new behavior for the Submission Experience improvements.

1. `/v0/disability_compensation_form/submit_all_claim` [spec](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/postSubmitFormV2)
   This endpoint is used to send all the 526 form data for final submission. This data and format is different than the save in progress form payloads since it is run through the FE's submit transformer. If successful, it respondes with a job id that is used for the next api.

| Response    | Current behavior                                                                | Proposed behavior |
| ----------- | ------------------------------------------------------------------------------- | ----------------- |
| 200 success | proceed to call next api                                                        | no change         |
| non-200     | display generic error "We're sorry. We can't submit your application right now" | no change         |

2. `/v0/disability_compensation_form/submission_status`
   [spec](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getSubmissionStatus)
