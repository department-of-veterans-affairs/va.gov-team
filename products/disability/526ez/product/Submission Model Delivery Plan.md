# Submission Model Delivery Plan for 526ez

In [user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md), we discovered the following problems:
1. Veterans lack timely and truthful information about their claim
    - Veterans want to track their claim and ensure it doesn't get stuck, but they don't know how to do this.
    - Veterans feel that they have to call the Contact Center to get recent information about the status of their claim
2. Some Veterans don't have a "receipt" of what they submitted
   - Some Veterans can't track the status of their claim, so they can't get updated information
3. Veterans experience a burden after they attempt to submit a disability claim, in terms of:
    - Having to resubmit documents or forms for ancillary jobs
    - Veterans have to recomplete forms from scratch when 4142 or 781 fails
    - Having long delays before their claim is successfully submitted
4. When Veterans resubmit the failed component of their claim they don't know if the VA has all their claim material
5. Veterans sometimes submit duplicate claims because Veterans aren't sure if the claim went through. This requires additional effort on the part of VSRs and the organization to identify and manage and respond, and it will delay the Veteran's claim processing.

## Goals
- Improved clarity in the outcome of claim submission on the UI post submission 
- Prevention of submission of duplicate claims via va.gov
- Confirmation/acknowledgement email of successful submission
- Veterans better understand how to track their claims (Claims Status Tool)
- Veterans have access to an outline of copy of their information and list of documents submitted


## Scope
This initiative focuses on all paths for the submission and post submission experience. 
- Evaluation of user-facing features such as the loading screen during submission and content on the confirmation page
- Post-submission notifications, including confirmation email and message on confirmation page, SMS, web and mobile app notifications, paper mail, etc.
- Outline of information and list of documents submitted (note [concern about filenames potentially containing PII](https://dsva.slack.com/archives/C04KW0B46N5/p1712088148463829?thread_ts=1711557666.821949&cid=C04KW0B46N5)) 
- Reevaluating how the 526 introduces the Claim Status Tool and connects Veterans to it
- Avoid duplicates (rethink when we clear the in-progress form) 


Out of Scope: 
- Notification of core 526 submission failures and file upload failures
- Any of the touchpoints in the lifecycle of the claim beyond when the claim is established in VBMS and all initial documents are successfully uploaded
- PDF of complete claim generated as submission-- this may be later state of the outline/copy of claim information submitted
- Given that the Claim Status Tool is not managed by our team, any improvements across products will need to happen in collaboration
- Note that Team 2 is doing work on addressing small and important issues in the non-happy submission paths, and we will need coordinate with them on future-facing work.

Delivery deadline: TBD

## Relevant Links
- [Submission Experience Model Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md)
  - [Timely & Truthful Information and Tracking](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/timely-and-truthful.md)
  - TBD

## Risks / Impediments
- This work is dependent on the /submit endpoint migration from legacy EVSS services to Lighthouse platform and must be completed. This migration also updates the 526ez online form to the 2022 version, as part of the [Toxic Exposure Delivery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/Toxic%20Exposure%20Delivery%20Plan.md) intiative.

## Delivery Plan
This delivery plan is split into the features that will be delivered that all contribute to an improved submission experience model for Veterans.

### Timely & Truthful Information and Tracking

#### Milestone: Design Phase MVP Solution
**Estimated Duration**: TBD  
**Actual Delivery Date**: TBD   
**Environment**: N/A    
**Building Blocks:**    
 - [ ] TBD

#### Milestone: Timely & Truthful Implementation
**Estimated Duration**: TBD  
**Actual Delivery Date**: TBD   
**Environment**: Staging    
**Building Blocks:**    
 - [ ] TBD

