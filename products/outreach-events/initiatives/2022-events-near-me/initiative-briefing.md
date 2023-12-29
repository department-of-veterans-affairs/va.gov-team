# Intiative Briefing: Events Near Me

## Outcome Summary / Sept 2022 - status of CMS design effort
Design & research planning were prepared, but due to contractual funding changes, the research and build for this project are not yet complete (as of December 2023).

Epic [9617](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9617)


## Summary
This work came out of an intention to create an "events near me" filter on the [Outreach Events](https://www.va.gov/outreach-and-events/events/) page. Step 1 of working towards this filter is ensuring that editors are set up to successfully provide event location data (coming out of conversation with Wes Rowe and Dave Conlon). 

## Plan for this work
- Create designs that guide editor to put location data in specific fields (there are plenty of examples of editors putting location data in a rich text field for general event details instead of putting that information in the provided address fields)
- Using designs, create a working prototype
- Write research plan and conversation guide
- Run a usability test with editors (recruit those that tend to add events to the CMS) and ask them to walk through the process using info about a real event (either one they input recently or one they plan to input)
- Iterate on designs and tests
- Move on to research and/or designs for the veteran-facing "events near me" filter

## Progress thus far and next steps
- A first pass at designing editor-facing screens is complete and [those screens can be found on Figma](https://www.figma.com/file/Rj1khlzHE2VmH4aRVeAzR2/Events-near-me%3A-Editor-UX-for-testing?node-id=0%3A1)
- Work with the CMS team to get their okay with: use of design system and the addition of new components, developer sign-off, and any other concerns. CMS collab cycle can be used for this process.
- Developer Steve Wirt has brought up concerns with tech debt associated with the conditionally required fields that are currently in the designs. However, we've seen that editors will not always use specific location fields that are not required when they have access to a general-info rich text field. To reliably get location data in the correct fields, I believe we MUST require certain fields based on the location type, i.e. VA facility location vs. online location


## Design
https://www.figma.com/file/Rj1khlzHE2VmH4aRVeAzR2/Events-near-me%3A-Editor-UX-for-testing?node-id=47%3A8376
    
   