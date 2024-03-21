# Background
This feature addresses the combined space of Services platform migration to Lighthouse for /submit endpoint and how the Veterans are informed of success or failure of their claim submission.

# Problem or Opportunity
1. In current state, Veterans face frustration and lack of confidence/trust in the VA in handling their claims when they do not get a consistently reliable acknowledgement of the outcome of their claim submission on VA.gov. If the claim is successfully submitted within 30 seconds, they are shown their Claim ID on the screen. In other cases, they are either directed to Claim Status tool or may not get any indication of success or failure of the submission. We also do not know if the lack of clear outcome encourages and allows Veterans to submit the same claim multiple times. Duplicate claims will requre additional effort on the part of VSRs and the organization to identify and manage and respond.     
3. After submitting a disability claim, Veterans expect to receive an email confirmation, as is standard with most similar online transactions. Without this, Veterans lack confidence that their claim was received. This may also lead to duplicate submissions. Veterans may also want to use this email as evidence in case they need to contact VA to move their claim forward.
4. Veterans want to track their claim and ensure it doesn't get stuck, but they don't know how to do this. There is the Claims Status Tool, but we suspect Veterans often don't know about it or don't know how to get there. When they do arrive there, can we improve their experience for tracking a disability claim?
5. /submit endpoint migration is part of VA services platform migration from legacy EVSS services to Lighthouse platform and must be completed.
6. There are some cases where uploading evidence to a claim fails silently. If the Veteran doesn't realize this, they may receive a lower disability rating, or claims may take longer to process than they would, had the evidence been included. 

# Why
This initiative is created to complete the migration and give Veterans more clarity in the outcome of their claim submission. Including the check for duplicates will not only give the Veterans clear indication of submission status but also prevent duplicates, thereby reducing the time and effort spent by the organization on unnecessary work and direct the effort towards processing on valid claims.

# Proposed Solution
Under this initiative, all Veterans filing a 516 claim via va.gov will be able to
 - Get an on-screen message indicating the outcome of their claim submission and where to go for more details 
 - Have a better and consistent user experince on screen after submitting their claim with clear indication on the outcome( or where to check? this may be part of the next feature that evaluates direction to Claim Status tool)
 - Have a system in place to prevent duplicates when the claim was submitted the first time
 - Receive a confirmation email with details on their claim and how to track its progress (Claim Status Tool)

See epic [Improve submission user experience #78179](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/78179), which captures the above items.

This initiative also includes completion of migration of /submit endpoint to Lighthouse

# In Scope
- Lighthouse /submit endpoint migration
- Evaluation of user-facing features such as the loading screen during submission
- Message post-submission (on va.gov /confirmation page)
- Avoid duplicates (rethink when we clear the in-progress form)
  
# Out of Scope
- Notification of core 526 submission failures and file upload failures

# Success
- Lighthouse /submit endpoint migration complete
- Improved clarity in the outcome of claim submission on the UI post submission 
- Prevention of submission of duplicate claims via va.gov
  
# Risks

# Plan

# Guiding Principles
