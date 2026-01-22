<h1>DOCMP/PEGA & IVC FORMS WEEKLY SYNC</h1>

Here’s a **clean, GitHub-ready Markdown version** with consistent spacing, headers, and lists so you can paste directly into a GitHub issue, PR, or discussion:

---

## Meeting Notes: Pega.doc MP Call

**Date:** 1/21/26

---

## 1. Missing Status Email Testing

### Staging & Production Bug Testing

* Discussed **staging testing** for recent changes to **email alerts for missing statuses**.
* **Steve** is responsible for:

  * Testing changes **tonight after hours**
  * Re-verifying results **tomorrow morning**
* **Production testing** for the existing production bug remains scheduled **prior to 5:00 p.m. ET today**.
* After-hours staging testing **does not impact the ability to release** the production fix.

**Action Item**

* Steve to complete staging testing and confirm results in the morning.

---

## 2. CHAMPVA Claims – Enhanced Claims Flow

* VA.gov asked if PEGA could prioritize previously agreed-upon work to have DocMP:

  * Combine all **medical documents** into a single document
  * Combine all **EOBs** into a single document
* **PEGA confirmed** this work is **not currently prioritized**.

**Additional Information (No Impact to Prioritization)**

* **Christine** returns on **January 23**, providing additional team support.

---

## 3. Enhanced Claims Flow Launch

* Discussed a **potential launch date** for the CHAMPVA enhanced claims flow.
  * All route changes were confirmed to be done for pdi/resubmissions on DocMP side

**Target Launch Date**

* **Monday, January 26** (tentative)

---

## 4. Resubmissions Tracking & Source of Truth

* VA.gov shared updates to how **resubmissions are tracked**.
* **Google Analytics (GA) and Datadog** are now the **source of truth** for resubmissions (PDIs).

**Reason for Change**

* Resubmissions in PEGA are routed to the **original submission PDI**.
* If the original submission came from **fax (FX)** or **mail (CM)**:

  * VA.gov resubmissions inherit the original PDI number
  * This results in **changing PDI prefixes**
* Because of this, PEGA **cannot reliably track resubmission volume**.
* VA.gov added **custom tracking in GA and Datadog** to:

  * Determine monthly volume for **CVA Claims resubmissions**
  * Share numbers with business partners as needed

**Decision**

* PEGA should **no longer** be used as the source of truth for resubmissions.

**Action Item**

* VA.gov team to email **Katrina, Melissa Johnson, and Joey**:

  * Communicating the change in tracking
  * Clarifying resubmission data can be shared **monthly upon request**

---

## 5. Status of PEGA Work Requested by Primal

* PEGA provided an update on work requested by **Premal**:

  * Included in the **current PI**
  * Team is in **Sprint 3 of 6**
  * Work scheduled toward the **end of the PI**

**Timeline**

* Expected to begin in approximately **six weeks**

**Action Item**

* PEGA to share **relevant tickets and JIRA board** with **Mike Mooney** and **Primal**

---

## 6. Multiple Claims & PDI Clarification

* Question raised about **multiple individual claim submissions** and PDI assignment.
* **Cindy confirmed**:

  * Each individual submission receives its **own PDI and cover sheet**

**Follow-Up Needed**

* Bring this topic to the **claims team** for further clarification.

**Additional Action Items**

* Take questions back to the claims team regarding:

  * How **send-back letters** are generated **large or multi-claim submissions**
  * How **EOBs** are generated for **large or multi-claim submissions**
* These discussions will inform future prioritization.

---

## Summary

* Staging and production testing are proceeding as planned with no release blockers.
* CHAMPVA enhanced claims flow is tentatively targeted for **January 26**.
* Resubmission tracking has moved from PEGA to **GA and Datadog**.
* Requested PEGA work is planned for later in the current PI with follow-up actions underway.

---

If you want this **converted into a GitHub issue template, checklist-style action items, or split into multiple issues**, I can do that next.



**Date:** January 14, 2026  
  
---

## 1. Bundling Request (DocMP)
- VA.gov checked in on previously requested bundling work.
- Cindy reported bundling is **not currently prioritized** on the DocMP side.
- No timeline estimate is available.

**Decision / Outcome**
- No immediate action; bundling remains unprioritized.

**Timeline**
- None provided.

---

