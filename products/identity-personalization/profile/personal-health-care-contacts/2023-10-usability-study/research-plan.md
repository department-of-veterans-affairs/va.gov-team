# Research Plan for Cartography and Authenticated Experience Profile teams: Emergency contact and Next of kin information usability, October 2023

## Background

The Cartography team is working with the Authenticated Experience team to add Emergency contact (EC) information and Next of kin (NOK)  information to the VA.gov Profile.
There is currently an absence of a digital self-service method that allows Veterans to proactively view, add, or edit their emergency contact and next of kin information. 

The goals of adding emergency contact and next of kin information: 

- **Allow proactive management for Veterans.** Veterans should be able to update their emergency contact information proactively, without waiting for a medical appointment or having to call in to make changes.

- **Streamline check-In process.** By proactively managing their emergency contact and next-of-kin information, Veterans can avoid last minute manual data correction methods at the check-in process for medical appointments

- **Data Integrity.** Veterans aim to maintain accurate, up-to-date next-of-kin and emergency contact information to ensure that medical staff can reach the correct individuals in case of an emergency. 

While veterans won't be able to immediately proactively manage their information in place (for the MVP), the information will now be in a centralized place for Veterans to view and review. The followup work will add the functionality to add/edit emergency contact and next-of-kin information. 

You can read more at [Emergency Contact and Next of Kin Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/ec-and-nok/ec-and-nok-outline.md).

### OCTO Objectives

This research supports the following OCTO objectives: 

1. Veterans can manage their health services online
2. Veterans and their families can find a single, authoritative source of information
3. Logged-in users have a personalized experience, with relevant and time-saving features

### Veteran Journey

This research fits into these points of a Veteran's Journey:

- Starting up
- Taking care of myself
- Retiring
- Aging


## Research Goals 	

The purpose of this research is to assess users' understanding, reactions, and expectations to the proposed Emergency contact and Next of kin feature within the VA.gov profile. 

Evaluate how easily users are able to find this information. 
Evaluate if the proposed designs are understandable and useful across participant types (sighted and low/no vision) and screen sizes (mobile and desktop). 

### Outcome

This research will inform the direction of this proposed design concept: we will either move forward with this design, making iterations as needed or choose not to pursue this direction.

### Research questions

1. Are users able to navigate to the Emergency contact and Next of kin information from an unauthenticated state?
 
	- Is it intuitive to find this information within VA.gov profile?

2. What are users' reactions and understanding of the proposed designs? 

	- Is it clear that the “Personal health care contacts” only pertain to health care? 
	- Is it clear to users how to update their information? 
	- Do participants understand what is meant by “Next of kin” information? 

3. What are users expectations for Emergency contact and Next of kin information? 

	- How is the “read only” data useful to Veterans?
	- How many Emergency contacts and Next of kin contacts do people want/expect to list/see? 
	- What type of information for both Emergency contact and Next of kin do users expect to need to provide?

### Hypotheses

_Hypothesis 1:_ Participants will sign in, go to the "Profile", then navigate to “Personal health care contacts” in order to view EC and NOK information.  

_Hypthesis 2:_ Participants will understand the EC and NOK information and understand how to update information. 

_Hypthesis 3:_ Participants will want to be able to edit or add EC and NOK information in place. 

## Method

We will conduct remote usability and interview sessions with Zoom. The interviews will consist of a combination of tasks and direct questions. We will conduct a study on production behind a feature flag assuming API access. If APIs can’t be hooked up successfully, we will conduct a study on the staging environment. 

### Location
Data collection will be remote and conducted using Zoom. 

### Research materials

[Conversation guide] TBD

## Recruitment

### Recruitment approach

We will partner with Perigean to recruit Veterans. All efforts will be made to recruit a diverse sample, with participants' backgrounds ranging across age, abilities, and ethnicities. 

We’d like to recruit 12 participants for a total of 8 completed sessions:

We would like to request a kick-off meeting with Perigean to go over the recruitment criteria and screener questions.
**Availability for potential kickoff meeting times with Perigean, depending on their availability. Anticipate KO meeting lasting 30 minutes**
- Wednesday, October 11: 10 - 12pm, 3 - 4:30pm EST 
- Thursday, October 12:  10 - 12pm, 1 - 2pm, 3 - 4pm EST 

