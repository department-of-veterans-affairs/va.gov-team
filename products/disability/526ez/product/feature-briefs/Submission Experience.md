# Submission Experience Feature Brief

# 1. Purpose
The purpose of this document is to describe and build alignment for what problems we aim to solve, why we’vre solving them, and how we plan to improve the Veteran submission experience. It is a living document which serves as the source of truth and a communication tool for keeping stakeholders informed about the progress.

# 2. Background
In early 2024 we took the approach of improving Veteran’s submission experience across a broad range of Veteran touchpoints such as pages, static content, email, and copy. Some of the changes we believed would improve the submission experience touched other apps such as My VA, Claims Status Tool, and the mobile app. However, these apps are out of our control and attempts to enact change in these Veteran touchpoints would create dependencies on external teams, widen the problem area, and complicate solutioning. This would lead to a slower delivery timeline that left Veterans with a suboptimal experience. 

Feeling it was best to deliver value more quickly, we decided it was more effective to focus more narrowly on one problem, in parts of the Veteran experience that we can control. Additionally, we decided design solutions to the current state of VA.gov as opposed to possible future states. In May 2024 we decomposed this the submission experience work into five smaller phases, each with seperate delivery milestones that we plan to deliver iteratively. This resulted in some in-progress design work to be temporarily paused, but not wasted (see appendix). By delivering smaller pieces of functionality more often, we reduce technology risk and dependencies on external teams while enabling UX Researchers to test and refine our solutions, and operate more nimbly as a delivery team.

# 3. Problem or Opportunity
In [user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md) conducted in Q1 2024, we discovered that many Veterans do not have a positive experience when submitting a claim for disability compensation. After a Veteran clicks “submit” on a disability benefits application on va.gov they experience errors, confusion, a lack of clarity, missing information, and cognitive load that overburdens the Veteran during a time where they are asked to recall traumatic events. The problems we discovered are:

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

# 4. Proposed Solution
We aim to give Veterans more clarity in the status and outcome of their claim submission, with a means of tracking their claim status that is timely and intuitive. At the time of submission, the Veteran will get a confirmation or acknowledgement that the claim was accepted leading to increased trust and a reduced possibility that Veterans create duplicate claims. In scenarios where a system failure causes the Veteran’s claim to not be submitted, we’ll tell the Veteran in plain language what to expect and will make efforts to reduce the burden of resubmission or eliminate it altogether. Veterans will recieve on-screen messaging indicating the outcome of their claim submission and where to go for more details so that the Veteran is more confident and trusting of the VA. After a submission, the Veteran will recieve an email confirmation with details on their claim and plain language instruction on how to track it. Veterans will receive an outline or copy of the information submitted in their claim so they can keep it for their records. In general, we’ll improve the fidelity and understandability of communication so Veterans feel confident knowing the status of their claim.

# 5. Delivery Phases
Delivery is broken up in to five phases. Using plain, Veteran-focused language to describe delivery phases maintains focus on Veteran needs and simplifies stakeholder communications. These are prioritized using a balance of usability, feasibility, viability, and Veteran value. Each phase includes Design, Testing, Implementation, and Research. In keeping with an agile delivery approach, more information is known about earlier phases than later ones. We expect some change to occur as a result of new information, outcomes of research, testing, and pilot programs.

1. Veterans lack timely and truthful information about the claim
2. Veterans need a record of their claim and a way to track it
3. Veterans sometimes submit duplicate claims because Veterans aren’t sure if the claim went through
4. Veterans experience a burden after they attempt to submit a disability claim
5. When Veterans resubmit the failed component of their claim they don't know if the VA has all their claim material

