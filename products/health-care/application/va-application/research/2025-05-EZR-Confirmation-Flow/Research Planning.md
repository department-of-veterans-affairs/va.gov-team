
# Research Plan for 10-10EZR, Confirmation Flow

**Office of the CTO - Digital Experience, Health Enrollment Team, 10-10EZR**

May 2025

Hieu Vo and Renata Keck

## Background 🏗️
The Health Benefit Update Form (10- 10EZR) is an online version of the paper form, which is used to update personal, insurance, and financial information for Veterans currently enrolled in health care benefits. Most commonly, this includes annual updates, including dependent information or income information for those Veterans who are placed in a Priority Group that requires this.

While [previous research and Veteran mental models](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research/2023-06-Priority%20Group%20and%20Financial%20Disclosure) indicate a preference for single-task updates, such as only updating personal information or insurance information, processing the online form requires a level of paper parity. This balance between business needs and user wants has driven many of the iterations of the form to reduce the cognitive burdens by personalizing the user experience, pre-filling information, and refining content to set the Veteran’s expectation.	

`What problem is your product trying to solve?`

The primary use of the EZR is for Veterans to update their household financial information. In the latest iteration, we pushed for two major updates to reduce the time and cognitive burden spent by Veterans on the form. 

First, we’re placing all three sub-sections (Spouse Information, Dependent Information, and Financial Information) into List&Loop components (also known as multiple response components or array builder). In doing so, we believe Veterans will save time by only confirming their prefilled information before moving on to the next section.

And secondly, we included a Gray Box component that referenced any prior financial information the Veteran may have provided. This will allow them to use the previous year as a reference without prefilling that financial number in the input field, increasing the chance of an error.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

The product is an authenticated form within the My Health section of the VA.gov, but is also referenced by other static, informational pages on VA.gov, outside of the My Health section.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

The 10-10EZR is used to update information after the 10-10EZ enrollment, so Veterans are most likely familiar with similar questions and content. 

[Link to EZR Household Section v2 product initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/Household%20Section%20V2/Household%20Section%20V2%20Initiative%20Brief.md)


### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

`Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.`

> - **Key Result 1:** 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.
> - **Key Result 2:** We have reduced the total error rates in our platforms by 50% compared to Q4 2024, towards a goal less than 1% per endpoint.
> - **Key Result 3:** 100% of VA employees have access to a valuable Generative AI tool to help with their work.
> - **Key Result 4:** Each of our platforms* and tools increase the number of non-OCTO built capabilities or non-OCTO users by 50%. (*excluding mobile)

`Objective 3: OCTO teammates are empowered with the knowledge and resources they need to make sustained impact.`

> - **Key Result 1:** Team members reporting more than a reasonable amount of stress is 5 points lower for each quarter in 2025 than it was in the corresponding quarter in 2024.
> - **Key Result 2:** Every OCTO Portfolio identifies 2 or more strategic decisions per quarter that would benefit the larger OCTO team, and documents them publicly in a shared location.
> - **Key Result 3:** 75% or more team members are confident they have the knowledge needed to make effective decisions.

`Objective 4: OCTO positively influences VA's ability to deliver software products and services faster, safer, and with higher quality.`

> - **Key Result 1:** OCTO has delivered at least 10 impactful artifacts or learning activities (e.g., trainings, guides, COP meetings) focused on improving delivery practices that achieve an NPS score of 30 or higher from the target OIT delivery staff.
> - **Key Result 2:** OCTO has helped resolve/support at least 10 significant engineering issues or products outside our portfolio.
> - **Key Result 3:** Five or more non-OCTO teams have used SPRUCE to deliver high quality software.

</details>

> [!TIP]
> Delete priorities not supported by this research.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

This product fits into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in these areas:

- `Getting Out`
- `Starting Up`
- `Taking Care of Myself`

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals
**Goal 1: Spouse Information:** Test the usability of the spouse information section to see if the Veterans follow the conditional logic, what information can be updated, and whether the information presented is comprehensible.

**Goal 2: Confirmation Flow:** Validate that the confirmation flow (Option B), using the List&Loop component, is more efficient than the existing MVP approach (Option A).

**Goal 3: Gray Box Reference:** Understand how the Veterans expect the previous year’s data to be prefilled, and do they understand the hierarchy of the information.
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

Our findings will indicate if we need to refine the pattern and if we can move forward with updating the rest of the form using this pattern.

---

### Research questions

**Goal 1: Spouse Information:** Test the usability of the spouse information section to see if the Veterans follow the conditional logic, what information can be updated, and whether the information presented is comprehensible.

- Does the user understand that the flow changes based on the choice they put in the marital status?
- Do participants understand that they can change the information that's pre-filled?

**Goal 2: Confirmation Flow:** Validate that the confirmation flow (Option B), using the List&Loop component, is more efficient than the existing MVP approach (Option A).

- How confident does the user feel after completing each flow?
- Do users understand the instructions on how to update the pre-filled information when it is outdated?
- Do users understand their income reporting requirements based on the content? 


**Goal 3: Gray Box Reference:** Understand how the Veterans expect the previous year’s data to be prefilled, and do they understand the hierarchy of the information.

- Do users find referencing last year’s income helpful in completing their updates?
- Does this feature reduce mental effort?
- Do users trust the accuracy of the data?



### Hypothesis

- The participant will understand the Spouse Information and Financial Information shown in the List&Loop’s review page.
- The participant may require additional time to comprehend the gray-referenced box component.
- The participant will prefer the Confirmation Flow (Option B) over the existing (Option A).
  
## Methodology  🛠️

- Flows to be mocked up using Figma.
- The participants will use the think-aloud format
- It is a semi-structured interview where we will direct the participants to complete [3] tasks.
  - Task 1: updating spouse's address.
  - Task 2: Fill out your previous year’s financial information.
  - Task 3: Edit an error in your spouse’s financial information.
- The first section is a usability test of the Spouse Information.
- The second section is a fork for A/B testing..
 - Cohort A will see Option A first [Existing version of the Financial Information, moderator provides last year’s financial information]
 - Cohort B will see Option B first [Confirmation Flow version with the gray box reference, moderator does not provide last year’s financial information]	

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

- [x] **Remote, moderated via Zoom**
- [ ] **In-person**


## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated usability tests:** 
	
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2025-05-EZR-Confirmation-Flow/Conversation-guide.md)
	
## Recruitment 🎯	

### Recruitment approach
Our intended audience for this research are Veterans and we will be using and leveraging Perigean to recruit participants.

#### Veterans: Requesting 10, need 6 to complete

### Recruitment criteria

> [!NOTE]
> - **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
> - Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

> [!TIP]
> - The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
> - Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria.
> - Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/2020-12.research-plan1.md)

**List the total number and type (Veterans, caregivers, etc.) of participants for this study:**

- `Veterans:` **[10]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[10]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- All must be currently enrolled in VA health care benefits
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

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]**

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **[Enter time length]**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **[Enter buffer time]**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **[Enter NUM per day]**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
>
> **Place time slots between `hash marks` when in edit mode.**

- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `Add more slots as needed`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Hieu Vo, Renata Keck**	
- `Research guide writing and task development (usually but not always same as moderator):` **Hieu Vo**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Moderators**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **N/A**	
- `Note-takers:` **10-10 Team** ***or*** **Perigean**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`


## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