### Recruitment criteria

All participants:

- Must be veterans
- Must have a computer or mobile phone and be willing to complete their sessions on this device
- Must be willing to share a web browser window on the Zoom call
- Must have a working microphone
- Must have Zoom downloaded to their computer or mobile phone prior to the session and know how to share their screen
- Must have signed into VA.gov or MHV, for any reason and need to know their login information 

Some participants:

- 4 people who use screen readers on desktop 
- At least 4 people with identify as having a cognitive considerations
- 6 people who can join the session from a smartphone
- At least 3 people who are 55+, but not more than 8
- 6 people who identify as a race other than White/Caucasian
- 6 people who identify as a gender other than male
- 8 people who currently receive health care through VA
- 4 people who have not received health care through VA in the last 10 years, but do have a disability rating

### Screener questions

1. We’d like you to review parts of the VA website that require you to log in to an identity-verified account. **Do you have an identity-verified account on VA.gov?** You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you log in, your identity is **not** yet verified. 
> _Response options: yes or no (Answering `yes` would qualify the participant.)_


2. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that VA.gov works for people who experience these things.
> _Response option: text box (we need a minimum of 4 people with cognitive considerations, so after this requirement is met, any response is acceptable)_

3. Are you able to join the session from a smartphone such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet.
> _Response options: yes or no (Answering `yes` would qualify the participant to satisfy criteria for smart phone users. If yes, proceed to 4a.)_

3a. Have you downloaded the Zoom app to your smartphone, know how to screen share, and have a working microphone on your phone?
> _Response options: yes or no (Answering `yes` would qualify the participant. If no, proceed to 4b)_

3b. You’ll need to download Zoom, use a working microphone and be ready to screenshare to participate in this session. Please let us know if you need help doing these things prior to your scheduled start time.

4. What device will you use to join the session?
> _Response option: text box_

5. Do you need to use screen reader technology to use the internet, such as JAWS on a computer?
> _Response options: yes or no (Answering `yes` would qualify the participant to satisfy criteria for screen reader users. If yes, proceed to 5a)_

5a. Are you able to join the Zoom session using this assistive technology?
Yes (Recruit 4, go onto Screener question 5b)
No (Disqualify as screenreader participant; can be recruited based on other criteria)

5b. Please list the name of the assistive technology or software you will use during the session.
> _Response option: text box_
   
6. Have you received health care at a VA health facility within the last 10 years?
> _Response options: yes or no (Answering `yes` would qualify the participant to satisfy criteria for 8 health care users. If yes, skip question 7. If no, proceed to question 7)_

7. Do you have a disability rating?

 >_(Answering `yes` would qualify the participant to satisfy criteria for 4 participants who do not have health care, but have a disability rating. If no, disqualify)_

## Timeline

### Prepare
- Pilot #1: Week of October 16th 
- Pilot participant email: TBD
- Date and time of pilot session: TBD

### Research sessions
* Planned dates of research: **October 19 - 26th 

### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 30 minutes

### Availability

Team Availability | Time Slots (ET)

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| 10/19/2023 | 9am - 4pm; 5:30pm - 7pm |	
| 10/20/2023 | 9am - 5pm |
| 10/23/2023 | 9am - 5pm; 5:30pm - 7pm |
| 10/24/2023 | 9am - 5pm | 
| 10/25/2023 | 9am - 5pm; 5:30pm - 7pm |
| 10/26/2023 | 9am - 5pm | 
	
## Team Roles	
Please list the people who will be serving in each role. 	
- Moderator: Jonathan Nelson (jonathanj.nelson@adhocteam.us)
- Research guide writing and task development: Jonathan Nelson
- Participant recruiting & screening: Perigean
- Project point of contact: Jonathan Nelson (jonathanj.nelson@adhocteam.us)
- Participants for pilot test: TBD
- Note-takers: Shared amongst team members
- Observers: 
  - liz.lantz@adhocteam.us
  - samara.strauss@va.gov
  - pamela.drouin@a1msolutions.com
  - michael.collier@agile6.com
  - patrick.bateman@va.gov 

all others to sign up via sign up list. 

## Approvals
- Reviewed and approved by Samara Strauss, Patrick Bateman on 
- Reviewed and approved by Shane Strassberg on 




