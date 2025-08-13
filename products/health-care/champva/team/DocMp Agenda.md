<h1>DOCMP/PEGA & IVC FORMS WEEKLY SYNC</h1>

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
