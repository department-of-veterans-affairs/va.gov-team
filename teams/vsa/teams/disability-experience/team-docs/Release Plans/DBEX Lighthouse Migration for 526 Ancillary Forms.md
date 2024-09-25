# Release Plan: Lighthouse Migration for Ancillary Document Uploas

## Purpose
The purpose of this release plan is to document and align the delivery teams and stakeholders on what will be delivered and when. 

## Feature description
There are several ancillary jobs that submit various documents to EVSS after a Form 526 is successfully submitted. As with the Form 526 submission itself, these document upload jobs need to be submitted to Lighthouse instead of EVSS. In this case, we will use the Lighthouse Benefits Documents API.

This release plan refers to the following forms: 
- BDD Instructions, the cover sheet that accompanies the 526 submission to EVSS/LH
- Veteran evidence documents, the Veteran file uploads for disability claim evidence 
- PTSD Ancillary, the 0781 and 0781a data for PTSD claims

Note: 526 Submission - refers to the 526e primary data only, and the migration to LightHouse has already been completed. 


## Project goals
-

## Success criteria


### Current stats


## Resource materials


## New capabilities and changes


## Production release plan
For the BDD release, we want to start by setting the feature flipper to send 1% of BDD uploads to Lighthouse. 
After successfully passing the testing plan, we will then increase usage to 5%, 50%, then 100%.
0781 and the Veteran-uploaded documents will follow a similar pattern, based on how the initial BDD test goes.

Release date: 

Team members: 

Length of time: 

Percentage of Users (and roughly how many users do you expect this to be): 1% of users, ~xxx submissions


## Risks

## Production issues recovery plan
DBEX team Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering teams will be on standby to disable the flippers which would prevent any user starting a new form from entering the path for the new 0781 redirect flow and instead direct them through the original flow for entering or uploading their 0781 and 0781a form/data. 


