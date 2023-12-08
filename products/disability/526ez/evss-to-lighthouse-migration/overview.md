## Overview of eVSS Migration to Lighthouse platform for 526ez form


## Purpose
eVSS platform is being migrated to the modern Lighthouse platform being built for centralized location for all API services for va.gov. eVSS was the backend platform for older veteran facing online application called eBenefits. eBenefits has been migrated to va.gov and this project covers the migration of the underlying services.

## Scope
The scope of this work for the Disability Experience team is to replace all calls on the form 526 from eVSS endpoints to Lighthouse endpoints. As of Feb 17, 2023, these are the endpoints currently in scope:
- /intenttofile
- /rateddisabilities
- /submit
- claim service
- /getPDF
- PPIU
- PCIU
- Document Service
- Benefits Reference Data API
- Common API

- /validate - is not used today so migration is not required. There is a separate item on the idea board to start using /validate service before calling submit
  
https://dsva.slack.com/archives/C02CQP3RFFX/p1676572637697879?thread_ts=1676496299.623819&cid=C02CQP3RFFX

From our conversation with Tom Harrison and @Jerek Shoemaker on endpoint migration effort on Feb 16th 2023
- Effort/scope of work will depend on
	- Authentication type
		 - Client Credentials Grant(CCG) - Jerek has built reusable code for authenticating via CCG which is used by v2
     - key access - will not require much effort
     - Authorization Code Flow - will require coding effort unless another va.gov team has built reusable code
	- Input/output parameters
		- For same or very similar values, there is potential for url swap with small effort
		- For dissimilar values, we may be looking to rewrite how the endpoint is called and how the data is consumed. This will also reduce tech debt.
For the Disability Experience team, we are looking at these next steps in our discovery:
1. Go over the input/output parameters for each endpoint looking for differences between eVSS and Lighthouse
2. Go over 526 backend code to get the full list of eVSS endpoints being called and identify migration path for each.
3. Meet with LH teams building the new endpoints to understand their approach and authentication type for each
4. Review the work done by Case Status Tool and Authenticated Experience and other teams
5. Start looking at a common framework for migration for all 526 endpoints to LH

This list excludes any other endpoints to eVSS that are found during the discovery process.

## Important links
- [Biweekly Lighthouse touchpoint notes and agenda](https://confluence.devops.va.gov/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3DVAExternal%26title%3DVA.gov%2BConsumer%2BAPI%2BIntegration%2Bto%2BLighthouse%2BAPI%2BStatus%2BTracking%2B-%2BEVSS%2BModernization&permissionViolation=true)
- [EVSS consumer endpoint usage mapping](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1675893977361/c1aa4c861ea967e12296f72bcbec3307b35f5eb1?wid=0-1677011908528) - This mapping does not include the PDF endpoint because that was since added to EVSS. It also does not include the Ch. 33 services, Benefits Reference Data, or Letters services, because of where evss was in the process when they started this discovery work.
- [Lighthouse teams info](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2023-05-EVSS-Playbooks-Draft/Draft%20EVSS%20Playbook%20Template.md#api---specific-information)
  
## Details
|Endpoint|Lighthouse Update               | DBEX Update|Notes|
|--------|--------------------------------|------------|-----|
|/intenttofile|In production|100% In Production||
|/submit|Work in progress - ETA Oct 2023|Testing in Sandbox||
|Claims Service|Work in progress - ETA Oct 2023|Testing in Sandbox||
|/getpdf|Delayed - ETA TBD|Not started||
|/rateddisabilities|ETA August 2023|Started staggered roll-out||
|PPIU|In Production|In Development||
|PCIU|Migrate to VA Profile, not to LH|Not started||
|Document Service||In Development|Team 2|
| Benefits Reference Data(BRD) API|In production|In Production| Work has been completed for military branch of service|Service to LH is done. Migrate separation_locations from EVSS to Lighthouse|
|Common API <br>wss-common-services-web-11.6/rest/ratingInfoService/11.6/findRatingInfoPID<br> wss-form526-services-web-v2/rest/form526/v2/ratedDisabilities|Is not being migrated. [Details in this slack thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1676574262007819). Potential replacement service is production.||ToDo - Check with Kyle on what's expected. <br> Possible changes - Change the form526 wizard to use the Lighthouse veteran_verification/v1/disability_rating|

## Tech Discovery
#### Endpoint mappings
|eVSS Endpoints|New API|vets-api Repo Location|Notes|
|--------|------------------|------|------|
|/getpdf|Benefits Intake API|?|Will be in v2 of [Benefits Intake API](https://developer.va.gov/explore/benefits/docs/benefits?version=current)|
|/submit_all_claim|LH Benefits Claims API|modules/claims_api/|[eVSS Docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/postSubmitFormV2)|
|/validate|LH Benefits Claims API|?|same eVSS URI as /submit|
|/rateddisabilities|Veterans Verification API includes rated_disabilities endpoint|modules/veteran_verification/|Assuming we should just use v2? [eVSS docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526) are maybe for v2? ([LH docs](https://developer.va.gov/explore/verification/docs/veteran_verification?version=current))?|
|/benefits_reference_data|Benefits Reference Data API|modules/claims_api/|New API is in production, [eVSS docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/benefits_reference_data/getBenefitsReferenceData), [LH docs](https://developer.va.gov/explore/benefits/docs/benefits_reference_data?version=current)|

Base path for submit, getPDF, validate, and get_rated_disabilities: `"#{Settings.evss.url}/#{Settings.evss.alternate_service_name}/rest/form526/v2"`

#### Existing Lighthouse Service Implementation
The service/module architecture used in [lib/lighthouse](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/lighthouse) might be a good approach. Note they rely on client frameworks established in [Common::Client::Base](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/base.rb) and more specific client implementations in [/common/client/concerns](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/common/client/concerns) where applicable.
