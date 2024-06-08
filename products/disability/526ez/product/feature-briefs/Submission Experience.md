# Purpose
The purpose of this document is to describe and align development teams and stakeholders on what will be delivered, how, and when. It is a living document which serves as the source of truth and a communication tool for keeping stakeholders informed about the progress.

# Background
Many Veterans do not have a positive experience when submitting a claim for disability compensation. There are multiple issues detailed below that describe errors, confusion, a lack of clarity, missing information, and cognitive load that isn't conducive to the level of quality we aspire to provide for Veterans. This feature focuses on the submission experience starting at the point when the Veteran clicks "submit" on a disability benefits application on va.gov and ending when the claim is established in VBMS and all initial doc uploads succeed or the submission process ultimately fails (clarified [in Slack](https://dsva.slack.com/archives/C053UDWMH7U/p1712083884346289?thread_ts=1711719139.052369&cid=C053UDWMH7U)).   

# Problem or Opportunity
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

# Why
This work will give Veterans more clarity in the outcome of their claim submission, clear status, and means of tracking their claim status. It will also reduce duplicate claims, thereby reducing the time and effort spent by the organization on unnecessary work and direct the effort towards processing on valid claims.

# Proposed Solution
Under this initiative, all Veterans filing a 526 claim via va.gov will be able to
 - Confirm that their claim was accepted/acknowledged at the time of submission
 - Receive an on-screen message indicating the outcome of their claim submission and where to go for more details
 - Have a better and consistent user experince on screen after submitting their claim with clear indication on the outcome
 - Receive a confirmation email with details on their claim and how to track its progress (Claim Status Tool)
 - Have access to an outline or copy of the information submitted in the claim
 - Have a system in place to prevent duplicates when the claim was submitted the first time


See epic [Improve submission user experience #78179](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/78179), which captures the above items (in progress).

This initiative also includes completion of migration of /submit endpoint to Lighthouse

# In Scope
This initiative focuses on all paths for the submission and post submission experience. 
- Evaluation of user-facing features such as the loading screen during submission and content on the confirmation page
- Post-submission notifications, including confirmation email and message on confirmation page, SMS, web and mobile app notifications, paper mail, etc.
- Outline of information and list of documents submitted (note [concern about filenames potentially containing PII](https://dsva.slack.com/archives/C04KW0B46N5/p1712088148463829?thread_ts=1711557666.821949&cid=C04KW0B46N5)) 
- Reevaluating how the 526 introduces the Claim Status Tool and connects Veterans to it
- Avoid duplicates (rethink when we clear the in-progress form)

  
# Out of Scope

- Notification of core 526 submission failures and file upload failures
- Any of the touchpoints in the lifecycle of the claim beyond when the claim is established in VBMS and all initial documents are successfully uploaded
- PDF of complete claim generated as submission-- this may be later state of the outline/copy of claim information submitted
- Given that the Claim Status Tool is not managed by our team, any improvements across products will need to happen in collaboration
- Note that Team 2 is doing work on addressing small and important issues in the non-happy submission paths, and we will need coordinate with them on future-facing work.

# Success
- Improved clarity in the outcome of claim submission on the UI post submission 
- Prevention of submission of duplicate claims via va.gov
- Confirmation/acknowledgement email of successful submission
- Veterans better understand how to track their claims (Claims Status Tool)
- Veterans have access to an outline of copy of their information and list of documents submitted
  
# Risks & Challenges
1. This work is dependent on the /submit endpoint migration from legacy EVSS services to Lighthouse platform and must be completed
2. Technical complexity of /submit endpoint migration
3. Some unknowns with email confirmations
    1. Content guidance and landscape of existing email confirmations on va.gov
    2. Technical implementation
4. Uncertain what we can get back about claim status in all cases immediately after submission
5. User research will require planning around some challenges
    1. Might want to have Veterans submit actual claims, which we know is difficult to recruit for and usually involves sensitive info
    2. Otherwise, how might we understand whether our attempts to mitigate duplicate submissions will work?  
6. Any changes to the Claims Status Tool that impact how the Veteran access their claim information or what they are able to track as related to submission may need a copy/link changes
7. Will need careful collaboration with back-up path and document failures to identify all use cases for full submission flow to make sure there are no missing or inaccurate notifications

# Guiding Principles

# Working solution

The design is based on a couple of different project plans, documented below for the sake of being able to pick them up again when relevant.

## Designing to future state of other products (June 3, 2024) - on hold

### Plan

In this project plan, we are designing to a future point when the Veteran Facing Forms team's [Show status of form submissions to users on My VA and confirmation page initiative](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1170) is complete and other products including My VA, Claim Status Tool, and the mobile app, along with us (the 526 disability benefits application) have aligned on an agreed-upon Veteran-facing submission model and incorporated it into their products. This allows us to address particular known painpoints in a way that is centered on the Veteran journey regardless of team boundaries in the product. Those painpoints (extending the [Problem or Opportunity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md#problem-or-opportunity) statements with more detail) include:

1. Veterans have inaccurate expectations for what happens after they submit a claim.
    2. [The VA claim process after you file your claim](https://www.va.gov/disability/after-you-file-claim/) page shows the first step of "What happens after I file a VA disability claim" as "Claim received", but this does not reflect reality in some scenarios. If the claim includes a private medical records request (4142 / 4142a), if there are retries, or if the claim goes down the backup path, it can take a few days for the claim to be received.
3. Veterans expect a "receipt" (claim details) of what they submitted (available from multiple parts of the product)
4. "Veterans lack timely and truthful information about their claim" > Veterans are unclear on the status of a claim immediately after they click submit. Currently:
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

1. Adds a submitting claim step to the beginning of the CST / "[what happens after I file a VA disability claim?](https://www.va.gov/disability/after-you-file-claim/)" steps
1. "date initiated" is the date the claim CESTs

###### submission terms

1. "preparing" to submit claim - shown on the loading screen in the 30 seconds when the site attempts to CEST the claim and awaits a synchronous response
2. "submitting" claim - an expansive process involving everything the system needs to do to get the claim and supporting docs / forms to their final destinations in VBMS.
1. "date initiated" is the date the claim CESTs
2. "claim received" - the claim and supporting docs / forms have made it to their final destinations in VBMS.

##### Option 6

###### key dostinctions 

1. does not add a step and uses that flag-icon (in progress) state on step 1 of 8: claim received
1. "date initiated" is the date the Veteran clicked "submit"

###### submission terms

1. "preparing" to submit claim - shown on the loading screen in the 30 seconds when the site attempts to CEST the claim and awaits a synchronous response
2. "submitting" claim - an expansive process involving everything the system needs to do to get the claim and supporting docs / forms to their final destinations in VBMS.
1. "date initiated" is the date the Veteran clicked "submit"
2. "claim received" - the claim and supporting docs / forms have made it to their final destinations in VBMS.

## Eliminating dependencies on other products

### Plan

In this project plan, we deliver iteratively while eliminating dependencies on the Veteran Facing Forms team's [Show status of form submissions to users on My VA and confirmation page initiative](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1170) and design to the current (in production) states of other products like My VA, Claim Status Tool, and the moblie app. This focuses more narrowly on the [problem statement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md#problem-or-opportunity) of:

1. Veterans lack timely and truthful information about their claim
