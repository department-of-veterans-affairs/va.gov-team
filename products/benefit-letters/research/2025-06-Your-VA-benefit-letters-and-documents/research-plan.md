# [DRAFT] Research Plan for Your VA benefit letters and documents research study

## Background 🏗️

`What problem is your product trying to solve?`

The "Your VA letters and documents" page enables Veteran access to letters needed to verify benefits eligibility and status. However, the page currently prioritizes editing the Veteran’s mailing address, and Veterans cannot view, download, or print their letters until they click the "View Letters" button at the bottom. This extra step creates unnecessary friction, making it harder for Veterans to quickly and efficiently download their benefit-related letters.

In addition, by making letter access dependent on a required mailing address, the current flow risks excluding Veterans who don't have a valid mailing address in their VA.gov profile.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

This work is situated within the authenticated experience.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

Iteration of the current 'Your VA benefit letters and documents' page

`Product Brief`

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/benefit-letters/2025-06-design-intent.md)

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

- **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

This work improves access to the benefit letters and other necessary service documents that Veterans need to verify their eligibility for other VA benefits.

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

- **Goal 1:** Verify that the new design removes barriers for Veterans trying to find, understand, and use the benefit letters 
- **Goal 2:** Understand what motivates Veterans to get their benefit letters
- **Goal 3:** Understand how the mailing address requirement affects different Veteran populations
  
### Outcome

We'll use the findings from this research to improve Veterans' ability to access their benefit letters, with two main success criteria:
1. Identify possible mailing address barriers for Veterans
2. Enhance the customizable Benefit Summary and Service Verification Letter interface based on Veterans' real-world needs and preferences

Success will be measured through improved task completion rates, reduced time-on-task, and qualitative feedback demonstrating that Veterans of varying technical abilities can efficiently locate, customize, and download their benefit letters without confusion.

### Research questions

**Goal 1: Verify that the new design removes barriers for Veterans trying to find, understand, and use the benefit letters**

1. Will Veterans feel they need to edit their address before downloading a letter?
2. Do Veterans expand the accordions when looking for their letters?
3. What do Veterans expect when they click on a link to a benefits letter?
4. What challenges do Veterans encounter when generating a customized Benefit Summary and Service Verification Letter?

**Goal 2: Understand why Veterans want benefit letters**

1. Which letters do Veterans find valuable?
2. Do Veterans understand the different types of letters and why they are needed before they come to the page?
3. Do Veterans understand why they need to include or exclude certain information from their Benefit Summary and Service Verification Letter?
4. What do Veterans do if they don't see the letter they're looking for?

**Goal 3: Understand the impact of the mailing address requirement in downloading and viewing benefit letters**

1. What problems can result from making letter access dependent on a required mailing address?
2. What happens if a Veteran doesn’t currently have a mailing address?
3. Are we doing a good job communicating that this mailing address is the "latest and greatest" that appears on the Veteran's VA.gov profile?
4. Do Veterans expect their customized Benefit Summary and Service Verification Letter to include their current mailing address, too?

### Hypotheses

1. Veterans are more likely to find the letter type they need when presented with clear, concise categorization and descriptions up front rather than hidden on a secondary screen.
2. Veterans who encounter the redesigned single-step page will complete the View Letters step at a rate higher than the current design. (current: 60%)
3. Making the mailing address change to the VA.gov profile optional and the reasoning clear will increase download rates (current: 55%).
  
## Methodology  🛠️

We will conduct remote, moderated, semi-structured interviews and usability testing with the “Your VA benefit letters and documents” screens on the fully functioning production version. These sessions should be 60 minutes for non-AT users and 90 minutes for AT users. The screens will be a new, fully functional version, including the letter downloads, edit mailing address, and verify mailing address screens.

- Semi-structured interview about letter usage and experiences
- Usability testing: Task-based usability testing on desktop and mobile devices

### Location
Where will you be holding the research sessions?

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide](url goes here)
- [Link to “Your VA benefit letters and documents” page on production](url goes here)
	
## Recruitment 🎯	

### Recruitment approach

Our intended audience are Veterans. We will partner with Perigean to recruit Veterans who use assistive technology (AT) and Veterans who don't use AT. We request a 30-minute kickoff meeting with Perigean.

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
- Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria.
- Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/2020-12.research-plan1.md)

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*

- `Veterans:` **12**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **12**
- `Ideal completed sessions:` **12**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- 6 are AT users
  - 3 must use a screen reader every time they access the internet
  - At least one uses a screen magnifier every time they access the internet
  - At least one uses one of the following voice command/speech recognition apps every time they access the internet
    - Dragon NaturallySpeaking
    - Talon
    - Voice Control
    - Windows Speech Recognition
    - Windows Voice Access
    - Android Voice Access

	
- 6 are non-AT users
  - At least 3 have a computer and are willing to use it for the session
  - At least 3 have a smartphone and are willing to use it for the session
- ALL
  - Must be Veterans and have experience with VA.gov
  - Have received a Benefit Summary and Service Verification Letter
  - Have Zoom downloaded to their device prior to the session and know how to share their screen 
  - Are willing to share over Zoom a web browser window 
  - Have a working microphone on their device
 
  

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- 6 aged 55 years or older
- 6 mobile web users
- 4 Hispanic, Black, Biracial, Asian, or Native
- 3 rural
- 3 women


## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**3 pilot sessions are required to test with screen reader, screen magnifier, and voice command software.

> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **07/29-08/06**

### Length of sessions
- `Session length:` 60 minutes for non-AT users / 90 minutes for AT users
  
- `Buffer time between sessions:` 45 min
  
- `Maximum Sessions per day:` 3

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

- `7/29, Tue, 10:00AM-7:00PM EST`
- `7/30, Wed, 10:00AM-7:00PM EST`
- `7/31, Thu, 10:00AM-7:00PM EST`
- `8/01, Fri, 10:00AM-7:00PM EST`
- `8/04, Mon, 10:00AM-7:00PM EST`
- `8/05, Tue, 10:00AM-7:00PM EST`
- `8/06, Wed, 10:00AM-7:00PM EST`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Shawn Collins**	
- `Research guide writing and task development (usually but not always same as moderator):` **Shawn Collins & Julie Strothman**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Shawn Collins**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **ADE Team**	
- `Note-takers:` **Perigean**	
- `Observers: We will have a sign-up so we can limit the number of observers per session, and Shawn will add them to the invites that he receives from Perigean.

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
