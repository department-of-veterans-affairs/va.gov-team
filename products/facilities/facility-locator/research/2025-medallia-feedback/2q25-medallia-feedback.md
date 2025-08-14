2Q CSAT Medallia findings summary
Analysis of user verbatims from Medallia A11 intercept and VFS feedback surveys submitted between April 1 - June 30, 2025, includes Medallia responses, not all had +/- feedback.

## Quantitative data

- Total responses = 1,029

| Metric | Number of responses | Average rating | 
| --- | --- | --- | 
| VA experience | 220 | 3.26 |
| VA.gov Understanding | 165 | 3.62 | 
| General VA Trust | 161 | 3.08 | 
| Trust in VA Commitment to Veterans | 160| 3.45 |
| Overall satisfaction | 459 | 2.35 | 

**To the questions,  "Were you able to do your task today?"**
- Total responses: 550
- No: 404
- Yes: 147 

## Qualitative

**Catagories of tasks attempted by those who said "No" to the question, "Were you able to do your task today?"**
- Urgent Care/Dental Care: 15
- Finding/Contacting a Provider or VA Facility: 76
- Appointment Scheduling/Rescheduling: 58
- Application for Benefits/Burial Plans: 14
- Community Care Network Issues: 19
- Technical Issues with Website/Tool: 41
- Prescription Refills/Pharmacy: 9
- Mental Health/Counselor: 9
- General Inquiries/Miscellaneous: 24
- Map/Location Search Issues: 15

**Themes expressed in context with VA.gov experience score**

Navigation Issues
- Number of responses: 19
- Example response: "It's a pain in the ass to navigate. I can't find anything. I think I am pretty smart. But this just sending me in circles. The person or company that designed this should be fired."

Inaccurate Provider Data
- Number of responses: 12
- Example response: "Unable to find covid 19 vaccine locations listed on website."
- Example response: "IT IS NOT CURRENT FOR URGENT CARE INFO NEAR 61938. THERE IS AN URGENT CARE NOT LISTED THAT VA PAYS FOR AND THE SBL LISTED WALK IN IS NOT AN ACTUAL URGENT CARE!!!!!!!!!!!"

Difficulty Searching
- Number of responses: 15
- Example response: "When I type something in the search it brings up extremely unrelated results each time."
- Example response: "Can't find what I'm looking for without multiple searches."

Login/Account Issues
- Number of responses: 8
- Example response: "Since you have changed to the new login I can't access my account REGARDLESS of what I do. If something works why do you keep changing it!!!! I am so frustrated now!!!!"
- Example response: "I absolutely have not been able to sign in on the VA.gov login site. Either my email or password or phone number is Incorrect. I cannot log in to my health vet, and this is clearly a grievous mistake of the VA not solving this issue for me."

Positive Feedback
- Number of responses: 20
- Example response: "Great website with all the information I needed."
- Example response: "Caring, professional"

Opportunities for Improvement
- Number of responses: 10
- Example response: "Would be VERY helpful if the Find VA location/locator was updated with accurate Mission ACT Urgent Care facilities. Many of the UCs listed as VA contracted are NO LONGER VA Mission ACT contracted so we may give Veterans the WRONG info."
- Example response: "We can always strive to do better. But I'm happy with MYhealthyvet. thx"

## Actionable feedback

| Feedback | Action | 
| --- | --- | 
| Several respondents reported the Facility Locator was down or not working. The descriptions are similar to a situations observed when the Ad Blocker is used in Chrome | This issue is already ticketed and awaiting contract approval/award : [[DEFECT] Facility Locator errs with Ad Blocker #21584](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/21584)
| Response from VA provider and frequently user suggested services and care level vary across Emergency departments and it would help to add granularity to help identify the best location to refer Veterans for their needs | Data to support this functionality is not available | 
| Respondents want to search for specific types of VA health care, such as palliative care and inpatient mental health facility locations | VA health service searches will be expanding, pending contract approval and award 
| A dozen or more responses were related to difficulty making or changing appointments | The Facility Locator does not have a connection to the online scheduling service. Has been in backlog but not yet prioritized: [[CONSIDER] Link to VR&E scheduling tool #17119](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17119) | 
| Several responses indicate a desire to download/print a list of wallet card containing the search results. Some of these are VA employees who are referring Veterans and families | Added to backlog: [[CONSIDER] Downloadable search result list
#21740](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/21740) |
| 41 individual errors reported with community care locations, mostly urgent care | Sent to PPMS team for inviestigation and resolution |
| User looking for closest Regional office expected to select Regional office as a Facility type | Corresponding facility type is VA benefit office in existing experience. Will continue to monitor for other confusion |
| User reported a need to sort list of search results and lack of understanding of logical order for the providers that appear in the network | Will monitor for other similar reports | 
| Multiple users express confusion/frustration with duplicate listings for community care providers | This is a function of the community care database as both TPAs can report the provider as in network. Practice and providers appear as individual search results |
| Several users report the number of search results displayed (i.e., Showing 1 - 15 of 15 results for "Community providers (in VA's network)", "Dentist") does not match the number of actual results | Added to backlog: [[DEFECT] Number of results in header does not match the actual number of results #21741](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/21741) |
| Users report difficulty finding Vet Centers in their area | likely a function of geographic location, default radius, and/or zoom level 
| Users have trouble finding matching community care service type (i.e. "ENT", "acupuncture", "primary care") | This is a function of the backend system for community care data |
| Several users expressed a desire to search for VSO using Facility Locator | We are beginning to map this service to regional benefit offices but Lighthouse currently does not support individual service locations |
| User expressed a desire to search by provider name | WAdded to backlog: [[CONSIDER] Allow Provider search by name
#21742](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/21742) |
| Two users reported "community care link is broken" | Unable to reproduce this scenario |
| 6 users reported errors in VA benefit office information (i.e., phone numbers and map) | Reporting to VBA Office of Communication for investigation and correction |