## 2. Missing Statuses & Retry Logic
- Retry logic has reduced, but not eliminated, missing statuses.
- Cindy confirmed she is seeing the same results on the DocMP side.
- Current DocMP retry behavior:
  - Constant wait time between retries
  - Three retry attempts
  - Retries triggered by **503 Bad Gateway** or **no response**
- VA.gov platform team is implementing fixes at the API level to prevent failures upstream.

**Next Steps**
- Cindy will review additional options over the next few days.

**Timeline**
- Cindy review: next few days  
- Platform fixes: in progress (no date provided)

---

## 3. Email Alert Testing for Missing Statuses
- Steve requested testing email notifications that alert both teams when a status is missing.
- Plan is to simulate an outage in staging overnight so the email job can run.
- Cindy will take DocMP offline in staging and restore it the next morning.

**Decision**
- Proceed with the test.

**Timeline**
- **January 15, 5:00 PM ET:** outage begins in staging  
- **January 16 (morning):** service restored

---

## 4. DocMP Project Manager Transit
- **Michael Halbrook** introduced as the new DocMP Project Manager.
- Transition will occur over the next few weeks.
- Andrea Merrill and Michael Mooney will meet with him to:
  - Introduce themselves
  - Align on request intake and sharing
  - Establish ongoing communication norms

**Timeline**
- Intro meeting: next week  
- Full transition: next few weeks

---

## 5. VES / 1010D & OHI Ingest
- VES requested a resend of the original ~1,000 1010D submissions.
- VES is experiencing issues; Katrina is supporting with focused work.
- OHI ingest is delayed until 1010D ingest issues are resolved.

**Timeline**
- No resolution date provided.

---

## 6. Enhanced Claims Flow (CHAMPVA)
- Target launch date for enhanced CHAMPVA claims flow: **January 26**.
- Dependencies:
  - VA.gov must resolve attachment IDs for submissions with PDI numbers to be "CVA Bene response".
  - DocMP attachment bundling work is still outstanding.
- Training question:
  - Cindy was unsure if users have been trained.
  - Premal was directed to check with **Melissa J** and **Joie**.

**Decision**
- Continue toward January 26 launch, acknowledging risks.

---

## 7. Health Status Team & Ownership Updates
- A new Health Status team will support users being able to track statuses and integrate them into the Benefits tool.
- Cindy shared:
  - Status data is available via reports (open/closed).
  - Statuses are not currently available via callable endpoints.
  - Work is on the backlog but not prioritized (Eileen is aware).
- VA.gov updates:
  - Supporting team onboarding in the next week or two.
  - **Mike Mooney** moving into Product Manager role.
  - **Andrea Merrill** stepping into a hybrid Delivery Manager / Product Manager role.
- Moving forward:
  - Dedicated meeting cadences will be established.
- Escalation note:
  - **Lamar** remains the OIT escalation contact for Premal.
  - **Mike Halbrook** noted as taking over Project Manager responsibilities on DocMP team.

---

## Key Decisions & Dates
- Bundling: not prioritized, no timeline
- Retry logic: continued monitoring; API fixes in progress
- Email alert test: January 15, 5:00 PM ET (overnight)
- Enhanced CHAMPVA launch target: January 26
- PM transition: next few weeks
- Health Status team onboarding: next 1–2 weeks

## Meeting notes 8.13.2025

### JSON for Multiple Beneficiaries
- Andrea sent Christine the JSON for multiple beneficiaries.  
- Discussion noted these differed from what Michael sent.  
- **Action:** IVC team to locate Michael’s original message, since Kyle’s version is the most up-to-date JSON from 1010d sent to Pega.  
- **Action:** IVC team to send JSON for what is sent to VES when multiple beneficiaries exist.  

### Doctypes Discussion
- **Decision:** If user selects PDI → generated doc labeled "CVA Bene Response".  
- **Decision:** If user selects Control Number → claim sheet labeled "CVA Reopen".  
- **Decision:** In all reopen/resubmission cases, supporting docs keep their original doc type.  

---

## Action Items
1. **IVC team to locate Michael’s original JSON message.**  
2. **IVC team to send JSON for what is sent to VES when multiple beneficiaries exist.**  

## Decisions
1. **If user selects PDI → label generated doc "CVA Bene Response".**  
2. **If user selects Control Number → label claim sheet "CVA Reopen".**  
3. **Supporting docs retain original doc type in reopen/resubmission cases.**  



