# Research Plan for Form 526 Conditions List (Contention Classification Team, 2023-10)

## Background
The VA receives many disability claims where the claimed conditions (“contentions”) are not described with sufficient clarity. In these situations, claims processors often take additional time reviewing records or calling Veterans to get the clarity they need. If we can improve the quality of contention descriptions, we believe we can eliminate some of these extra efforts and reduce overall processing time. To improve contention descriptions, we are exploring the Veteran experience naming/entering contentions on the digital 21-526EZ form when they submit a disability claim. 

On the form, we have observed inefficiencies with the list of medical conditions that is used in the component where Veterans select or enter a condition to claim (see below for a description of the “autosuggest component”). In this list, many conditions are duplicated, many are vague terms, and many are not actually conditions at all, among other usability problems. We want to update this list (“suggested conditions list”) to make it easier for Veterans to find conditions and to include only conditions that are clear and actionable for claims processors.

For this first redesign, we aim to update the suggested conditions list, while minimizing the impact on the current functionality of the autosuggest component that uses the list. In the future, we anticipate more extensive changes that may include updating the autosuggest component, adding new questions and screens that relate to contention naming, improving in-context copy and guidance, and considering altogether new ways to gather contention information.

**Autosuggest component**: Name of the component in the 526 flow where Veterans can name a medical condition to add to their claim. It functions similarly to a combo-box whereby the user can either select a medical condition from a fixed list of options or enter free text to describe their condition.

[Link to product brief](url goes here).

### OCTO Priorities 

This research supports [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) to enhance Veterans’ personalized online experience and to fast-track disability claims (see #6 and #7 from OCTO 2023 priorities).

### Veteran Journey
This work fits into the “Taking care of myself” stage of the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf), and within that stage, the “Managing primary care and chronic health issues”phase. 
Where does your product fit into the ?

## Research Goals	
* Goal 1: Learn how Veterans think and talk about what medical conditions to claim.
* Goal 2: Assess whether a type-ahead field with auto-suggestions is a usable/desirable way for Veterans to name conditions they want to claim.
* Goal 3: Evaluate the revised conditions list. 

### Outcome
The purpose of this research is both evaluative and generative. We want to evaluate the concept of an auto-suggest field for naming a condition and our first iteration on the conditions list. We will use what we learn to make improvements to the conditions list prior to release. 

More broadly, we want to understand how Veterans think and talk about what medical conditions to claim.This understanding will inform future, more wide-ranging design ideas for improving the Veteran experience naming a contention.

### Research questions
Goal 1: Learn how Veterans think and talk about what medical conditions to claim.
* How do Veterans decide to file a claim and for what medical conditions? How do they describe their medical condition?
* How familiar are Veterans with commonly rated disabilities or with resources like the rating schedule?
* How do they prepare to file a claim and what resources do they use, as they prepare? What people or organizations do they seek assistance from? 

Goal 2: Assess whether a type-ahead field with auto-suggestions is a usable/desirable way for Veterans to name conditions they want to claim.
* What are Veterans thinking about when they come to the condition field where they are instructed to “Please tell us the new conditions you want to claim”? What does it mean to them?
* What do the auto-suggestions represent to the Veteran? What are they a list of?
* Do Veterans understand that they have the option to type in their condition? Did they read and understand the introductory copy?

Goal 3: Evaluate the revised conditions list.
* Are Veterans able to find their conditions from the auto-suggestions? How do they go about evaluating the auto-suggestions and choosing from multiple options?
* (if a Veteran selects from the auto-suggestions), do they edit the content or just leave it as it is? Do they feel like they should provide additional information within the field?
* (If a Veteran understands that free text is an option), how do they decide when to choose from the auto-suggestions and when to type in their condition?
* If a Veteran can’t find their condition, how does this make them feel?
* Does selecting from the list give Veterans confidence in what they submitted? Do they think the VA has what it needs to understand what they are claiming?

### Hypothesis
Our hypothesis is that the way we write terms for the suggested conditions list can have an impact on findability for Veterans and actionability for claims processors. Some of our strategies include the following:
* Use common medical terminology rather than medical jargon, and incorporate plain language alternatives (e.g., “tinnitus (ringing in the ears)”)
* Exclude terms that are overly broad or otherwise unhelpful for claims processor purposes
* Exclude terms that do not represent potentially ratable conditions (e.g., “aging”). This could be misleading to Veterans and contribute to the creation of contentions that have a low likelihood of resulting in an award. 
* Make terms mutually exclusive, where possible. We do not want Veterans to wonder whether they should select one condition or another. 
* Use consistent formatting

What we are using to help us:
* Frequency data on what terms Veterans select from the current list
* Data on free-text contentions
* Input from claims processors and resources used by claims processors (including the rating schedule from the CFR)

What we have learned from prior research:
* Veterans face challenges in the disability claims process, including insufficient, confusing or misleading guidance and a perceived lack of transparency about the process. 
* Veterans come to the process having done a range of pre-work and having benefited from varying levels of outside assistance.  
* Some Veterans do not understand that typing in a condition is an option (in the existing autosuggest component).

What Veterans might think about the type ahead field concept
* We think Veterans with the most common conditions will be able to find their condition. 
* We think that Veterans will expect that auto-suggested conditions meet the needs of the VA.
* We think the amount of prep and type of support Veterans receive in filing a claim will have implications for how usable the concept is for them.

## Methodology	
We will conduct a concept test, followed by a semi-structured interview. For the concept test, we will ask Veterans to enter conditions based on their actual conditions. We will screen for Veterans who have either filed in the past or who are planning to file for disability in the future. We will have a mock scenario prepared as a back-up, in cases where the Veteran does not have conditions in mind or is uncomfortable using their actual conditions. 

We will use a Codepen prototype for the concept test. The prototype will be available on mobile or desktop.The reason for using Codepen is that it allows us to test the type ahead concept that leverages a source list of 200+ items. We cannot feasibly replicate this interaction in Sketch. 

### Location
Session will be conducted remotely during zoom. 

### Research materials
* [Conversation Guide] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/conversation-guide.md)
* [Prototype] - The Codepen prototype is in draft form. 
	
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