## 5.1 In Scope
This initiative focuses on all paths for the submission and post submission experience. 
- Evaluation of user-facing features such as the loading screen during submission and content on the confirmation page
- Post-submission notifications, including confirmation email and message on confirmation page, SMS, web and mobile app notifications, paper mail, etc.
- Outline of information and list of documents submitted (note [concern about filenames potentially containing PII](https://dsva.slack.com/archives/C04KW0B46N5/p1712088148463829?thread_ts=1711557666.821949&cid=C04KW0B46N5)) 
- Reevaluating how the 526 introduces the Claim Status Tool and connects Veterans to it
- Reducing duplicates (rethink when we clear the in-progress form)
  
## 5.2 Out of Scope
- Notification of core 526 submission failures and file upload failures
- Any of the touchpoints in the lifecycle of the claim beyond when the claim is established in VBMS and all initial documents are successfully uploaded
- PDF of complete claim generated as submission-- this may be later state of the outline/copy of claim information submitted
- Given that the Claim Status Tool is not managed by our team, any improvements across products will need to happen in collaboration
- Note that Team 2 is doing work on addressing small and important issues in the non-happy submission paths, and we will need coordinate with them on future-facing work.

# 6. Success
We’ll know we’re sucessfull when the following are true.

* Veteran has clear expectations of claim status
* Fewer calls to the contact center for claims status
* Veterans know the status of their claim
* Veteran can get help tracking their claim if they need it
* Fewer duplicate submissions and greater Veteran confidence
* Veteran resumbissions are at 0%
* Automatic resubmissions happen same day, as needed
* Veteran won’t have to recomplete forms from scratch

[consider removing]
- Improved clarity in the outcome of claim submission on the UI post submission 
- Prevention of submission of duplicate claims via va.gov
- Confirmation/acknowledgement email of successful submission
- Veterans better understand how to track their claims (Claims Status Tool)
- Veterans have access to an outline of copy of their information and list of documents submitted
  
# 7. Risks & Challenges
1. This work is dependent on the /submit endpoint migration from legacy EVSS services to Lighthouse platform and must be completed first
2. Some unknowns with email confirmations
   1. Content guidance and landscape of existing email confirmations on va.gov
   2. Technical implementation
3. Uncertain what we can get back about claim status in all cases immediately after submission
4. User research will require planning around some challenges
   1. Might want to have Veterans submit actual claims, which we know is difficult to recruit for and usually involves sensitive info
   2. Otherwise, how might we understand whether our attempts to mitigate duplicate submissions will work?  
5. Any changes to the Claims Status Tool that impact how the Veteran access their claim information or what they are able to track as related to submission may need a copy/link changes
6. Will need careful collaboration with back-up path and document failures to identify all use cases for full submission flow to make sure there are no missing or inaccurate notifications
7. Access to quantitative data, used to supplement our qualitiatie research can be challenging to get, and in some cases not available.


# 8. FAQ
#### Where can I follow along with this work?
The [Submission Experience](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/78179) Epic in Zenhub is used to track this work.

#### When does the submission experience “end”?
When the claim is established in VBMS and all initial doc uploads succeed or the submission process ultimately fails (clarified [in Slack](https://dsva.slack.com/archives/C053UDWMH7U/p1712083884346289?thread_ts=1711719139.052369&cid=C053UDWMH7U)).

# Appendix

## A. Working solution
The design is based on a couple of different project plans, documented below for the sake of being able to pick them up again when relevant.

### Designing to future state of other products (June 3, 2024) - on hold

#### Plan
In this project plan, we are designing to a future point when the Veteran Facing Forms team's [Show status of form submissions to users on My VA and confirmation page initiative](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1170) is complete and other products including My VA, Claim Status Tool, and the mobile app, along with us (the 526 disability benefits application) have aligned on an agreed-upon Veteran-facing submission model and incorporated it into their products. This allows us to address particular known painpoints in a way that is centered on the Veteran journey regardless of team boundaries in the product. Those painpoints (extending the [Problem or Opportunity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md#problem-or-opportunity) statements with more detail) include:

1. Veterans have inaccurate expectations for what happens after they submit a claim.
   2. [The VA claim process after you file your claim](https://www.va.gov/disability/after-you-file-claim/) page shows the first step of "What happens after I file a VA disability claim" as "Claim received", but this does not reflect reality in some scenarios. If the claim includes a private medical records request (4142 / 4142a), if there are retries, or if the claim goes down the backup path, it can take a few days for the claim to be received.
2. Veterans expect a "receipt" (claim details) of what they submitted (available from multiple parts of the product)
3. "Veterans lack timely and truthful information about their claim" > Veterans are unclear on the status of a claim immediately after they click submit. Currently:
   3. A claim does not show up in My VA / Claim Status Tool for over a day after submission
   4. We send a link to the Claim Status Tool in a confirmation email before the claim is available there, creating a temporary dead end
  
### Design work - not yet complete

See [Figma: Submission Experience](https://www.figma.com/design/qyTtKDOTHZPGU59PAfqVhq/Submission-Experience?node-id=0-411&t=uzTuyZlBGx8mcw3q-1)

We have been through two cycles of diverging and converging on design work so far. Currently we have alternatives along two variables: 
1. Design approaches: "standalone confirmation page" or "process list")
2. Submission models: "option 5" or "option 6"

#### Design approaches

Visual language for how we convey submission status, mainly the 526 confirmation screen.

##### Standalone confirmation page

This is close to our current visual language, with a loading screen and confirmation screen. It adds emails at key points and modifies content of an existing email. 

##### Process list

This approach uses the Process List pattern that replaces the loading screen and confirmation screen. The goal is to have a clear indication of what is happening and what will happen next from the time of clicking "submit" until the step that would be the confirmation screen. 

#### Submission models

What we mean by key terms used to describe certain steps or statuses in the submission process. These terms include "submitting", "submitted", "initiated", "processing", "sending", "preparing", "in progress", "pending", "received"

##### Option 5

###### key distinctions

1. Adds a "submitting claim" step to the beginning of the CST / "[what happens after I file a VA disability claim?](https://www.va.gov/disability/after-you-file-claim/)" steps
2. "date initiated" is the date the claim CESTs

###### submission terms

1. "preparing" to submit claim - the 30 second period when we show the loading screen while we wait for a synchronous response to attempting to CEST the claim
1. "submitting" claim - a broad term for all the processes the system does to get all pieces of the claim, including supporting / ancillary docs and forms into their final destination in VBMS. 
   1. shown as a distinct step in the CST
1. "date initiated" - date the claim CESTs
1. "claim received" - all pieces of the claim, including supporting / ancillary docs and forms have arrived in their final destination in VBMS

##### Option 6

###### Key distinctions

1. does not add a step and uses the flag-icon (in progress) state on step 1 of 8: "claim received"
2. "date initiated" is the date the Veteran clicked "submit"

###### submission terms

1. "preparing" to submit claim - the 30 second period when we show the loading screen while we wait for a synchronous response to attempting to CEST the claim
1. "submitting" claim - a broad term for all the processes the system does to get all pieces of the claim, including supporting / ancillary docs and forms into their final destination in VBMS
   1. CST shows "claim received" as the in-progress (not completed) step at this point. 
1. "date initiated" - date the Veteran clicked "submit"
1. "claim received" - all pieces of the claim, including supporting / ancillary docs and forms have arrived in their final destination in VBMS

## Eliminating dependencies on other products

### Plan

In this project plan, we deliver iteratively while eliminating dependencies on the Veteran Facing Forms team's [Show status of form submissions to users on My VA and confirmation page initiative](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1170) and design to the current (in production) states of other products like My VA, Claim Status Tool, and the moblie app. This focuses more narrowly on the [problem statement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md#problem-or-opportunity) of:

1. Veterans lack timely and truthful information about their claim




