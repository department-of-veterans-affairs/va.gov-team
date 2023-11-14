# Research Plan for UAT of the new Health Enrollment Update Form (10-10EZR), November 2023

## Background
The Health Benefits Update Form (10-10EZR) is a new online version of a currently paper-only form. It's used to update personal, insurance, or financial information for Veterans currently enrolled in health care benefits. Most commonly, this looks like adding or removing a dependent or updating income information. Before deciding to build this form, the team ran a generative research study, digging into one of the most common use cases for making an update to health care information (changing financial info). We learned in this study that most Veterans associated financial information with themselves and would expect to make updates to that information in either their VA profile or the MyHealth hub. While it would be preferable to only collect the information that has changed, per the Paperwork Reduction Act (PRA), we will collect all information together in one form submission. That means the MVP of the digital form will not differ much from the paper form, however, we plan to iterate on this approach in future versions.
We'll usability test the MVP version of the new digital form to ensure it meets the needs of VA.gov users. The form contains 4 sections, and for MVP, must be completed and submitted in its entirety to be processed.
The four main sections are:
- Veteran information
- Household financial information
- Insurance information
- Review

This MVP effort will go through the collaboration cycle and this study will happen post the midpoint review. 

### What problem is your product trying to solve?
Veterans who want to provide updates to their personal information for increasing or maintaining their health benefits are burdened with the manual processes of calling VA, mailing in a paper form and/or visiting a facility. This is driven by the lack of an online experience and pathway to provide these updates at a more convenient time and place for the Veteran. For Veterans who must provide these updates annually, the burden is multiplied. More information available in the [product outline - 10-10EZR Health Benefits Update form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/EZ(R)%20Update%20Capabilities/10-10EZR%20Product%20Brief%20(standalone%20form).md).

### Where is your product situated on VA.gov?
The product will live in the My Health section of VA.gov, but also be referenced by other static, informational pages on VA.gov, outside of the My Health section.

### What is Veterans’ familiarity with this tool?
This is a new product and form, although the first version of this form will be very similar to the 10-10EZ.

### OCTO Priorities 

The [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) that this research supports are:

Increase 
- Completion rate of online transactions
- Usage of digital, self-service tools
- Percent of applications submitted online (vs. paper)
- Enhance Veterans’ personalized online experience
- Fast-track disability claims, starting with PACT Act claims


### Veteran Journey
This product fits into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) during the areas:

- Getting out
- Starting up
- Taking care of myself

## Research Goals	
1. **Wayfinding** - Determine ease of wayfinding to the new 10-10EZR form. Test the path to entering the new 10-10EZR form to see if Veterans understand how to update their information
2. **Intro page content** - Evaluate effectiveness of intro page content to see: is it clear to Veterans which form to fill out, the 10-10EZ vs. 10-10EZR?
3. **Small usability tweaks** - Capture any issues through UAT of the form for any small tweaks needed before launch. Determine if Veterans are able to successfully fill out the form.

### Outcome
These learnings will allow us to evaluate for additional gaps during the rollout of new form to production. The findings and recommendations will be categorized as to if there are any blockers and what can be addressed in future iterations.

### Research questions
#### Goal 1: **Wayfinding** - Determine ease of wayfinding to the new 10-10EZR form. Test the path to entering the new 10-10EZR form to see if Veterans understand how to update their information

- Are participants able to find their way to the 10-10EZR?
- Is the wayfinding, such as the breadcrumbs and the form placement, clear to participants?

#### Goal 2: **Intro page content** - Evaluate effectiveness of intro page content to see: is it clear to Veterans which form to fill out, the 10-10EZ vs. 10-10EZR?

- Do participants understand that they need to fill out a form to update their information?
- Is any of the content unclear or does it confuse participants, rather than make them more comfortable with starting the form?
- Is there any reason why participants would not fill out the form?


#### Goal 3: **Small usability tweaks** - Capture any issues through UAT of the form for any small tweaks needed before launch. Determine if Veterans are able to successfully fill out the form.

- How do participants move through the form? Are there any blockers or points where they get stuck?
- Does any of the form content stand out or distract participants?
- Are participants able to complete the form without major issue? 

### Hypothesis
- Participants will understand that some information is prefilled and will be able to update and submit the information.
- Participants may be frustrated if they want to only update one section of the form vs. multiple sections because they will have to go through the form linearly.
- Participants will understand they need to update information.
- Participants will know what they need to do based on the intro page on the form.

## Methodology	
- Usability testing - appropriate for evaluative research
- User acceptance testing (UAT) - required before product release

### Location
- Remote, moderated via Zoom.

### Research materials
For moderated usability tests: 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2023-11-EZR%20MVP%20UAT/conversation-guide.md)
- [Link to production form intro page](https://va.gov/my-health/update-benefits-information-form-10-10ezr) - will test in production behind feature flag via participants email
- [Link to recruitment ticket]() TBD

## Recruitment	

### Recruitment approach
Our intended audience for this research are Veterans and we will be using and leveraging Perigean to recruit participants.

**Veterans: Requesting 10 / Need to complete 5**

### Recruitment criteria
List the total number and type (Veterans, caregivers, etc.) of participants for this study. 

**Primary criteria (must-haves)**
- All must be currently enrolled in VA health care benefits
- At least 2 are using a mobile device during the session
- Diverse mix of age ranges, no more than 2 per age group
- At least 2 participants with Cognitive disabilities
- At least 2 participants who are Black
- At least 2 participants who are Hispanic 


For all:
1. Are you currently enrolled in VA health care benefits?
   	- Yes *(Qualify)*
   	- No *(Disqualify)*


For recruiting 2 mobile users:
1.  Are you able to join the Zoom session from a smart phone such as a Samsung Galaxy or Apple iPhone? Any kind of smart phone will work, as long as it connects to the internet.
    - Yes *(Qualify)*
    - No *(Disqualify)*

For recruiting 2 users with cognitive disabilities:
1. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
   	- Yes *(Qualify)*
   	- No *(Disqualify)*


## Timeline
November 2023

* Kickoff call requested
* Preferred date/time: November 6, 2023 2pm ET / 11am PT 

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: Steven Straily
* Date and time of pilot session: November 8, 2023 at 4pm ET / 1pm PT 

### Research sessions
* Planned dates of research: **November 13 - November 22**

### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 1 hour
* Maximum Sessions per day: 2

### Availability

| **Team Availability** | **Time (ET)** 	|
| --------------------- | --------------------- |
| November 13, 2023  	|  11am - 6pm ET 	|
| November 14, 2023  	|  12am - 6pm ET 	|
| November 15, 2023  	|  11am - 6pm ET 	|
| November 16, 2023   	|  10am - 6pm ET 	|
| November 17, 2023   	|  12am - 4pm ET 	|
| November 20, 2023   	|  10am - 3pm ET 	|
| November 21, 2023   	|  11am - 6pm ET 	|
| November 22, 2023  	|  10am - 6pm ET 	|



## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Katelyn Caillouet, Jessica Stump, Hieu Vo	
- Research guide writing and task development: Katelyn Caillouet (katelyn.caillouet@agile6.com)
- Participant recruiting & screening: Perigean	
- Project point of contact: Moderators
- Note-takers: Perigean, 10-10 Team
- Participant(s) for pilot test: Steven Straily
- Accessibility specialist (for sessions where support for assistive technology may be needed):	NA
- Observers: Kristen McConnell (kristen.mcconnell@va.gov)

  ## Approvals
  - Kristen McConnell (kristen.mcconnell@va.gov) on November 1, 2023