<H4>Wed March 26, 2025</H4>
<h6>Agenda</h6>

- Confirm JSON metadata needs
- Confirm Doctypes

<h6>Notes</h6>

JSON for Multiple Beneficiaries
- Andrea sent Christine the JSON sent to DocMP for multiple beneficiaries in 1010d.
- There was discussion that these differed from what was sent by Michael.
- IVC team asked if they could locate the message where Michael initially sent the data, since the information from Kyle is the most up-to-date JSON generated and sent to Pega from 1010d.
- Action: IVC team to send JSON for what IVC sends to VES when there are multiple beneficiaries.
Doctypes Discussion
- Decision: If user selects PDI → generated doc with metadata fields containing date of service or fill date, provider or prescription name, etc., will be labeled "CVA Bene Response".
- Decision: If user selects Control Number → claim sheet itself will be labeled "CVA Reopen".
- Decision: In both reopen/resubmission cases, all supporting docs uploaded by the user will retain their original doc type.
IVC Forms Team Update
- IVC Forms team reported that usability studies are concluding this week.
- Findings will be shared with the Claims team, and any potential adjustments to the resubmission flow will be communicated to the Claims team and DocMP.
- Decision: No changes from usability findings will affect the agreed-upon doctypes, so work can proceed as planned.
Action Items
- IVC team to send JSON for what we send to VES when there are multiple beneficiaries.
Decisions
- If user selects PDI → label generated doc "CVA Bene Response".
- If user selects Control Number → label claim sheet "CVA Reopen".
- In both reopen/resubmission cases, supporting docs retain original doc type.
- Usability findings will not impact the agreed doctypes; work can continue.


<H4>Wed March 26, 2025</H4>
<h6>Agenda</h6>

- Discuss claims resubmission proces

- Discuss additional metadata sent for beneficiaries 

<h6>Notes</h6>

- ChampVA Claims resubmission

  - Marrying the claims could be done programattically on Pega side if we send a metadata flag stating the submission is a resubmission
    
  - It would also be good to collect the claim number (this is sent to the user on the sendback letter)
    
    - For right now, we are suggesting to keep this optional, it can be required later on down the road (Angela Pinon confirmed this)
      
  - The work to store/flag the submissions on Pega's side could be done in May or June


- Additional metadata sent for beneficiaries information so it can be queried in later submissions if needed

  - Decided to include the following metadata to start
    
    - DOB
      
    - SSN
      
    - Full Name
  

<H4>Wed March 19, 2025</H4>
<h6>Cancelled</h6>

<H4>Wed March 12, 2025</H4>
<h6>Agenda</h6>

- Refactoring on IVC Forms for FMP Claims to send a single doc

- Champva Claims will be the next app to be released to production

- PrimaryContactEmail is now being sent in Metadata, can it be displayed to user?

- Do we want to keep the meeting at 3:15 or move back to 3:00 ET

<h6>Notes</h6>
-FMP Claims work on IVC Forms side to send as a single doc

  - Cindy had no issues, we should be good to go on this
    
- CHAMPVA Claims
  
  - We gave Cindy a heads up that we're going to staging review,  but need to clarify timeline.
    
  - I estimated that we may be ready to start staged release in Sprint 14 (Mar 26-Apr 8 ), but I think she had heard UAT.  We can follow up after staging review when we have a better idea
    
  - Cindy sent all the doc types for CHAMPVA Claims
    
  - Michael will send our doc types to Cindy.
    
  - Cindy will handle all the mapping on her side.
    
- The PrimaryContactEmail for 1010d is available in the database, but is prioritized below quite a few items on the Pega side
  
  - The earliest Cindy predicted was May or June, which is also not set
    
  - Until then, Cindy would be able to retrieve it for anyone from the database
    
- We're going to move the meeting back to the original 3pm ET time slot (it had been rescheduled for service blue print workshops)
  
<h6>Decisions/Action Items</h6>
-


<h1>DOCMP/PEGA & IVC FORMS WEEKLY SYNC</h1>

<H4>Wed Feb 26, 2025</H4>
<h6>Agenda</h6>

- Cindy demo of how to pull metrics from pega

- Request for DOCMP to display beneficiary email in metadata

- March publish: does that have our reporting api changes and any other requests?

<h6>Notes</h6>
-
<h6>Decisions/Action Items</h6>
-
