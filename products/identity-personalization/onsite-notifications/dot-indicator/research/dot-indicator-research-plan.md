# Research Plan for Authenticated Experience - Dot Indicator, October 2023

## Background
The Authenticated Experience and MHV landing page teams recently shared a common need for an indicator on our pages for unread or unseen things. We realized that both authenticated landing pages could benefit from a badge-like component that is either a dot or a number to indicate this next to certain links. [The Authenticated Experience team conducted an experiment](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator#project-outline-create-dot-indicator) with a red dot next to our "Go to your inbox" link to indicate unread messages in September 2023 and saw a [47% increase in clicks](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator#measuring-success) as compared to our previous unread messages link. 

With the initial experiment deemed a success, we are looking to potentially expand upon the dot indicator, identify when it's appropriate to use different types of badges or indicators, and learn more about the accessibility implications of this indicator.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/dot-indicator). 

### OCTO Priorities 

Especially since My VA is now the next destination when a Veteran logs into VA.gov, it is critical that we present the most relevant updates as quickly and clearly as possible on the page. Accomplishing this through the use of indicators, if successful, would fulfill [OCTO prioritie](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md)s of solidifying the VA.gov platform and enhancing Veterans’ personalized online experiences.

### Veteran Journey
Since Veterans can apply for and manage their benefits any time after getting out of the military, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

## Research Goals and Questions	
1. Determine the effectiveness of dot and badge indicators to draw attention to important updates and when it's appropriate to use each kind of indicator.
 - Where on VA.gov do users expect to see these types of notifications?
 - What do users think a dot means in different use cases? What about a badge?
 - How do users expect a dot or a badge indicator to disappear?
 - Are there instances where a dot or a badge introduces confusion rather than being useful?
2. Test with assistive tech users and colorblind participants in order to determine the accessibility implications of the dot or badge indicator.
 - What aria labels would give a screen reader user as close to the same experience as a sighted user? When should aria labels be surfaced in the order of the page?
 - How do screen reader users experience dot and badge indicators as notifications on other websites? What's an ideal experience and what's not ideal?
 - Does colorblindness prevent users from being able to see and interpret a red dot or badge indicator? What colors are most accessible for them to interpret notifications on other websites and apps?

### Outcome
We will be sharing our research findings with other VFS teams who are interested in an indicator, such as the cartography team. From there we will decide (collaboratively) if it makes sense to proceed with experimental design to add an indicator to the VA.gov design system.

### Hypothesis
[Past research](expect a mix of links and widgets to complete tasks on their homepage, and want clear labels to understand next steps) for My VA tells us that users want to see timely personalized updates upon logging into VA.gov. They expect a mix of links and widgets to complete tasks on their homepage, and want clear labels to understand next steps.

We hypothesize that:
- There will be a need for more than one type of indicator, i.e. both a badge with a count and a dot, as we've seen in other popular design systems, such as [Material Design](https://m3.material.io/components/badges/overview).
	- We expect that it won't always make sense to use a count, and conversely, it won't always make sense to use a badge. We expect that for notifications such as the number of unread messages, a count will be most useful, whereas a notification that past appointments may be eligible for travel reimbursement may need a dot to indicate that a user may want to review their past appointments for this benefit.
- We expect that we may need to use a dark red color for the indicator to be useful for colorblind and low vision users, but that they will still be able to see and interpret the indicators.
- We expect that the aria labels we have implemented for dot and badge indicators will deliver as close to the same experience as possible for screen reader users as a sighted user would have.
	- We expect that there may be interesting findings for when screen reader users would like to be alerted to indicators. We think there may be a better way to announce indicators than waiting until a user navigates to the specific link where the indicator is.

## Methodology	
We will conduct one-on-one remote usability sessions via Zoom for this study. We need to test with assistive tech users in code but we likely cannot use real user accounts because it would be difficult to find users who meet the specific criteria and won't have dismissed indicators already. Therefore, we plan to use a specific <b>staging account</b> and have users log into it for each session, and for security purposes, we will <b>change the login password after each session</b>. More info about considerations for testing in staging can be found in this [Slack thread](https://dsva.slack.com/archives/C0216PL32HJ/p1696450953956489).

### Research materials
- [Link to conversation guide](TK) 
	
## Recruitment	


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
