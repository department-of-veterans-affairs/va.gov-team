
# Research Plan for 2026-01 Save in Progress -- 2nd round of usability testing

## Background 🏗️
Saving in-progress work while filling out an online form is an interaction for which the current implementation on VA.gov has known accessibility issues, and the revised design that was [usability tested in May 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-findings.md) didn't work very well. Key findings from that study indicated that most participants didn't know that their information was being saved automatically, and they didn't see or remember either of the informational alerts about saving. 

This research is being planned to get user feedback on a revised design that hopefully communicates more effectively to Veterans that the information they enter into forms will be saved automatically. The new design adds an [interstitial page (in Figure 1 below)](#user-content-figure-1-shows-the-new-interstitial-page) about saving that appears after the user clicks the Continue button on the first page of form fields, which is after they've started filling out the form and during a natural pause in their work (between form pages).

### Figure 1 shows the new interstitial page

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2026-01-save-in-progress-2/images/interstitial.PNG" width="50%" height="50%" alt="The new interstitial page explains that the information you enter in the form will saved, and that you can select the Finish later button anytime to stop">


### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

This research supports the following 2025 OCTO priorities:

Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
- Key Result 1: Improve satisfaction with our web and mobile products by 5 points.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Veterans may use web forms on VA.gov throughout ALL stages of the Veteran Journey--Serving and separation, Living civilian life, and Retiring and aging.

## Research Goals 🥅	

### Goals

1. See if Veterans understand that their form data is being saved as they're filling out a form but haven't submitted it yet.
1. See if Veterans can stop filling out a form, get signed out, and then resume filling out a form.
1. See if moving the accordion controls to the left side affects usability.
  
### Outcome

Findings and recommendations from this research will **inform design guidance and documentation  for the "save in progress" feature** (i.e., a documented pattern in the VA Design System) for authenticated users filling out forms on VA.gov. 

### Research questions

#### Research goal 1: See if Veterans understand that their form data is being saved as they're filling out a form but haven't submitted it yet.
1. What reactions/feedback do Veterans have upon encountering the interstitial page after clicking "Continue"?
1. Do Veterans think that their form data is being saved? If so, how confident are they?
1. Do Veterans click on either of the links on the interstitial page (that go to My VA or the form intro page)?
1. Do Veterans remember later what the interstitial page said?

#### Research goal 2: See if Veterans can stop filling out a form, get signed out, and then resume filling out a form.  
1. Do Veterans use the "Finish later" button to stop filling out a form?
1. What feedback do Veterans have on the revised "Finish later" page? 
1. Are Veterans able to resume filling out a form that they previously started? If so, how?
1. Do users realize that they have to sign in before resuming the form?

#### Research goal 3: See if moving the accordion controls to the left side affects usability.
1. Are Veterans able to open and close accordions with controls on the left side? (especially people using a screen magnifier)

### Hypotheses

1. With the new design, Veterans are confident that their form data will be saved.
1. Telling Veterans about auto saving after the first form page is a time when they are receptive and likely to remember.
1. With the new design, Veterans will be able to stop filling out a form, get signed out, and then resume filling out a form.
1. All Veterans (including screen magnifier and screen reader users) will find the accordion controls on the left side easy to use.


## Methodology  🛠️
We will conduct **remote moderated usability testing** to observe research participants filling out an online form. The participants will be logged in so that the information they enter will be automatically saved before the form is submitted. We will be using a **GitHub Codespace** that is accessible to screen readers and screen magnifiers. 

Sessions will be conducted over Zoom with transcripts. 

### Location
This is remote research over Zoom. 
- [X] **Remote**
- [ ] **In-person**
      
## Research materials 📔

- [Link to conversation guide](./conversation-guide.md)
- [Link to prototype](https://bit.ly/456nrPv)

	
## Recruitment 🎯	

### Recruitment approach
We would like Perigean to recruit assistive tech (AT) users and non-AT users.

### Recruitment criteria

**List the total number and type (Veterans, caregivers, etc.) of participants for this study:**

- `Veterans:` **[12]** 
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[12]**

### Primary criteria (must-haves) in *decreasing* order of priority
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `3 must use a screen reader every time they access the internet`
- `3 must use a screen magnifier every time they access the internet`
- `6 must NOT use a screen reader or screen magnifier`
- `At least 5 have a computer and are willing to use it for the session`
- `At least 5 have a smartphone and are willing to use it for the session`
- `At least 4 have a cognitive disability (e.g., TBI)` 
- `At least 4 have filled out a VA form online before`
- `At least 4 have NOT filled out a VA form online before`
- `ALL `
  - `Have Zoom downloaded to their device prior to the session and know how to share their screen` 
  - `Are willing to share over Zoom a web browser window` 
  - `Have a working microphone on their device`

#### Secondary criteria (nice-to-haves) in *decreasing* order of priority
*What criteria would strengthen your results?* 

- `At least 4 are age 55 or older`
- `At least 2 women`
- `At least 2 don't have any degree or vocational training after high school` 
- `At least 2 are 35 or under`
- `At least 2 live in a rural or remote area` 
- `At least 3 people of color` (anything other than White or Caucasian)

#### Screening Questions

1. Do you use a screen reader or screen magnifier **every time** you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies.

    1. No *(jump to question 5)*
    2. Yes *(ask next question)*

1. Are you willing to join the Zoom session using your screen reader or screen magnifier?

    1. No *(DISQUALIFY)* 
    1. Yes *(ask next question)*  

1. How long have you been using this screen reader or screen magnifier? 

    1. Less than 1 year *(DISQUALIFY)* 
    1. At least 1 year *(ask next question)* 

1. What is the name of the screen reader or screen magnifier technology that you will use during the Zoom session? *(open text field--RECORD what they say AND ask the rest of the questions)*

    - If they say something non-digital like "magnifying glass", *DISQUALIFY* 
    - If they say "JAWS", "NVDA", "VoiceOver", "TalkBack", or "Narrator", *RECORD as **screen reader user**, RECRUIT 3 and ask next question*
    - If they say "Magnifier", "Zoom", "Magnification", "Magnifier", or "ZoomText", *RECORD as **screen magnifier user**, RECRUIT 3 and ask next question*
    - If they say "increase font size" or "zoom in the browser", ask  what percentage they zoom to. 
      - If 200% or greater, *RECORD as **screen magnifier user**, RECRUIT 3, and ask next question*
    - *If unsure whether someone qualifies, please ask Cindy*

1. For this meeting, you'll need a device with Zoom installed that can screen share and has a working microphone. What kind of device will you be using?
*(RECORD)*

    1. Smartphone  *(RECRUIT 5 and ask next question)*
    1. Computer *(RECRUIT 5 and ask next question)*
    1. Tablet *(RECRUIT no more than 2, and ask next question)*

1. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
     1. No *(ask next question)*
     2. Yes *(RECRUIT 4, RECORD as having a cognitive disability, and ask next question)*

1. Have you filled out a VA form online before? 
     1. No *(RECRUIT 4 and RECORD as NOT filled out VA form online)*
     2. Yes *(RECRUIT 4 and RECORD as filled out VA form online)*
     3. Don't know 

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior.** 

### Prepare
Before recruitment starts, we would like to **request a kickoff call with Perigean** to align on recruitment criteria and terminology for screener questions in the survey and emails that will be sent to Veterans. We would also like to discuss the relative priorities of recruitment criteria.  

Cindy is available for a kickoff call during any of these times: 
- **Jan 2**: 2-5 pm ET
- **Jan 5**: 12-1 or 2-4 pm ET

**Prior to the kickoff call, we would like a link or screenshot of the recruitment survey** for this study to review beforehand.

- `Dates and times of pilot sessions:` 
  - **Jan 6 from y-z pm ET** with TBD
  - **Jan 7 from y-z ET** with TBD
  - **Jan 8 from y-z pm ET** with TBD

### Research sessions
- `Planned dates of research:` **Jan 12-21**

We would like to request that **Perigean calls each participant** to remind them about the session, in addition to emailing them. And please include the session time **in each participant's own time zone** (from their address).

### Length of sessions
- `Session length:` **90 min for AT users, 60 min for non-AT users**
  
- `Buffer time between sessions:` **60 min**
  
- `Maximum Sessions per day:` **3**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

- `Jan 12, Mon, 12 - 1 or 1:30 PM ET`
- `Jan 12, Mon, 7 - 8 or 8:30 PM ET`
- `Jan 13, Tue, 12 - 1 or 1:30 PM ET`
- `Jan 13, Tue, 2 - 3 or 3:30 PM ET`
- `Jan 13, Tue, 5 - 6 or 6:30 PM ET`
- `Jan 13, Tue, 7 - 8 or 8:30 PM ET`
- `Jan 14, Wed, 12 - 1 or 1:30 PM ET`
- `Jan 14, Wed, 2 - 3 or 3:30 PM ET`
- `Jan 14, Wed, 5 - 6 or 6:30 PM ET`
- `Jan 15, Thu, 12 - 1 or 1:30 PM ET`
- `Jan 15, Thu, 2 - 3 or 3:30 PM ET`
- `Jan 15, Thu, 7 - 8 or 8:30 PM ET`
- `Jan 16, Fri, 12 - 1 or 1:30 PM ET`
- `Jan 16, Fri, 2 - 3 or 3:30 PM ET`
- `Jan 16, Fri, 5 - 6 or 6:30 PM ET`
- `Jan 16, Fri, 7 - 8 or 8:30 PM ET`
- `Jan 20, Tue, 12 - 1 or 1:30 PM ET`
- `Jan 20, Tue, 2 - 3 or 3:30 PM ET`
- `Jan 20, Tue, 5 - 6 or 6:30 PM ET`
- `Jan 20, Tue, 7 - 8 or 8:30 PM ET`
- `Jan 21, Wed, 2 - 3 or 3:30 PM ET`
- `Jan 21, Wed, 5 - 6 or 6:30 PM ET`
- `Jan 21, Wed, 7 - 8 or 8:30 PM ET`

## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Cindy Merrill**	
- `Research guide writing and task development:` **Cindy Merrill**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Cindy Merrill**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **ADE Team**	
- `Note-takers:` **Perigean**	
- `Observers:` Will need to sign up so we can limit the number of observers per session, and Cindy will add them to the invites that she receives from Perigean.

## Approvals ✅
- `Reviewed by Martha Wilkes, OCTO Accessibility Strategist/Designer, on 12/18/2025`
- `Reviewed by Shane Strassberg, Research-Ops Lead, on TBD`
