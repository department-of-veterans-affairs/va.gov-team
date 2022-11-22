## September 9, 2022 CG Stakeholder Touchbase

### Notes

- Special character issue
  - Users have seen applications that come from VA.gov with special characters "wouldn't translate well"
    - Apostrophes are generating as question marks
    - Has the code been changed recently?
      - Not recently; likely has been an issue from the start
  - Can this be addressed for the 10/01 release?
    - Not certain; still lots of work to be done
    - Can be added to the backlog to be addressed if we have the time
    - **Non-critical issue**
  - Will need to review the PDF creation process
- 10/01 Eligibility Changes Content
  - On VA.gov side of the house, do we want/need to change anything for the 10/01 expansion?
  - 10-10 team unlikely to need to do anything
    - Content Team will update landing page
      - Special content release to be done on 10/01
- Queueing Update
  - Mulesoft may launch their changes a day or two early
    - Will need to verify that we can still submit to their V1 endpoints
      - Can be tested in a lower environment
- Tasks
  - [x] Create ticket for apostrophe issue
  - [x] Disable content update for confirmation page
    - Re-enable on or around 09/22
  - [ ] Backwards compatibility test with Mulesoft team
    - Ruman and Lihan to coordinate this testnig offline


### Notes from Tham
Notes (Action Items are marked in Yellow)

CARMA Online application which had special character in the Middle Name
Mili/Becca reported on:  The payload shows a special character so it seems there is an issue when putting special characters into the PDF itself. Will defer to the va.gov team on the fix and timeline, but just wanted to send that info. 

We received an application online in CARMA that contained a ? in the middle name (CD- 1128239). It was received into CARMA on 5/30/22 at 9:54 am ET.

-- Can be included in 10/1 -- Very rare, we can have it in the backlog

-- Pdf came in with Special character (?)

-- Application Name -- '

AI Tham to ask MPI to create and add it into backlog

AI Heather to add PDF tool to handle Special characters (?,')

Patrick/Caitlin: Any content changes that might be needed on the CG form to inform users about the 10/1 eligibility changes?
Assume to be on the CSP website itself where it lays out who is eligible
-- No changes for now

-- Update the landing page on Va.gov (talks about expand)

-- AI Daniel will send a draft of updated Language to Matt and team to approve

-- Va.gov interface to adjust the verbiage

-- Special content release needed on Saturday

-- AI Daniel to release the content on 10/1 special content release

AI Tham to ask Melanie release Link for “the VA Notify Templates to Production” (Privacy Signed off. And Business approved) melody.weber@va.gov  
Integration Work Schedule updates:
(update) Still pending Content review, (ETA Friday) frontend development is next week - (09/02) - 09/09
Functionality exists, will be implemented with Confirmation message next week - (09/02) - 09/09  - In prod
AI Tham/Caitlin - release plan for 10/1 prod
