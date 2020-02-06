ew# Research Plan for eBenefits Form 21-686c Add/Remove Dependents Workflows, February 2020  

#### VSA eBenefits Team / 21-686c Migration & Modernization

## Table of Contents
Not yet available

#### Background
A Veteran with a VA disability rating of 30% or greater can apply to have their dependents added to their disability claim, increasing the Veteran's diability pay. VA uses the 21-686c form to collect and process the information to decide the Veteran's claim. In addition to adding dependents, the 21-686c (686) is used to remove dependents who have died or otherwise left the household of the Veteran.

The 686 is 12 pages in its paper incarnation, and it supports seven discrete workflows--eight if the 21-674 is added. About half the paper form is instructions. Once deployed, the 686 will be one of the longer, more complex forms on VA.gov. Usability testing will be critical to uncovering potential problems in the prototype workflows--and illuminating the solutions that will provide an optimal user experience.

The subject of this research plan is VA form 21-686c being migrated from the eBenefits website to VA.gov by the eBenefits team. Development efforts must align this form with the latest [paper version](https://www.vba.va.gov/pubs/forms/VBA-21-686C-ARE.pdf), revised September of 2018. The current digital iterations (eBenefits and the Rainbows Team effort from 2018) of the 21-686c is based on prior revisions of the paper form. Consequently, the team must migrate all current eBenefits functionality (including the [21-674](https://www.vba.va.gov/pubs/forms/VBA-21-674-ARE.pdf) feature) and align the inputs with the current form. The new 686 must be developed within the conventions and constraints of the VA.gov form system. 

### Goals
The over-arching business goal of the 686 is the quick automatic processing of the greatest number of digitally submitted forms. To support this, the new digital version of the form must be as clear and succinct as possible to increase accuracy and reduce abandonment.

#### Determine best wayfinding/navigation to form
 - Determine typical usage scenarios and frequency
 - Uncover user-expected flows to the 21-686 form
 - Assess ease of entry from introduction page to the 21-686c form itself
 - Determine if users can differentiate purposes of 21-686c from 21-674 
 - Observe whether can access the 674-only workflow

#### Decide what support users need to navigate and submit the form
 - Determine what instructions, guidance and examples will be helpful within form workflows
 - Observe whether section and subsection headers, and labeling are clear and helpful
 - Assess users' acceptance and understanding of upload mechanism and requirements
 - Determine if users quickly understand the different "add" and "remove" scenarios

#### Confirm the proper "chaptering" of the various business workflows
 - Assess whether users can differentiate individual sections
 - Confirm that current form sections are appropriate
 - Determine if the accordions in the confirmation sections are manageable for users

#### Discover any problems that arise from complicated chapter combinations
 - Assess user acceptability of add-spouse marriage history sections
 - Determine potential issues with add-spouse and report-divorce workflow combinations
 - Determine if the overall length of add-spouse/add-child/add-student combo is acceptable
 - Note any potential problems with list/loop feature
 - Assess user acceptance of various "remove" workflows

#### Hypothesis
[ Work-in-progress ]
Among participants who are familiar with the 21=686c form, more will know the form is intended to add dependents, but few will know they are required to use the form to remove dependents. Actual usage of the 21-686c will be infrequent. It is expected that users will accept the checkbox selection of multiple forms, but will be wary about picking too many workflows at once. The form should be manageable through most workflows. The add-spouse workflow will be problematic in it's length and the "odd" section of former marriages. Lorem ipsum dolor sit amet...

#### Research  Questions
[ Preliminary list... Work-in-progress ]
- Are the forms presented clearly and easy to understand by Veterans?
  - Do participants understand the 21-686c is a multi-purpose form? 
  - Will participants accept the checkbox selection, and understand it makes the form "al-la-carte?"
  - Is the labeling and section headers clear and helpful?
  - Where do we need helper content like tell-me-mores or inline instructions.
  - Do participants know they have to reports changes in their dependents status? (Particularly things that remove them from their disability benefits, like marriage, leaving home, not attending school, etc.?)
  - Is the list/loop pattern acceptable when entering multiple individuals (ex-spouses, children, students, etc.)?

- How will Veterans interact with the form?
  - Would they rather submit different workflows separately or all together?
  - What (workflow) combinations (if any) are likely? 
  - Would they like "pre-packaged" scenarios (Add spouse/add child)
  - Is the chaptering of the form acceptable?
  - How is the balance of multiple chapters vs. page/form length?
 
- How will the workflow affect Veterans?
  - What are users' expectations about real-life scenarios (birth, death, divorce) and their use of the 21-686c? 
  - How do users feel about a "worst-case" end-to-end form that included all scenarios? 
  - How do user feel about the former spouse sections of the add-spouse workflow?
  - What can we do do to make it more tolerable?

- Workflows of particular interest: Add Spouse (individually). Add Spouse/Add Child (combo), Add Spouse/Report Divorce (combo), Add Child/Add Student (combo)...

#### Success
TBD

### Method
Usability testing will be conducted remotely using Zoom or GoToMeeting. Veterans will be presented with high-fidelity prototype created using Adobe XD. A remote moderator will prompt users with questions (from the conversation guide). Participants will be encouraged to talk through their exploration of the prototypes. Remote observers and note takers will be in attendance.

### Participants and Recruitment
Participants will be recruited via Perigean. The study will require 10 Veterans from a range of service backgrounds. Participant criteria include:
- 10 Veterans
- Various service backgrounds
- Geographically diverse
- All genders
- Computer access and basic computer literacy
- Total Rated Disability of 30% or greater
- Several Veterans (3 to 4) with Total Rated Disability of 80% or greater and cognitive disabilities
- Have or had dependents; received or applied for dependents benefits
- Because XD prototypes will be presented, there is no support for users needing adaptive equipment or software
- Sessions will run approximately 30 minutes

### Timeline
The target window for research sessions is the week of February 17. Preparation includes participant recruitment, refining prototypes, revising the conversation guide, and a pilot (test) session. 

#### Pilot Session
The target date for the pilot session is February 14.

#### eBenefits Team Availability
(Session times subject to Participants' availability)

Date | Time (EST)
-----|-----------

### Team Member Roles
- [Aricka Lewis](aricka@adhoc.com) -- Moderator, researcher
- [James Adams](jadams@governmentcio.com) [(VA Email)](james-adams2@va.gov) -- UX designer
- [Steve Kovacs](steve.kovacs@va.gov) -- DSVA lead
- [Jason Wolf](jwolf@governmentcio.com) -- eBenefits product manager
- [Shawna Hein](shawna@adhocteam.us) -- VSA design lead
- [Kathleen Crawford](kcrawford@governmentcio.com) -- Backend engineer
- [Micah Chiang](micha@adhocteam.us) -- Frontend engineer
- [Jesse Cohn](jesse.cohn@adhocteam.us) -- Frontend engineer
- [Jennifer Strickland](jennifer.stricklandn@adhocteam.us) -- 508 compliance
- [Emily Waggoner](emily@adhocteam.us) -- VSP platform
- [Peggy Gannon](peggy@thesocompany.com) -- VSP content
- Perigean -- Participant recruiting & screening
- Note-takers -- Various as available
- Observers -- various as available

### Resources
- [Project Brief for Add/Remove Dependents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/issue-briefs/apply-modify-dependents.md)

- [Conversation Guide]() (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design/686-form-gating-0220/686-usability-conversation-guide.md)

- [Add/Remove Dependents Walkthrough/Workflows](https://xd.adobe.com/view/0f7759a1-b990-4d71-50c9-138d9e593fd0-7946/)

- [Session Notes]() (Available after research sessions.)

- [Research Synthesis]() (Available at conclusion of research.)

- [Research Readout]() (Available at conclusion of research.)

### References
 - [VA Form 21-686c (PDF)](https://www.vba.va.gov/pubs/forms/VBA-21-686C-ARE.pdf)
 
 - [VA Form 21-674 (PDF)](https://www.vba.va.gov/pubs/forms/VBA-21-674-ARE.pdf)
 
 - [21-686c Business Workflows](https://xd.adobe.com/view/380c70df-eb96-4008-79af-c210c9c795c1-4e3d/)

#### Approval
