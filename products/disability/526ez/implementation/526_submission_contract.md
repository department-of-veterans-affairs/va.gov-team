# 526 Submission vets-api contract with vets-website

After a Veteran has completed filling out the digital 526 form and clicks 'Submit application' on the Review page, the front end (vets-website) calls two back end (vets-api) api's. 

This document outlines the current and proposed new behavior for the Submission Experience improvements. No contract changes (to the endpoints, request or response) have been identified. However, there will be UI/UX changes for some of the scenarios.

1. `/v0/disability_compensation_form/submit_all_claim` [spec](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/postSubmitFormV2)<br>
   This endpoint is used to send all the 526 form data for final submission. This data and format is different than the save in progress form payloads since it is run through the FE's submit transformer. 
   
   If successful, it responds with a job id that is used for the next api call.

| Response    | Current behavior                                                                | Proposed new behavior |
| ----------- | ------------------------------------------------------------------------------- | ----------------- |
| 200 success | Proceed to call next api                                                        | No change         |
| non-200     | Display generic error "We're sorry. We can't submit your application right now" | Possible small copy change to remove 'Save application' message. The team also discussed potential future improvements for specific, rather than generic error message, but that is out of scope for this launch.        |

2. `/v0/disability_compensation_form/submission_status`
   [spec](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getSubmissionStatus)<br>
   Currently this api is polled for up to 30 seconds to check on the job status. Moving forward, this api will only be used to obtain claim id, if available.

| Response | Current behavior | Proposed new behavior |
| ----------- | ----------- | ----------- |
| 200 success | Load `/confirmation` page with success alert and claim info                                                        | Content changes to loading page and confirmation page        |
| non-200     | Display non retryable, warning error alert "It's taking us longer than expected to submit your claim." | Load /confirmation page with success alert and claim info (no claim id)      |
