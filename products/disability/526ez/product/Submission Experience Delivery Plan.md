# Submission Experience Delivery Plan for 526ez

Through recent Veteran shadowing research and discovery, we learned that many Veterans do not have a positive experience when submitting a claim for disability compensation. After a Veteran clicks “submit” on a disability benefits application on va.gov they experience errors, confusion, a lack of clarity, missing information, and cognitive load that overburdens the Veteran during a time where they are asked to recall traumatic events.

## 1. Delivery Phases
Using plain, Veteran-focused language to describe the five delivery phases helps maintain focus on Veteran needs and simplifies stakeholder communications. Each phase includes Design, Testing, Implementation, and Research, which are prioritized using a balance of usability, feasibility, viability, and Veteran value. Phase one is prioritized because it addresses one of the most painful parts of the Veteran experience, where much is known and the implementation is less complex. Moreover, this phase spans the entire user journey, leading to a high-value, low-effort implementation that creates forward momentum for the team.

1. Veterans lack timely and truthful information about their claim
2. Veterans need a record of their claim and a way to track it
3. Veterans sometimes submit duplicate claims because Veterans aren’t sure if the claim went through
4. Veterans experience a burden after they attempt to submit a disability claim
5. When Veterans resubmit the failed component of their claim they don't know if the VA has all their claim material


## 2. Relevant Links
- [High Level Submission Experience Model Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md)
- [High Level Submission Experience Mapping](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715268744654/29695ef6a1327d51f1b2daaa0f26a3f09cb7fedd?wid=54-1716498413540)
- [Timely & Truthful Information and Tracking Feature Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/timely-and-truthful.md)
- Submission Experience Story Map
- Design Assets
- [User Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md)

## 3. High Level Delivery Timeline
| Phase                                                        | Forecasted Date |
|--------------------------------------------------------------|-----------------|
| Veterans lack timely & truthful information about their claim | August ‘24      |
| Veterans need a record of their claim and a way to track it  | August ‘24      |
| Veterans sometimes submit duplicate claims because Veterans aren’t sure if the claim went through | September ‘24   |
| Veterans experience a burden after they attempt to submit a disability claim | October ‘24     |
| When Veterans resubmit the failed component of their claim they don’t know if the VA has all their claim material |                 |

## 4. Phase One: Veterans lack timely & truthful information about their claim
Once a Veteran hits “submit,” the messaging they receive does not reflect the true status of a claim, setting false expectations for Veterans on the timeline for their claims processing. Similarly, after leaving the confirmation page, Veterans have nowhere on VA.gov to follow up on a submission until it appears in Claim Status Tool. This creates a communication gap— up to multiple days for some Veterans.

Veterans told us that they want a record that shows they completed and submitted an application– in part because they do not trust VA. However, only Veterans with successful claim submissions receive brief claim summaries and Claim IDs they can use to follow up on their claim. The Veterans most in need of help due to failure do not receive a “receipt” or usable reference number they can use to call VBA or the Contact Center.

## 4.1 Goals
1. Ensure the current status of a claim is always available to Veterans
2. The steps and timeline for claim submission are set truthfully for the Veteran
3. Ensure that Veterans have accessible ways to access their claim status
4. Make getting a claim record easy for Veterans
5. Ensure that tracking a claim is simple and easy for Veterans
6. Ensure the language we use is straighforward and understandable so that understanding claim status is trivial

## 4.2 In Scope
- Revised "submission model" including changes to language, status types
- Creation of new emails sent at specific times during submission
- Improved human-centered reference number for Veterans who don't receive a Claim ID
- A more detailed claim summary for Veterans to keep for their record
- Revised content and design in both UI and email
- Recommended changes to My VA, if needed to ensure consistency
- Recommended changes to Claim Status Tool, if needed to ensure consistency
- Recommended changes to mobile app, if needed to ensure consistency

## 4.3 Out of Scope
- Changes to MyVA
- Changes to CST
- Changes with how 526 and ancillary forms are processed after a sucessfull submission

## 4.4 Risks / Impediments
- This work is dependent on the /submit endpoint migration from legacy EVSS services to Lighthouse platform and must be completed. This migration also updates the 526ez online form to the 2022 version, as part of the [Toxic Exposure Delivery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/Toxic%20Exposure%20Delivery%20Plan.md) intiative.
- Engineering capacity to implement ideas is limited April - June 2024 for the 2022 526ez Form Rollout / Toxic Exposure delivery initiative.
- Because of this, the delivery plan is phased by discovery, design, and then implementation milestones.

## 4.5 Delivery Plan

#### Milestone: Discovery and Planning Phase
**Estimated Duration**: Sprint 29 (4/10 - 4/23/24) - Sprint 31 (5/8 - 5/21/24)      
**Actual Delivery Date**: TBD        
**Environment**: N/A    
**Building Blocks:**    
- [X] Desk research to understand 526ez submission experience    
- [X] High level submission mapping    
- [X] High level technical feasibility for various solution types for all pathways to submission     

#### Milestone: Design Phase for Vet has clear expectations of claim status
**Estimated Duration**: Sprint 31 (5/8 - 5/21/24) - Sprint 33 (6/5 - 6/18/24)      
**Actual Delivery Date**: TBD       
**Environment**: N/A      
**Building Blocks:**    
- [X] Deeper level designs for solution options     
- [ ] Understanding of technical tradeoffs for approaches     
- [ ] Decision on design that includes:
  - [ ] Set expectations for what is currently happening    
  - [ ] Understand what VA is doing to submit your claim     
  - [ ] Receive "honest" confirmation that claim has succeeded or failed in UI and email      

#### Milestone: Vet has clear expectations of claim status implementation
**Estimated Duration**: Sprint 35 …  
**Actual Delivery Date**: TBD   
**Environment**: Staging    
**Building Blocks:**    
- [ ] TBD


## 5. Phase Two: Veterans need a record of their claim and a way to track it
