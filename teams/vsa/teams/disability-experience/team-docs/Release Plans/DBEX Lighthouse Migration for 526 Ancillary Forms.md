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
- Using the Lighthouse API for ancillary jobs should succeed at a rate that is equal to or better than the existing EVSS API.

## Resource materials
- [[Epic] Lighthouse Document Upload Migration #83837](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83837)
- [Lighthouse Benefits Documents API](https://dev-developer.va.gov/explore/api/benefits-documents/docs?version=current)


## New capabilities and changes
- DataDog Monitors: each type of upload will have a DataDog dashboard for staging and production to track how many uploads are attempted to Lighthouse vs EVSS, categorized as success or failure. 
- Slack Alerts: each type of upload will trigger a slack alert in case of an upload failure with exhausted retries.

## Production release plan
Thorough testing in the staging environment will be done for each type of upload, starting with BDD, then 0781, then Veteran Evidence Uploads. The plan is to "rehearse" the release on staging to make sure everything works as expected before incrementally rolling out the release on production. The QA checklist is linked in issue https://github.com/department-of-veterans-affairs/va.gov-team/issues/90005

### BDD 
For the BDD release, we want to start by setting the feature flipper to send 1% of BDD uploads to Lighthouse. 
After successfully passing the testing plan, we will then increase usage to 5%, 50%, then 100%.

- **Release date for 1%:** Thursday Oct 24
- **Release date for 5%:** Monday Oct 28
- **Release date for 50%:** Thursday Oct 31
- **Release date for 100%:** Wednesday Nov 6


### 0781 
For the 0781 release, we want to start by setting the feature flipper to send 1% of 0781 uploads to Lighthouse. 
After successfully passing the testing plan, we will then increase usage to 5%, 50%, then 100%.

- **Release date for 1%:** Wednesday Nov 13
- **Release date for 5%:** Friday Nov 15
- **Release date for 50%:** Tuesday Nov 19
- **Release date for 100%:** Thursday Nov 21


### Veteran Evidence Uploads 
For the Evidence Upload release, we want to start by setting the feature flipper to send 1% of uploads to Lighthouse. 
After successfully passing the testing plan, we will then increase usage to 5%, 50%, then 100%.

- **Release date for 1%:** Monday Nov 18
- **Release date for 5%:** Thursday Nov 21
- **Release date for 50%:** Monday Nov 25 (Thanksgiving break between here and next step)
- **Release date for 100%:** Monday Dec 2


**Team members:**
- [Nathan Burgess](https://github.com/NB28VT)
- [Alison Jones](http://www.github.com/ajones446)
- [Kyle Soskin](https://github.com/kylesoskin)
- [Lisa Capaccioli](https://github.com/lisacapaccioli)
- [Emily Theis](https://github.com/emilytheis)


## Risks
The biggest risk is that uploads could fail silently if a failure is not recorded correctly and/or if the email fails to send. Datadog analytics and alerts will be in place to monitor for these risks (specific monitors listed above.)

## Production issues recovery plan
DBEX team Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering teams will be on standby to disable the flippers which redirect all submissions back to the existing EVSS path. The recovery playbook is included in the QA document linked in this issue https://github.com/department-of-veterans-affairs/va.gov-team/issues/90005
