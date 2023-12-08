# Research Plan for [1010 Team, 10-10EZ, Household financial information section usability/UAT]

## Background
The Health Care Application (10-10EZ) enables Veterans to access and apply for VA health care easily with any device at any time, with or without assistance. The household information section/step has been observed as a section of the applicaiton with high drop-off rates and being a pain point in research, resulting in this section being a focus of a recent optimization effort ([Epic #41403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41403)). 

The household information section includes questions on:
- Financial disclosure
- Marital status & spouse information
- Dependents
- Annual income
- Deductible expenses

This optimization effort has gone through [colloboration cycle](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47766) and this study will happen post-staging review. This research study is focusing on an iteration of one specific section - the household financial information - including the ability to add multiple dependents using the new experimental pattern (and components) for mutliple responses with a multi-page response. 

We will focus on testing for the following use cases during this study: 
- Applicant is married with 2 dependents.
- Applicant is divorced with 2 dependents.
- Applicant is single with 2 dependents.

- [All use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Household%20section%20redesign/Staging%20Review_QA/Household%20Section%20Optimization%20Use%20Cases.md)

- Product | [10-10EZ Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)



### OCTO Objectives 

The [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) that this research supports are:

Increase 
- Completion rate of online transactions
- Usage of digital, self-service tools
- Percent of applications submitted online (vs. paper)

Decrease
- Time to successful complete and submit online transactions


### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?
Are there moments that matter? 

- Getting out
- Starting up
- Taking care of myself


## Research Goals	
What are you trying to learn from this research? 

- Goal 1: Test the usability of the experimental pattern for adding multiple dependents to the household financial information section.
- Goal 2: Determine if the there are any issues for assistive tech users when they add multiple dependents to the application.
- Goal 3: Determine if the updated content for the household information section is clear and understandable or if any points of confusion remain.



### Outcome
These learnings will allow us to evaluate for additional gaps during the rollout of these updates to production. The findings and recommendations will be categorized as to if there are any blockers and what can be addressed in future interations.


### Research questions
**Goal 1: Test the usability of the experimental pattern for adding multiple dependents to the household financial information section.**
- When arriving at the dependent questions, is there any confusion on who the participant should add here? (Who does the VA consider a dependent?)
- Are any of the content/questions unclear or cause the participant to pause?
- Can participants easily move through the pages of dependent questions? 
- Are the questions grouped by topic (one-thing-per-page) as it would make sense to the participant?  
- After adding their first dependent, do participants know how to make changes or remove a dependent from the application?
- Do participants comment on the progress bar during this process?
- Are participants able to make adjustments to their dependents from the review page easily or do they struggle?
- Do participants seem to be confident when making edits on the review page or hesitant?


**Goal 2: Determine if the there are any issues for assistive tech users when they add multiple dependents to the application.**
- Are there any accessibility issues when navigating through the multiple responses flow? 
- Is there any confusion with the tab order or how questions are presented?
- Do users struggle on the dependent 'review' page where it lists the first dependent added and the yes/no question to add additional dependents?
- Can users easily edit and make changes or is this process a pain point?
- Do users using screen magnification have any issues with the action button placement on the dependent cards or the confirmation modals?
- Does the progress bar or other form elements make it more challenging for assistive tech users?
- Can participants edit from the review page or does this present any challenges?


**Goal 3: Determine if the updated content for the household information section is clear and understandable or if any areas of confusion remain.**
- Do participants seem to struggle or question any of the content revisions on the onboarding page?
- Do participants seem frustrated or appreciative of the extra pages with information (onboarding and documents needed)?
- Do participants interact with the additional info components to learn more? Which ones? Do they feel confident or confused after reading that information?
- Do participants find any questions difficult to understand or seem to need more information to answer?


### Hypothesis
- Partipants will easily be able to add multiple dependents and move through the pages of questions.
- Partipants will appreciate the confirmation when destructive actions - such as remove or cancel - are initiated. (modals)
- Partipants will call out the edit flow for dependents as they have to go through all the pages and can't direcly edit, would suggest they would appreciate a more direct route to edit. 
- The onboarding/documents page is well received as being clear and informational leading to a more positive perception about sharing this information.
- The content helps the participant answer questions confidently and accuratley. 



## Methodology	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

- Usability testing - appropriate for evaluative research
- User acceptance testing (UAT) - required before product release

### Location

Remote, moderated via Zoom.

### Research materials
*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

For moderated usability tests: 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2023-04-Household%20information%20section%20usability/conversation-guide.md)
- [Link to staging (once development / staging review complete)](https://staging.va.gov/health-care/apply/application/introduction)
- [Link to recruitment ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/360)
	
## Recruitment	

### Recruitment approach
Our intended audience for this research are Veterans and we will be using and leveraging Perigean to recruit participants.

### Recruitment criteria
List the total number and type (Veterans, caregivers, etc.) of participants for this study. 

**Veterans: Completed 6; requested 9**


**Primary criteria (must-haves)**
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 

- All must have a disability rating of 40% or below 
- All must currently or in the past claimed dependents (on their tax returns)


- At least 2 using a screen reader during the session
- At least 2 are using a mobile device during the session
- Diverse mix of age ranges
- No more than 1 participant with a Bachelor's degree or higher
- At least 2 participants who are Black
- At least 2 participants who are Hispanic



### Screener questions


For all: 
- Do you have a disability rating of over 50%? (Proceed if no, if yes, disqualify)
- Do you currently or in the past claimed dependents on your tax return? (Proceed if yes, if no, disqualify)


For recruiting 2 screen reader users
- (a) Do you need to use assistive technology to use the internet such as VoiceOver on an Apple device, TalkBack on an Android device, or JAWS on a computer? (Proceed to question b if yes, if no, disqualify)
- (b) Are you able to join the Zoom session using this assistive technology? (Answer should be yes to satisfy criteria for screen reader)

For recuriting 2 mobile users
- Are you able to join the Zoom session from a smart phone such as a Samsung Galaxy or Apple iPhone? Any kind of smart phone will work, as long as it connects to the internet. (Answer should be yes to satisfy criteria)





## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 



### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 


### Research sessions
* Planned dates of research: **August 21 - August 25, 2023**

### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 1 hour
* Maximum Sessions per day: 2


### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.


| **Team Availability** | **Time (ET)** 	|
| --------------------- | --------------------- |
| August 21, 2023  	|  11am - 5pm ET 	|
| August 22, 2023  	|  11am - 5pm ET 	|
| August 23, 2023  	|  11am - 4pm ET 	|
| August 24, 2023  	|  10am - 4pm ET 	|
| August 25, 2023  	|  10am - 4pm ET 	|




 
## Team Roles	
- Moderator: David Kennedy (david.kennedy@adhocteam.us) and team
- Research guide writing and task development: Jessica Stump (jessica.stump@adhocteam.us)	
- Participant recruiting & screening: Perigean
- Project point of contact: Moderators
- Participant(s) for pilot test: 
- Note-takers: Perigean, 1010 Team
- Observers: Heather Justice (heather.justice@adhocteam.us), Matt Long (matt.long@adhocteam.us), Jessica Stump (jessica.stump@adhocteam.us), Katelyn Caillouet (katelyn.caillouet@agile6.com), Hieu Vo (hieu.vo@agile6.com) 
Observers: [link to sign up post on Slack](https://dsva.slack.com/docs/T03FECE8V/F05M2V3T4FM)


> **List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side
- Kristen McConnell (kristen.mcconnell@va.gov)



## Approvals 
- Kristen McConnell (kristen.mcconnell@va.gov) on August 4, 2023

