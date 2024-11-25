# Research Findings: Discharge Upgrade Wizard Usability Testing 

**Office of the CTO - Digital Experience (OCTO-DE), Discharge Upgrade Wizard, Sitewide Public Websites**

Date: 11/14/2024

Jordan Wood [jordan.wood@civicactions.com]

Research readout (when available)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Who we talked to](#who-we-talked-to)


## Research Goals
The Discharge Upgrade Wizard is part of the unauthenticated experience and uses a wizard pattern to guide Veterans through an optimized series of questions to help them determine how to apply for a discharge upgrade. 

There are many potential touchpoints between the Veteran and this application throughout the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

- Getting out (Engaging VA to access benefits and services)
- Starting up (Attending to health needs)
- Taking care of myself (Recognizing and addressing mental health needs, Managing primary care and chronic health issues, Seeking support for an acute health event, Maintaining my health)
- Retiring (Taking care of my health, Finding additional sources of income)
- Aging (Managing my declining health, Planning for long term care)

The purpose of this research is to find out whether we’ve met these goals:

- Veterans can understand how to edit an answer that introduces branching logic and navigate back to the review page.
- Veterans can understand why they may be asked additional questions when editing an answer to a particular question.
- After editing a question, updates to the review page are clear and easy for Veterans to understand.
- Veterans can navigate through the entire flow using the subtask pattern with ease.
- Veterans that use assistive technology, like screen readers or screen magnifier technology, can navigate through user flows with ease.

## Research Questions

1. What feedback do Veterans have on editing questions with branching logic?
2. What feedback do Veterans have on the entire edit flow?
     - Alerts on question and results pages
     - Back and Continue button functionality
3. What feedback do Veterans have after the review page has been updated with new questions and answers?
4. Do Veterans understand how their answers relate to their results?

## Methodology 

We conducted remote moderated usability testing over Zoom from October 22-November 7, 2024 to observe research participants using the Discharge Upgrade Wizard in a live coded environment (staging) with the updated sub task pattern. This allowed us to use the current branching logic and our experimental edit flow pattern.

## Hypotheses and Conclusions

1. The edit flow is simple enough for Veterans to understand and the actions in this flow are what they expect.
   - TRUE: All participants were able to navigate the edit flow with no difficulty. 
2. Veterans will understand that they may be asked to answer additional questions.
   - LIKELY TRUE: Most participants didn't comment on additional questions being asked, but were able to edit questions with ease.
3. Veterans will understand the updated review page and how it relates to the questions they answered.
   - LIKELY TRUE: Most participants didn't comment on updated answers on the review page and continued to the results page with no questions.
4. Veterans will understand how their answers relate to their results.
   - MOSTLY TRUE: Most participants understood the purpose of the results page and the information it provided. One participant expressed that the information on the page was general and not specific to the discharge upgrade reason they gave.
5. Veterans will find the content of the questions relevant to their understanding of a discharge upgrade and how it applies to them.
   - MOSTLY TRUE: Most participants didn't comment on the question content or gave feedback that they were clear. Some participants found a couple of the questions confusing or lacking information.

## Key Findings

1. All participants were able to navigate the edit flow.

2. Most participants understand that they may be asked to answer additional questions.

3. Most participants understand the updated review page and how it relates to the questions they answered.

4. Some participants found the questions confusing or lacking information.

5. Some participants had feedback on the results page content.

6. Some participants wanted an alternative submission process.

## Details of Findings 

**1. All participants were able to navigate the edit flow.**

*Labels: PRDT: Discharge-upgrade-wizard, DSC: Experimental, DSP: Sub-task, DSP: Wizards*

- All participants were able to edit questions with no difficulty.
- All participants understood how to navigate the Back/Continue button functionality when editing answers.

> "That's super easy." (p11)

> "It’s worded very well and like I said, you click on a page and it's not just a bunch of questions all clumped together. There's a section and then you click continue and so on and so forth. Then, like you showed me with the review, you can click back and fix your answers if they were wrong. So things are very good." (p4)

Most participants were asked to complete two tasks where they needed to edit their answers to questions. 
- The first task asked participants to edit their year of discharge to 2009. Editing the year to 2009 reveals one new, additional question asking their month of discharge. All participants were able to complete this task.
     - One participant had already selected 2009 when answering the question the first time. This participant was asked to edit their year of discharge to 2010. They didn't comment on the month of discharge question no longer showing on the review page.
- The second task asked participants to edit their answer from No to Yes for the "Have you previously applied for and been denied a discharge upgrade for this period of service?" question. Editing this answer reveals 1-3 new, additional questions. During the task, the participant was asked mid-flow to go back to a previous question and change the answer. This tested the Back/Continue button functionality while going through the edit flow. All participants who did this task were able to complete it.
     - Three participants weren't asked to complete this task due to how they answered other questions. Branching logic in this wizard changed the amount of questions they saw and the Back button couldn't be tested. However, they had no difficulty navigating the wizard in general.

**2. Most participants understand that they may be asked to answer additional questions.**

*Labels: DSC: Alert - Expandable, DSP: Wizards*

- Most participants had no feedback on additional questions being asked, but were able to edit questions with ease.
- Four participants noticed the alert on question pages that indicated more may be asked.

> "So it does say here, 'changing your answer may lead to a new set of questions', which would be no problem." (p5)

![Screenshot 2024-11-15 at 1 19 18 PM](https://github.com/user-attachments/assets/5c520e40-a3f9-4567-8d0e-383559b7f40b)

After selecting an answer to edit on the review page, this alert will appear on the chosen question. New questions that show after selecting Continue will not have this alert. Although four participants noticed the alert, only one participant opened it to reveal additional text that read "If you change your answer to this question, you may be asked for more information to ensure that we provide you with the best results."

> "It goes back to one of the questions we answered. I guess that changed the whole outcome of it." (p5)

> "Interesting that it only asked for the month when you changed the year to 2009." (p10)

Most participants were asked to complete two tasks where they needed to edit their answers to questions. Editing the answers caused 1-3 additional questions to appear in the flow (additional details are in Finding 1).
- Two participants noticed additional questions, but didn't comment on the alert. 
- One participant noticed that they were being asked the "Did you complete a period of service in which your character of service was Honorable or General Under Honorable Conditions?" question for a second time. This question reappeared for most participants that edited their answers. 

**3. Most participants understand the updated review page and how it relates to the questions they answered.**

*Labels: DSP: Help users know how their info is updated, DSP: Help users to check answers, DSC: Alert - Expandable, DSP: Form templates*

- Most participants understood the purpose of the review page, but didn't comment on updated answers. They were able to continue to the results page with no questions.
- Four participants noticed the alert on the review page confirming that their answer was updated.
- One participant would like to be able to save their answers.
- One participant wasn't sure where the Back button would navigate to.

> "I like the fact that I'm able to look and see the answers on one page that I've completed so far." (p8)

> After seeing the alert: "See, that answers my question about my information being saved." (p5)

> After the screen reader read the alert: "It just told me my information was updated." (p7)

![Screenshot 2024-11-15 at 3 04 49 PM](https://github.com/user-attachments/assets/6d3116b6-e2ca-4117-912c-d26be33a7bf9)

This alert appears on the review page after an answer has been edited. Although four participants noticed this alert, none of them opened it to reveal additional text. 

> "Will this page be saved? So I can just come back and wouldn't have to do the process over again because that could be frustrating." (p5)

One participant wanted a way to save their answers on the review page because they didn't want to answer the questions in the wizard again. 

> "[Back button is] a bit unnecessary on this page." (p12)

One participant wasn't sure where the Back button would navigate to. They were concerned it would take them to the beginning of the wizard, resulting in losing answers. After editing questions, they became more uncertain and wondered if it would take them to the last question in the wizard or the last question they edited. 

**4. Some participants found the questions confusing or lacking information.**

*Labels: PRDT: Content*

- Three participants were confused by the wording of the prior service question.
- Two participants wanted to select multiple reasons for changing discharge paperwork.
- Two participants noted that Space Force was missing from the list of military branch options.

> "I might try to get help for somebody to explain [the prior service question] to me" (p5)

![Screenshot 2024-11-15 at 3 31 35 PM](https://github.com/user-attachments/assets/ab429c62-35eb-45b4-ba32-1f08ae2063d1)

Three participants found the wording of the prior service question confusing. One of those participants pointed out that they previously had a character of service that was General Under Honorable Conditions. They noticed the word "general" in the question, but became confused when they didn't see the word in any of the answers. The other two participants found the wording confusing in general, but were able to answer the question. 

> "So I wanted to put that, but also put this right here, but it only lets me choose one. That's kind of frustrating." (p6)

> "There were three different things why I had requested to upgrade. So I guess I would have to make the distinction of what I felt was most important. But if I picked the wrong one, then maybe that process would have been delayed even longer or might not have gone through." (p10)

![Screenshot 2024-11-15 at 3 32 15 PM](https://github.com/user-attachments/assets/b8509cd0-d9de-451b-aca1-1d93d7b1f60f)

Two participants wanted to select multiple responses to why they wanted to change their discharge paperwork. One of the participants remembered being able to select multiple reasons on the form when they had applied for a discharge upgrade in the past. 

![Screenshot 2024-11-18 at 2 49 45 PM](https://github.com/user-attachments/assets/f58e969f-e917-4b42-8b5a-a4de1eecef63)

Two participants noted that Space Force was missing from the list of branch options. One assumed that Air Force would need to be selected instead. 

**5. Some participants had feedback on the results page content.**

*Labels: PRDT: Content*

- Three participants said there was too much content on the page.
- Two participants said they wanted more info on buddy statements.
- One participant expressed that the info on the page was very general and not specific to the discharge upgrade reason they gave.

> "It's a lot to take in." (p12)

> "It's a long page, so maybe if there was a way to collapse more of the page to bring it down. It can kind of be a word wall without that ability to collapse it." (p14)

> "I would print this page just for my information." (p11)

> "I don't know how to get back to the instructions without filling out the application all over again" (p12)

Three participants gave feedback that there was too much content on the results page. 
- Four participants said their next step would be to print out the page. This could indicate that there is too much information to digest at once. One participant wanted to be able to save the results page and instructions.
- One participant used text-to-speech software (Speechify) to help break down the content on the page and reduce the cognitive load. This participant only used the text-to-speech software on the start and results pages. They didn't need to use it on the question or review pages, suggesting that the content on those pages wasn't overwhelming.

![Screenshot 2024-11-15 at 4 51 38 PM](https://github.com/user-attachments/assets/1ca62f3f-50c8-4bbc-b78f-1f4784b1968b)

> "I know for a fact that buddy statements carry a lot of weight. I know that because I had couple with my disability claim. They carry a lot of weight but it doesn't really say that in here." (p3)

Two participants said they wanted more info on buddy statements. 
- One participant wanted examples of written buddy statements and an estimate of how many were needed.
- One participant wanted more emphasis on how important buddy statements are. 

> "I guess it's helpful if you're starting out at square one and have no idea what you're doing. By this point, most Veterans, at least most Veterans who are under the age of 50, have already visited online forums or went to their local VFW or American Legion and have already got direction and paperwork from someone else that does this for them." (p3)

One participant expressed that the info on the page was very general and not specific to the discharge upgrade reason they gave.

**6. Some participants wanted a different submission process.**

*Labels: DSP: Help users to keep a record of submitted info*

- Three participants wanted to submit their form online instead of mailing it in.
- Three participants said the form would be difficult to fill out. One participant expressed frustration that the answers they gave in the wizard didn't help fill out the form.
- Three participants would like more communication about the discharge upgrade process after submitting their form.

> "It's too bad that you can't do it online." (p4)

> "Most vets don't trust the mail. There's been too many things getting messed up in the mail for us." (p3)

![Screenshot 2024-11-18 at 9 36 23 AM](https://github.com/user-attachments/assets/8393b245-8855-434d-b51f-e15a26af9cc7)

On most of the results pages, the only option users are given is to mail in their paperwork. This is an example of what the information on the results page looks like, although the specific details and address varies depending on the answers selected in the wizard. Three participants wanted to be able to submit their form online instead. 

Other participants wanted more transparency after their form was submitted. They were uncertain how long the process would take and wanted updates throughout the process, like when their form was received. 

> "This would be a lot of work." (p8)

> ""It just gives me a blank generic DoD 149. It would be really damn cool if it actually filled in the parts we've already given you." (p3)

Three participants expressed concerns that the form was confusing, had a lot of content, and would be difficult to fill out on their own. One participant said that they would like to see information they inputted into the wizard on the form. 

## Additional Insights

**1. Assistive technology users were able to answer all questions and complete editing tasks.**
- This study had three participants who used assistive technology (one screen magnifier, one screen reader, one text-to-speech software). All three participants were able to navigate the sub task pattern, answer questions, and edit them. 

> "It's going to be accessible for a visually impaired Veteran." (p7)

**2. Assistive technology users had difficulty with the action link on the start page.**
- One participant using a screen magnifier missed this link.
- One participant using a screen reader believed that this was the bottom of the page.

**3. The sub task pattern was easy to use.**
- Participants noted that they liked the big buttons and seeing only one question per page. For the Discharge Upgrade Wizard specifically, they liked the simple yes/no or multiple choice questions in favor of needing any input fields.
- One participant used text-to-speech software (Speechify) to help break down the content on the page and reduce the cognitive load. They didn't need to use their text-to-speech software on the question or review pages, suggesting that the content on those pages wasn't overwhelming.

> "I like the big buttons and that it just gives you a little paragraph to work with at a time." (p4)

> “I think what worked well was the flow of the questions and how easy it was to answer the questions. There wasn't a whole lot of boxes requesting text.” (p12)

## Recommendations

### For wizard design and functionality
* Consider changing the year of discharge dropdown to an input field.
    * VA Design System guidelines suggest to consider a different component when there are more than 15 options in the dropdown.
    * [Guidelines for select component](https://design.va.gov/components/form/select)
* Consider allowing users to select multiple reasons for changing their discharge paperwork.
    * Two participants wanted to select multiple responses to why they wanted to change their discharge paperwork. One of the participants remembered being able to select multiple reasons on the form when they had applied for a discharge upgrade in the past.
* Consider how to condense content on the results page.
    * Three participants gave feedback that there was too much content on the results page.
    * One participant suggested collapsing content in an accordion or hiding content on the page would make it feel less overwhelming.
 * Consider how to emphasize the Get Started action link on the start page.
    * One participant using a screen magnifier missed this link.

### For wizard content
* Consider rewording the prior service question.
    * The prior service question asks "Did you complete a period of service in which your character of service was Honorable or General Under Honorable Conditions?"
    * One participant noticed the word "general" in the question, but became confused when they didn't see the word in any of the answers. 
    * Two participants found the wording confusing to this question.
* Consider adding Space Force to the list of branch options or state what to select instead.
    * Two participants noted that Space Force was missing from the list of branch options.
* Consider adding more information about buddy statements to the results page.
    * One participant wanted examples of written buddy statements and an estimate of how many were needed.
    * One participant wanted more emphasis on how important buddy statements are.
* Consider adding more information to the results page that's specific to the reason for wanting a discharge upgrade.
    * Three participants expressed concerns that the form was confusing, had a lot of content, and would be difficult to fill out on their own.
    * One participant expressed that the info on the page was very general and not specific to the discharge upgrade reason they gave.
    * One participant suggested adding boilerplate text that users can copy into the form to help them fill it out.

### For submission process
* Consider allowing users to submit the form online.
    * Three participants wanted to submit their form online instead of mailing it in.
* Consider how to update users on where they're at in the discharge upgrade process.
    * Three participants would like more communication about the discharge upgrade process after submitting their form.


## Next Steps

- Present readout to project stakeholders

## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/discharge-upgrade-wizard/research/2024-Review-Flow/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/discharge-upgrade-wizard/research/2024-Review-Flow/conversation-guide.md)

[Conversation guide for assistive technology users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/discharge-upgrade-wizard/research/2024-Review-Flow/conversation-guide-at.md)


## Tools used for Synthesis

- [Mural board observer notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726091853497/11d98e6ba53e1a738c258f67c2671a8e43d7908c?sender=u01810f3edbfc878c08be5925)

- [Mural board affinity mapping](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1729200163955/46aa9b3e2cfc9462b4fc8084a29cfcd6109e40ed?sender=u01810f3edbfc878c08be5925)

- [Synthesis spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/discharge-upgrade-wizard/research/2024-Review-Flow/DUW%20review%20flow%20data%20analysis.xlsx)


## Pages and applications used

[DUW on staging](https://staging.va.gov/discharge-upgrade-instructions/introduction)


## Secondary research

[Secondary research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/discharge-upgrade-wizard/research/2024-Review-Flow/secondary-research.md)


## Who we talked to 

**Recruitment criteria**

We talked to **10 participants.**

Discharge upgrade:
* Previously applied: 4
* Hasn't applied: 6 

Audience segment:
* Veterans: 10
* Caregivers: 0 
* Family members of a Veteran: 0  


Gender:
* Male: 6 
* Female: 3     


LGBTQ+:
* Transgender: 2 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1
* Gay, lesbian, or bisexual: 3


Devices used during study: 
* Desktop: 7 
* Tablet: 0 
* Smart phone: 3 
* Assistive Technology: 3


Age:
* 25-34: 0
* 35-44: 4
* 45-54: 1
* 55-64: 5
* 65+: 0
* Unknown: 0


Education:
* High school degree or equivalent: 1
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 2
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 9
* Rural: 1
* Unknown: 0


Race:
* White: 5
* Black: 1
* Hispanic: 0
* Biracial: 2
* Asian: 0
* Native: 1
* Unknown: 1


Disability and Assistive Technology (AT):
* Cognitive: 5
* AT beginner: 0
* AT advanced user: 3
* Desktop screen reader: 1
* Desktop text-to-speech software: 1
* Mobile screen reader: 0
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:

* Other than honorable
* Immigrant origin
* Expat
* Hispanic, Latino, or Spanish origin
* Asian
* Beginner AT User
* Mobile Screen Reader (SR)
* Speech Input Tech
* Hearing Aids
* Sighted Keyboard
* Captions
* Switch Device
* Braille Reader

![Screenshot 2024-11-25 at 2 01 53 PM](https://github.com/user-attachments/assets/42a59356-3a8d-47dd-9cd9-61520495baf1)


