# General Testing Plan for 21-686c and 21-674 Form Changes

## General Scenarios (not all-inclusive):
- PDF Testing
   - Maximal submission: As many fields filled out as possible to ensure data prints on pdf as expected.
   - Minimal submission: As few fields filled out as possible to ensure data prints on pdf as expected and form can be processed with minimal info.
   - Overflow/kitchen sink: Overflow as many fields as possible to ensure data that overflows the pdf field is printed on the pdf overflow page as expected.
- Use Cases
   - Veteran lives on U.S. military base, add spouse via religious ceremony, add stepchild who you have adopted, remove former spouse (686 add/remove)
   - Veteran lives outside the U.S, add spouse via civil ceremony, add biological child, add stepchild, remove parent who has died (686 add/remove)
   - Veteran based outside the U.S., add spouse via common law, add student, add permanently disabled child; remove deceased child, remove deceased spouse (686 add/remove)
   - Add spouse by proxy, add adopted child, add student (same child), remove stepchild who left household (686 add/remove + 674)
   - Add spouse via tribal ceremony, add two children; remove child who got married
   - Add spouse via other marriage type, add 1 student who has been on benefits before and 1 student who has not been on benefits before; remove child who left school (686 add/remove + 674)
   - Add a student (674)
- 674 testing scenarios used by RBPS testing team
   - VA.gov 674-1: Pension add school child (RBPS should process)
   - VA.gov 674-2: Compensation add school child (RBPS should process)
   - VA.gov 674-3: Pension add school child - School not accredited (RBPS should off-ramp for manual review)
   - VA.gov 674-4: Pension add school child - DOB miss-match (RBPS should off-ramp for manual review)
   - VA.gov 674-5: Pension add school child - Receiving Tuition (RBPS should off-ramp for manual review)
   - VA.gov 674-6: Pension add school child - School start date in future (RBPS should off-ramp for manual review) 

## Instructions for Design Review
1.	Review copy for design match
2.	Review system design elements (component, spacing, etc.) for design match
3.	Test all fields for errors
4.	Test all components/patterns for various states
5.	For each array, try to cancel adding mid step, edit item, delete item, cancel deleting, confirm deleting, and add another item
6. Record any issues on a QA spreadsheet or in tickets.

## End-to-End Testing Process
1. Standalond PDF/json review
   - Local submission by a developer
   - Get pdf/json from local machine
2. Staging end-to-end
   - Send fake staging submission through to RBPS staging (Linktest) environment
   - Review and sign off by RBPS and OBI stakeholders
3. Moderated production end-to-end testing (friends and family)
   - Directed production submission
   - Coordinate with OBI and RBPS stakeholders on review and approval
   - OBI cancels claim
4. Canary Testing
   - Updates are live in production for a limited amount of time in order to collect a small number of real submissions (e.g. on for 2 hours to get 10 submissions)
   - Updates are turned off and canary submissions are reviewed with OBI and RBPS
   - OBI and RBPS sign off
5. Incremental Launch
   - Updated form is incrementally turned on in production (if incrementation is possible)
   - Submissions are spot checked by VA.gov, OBI, and RBPS stakeholders to confirm accuracy

## Instructions for E2E Testing (staging)
1. Test your assigned scenario (min/max/overflow/etc).
2. Follow directions where specified and fill out with dummy info where not specified
3. Capture screenshot of review page BEFORE submission and save in a shared folder. Suggest using a browser extension that will capture a full page screen shot. Use submission date + GUID as file name (e.g. 2024.04.05_cb2298e8-8411-495c-9b58-586288eeaf95). This artifact is helpful if there is a discrepancy between what was entered in the form and printed on the pdf.
4. Capture claim confirmation # (GUID) from confirmation page, the date of submission, the test scenario submitted, and who submitted it, and record the submission in a shared spreadsheet.
5. The Product Manager and/or testing engineer will give the GUID to OBI via a Teams channel and in [mvp-686-674-staging-pdf] SharePoint folder.
6. If needed, an engineer may need to fetch raw submission data and provide via secure a secure SharePoint folder.

## Testing Stakeholders
VA.gov
- Sanja Bajovic (OCTO Product Owner), Sanja.Bajovic2@va.gov
- VFS Team

RBPS
- Baha Eddin S. Abu Khaled, BahaEddin.AbuKhaled@va.gov
- Linda Ciston (semi-retired), linda.ciston@va.gov
- Jim Keese (Test Engineer?), Jim.Keese@va.gov

OBI
- Tara L. I (Program Analyst), Tara.I@va.gov
- Caleb Roberts (Program Analyst), Caleb.Roberts@va.gov
- Donald Moses (Test Engineer), Donald.Moses@va.gov
- Benjamin Brown (HLINC)(Test Engineer), Benjamin.Brown8@va.gov

OIT
- Daniel Lattin (Evoke), Daniel.Lattin@va.gov

## Recommendations
1. RBPS/OBI/OIT stakeholders often need advanced notice of testing needs, so they can schedule testing resources
2. The UAT process that RBPS uses involves testing in staging (Linktest), pre-prod, and then deployment, but VA.gov does not have a pre-prod environment, so our testing with RBPS is limited to staging/LinkTest. It's helpful to reiterate this point with OBI/RBPS stakeholders, so they can plan accordingly.
3. 
