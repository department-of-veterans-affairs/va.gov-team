# Side Navigation Research Plan

Team: `Disability Benefits Crew - Core Team` </br>
Product: `21-526EZ` </br>
Proposed Feature: `Side Navigation` </br>
Authors: `Irene Vailikit`, `Bianca Rivera Alvelo`, `Fiorella Geedi` </br>
Last Edited: `11/18/25` </br>

## **Background 🏗️**

**Problem Statement**  
The Disability Compensation (VA Form 21-526EZ) application process is one of the longest on [VA.gov](http://VA.gov), and navigation within the form is a major friction point. Users can only navigate the form by clicking the Back and Continue buttons and are unable to jump to previously completed sections. This results in users having to click these buttons multiple times to make changes or edit their responses in different sections of the form.  Additionally, it's difficult to have a sense of place and completion within the form because the section titles, visual progress bar indicator, and number of questions are not neatly correlated.

**Side Navigation MVP (Wave Concept)**  
To solve these problems, we are implementing the [VADS side navigation component](https://design.va.gov/components/sidenav) into the 526ez form as an MVP. This will allow the user to jump to previously completed sections of the form, allowing them to review, add, or edit answers faster and with fewer clicks. The side navigation will contain links to the landing pages of the 6 main steps of the form: (1) Veteran details, (2) Conditions, (3) Mental health, (4) Supporting evidence, (5) Additional information, (6) Review and submit. The navigation component also provides an overview of the steps in the form, which will help provide a sense of place and completion within the form.

In this new design, the [VADS segmented progress bar with step labels](https://design.va.gov/components/progress-bar) has been removed so that the user is not interacting with two different components that indicate their location in the form. 

On mobile devices, the side navigation component converts to an accordion that the user expands to see links to the sections of the form. 

In testing, this will be referred to as the Wave Concept.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/files/Sidenav%20desktop%20mobile.png" alt="Descriptive alt text" style="max-height:300px;">
    

*Screenshots of side navigation MVP design on desktop and mobile*

**Modified Process List V2 (Cloud Concept)**  
After implementing the side navigation component, we plan to pursue a Version 2 design that visually presents as a process list. This component includes features and treatment styles that more strongly differentiate between the steps that have been completed, the step the user is currently on, and the steps they have yet to complete. 

In testing, this will be referred to as the Cloud Concept.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11%20Side%20Navigation/files/Process%20list%20desktop%20mobile%202.png" alt="Descriptive alt text" style="max-height:300px;">

*Screenshot of process list Version 2 design on desktop and mobile.*

**Where is your product situated on VA.gov? (ex: auth vs. unauth)**

The 526 Disability Benefits form is an authenticated product.

**What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?**

We are introducing a new feature into an already existing product that Veterans are familiar with.

### Product Brief

[Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116289)

[Link to initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/collab-cycle/side-nav/side-nav%20initiative%20brief.md).

### [**OCTO-DE Priorities**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md)

**Which OCTO priorities does this research support? Work with your VA lead and product manager as needed.**

Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

* Key Result 1: Improve satisfaction with our web and mobile products by 5 points.

### [**Veteran Journey**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Where does your product fit into the Veteran journey? Are there moments that matter?

* Starting Up  
* Taking Care of Myself

## **Research Goals 🥅**

What are you trying to learn from this research?

### **Goals**

**Goal 1**

**Evaluate whether users can identify the side navigation component and the process list component, and understand their purposes.** 

**Goal 2** 

**Evaluate users’ understanding of progress throughout the form using the side navigation component and process list component.**

**Goal 3**

**Assess how effectively the side navigation component allows users to  efficiently  edit responses and complete tasks.**

### **Outcomes**

How will this research advance your product to the next phase in the design process? What will you do with your learnings?

**For both MVP and V2 implementation, this research will help us identify:** 

* If the side navigation MVP meets user needs on both desktop and mobile.  
* Determine whether there are launch-blocking usability issues for the side navigation MVP.  
* Uncover usability issues with the mobile accordion navigation.  
* Gather feedback on the process list V2 component and its impact on the user experience.  
* Whether the process list component provides a stronger sense of progress across the form steps than the side navigation component.

**What we’ll do with the learnings:**

* Apply quick, low-effort fixes (like copy or visual adjustments) to improve the MVP before launch.  
* Use the findings to determine if larger design changes are necessary for future versions.  
* Determine whether the process list component should be redesigned.  
* Identify areas that need deeper research and plan for follow-up usability testing.

### **Research questions**

**Goal 1**

**Evaluate whether users can identify the side navigation component and the process list component, and understand their purposes.** 

* Do users identify and correctly use the navigation component to move between sections?  
  * Do users recognize the distinction between the navigation component and the Back/Continue buttons in terms of purpose?  
* On mobile, do users identify the navigation accordion as a navigation tool?  
* On mobile, when users are viewing the “Review and Submit” page, can they distinguish between the accordion navigation component and the other accordions on the page that are part of the “Review and Submit” pattern?


**Goal 2**

**Evaluate users’ understanding of progress throughout the form using the side navigation component and process list component.**

* Do users understand that some sections are inactive until they finish earlier sections?  
  * If not, what are their assumptions about why certain sections are inaccessible?  
  * How do users react when navigation links are locked (e.g., confusion, frustration, or understanding)?  
* How do the navigation components contribute to users understanding of where they are in the form and how much they have left to complete?  
  * Are there moments where users lose track of their place or become disoriented?  
* How do users know when they’ve completed a section?  
* Do users feel confident they’ve completed everything required before submission?  
* How do visual cues (like inactive links, labels, or filled/empty state bubbles) effectively communicate completion and progress?  
* How does the copy of “Step X: Step Name” support the user in understanding where they are in the form and how much they have left to complete? 

**Goal 3** 

**Assess how effectively the side navigation component allows users to efficiently edit responses and complete tasks.**

* Can users easily navigate to and/or edit answers in previously completed sections and resume where they left off?  
* Do users remember in which sections they filled out certain pieces of information?  
* When users are on the “Review and Submit” page and are prompted to edit previous answers, what is their process?   
  * Do they use the back button, the inline editing buttons on the Review and Submit page, or the navigation component to go back to a previous section?  
  * When users are prompted to add a condition on the Review and Submit page, what is their process?  
* How confident do users feel submitting the form after filling it out?

### **Hypotheses**

**Goal 1**

**Capture whether users can identify the side navigation component and the process list component, and understand their purposes.**

**Hypotheses:**

- **Desktop**: Most users will use the side navigation / process list on desktop to navigate to previously completed sections.  
- Some users will attempt to click the inactive links to the locked sections, and then will articulate that they need to complete the sections to unlock them.  
- **Mobile**: Most users will identify and use the navigation / process list accordion on mobile. They will be able to distinguish it from the accordion components on the Review and Submit page.   
- **Side Navigation vs. Process List:** Most users will understand that the purpose of the Process List is to support them in tracking their progress throughout the form than the side navigation.

**Goal 2** 

**Evaluate users’ understanding of progress throughout the form using the side navigation component and process list component.**

**Hypotheses:**

- **Desktop**: Users will be able to articulate which step they are located in the form and how many steps they have left to complete by the visual indicators provided on the side navigation.   
- **Mobile**: Since the section titles of the form will be collapsed within the accordion component and not constantly visible, some users will be unable to track their progress through the form through the navigation accordion alone.       
- **Side Navigation vs. Process List:** More users will be able to understand the steps they have completed on the process list than the side navigation due to the ‘Complete’ label on the process list.  
- **Side Navigation vs. Process List:** More users will be able to understand the step they are on on the process list than the side navigation due to the blue treatment on the process list.

**Goal 3**

**Assess how effectively the side navigation component allows users to efficiently edit responses and complete tasks.**

**Hypotheses:**

- **Desktop**: Users will use the side navigation to navigate back to a previous section, edit an answer, and navigate back to the screen they were previously on.  
- **Mobile**: Users will use the side navigation to navigate back to a previous section, edit an answer, and navigate back to the screen they were previously on.   
- Users will be able to use multiple navigation and editing strategies on the Review and Submit page since there are alternative ways (inline editing) that allow the user to edit their answers.   
- **Side Navigation vs. Process List**: Most users will find it easy to use both components to edit responses on previous screens. 

## **Methodology 🛠️**

*Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*

This research study will test the side navigation component MVP and the process list Version 2 on desktop and mobile devices to validate design decisions and identify any potential pain points we may be able to solve via low-effort design tweaks before MVP release. We also want to learn if there are any major issues prior so that we can adjust prior to release. We also intend on collecting feedback for a version 2 of the side navigation 

Each session will test both designs, with the side navigation MVP taking 75% of the session time and the process list V2 taking 25%. Given that the MVP is the priority, we want to ensure the majority of the session time is dedicated to gathering feedback essential to launch.

Our target is to have 4 participants test on desktop, and 4 participants test on mobile devices. For mobile devices, both components would be nested in an accordion. This introduces an additional step where participants would have to identify and expand the accordion to interact with the component. We want to target having 4 participants using a mobile device to assess whether the accordion affects users’ ability to use the component. 

### **Location**

Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. 

[X] Remote  
[ ] In-person

## **Research materials 📔**

* [Side Navigation Conversation Guide](https://docs.google.com/document/d/1apSc_MnQzIFDLZDQnuYkx34bb63BwTKK0_MS8gwNKYA/edit?usp=sharing)

## **Recruitment 🎯**

### **List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:**

Note

Your total number should equal 1.5x your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*

* Veterans: 12  
* Caregivers: 0  
* Dependents: 0  
* Total: 12  
* Ideal completed sessions: 8 Total (4 Desktop \+ 4 Mobile)

### **Recruitment approach**

We want to use Perigean to recruit 12 participants for a total of 8 completed sessions. Ideally, 4 participants will join via mobile. 

### **Recruitment criteria**

**All participants should be:**

* Veterans  
* Able to participate in a Zoom meeting and share their screen through their phone or a computer.

**Primary criteria**

* At least 4 participants should participate from a smart phone  
* At least 3 participants should participate from a desktop or laptop computer  
* At least 3 participants without a college degree  
* At least 3 participants should identify as having a cognitive disability  
* At least 3 users aged 55+  
* At least 2 participants have applied for disability benefits through the online form within the last 2 years    
* At least 2 participants have applied for disability benefits, through a paper form or VSO within the last 2 years

**Secondary criteria (nice-to-haves)**

* At least 3 must identify as a race or ethnicity other than white  
* 4 or more participants should identify as a gender other than male  
* 1 or more who speak English as their second language  
* 1 or more/ rural location  
* 1 or more / with no degree  
* 1 or more / LGBTQ+

**Screener Questions**

1. How will you join the Zoom meeting for your research session?  
   * Desktop/laptop (*qualify for desktop)*  
   * Smart phone *(qualify for smartphone)*  
   * Tablet *(disqualifies for study)*  
2. Within the last 2 years, have you applied for disability benefits compensation? It's ok if you are not yet receiving these benefits.    
   * Yes *(qualify for applied for disability benefits)*  
   * No (qualify for has not applied for disability benefits)  
3. If you have applied for disability benefits compensation within the last two years, how did you apply? *(responses should be checkboxes in order to allow the participant to select both if both options apply to them)*  
   * I applied by submitting a paper form or through a VSO. *(qualify for applied via paper form or VSO)*  
   * I applied online. *(qualify for applied online)*  
4. Do you find it difficult to read or understand what you read? We ask this question because we want to make sure that our tools work for people who live with challenges like these. *(qualifies for cognitive disability)*

## **Timeline 🗓️**

### **Optional Kick-off Call with Perigean**

* Suggested dates and times: Nov. 21; any time between 12pm - 2pm ET

### **Prepare**

Send pilot participant email in study Slack channel

* Pilot participant name: Ben Peterson 
* Date and time of pilot session: Monday Nov. 24 at 12pm ET

### **Research sessions**

* Planned dates of research: Mon. Dec. 8 - Wed. Dec. 17

### **Length of sessions**

* Session length: (e.g. 30 minutes, \< 1 hour, up to 2 hours, up to 4 hours) **[75 min]**  
* Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time) **[1 hour]**  
* Maximum Sessions per day: (We all have limits \- how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?) **[3]**

### **Availability**

Please request enough dates and at *least double the amount of time slots for the number of requested participants*. (e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.; *12 time slots for 6 participants*). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

Place time slots between hash marks when in edit mode.

* \[12/8, Monday, 9:00AM \- 6:00PM\] EST  
* \[12/9, Tuesday, 9:00AM \- 6:00PM\] EST  
* \[12/10, Wednesday, 9:00AM \- 6:00PM\] EST  
* \[12/11, Thursday, 9:00AM \- 6:00PM\] EST  
* \[12/12, Friday, 8:00AM \- 5:00PM\] EST  
* \[12/15, Monday, 9:00AM \- 6:00PM\] EST  
* \[12/16, Tuesday, 9:00AM \- 6:00PM\] EST  
* \[12/17, Wednesday, 9:00AM \- 6:00PM\] EST

## **Team Roles 🕵️👩‍💻👩‍🔬**

Please list the names of people in each role. In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

* Moderator: Irene Vailikit, Bianca Rivera Alvelo, Fiorella Geedi   
* Research guide writing and task development (usually but not always same as moderator): Irene Vailikit, Bianca Rivera Alvelo, Fiorella Geedi  
* Participant recruiting & screening: Perigean  
* Project point of contact: Irene Vailikit  
* Accessibility specialist (for sessions where support for assistive technology may be needed): Etan Berkowitz  
* Note-takers: Eryn Sobing, Carolyn Dew, Bianca Rivera Alvelo, Irene Vailikit, Julianna Jara, Fiorella Geedi   
* Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.  
  * We will manage inviting observers to the sessions once we have a schedule and an observer sign up sheet

## **Approvals ✅**

* Reviewed by Elizabeth Lantz on [11-18-2025]  
* Reviewed by OCTO Research-Ops Lead on \[MM-DD-YYYY\]
