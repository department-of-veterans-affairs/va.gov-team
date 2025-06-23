
# Direct Deposit for Non-Veteran Beneficiaries

1. [Overview](#overview)
2. [Purpose](#purpose)
3. [Eligibility](#eligibility)
4. [Access to Direct Deposit Information](#access-to-direct-deposit-information)
   - [Read-Only View](#read-only-view)
   - [Online Updates Not Supported](#online-updates-not-supported)
5. [Analytics](#analytics)
6. [Important Artifacts](#important-artifacts)

## Overview 
This initiative ensures that non-veteran beneficiaries—such as dependents, spouses, and survivors— are informed that they are only able to view their direct deposit information on VA.gov and must call in for updates. Read access was revoked by BGS and Lighthouse and we will need to work at a later time to allow user's access to the edit features. 

## Purpose
- Provide information on how non-veteran beneficiaries (e.g., dependents, survivors) can **view** their direct deposit details.
- Explain why online updates are not supported and how users can make changes via VA assistance.

## Eligibility

Veterans are the only people who can update on VA.gov 
If classified as a Dependent we will show the alert seen in the design below 
Also if classified as "Neither veteran nor dependent" we will show the same alert

Lighthouse has said all of the users below are classified as dependents:
  - Spouses receiving VA benefits
  - Dependents
  - Survivors (e.g., receiving Dependency and Indemnity Compensation)

<details><summary>Lighthouse process for eligibility</summary>
<p>


Lighthouse has a definition/process they're using:

![image](https://github.com/user-attachments/assets/28b39edb-4524-4fed-8f17-1e768eb6bbe1)

Lighthouse created a new field to allow VA.gov to preemptively detect if a user is a veteran or dependent to blocke edits their direct deposit information. That field is called `veteranStatus`

This new field has the following options ([enums found on the LH documentation page](https://developer.va.gov/explore/api/direct-deposit-management/docs?version=current)):

- VETERAN
- DEPENDENT
- NEITHER_VETERAN_NOR_DEPENDENT
- COULD_NOT_DETERMINE_DUE_TO_EXCEPTION

</p>
</details> 


## Access to Direct Deposit Information

### Read-Only View
- Non-veteran beneficiaries can **view** their current direct deposit details (e.g., masked account number, bank name).
- Displayed in a read-only format within the Profile section of VA.gov.

### Online Updates Not Supported
- Direct deposit updates are **not available online** for non-veteran beneficiaries.
- Users will see a message explaining this limitation and the steps to take.

![image](https://github.com/user-attachments/assets/14368ecb-a1a4-4a77-b8b9-75b9b5d4d76a)

## Analytics
- [Basic GA4 template that each person will need to update for their own view of the data](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/5Jm2bveUQDG4SBSAp_OrJQ)

### Launch showing improved metrics 

The big change was a drop in 422's after the new push - but we still have high 502s
#### GET/SHOW

![image](https://github.com/user-attachments/assets/8025d0ab-7ab5-48f1-aa2c-116dca7393a0)

#### PUT/UPDATE 

![image](https://github.com/user-attachments/assets/0b258e5d-9f81-42c9-b1b4-4ca46da647ed)


## Important Artifcats 
-  [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92610)
-  [Designs](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=1855-3868&t=919ZyW3EaSu2495z-0)



