# Travel Pay: Claims Management

## Context
"Claims Management" means taking action on a claim that has been denied. Taking action on a denied claim usually means appealing the claim. In order to do that, a Veteran needs access to their **decision letter**, **right-to-appeal form**, and the **reason their claim was denied**. The Travel Pay API will provide access to the Veteran's resources through various endpoints. They also need to be directed to the appeals process on VA.gov.

## Main Workstreams
* Frontend implementation with mocked data
  * Show granular claim details
  * Show rejection reasons
  * Show attachments
  * Download attachments
  * Show appeal link
  * Content updates/adds
* Backend implementation
  * Feature flag for version add
  * Integration with Travel Pay API `/claims/:id`
  * Integrate with Travel Pay API `/claims/:id/documents`
  * Integrate with Travel Pay API `/claims/:id/documents/:doc_id`
  * Controller version addition for calling detailed `/claims/:id` on show route
  * Generate document links
  * Download vets-api endpoint

## Assumptions
* No changes to proposed `documents` endpoint ([discussed here](https://dsva.slack.com/archives/C05UTPZRZFY/p1740670709593649)).
* No major changes to policy or business rules
