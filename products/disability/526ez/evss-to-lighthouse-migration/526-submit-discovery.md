# 526 Submit Endpoint Discovery
This document details the finding for ticket [#57859](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/57859) Discovery - EVSS to Lighthouse Migration - submit endpoint

## Questions
### What would it take to migrate this endpoint?🤔
#### What data field(s) are being sent and received from the eVSS endpoint by the 526 form?  
API specs for the `POST /form526/v2/submit` endpoint can be found on the eBenefits site at https://www.ebenefits.va.gov/wss-form526-services-web-v2/rest/swagger.yaml. Return values from the endpoint can be found under the `SubmitResponse:` section, and *submitted* values can be found under the `SubmitRequest`. More details on what JSON fields are submitted to the endpoint are referenced [below](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/evss-to-lighthouse-migration/526-submit-discovery.md#can-form-526-switch-to-this-lh-endpoint-without-changes-for-this-service)

#### What is the endpoint in existence in LH that replaces this service?  
API specs for the `POST /veterans/{veteranId}/526` endpoint can be found on the Lighthouse APIs site under the **Disability** section: https://dev-developer.va.gov/explore/benefits/docs/claims?version=current

#### What data field(s) are being sent and received from the new LH endpoint?  
Fields are specified at the above link. Expand the `POST /veterans/{veteranId}/526` section, scroll down to the Request Body section, then click the **Schema** button

#### Can form 526 switch to this LH endpoint without changes for this service?  
No. Here is an [EVSS/LH Mapping worksheet](https://docs.google.com/spreadsheets/d/1e_UoLN31Uzr9_aG4ByCcuQm3kIq844cg_l0IBJYnfLE/edit?usp=sharing) that details all the differences between their respective JSON requests. A companion doc to this, [526 Submit Questions for EVSS/LH](https://docs.google.com/document/d/1Z6Cw6MU5fgsjeJ9vuqrk-4xMEkq3LpQ7NbKUq0KNAyk/edit?usp=sharing), has been created and posted to [#vfs-evss-service-migration](https://dsva.slack.com/archives/C02CQP3RFFX/p1688410338910259) to initiate conversation (potential follow-up meeting TBA)

#### What is the data structure vets-api is expecting from eVSS?
Vets-api's `submit_all_claim` endpoint [doc](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/postSubmitFormV2) accepts a (somewhat) similar base JSON as EVSS's submit endpoint, but that is also transformed in code between *that* submission and the final EVSS one. See diagram referenced [below](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/evss-to-lighthouse-migration/526-submit-discovery.md#can-form-526-switch-to-this-lh-endpoint-without-changes-for-this-service)

#### Does data structure LH has in their documentation adhere to that contract?  
No.

#### In vets-api, is this service being used?  
Yes.

#### What is the workflow from form 526?  
This diagram [526 Submission Workflow](https://lucid.app/lucidchart/b93a0b4d-c62b-49b0-8efc-c7e9e4a05d1c/edit?viewport_loc=974,2887,2515,1134,0_0&invitationId=inv_a7c98577-e6f5-4ec2-897b-3b0f6212b08d) shows the path of initial submission from the website to vets-api to the start of the submission service.

#### If there is more than one endpoint being utilized, do we need separate tickets to capture that work? How complex is it?
Along the path from *initial submission* to the start of the *submission service*, we found a callout to the EVSS /paymentInformation GET endpoint that was in need of migrating. Three tickets were put in the Product Backlog for this: [59695](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/59695), [59698](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/59698), [59702](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/59702) (optional, but small lift while we're there)

Along the path from *submission service* start to *EVSS submission*, callouts to EVSS Documents and Claims endpoints were also discovered by Aurora, tickets made here: [57265](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/57265), [56361](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/56361)

## Development Plan

 - Abstract out the final call at the submission service layer, gated
   behind a new Flipper flag [#55953](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/55953)
- Create new Lighthouse Translation Service, which will be available at the submission service layer to be called on-the-fly right before
   submit. The service will transform the EVSS-formatted request in
   memory before sending it onto Lighthouse. It is possible to have pending submissions in the queue that are ready for EVSS, and those will fail when sending to Lighthouse. The idea is to perform the translation as close to the submission event as possible.
	- EVSS Migration - 526 Submit - Translation Service - basic framework [#61463](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61463)
	- EVSS Migration - 526 Submit - Translation Service - Implement top-level/minimal translate
	   [#61522](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61522)
   - EVSS Migration - 526 Submit - Translation Service - * implements
   all other translate methods:
     - [#61552](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61552) (Banking Info)
     - [#61553](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61553) (Service Pay)
     - [#61554](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61554) (Service Info)
     - [#61555](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61555) (Veteran)
     -  [#61556](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61556) (Treatments)
     - [#61557](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61557) (Disabilities)
- EVSS Migration - 526 Submit - Implement call to
   new translation service [#61559](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/61559)




