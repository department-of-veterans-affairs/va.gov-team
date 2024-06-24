# Initiative Brief: Submission Experience

# 1. Purpose
The purpose of this document is to describe and build alignment for what problems we aim to solve, why we’vre solving them, and how we plan to improve the Veteran submission experience. It is a living document which serves as the source of truth and a communication tool for keeping stakeholders informed about the progress.

# 2. Problem or Opportunity
Through recent Veteran shadowing research and discovery In Q1 2024, we discovered that many Veterans do not have a positive experience when submitting a claim for disability compensation. After a Veteran clicks “submit” on a disability benefits application on va.gov they experience errors, confusion, a lack of clarity, missing information, and cognitive load that overburdens the Veteran during a time where they are asked to recall traumatic events.

# 3. Proposed Solution
We aim to give Veterans more clarity on the status and outcome of their claim submissions, with a means of tracking their claim status that is timely and intuitive. At the time of submission, the Veteran will receive a confirmation or acknowledgement that the claim was accepted, leading to increased trust and a reduced possibility of Veterans creating duplicate claims. In scenarios where a system failure causes the Veteran's claim not to be submitted, we'll inform the Veteran in plain language about what to expect and will make efforts to reduce the burden of resubmission or eliminate it altogether. Veterans will receive on-screen messaging indicating the outcome of their claim submission and where to go for more details, so that they feel more confident and trusting of the VA. After a submission, the Veteran will receive an email confirmation with details on their claim and plain language instructions on how to track it. Veterans will also receive an outline or copy of the information submitted in their claim, which they can keep for their records. In general, we'll improve the fidelity and understandability of communication so that Veterans feel confident knowing the status of their claims.

# 4. Delivery
Using plain, Veteran-focused language to describe the five delivery phases helps maintain focus on Veteran needs and simplifies stakeholder communications. Each phase includes Design, Testing, Implementation, and Research, which are prioritized using a balance of usability, feasibility, viability, and Veteran value. Phase one is prioritized because it addresses one of the most painful parts of the Veteran experience, where much is known and the implementation is less complex. Moreover, this phase spans the entire user journey, leading to a high-value, low-effort implementation that creates forward momentum for the team.

| Phase | Feature Name | Forecasted Date |
|-------|--------------------------------------------------------------|--------------------------------|
| 1     | [Veterans lack timely & truthful information about their claim after submission](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/82076) | August ‘24|
| 2     | Veterans need a record of their claim and a way to track it  | August ‘24|
| 3     | Veterans sometimes submit duplicate claims because Veterans aren’t sure if the claim went through | September ‘24|
| 4     | Veterans experience a burden after they attempt to submit a disability claim | Q4|
| 5     | When Veterans resubmit the failed component of their claim they don’t know if the VA has all their claim material | Q4|

