# Dependency verification usability testing research plan
**VSA eBenefits Team | May 2021**

`James Adams, designer`

---

### Background

Veterans receiving disability payments from VA can claim additional compensation for any dependents they might have. Dependents could include a spouse, children and/or dependent parents. Because family situations often change, VA requires the Veteran to notify them when a family member leaves the household. This happens through divorce, death, children leaving school and a few other circumstances. One consequence of not reporting dependent changes in a timely manner, is the Veteran could incur a debt with VA.

To short circuit this issue, the eBenefits team has created an intercept modal residing on the View Dependents page. Veterans must log in to see this screen, and when they navigate to the dependents page, a check will occur against a notification date. The modal will prompt the Veteran to review the VA record of their dependents, and will be asked to add or remove dependents if necessary.

### Goals

The goal of this usability study is to determine the effectiveness of the intercept modal in prompting users to confirm or change their dependents. Secondarily, we want to gauge user acceptance of this notification method, as well as how easily users locate the "add" and "remove" dependents features. Last, we want to determine if the text presented is clear and helpful, and if the user understands what their next steps are.


#### Guiding questions
- What are users reactions to the appearance of the intercept modal? Do they understand what is happening?
- Why do participants think they're being asked to confirm their dependents? Do they know what could happen if their dependents list is not up to date?
- What do users think happens when they click and choose the "confirm" path?
- Can participants identify their options when they click and choose the "change" path?
- What do users expect will happen when they choose to remove a dependent? Add a dependent?

#### Hypotheses
- Users will be unsure about the appearance and purpose of the modal
- Participants will generally understand why VA is asking about their dependents; they will likely know the financial ramifications of being over- or under-paid by VA.
- Users may not be aware that they submitted and actual form when they "confirm," but they will understand they've "let VA know" their dependent are correct
- Participants will likely be able to locate and understand the "remove" dependent feature; they may a slightly harder time finding the "add" feature
- Users will expect the "remove" feature will just "delete" the removed dependent; users will expect the 'add" feature to request information about the new dependent

### Method
We'll engage in moderated usability testing conducted remotely using Zoom. Participants will be recruited using Perigean. These users will be provided links to a starting point (page) from which they will trigger the Dependency Verification modal. Users will be given open-ended "tasks" set forth in the conversation guide, and their actions and feedback will be recorded. Observers and notetakers may be in attendance.

#### The process
- There will be a quick warm-up and introduction to usability testing
- The participant be given a landing page as a "starting point" for the intercept modal
- The moderator will outline a "confirm" dependents scenario (use case) for the participant to follow
- The user will trigger the modal, then review the info presented
- The user will then proceed via "confirmation" to the View Dependents screen
- The moderator will prompt the user to explore next steps
- Next, the user will return to the starting screen, and will be given a new "change" dependents scenario (use case)
- The user will trigger the modal again, then review the info presented
- The user will then proceed via "change dependents" to the View Dependents screen
- The moderator will prompt the user to explore next steps within the "change" scenario
- There will be a quick Q/A and wrap-up

#### URLs
- Staging: https://staging.va.gov/view-change-dependents
- Backup Protoype: https://xd.adobe.com/view/2ac2e549-4997-4870-8115-17f62703bb0f-7f91/?fullscreen

#### Staging Users
Test user 108 is reserved for this test.
- 	vets.gov.user+108@gmail.com
- 	295SsNrLgPv5

Test user 50
- vets.gov.user+50@gmail.com
- 308SsNrLgPv5


Test user 15 is reserved for this test.
- vets.gov.user+15@gmail.com
- 363SsNrLgPv5


#### Resetting cookies
Page in question: https://staging.va.gov/view-change-dependents/view/
To reset the modal proc, "X" out of the modal and on the View Dependents page itself, right click and toggle the  true/false for the diary entry at `retrieveDiaries` under "Application" by right clicking and selecting "Edit 'Value'" then click away, and refresh.

### Participants and recruitment

Recruit 8 for 5 fulfilled sessions using the following criteria:

**Critical participant criteria**
- Participants must receive VA compensation payments

**Must have for participants**
- At least 1 woman of color
- At least 1 participant 55 or older
- At least one person that does not have a college degree (to include enlisted Veterans)
- At least one person with a disability rating of 80% or greater

**Good to have for participants**
- At least 1 participant under 35
- At least one person that has a college degree (to include of officer Veterans)
- At least one person who lives in a major metropolitan area
- Veterans who receive VA compensation payments for dependents

**Please consider**
- At least one person who lives in a rural or remote area

**Recruitment requirements**
- The participants have Zoom downloaded prior to the session
- The participants know how to screenshare

#### When

#### Testing sessions

**Pilot sessions** | Dates/times TBD

| Dates | Times (EDT) |
| --- | --- |
| Tuesday, August 17  | 4 PM |
| Wednesday, August 18  | 12 PM |

**Team availability**
| Dates | Times (EDT) |
| --- | --- |
| Thursday, August 19  | 9:30 AM to 6 PM |
| Friday, August 20  | 9:30 AM to 6 PM |
| Monday, August 23  | 9:30 AM to 6 PM |
| Tuesday, August 24  | 9:30 AM to 12:30 PM or 4:30 PM to 6 PM|
| Wednesday, August 25 | 9:30 AM to 12:30 PM |
| Thursday, August 26 | 9:30 AM to 6 PM |
| Friday, August 27 | 9:30 AM to 6 PM |


- Schedule sessions as 30-minute blocks
- Please leave at least 30 minutes between sessions
- Please do not exceed 3 sessions a day

### Team members
- James Adams | jadams@governmentcio.com -- Moderator
- Candy Clark | cclark@governmentcio.com -- Moderator, designer
- Jason Wolf | jwolf@governmentcio.com -- eBenefits product manager
- Kathleen Crawford | kcrawford@governmentcio.com -- Backend engineer
- Kevin Musiorski | kmusiorski@governmentcio.com -- Backend engineer
- Micah Chiang | micah@adhocteam.us -- Frontend engineer
- Jesse Cohn | jesse.cohn@adhocteam.us -- Frontend engineer
- Sabrina Mohamed | sabrina.mohamed@va.gov -- Product Co-Owner
- Matt Self | matt.self2@va.gov -- Product Co-Owner
- Shawna Hein | shawna@adhocteam.us -- UX manager
- Perigean -- Participant recruiting & screening, notetaking
- Note-takers -- Various as available
- Observers -- various as available
- Others -- Pending


### Resources
- [Project brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ebenefits/dependency-verification)

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/dependent-verifiy-usability-1-convo-guide.md)

- [Session notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/Dependency_Verification_Notes_Matrix%20(1).xlsx)

- [Topline summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/dependency_verification_topline.md)

- [Research synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/dependency-verification-research-findings.md)

### References

- [Mockups](https://xd.adobe.com/view/d390050f-bc57-4550-a139-a57642c89f8c-86c3/screen/a6e29c96-2964-497f-befc-23dcd9620651)

- [Feature flow diagrams](https://xd.adobe.com/view/d390050f-bc57-4550-a139-a57642c89f8c-86c3/)

---

#### Approval
_Approved by Lauren Alexanderson on August 12, 2021._
