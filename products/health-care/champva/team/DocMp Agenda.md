<h1>DOCMP/PEGA & IVC FORMS WEEKLY SYNC</h1>

## Agenda 8.13.2025
- Status of FMP Claims
- Discuss possibility of adding the FMP eligibility letter to VA.gov to save time for the enrollment team and veterans

---

## 1. FMP Claims Status & Fraud Prevention
- **Update from Andy:** Ongoing investigation into fraudulent FMP claims from international providers. Evidence shows providers are submitting reimbursement requests for more visits than the veteran actually attended.
- **Discussion:**
  - **Short-term process:** Users submit an application, and they receive an email confirmation of receipt.
  - **Long-term goal:** Develop a health status tool to allow users to check enrollment and claims status, and view previously submitted claims.
    - First phase: ChampVA applications → then ChampVA claims.
    - FMP forms will follow later due to infrastructure limitations (e.g., VES integration not ready).

---

## 2. Expediting FMP Claims Form Release
- **Premal’s input:** Shared that the FMP team has a strong interest in making the FMP claims form available online, even if the direct deposit experience is not yet ideal. He has communicated this interest to OCTO leadership so they understand the urgency from the FMP perspective.
- **Team decision:** **Keep release on pause** until OCTO decides the best path forward, given previous efforts to improve the direct deposit user experience.
- **Security decision:** **Lock down FMP claims to LOA 3** to ensure users are verified veterans.

---

## 3. FMP Eligibility Letter on VA.gov
- **Premal’s proposal:** Generate the enrollment letter from IBA data.
- **Andy’s update:** The team has requested adding the FMP eligibility letter to VA.gov’s benefits letters and documents repository.
  - Process: Users select the letter, verify their address, and generate it with the most up-to-date data.
  - Benefit: Reduces workload for the enrollment team.
- **Action:** **Andy will send a current copy of the letter to Premal** for his discussions.
- **Data request:** **Premal requested the team start collecting impact data** — e.g., average time to input a claim, application time, and other metrics to measure the current experience for both veterans and processing staff.

---

## **Action Items**
1. **Andy to send a current copy of the FMP eligibility letter to Premal.**
2. **Team to start collecting impact data** on current claim and application processes.
3. **Premal to continue representing the FMP team’s interest** in online claims form release to OCTO leadership.

---

## **Decisions**
1. **Keep FMP claims form release on pause** until OCTO decides the path forward.
2. **Lock down FMP claims to LOA 3** for veteran verification.



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
