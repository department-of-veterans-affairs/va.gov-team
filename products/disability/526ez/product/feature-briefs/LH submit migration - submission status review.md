**Background**
This feature addresses the combined space of Services platform migration to Lighthouse for /submit endpoint and how the Veterans are informed of success or failure of their claim submission.

**Problem or Opportunity**
/submit endpoint migration is part of VA services platform migration from legacy EVSS services to Lighthouse platform and must be completed.
In current state, the Veteran does not have a consistently reliable acknowledgement of outcome of their claim submission. If the claim is successfully submitted within 30 seconds, they are shown their Claim ID on the screen. In other cases, they are either directed to Claim Status tool or may not get any indication of success or failure of their claim. We also do not know if the lack of clear outcome encourages and allows them to submit the same claim multiple times. Duplicate claim will requre additional effort on the part of VSRs and the organization to identify and manage and respond.   

**Why**
This initiative is created to complete the migration and give Veterans more clarity in the outcome of their claim submission. Including the check for duplicates will not only assure the Veterans that their claim has been received but also reduce the time and effort spent by the organization on unnecessary work and direct the effort towards processing on valid claims.

**Proposed Solution**
Under this initiative, all Veterans filing a 516 claim via va.gov will be able to
 - Get a message indicating their claim was submitted successfully or failed submission, if applicable
 - Have a better and consistent user experince on screen after submitting their claim with clear indication on the outcome( or where to check? this may be part of the next feature that evaluates direction to Claim Status tool)
 - Have a system in place to prevent duplicates when the claim was submitted the first time
This also includes the migration of /submit endpoint to Lighthouse

**In of Scope**
- Lighthouse /submit endpoint migration
- Evaluation of user-facing features such as the loading screen during submission
- Messages post-submission (email and on va.gov)
- Avoid duplicates (rethink when we clear the in-progress form)
  
**Out of Scope**
- 

**Success** 

**Risks**

**Plan**

**Guiding Principles**
