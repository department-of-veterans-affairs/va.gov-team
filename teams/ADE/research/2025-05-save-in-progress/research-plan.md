
# Research Plan for 2025-05 SiP research study 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
When VA.gov users are logged in (authenticated) and filling out a form, the "save in progress" alert flashes on and off with every field entry or edit. Because this alert displays *below* the Back and Continue buttons, screen readers never announce it, which is an accessibility issue.

We are testing a modification of the VA Design System [Header - Minimal component](https://design.va.gov/components/header/header-minimal) for the design of new web forms. We have removed the "save in progress" alert, and redesigned the existing "Finish this request later" link that functions like a button. The currently existing line of text about saving will remain on the authenticated version of the form intro page and the first page of the form.

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
We will conduct **remote moderated usability testing** to observe research participants filling out an online form while authenticated so that the information entered will be automatically saved before the form is submitted.   

Sessions will be conducted over Zoom with transcripts. 

### Location
This is remote research over Zoom. 
- [X] **Remote**
- [ ] **In-person**
      
## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

- `[Link to conversation guide](url TBD)`
- `[Link to prototype](url TBD)`

	
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

    1. Less than 2 years *(DISQUALIFY)* 
    1. 2-5 years *(ask next question)*
    1. More than 5 years *(ask next question)* 

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
- **DATE TBD** TIME RANGE TBD pm ET
- **DATE TBD** TIME RANGE TBD pm ET

**Prior to the kickoff call, we would like a link or screenshot of the recruitment survey** for this study to review beforehand.


> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **TBD**
- `Date and time of pilot session:` **TBD** 

### Research sessions
- `Planned dates of research:` **May 8-19**

We would like to request that **Perigean calls each participant** to remind them about the session, in addition to emailing them. And please include the session time **in each participant's own time zone** (from their address).

### Length of sessions
- `Session length:` **90 min for AT users, 60 min for non-AT users**
  
- `Buffer time between sessions:` **30 min**
  
- `Maximum Sessions per day:` **3**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

- `May 8, Thu, 12 - 1 or 1:30 PM ET`
- `May 8, Thu, 2 - 3 or 3:30 PM ET`
- `May 8, Thu, 5:30 - 6:30 or 7 PM ET`
- `May 9, Fri, 3:30 - 4:30 or 5 PM ET`
- `May 9, Fri, 5:30 - 6:30 or 7 PM ET`
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
- `Reviewed by Shane Strassberg, Research-Ops Lead, on [MM-DD-2025]`
