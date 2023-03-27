# Research Plan for [1010 Team, 10-10EZ, Household financial information section usability/UAT]

## Background
The Health Care Application (10-10EZ) enables Veterans to access and apply for VA health care easily with any device at any time, with or without assistance. The household information section/step has been observed as a section of the applicaiton with high drop-off rates and being a pain point in research, resulting it this section being a focus of a recent optimization effort (Epic # ). 

The household information section includes questions on:
- Financial disclosure
- Marital status & spouse information
- Dependents
- Annual income
- Deductible expenses

This optimization effort has gone through colloboration cycle (ticket number link) and this study will happen post-staging review. This research study is focusing on an iteration of one specific section - the household financial information - including the ability to add multiple dependents using the new experimental pattern (and components) for mutliple responses. 

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
These learnings will allow us to evaluate for additional gaps prior to launching these updates to production. The findings and recommendations will be categorized as to if there are any blockers and what can be addressed in future interations.


### Research questions
**Goal 1: Test the usability of the experimental pattern for adding multiple dependents to the household financial information section.**
- When arriving at the dependent questions, is there any confusion on who the user should add here? (Who does the VA consider a dependent)
- Are any of the content/questions unclear or cause the user to pause?
- Can users easily move through the pages of dependent questions? 
- Are the questions grouped by topic (one-thing-per-page) as it would make sense to the user?  
- After adding their first dependent, do users know how to make changes or remove a dependent from the application?
- Do users comment on the progress bar during this process?


**Goal 2: Determine if the there are any issues for assistive tech users when they add multiple dependents to the application.**
- Are there any accessibility issues when navigating through the multiple responses flow? 
- Is there any confusion with the tab order or how questions are presented?
- Do users struggle on the dependent 'review' page where it lists the first dependent added and the yes/no question to add additional dependents?
- Can users easily edit and make changes or is this process a pain point?
- Do users using screen magnification have any issues with the action button placement on the dependent cards or the confirmation modals?
- Does the progress bar or other form elements make it more challenging for assistive tech users?


**Goal 3: Determine if the updated content for the household information section is clear and understandable or if any areas of confusion remain.**
- Do users seem to struggle or question any of the content revisions on the onboarding page?
- Do users seem frustrated or appreciative of the extra pages with information (onboarding and documents needed)?
- Do users interact with the additional info components to learn more? Which ones? Do they feel confident or confused after reading that information?



### Hypothesis

- Users will easily be able to add multiple dependents and move through the pages of questions.
- Users will appreciate the confirmation when destructive actions - such as remove or cancel - are initiated. (modals)
- Users will call out the edit flow for dependents as they have to go through all the pages and can't direcly edit, would suggest they would appreciate a more direct route to edit. 
- The onboarding/documents page is well received as being clear and informational leading to a more positive perception about sharing this information.
- The content helps the user answer questions confidently and accuratley. 



## Methodology	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

- Usability testing - appropriate for evaluative research
- User acceptance testing (UAT) - required before product release

### Location

Remote, moderated via Zoom.

### Research materials
*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

For moderated usability tests: 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2023-04-Household%20information%20section%20usability/conversation-guide.md)
- [Link to staging (once development / staging review complete)](url goes here)

	
## Recruitment	

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers. 

Before writing your recruitment criteria, be sure to review the following resources. 
- [Refer to the Perigean Recruitment Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md) to learn how Perigean recruits, screens, and prepares participants for research. 
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
Our intended audience for this reasearch are Veterans and we will be using and leveraging Perigean to recruit participants.

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria
List the total number and type (Veterans, caregivers, etc.) of participants for this study. 

Veterans: completed 10; requested 15




**Primary criteria (must-haves)**
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 

Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

> Tip: The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria. Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Go to an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/2020-12.research-plan1.md#participants-and-recruitment)

**Secondary criteria (nice-to-haves)**
What criteria would strengthen your results? 



## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions
* Planned dates of research:

### Length of sessions
* Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)
* Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time) 
* Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator:	
- Research guide writing and task development (usually but not always same as moderator):	
- Participant recruiting & screening:	
- Project point of contact:	
- Participant(s) for pilot test:
- Accessibility specialist (for sessions where support for assistive technology may be needed):	
- Note-takers:	
- Observers:	
**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side 
