# Background
This feature addresses the combined space of Services platform migration to Lighthouse for /submit endpoint and how the Veterans are informed of the status of their 526 submission. 

This initiative focuses on the experience of submission and after submission of a disability benefits claim, across all channels. The scope of this is starting at the point when the Veteran clicks "submit" on a disability benefits application on va.gov and ending when the claim is established in VBMS and all initial doc uploads succeed or the submission process ultimately fails (clarified [in Slack](https://dsva.slack.com/archives/C053UDWMH7U/p1712083884346289?thread_ts=1711719139.052369&cid=C053UDWMH7U)).   

# Problem or Opportunity
1. How might we provide Veterans timely and truthful information about their claim?
    - Veterans want to track their claim and ensure it doesn't get stuck, but they don't know how to do this.
    - Veterans feel that they have to call the Contact Center to get recent information about the status of their claim
2. Some Veterans don't have a "receipt" of what they submitted
   - Some Veterans can't track the status of their claim, so they can't get updated information
3. We want to reduce burden to Veterans after they attempt to submit a disablity claim, in terms of:
    - Having to resubmit documents or forms for ancillary jobs
    - Veterans have to recomplete forms from scratch when 4142 or 781 fails
    - Having long delays before their claim is successfully submitted
4. When Veterans resubmit the failed component of their claim they don't know if the VA has all their claim material
5. Veterans sometimes submit duplicate claims because Veterans aren't sure if the claim went through. This requires additional effort on the part of VSRs and the organization to identify and manage and respond, and it will delay the Veteran's claim processing.    

# Why
This initiative is created to complete the migration and give Veterans more clarity in the outcome of their claim submission and track the status of their claim. 

This work will not only give the Veterans clear indication of submission status and means of tracking claims, but also reduce duplicate claims, thereby reducing the time and effort spent by the organization on unnecessary work and direct the effort towards processing on valid claims.

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

- /submit endpoint migration is part of VA services platform migration from legacy EVSS services to Lighthouse platform and must be completed.
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
- Lighthouse /submit endpoint migration complete
- Improved clarity in the outcome of claim submission on the UI post submission 
- Prevention of submission of duplicate claims via va.gov
- Confirmation/acknowledgement email of successful submission
- Veterans better understand how to track their claims (Claims Status Tool)
- Veterans have access to an outline of copy of their information and list of documents submitted
  
# Risks
1. Technical complexity of /submit endpoint migration
2. Some unknowns with email confirmations
    1. Content guidance and landscape of existing email confirmations on va.gov
    2. Technical implementation
3. Uncertain what we can get back about claim status in all cases immediately after submission
4. User research will require planning around some challenges
    1. Might want to have Veterans submit actual claims, which we know is difficult to recruit for and usually involves sensitive info
    2. Otherwise, how might we understand whether our attempts to mitigate duplicate submissions will work?  
5. Any changes to the Claims Status Tool that impact how the Veteran access their claim information or what they are able to track as related to submission may need a copy/link changes
6. Will need careful collaboration with back-up path and document failures to identify all use cases for full submission flow to make sure there are no missing or inaccurate notifications

# Plan

# Guiding Principles
