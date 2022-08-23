# Research Plan for eBenefits Migration Team, Dependency Verification Modal UAT, October 2021

## Background
Veterans receiving disability payments from VA can claim additional compensation for any dependents they might have. Dependents could include a spouse, children and/or dependent parents. Because family situations often change, VA requires the Veteran to notify them when a family member leaves the household. This happens through divorce, death, children leaving school and a few other circumstances. One consequence of not reporting dependent changes in a timely manner, is the Veteran could incur a debt with VA.

To short circuit this issue, the eBenefits team has created an intercept modal residing on the View Dependents page. Veterans must log in to see this screen, and when they navigate to the dependents page, a check will occur against a notification date. The modal will prompt the Veteran to review the VA record of their dependents, and will be asked to add or remove dependents if necessary.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ebenefits/dependency-verification).

### OCTO Objectives

4. Logged-in users can update their personal information easily and instantly
5. Veterans and their families can find a single, authoritative source of information
6. Logged-in users have a personalized experience, with relevant and time-saving features

By allowing veterans to verify their dependents online, instead of submitting a paper form, we will:
- Increase usage of digital, self-service tools
- Increase percentage of applications submitted online
- Increase the benefit value (in $)

### Veteran Journey
Veterans are likely to be impacted during the "Putting down roots" and "Aging" life journeys. While putting down roots, veterans are likely to have additional dependents that qualify for benefits, including a spouse or children. As they age, veterans may lose benefits for dependents through aging out, divorce, or death.

## Research Goals
This is a User Acceptance Test, so we are primarily interested in ensuring the feature works as expected, including:
- Confirm the modal appears as expected
- Confirm the user's dependents appear correctly within the modal
- Confirm the confirmation message appears when the user verifies their dependents.

### Outcome
If UAT is successful, the product will proceed to launch. If not, the team will investigate why the features do not work as expected.

### Research questions
1. Does the "Verify Dependents" modal appear?
2. Do the correct dependents appear in the modal?
3. Does the confirmation message appear after the user verifies their dependents?

### Hypothesis

## Method
This research will be conducted in individual, moderated user acceptance testing sessions. Participants may participate through desktop or mobile applications.

### Location
Sessions will be conducted remotely via Zoom.

### Research materials
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/UAT/dep-ver-uat-convo-guide.md)
- [Link to production feature location](https://www.va.gov/view-change-dependents)

## Recruitment

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.

Before writing your recruitment criteria, be sure to review the following resources.
- [Refer to the Perigean Recruitment Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md) to learn how Perigean recruits, screens, and prepares participants for research.
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
Our intended users for this service are Veterans who receive disability payments and have dependents.

### Recruitment criteria
Recruit 8 veterans for a total of 5 fulfilled sessions.

**Primary criteria (must-haves)**
In order for this feature to occur, Veterans must:
1. Receive disability payments
2. Have dependents
3. Have not made changes to their dependents in the last 12 months
4. Receive disability payments for their dependents (added: November 10, 2021)

**Secondary criteria (nice-to-haves)**
- At least 2 desktop users
- At least 2 mobile users

## Timeline

### Prepare
The feature is complete now.

### Research sessions
November 5-12

### Length of sessions
Each session should last less than 30 minutes. Please schedule with 15 minutes of buffer time before and after sessions.

### Availability
When would you like sessions scheduled? Please list exact dates and times in EASTERN Standard Time. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.*
Please request enough dates and time slots for the number of requested participants. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.).
| Date | Available Times (EASTERN) |
| --- | --- |
| Friday, November 5 | 10 AM - 2 PM, 3:30 PM - 6 PM |
| Monday, November 8 | 10 AM - 6 PM |
| Tuesday, November 9 | 10 AM - 1 PM, 5 PM - 6 PM |
| Wednesday, November 10 | 10 AM - 1 PM, 4:30 PM - 6 PM |
| Thursday, November 11 | Federal Holiday |
| Friday, November 12 | OOO |
| Monday, November 15 | OOO |
| Tuesday, November 16 | OOO |
| Wednesday, November 17 | 3:00 PM - 7 PM |
| Thursday, November 18 | 10 AM - 6:30 PM |
| Friday, November 19 | 12:00 PM - 6:30 PM |
| Monday, November 22 | 10 AM - 6 PM |
| Tuesday, November 23 | 10 AM - 1:30 PM, 2:30 PM - 7:00 PM |

## Team Roles
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker**
- Moderator: Candy Clark | candy.clark@gcio.com | 614-507-4270
- Research guide writing and task development (usually but not always same as moderator): Candy Clark | [candy.clark@gcio.com](mailto:candy.clark@gcio.com]
- Participant recruiting & screening:
- Project point of contact: jason.wolf@gcio.com -- eBenefits product manager
- Note-takers:
- Observers:
    - James Adams | james.adams@gcio.com -- eBenefits Researcher/Designer, UX manager
    - Jason Wolf | jason.wolf@gcio.com -- eBenefits product manager
    - Kathleen Crawford | kathleen.crawford@gcio.com -- Backend engineer
    - Kevin Musiorski | kevin.musiorski@gcio.com -- Backend engineer
    - Jerek Shoemaker | jerek.shoemaker@adhocteam.us -- Frontend engineer
    - Jesse Cohn | jesse.cohn@adhocteam.us -- Frontend engineer
    - Sabrina Mohamed | sabrina.mohamed@va.gov -- Product Co-Owner
    - Matt Self | matt.self2@va.gov -- Product Co-Owner
    - Shawna Hein | shawna@adhocteam.us -- UX manager
