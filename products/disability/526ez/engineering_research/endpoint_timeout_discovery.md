# 526 endpoint timeout discovery

## Purpose
Document each endpoint that the 526 from interacts with along with it's timout threshold in two places:
- on the external API
- on our api

## Context
After the IFT failure<citation> it was requested by Steve Albers that we gather this information.  We will use it to
- align our timouts to prevent overloading existing services in the future
- inform upcomming dashboarding work

The original ask:
![Screenshot 2023-08-23 at 1 56 52 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/72a670aa-8a2b-498f-896d-350b59ce9e75)

## Resources
- [Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/64199)
- [Slack thread asking EVSS and LH teams](https://dsva.slack.com/archives/C02CQP3RFFX/p1693249478108359)
- [Slack thread about kicking off this work](https://dsva.slack.com/archives/C04KW0B46N5/p1693237964443529)
    - [API info doc from this ^^^ thread](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2023-05-EVSS-Playbooks-Draft/Draft%20EVSS%20Playbook%20Template.md#api---specific-information)

## Research

### List of Endpoints with their timouts
intenral TO = the timeout set in vets-api
external TO = the timeout set in the external service

| service             | endpoint                                                             | internal TO | external TO                           |
|---------------------|----------------------------------------------------------------------|-------------|---------------------------------------|
| ITF:                |                                                                      |             |                                       |
| EVSS                | /wss-intenttofile-services-web/rest/intenttofile/v1                  | 55          | 120                             |
| LH                  | /services/claims/v2/veterans                                         | 20         | 60                             |
| PPIU:               |                                                                      |             |                                       |
| EVSS                | /wss-ppiu-services-web/rest/ppiuServices/v1/paymentInformation       | 30          | 2 minutes                             |
| LH                  | ???                                                                  | ???         | 60                             |
| PCIU:               |                                                                      |             |                                       |
| EVSS                | /wss-pciu-services-web/rest/pciuServices/v1                          | 30          | 120                              |
| LH                  | ???                                                                  | ???         |                                       |
| Rated Disabilities: |                                                                      |             |                                       |
| EVSS                | /wss-form526-services-web-v2/rest/form526/v2                         | 55         | 120                             |
| LH                  | [veteran verification host]/services/veteran_verification/v2         | 20          | 10                             |
| Submit:             |                                                                      |             |                                       |
| EVSS                | /wss-form526-services-web-v2/rest/form526/v2                         | 355         | 120                             |
| LH                  | ???                                                                  | ???         | ???                                   |
| Document Services:  |                                                                      |             |                                       |
| EVSS                | /wss-document-services-web-#{Settings.evss.versions.documents}/rest/ | 480         | 120                          |
| LH                  | [benefits documents host]/services/benefits-documents/v1/documents   | 20         | 10 (will be 20 at some point) |
| getPDF:             |                                                                      |             |                                       |
| EVSS                | /wss-form526-services-web-v2/rest/form526/v2                         | 55         | 2 minutes                             |
| LH                  | ???                                                                  |             |                                       |
| Submit 4142         |                                                                      |             |                                       |
| Central Mail (EMMS) | /EmmsAPI/VADocument                                                  | none (faraday default)         | 2 minutes                             |
| LH                  | ???                                                                  |             |                                       |
