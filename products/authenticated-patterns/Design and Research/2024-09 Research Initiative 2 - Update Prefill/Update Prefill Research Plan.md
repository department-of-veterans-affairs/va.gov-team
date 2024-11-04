# Research Plan for AEDP Update Prefill Study

**Jump ahead to:**
- [Background](#background)
- [Research goals](#research-goals)
- [Methodology](#methodology)
- [Recruitment](#recruitment)
- [Timeline](#timeline)
- [Research sessions](#research-sessions)
- [Team roles](#team-roles)
- [Approved by](#approved-by)
- [Appendix](#appendix)

# Background

Many applications on VA.gov prefill existing information from user profiles upon sign in. This saves Veterans time and effort in completing tasks, like applications or other forms. Our team reviews current and potential design patterns to improve implementation guidance. We want to make it easier for VFS teams to implement patterns and make implementation more consistent.

In [our last study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill), we tested how users expected to engage with prefilled data on VA forms. In this study, we’ll test how users expect VA forms to instruct and guide them on updating their prefilled information.

We've researched current instances of this pattern [in this Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722538218743/e8a34db6e16086f9122fd2e0927edf5607bfa273?sender=u44efa807e992cacf10cf3697) so far. 

In this study, we'll test these variations:
* Display style of both uneditable and editable data sets (new “review style” versus gray card versus white card)
* Asking users where they prefer to save updated data (profile and form versus form only versus letting users choose between the profile or form)
* A new format to the review page, with and without editable data
* Including headers in the prefill alert or not
* Language used to convey to users how they can edit locked data (e.g. name, social security number, etc.)
* Alert on the unauthenticated form introduction page 

[View our product brief.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/patterns/update-prefilled-information)

### OCTO Objectives and Veteran Journey

This work supports [OCTO Objective 3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md): Our people are empowered with the knowledge and resources they need to make a sustained impact.

Because this design pattern can be used in many forms and digital products, the study fits into the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5fa2c0a1630337422de4e8f719cdcac3e391fe1a/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf#L2) throughout the full life cycle of the Veteran.


## Research Goals	

Goals for this research include:

* Understand the format that users expect to see prefilled information (“review style” versus gray or white cards)
* Understand if users expect to see their uneditable data in a different format than their editable data
* Understand which language users prefer about where their data is saved and where they expect to see it
* Understand if users want to be able to select where they save their information (form versus profile) 
* Understand which language users prefer about where/how to update uneditable information 
* Understand if users want to see uneditable data on their review screen or not 
* Understand if having data prefilled incentivizes users to login 
* Understand if users prefer headers in the prefill alert 


### Outcome

We will synthesize the data from this study and create a summary report of our learnings. This research will inform decisions around these two patterns our team is refining:

* [Help users to... Know when their information is prefilled](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/17)
* [Help users to... Update prefilled information](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/22)

This research will help us refine these patterns and present recommendations for these patterns when we submit them to VADS and USWDS.


### Research questions

*Goal 1: Understand user expectations around what the prefill alert should look like across different pages.*

* Does the alert on the unauthenticated form intro page entice users to login?
* Does including a header in the alert or bolding where the updates will save impact perception or comprehension of the alert?

*Goal 2: Understand how users expect their prefilled data to be displayed across the whole form.*

* What do each of the 3 display options (“review style” versus gray or white card)  communicate to users?
* Which display option is most clear?
* Which option enables them to most easily edit their prefilled data?

*Goal 3: Understand users’ expectations around why certain data can be edited within their profile and other data cannot.*

* How do they feel about the ability to edit some data but not others?
* Do they expect to see a different style of prefill data depending on if it is editable or not?
* Does the explanation for why we limit edits to some user data increase user trust in VA?
* Do they understand the steps they’d need to take to update their uneditable data?

*Goal 4: Understand if users want or need a confirmation step before submitting forms with prefilled data.*

* Do users expect to see uneditable prefill data on the review page?
* Do users want to see the additional info component explaining why they can’t update this data on the review page or not?

*Goal 5: Understand how users expect the edit process to work and where they expect their edits to get saved.*

* Where do they think the new information gets saved (profile versus form)?
* Would they ever want to choose where this information gets saved? 
* Does the confirmation message make it clear where the updates have been saved?


### Hypotheses

1. The unauthenticated prefill alert will entice users to sign in to complete their form.
2. The gray and white card combination will be the preferred style of reviewing prefilled information.
3. Clarifying how to edit uneditable data will make users feel confident in knowing how to do so.
4. Users won’t want to see uneditable prefill data on the review page. 
5. Users will want to save updates made to their profile, but will appreciate the choice.


## Methodology	

We will perform usability testing on 3 scenario-based concept tests - appropriate for evaluating structured design maturity. We will use the think-aloud format to evaluate how the user is responding to the design as they perform a task we give them. We will show the three tasks to each participant and change the order of the tasks shown to avoid the first view bias.


### Location

We will hold the research sessions remotely on Zoom.


### Research materials

* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Update%20Prefill%20Research%20Conversation%20Guide.md)
* [Prototype](x)
* [Designs](https://www.figma.com/design/1z3bAkQl4uR1IvAxmtyqZi/AE-Design-Patterns---Update-Prefill?node-id=3387-40809&t=jtwiX2vPAhxYW6U0-1)


## Recruitment

### Recruitment approach

We are looking for 8 Veterans to participate in this study. We’ll use a lean maximum strategy for inclusivity, targeting 3 demographic criteria (age, race, AT users) as primary sample distribution criteria. We would like to speak with at least 5 non-AT users and 3 AT users.


### Recruitment criteria

12 Veterans (includes a 1.5x over recruit - 7 non-AT users and 5 AT users)

We will recruit 12 Veterans for:

* **minimum** of 5 non-AT users
* **minimum** of 3 AT users
* **minimum** of 2 sessions with screen reader users
* **minimum** of 1 session with a screen magnification user

For more details about our criteria, refer to our [Recruitment ticket](add link).


#### **Cohort 1: Non-AT users**

We will recruit 7 Veterans to complete a **minimum** of 5 sessions. Half of them should be willing to join the study from their mobile devices.

<table>
  <tr>
   <td><strong># of participants</strong>
   </td>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>Level</strong>
   </td>
  </tr>
  <tr>
   <td>Exactly 7
   </td>
   <td>Are Veterans
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>At least 4
   </td>
   <td>Are willing to join from a mobile device
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>At least 4
   </td>
   <td>Are over 55 years old
   </td>
   <td>Secondary
   </td>
  </tr>
  <tr>
   <td>At least 3
   </td>
   <td>Identify as a race other than white
   </td>
   <td>Secondary
   </td>
  </tr>
  <tr>
   <td>At least 2
   </td>
   <td>Identify as a gender other than male
   </td>
   <td>Secondary
   </td>
  </tr>
</table>


#### **Cohort 2: Screen reader users**

We will recruit 3 Veterans who use screen readers to complete a **minimum** of 2 sessions. They should be daily users of screen readers.

We'd like to recruit people who use a mix of different screen readers, such as [NVDA, JAWS, VoiceOver (Apple) and Talkback (Android)](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u#Testingyourprototypewithassistivetechnologyusers-Screenreaders).

<table>
  <tr>
   <td><strong># of participants</strong>
   </td>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>Level</strong>
   </td>
  </tr>
  <tr>
   <td>Exactly 2
   </td>
   <td>Are Veterans
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>Exactly 2
   </td>
   <td>Are willing to join from a desktop or mobile device using a screen reader
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>Exactly 2
   </td>
   <td>Have been using a screen reader for 2 or more years
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>Exactly 2
   </td>
   <td>Daily use of screen readers to access websites or applications
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>At least 1
   </td>
   <td>Is over 55 years old
   </td>
   <td>Secondary
   </td>
  </tr>
  <tr>
   <td>At least 1
   </td>
   <td>Identify as a race other than white
   </td>
   <td>Secondary
   </td>
  </tr>
  <tr>
   <td>At least 1
   </td>
   <td>Identify as a gender other than male
   </td>
   <td>Secondary
   </td>
  </tr>
</table>


#### **Cohort 3: Screen magnification users**

We will recruit 2 Veterans who use screen magnification to complete a **minimum** of 1 session. They should state that they always use screen magnification on VA.gov.

We'd like to recruit people who use a mix of different screen magnification software, such as [ZoomText, ZoomText Fusion, Magnifier (Windows) and Zoom (Apple)](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u#Testingyourprototypewithassistivetechnologyusers-Screenmagnification).

<table>
  <tr>
   <td><strong># of participants</strong>
   </td>
   <td><strong>Criteria</strong>
   </td>
   <td><strong>Level</strong>
   </td>
  </tr>
  <tr>
   <td>Exactly 2
   </td>
   <td>Are Veterans
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>Exactly 2
   </td>
   <td>Are willing to join from a desktop or mobile device using screen magnification software
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>Exactly 2
   </td>
   <td>Always use screen magnification on VA.gov
   </td>
   <td>Primary
   </td>
  </tr>
  <tr>
   <td>At least 1
   </td>
   <td>Is over 55 years old
   </td>
   <td>Secondary
   </td>
  </tr>
  <tr>
   <td>At least 1
   </td>
   <td>Identify as a race other than white
   </td>
   <td>Secondary
   </td>
  </tr>
  <tr>
   <td>At least 1
   </td>
   <td>Identify as a gender other than male
   </td>
   <td>Secondary
   </td>
  </tr>
</table>


### Screener Questions

#### **Non-AT users**

1. Are you able to join the Zoom session from a smartphone such as a Samsung Galaxy or iPhone? Any kind of smartphone will work as long as it connects to the internet.
    * Yes
    * No

#### **Screen reader users**

1. Do you need to use a screen reader to access websites or applications? For example, VoiceOver, TalkBack, or JAWS.
    * Yes
    * No
2. If you answered yes, which screen reader do you use? Please select all that apply.
    * JAWS
    * NVDA
    * VoiceOver (iPhone, iPad, Mac)
    * TalkBack (Android)
    * Narrator (Windows)
    * Other (Please specify): ________________
    * This question doesn't apply to me
3. How long have you been using a screen reader? Your best guess is okay.
    * 0 - 1 years
    * 2 or more years
    * Never used
4. How frequently do you use a screen reader? Your best guess is okay.
    * Daily
    * Once a week
    * Once a month
    * Never
5. Can you join the Zoom session from your mobile or desktop device using your screen reader?
    * Yes
    * No
    * This question doesn't apply to me
6. Please list the name of the screen reader you will use during the session.
    * Open text box


#### **Screen magnification users**

1. Do you consistently need to resize fonts or use a magnification setting to see your screen when you are using your mobile or desktop device?
    * Yes
    * No
2. If you answered yes, which screen magnification tool do you use?
    * Open text box
3. How long have you been using a screen magnification tool? Your best guess is okay.
    * 0 - 1 years
    * 2 or more years
    * Never used
4. How frequently do you use screen magnification on VA.gov?
    * Always
    * Sometimes
    * Rarely
    * Never
5. Can you join the Zoom session from your mobile or desktop device using the screen magnification tool you need to see your screen?
    * Yes
    * No
    * This question doesn't apply to me


## Timeline

<table>
  <tr>
   <td>Date
   </td>
   <td>Milestone
   </td>
  </tr>
  <tr>
   <td>October 29th
   </td>
   <td>Research ticket submitted
   </td>
  </tr>
  <tr>
   <td>Nov 5th (non-AT user) and Nov 6th (AT user)
   </td>
   <td>Pilot sessions 
   </td>
  </tr>
  <tr>
   <td>Nov 8th - 14th for non-AT users, 
Nov 15th - 20th for AT users
   </td>
   <td>Research sessions
   </td>
  </tr>
  <tr>
   <td>Nov 21st - Dec 2nd
   </td>
   <td>Synthesis and writing report
   </td>
  </tr>
  <tr>
   <td>Dec 3rd
   </td>
   <td>Share findings
   </td>
  </tr>
</table>


### Prepare

**When will the thing you are testing be finalized?**

Tuesday, October 29th

**Pilot session information**

* Pilot participants: 
    * Beth Pandone (non-AT session)
    * Jamie Klensetsky Fay (AT session)
* Date and time of pilot session: 
    * Non-AT session - Tuesday, Nov 5th at 2pm EST
    * AT session - Wednesday, Nov 6th at 1:30pm EST


### Research sessions

**Planned dates of research:**

First round - non-AT users - November 8th - 14th (excluding the 11th for Veterans day)

Second round - AT users - week of November 15th - 20th


### Length of sessions

* Session length: 1 hour for non-AT users, 1.5 hours for AT users
* Buffer time between sessions: 30 minutes
* Maximum sessions per day: 3


### Availability

<table>
  <tr>
   <td><strong>Date</strong>
   </td>
   <td><strong>Timeslots (EST)</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Non-AT Users</strong>
   </td>
  </tr>
  <tr>
   <td>Friday, November 8th
   </td>
   <td>11am - 5pm 
   </td>
  </tr>
  <tr>
   <td>Tuesday, November 12th
   </td>
   <td>11am - 5pm 
   </td>
  </tr>
  <tr>
   <td>Wednesday, November 13th
   </td>
   <td>11am - 3pm, 4pm - 5pm 
   </td>
  </tr>
  <tr>
   <td>Thursday, November 14th
   </td>
   <td>12 - 4pm 
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>AT Users</strong>
   </td>
  </tr>
  <tr>
   <td>Friday, November 15th
   </td>
   <td>11am - 5pm
   </td>
  </tr>
  <tr>
   <td>Monday, November 18th
   </td>
   <td>2pm - 5pm
   </td>
  </tr>
  <tr>
   <td>Tuesday, November 19th
   </td>
   <td>11am - 5pm
   </td>
  </tr>
  <tr>
   <td>Wednesday, November 20th
   </td>
   <td>11am - 3pm, 4pm - 5:30pm
   </td>
  </tr>
</table>


## Team Roles

Below is the list of the people serving in each role and their contact information:

* Moderator: Christine Steiffer & Kristen Faiferlick
* Research guide writing and task development: Christine Steiffer
* Participant recruiting & screening: Perigean
* Project point of contact: Christine Steiffer
* Participant(s) for pilot test: 
    * Beth Pandone (non-AT session)
    * Jamie Klensetsky Fay (AT session)
* Accessibility specialist: Jamie Klensetsky
* Note-takers: Christine Steiffer, Kristen Faiferlick, Lynn Stahl
* Observers: Lynn Stahl, Kristen Faiferlick, Adam Whitlock, Belle Poopongpanit, Becky Phung, Alex Parker, Jeana Clark, Jaci Wilkinson, Beth Pandone


## Approved by:

Becky Phung, PO, on:

Shane Strassberg, VA Research Ops, on:


## Appendix


### Variations we’re testing per task:

**Task Orange**
* The unauthenticated sign in alert
* In prefill alerts, header is not included
* In prefill alerts, “Note:” is bolded
* Social Security number is masked except for the last 4 digits
* “How to change this information” is displayed in an Additional Information component, with updated language explaining why we don’t allow updates to personal information
* Prefilled information is presented in the new “review style” for both editable and uneditable data
* Users can only save changes to the form
* Users make changes to the mailing address from the review page

**Task Gray**
* In prefill alerts, header is not included
* In prefill alerts, the sentence about where changes are saved is bolded
* “How to change this information” is displayed in a text string, with updated language explaining why we don’t allow updates to personal information
* Prefilled information (address, specifically) is presented in new white review card for both editable and uneditable data
* Users must save changes to the form and their their profile

**Task Blue**
* In prefill alerts, header is included
* In prefill alerts, there is no “Note:”
* Social Security number only displays the last 4 digits
* “How to change this information” is displayed in a text string, with updated language explaining why we don’t allow updates to personal information
* Prefilled information (address, specifically) is presented in gray card for uneditable data and white review card for editable data
* Users can choose if they save changes to their profile or only the form
