# Timely and Truthful Information and Tracking

## Purpose
The purpose of this document is to describe and align development teams and stakeholders on what will be delivered and why we need this now. It is a living document which serves as the source of truth and a communication tool for keeping stakeholders informed about the progress.

## Problem or Opportunity
Through recent Veteran shadowing research and discovery, we learned that **Veterans lack timely and truthful information and tracking about their claim.**

Once a Veteran hits “submit,” the messaging they receive does not reflect the true status of a claim, setting false expectations for Veterans on the timeline for their claims processing. Similarly, after leaving the confirmation page, Veterans have nowhere on VA.gov to follow up on a submission until it appears in Claim Status Tool. This creates a communication gap— up to multiple days for some Veterans. 

Veterans told us that they want a record that shows they completed and submitted an application– in part because they do not trust VA. However, only Veterans with successful claim submissions receive brief claim summaries and Claim IDs they can use to follow up on their claim. The Veterans most in need of help due to failure do not receive a “receipt” or usable reference number they can use to call VBA or the Contact Center. 

#### As Jobs to Be Done ([When [*situation/motivation*] I need [*desire*] so I can [*result*])
1.  When I want to know my claim's status, I need it to always be available so it's accessible at any time.
2.  When I submit my claim, I need VA.gov to set realistic expectations of how long it will take to be submitted so I can not feel worried that VA.gov forgot about me, or that I missed an important email about my claim's status.
3.  When I want to know my claim status, I need the VA to provide me different ways to get it, so I can make a choice that's most accomodating with my physical condition, environment, or preference.
4.  When I want a record of my claim, I need the VA to make this easy to do, so I can save it for my records
5.  When I want to track my claim, I need the VA to make this easy to do, so I can do this quickly
6.  When I want to know my claim status, I need VA.gov to use straightforward, honest, and understandable language when describing it so I feel that I understand it correctly.

## Proposed Solution
We're driven by the goal of providing Veterans timely and truthful information about their claim after the claim is submitted. We'll do this throughout the post-submission journey at the touchpoints that make the most sense for the Veteran. We'll leverage our research to inform user interface, copy, and communication changes to display and deliver information to the Veteran.

We'll improve the first touchpoints after submission, particularly when the Veteran is waiting for their claim to be prepared for submission by setting clear expectations and improving the language we use to communicate status. We'll contact the Veteran more quickly via email with a confirmation of their claim submission, tracking information, and instructions on how to track their claim. We'll also provide the Veteran a completed copy of their claim, a list of their evidence documents, and leverage MyVA to display current claim status.

#### As User Stories (As a [*user or persona*] I want [*need/desire*] so I can [*result*])
1. As a Veteran I want the status of my current claim always available to me so that I can know the status of my claim at any time.
2. As a Veteran I want va.gov to set my expectations for how long it will take to submit my claim, so that I am not disappointed or confused
3. As a Veteran I want calling the Contact Center for claims status to be a choice, not a requirement, so that I have agency in how I interact with the VA.
4. As a Veteran I want getting a claim record to be easy, so I can save it for my records
5. As a Veteran I want tracking my claim to be simple and easy so that I can do this quickly
6. As a Veteran I want VA.gov to use straighforward, honest, and understandable language when describing my claim status, so I feel I understand it correctly

## Success
*The following 18 items is a list of the same 6 items rephrased using 3 different frameworks*
#### As Themes [Ensure *result* for *stakeholder*]
1. Ensure the current status of a claim is always available to Veterans
2. The steps and timeline for claim submission are set truthfully for the Veteran
3. Ensure that Veterans have accessible ways to access their claim status
4. Make getting a claim record easy for Veterans
5. Ensure that tracking a claim is simple and easy for Veterans
6. Ensure the language we use is straighforward and understandable so that understanding claim status is trivial





## In Scope
- Revised "submission model" including changes to language, status types
- Creation of new emails sent at specific times during submission
- Improved human-centered reference number for Veterans who don't receive a Claim ID
- A more detailed claim summary for Veterans to keep for their record
- Revised content and design in both UI and email
- Recommended changes to My VA, if needed to ensure consistency
- Recommended changes to Claim Status Tool, if needed to ensure consistency
- Recommended changes to mobile app, if needed to ensure consistency

## Out of Scope
- Changes to MyVA
- Changes to CST
- Changes with how 526 and ancillary forms are processed after a sucessfull submission

## Risks & Challenges
- MyVA is managed by another team, and we have no ability to change the way this works today
- CST is managed by another team, and we have no ability to change the way this works today
- The EVSS to Lighthouse migration is underway. This work is dependent on the sucessfull migration to be completed.
- Bugs and issues that arise from the migration may be unexpected errors that must be resolved. We may or may not have control over the timing, design, and quality of these fixes

## Plan
All user stories are contained in this [Epic](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/82076), we're tracking in Zenhub.