## 4.1 In Scope
This initiative focuses on all paths for the submission and post submission experience. 
- Evaluation of user-facing features such as the loading screen during submission and content on the confirmation page
- Post-submission notifications, including confirmation email and message on confirmation page, SMS, web and mobile app notifications, paper mail, etc.
- Outline of information and list of documents submitted (note [concern about filenames potentially containing PII](https://dsva.slack.com/archives/C04KW0B46N5/p1712088148463829?thread_ts=1711557666.821949&cid=C04KW0B46N5)) 
- Reevaluating how the 526 introduces the Claim Status Tool and connects Veterans to it
- Reducing duplicates (rethink when we clear the in-progress form)
  
## 4.2 Out of Scope
- Notification of core 526 submission failures and file upload failures
- Any of the touchpoints in the lifecycle of the claim beyond when the claim is established in VBMS and all initial documents are successfully uploaded
- PDF of complete claim generated as submission-- this may be later state of the outline/copy of claim information submitted
- Given that the Claim Status Tool is not managed by our team, any improvements across products will need to happen in collaboration
- Note that Team 2 is doing work on addressing small and important issues in the non-happy submission paths, and we will need coordinate with them on future-facing work.

# 5. Success
We’ll know we’re sucessfull when the following are true.

* Veteran has clear expectations of submission status
* Veterans have the claim information they need to get help and a copy of their claim
* Fewer duplicate submissions, greater Veteran confidence
* Veterans can find the status of their submission on VA.gov (MyVA and CST)
* Automatic resubmissions happen same day, as needed
* Veteran won’t have to recomplete forms from scratch

# 6. Risks & Challenges
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

# 7. FAQ
### Where can I follow along with this work?
The [Submission Experience](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/78179) Epic in Zenhub is used to track this work.
### When does the submission experience “end”?
When the claim is established in VBMS and all initial doc uploads succeed or the submission process ultimately fails (clarified [in Slack](https://dsva.slack.com/archives/C053UDWMH7U/p1712083884346289?thread_ts=1711719139.052369&cid=C053UDWMH7U)).
### What is the detailed delivery plan?
Each delivery phase of the Submission Experience is detailed in the Epic for each phase. Links provided above in section 5.

# Appendix

## A. May 2024 Replanning
In early 2024, we took the approach of improving Veterans' submission experience across a broad range of Veteran touchpoints, such as pages, static content, email, and copy. Some of the changes we believed would improve the submission experience touched other apps, such as My VA, Claims Status Tool, and the mobile app. However, these apps are out of our control, and attempts to enact change in these Veteran touchpoints would create dependencies on external teams, widen the problem area, and complicate solutioning. This would lead to a slower delivery timeline that left Veterans with a suboptimal experience.

To more quickly meet the needs of the Veterans we serve and increase opportunities for learning, we decided to deliver in an iterative manner, focusing on small and simple interventions in areas of VA.gov that we control. To reduce dependencies and unknowns on external teams and systems, we'll design solutions based on the current state of VA.gov as opposed to unknown future states. Where possible, we'll work with external teams to propose changes that we believe will improve the Veteran's submission experience but won't rely on those teams to solve problems for us. To consider the Veteran's entire user journey and the technology systems that comprise their user experience, we separated the work into five smaller phases, each with separate delivery milestones that we will deliver iteratively. This planning resulted in pausing some in-progress design work to be continued at a later phase (see Appendix A).

## B. Working solution
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
1. Adds a submitting claim step to the beginning of the CST / "[what happens after I file a VA disability claim?](https://www.va.gov/disability/after-you-file-claim/)" steps
2. "date initiated" is the date the claim CESTs

##### Option 6
1. does not add a step and uses that flag-icon (in progress) state on step 1 of 8: claim received
2. "date initiated" is the date the Veteran clicked "submit"

## Eliminating dependencies on other products

### Plan

In this project plan, we deliver iteratively while eliminating dependencies on the Veteran Facing Forms team's [Show status of form submissions to users on My VA and confirmation page initiative](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1170) and design to the current (in production) states of other products like My VA, Claim Status Tool, and the moblie app. This focuses more narrowly on the [problem statement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md#problem-or-opportunity) of:

1. Veterans lack timely and truthful information about their claim


## C. May 2024 Replanning
In early 2024, we took the approach of improving Veterans' submission experience across a broad range of Veteran touchpoints, such as pages, static content, email, and copy. Some of the changes we believed would improve the submission experience touched other apps, such as My VA, Claims Status Tool, and the mobile app. However, these apps are out of our control, and attempts to enact change in these Veteran touchpoints would create dependencies on external teams, widen the problem area, and complicate solutioning. This would lead to a slower delivery timeline that left Veterans with a suboptimal experience.

To more quickly meet the needs of the Veterans we serve and increase opportunities for learning, we decided to deliver in an iterative manner, focusing on small and simple interventions in areas of VA.gov that we control. To reduce dependencies and unknowns on external teams and systems, we'll design solutions based on the current state of VA.gov as opposed to unknown future states. Where possible, we'll work with external teams to propose changes that we believe will improve the Veteran's submission experience but won't rely on those teams to solve problems for us. To consider the Veteran's entire user journey and the technology systems that comprise their user experience, we separated the work into five smaller phases, each with separate delivery milestones that we will deliver iteratively. This planning resulted in pausing some in-progress design work to be continued at a later phase.


## D. Links
[526ez Shadowing Veteran Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md)

[Submission Experience Maps](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711478063212/5b744d81f239e5ae30aaf28ff98414a9dc3c7e72?sender=ubd79255de28cd574d7575469)

[DBEX Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717458460532/5a74ece0ca694a9e6c85b3a1130a8c7b8dabf123?sender=ubd79255de28cd574d7575469)

Submission Research Plan for "Veteran has clear expectations of submission status" [Will update location once published on Github]:https://docs.google.com/document/d/1GLBJqNpNMyOfcidtigNqWd8F2c6adueraY-ybj7Q5E8/edit 
