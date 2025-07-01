
# Research Plan for IVC team, CHAMPVA Claims (form 10-7959a), Resubmissions and File Verification 06/2025

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>

Under the IDEA Act, all user facing forms need to be digitized. Form 10-7959a is the claims form for CHAMPVA benefits, which are available to the spouse or child of a Veteran with disabilities or the surviving spouse or child of a Veteran who has died.

Currently, Veterans and family members of Veterans can either fill out and complete form 10-7959a on VA.gov, or they can download and fill out the PDF and then mail it in for processing. If the information they submit to support their claim is not sufficient, they will either receive a notification that they need to resubmit the claim to include the necessary information, or they will receive an Explanation of Benefits (EOB) that denies the claim. In either case, the form must be resubmitted. 

Currently, the digital flow processes a resubmission as a new claim, which can cause delays for the beneficiaries and contributes additional work  to the CHAMPVA backlog. This study will support improving the existing 10-7959a digital flow so that users can mark a claim as a resubmission. It will also investigate whether using Optical Character Recognition or a Large Language Model [OCR/LLM] file verification for claims documentation reduces errors, resulting in the need for fewer resubmissions overall.

This initiative is trying to solve the following high-level questions:
 - How might we make it easier for family members and beneficiaries to submit claims online with the correct information?
 - How might we improve the experience of family members and beneficiaries who must resubmit a claim to correct missing information?
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

The CHAMPVA Claims form is available as both authenticated and unauthenticated forms.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

We have already successfully launched CHAMPVA Claims form. In an attempt to reduce the claims processing backlog and send-backs of claims missing necessary information, we are adding a resubmission flow and file verification to the existing form.

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/product-outline-10-7959a.md)**

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

1. Gauge the usability of the updated initial claim submission and resubmission flows, as measured by observed task success and self-reported usability measures.

2. Confirm users' understanding of the resubmission process as presented in the content of the 10-7959a, their expectations for what will be required and their responsibilities for providing accurate supporting documentation.

3. Understand users’ expectations for file verification when submitting documentation for a CHAMPVA claim.

  
### Outcome
We will synthesize the data from this study and create a summary report of our learnings. This research will inform decisions around how initial claims and resubmissions are handled within the CHAMPVA Claims form. It will also provide insight into how users respond to feedback they receive in the form when uploading supporting documentation for a claim via form 10-7959a.  

---

### Research questions

**Goal 1: Gauge the usability of the updated initial claim submission and resubmission flows, as measured by observed task success and self-reported usability measures.**
1. Are users able to successfully submit an initial claim and resubmit a claim that requires additional documentation?
2. Do users know where to file a claim resubmission within the digital form?
3. Do users understand what to do when presented with a claims sendback letter or EOB indicated the claim was denied?
4. What points of confusion, if any, do users have with the claims submission and resubmission process?

**Goal 2: Confirm users' understanding of the resubmission process as presented in the content of the 10-7959a, their expectations for what will be required and their responsibilities for providing accurate supporting documentation.**
1. Do users understand the information required for an initial claim or resubmission and know where to find it?
2. Do users understand what supporting documentation they’ll need to upload for their based on the information provided before they start the application?
3. Do users understand the specific requirements for each type of document they need to submit when on the upload page?

**Goal 3: Understand users’ expectations for file verification when submitting documentation for a CHAMPVA claim.**
1. Do users expect any form of digital verification to happen when they upload a document?
2. Do users expect to be told if uploaded documents are incorrect or do they expect to wait until their claim is reviewed to receive feedback?
3. How do users respond to an error indicating information is missing from a document they uploaded?


### Hypotheses

---

**Goal 1: Gauge the usability of the updated initial claim submission and resubmission flows, as measured by observed task success and self-reported usability measures.**
 - Users will understand they need to return to the digital form to resubmit a claim.
 - Users will understand that the information required to resubmit the claim can be found in the claim letter.

**Goal 2: Confirm users' understanding of the resubmission process as presented in the content of the 10-7959a, their expectations for what will be required and their responsibilities for providing accurate supporting documentation.**

 - Users will question the need to re-enter beneficiary and/or sponsor information when resubmitting the claim.
 - Users understand the types of documents needed.
 - Users will not understand the specific information needed on each document without prompting.

**Goal 3: Understand users’ expectations for file verification when submitting documentation for a CHAMPVA claim.**
 - Users will prefer the document verification compared to a non-OCR file upload.
 - Users will not question how we're verifying the information (what we're using to scan).
 - Users may be confused about how to resolve the error messages they see or how to bypass an error.

---
  
## Methodology  🛠️
We will conduct remote moderated usability testing to observe research participants filling out a new claim and responding to a send-back notification to resubmit a claim. We will be testing in the Staging environment using the unauthenticated version of the form.

Think-aloud protocol will be used for each task, to understand how the user understands and is responding to the flow of the claims form as they perform the tasks given to them. 

Sessions will be conducted over Zoom with transcripts.

### Location
Remote research, over Zoom.

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/research/user-research/2025-06-Conversation-Guide-Claims-Resubmissions-and-File-Verification.md)
- [Link to prototype](/) *need link*
	
## Recruitment 🎯	

### Recruitment approach
We would like Perigean to recruit assistive technology (AT) and non-AT users.

Our intended audience for this study is Veterans with high disability ratings and their dependent spouses and children, who are currently enrolled in the CHAMPVA program. We will split this study into three cohorts:

