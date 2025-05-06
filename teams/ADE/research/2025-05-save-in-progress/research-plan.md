
# Research Plan for 2025-05 Save in Progress research study 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
OCTO aims to improve VA.gov's digital services for all Veterans. Assessibility specialists at OCTO focus on making these digital services accessible for all, especially those with visual and/or cognitive disabilities. Getting user feedback from Veterans who use assistive technologies helps OCTO understand which digital interactions work well and which need improvements to be accessible.

Saving in-progress work while filling out an online form is an interaction for which the current implementation on VA.gov has two known accessibility issues. This research is being planned to get user feedback on a revised design that may resolve both issues: 

1. While VA.gov users are signed in (authenticated) and filling out a form, the "save in progress" alert (see below) flashes on and then off with every field entry or edit. Because this alert displays *below* the Continue button, screen readers don't announce it, which is an accessibility issue. All users should have access to the same information about the user interface.

2. There's a "Finish this request later" button that looks like a link (see below), which is another accessibility issue. Links that take you to another page should look like links, and buttons that do actions should look like buttons. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/2-a11y-issues.png" width="50%" height="50%">

We are testing a modification of the VA Design System [Header - Minimal component](https://design.va.gov/components/header/header-minimal), which is recommended for the design of new web forms. To address the above accessibility issues, we have removed the "save in progress" alert, as well as changed the "Finish this request later" button that looks like a link into looking like a button (see below). We believe that removing the "save in progress" alert will be OK because there is already text about saving on the authenticated version of the form intro page and the first page of the form. One goal of this current research is to get user feedback on the revised design.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/2-a11y-issues-fix.png" width="50%" height="50%">

Previous research has validated the minimal header component, including its lack of "Back" button (research participants successfully used the "Back to previous page" breadcrumb link at the top of each page). Other research studies have tested various locations for the "Save in progress" alert, and subsequent research studies have documented usability and accessibility issues with those locations. We believe that our new design will work better for Veterans. 

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

This research supports the following OCTO priorities:

Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
- Key Result 1: Improve satisfaction with our web and mobile products by 5 points.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Veterans may use web forms on VA.gov throughout ALL stages of the Veteran Journey--Serving and separation, Living civilian life, and Retiring and aging.

## Research Goals 🥅	

### Goals

1. (primary) Learn about Veterans' expectations for saving information while filling out an online form before submitting it.
1. (primary) Get user feedback on design revisions for "save in progress" and "finish this request later" that reduce redundant messaging around saving.
1. (secondary) Get user feedback on error messages and the progress bar while filling out online forms.
  
### Outcome

Findings and recommendations from this research will **inform guidance and documentation for the "save in progress" feature** for authenticated users filling out forms on VA.gov. Matt Dingee asked ADE to help with this because some VFS teams are innovating new designs, whereas "save in progress" should be a standard pattern used by all teams.

In addition, user feedback collected on "finish this request later", error messages, and the progress bar will be helpful for accessibility specialists advising VFS teams.


### Research questions

**Research goal 1: Learn about Veterans' expectations for saving information while filling out an online form before submitting it.**
1. What experiences have Veterans had around saving while filling out VA forms?
1. What expectations do Veterans have about whether information will be saved while filling out an online form?
     1. What do Veterans expect to happen to their form data if they stop in the middle of filling out a form?
     1. What do Veterans expect to happen to their form data if they close the form page?
     1. How do Veterans expect to resume working on a form that they previously started filling out?

**Research goal 2: Get user feedback on design revisions for "save in progress" and "finish this request later" that reduce redundant messaging around saving.**

3. Do Veterans think that their form data is being saved? If so, how do they know?
1. Are Veterans able to stop working on a form and return to it later? If so, how do they do it?
1. Do Veterans notice the alert about saving on the form intro page?
1. Do Veterans notice the text about saving on the first page of the form (below the progress stepper)?

**Research goal 3: Get user feedback on error messages and the progress bar while filling out online forms.**

7. What reactions do Veterans have to error messages? 
     1. Do they know what the errors mean, and how to resolve them?
     1. How do they want to find out about errors?
1. What reactions do Veterans have to the progress bar? Do they notice it?

### Hypotheses

1. While filling out online forms, Veterans expect that their form data will be saved.

1. With the new design, Veterans are confident that their form data will be saved.

1. With the new design, Veterans will know how to resume filling out a form that they started previously.

1. When Veterans encounter error messages while filling out online forms, they are able to resolve the errors.

1. While filling out an online form, Veterans will notice the progress bar and find it useful.

---
  
## Methodology  🛠️
We will conduct **remote moderated usability testing** to observe research participants filling out an online form. The participants will be logged in so that the information they enter will be automatically saved before the form is submitted. We will be using a **GitHub Codespace** that is accessible to screen readers and screen magnifiers. 

Sessions will be conducted over Zoom with transcripts. 

### Location
This is remote research over Zoom. 
- [X] **Remote**
- [ ] **In-person**
      
## Research materials 📔

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/conversation-guide.md)
- [Link to prototype](https://bit.ly/4lXVLTV)

	
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

- `4 must use a screen reader every time they access the internet`
- `2 must use a screen magnifier every time they access the internet`
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

    - If they say something non-digital like "magnifying glass, *DISQUALIFY* 
    - If they say "JAWS", "NVDA", "VoiceOver", "TalkBack", or "Narrator", *RECORD as **screen reader user**, RECRUIT 4 and ask next question*
    - If they say "Magnifier", "Zoom", "Magnification", "Magnifier", or "ZoomText", *RECORD as **screen magnifier user**, RECRUIT 2 and ask next question*
    - If they say "increase font size" or "zoom in the browser", ask  what percentage they zoom to. 
      - If 200% or greater, *RECORD as **screen magnifier user**, RECRUIT 2, and ask next question*
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
- **May 2**: 12-5 pm ET

**Prior to the kickoff call, we would like a link or screenshot of the recruitment survey** for this study to review beforehand.

- `Dates and times of pilot sessions:` 
  - **Mon May 5 from 3:30-5 pm ET** with Sarah Koomson
  - **Tue May 6 from 4-5:30 pm ET** with Maria Mutia
  - **Wed May 7 from 4-5:30 pm ET** with Evan Burnett

### Research sessions
- `Planned dates of research:` **May 12-21**

We would like to request that **Perigean calls each participant** to remind them about the session, in addition to emailing them. And please include the session time **in each participant's own time zone** (from their address).

### Length of sessions
- `Session length:` **90 min for AT users, 60 min for non-AT users**
  
- `Buffer time between sessions:` **30 min**
  
- `Maximum Sessions per day:` **3**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

- `May 12, Mon, 12 - 1 or 1:30 PM ET`
- `May 12, Mon, 5 - 6 or 6:30 PM ET`
- `May 12, Mon, 7 - 8 or 8:30 PM ET`
- `May 13, Tue, 12 - 1 or 1:30 PM ET`
- `May 13, Tue, 2 - 3 or 3:30 PM ET`
- `May 14, Wed, 12 - 1 or 1:30 PM ET`
- `May 14, Wed, 2 - 3 or 3:30 PM ET` 
- `May 15, Thu, 12 - 1 or 1:30 PM ET`
- `May 15, Thu, 2 - 3 or 3:30 PM ET`
- `May 15, Thu, 5 - 6 or 6:30 PM ET`
- `May 15, Thu, 7 - 8 or 8:30 PM ET`
- `May 16, Fri, 12 - 1 or 1:30 PM ET`
- `May 16, Fri, 2 - 3 or 3:30 PM ET`
- `May 16, Fri, 5 - 6 or 6:30 PM ET`
- `May 16, Fri, 7 - 8 or 8:30 PM ET`
- `May 19, Mon, 12 - 1 or 1:30 PM ET`
- `May 19, Mon, 2 - 3 or 3:30 PM ET`
- `May 19, Mon, 5 - 6 or 6:30 PM ET`
- `May 19, Mon, 7 - 8 or 8:30 PM ET`
- `May 20, Mon, 12 - 1 or 1:30 PM ET`
- `May 20, Mon, 2 - 3 or 3:30 PM ET`
- `May 20, Mon, 5 - 6 or 6:30 PM ET`
- `May 20, Mon, 7 - 8 or 8:30 PM ET`
- `May 21, Mon, 12 - 1 or 1:30 PM ET`
- `May 21, Mon, 2 - 3 or 3:30 PM ET`
- `May 21, Mon, 5 - 6 or 6:30 PM ET`

## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Cindy Merrill**	
- `Research guide writing and task development:` **Cindy Merrill**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Cindy Merrill**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **ADE Team**	
- `Note-takers:` **Perigean**	
- `Observers:` Will need to sign up so we can limit the number of observers per session, and Cindy will add them to the invites that she receives from Perigean.

## Approvals ✅
- `Reviewed by Martha Wilkes, OCTO Accessibility Strategist/Designer, on 04-22-2025`
- `Reviewed by Shane Strassberg, Research-Ops Lead, on 04-30-2025`
