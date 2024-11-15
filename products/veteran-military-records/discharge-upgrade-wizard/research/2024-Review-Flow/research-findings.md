# Research Findings: Discharge Upgrade Wizard Usability Testing 

**Office of the CTO - Digital Experience (OCTO-DE), Discharge Upgrade Wizard, Sitewide Public Websites**

Date: 11/14/2024

Jordan Wood [jordan.wood@civicactions.com]

[Research readout](When available)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
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
   - LIKELY TRUE: Most participants didn't comment on additional questions being asked, but were able to edit questions with ease. Some participants noticed the alert on question pages that indicated more may be asked.
3. Veterans will understand the updated review page and how it relates to the questions they answered.
   - LIKELY TRUE: Most participants didn't comment on updated answers on the review screen and continued to the results page with no questions. Some participants noticed the alert on the review page that their answer was updated.
4. Veterans will understand how their answers relate to their results.
   - MOSTLY TRUE: Most participants understood the purpose of the results page and the information it provided. One participant expressed that the information on the page was very general and not specific to the discharge upgrade reason they gave.
5. Veterans will find the content of the questions relevant to their understanding of a Discharge Upgrade and how it applies to them.
   - MOSTLY TRUE: Most participants didn't comment on the questions or felt that they were clear. Some participants found a couple of the questions confusing or lacking information.

## Key Findings

1. All participants were able to navigate the edit flow.

2. Most participants understand that they may be asked to answer additional questions.

3. Most participants understand the updated review page and how it relates to the questions they answered.

4. Some participants found the questions confusing or lacking information.

5. Some participants commented on the amount of content on the results page.

6. Some participants wanted an alternative submission process.

7. Some participants wanted clearer information on the results page.

## Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords/labels to your findings** selected from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc). Adding keywords/labels to your findings will help others find research relevant to their work._


**1. All participants were able to navigate the edit flow.**

Labels: label 1, label 2 

- All participants were able to edit questions with no difficulty.
- All participants understood how to navigate the Back/Continue button functionality when editing answers.
- Three participants weren't asked to complete the task where they needed to use the Back button after editing an answer, but had no difficulty navigating the wizard in general.

> "That's super easy." (p11)

> "It’s worded very well and like I said, you click on a page and it's not just a bunch of questions all clumped together. There's a section and then you click continue and so on and so forth. Then, like you showed me with the review, you can click back and fix your answers if they were wrong. So things very good." (p4)

Most participants were asked to edit the answers to two questions. 
- The first task asked participants to edit their year of discharge to 2009. Editing the year to 2009 reveals one new, additional question asking their month of discharge. All participants were able to complete this task.
     - One participant had already selected 2009 when answering the question the first time. This participant was asked to edit their year of discharge to 2010. They didn't comment on the alert or the month of discharge question no longer showing on the review screen.
- The second task asked participants to edit their answer to say that they **have** previously applied for and been denied a discharge upgrade for their period of service. Editing this answer reveals 1-3 new, additional questions. During the task, the participant was asked mid-flow to go back to a previous question and change the answer. This tested the Back/Continue button functionality while going through the edit flow. All participants were able to complete this task.
     - Three participants weren't asked to complete this task due to their answers to other questions in the wizard. Due to branching logic, this changed the amount of questions they saw and the Back button couldn't be tested. However, they had no difficulty navigating the wizard in general.

**2. Most participants understand that they may be asked to answer additional questions.**

Labels: label 1, label 2 

- Most participants didn't comment on additional questions being asked, but were able to edit questions with ease.
- Four participants noticed the alert on question pages that indicated more may be asked.

> "So it does say here, 'changing your answer may lead to new set of questions', which would be no problem." (p5)

