
---

# 2025-05 Save in Progress Usability Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Accessibility Digital Experience (ADE)**

**Date:** 06/13/2025

**Contacts:** Cindy Merrill, Jeana Clark

**[Link to Research Readout](link-here)**  

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Next Steps](#next-steps)
- [Further research needed](#further-research-needed)
- [Appendix (including screenshots of design prototype)](#appendix)
- [Who we talked to](#who-we-talked-to)

## Research Goals
Veterans may fill out web forms on VA.gov throughout their lives, including ALL stages of the Veteran Journey--Serving and separation, Living civilian life, and Retiring and aging.

Saving in-progress work while filling out an online form is an interaction for which the current implementation on VA.gov has two known accessibility issues. This research is being planned to get user feedback on a revised design that may resolve both issues.

<details><summary>Click to see details of the two accessibility issues.</summary>
	
1. While VA.gov users are signed in (authenticated) and filling out a form, the "save in progress" alert (see below) flashes on and then off with every field entry or edit. Because this alert displays *below* the Continue button, screen readers don't announce it, which is an accessibility issue. All users should have access to the same information about the user interface.

2. There's a "Finish this request later" button that looks like a link (see below), which is another accessibility issue. Links that take you to another page should look like links, and buttons that do actions should look like buttons. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/2-a11y-issues.png" width="50%" height="50%">

We are testing a modification of the VA Design System [Header - Minimal component](https://design.va.gov/components/header/header-minimal), which is recommended for the design of new web forms. To address the above accessibility issues, we have removed the "save in progress" alert, as well as changed the "Finish this request later" button that looks like a link into looking like a button (see below). We believe that removing the "save in progress" alert will be OK because there is already text about saving on the authenticated version of the form intro page and the first page of the form. One goal of this current research is to get user feedback on the revised design.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/research/2025-05-save-in-progress/images/2-a11y-issues-fix.png" width="50%" height="50%">

Previous research has validated the minimal header component, including its lack of "Back" button (research participants successfully used the "Back to previous page" breadcrumb link at the top of each page). Other research studies have tested various locations for the "Save in progress" alert, and subsequent research studies have documented usability and accessibility issues with those locations.

</details>

The **goals of this research** were to 
1. (primary) Learn about Veterans' expectations for saving information while filling out an online form before submitting it.
1. (primary) Get user feedback on design revisions for "save in progress" and "finish this request later" that reduce redundant messaging around saving.
1. (secondary) Get user feedback on error messages and the progress bar while filling out online forms.

Findings and recommendations from this research will **inform guidance and documentation for the "save in progress" feature** for authenticated users filling out forms on VA.gov. Matt Dingee asked ADE to help with this because some VFS teams are innovating new designs, whereas "save in progress" should be a standard pattern used by all teams.

In addition, user feedback collected on "finish this request later", error messages, and the progress bar will be helpful for accessibility specialists advising VFS teams.



## Research Questions

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

## Methodology 

We conducted **remote moderated usability testing** to observe research participants filling out an online form. The participants were logged in so that the information they entered was automatically saved before the form was submitted. We used a GitHub Codespace that is accessible to screen readers and screen magnifiers, which some of our participants were using.

Research sessions were conducted over Zoom on May 12-21, 2025. Sessions were 90 minutes long for Veterans using assistive technology (i.e., screen readers or screen magnifiers), and 60 minutes for Veterans not using any assistive tech. 

## Hypotheses and Conclusions


1. While filling out online forms, Veterans expect that their form data will be saved.

1. With the new design, Veterans are confident that their form data will be saved.

1. With the new design, Veterans will know how to resume filling out a form that they started previously.

1. When Veterans encounter error messages while filling out online forms, they are able to resolve the errors.

1. While filling out an online form, Veterans will notice the progress bar and find it useful.

> [!TIP]
> Place true or false statements in bold for easier scanability

- **Hypothesis Statement:** [Insert statement]  
  - **"Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”**  
  - Supporting evidence  

[Example Hypotheses and Conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#hypotheses-and-conclusions)


## Key Findings

*Summarize the 5–10 most impactful findings from your study.* 

> [!TIP] 
> Write findings as stand-alone insights that are easy to scan. For example:  
> - "Most participants used the search field to locate forms, often searching for 'veteran health.'"  
> - "Participants struggled with the secondary caregiver section on the form."  

[Example Key Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#key-findings)

1. Most participants (9 of 11) **didn't know that their information was being saved automatically with every edit**.
1. Most participants (x of 11) **didn't read either of the informational alerts about saving**.
1. ALL participants **tried the *Finish later* button and from that learned that their information was saved**.




## Details of Findings 

*Provide detailed descriptions and supporting evidence for each key finding.*  

**Finding 1: Most participants (9 of 11) didn't know that their information was being saved automatically with every edit.**
- 5 of 11 participants said that they wanted their information to be saved automatically with every edit.
  > *"I'm hoping it's saving constantly like [Microsoft] Word does every so many seconds" (p5)*.
- Most participants hoped or assumed that saving would happen after they clicked the "Finish later" (9 participants) or "Continue" button (7 participants). 
  > *"I don't remember reading anything that said your information is saved as you go, but that's usually what 'Continue' does" (p1)*.

  > "*'Finish later' is like a contract that says this stuff's gonna be here when I come back" (p1).*
- More than half of the participants (6 of 11) made assumptions about saving based on their previous experience with forms, not because of anything in the prototype.
  > *"I don't think you know it's gonna...automatically save or not" (p4)*.

  > *"In my experience, because I didn't manually request it to save, it doesn't save anything" (p11)*. 
- More than half of the participants (6 of 11) were worried about their session timing out and losing the information they entered. 3 of these participants hoped their work would be saved--one based on previous experience with VA forms--but didn't know whether that would happen.
- Some participants (4 of 11) wondered if their information would be saved if they logged out and then came back later. A couple participants tested this during their research session.
- Two participants said they expected a notification if saving was happening automatically, as one said that a social security form did, and another said that Microsoft Word does. 
- Only one participant was confident that her information would be saved because of her experience filling out VA forms.
  > *"When I fill out forms on va.gov...when you log back in or go back...it'll start you where you left off" (p4).*

**Finding 2: Most participants didn't see the informational alerts about saving, and the few who did, didn't remember what they said**.

- 7 of 11 participants didn't notice the informational alert on the authenticated form intro page, and 7 of 11 participants (including 6 of the previous 7) didn't notice it at the top of the first page of the form. When some of these participants were later shown the alert, they suggested making it easier to notice by making the text larger, red, or in a dialog box that you have to close.
- 4 participants who read the informational alert on the intro page before starting the form didn't remember it by the end of the session when they were asked about saving. One of the participants commented aloud after reading the alert but didn't remember this later:
  > *"We're gonna save it every time. So that's good. I can stop and come back as long as I sign back in" (p8).*
- When participants are opening the form from the intro page and filling out the form, they seemed to focus only on the form itself. 
  > *"My brain kind of skipped over what I read and went to the more important stuff...I've filled out a decent amount of these [online forms], and...because I'm used to it, I just go straight to answering questions" (p11).*

- 3 participants who read the alert didn't understand it as saving every edit automatically. They thought that it saved only when you clicked *Finish later* or *Continue*. 
  > *"So every time you put something in and you hit *Continue* or *Finish later*, it will save it for you, so you can pick up right where you left off instead" (p9).*
- 1 participant thought he understood the informational alert but was thrown off by the *Finish later* button. He also said that the wording "We'll save your request on every change" is curious, and the *Finish later" button is confusing, too:
  > *"'On every change' sounds like...only every time I go back and make a change to what I've already input" (p12).*

   > *"Maybe...if the button doesn't say 'Finish later'...something like 'Save and close', because what it's doing is actually closing the form...because it's already being saved as you go along...There's the other threat...does that mean I'm just canceling this form? So having 'save', there is the reassurance that this is gonna save the last thing that I input. And then it's gonna close the form" (p12).*


- WRITE THIS Issue with screen readers not reading the information alert on the first form page because it's above the H1
- WRITE THIS Issue with screen magnifer: P2 didn't notice alert at top of form b/c focused on fields to fill out and didn't see that part of the screen (b/c magnification)

- _Supporting data: ![text](link - add image to github folder and link here with .png)_  


**Finding 3: ALL participants tried the *Finish later* button and from that learned that their information was saved**.
- After the first time each participant clicked the *Finish later* button, they saw the "Your records request has been saved" message. Then when they returned to the form, they saw the information they had entered previously. This is how most participants learned that the *Finish later* button saved their information, and they (incorrectly) assumed that you had to click this button in order to save. 
  > *"I assume when it says 'Finish later', it does save what I've done so far. But that's an assumption...Okay, cool. It says that my personal record request has been saved" (p11).*
- The "Your records request has been saved" message appears to be well positioned because ALL participants read it, unlike the two informational alerts. It appears at a time that users have intentionally stopped filling out the form and are wondering whether their work will be saved.
- For the long break in filling out the form during the research sessions, 9 of 10 participants used the *Finish later* button--at least some because they were worried that their session might timeout and they would have to start over. One participant just left their browser open, which would have timed out if 30 minutes had passed but we didn't stop for that long during the research sessions. For the short break, 4 of 11 participants used *Finish later*, and the other 7 just left the browser open.
  > *"So maybe I hit finish later, because I don't want to start all over again...I think it's gonna save it. And then whenever I log back in, it should take me to the same spot" (p8).*
  
- One participant clicked *Finish later* accidentally and thought he was going to lose information entered, but then noticed that the form saved his work. He then assumed that his information was being constantly saved (not only when you click *Finish later*).
- A different participant asked why *Finish later* is needed when we already said that it's saving everything. This was the only (CHECK THIS!) participant who learned from an information alert that we are saving all the time and remembered that later.

**Finding X: All participants were able to resume their request after taking a short break and a long break**.
- Most participants (8 of 11) clicked on the *Continue your request* button in the informational alert displayed after clicking *Finish later*.
- The other 3 participants were able to continue by clicking on the *Continue your application* link on the "Application for personal records request" card at the bottom of the My VA page.
  - One of these participants noticed that the "Continue your application 
- 3 participants noticed that they were returned to the *page before* the one that they were on. This is because no information had been entered on the page they were on [a known issue], but they said that they would have preferred to come back to the actual (blank) page that they had been on.

**Finding X: Accessibility issues were discovered with My VA**
- One participant using a screen magnifier (on a Windows computer using the Edge browser and Microsoft Zoom Magnification at least 300%) asked why the **"Continue your application" link in the form request card on My VA was so much smaller than everything else on the card**. The link text doesn't seem to have scaled up like the text above it (see [image below](URL for p13-MyVA-form-card-bottom)).

**Finding X: Accessibility issues were discovered with the form**


---

## Additional Insights
*Include insights that do not represent patterns but are still valuable.*  
> **TIP:** These could be powerful user comments or unexpected issues worth noting


## Recommendations
### Recommendation: Revise the Save in Progress design
1. **Brainstorm how to display better communicate that we're saving all information as it's being entered or updated**. We need to revisit how we communicate what the form is doing so that we inform users without being annoying.
   - *Supporting evidence:* We're saving automatically with every edit, which participants asked for, but most didn't realize that was happening because they didn't see or understand the informational alerts.   
   - Consider the suggestions below:
      1. Messaging should be better integrated into the user's interaction flow with the form. It's possible that no messaging will be effective before the user has started filling out information, so we should find somewhere other than the intro page and the top of the first page of the form. Users may be more receptive to an alert that shows up later while they're editing or right after they click "Continue". 
      1. Messaging must be accessible to AT users so that all screen reader users will hear it, even if they start navigating form pages down from the H1. 
      1. Messaging could be reworded to lead with what's most important at the beginning to attract attention and ensure visibility to users of screen magnifiers. For example, "Saving will happen automatically..." or "Your information will be saved..."
      1. Messaging could be reworded for clarity, especially "We'll save your request on every change".
      1. Consider relabeling the *Finish later* button to better align with the revised messaging.
   

### Recommendation: Fix accessibility issues with My VA
#### My VA
1. My VA--Make the "Continue your application" link in the form request card scale up with magnification like everything else on the card already does.
    - *Supporting evidence:* One participant using a screen magnifier found it difficult to read this link because its font didn't magnify like all the other text on the draft form card.

#### Recommendation: Fix accessibility issues with Request personal records form

### Recommendation: Consider design revisions for Request personal records form
*Summarize actionable recommendations based on findings.*  

1. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_  
2. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_


### Recommendations: TBD

## Next Steps

*Outline immediate actions based on findings, including owners if applicable.*  


## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 

1. Check analytics for the existing "Finish this request later" link on VA forms to see how much it's being used. It would be interesting to see if changing this link to a button (as tested in this study) would result in more clicks/engagement.

## Appendix
[Research plan](./research-plan.md)

[Conversation guide](./conversation-guide.md)

[Interview notes](./notes)


## Tools used for Synthesis
[Synthesis spreadsheet](TBD)

[Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746465528913/8de22b81ea78a8e67d167bb339abd845a820a519)
  
## Pages and applications used

[Prototype](https://musical-space-goggles-7wxj74rqgvpfv9v-3001.app.github.dev/records/request-personal-records-form-20-10206/introduction?loggedIn=false)

#### Screenshots of the prototype in Codespaces
<details>
  <summary>First screen (Click to show screenshot)</summary>

  ![figma-mobile-first-top](./images/figma-mobile-first-top.png)
  ![figma-mobile-first-bottom](./images/figma-mobile-first-bottom.png)
  
</details>

<details>
  <summary>Menu open (Click to show screenshot)</summary>

  ![figma-mobile-menu](./images/figma-mobile-menu.png)
  
</details>

<details>
  <summary>Search open (Click to show screenshot)</summary>

  ![figma-mobile-search](./images/figma-mobile-search.png)
  
</details>


## Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


## Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.*  

## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

We talked to **x participants.**

Audience segment:
* Veterans: x 
* Caregivers: x 
* Family members of a Veteran: x  


Gender:
* Male: x 
* Female: x 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: x 
* Tablet: x 
* Smart phone: x 
* Assistive Technology: x


Age:
* 25-34: x
* 35-44: x
* 45-54: x
* 55-64: x
* 65+: x
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): x
* Associate's degree, trade certificate or vocational training: x
* Bachelor's degree: x
* Master's degree: x
* Doctorate degree: x
* Unknown: x


Geographic location:
* Urban: x
* Rural: x
* Unknown: x


Race:
* White: x
* Black: x
* Hispanic: x
* Biracial: x
* Asian: x
* Native: x


Disability and Assistive Technology (AT):
* Cognitive: x
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: x
* Hearing aids: x
* Sighted keyboard: x
* Captions: x


## Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)