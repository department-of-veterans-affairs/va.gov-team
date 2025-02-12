# Tech Discovery: Provide a Copy of Submission on Confirmation (526 PDF)

This document provides an exploration into the possible solutions/approaches towards providing a 526EZ applicant a downloadable link to a PDF copy of their form.

## Existing Implementations

The Veteran Facing Form team has a working implementation of this type of workflow, which they have implemented for the [21-10210](https://staging.va.gov/supporting-forms-for-claims/lay-witness-statement-form-21-10210/introduction), [21-0845](https://staging.va.gov/supporting-forms-for-claims/third-party-authorization-form-21-0845/) and [21-0972](https://staging.va.gov/supporting-forms-for-claims/alternate-signer-form-21-0972/introduction) forms. 
- They created [this wiki](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/simple_forms_api/app/services/simple_forms_api/form_remediation/docs/form_submission_pdf_backups.md) as a guide to their reusable framework and conventions, which allows you to upload a PDF to a dedicated directory structure within S3 and return a ["pre-signed URL"](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/simple_forms_api/app/services/simple_forms_api/form_remediation/docs/form_submission_pdf_backups.md#s3-pre-signed-url-retrieval) to the PDF ([example](https://dsva-vagov-staging-vff-simple-forms.s3.us-gov-west-1.amazonaws.com/submission/1.03.25-Form21-0972/1.03.25_form_21-0972_vagov_8ecdc0eb-486e-4c16-b08b-2eca2119cf87.pdf?response-content-disposition=attachment;%20filename=%221.03.25_form_21-0972_vagov_8ecdc0eb-486e-4c16-b08b-2eca2119cf87.pdf%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQD72FDTFUZFOSFPQ/20250103/us-gov-west-1/s3/aws4_request&X-Amz-Date=20250103T225711Z&X-Amz-Expires=1800&X-Amz-Security-Token=FwoDYXdzEPX//////////wEaDPdjW9xEOJvPLbANRCK6BO05jTNK6ebCOXpjp6O1vv2xAth/iKNOyPwibnA1VtcYJAprA8W/m9W0Gb0rw1swYKfQrRL%2bZw5CnR%2bxg2BMBcgUakCiw0ARIDAiUVHBRedgKqH9Kf1vrl09M3neE7aa%2b5MfmElYBAsRAV1sT32uT/JXt6P9Vu9aevP5ZfKVa3AZMOPq3BRXNd52XYX2f1IAQ1BnxW0K01yZ9xpLs0kegqRRjtllUZxFpzMpovDxL03YnEyBm1wGGSBGNsuXrS2IC3cgYSAiSsqSlHomEU9G2uBHllCHJFoTk3t6ZZsZhxQA84WimqQRR%2bqI5OTWLAT4uDUo2V69QrnLhW0pM6FbelEFd9O11W0uAzGq7e/EjDcgFb1Hjvgbizjll/CYhHyTagabfqVLWX9W8Bk/PG4KCjPOJx3u6ZFOrce/H4WsszHp4LYskSaS2Luq87W10QSxeXzuo/%2bX5PFqmOYoKPVm2FUmhdCI4wt%2bkZYPT/PH%2bbF2Rvp/GYRJ6DxAN4bWT2O8aewdN98KEoaoOLqd3MyO9GzHaUZl8zZqsT2HB6FQcdTU2MQxuM14eY9fxlqzBVI7YQLAw9omu1XrADcDN0aSy6LgeVmn81G4%2b/bWtWmdoHzlTZYzPrGezkjcC3yPMqP6lr42V3RbiMayTJjo4w4GJlm1nmRJFUNzuX3X3VqaAx5yVS19K%2bsoulvI3TT6HVeKz6PKXO/BD8nCrdWIdMVfDqaA6K9Vg0/kDcwTOVquufanzJmWoDD46BfWUijH1uG7BjIqtQUN3LV1Ox8IMjf4OTfUbMconhc7RBOVYjSmKv2oIa3a/8wg/C/g1aAy&X-Amz-SignedHeaders=host&X-Amz-Signature=07fede1b5b02ac30d373ec10dd9f9bba182793095d2f6cbd7d9bbef16b501e77)). 
- This URL is publicly accessible to anyone who happens to have the link (yikes), but it is only accessible for 30 minutes, after which clicking on the link presents a screen like this
![image](https://github.com/user-attachments/assets/96724c59-575e-4bcb-a1b4-ad06168c75f8)
When asked about how they got the signoff/approval for this approach, Matthew Dingee [replied](https://dsva.slack.com/archives/C044AGZFG2W/p1736181091595889?thread_ts=1723128859.703579&cid=C044AGZFG2W):
> [@Jonathan Kamens](https://dsva.slack.com/team/U05PJC78K7B) and [@Don McCaughey](https://dsva.slack.com/team/U06PCD1R0EL) suggested and reviewed this approach in our Architecture Intent and we had a follow-up review with them. Your team should have the same touchpoint with them in the Engineering side of the Collab Cycle.

### Slack threads
- https://dsva.slack.com/archives/C01DBGX4P45/p1730752151975239
- https://dsva.slack.com/archives/C04KHCT3ZMY/p1729609827669939?thread_ts=1729604138.307439&cid=C04KHCT3ZMY
- https://dsva.slack.com/archives/C044AGZFG2W/p1728997689598159?thread_ts=1723128859.703579&cid=C044AGZFG2W

### Conclusions
We could extend and reuse parts of their framework to manage downloads of the 526ez form, and in some ways provide a "user download experience" consistent with many other forms in the VA ecosystem. Some disadvantages of this, however

1. We would need to store the 526ez PDF in S3 upon submission- redundantly with what we're already storing in the VBMS eFolder
2. We would very likely still need to make an additional call to Lighthouse's generatePDF endpoint from our extended implementation due to the complexity of generating the 526ez PDF
3. Extending the framework to meet our needs seems to require so many tweaks that it would be a significant LOE to do that
4. We would be adding a dependency on the SimpleFormsAPI, which would make maintenance a more difficult cross-team endeavour

In short, the VFF solution seems more suited for applications with simpler forms that are perhaps lacking their own PDF generation mechanisms.

## Proposed Implementation

When a user submits their 526ez application:

1. Metadata about the submission is returned to the web application confirmation page (existing metadata being returned is probably enough)
2. A link is generated on the confirmation page using this metadata
3. When the user clicks the link, it posts to a new controller method
4. This controller method calls out to Lighthouse's generatePDF endpoint, which returns the PDF file content
5. The new controller method returns this in a stream to the web client, presenting as downloading file per standard browser conventions

The advantages for this approach are:

1. We can avoid having to redundantly store the 526ez PDF in S3 upon submission
2. We avoid adding more time and complexity to an already overburdened and complex primary submission process
3. Although we might build our own basic framework to manage this (per best practices, etc),

   a. we are not adding any new dependencies, be that on SimpleFormsAPI or S3 itself

   b. we have plenty of examples in code for use/re-use of the generatePDF endpoint

   c. we are employing basic well-established web processes that have been around forever
5. The generatePDF endpoint is known to be very reasonably fast, and is unlikely to timeout upon request (as long as the Lighthouse service is up)
6. The PDF effectively does not expire (as in the above implementation), so long as it still remains in VBMS. This could open us up to future features where the user could download the PDF at any time upon login, and not just that one time upon submission confirmation.

### Other Details
- the new controller method would need to authenticate/authorize to the generatePDF endpoint with the user's credentials, along with the Form526Submission id belonging to the user. This can be accessed via the user's `user_uuid`, which is already available at the controller level
