# Pension 527EZ
**The Pension and Burial forms provide the 21P-527EZ and 21P-530 forms were created an developed in unison. You'll notice there is mention of both forms throughout this folder. If you'd like to learn more about the Burials 530 form visit the [Burial 530 documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials) inside the Burials and Memorials Hub.**

## Problem Statement
Veterans want to receive pensions and burial benefits, but it is currently cumbersome for them to have to apply via paper forms or eBenefits; as a result they have difficult time applying for their pensions and burial benefits.

## Points of Contact

* Slack: [#pensions-burials](https://dsva.slack.com/channels/pensions-burials)

|Name|Role|Email|
|----|----|-----|
|Chris Marino|	VONAPP/SFTP Contact	|Christopher.Marino2@va.gov|

## Data Flow
Submission of Pension and Burial forms is a multi-step, asynchronous flow that allows for Document Uplaods.

### Claim
1. A User hits submit on the React form, and a JSON serialization is sent to the backend.
1. The backend validates the JSON data against a JSON-Schema found in vets-json-schema. If it fails, an error is returned and logged.
1. The claim is saved in the SavedClaims table with a `form_id` matching either 21P-527EZ or 21P-530
1. A `GenerateClaimPDFJob` background job is started to create a PDF representation of the claim, and treat it like an uploaded Document
1. A Confirmation Number is returned to the user

### Documents

1. A user may be allowed or required to upload PDFs, PNGs and JPGs as supporting documentation.
1. The file is uploaded to S3, stored in the `dsva-vetsgov-{env}-claims` bucket, under a `claims/cache/#{form_id}/#{guid}` folder.
1. A record to the S3 location is stored in the `PersistentAttachment` table, where a `guid` is created.
1. The `guid` is returned to the frontend where it is stored as a reference to the uploaded file in the claim.
1. When the Claim is submitted, any file reference `guids` found in the form are associated with the `SavedClaim`
1. Each `PersistentAttachment` is told to process itself according to the Pension/Burial Workflow
1. The final task in the workflow marks the `PersistentAttachment` as successfully processed.
1. The final version of the document is stored in the `dsva-vetsgov-{env}-claims` bucket, under a `claims/store/#{form_id}/#{guid}` folder. The Initial Uploaded version is retained in the `cache` folder.

#### Workflow Description

The Document Upload workflow goes through several background job to ensure that all submitted documents end up as PDFs that have stamps indicating that they were received by vets.gov, the confirmation number of the claim, and the time it was received.

## Monitoring
* There is no health check for the SFTP connectivity that is currently used to transfer the finished Claim Documents.
* Check for Sentry errors relating to `Workflow::Runner`, `Net::SFTP`.
* _TODO:_ A rake task should be added to output a daily report of `PersistentAttachments` that are associated with `SavedClaims`, but have not been processed.
* _TODO:_ A rake task should be added to output a daily report of failed Sidekiq jobs that involve `Workflow::Runner` workers, potentially filtering them to just Pension/Burial.

##  Remediation
* Each file as it was originally uploaded is stored in S3 in the `dsva-vetsgov-{env}-claims` bucket, under a `claims/cache/#{form_id}/#{guid}` and can be manually retrieved if necessary. If there is manual remediation involved (e.g., conversion to pdf failed), the document can be re-uploaded with the same name and `PersistentAttachments#process` called on the model associated with the file.

## Cheatsheet

* React code for Pension is at [vets-website/src/js/pensions/*]
* Controller for EDU is [vets-api/app/controllers/v0/pension_claims_controller], which is a subclass of [ClaimsBaseController]
* The Workflow used by Documents uploaded is defined in the [PensionBurial Workflow] and File Upload Validations are defined in [ClaimDocumentation::Uploader]

## Notes (for submission numbers with SFTP)
* GA is run on Eastern Time as is the SFTP server
* The PDF generation process / submission to SFTP server runs and establishes folders on UTC
* Submission numbers will not correlate on the day to day level between GA and SFTP 

### Business Owner:
 - Kevin Friel (Assistant Director for Pension & Fiduciary Service)
 
### Stakeholders:
 - Kristina Messenger - Chief, P&F Service
 - Danny McCargar
 - Terrence Minyard
 
### OIT Stakeholders:
 - OBPI
 - Chris Marino (SFTP)
 - Angela Gant-Curtis - Program Manager (vets.gov)
 
### Customer:
Veterans over the age of 65
  - Receiving under X amount per year after net worth, income, and deductible expenses are taken into account
  - At least one day of wartime service
  
Veterans under the age of 65
  - Receiving under X amount per year after net worth, income, and deductible expenses are taken into account
  - At least one day of wartime service
  - Considered Permanently and Totally Disabled 
    - Or In a nursing home
    - Or receiving constant care
    
- A majority of the customer segment is over the age of 75. 
- Per Business Owner, currently the applicant tends to be someone working on behalf of the Veterans.

Seeing an uptick in a younger group from the first Gulf War period that are hitting the age of 65
- This customer segment is used to using computers whereas those from previous periods of war (Korean, Vietnam, WWII) would rely primarily on others to apply for the benefit. 
- Others consist of
  - Veteran Service Organizations, Attorneys, Claim Agents
  - Caregivers
  - Family and Friends


### Veteran’s Pension FY 16 Stats:
•	Over 3.6 billion paid 

•	93,992 claims received

•	93,057 claims received

•	Average days to complete (ADC) at end of FY 16 was 76 days

•	Average days pending (ADP) at end of FY 16 was 51 days

•	The average age of Veteran in receipt of pension was 75 in FY 16

