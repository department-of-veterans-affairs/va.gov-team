
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

1. Understand whether the placement of the 10-7959c within the 10-10D application for CHAMPVA benefits works better than the standalone forms, as it relates to form submission and time on task.

2. Understand if the placement of the 10-7959c within the 10-10D form works better for users, specifically as it relates to providing all necessary and required supporting evidence.

3. Get user feedback on the [V3 file upload component](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input--docs#upload-status).
  
### Outcome
Findings and recommendations from this research will inform the usability and accessibility of the 10-10D/OHI merged MVP for authenticated and unauthenticated users. We will identify areas for improvement based on severity and potential impact to successful forms submission, building out MVP and post-MVP improvements the team can make. 

Some recommendations will also inform prioritization of the backlog for the 10-10D and OHI standalone forms, as well as dictate how we might merge other forms, such as the 10-7959A and 10-7959c, at a later date.

In addition, user feedback about the v3 file upload component will be shared back to Platform, to help inform the adoption of the component on other VFS teams. 

---

### Research questions

**Goal 1: Understand whether the placement of the 10-7959c within the 10-10D application for CHAMPVA benefits works better than the standalone forms, as it relates to form submission and time on task.**
1. How well are users able to orient into and out of the ancillary 10-7959c within the 10-10D?
2. Does content on transitional pages between the 10-10D and 10-7959c provide sufficient context about the purpose of the 10-7959c?
3. Is the slim header/footer sufficient context for users knowing where they are within the 10-10D or 10-7959c?

**Goal 2: Understand if the placement of the 10-7959c within the 10-10D form works better for users, specifically as it relates to providing all necessary and required supporting evidence.**
1. Will users be confused by what supporting evidence is required for the 10-10D and 10-7959c?
2. Will users prefer to upload documents mid-flow?
3. Are the examples and content around what evidence to prepare and provide on the forms clear?

**Goal 3: Get user feedback on the [V3 file upload component](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input--docs#upload-status).**
1. Does the v3 file upload component help users to successfully upload front/back views of their Medicare and Private Health Insurance cards?
2. Do users want any additional confirmation around uploading files?

### Hypotheses

---

**Goal 1: Understand whether the placement of the 10-7959c within the 10-10D application for CHAMPVA benefits works better than the standalone forms, as it relates to form submission and time on task.**
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
We will conduct remote moderated usability testing to observe research participants filling out the merged online forms. We will be testing in the Staging environment.

The methodology will be a mixed-methods approach, combining a usability study with a post-task exit interview. We anticipate 45-60min of usability testing, utilizing the think-aloud protocol, to identify significant issues with the merged digital form experience. Exit interview questions will include a Single Ease Question (SEQ) to triangulate task completion times and qualitative user feedback about the usability and accessibility of the merged forms. 

Sessions will be conducted over Zoom with transcripts.

### Location
Remote research, over Zoom.

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability/Conversation-guide.md)
- [Link to prototype](https://staging.va.gov/ivc-champva/10-10d-extended/)
	
## Recruitment 🎯	

### Recruitment approach
We would like Perigean to recruit assistive technology (AT) and non-AT users.

Our intended audience for this study is Veterans with high disability ratings and their dependent spouses and children, who may or may not be currently enrolled in the CHAMPVA program. We will split this study into two cohorts:

* **Cohort 1 (n = 12 minimum):** Veterans with a 100% service connected disability rating with spouse and/or dependent children who may or may not be enrolled in CHAMPVA benefits
  
* **Cohort 2 (n = 3 minimum):** Spouses and dependent children of Veterans with a 100% service connected disability rating, who may or may not be enrolled in CHAMPVA benefits

### Recruitment criteria
**All participants must:**
- Be on a computer or mobile device
- During the session, be willing to share a web browser window on their device
- Have a working microphone
- Have Zoom downloaded to their device prior to the session and know how to share their screen

**Cohort 1 must:**
- Be a Veteran with a service-connected disability rating of 100%
- Have a spouse and/or dependent children
- Spouse/children do 
- Recruit 4 assistive tech users - **at least 2 AT user sessions** are needed for this study to be complete

**Screener Cohort 1 (Veterans with 100% service connected disability whose spouse/dependents may or may not be enrolled in CHAMPVA benefits):**
1. Do you get a VA disability compensation for a service-connected disability rating of 100%?
_Response otions: YES or NO_
* Yes [jump to next question]
* No [disqualify]

2. Do you have a spouse or dependent children?
_Response options: YES or NO_
* Yes [jump to next question]
* No [disqualify]

3. Is your spouse and/or dependents enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
* Yes (Qualifies for study, RECORD as enrolled in CHAMPVA)
* No (Qualifies for study, RECORD as not enrolled in CHAMPVA)
* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)

4. Do you need a screen reader or screen magnifier **every time** you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies
_Response options: YES or NO_
* Yes [Recruit **at least 2**, proceed to next question]
* No [Recruit **at least 10**, end of screener questions]

5. [If yes to Q4] Please list the name of the screen reader or screen magnifier technology you will use during the session
_Response: free text field_ (If user mentions a browser extension such as Real Aloud, this disqualifies them from being recruited as a screen reader user. 

6. Are you willing to join the zoom session using this assistive technology?
_Response options: YES or NO_
* Yes [Recruit **at least 2**, proceed to next question]
* No [Disqualified]
  
**Cohort 2 must:**
- Identify as a spouse or dependent child of a Veteran with a service-connected disability rating of 100%
- We'd like to hear from both spouses/children who are currently enrolled in Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA) as well as those who are **not** currently enrolled

**Screener Cohort 2 (Spouses and dependent children of Veterans with a 100% service connected disability):**
1. Please select the answer that best fits you:
_Response options: Spouse of a Veteran, Dependent child of a Veteran (Answering either would qualify the participant)_

2. Does the Veteran you are related to get a VA disability compensation for a service-connected disability rating of 100%?
_Response options: YES, NO (Answering YES would qualify the participant)_

3. Are you enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE (Mark answer, any response qualifies for study)_

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **10**
- `Spouses and dependent chilren:` **3-5**
- `AT users (can be: Veterans and spouses/dependent children:` **2-5**
- `Total:` **20**
- `Ideal completed sessions:` **15**

### Primary criteria (must-haves)
- `1 must use a screen reader or screen magnifier every time they access the internet`
- `At least 4 must be primarily mobile users and willing to use it for the session`
- `At least 4 must be users on desktop/laptop devices and willing to use it for the session`
- `8 must NOT use assistive technology`

#### Secondary criteria (nice-to-haves)
- `7 must be aged 55-64+`
- `At least 2 women`
- `At least 2 don't have any degree or vocational training after high school`
- `At least 2 are 35 or under`
- `At least 2 live in a rural or remote area`
- `At least 3 people of color`
  
## Timeline 🗓️

### Optional Kick-off Call with Perigean
We would like a kick-off call with Perigean to discuss recruitment criteria. Suggested dates and times: 

- `06/13, Friday, 2:00pm-6:00pm ET`
- `06/16, Monday, 9:30am-11:00pm ET, 2:00pm-4:00pm ET`
- `06/17, Tuesday, 9:30am-11:30am ET, 12:00pm-1:00pm ET, and 4:00pm-5:30pm ET`

### Prepare
**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

We would like to have an AT user pilot, and 2 non-AT user pilot (1 screen reader, 1 screen magnifier)

**Non-AT user pilot (1)**
- `Pilot participant name:` Michael Skinner
- `Date and time of pilot session:` 06/18, 1:00-2:00pm ET

**AT user pilots (2)**
- `Pilot participant name:` TBD (Opened [ADE Research ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110909) 05/30/25, for technical assistance with sessions and AT pilot)
- `Date and time of pilot session:` 6/23, 6/24 or 6/25 (ADE team to confirm times by 6/13). 

### Research sessions
- `Planned dates of research:` **June 30-July 18**
- **Note:** AT user sessions must be scheduled week of 7/14-7/18, no earlier, to accommodate ADE team availability for technical support during sessions.

### Length of sessions
- `Session length:` 60 minutes for non-AT users, 90 minutes for AT users
  
- `Buffer time between sessions:` 30 minutes
  
- `Maximum Sessions per day:` 4 per day

### Availability
> - `Monday - Friday 9:30am-12:00pm ET and 1:00pm-6:30pm ET`
> - `EXCEPT for 7/4 (no sessions due to Federal holiday)`

## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` Renata Keck & Jamie Fiore
- `Research guide writing and task development:` Renata Keck	
- `Participant recruiting & screening:`	Perigean	
- `Project point of contact:` Renata Keck, Jamie Fiore, Rachel Pope
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **Cindy Merrill** associated ADE ticket [(#110909)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110909)	
- `Note-takers:` Renata Keck, Jamie Fiore, and Rachel Pope
- `Observers:` Will need to sign up so we can limit the number per session. Renata will add them to the session invites received from Perigean.

## Approvals ✅
- `Reviewed by Amanda Klausmeier, OCTO Design Lead on [06/02/2025]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
