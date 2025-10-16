# Follow up on OH message pool work - Sep 2025
wip - still updating (10/9)

These are eeting notes from our 9/30 sync with Dr. Ami Shah. Dr. Shah has been leading the Message Center Workgroup under Ambulatory Council. The workgroup developed guidelines for Oracle message pool names (internal) and patient display names (external). 

In this doc: 
- [Takeaways](#takeaways)
- [Next steps](#next-steps)
- [Links](#links)

## Takeaways
These were the main takeaways from our meeting. We didn't get to most of the process questions.
- **Internal/External names:** Oracle pools have an internal and external names. Multiple external names can route to the same internal pool.
- **Character limit**: External pool names have a character limit of around 60 characters. Patient display name character limit is more lax (not sure of exact character limit).
- **Provider name**: External pool names don't usually include provider names.
- **Process**: MHV coordinators submit ticket to create and update pool names. We know this is a big pain point right now (view notes [in this GH doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/design/Improving%20care%20team%20names/Feedback%20from%20OH%20coordinators%20-%20Aug%202025.md)).

## Questions
These are the questions and answers we had time for during the meeting. Complete notes [in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1759243091359/4209c93bdf3732baaa9a1136628251e4ceccbd04).

### Naming guidelines questions
|Question|Answer|
|---|---|
|Do we include provider names in pool names?|No, except for primary care.|
|What's the character limit (if any) for pool names?|- External pool names: Around 60 characters<br>- Internal pool names: Unsure, need to figure out|
|Is the attached doc the most updated list of services for pool names?|There's a [diff doc](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Secure%20Messaging/Triage%20Group%20Naming/Oracle%20Health%20context/OH%20guidelines/Message%20Pool%20Standardization%20Style%20Guide%205.28.%20as2%20dck.pdf?CT=1760025479243&OR=ItemsView) for external pool names. Ultimately, Dr. shah's team doesn't want to own this. This doc came out of the Ambulatory Council.|
|Are there standards for Patient Portal Display Names too? Or standards only the internal Message Pool?|Yes, view above answer.|
|Where can we find list of Administrative Parent Facility Code?|🟨 Didn't get to this|
|Patrick: In VistA, do we have "patient-facing" names vs. "internal-only" names?|No. Suggeseted using the external pool name guidelines for VistA triage groups.|

### Process questions
|Question|Answer|
|---|---|
|What does the ticket look like for coordinators to submit?|There isn't a form right now. 🟨 Need more info|
|When people submit requests for pool names, is it just free text? Or do they select from a list of these services? Or any other fields?|There isn't a form right now. 🟨 Need more info|
|How do we make sure people follow the guidelines in the attached doc?|🟨 Didn't get to this|

## Next steps
### Next steps for VISN 1 pilot
We need to continue moving forward with our VISN 1 pilot.
- [ ] Update triage group names to align with Oracle patient display name guidelines (aka external pool names).
   - Ex current name: BOS_MH TELEMENTAL BIPOLAR STEIN, N% 
   - Ex new name: MA Brockton Telemental health for bipolar disorder
- [ ] Find out character limit for patient display names
- [ ] Update input fields in SM Admin portal to align with with Oracle patient display name guidelines (aka external pool names) 

### Next steps for process development
We need to update any process documents at both VistA and Oracle facilities.
- [ ] Identify documentation that we need to create/update to help coordinators understand how to update care teams.
- [ ] Update documents
- [ ] Communicate to coordinators

## Links
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1759243091359/4209c93bdf3732baaa9a1136628251e4ceccbd04) where @beckyphung took notes
- Link to meeting recording
- [Patient display name guidelines PDF](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Secure%20Messaging/Triage%20Group%20Naming/Oracle%20Health%20context/OH%20guidelines/Message%20Pool%20Standardization%20Style%20Guide%205.28.%20as2%20dck.pdf?CT=1760025479243&OR=ItemsView) in SharePoint, signed 5/28/25
- [Current groups/subgroup list Excel](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Secure%20Messaging/Improving%20care%20team%20names/2024.07.29%20-%20MVP%20triage%20group%20types%20and%20subgroups.xlsx?d=w9b8985d58e0b482cb370bb8240060d65&csf=1&web=1&e=i6nTaI) that VISN 1 plain language care team pilot uses
- [List of pilot VISN 1 triage group names Excel](https://dvagov.sharepoint.com/:x:/s/PlainLanguageCareTeamNamespilot/ERX8WNFMo7ZElcIBITnIa0IBFC6J5fG9vtP4052ETFG26w?e=JykWZB)

