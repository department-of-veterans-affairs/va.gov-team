# VBMS Attributes and Parameters

## Claims, Decision Reviews, Appeals

> **Note** Open Questions  
> - **Appeal Status Unavailable**  
> What leads the CST to display "Appeal Status Unavailable"? (Is it an empty state? Or is it resulting from a network error?)
>
> - **Status - Claim Received**  
> What VBMS state results in the status "Claim received" displayed in the CST? Can a claim be "received" before going into initial review?

See a more comprehensive inventory of claim file values and attributes in the [VBMS CST - Value Map](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/Benefits%20Manage[…]x?d=w085668ae03b147babde5ca7443a9a506&csf=1&web=1&e=eAZci3) on DSVA Sharepoint (requires remote access).

### Attributes
##### Claim
- Claim ID
- Claim Group

##### Type
- Benefit Type
- EP & Claim Label
- Modifier (EP Type)

#####  Claim Status
- Claim Level Status (Described as Phase in EVSS/ LH)
- Ready to Recall
- Deferral Reason

##### Claim Date
- Claim Date
- Days Pending

##### Suspense
- Suspense Date
- Suspense Reason

##### Veteran
- Veteran Name
- File Number (Associated with the Veteran, commonly the veteran's SSN)
- Veteran Flash (Short Claim Description)

##### POA
- POA Code
- Name
- Date
- eFolder Access
- Change of Address Authorization
- Attorney Feeds

##### Workflow Related
- Segmented / Assigned Lane

### Parameters
##### Claim Label / EP Codes (VBMS)
Comprehensive list on [KnowVA](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000011474/Appendix-B.-End-Product-(EP)-Codes)

- 110 Initial Claim
- 010 Initial Claim with 8 or more Contentions
- 020 Additional Claim 
  Claims Received After the Initial Eligibility Decision Added sequentially as 020, 021, 022... and put in a group
- 040 Supplemental Claims

### VBMS Claim Status
- Open
- Ready to Work
- Ready for Decision
- Secondary Ready for Decision
- Rating Incomplete
- Rating Decision Complete
- Rating Correction
- ?? Closed

### Suspense Reasons
- Request for Federal Records
- Request for Non-Federal Records
- Development to the Claimant
- Ready for Decision
- File Transfer
- VA/Contract Exam Requested, Awaiting Results
- Allow Limited POA access
- All Development Received, Review Needed
- Needs Rating Board Attention
- Pending Authorization
- Pending Concur
- Award Action Returned by Authorizer
- Award Action Returned by User
- Ready to Work
- Second Signature Review
- POA Review Needed
- Rating Decision Complete
- Requested/Awaiting Other Evidence
- Pending Initial Development - Std 5103 Notice Not Required
- Pending Initial Development - Std 5103 Notice Sent
-   ...

## Contentions
### Attributes
##### Contention
- Contention Name
- Alternate Contention

##### Type / Description
- Classification
- Contention Type
- Medical (Y/N)
- ? Dependency-Related / Non-Dependency Related ?
- Special Issue(s)

##### Status
- Lifecycle Status

##### Workflow Related
- Automation Indicator

### Parameters
##### Lifecycle Status
- Rating Complete
- Rating Correction
- Secondary Rating Needed (?)

### Contention Type
- New
- Increase
- Secondary
- Reopen
- RFE
- Higher Level Review
- Supplemental

## Tracked Items / Requests

> **Note** Open questions  
> - **Tracked Item Status**  
> Why would something show up as "no longer needed"?
>
> - **Tracked Item Content / Descriptions**  
> Why would a requested item appear in the CST with no description? What descriptive content is available for requests in the CST? Where
> does the description field we get in CST come from (letter, BGS)?\
> Next Step: Ask BGS if they create boilerplate for requested items and also provide list of terms that does not have associated boilerplates.
>
> - **Buddy Statement Requests**  
> What's the difference between "Buddy statement requested" and "Submit
> buddy statements"?
>
> - **Boiler Plate Content**  
> There's a paragraph preview in VBMS that seems to feed the description
> in the UI (free text). It's unclear where this text is pulled in from.
> Is there a BGS data attribute for that this content?

### Attributes
##### Item
- Requested Item

##### Owner
- Sent to

##### Status
- Request Status
- Request Date
- Suspense Date
- Closed Date
- Received Date
- In Error Date
- Suspense Reason

###### Workflow Related
- Follow Up 1
- Follow Up 2

### Parameters

#### Request Status
- NEEDED
- SUBMITTED_AWAITING_REVIEW
- RECEIVED  
  Requested information has been received; completed (oftentimes appended automatically)
- CLOSED  
Tracked item suspense date has expired or item has canceled. Expirations occur automatically, eg veteran doesn't respond with buddy statement within 30 days.
- IN ERROR  
Unnecessary or added by accident

#### Request Types (Item)
- VBMS "Item requested" types don't match document types in the dropdown

#### Development Actions
Development actions generate Tracked Items and Exams
- AO - Explain how exposed to herbicides
- AO - Exposure General Notice
- AO - Notice - free protocol exam for AO exposure
- AO - Tell us if VA treatment provided
- AO Nehmer - After Final Regulation
- AO Nehmer - Prior to Final Regulation
- AO Nehmer - VAE from Veteran
- AO-Tell us specific disability fm herbicides
- ASB - tell us where, when, how exposed ASB-medical evid of disease (biopsy) needed
- ASB-tell us specific disability fm asbestos exposure
- Accidental injury - 21-4176 needed
- Accrued wages from last employer
- Address of cust of child not in household needed
- Address of dependent newded
- Adopted child possible - evidence needed
- Agent Orange
- Amount and % of Support to Child
- Appeal Election Form
- Application has mark onlv - witnesses) needed
- ...

## Exams

## Claim Notes
- Date
- Created by
- Note Text
- Note Type
- Action Taken
- Actions
