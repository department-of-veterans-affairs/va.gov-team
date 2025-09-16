# Notes for CHAMPVA Dependents Management Discovery SME Interview
Moderators: Alyssa, Amanda

Participant: Luke L. (IVC, Contact Center Deputy Chief CHAMPVA), Nohelia P. (contact rep)

## Questions

**1. Could you each tell me about your role and what you do**? 
- deputy chief for contact center for Brian G., started as a rep for all IVC lines of business
**2. Could one of you (whoever takes calls) walk me through, step-by-step, what you do when you receive a call from a veteran asking for their CHAMPVA application status?**
- provided contact center business rules that lives on KM for contact center reps
- automated verification for contact center before talking with a representative

- **WALK THROUGH of MURAL diagram review and revisions:**
- verification is documented in CRM ticket system (D365 MS product)
- verify 3 points of data for the person they are calling to get info for, to verify it's a "meaningful" relationship
- if over 18, need their verbal consent to speak with Veteran and Spouse or if there a POA on file
- If Veteran is calling for info on beneficiary, will need to confirm 3 data points
- P3 showed screen share of VistA/CP&E (same program), once we document information in CRM, we check CP&E, PEGA shows applications
- we want our reps to navigate in one syste,: CRM, but for now they use VistA/CP&E
- once app has been processed, Veteran no longer has a right to the information unless child is under age 18, Veteran or Spouse can obtain information
- If child over 18 years old, needs to provide active permission to speak with a parent
- Manual 3 points of verificatio: HMW implement this digitally on VA.gov,
- missing school cert, at least part-time (can we flag in application flow?) before app is submitted, general flag on application package
- natural-born child applied without estranged relationship, would need to some type of written permission such as a court order, that states no information can be released to the Veteran
- eligibility check on automated system on phone only requires SSN
- there are edge cases but not common
- VA.gov has 2FA login
- CSR does't find application in CP&E, can go into PEGA, located to see an expected timeframe for app eligibilty processing time (backlog time) 
- there is an existing automated IVR telephony eligibility check
- pending school certificate, submits missing info, goes to back of the pile for processing unless it becomes an escalation
- recently identified an issue that impacted 60-70K that did not receive card and welcome package during ingest efforts (currently a large reason of call center calls)

**3. If you had a magic wand for the application status tool, what do you wish was on there?** 
- shortcoming of PEGA is it's associated by Veteran, not by beneficiaries
- update their own school certifications and update OHI on VA.gov (like EZR update only flow)
- update Medicare MBI numbers
- automating manual processes
- backlog of school certificates for several semesters back
- hold times are still one hour+, most calls are for status, OHI updates, and school certs AND OHI updates are a majority of these calls

[shared 4 Knowledgebase Management articles on call center processes]
