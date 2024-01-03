# Research Plan for Supply Reordering, Health Portfolio, January 2024]
*Questions about how to set up your research study? Reach out in the #research-ops Slack channel.* 

## Background
Briefly describe the background of your product. Consider:
- The Supply Reordering tool seeks to relieve the burden from the Veteran of going to DLC for reordering devices and filling out a form via mail, or calling to reorder their devices by going to VA.gov instead. DLC also has seen a drastic reduction in the use of their contact centers for supply reorders, which allows them to use their time towards other goals. You need to sign into VA.gov (authenticated) to place a re-order. The tool is currently an iteration of what was once a tool only for hearing aids and batteries reorders, we have now added CPAP supplies.
[Link to product brief](url goes here).

### OCTO Priorities 

This works hits several different OCTO priorities, but particularly the priority to increase availability of self-service tools,decrease time to outcomes
maximize satisfaction, reliability, availability, & security and enhance the Veteran logged-in experience. Eventually, we will be integrating this function into the MHV on VA.gov health portal. 

### Veteran Journey
Where does your product fit into the Veteran journey? This product would fall into  "Taking care of myself". Usually supplies are needed for chronic conditions, supply reordering is a repeated process through the Veteran's lifetime/as long as they have a certain diagnosis. 

## Research Goals	
What are you trying to learn from this research? 

Goal 1: Understand how Veterans currently order and re-order supplies
Goal 2: Get insight into usability/navigation concerns, (i.e - how are error states understood)

### Outcome
We want to determine if the current process is serving Veterans' needs and is as intuitive as possible for the future state of this product. How can the process improve?

### Research questions
Consider bucketing research questions under research goals. For each question, think about:
- What is the end-to-end process for Veterans who want to order/re-order supplies? How can we incorporate that knowledge into our current system?
- How do Veterans interact with the new form on VA.gov?


### Hypothesis
What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis.

The intention of this study is to figure out how to further improve the Supply Reordering tool for Veterans. Currently, many Veterans are using the supply reordering tool for sleep apnea supplies, we don't have a full picture of their pain points in the process, just that orders are being completed and sent to DLC. 

Hypothesis 1: Veterans will tell us about the clinician/VAMC interactions that are involved in being eligible to reorder/order supplies 
Hypothesis 2: Veterans will identify a few pain points when using the new form. Also, some Veterans may have a hard time finding the tool without using search. 



## Methodology	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

Examples of common research methods include: 
- Semi-structured interviews - The bulk of the study will be interview-style, the questions will allow us to have a better baseline understanding of how Veterans currently reorder supplies and also highlight anything in the process we are missing. 
- Tree testing/card sorting - Medical supplies and prescription - understanding mental model of where these should be? Information architecture questions tree testing (10-10 has base VA.gov tree in a tree test). We will start on VA.gov and see where Veterans go. 
- Usability testing - This will be on production to test some usability questions we have for the current form.
  
Additional resources:
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

### Location
Will be remote on Zoom 

### Research materials
*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

For moderated interviews:
- [Link to conversation guide](url goes here) 

For moderated usability tests: 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)

If recruiting outside of Perigean’s participant database:
- [Link to recruitment flyer](url goes here)
	
## Recruitment	

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers. 

Before writing your recruitment criteria, be sure to review the following resources. 
- [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them? 

Pro tip:
- For remote moderated studies with Veterans and caregivers, we recommend using Perigean to recruit participants. 
- Perigean cannot recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, unmoderated studies, however, these studies require strict recruitment requirements. (Additional guidance forthcoming; reach out to #research-ops in the interim.)

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria
List the total number and type (Veterans, caregivers, etc.) of participants for this study. 

**Primary criteria (must-haves)**
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 

- Have you been prescribed a medical device by a VA Medical Provider in the past 5-10 years?
- LOA Level 3
  

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
* Session length: <1 hour 
* Buffer time between sessions : 30 minutes 
* Maximum Sessions per day: N/A

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. January 25th - February 2nd 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Kristen McConnell/Jasmine Yohannan 
- Research guide writing and task development (usually but not always same as moderator): Kristen McConnell/Jasmine Yohannan 
- Participant recruiting & screening: Perigean 
- Project point of contact: Jasmine Yohannan/Patrick Bateman 	
- Participant(s) for pilot test:
- Accessibility specialist (for sessions where support for assistive technology may be needed):	
- Note-takers:	N/A
- Observers: N/A
**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side 