![Screenshot 2024-11-15 at 1 19 18 PM](https://github.com/user-attachments/assets/5c520e40-a3f9-4567-8d0e-383559b7f40b)

When selecting an answer to edit on the review screen, this alert will appear on any the intial question. New questions that show after selecting Continue don't have this alert. Only one participant opened this alert to reveal additional text that read "If you change your answer to this question, you may be asked for more information to ensure that we provide you with the best results."

Most participants were asked to edit the answers to the two questions described in Finding 1. Editing the answers caused 1-3 additional questions to appear in the flow. 
- Three participants noticed they had to answer additional questions. 
- One participant noticed that they were being asked the "Did you complete a period of service in which your character of service was Honorable or General Under Honorable Conditions?" question that appears at the end of the flow again. 

> "It goes back to one of the questions we answered. I guess that changed the whole outcome of it." (p5)

**3. Most participants understand the updated review page and how it relates to the questions they answered.**

Labels: label 1, label 2 

- Most participants didn't comment on updated answers on the review screen and continued to the results page with no questions.
- Four participants noticed the alert on the review page that their answer was updated.
- One participant would like to be able to save their answers. 

> After seeing alert on review screen: "See, that answers my question about my information being saved." (p5)

> After seeing alert on review screen: "So that was updated." (p4)

> After screen reader read the alert on the review screen: "It just told me my information was updated." (p7)

> "Will this page be saved? So I can just come back and wouldn't have to do the process over again because that could be frustrating." (p5)

![Screenshot 2024-11-15 at 3 04 49 PM](https://github.com/user-attachments/assets/6d3116b6-e2ca-4117-912c-d26be33a7bf9)

This alert appears on the review screen after an answer has been edited. Although four participants noticed this alert, none of them opened it to reveal additional text. 

**4. Some participants found the questions confusing or lacking information.**

Labels: label 1, label 2 

- Two participants wanted to select multiple reasons for changing discharge paperwork.
- Three participants were confused by the prior service question.

> "So I wanted to put that, but also put this right here, but it only lets me choose one. That's kind of frustrating." (p6)

> "There were three different things why I had requested to upgrade. So I guess I would have to make the distinction of what I felt was most important. But if I picked the wrong one, then maybe that process would have been delayed even longer or might not have gone through." (p10)

> "I might try to get help for somebody to explain [prior service question] to me" (p5)

![Screenshot 2024-11-15 at 3 32 15 PM](https://github.com/user-attachments/assets/b8509cd0-d9de-451b-aca1-1d93d7b1f60f)

Two participants wanted to select multiple responses to this question. One of the participants remembered being able to select multiple reasons on the form when they had applied for a discharge upgrade in the past and was confused why they couldn't select multiple reasons now. 

![Screenshot 2024-11-15 at 3 31 35 PM](https://github.com/user-attachments/assets/ab429c62-35eb-45b4-ba32-1f08ae2063d1)

Three participants found this question confusing. One of those participants pointed out that they previously had a character of service that was General Under Honorable Conditions. They noticed the word "general" in the question, but became confused when they didn't see the word in any of the answers. The other two participants found the wording confusing in general, but did were able to answer the question. 

**5. Some participants commented on the results screen content.**

Labels: label 1, label 2 

- Three participants said there was too much content on the page.
- Two participants said they wanted more info on buddy statements.
- One participant expressed that the info on the page was very general and not specific to the discharge upgrade reason they gave.

> "It's a lot to take in." (p12)

> "It's a long page, so maybe if there was a way to collapse more of the page to bring it down. it can kind of be a word wall without that ability to collapse it." (p14)

> "I would print this page just for my information." (p11)

Three participants said there was too much content on the page. 
- One participant used a screen reader (Speechify) to help break down the content on the page and reduce the cognitive load. This participant only used the screen reader on the start and results screens. They didn't need to use it on the question or review screens, indicating that the content on those pages wasn't overwhelming.
- Four participants said their next step would be to print out the page. This could indicate that there is too much information to digest at once. 

![Screenshot 2024-11-15 at 4 51 38 PM](https://github.com/user-attachments/assets/1ca62f3f-50c8-4bbc-b78f-1f4784b1968b)

> "I know for a fact that buddy statements carry a lot of weight. I know that because I had couple with my disability claim. They carry a lot of weight but it doesn't really say that in here." (p3)

Two participants said they wanted more info on buddy statements. 
- One participant wanted examples of written buddy statements and an estimate of how many were needed.
- One participant wanted more emphasis on how improtant buddy statements are. 

One participant expressed that the info on the page was very general and not specific to the discharge upgrade reason they gave.

> "I guess it's helpful if you're starting out at square one and have no idea what you're doing. By this point, most Veterans, at least most Veterans who are under the age of 50, have already visisted online forums or went to their local VFW or American Legion and have already got direction and paperwork from someone else that does this for them." (p3)

---TBD---

**6. Some participants wanted a different submission process.**

Labels: label 1, label 2 

- Three participants wanted to submit their form online instead of mailing it in.
- Three participants said the form would be difficult to fill out. One participant expressed frustration that the answers they gave in the wizard didn't help fill out the form.
- Three paricipants would like more communication about the process after submitting their form.

> "This would be a lot of work."

> "It's too bad that you can't do it online." (p4)

> "Most vets don't trust the mail. There's been too many things getting messed up in the mail for us." (p3)



## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._

## Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Recommendation 1
    * _Supporting evidence_
* Recommendation 2
    * _Supporting evidence_


## Next Steps

_Next steps here. Include owners if appropriate._


## Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


## Appendix

[Research plan](link here)

[Conversation guide](link here)

[Interview transcripts](link here)


## Tools used for Synthesis

e.g. mural boards, etc.  


## Pages and applications used

Link to prototypes or pages that were tested


## Other supporting documents created

e.g. user flows, personas, etc.


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.


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
