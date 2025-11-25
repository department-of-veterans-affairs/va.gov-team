## Self resolve with user action or by retrying

* 001 Authorization denied by user  
  * Cause: user clicked “Deny” in ID.me proofing.  
  * Fix: user clears cookies/cache, signs in again, completes verification and selects “Allow”. No record changes needed.  
* 002 User auto-logged out (system time incorrect)  
  * Cause: user device clock/timezone incorrect.  
  * Fix: user sets time/timezone to automatic, sign in again.  
* 005 Session expired  
  * Cause: user inactivity/session invalidation.  
  * Fix: clear cookies/cache and sign in again.  
* 201 Generic OAuth Errors  
  * Cause: OAuth/sign-in service transient errors.  
  * Fix: clear cookies/cache and retry, usually resolves.  
* 202 OAuth State Mismatch  
  * Cause: OAuth state token mismatch (often session/cookie related).  
  * Fix: clear cookies/cache and retry sign‑in.  
* 203 Invalid OAuth Request  
  * Cause: missing/invalid OAuth query params (often session/cookie related or bad redirect).  
  * Fix: clear cookies/cache and retry.

## Cases that may resolve by reattempt/timeout first, but escalate if persistent

* 104 UUID Missing  
  * Cause: missing UUID from credential provider or transient flow problem.  
  * Fix path: user clears cookies/cache and retries, try again after \~30 minutes. If still failing, create help‑desk ticket and involve Identity team (may need backend/manual fix).  
* 009 Failure to Proof (Login.gov)  
  * Cause: user failed Login.gov proofing (no ID/SSN, ran out of attempts, proofing mismatch).  
  * Fix path: user should reattempt proofing or correct info. If reattempts fail (unable to verify), a help‑desk ticket is required to update MPI/records (requires ICN/SSN).  
* 110 / 112 MyVAHealth / MHV provisioning errors  
  * Cause: provisioning/network failures between systems during terms of use/workflow.  
  * Fix path: user should clear cookies and retry in 5–10 minutes. If persistent, escalate to OCTO Identity/help desk — backend provisioning may need intervention.  
* 111 MyVAHealth ineligible user account  
  * Cause: user not provisioned for MyVAHealth (eligibility).  
  * Fix path: verify eligibility, if they should have access, escalation / manual provisioning may be required.  
* 007 Default / Unknown Error  
  * Cause: catch‑all / intermittent issues.  
  * Fix: clear cookies/cache, retry sign‑in (or try another browser). Usually user retry resolves or support will investigate if persistent.

## Require help desk / manual record or MPI change (user cannot authenticate until records or provisioning are corrected)

* 102 Multiple EDIPIs  
  * Cause: multiple DoD ID/EDIPI values returned by internal systems.  
  * Action: create a help‑desk ticket — requires record consolidation/fix.  
* 103 ICN Mismatch  
  * Cause: My HealtheVet account number (IEN/ICN) mismatch with VA.gov account.  
  * Action: create a help‑desk ticket — requires manual reconciliation.  
* 106 Multiple Corp IDs  
  * Cause: duplicate corporate IDs in MPI.  
  * Action: help‑desk / manual MPI fix required.  
* 004 MPI Mismatch  
  * Cause: internal lookup mismatch in VA systems (MPI).  
  * Action: if cookie/session steps don’t fix it, open a help‑desk ticket — MPI/record changes required.

## Pending removal of error page
* 101 Multiple MHV IDs (Multiple IENs)  
  * Cause: multiple My HealtheVet IDs associated with the person.  
  * Action: create a help‑desk ticket to merge/fix accounts, user cannot sign in to VA.gov until resolved.  

* 108 MHV Verification Error (MHV Premium / verification)  
  * Cause: MHV account needs to be Premium or MPI needs correction.  
  * Action: if user is missing Premium verification, they can upgrade per instructions, if the record itself is incorrect, a ticket and manual MPI change is required.
