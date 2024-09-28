# Research Plan for AEDP [Study Name], [Date]

> [!TIP]
> Be sure to update the jump links to your tasks


**Jump ahead to:**
- [Background](#background)
- [Research goals](#research-goals)
- [Methodology](#methodology)
- [Recruitment](#recruitment)
- [Timeline](#timeline)
- [Research sessions](#research-sessions)
- [Team roles](#team-roles)
- [Approved by](#approved-by)

  
> [!TIP]
> Add the background information about this study, which can be found in the epic we're testing and our pattern's product briefing page.

## Background
[Example text:] A variety of digital products within the authenticated VA.gov experience provide a service to users that prefill some of their existing profile information in order to save Veterans' time and energy. Our team is tasked with reviewing current or potential VADS design patterns to improve guidance around their implementation for consistency and ease of use across the different use cases on VA.gov. We have researched how this pattern has been used so far across the site, and would like to test some of the different variations we have seen implemented to find the best possible solution for the widest audience.

Some of the variations we plan to test include:
- Location and frequency of the prefill alert
- Display style of both locked and editable data sets (Address vs Gray Box)
- Location where updated data is saved (Profile vs Form)

Many forms prefill personal information on VA.gov right now. By determining the best placement, style and experience of using this pattern, we will provide improved guidance for this pattern that will help to improve the user experience of VA.gov as well as other federal government digital products.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/patterns/prefill/README.md).

> [!CAUTION]
> Our OCTO objective should remain the same for all research we're doing.

### OCTO Objectives and Veteran Journey

This work supports the [OCTO Objective 3.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md) Our people are empowered with the knowledge and resources they need to make a sustained impact. Because this design pattern can be used across a wide variety of forms and digital products, the study fits into the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5fa2c0a1630337422de4e8f719cdcac3e391fe1a/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf#L2) throughout the full life cycle of the Veteran.

  
> [!TIP]
> Update the goals and outcomes we hope this research will help us achieve and the questions we hope to answer.

## Research Goals	
Goals for this research include:
[Example Research Goals:]
- Understand where and when users need the prefill alert to appear.
- Understand how users expect the prefilled data to display.
- Understand users' expectations around why certain data can be edited within their profile and other data cannot.
- Understand how users expect the edit process to work, where they expect their edits to get saved, and if they want to be asked where to save their data.

### Outcome
We will synthesize the data from this study and create a summary report of our learnings. This research will inform decisions around these two patterns our team is refining:
[Help users to... Know when their information is prefilled](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/17)
[Help users to... Update prefilled information](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/22)
This research will help us refine these patterns and to feel confident in our recommendations for these patterns when we submit them to VADS and USWDS.


### Research questions
We will guide participants to complete the tasks using a think-aloud method.

*Goal 1: [Repeat Goal 1 from above] [Example goals]*
- Does the prefill alert in the unauthenticated experience entice them to sign in to complete the form?
- Where do they expect the prefill alert message to be located once they are authenticated?
- In what variation do they notice the prefill alert? Top of page? On the step pages?
- Does bolding the word ‘note’ make an impact on whether they will read the information?

*Goal 2: [Repeat Goal 2 from above] [Example goals]*
- Which version of the data display (address block vs gray card component) helps users to more quickly understand that it contains prefilled data?
- Do they notice the prefilled data where it is located on the page in either the address block or gray card component?

*Goal 3: [Repeat Goal 3 from above] [Example goals]*
- How do they feel about the ability to edit some data but not others?
- Is it clear how to edit data within the form? Is it clear how to edit data that is not editable on VA.gov?
- Does the user understand why some data is not editable?
- Does the explanation for why we limit edits to some user data increase user trust in VA?

*Goal 4: [Repeat Goal 4 from above] [Example goals]*
- Where do they think the new information gets saved? (profile vs form)
- Would they ever want to choose where this information gets saved? 
- Which type of prefilled data display do they prefer to see on the edit page? (in-field vs gray box)
- What content do users expect to see in the confirmation message after they have saved their data?

  
> [!TIP]
> Update this section to include our assumptions about how we think users will respond to the questions above or outcomes we expect to find or confirm.


### Hypotheses
[Example Hypotheses]
Location of the prefill alert (Intro page vs Form pages):
- The prefill alert on the front page will entice the user to login for a more convenient experience.
- Bolding “note” in the prefill alert messaging will help users see a block of text quicker.
- Users will more easily notice the intro prefill alert when it’s at the top of the page.
- We will learn that the user only needs the prefill alert on the intro page.

Display style of both locked and editable data sets (Address vs Gray Box):
- The users will prefer the address component over the gray box for the locked data.

Location where updated data is saved (Profile vs Form):
- Users understand why we limit in screen edits for some types of data and find the messaging around this reason to be sufficient.
- As long as the data is going back to their profile, they will not want to be asked if it is ok to update their profile.
- Users will prefer to see in field data instead of the locked gray box displaying their current data while they are editing.
- Users want to be informed if their data is not updating to their profile.
- The confirmation alert will help users understand when their data has been updated.


> [!CAUTION]
> This section should not need to be edited.

## Methodology	
We will perform usability testing on three scenario-based concept tests - appropriate for evaluating structured design maturity. We will use the think-aloud format so that we can evaluate how the user is responding to the design as they perform a task we give them. We will show the three tasks to each participant and change the order of the tasks shown to avoid the first view bias.

**Note:** This may change to two concepts per participant if we find that three are too many flows to show each participant.

### Location

We will hold the research sessions remotely on Zoom.


> [!TIP]
> Be sure update the links below to the relevant documents. 

### Research materials

[Example research materials:]
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill/prefill%20usability%20test%20convo%20guide.md)
- [Prototype](https://musical-doodle-7676579pxr3rxrg-3001.app.github.dev/mock-form-ae-design-patterns/)
- [Designs](https://www.figma.com/design/2j01RTqCSJRy4lX3eUOiod/AE-Design-Patterns---Prefill?node-id=335-14388&t=86ldrwkOEBj4Hy3x-0)


> [!WARNING]
> This please review the dates, times and number of participants and update accordingly.
	
## Recruitment	

### Recruitment approach
[Example recruitement approach]
We are looking for 8 Veterans to participate in this study. We’ll use a lean maximum strategy for inclusivity, targeting 3 demographic criteria (age, gender, race) as primary sample distribution criteria, and race/ethnicity as a secondary sample distribution criteria.

### Recruitment criteria
12 Veterans (includes a 1.5x over recruit)

### Screener Questions
[Example screener questions:]
#### Primary criteria (must-haves)

- All participants must be willing to join from their mobile devices for the study
	- Are you able to join the Zoom session from a smartphone such as a Samsung Galaxy or iPhone? Any kind of smartphone will work as long as it connects to the internet [Yes/No]
- At least 5 Veterans who are over 55 years old.
- At least 4 Veterans who identify as having a cognitive disability.
	- Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
		- Response options: yes or no (Answering yes would qualify the participant.)
- At least 3 Veterans who identify as a gender other than male. 
- At least 2 Veterans who are under 35 years old. 
- At least 1 Veteran who lives in a rural area.

|# of participants|Criteria|
|:--|:--|
|Exactly 10|Are Veterans|
|Exactly 10|Are willing to join from a mobile device|
|At least 5|Are over 55 years old|
|At least 4|have a cognitive disability or consideration|
|At least 3|Identify as a gender other than male|
|At least 2|Are under 35|
|At least 1|Lives in a rural area|


## Timeline
[Request a kickoff call if desired and provide potential dates/times for that meeting]

### Prepare
**When will the thing you are testing be finalized?**

[Provide estimated completion date]

**Pilot session information**

- Pilot participant email: [provide email]
- Date and time of pilot session: [provide date/time]

### Research sessions
**Planned dates of research:**

- Planned dates of research: [Provide estimated dates]

### Length of sessions

- Session length: 1 hour
- Buffer time between sessions: 30 minutes
- Maximum sessions per day: 3

### Availability

The least preferred day to schedule participants is Thursday, September 5th as one of our researchers is out on Thursdays, but we wanted to provide lots of extra availability just in case. Thanks!

[Example timeslots]

|Date|Timeslots (EST)|
|:--|:--|
|Monday August 26th| 2pm-7pm|
|Tuesday August 27th| 2pm-7pm|
|Wednesday August 28th| 1pm-3pm, 5pm-7pm|
|Friday August 30th| 10:30am-6pm|
|Tuesday September 3rd|10:30am-11:30am, 2pm-7pm|
|Wednesday September 4th|10:30am-3pm, 4-7pm|
|Thursday September 5th|10:30am-5pm|
|Friday September 6th|10:30am-6pm|
|Monday September 9th| 2pm-7pm|
|Tuesday September 10th| 10:30am-11:30am, 2pm-7pm|


> [!WARNING]
> Double check the following information for accuracy.
	
## Team Roles	
Below is the list of the people serving in each role and their contact information:

- Moderator: [Provide name]
- Research guide writing and task development: [Provide name]
- Participant recruiting & screening: [Provide name]
- Project point of contact: [Provide name]
- Participant(s) for pilot test: [Provide name]
- Note-takers: [Provide name]
- Observers: [Provide names]
  
*Contact info:*
- [Provide name] [Provide email] [Provide number]
- [Provide name] [Provide email] [Provide number]
- [Provide name] [Provide email] [Provide number]
- [Provide name] [Provide email] [Provide number]
- 
## Approved by:

Becky Phung, PO on:

Shane Strassberg, VA Research Ops:
