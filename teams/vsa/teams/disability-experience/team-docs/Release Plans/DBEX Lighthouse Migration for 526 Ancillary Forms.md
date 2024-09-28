# Release Plan: Lighthouse Migration for Ancillary Document Uploads

## Purpose
The purpose of this release plan is to document and align the delivery teams and stakeholders on what will be delivered and when. 

## Feature description
There are several ancillary jobs that submit various documents to EVSS after a Form 526 is successfully submitted. As with the Form 526 submission itself, these document upload jobs need to be submitted to Lighthouse instead of EVSS. In this case, we will use the Lighthouse Benefits Documents API.

This release plan refers to the following forms: 
- BDD Instructions, the cover sheet that accompanies the 526 submission to EVSS/LH
- Veteran evidence documents, the Veteran file uploads for disability claim evidence 
- PTSD Ancillary, the 0781 and 0781a data for PTSD claims

Note: 526 Submission - refers to the 526e primary data only, and the migration to LightHouse has already been completed for that. 


## Project goals
- Modernization of the APIs used for the 526e ancillary forms
- Transition from EVSS to Lighthouse API endpoints
- Datadog monitoring

## Success criteria
- 

## Resource materials
- [[Epic] Lighthouse Document Upload Migration #83837](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83837)
- [Lighthouse Benefits Documents API](https://dev-developer.va.gov/explore/api/benefits-documents/docs?version=current)


## New capabilities and changes
- (list the API(s) here???)
- (list the Datadog monitoring here)

## Production release plan

### BDD 
For the BDD release, we want to start by setting the feature flipper to send 1% of BDD uploads to Lighthouse. 
After successfully passing the testing plan, we will then increase usage to 5%, 50%, then 100%.

- **Release date for 1%:** TBD
- **Release date for 5%:** TBD
- **Release date for 50%:** TBD
- **Release date for 100%:** TBD


### 0781 
For the 0781 release, we want to start by setting the feature flipper to send 1% of 0781 uploads to Lighthouse. 
After successfully passing the testing plan, we will then increase usage to 5%, 50%, then 100%.

- **Release date for 1%:** TBD
- **Release date for 5%:** TBD
- **Release date for 50%:** TBD
- **Release date for 100%:** TBD


### Veteran Evidence Uploads 
For the Evidence Upload release, we want to start by setting the feature flipper to send 1% of uploads to Lighthouse. 
After successfully passing the testing plan, we will then increase usage to 5%, 50%, then 100%.

- **Release date for 1%:** TBD
- **Release date for 5%:** TBD
- **Release date for 50%:** TBD
- **Release date for 100%:** TBD


**Team members:**
- [Nathan Burgess](https://github.com/NB28VT)
- [Alison Jones](http://www.github.com/ajones446)
- [Kyle Soskin](https://github.com/kylesoskin)
- [Lisa Capaccioli](https://github.com/lisacapaccioli)
- [Emily Theis](https://github.com/emilytheis)


## Risks


## Production issues recovery plan
DBEX team Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering teams will be on standby to disable the flippers which would ... 
