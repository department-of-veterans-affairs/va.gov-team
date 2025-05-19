
# Research Plan for IVC, 10-10D/10-7959c merge Usability Study

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>

Applicants seeking CHAMPVA benefits must complete and submit VA Form 10-10d for benefits enrollment and VA Form 10-7959c for Other Health Insurance (OHI) certification separately. To enhance user experience and streamline operations, we propose merging these two forms into a single, cohesive digital application process.​

Applicants are required to submit VA Form 10-10d and VA Form 10-7959c separately, leading to potential redundancy and increased processing times. This dual-submission process can be burdensome for users and may delay the overall application process. Our goal is to merge the submission processes to reduce the load on both the time it takes a veteran to submit, and the time it takes the approval team to process and approve applications.

* How might we simplify the CHAMPVA application and OHI supporting docs process to allow applicants to submit both benefits enrollment and OHI certification seamlessly in a single digital experience?

* How can we reduce processing times by merging the CHAMPVA and OHI forms?
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

The CHAMPVA Benefits application and OHI forms are available both as authenticated and unauthenticated forms.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

We have already successfully launched CHAMPVA Benefits applications and OHI forms. This process will merge them together so veterans can complete both in the same experience.

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10D-OHI-Merge-Product-Outline.md)**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Getting Out`
- `Starting Up`
- `Putting Down Roots`
- `Retiring`
- `Aging`

</details>

## Research Goals 🥅	

### Goals

1. Understand whether the placement of the 10-7959c within the 10-10D application for CHAMPVA benefits works better, as it relates to form submission and time on task.

2. Understand if the placement of the 10-7959c within the 10-10D form works better for users, specifically as it relates to providing all necessary and required supporting evidence.

3. Get user feedback on the [V3 file upload component](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input--docs#upload-status).
  
### Outcome
Findings and recommendations from this research will inform the usability and accessibility of the 10-10D/OHI merged MVP for authenticated and unauthenticated users. We will identify areas for improvement based on severity and potential impact to successful forms submission, building out MVP and post-MVP improvements the team can make. 

Some recommendations will also inform prioritization of the backlog for the 10-10D and OHI standalone forms, as well as dictate how we might merge other forms, such as the 10-7959A and 10-7959c, at a later date.

In addition, user feedback about the v3 file upload component will be shared back to Platform, to help inform the adoption of the component on other VFS teams. 

---

### Research questions

**Goal 1: Understand whether the placement of the 10-7959c within the 10-10D application for CHAMPVA benefits works better, as it relates to form submission and time on task.**
1. How well are users able to orient into and out of the ancillary 10-7959c within the 10-10D?
2. Does content on transitional pages between the 10-10D and 10-7959c provide sufficient context about the purpose of the 10-7959c?
3. Is the slim header/footer sufficient context for users knowing where they are within the 10-10D or 10-7959c?

**Goal 2: Understand if the placement of the 10-7959c within the 10-10D form works better for users, specifically as it relates to providing all necessary and required supporting evidence.**
1. Will users be confused by what supporting evidence is required for the 10-10D and 10-7959c?
2. Will users prefer to upload documents mid-flow, at the end of list&loops for a subsection of the form, or all together at the end of the form (or form-within-a-form)?
3. Are the examples and content around what evidence to prepare and provide on the forms clear?

**Goal 3: Get user feedback on the [V3 file upload component](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input--docs#upload-status).**
1. Does the v3 file upload component help users to successfully upload front/back views of their Medicare and Private Health Insurance cards?
2. Do users want any additional confirmation around uploading files?
3. Does the user understand how to fix an upload when an error appears?

### Hypotheses

---

**Goal 1: Understand whether the placement of the 10-7959c within the 10-10D application for CHAMPVA benefits works better, as it relates to form submission and time on task.**
* When filling out the merged 10-10D/10-7959c, users will have faster completion times when compared to cumulative completion times from the standalone 10-10D and 10-7959c.
* Users will be able to easily orient themselves around the transition between the 10-10D and 10-7959c.
* Users will prefer to complete the 10-7959c as part of their CHAMPVA application, as opposed to a separate, standalone form.

**Goal 2: Understand if the placement of the 10-7959c within the 10-10D form works better for users, specifically as it relates to providing all necessary and required supporting evidence.**
* New instructions, examples, and directions for uploading necessary and required supporting evidence will provide relevant assistance as the user navigates the forms.
* Veterans will understand that there is separate upload sections for applicant information and OHI, and avoid duplicate uploads/entries. 

**Goal 3: Get user feedback on the [V3 file upload component](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input--docs#upload-status).**
* The v3 file upload component will provide visual validation of complex file uploads, like front/back of Medicare and Private Health Insurance cards
* The v3 component will help users identify if they have provided all necessary evidence before submitting. 

---
  
## Methodology  🛠️
We will conduct remote moderated usability testing to observe research participants filling out the merged online forms. The participants will be **AUTH? UNAUTH?**. We will be testing in the Staging environment.

The methodology will be a mixed-methods approach, combining a usability study with a post-task exit interview. We anticipate 45-60min of usability testing, utilizing the think-aloud protocol, to identify significant issues with the merged digital form experience. Exit interview questions will include a Single Ease Question (SEQ) to triangulate task completion times and qualitative user feedback about the usability and accessibility of the merged forms. 

Sessions will be conducted over Zoom with transcripts.

### Location
Remote research, over Zoom.

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability/Conversation-guide.md)
- [Link to prototype](url goes here)
	
## Recruitment 🎯	
> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
> [!NOTE]
> **does the team want to recruit existing CHAMPVA beneficiaries, or those who may qualify and haven't applied yet?**
> **draft** Our intended audience for this study is Veterans and Dependent spouses and children who have applied for benefits through the CHAMPVA program. We will be utilizing Perigean to assist us with recruiting our participants. WE will use the lean maximum variation inclusive recruitment strategy outlined by OCTO. 

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


- `Veterans:` **[n]**
- `Caregivers:` **[n]**
- `Dependents:` **[n]**
- `Total:` **[n]**
- `Ideal completed sessions:` **[n]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `[Place primary criteria here between hash marks when in edit mode]`
- `primary criteria`
- `primary criteria`
- **`Add more criteria as needed`**

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `[Place secondary criteria here between hash marks when in edit mode]`
- `secondary criteria`
- `secondary criteria`
- **`Add more criteria as needed`**

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Optional Kick-off Call with Perigean
We would like a kick-off call with Perigean to discuss recruitment criteria.

- `Suggested dates and times:` May 27-30, 9am-6pm ET (the team can be flexible to accommodate Perigean's schedule)

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` Michael Skinner
- `Date and time of pilot session:` May 27 or 28 

### Research sessions
- `Planned dates of research:` **June 4-17**

### Length of sessions
- `Session length:` Up to 90 minutes
  
- `Buffer time between sessions:` 30-60 minutes
  
- `Maximum Sessions per day:` 3 per day

### Availability
` Monday - Friday 9am-12pm ET and 1pm-6pm ET `

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
>
> **Place time slots between `hash marks` when in edit mode.**
> - `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
> - `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
> - `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
> - `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
> - `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`

## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` Renata Keck & [SOMEONE ELSE]	
- `Research guide writing and task development:` Renata Keck	
- `Participant recruiting & screening:`	Perigean	
- `Project point of contact:` Renata Keck & [SOMEONE ELSE] 	
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[Enter full name]**	
- `Note-takers:` Renata Keck, Jamie Fiore, and Rachel Pope
- `Observers:` Will need to sign up so we can limit the number per session. Renata will add them to the session invites received from Perigean.

## Approvals ✅
- `Reviewed by Amanda Klausmeier [OCTO Design Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
