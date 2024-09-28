# Research Plan for Authenticated Experience, My VA Audit UAT, March/April 2023
## Background
My VA had some inconsistencies between its five sections -- the "nametag", Claims and appeals, Health care, Benefit payments and debts, and Apply for benefits. This is making the page hard to manage and hard to scale.

As a result, we conducted an audit of [My VA in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/vsa8243/1648129585496/d22080eb307aac8bda5ba1153e013a386b7f1396?sender=uce014850ef6c5a8303e70396) to document and evaluate the following:
- All of the states of each section of My VA
- Whether all states are necessary
- Where we can simplify without losing important personalization
- How we can bring greater consistency between sections
- How we can highlight VA benefits on My VA for users who might be interested in them

The design updates we are testing in this study will bring greater consistency to how each section loads, handles errors, and shows conditional information, resulting in a page that is easier to manage and scale. We hypothesize that this will improve the end user experience by highlighting benefits that may be of interest to logged in Veterans, as well as by making it easier for us to continue to add features we know people expect.

[Link to project brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2022-audit).

### OCTO-DE Objectives 
Especially since My VA is now the next destination when a Veteran logs into VA.gov from the homepage, it is critical that we present the most relevant updates as quickly and clearly as possible while also highlighting benefits a Veteran may be interested in that they may have previously found on the homepage. Accomplishing these things will fulfill our north star objective of being a single, authoritative source of information that is personalized to the logged in user.

### Veteran Journey
Since Veterans can apply for and manage their benefits any time after getting out of the military, this work impacts the Veteran journey from Starting Up and beyond.

## Research Goals	
The primary goal of our UAT is to confirm that functionality works as expected with these audit updates and that all links are being tracked in Google analytics.

As secondary goals, we’ll follow up on [our last usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/research/MyVA-audit-research-findings.md):
- We would like to verify that the updated content in the Education and Training section resonates better with Veterans now that we've changed the termiololgy to reference the Post-9/11 GI Bill.
- We would like to verify that the title change for the Benefit application drafts section has made it clear that only saved, in-progress applications will show in that section and that applications refers to benefit applications that are filled out on VA.gov.

### Outcome
Based on the outcome of this research study, we will either release the audit updates to production and/or update our design to correct any significant usability hurdles people encounter. 

If Veterans are still confused about the Benefit application drafts section, we have a [backup plan to launch with hint text added to this section](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0-1&mode=design).

### Research questions
- Does the functionality work as expected?
- Is Google analytics tracking all links as expected?
- Is the dynamic content on My VA accurate and useful in the sections we've updated for this audit?
- Do Veterans with education benefits know how to find info about their remaining education benefits from My VA?
- Do Veterans know how to find and continue a saved application from My VA?

### Hypothesis
- Veterans will not encounter any bugs on My VA.
- Veterans will be able to easily find updates and take action on their top tasks from My VA.
- Veterans who use education benefits will be able to tell how they could find information about their remaining education benefits from My VA.
- Veterans will understand how to find saved applications on My VA and continue them, and will know what the section is for just by reading the title "Benefit application drafts."

## Method	
We'll have participants go through a list of specific tasks for UAT and ask follow-up questions to get feedback on our usability related questions. We will test in production using a feature flipper.

### Location
Remote, via Zoom

### Research materials
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/UAT/MyVA-audit-UAT-conversation-guide.md) 

## Recruitment	
We are recruiting Veterans who use various VA benefits and specifically some who use or have used education benefits since we want feedback specific to that type of benefit. We are focusing our other recruitment criteria on the marginalized groups we didn't speak with during [our last usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/research/MyVA-audit-research-findings.md). This includes Veterans living in rural areas, mobile users, and Veterans with no college degree. We'll use Perigean to recruit them.

### Recruitment criteria
[Link to recruitment request ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/241)

## Timeline
### Prepare

When will the thing you are testing be finalized? 

April 2023

Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: heather@adhocteam.us
* Date and time of pilot session: 
  * Friday, March 31, 2023 at 

### Research sessions
What dates do you plan to do research? 

April 5-7, 2023

### Length of sessions
Sessions will be 45 minutes with 30 minutes in between sessions. Please schedule no more than 4 sessions per day.
For the screen reader session, please schedule it for 75 minutes.

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| Wednesday, April 5, 2023 | 9am-2pm; 3-5pm |
| Thursday, April 6, 2023 | 9am-5pm |
| Friday, April 7, 2023 | 9am-5pm |	

## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Angela Agosto, angela.agosto@adhocteam.us; Florence McCafferty, florence.mccafferty@agile6.com
- Research guide writing and task development: Angela Agosto
- Participant recruiting & screening: Perigean
- Project point of contact: Angela Agosto, Florence McCafferty
- Participant(s) for pilot test: heather@adhocteam.us
- Note-takers: None (will use Zoom transcription)
- Observers:	
  - samara.strauss@va.gov
  - ana@adhocteam.us
  - berni.xiong@agile6.com
  - allison@cityfriends.tech
  - derrick.ellerbie@agile6.com
  - liz.lantz@adhocteam.us