* **Cohort 1 (n = 6 minimum):** Veterans with a 100% service connected disability rating with spouse and/or dependent children who are currently enrolled in CHAMPVA benefits
  
* **Cohort 2 (n = 8 minimum):** Spouses and dependent children of Veterans with a 100% service connected disability rating, who are currently enrolled in CHAMPVA benefits

* **Cohort 3 (n = 2 minimum):** Veterans with a service connected disability rating with a spouse and/or dependent children who may or may not be enrolled in CHAMPVA benefits

### Recruitment criteria
**All participants must:**
- Be on a computer or mobile device
- During the session, be willing to share a web browser window on their device
- Have a working microphone
- Have Zoom downloaded to their device prior to the session and know how to share their screen

**Cohort 1 must:**
- Be a Veteran with a service-connected disability rating of 100%
- Have a spouse and/or dependent children
- **At least 4** spouse/children are _currently_ enrolled in CHAMPVA benefits (remainder can be unsure or not currently enrolled)
- **At least 1** identifies as having a cognitive disability

**Screener Cohort 1 (Veterans with 100% service connected disability whose spouse/dependents are enrolled in CHAMPVA benefits):**
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
* Yes (Qualifies for study, recruit **at least 4**, RECORD as enrolled in CHAMPVA)
* No (Qualifies for study, RECORD as not enrolled in CHAMPVA)
* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)

4. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
_Response options: YES, NO_
* Yes (Qualifies for study, recruit **at least 1**, RECORD response)
* No (Qualifies for study, RECORD response)
  
**Cohort 2 must:**
- Identify as a spouse or dependent child of a Veteran with a service-connected disability rating of 100%
- We'd like to hear from **at least 4** spouses/children who are currently enrolled in Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA), the remainder can be not currently enrolled

**Screener Cohort 2 (Spouses and dependent children of Veterans with a 100% service connected disability):**
1. Please select the answer that best fits you:
_Response options: Spouse of a Veteran, Dependent child of a Veteran (Answering either would qualify the participant)_

2. Does the Veteran you are related to get a VA disability compensation for a service-connected disability rating of 100%?
_Response options: YES, NO (Answering YES would qualify the participant)_

3. Are you enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
* Yes (Qualifies for study, recruit **at least 4**, RECORD as enrolled in CHAMPVA)
* No (Qualifies, RECORD as not enrolled in CHAMPVA)
* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)

**Cohort 3 must:**
- Be a Veteran with a service-connected disability 
- Have a spouse and/or dependent children
- Spouse/children _do not_ need to be enrolled in CHAMPVA benefits, but preferred
- Recruit 4 assistive tech users - **at least 2 AT user sessions** are needed for this study to be complete

**Screener Cohort 3 (Veterans with a service connected disability whose spouse/dependents may or may not be enrolled in CHAMPVA benefits):**
1. Do you get a VA disability compensation for a service-connected disability rating of 50% or higher?
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
* No [Disqualified]

5. [If yes to Q4] Please list the name of the screen reader or screen magnifier technology you will use during the session
_Response: free text field_ (If user mentions a browser extension such as Real Aloud, this disqualifies them from being recruited as a screen reader user. 

6. Are you willing to join the zoom session using this assistive technology?
_Response options: YES or NO_
* Yes [Recruit **at least 2**, proceed to next question]
* No [Disqualified]

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **6-8**
- `Spouses and dependent chilren:` **6-8**
- `AT users (can be: Veterans and spouses/dependent children:` **2-4**
- `Total:` **20**
- `Ideal completed sessions:` **14**

### Primary criteria (must-haves)
- `At least 2 must use a screen reader or screen magnifier every time they access the internet`
- `1 must have a cognitive disability`
- `At least 4 must be primarily mobile users and willing to use it for the session`
- `At least 2 must be users on desktop/laptop devices and willing to use it for the session`
- `At least 8 must NOT use assistive technology`

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
- `Monday - Friday 9:30am-12:00pm ET and 1:00pm-4:30pm ET`

### Prepare
**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

We would like to have an AT user pilot, and 2 non-AT user pilot (1 screen reader, 1 screen magnifier)

**Non-AT user pilot (1)**
- `Pilot participant name:` TBD
- `Date and time of pilot session:` TBD

**AT user pilots (2)**
- `Pilot participant name:` TBD
- `Date and time of pilot session:` 

### Research sessions
- `Planned dates of research:` **Monday, July 28 - Tuesday, August 12**

### Length of sessions
- `Session length:` 60 minutes for non-AT users, 90 minutes for AT users
  
- `Buffer time between sessions:` 30 minutes
  
- `Maximum Sessions per day:` 4 per day

### Availability
> - `Monday - Friday 9:00am-5:00pm ET`

## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` Renata Keck and Rachel Pope
- `Research guide writing and task development:` Rachel Pope	
- `Participant recruiting & screening:`	Perigean	
- `Project point of contact:` Renata Keck, Jamie Fiore, Rachel Pope
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` TBD (will link to ADE intake ticket when opened)
- `Note-takers:` Renata Keck, Jamie Fiore, and Rachel Pope
- `Observers:` Will need to sign up so we can limit the number per session. Renata will add them to the session invites received from Perigean.

## Approvals ✅
- `Reviewed by Amanda Klausmeier, OCTO Design Lead on [ ]`
- `Reviewed by OCTO Research-Ops Lead on [ ]`
