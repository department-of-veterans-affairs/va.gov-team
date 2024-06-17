# **2024-04 CHAMPVA 10-10d Usability/Interviews Research Findings**

Office of the CTO - Digital Experience (OCTO-DE), Form 10-10d, IVC Forms Team

Date: 06/17/2024

Rachael Penfil (rachael.penfil@adhocteam.us), Steven Straily (steven.straily@agile6.com)

[Research readout](link here)

Jump to:

* [Hypotheses and Conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/1010d-research-report.md#hypotheses-and-conclusions)
* [Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/1010d-research-report.md#key-findings)
* [Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/1010d-research-report.md#recommendations)
* [Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/1010d-research-report.md#further-research-needed)
* [Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/1010d-research-report.md#who-we-talked-to)

## **Research Goals**

This study provided insight into the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA) program and unauthenticated digital flow  for the CHAMPVA application form (Form 10-10d). With this form, certain dependents and caretakers of disabled Veterans who don’t qualify for TRICARE can apply for CHAMPVA benefits. If awarded the benefits, CHAMPVA will cover the cost of some of the beneficiary’s healthcare services and supplies. While veterans may be familiar with the paper form and with CHAMPVA as a whole, the digital form was newly created during this effort.

The moments that matter within the Veteran journey are:

* **Starting up** - depending on their disability status and eligibility for Tricare, the Veteran and/or their family may qualify for benefits through CHAMPVA at this point in their journey
* **Putting down roots** - as the Veteran puts down roots, if they are qualified for CHAMPVA, they will need to revisit the application for their dependents over time. Veterans and their dependents who didn’t previously qualify for CHAMPVA may be eligible if the Veteran’s disability status changes.
* **Aging** - Disability status can change as Veterans age. Veterans or their dependents may become eligible for benefits through CHAMPVA as Veterans’ disability statuses change. There are moments in these scenarios where caregivers, dependents, adopted children, or step-children may be more likely to fill out the application on someone else’s behalf.

The overarching research goals for this project were:

* **Goal 1:** Test the usability of the current iteration of the 10-10d prototype.
* **Goal 2:** Test high-level accessibility for the current iteration of the 10-10d prototype.
* **Goal 3:** Extract insights about the participants’ experience with the current 10-10d process and CHAMPVA. 

## **Research Questions**

* When interacting with the prototype through a think-out-loud protocol, will users understand and navigate the digital form experience without significant issues?
* Through questions and observations, are there any major accessibility issues that can be identified at this point in the development process?
* With interview questions, is it possible to gather further information to produce service design insights and inform our related artifacts?

## **Methodology**

We conducted a mixed-method study with 13 participants (26 attempted recruits, 12-15 completes targeted), combining a usability study with a user interview. Research sessions took place via Zoom from April 15 - May 10, 2024. Participants completed 45-60 minutes of usability testing for [Form 10-10d on our staging environment](https://staging.va.gov/health-care/champva/apply-form-10-10d/introduction), utilizing the think-out-loud protocol to identify significant issues with the digital form. In the remaining 20-30 minutes, participants were asked a series of open-ended questions regarding their experience with CHAMPVA.

## **Hypotheses and Conclusions**

* Based on our understanding of current patterns and best practices for forms, the digital prototype of 10-10d will be easy to understand and navigate.
    * **Mostly true.** Most participants understood what the form was asking of them, and all participants were able to complete the form. However, the number of document uploads and the length of the form proved a challenge for some.
* Based on our understanding of accessibility best practices, we believe the 10-10d prototype will be free of significant accessibility issues.
    * **Not enough information.** We had only one assistive technology user in our study, and they used a Google Chrome text-to-speech plugin. Further research with assistive technology users is needed to assess the accessibility of the form.
* Users may be confused and frustrated when uploading files, especially with the current pattern around Medicare cards.
    * **Partly true.** Most participants noticed they needed to upload both the front and back of the Medicare card but were confused as to why both sides weren’t asked for separately in the content. Though the file upload pattern mostly worked well, some participants were confused by the placement of the “delete file” button and the lack of a confirmation message or feedback that their file had been successfully uploaded. The number of uploads also caused frustration.
* Our understanding of stakeholder research about the process leads us to believe that users who have applied for CHAMPVA through the existing process will highlight similar pain points (e.g., visibility of application status, lengthy processing time, frustration with the lack of available options to submit supporting documents digitally).
    * **Definitely true.** Participants who had applied for CHAMPVA discussed common pain points such as lack of visibility into application status, long processing times, lack of communication from CHAMPVA, and the complexity of the application. 

## **Key Findings**

1. Various usability issues were found through testing that should be taken into consideration.
2. Interactions with the other health insurance form (OHI, Form 10-7959c) PDF and its associated screen in the form flow were consistent points of frustration and confusion.
3. The file upload summary page created for this form was well-received, but participants demonstrated some confusion about the difference between “optional” and “required” documents.
4. Participants want proof/confirmation of their application submission.
5. Over half of the participants wanted information about what they would need to complete the application before they started filling out the form.
6. Half the participants wanted to check their eligibility before starting the form.
7. The address selector created for this form worked well, but participants wanted to see it earlier in the form.
8. Most participants had reasonable expectations around application processing time and communication but expressed a desire for improvement.
9. Participants started pursuing CHAMPVA benefits when they or their dependents had a lapse in insurance. They often learned about CHAMPVA by being close to the VA or through word of mouth.
10. The review and sign page generally worked well, though some users were overwhelmed by the amount of information (especially in the “Applicants” section).
11. Participants were frustrated when they had to enter the same information on the form more than once, such as providing images of Medicare cards and then re-entering the information that appeared on the card.
12. The list-and-loop pattern had confusing interactions and mixed alignment with the participant’s expectations.
13. The upload pattern was generally understood, but there were some issues with the delete file button and confusion when a screen asked for multiple required files.
14. Reactions about the ease of the digital form were mixed.

## **Details of Findings**


### **Finding 1**: Various usability issues were found through testing that should be taken into consideration.

These usability issues were compiled into a document of 28 [preliminary form improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/preliminary-form-improvements.md). These were [prioritized](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715951140109/d758e4e23ffc505d822726cd4ca660ea4c2a1d67?sender=u3844370d13a440a7859d3526) and handed off to product so improvements could be made by design and developers while full analysis was ongoing. 

### **Finding 2**: Interactions with the other health insurance form (OHI, Form 10-7959c) PDF and its associated screen in the form flow were consistent points of frustration and confusion.

Participants were initially confused about the page header on the OHI upload screen because it was shared with the previous screen, which contained the “Do you have other health insurance?” question. The OHI upload screen appeared regardless of what the participant answered regarding their other health insurance. Some participants who answered that they did not have other health insurance (OHI) were confused about why they were still being asked to provide information about it on the next page and form 10-7959c. Most participants were able to follow the instructions on the page once oriented and downloaded the PDF; many wanted to make sure it was typable so they could fill it out on their device and upload it. 8 of 13 participants were confused and/or frustrated by the interaction and process surrounding the 10-7959c PDF. At least two participants mentioned they would stop filling out the form and contact a VSO or the VA call center due to being overwhelmed by the amount of additional information required on the PDF. In addition, most participants expected them to have this information as part of the application process or to be accessible through other VA systems.

> **P3:** "Didn't we already upload this?" referring to the 10-7959c PDF.

> **P2:** “My experience and the experience of others - hey we just need to verify your OHI - they have the application - they don't need it, they've got it. I have a feeling that CHAMPVA can know I have OHI - I expect that they would sit on my application until I called to check on the status.”

> **P26:** “This extra form seems like it should be for Tricare, like if you have Blue Cross, Blue Shield, or something.”

### **Finding 3**: The file upload summary page created for this form was well-received, but participants demonstrated some confusion about the difference between “optional” and “required” documents. 

Participants demonstrated some confusion when it came to different documentation being labeled optional versus required.

Despite the confusion, the file upload summary page was generally well received. The confirmation checkbox that informed the participants that they would need to mail the remaining required documents for their application to be considered complete served its purpose of slowing them down and motivating them to consider the implications of mailing information. Most participants mentioned that they would go back and upload anything they had skipped previously.

> **P9:** "And that's where I have a problem with a lot of VA things: they're not clear what they're expecting when there are two options." - “I would still need to send the required documents in order for them to process the application. Which is what I would have expected.” - "And it says I can send it later, but I'd probably upload it now"

> **Pilot:** “What are these optional documents being used for? It feels weird that they're optional…. It felt required because it was in there with everything else.”

> **P3:** "I like that," "That makes it helpful," "That's pretty cool" on the file upload summary page

### **Finding 4**: Participants want proof/confirmation of their application submission.

Participants said they would screenshot the submission confirmation page, and some would also print it for their records. Many expressed a desire for a confirmation email including the details of their application and an estimated date by which they’d receive a decision, especially those who don’t have a printer. Some expected the confirmation page or confirmation email to include a confirmation number in case they needed to follow up on their submission.

> **P11:** "[I] would assume there'd be a confirmation number if this was real."

> **P3:** "Does an email confirmation come to you as well?”

> **P22:** “I don't know why there isn't a confirmation number listed.”

> **P13:** “I should get a follow up email confirming that I’ve submitted my application. It might give me some type of an ID number to track it, or if I wanted to call in and check the status.”

> **P10:** “I would have printed the page.”

### **Finding 5**: Over half of the participants wanted information about what they would need to complete the application before they started filling out the form.

8 out of 14 participants wanted to know what documents or additional information they would need to complete the form successfully. They wanted lists of required documents so they could gather them before beginning the application, as well as an FAQ or other preparatory info so they would be prepared with the information the form needs. Participants stated this would reduce their anxiety and help them feel more confident when filling out the form. 

> **P26:** "I'm a 'prepare' kind of person."

> **P13:** "Anything that I can know up front [is important information.]"

> **P1:** “[I want to have] a good understanding of the requirements, and just really any kind of documents we need, or any kind of preliminary documents. Just so that you’re fully prepared and go into the application [ready to start] uploading and submitting everything.”

### **Finding 6**: Half the participants wanted to check their eligibility before starting the form.

7 out of 14 participants (including 4 out of 6 Veterans and 3 out of 8 family members) stated they’d check their eligibility before starting or actually attempted to do so during the test. Most found the eligibility language confusing, and some participants even started to second-guess their eligibility after reading it. 

Some participants also expected to be able to start the form while on the eligibility page.

> **P3:** “Is it anything helpful... is it something I can apply for? Some of this can get very confusing."

> **P26:** "[Seeing this eligibility prompt] makes me second guess myself now."

> **P11:** “How would I know if I'm not eligible for Tricare if this is my first time looking at it?”

### **Finding 7**: The address selector created for this form worked well, but participants wanted to see it earlier in the form. 

Participants appreciated that they could use the newly-created drop-down address selector to populate an address entered for the first applicant and subsequent applicants on the form. However, they also wanted the ability to re-use the Sponsor’s address for the first applicant. Multiple participants mentioned they had the same address as their Sponsor, as well as other applicants they would include on the form.

> **P3:** "Many times [the address] would be the same, if you were a family."

> **P12:** "I would think it would ask... so I wouldn't have to add the same address I just added. "

> **P10:** “And now I am doing the street address AGAIN, and where they are sending information to.”

### **Finding 8**: Most participants had reasonable expectations around application processing time and communication but expressed a desire for improvement.

Most participants expected it would take 4-8 weeks to process their CHAMPVA application. The participants, for the most part, did not expect confirmation or communication of the status. Instead, most of them expected to get a letter in the mail after 4-8 weeks, asking them to provide additional information or giving them the application result. However, participants overwhelmingly expressed a desire to have more communication from CHAMPVA and to know the status of their application. Most participants who expressed interest in status updates stated that email was their preferred method to receive them.

> **Pilot:** “That is very disconcerting to me, not having any expectation [on when I’ll hear back.]”

> **P3:** "I wouldn't be surprised if it took them 6 months to get back to me."

> **P21:** “I guess this is just a waiting game.”

> **P10:** “[I expect that] eventually, I would get a letter saying they denied it, and then they would tell me they need some more stuff.”

> **Pilot:** “I didn’t know how long it was gonna take to get CHAMPVA, and so I completely timed it wrong… My health insurance was due to run out in [November] from TRICARE…. I applied for CHAMPVA finally in October… I realized it was going to take 8 weeks ... .Those expectations matter because I was without health insurance for a month, because I didn’t know upfront how long this process was gonna take.

### **Finding 9**: Participants started pursuing CHAMPVA benefits when they or their dependents had a lapse in insurance. They often learned about CHAMPVA  by being close to the VA or through word of mouth.

Most participants learned about the CHAMPVA program through a close relationship with the VA or communication with other Veterans or their family members. A small number of people learned about it from TAP (Transition Assistance Program) or the disability benefits packet that they received after reaching a 100% P&T (permanent and total) disability rating. The majority of participants explained their motivation for applying was to provide health insurance to family members after separation or between the time when they stopped working and became eligible for Medicare. In conversation, many participants mentioned that they would not expect to have learned about CHAMPVA outside of their unique circumstances and feel there should be more outreach from the program to potential beneficiaries.

On a related note, CHAMPVA is not health insurance but is instead a cost-sharing healthcare benefits plan. However, many beneficiaries view it as health insurance. This demonstrates a disconnect between CHAMPVA's actual services and beneficiaries' understanding of those services.

> **P20:** "I found about CHAMPVA through the VA system -- somebody at the Boston VA."

> **P10:** "I wanted to be sure I had insurance."

> **P5:** “I heard about it from somebody at the Houston VA.”

### **Finding 10**: The review and sign page generally worked well, though some users were overwhelmed by the amount of information (especially in the “Applicants” section). 

Participants appreciated the opportunity to review their information and edit it on the same page.<sub> </sub>Some participants said they’d expand the accordions and review the information they’d put in carefully before submitting. However, others said they were so meticulous when initially entering the information that they wouldn’t feel the need to check again on the summary page.

There is a bug on the page where uploaded documents don’t appear in the correct summary section, which participants were bothered by.

> **P3:** "I like that you can click it, go edit, and add in the stuff you were missing.”

> **P11:** “That's a lot to look at on one page.”

> **P5:** “Your standard review of everything. Making sure everything’s correct.” The review page seemed to align with participant’s expectations

### **Finding 11**: Participants were frustrated when they had to enter the same information on the form more than once, such as providing images of Medicare cards and then re-entering the information that appeared on the card.

Participants expressed annoyance when they had to provide information in multiple ways or multiple formats. They were confused about why they would need to enter all the information when they were already providing files that included it. Some participants noted that they believe the VA should already know much of the information the form asks for, including their marriage status and any dependents. They expressed irritation that they had to provide the information again.

> **P26:** "Not to be crass or anything, but the VA should already know that I'm married."

> **P12:** “If I’m a Veteran at 100% permanent and total, then why do they need my Medicare information?”

> **Pilot:** “It is my assumption as a military spouse that the government owns my health records; the government has all this information on me basically.”

### **Finding 12**: The list-and-loop pattern had confusing interactions and mixed alignment with the participant’s expectations.

The participant’s preconceptions of the [old (replaced June 2024) list-and-loop pattern’s](https://web.archive.org/web/20231004171510/https://design.va.gov/patterns/ask-users-for/multiple-responses) behavior seemed to be mixed when compared to how the pattern actually worked. Some participants mentioned they would expect or prefer everything to be on a single page or to be capable of inputting information for multiple applicants at once. Participants often completely overlooked the “Add applicant” button for the list-and-loop when it first appeared in the flow. The participants also expected feedback from the form after they added the second applicant, a confirm button that collapses the fields, and an alert or some other feedback to let them know their input was successful. The current pattern of clicking the continue button after inputting the second applicant’s information did not seem to align with the participant’s mental models.

> **P1:** “It would be more helpful if both applicants were on the same screen.”

> **Pilot:** “It makes me a little bit nervous; I'd like more validation that the file has been uploaded.”

> **P12:** "No, I actually didn't. I breezed right past [the ‘Add another applicant’ button.]”

> **P11:** "[The ‘Add another applicant’ button was inconspicuous."


### **Finding 13**: The upload pattern was generally understood, but there were some issues with the delete file button and confusion when a screen asked for multiple required files.

The upload process seemed to align with most participants' mental models. There was roughly a 50/50 split between participants who mentioned they would scan documents into their computer versus those who mentioned taking a photo with their mobile device. Researchers observed issues regarding the delete file button and when participants had to upload multiple files on the same screen. 

The delete file button is something that participants were drawn to after uploading a file. Participants expected some sort of confirmation button or feedback for a successful upload, and the delete button was often the first place their attention was drawn. This could cause confusion and unintentional deletion of uploaded files when users interact with this pattern.

When moving through the exercise of uploading the front and back of the Medicare card, many participants were either surprised by the fact that the back would be required as well or completely ignored it. This could cause problems with incomplete information being submitted when the form is live, and users interact with this pattern.

> **P11:** “I mean, it makes sense once you read it.” (regarding the uploads of the Medicare cards after failing to notice that they needed to upload front and back.)

> **P1:** “What I am a little confused about here if I was uploading this [Medicare card]. So I see here that there's two options, the front and the back parts of [the] Medicare Parts A or B card. I’m assuming that I have to upload both the front and the back image of the card. I guess that’s something that's confusing about this, thinking about other applications or things that I've submitted. Normally, when I select, for example, front, there would be something here that would confirm, a little checkmark would come, or something. Because I do see here, upload another file, but it just seems so removed from this.”

> **Pilot:** "[Two visible cancel buttons] feels a little clunky to me." 

### **Finding 14**: Reactions about the ease of the digital form were mixed.

Some participants found the form streamlined and simple to complete but felt others would have more difficulty than they did. Some participants expressed they were intimidated or annoyed by the document upload and additional form requirements and would seek help completing the application. 

Most participants didn’t estimate how long the form would take if they were going through it in real life but were curious to see an estimate of how long stakeholders expected it to take. P13 felt it would take 45 minutes to an hour.

> **P20:** "I thought it was a straightforward application if you follow the steps."

> **P3:** "I could see this getting dicey for some people."

> **P10:** "It's my nature to study a lot, but I think it would be difficult for most people."

## **Additional Insights**

### **Additional Insight 1**: Most participants understood the term “Sponsor,” but inattentiveness and assumptions led users to input information in the wrong place. 

The majority of participants (9 of 13) seemed to have no trouble understanding the term “Sponsor” and entering the correct information for the context. For the remainder of the participants, observation uncovered potential reasons from inattentiveness, assumptions based on the flow of the form, and unfamiliarity with the term itself. Some participants were observed assuming their information would be the next thing they entered after answering the initial question regarding which group of users they belonged to.

> **P1:** “I thought my information would be first because I selected that I was filling it out for myself.”

> **P12:** “I'm the sponsor of others receiving the benefit - under me being the Veteran.”

> **P13:** “This would be the Veteran or service member I'm connected to.”

### **Additional Insight 2**: Most participants attempted to sign in and assumed there were a number of benefits in doing so.

11 out of 14 participants (all 6 Veterans and 5 out of 8 family members/caregivers) either attempted to sign in or said they would attempt to sign in under normal circumstances. Notably, 3 of the 5 family members who said they’d sign in specifically mentioned that they would sign in with their Sponsor’s account.

Participants assumed that a few benefits would come with signing in; the VA would pre-fill information for them in the application, and they would be able to save their application in progress and come back to it at a later time.

> **P26:** "They want me to sign in probably, otherwise [the application] might not be saved."

> **P12:** I've done this before, I'm a Veteran... [I’d log in to] the VA. That way I don't have to enter in my information again."

> **P3:** “I would have signed in if I was doing this for real.”

> **P5:** “I think it would be easier to see, have you applied for the VA health care before, sign in, check your application status, check your eligibility and stuff. I'm assuming it's gonna pull up my already completed paperwork and my disability claim. So I would hope that it's going to be able to.”

### **Additional Insight 3**: Participants expressed that they would use their own discretion to determine what contact information to include for each applicant; age normally informed their reasoning. 

Most participants stated that if another applicant on their form were a minor child, they would enter their own contact information for that child. If the applicant on the form was above the age of 18, they would enter that applicant's contact information. A few participants stated they wouldn’t enter someone else’s contact information without knowing how it would be used and asking for that person’s permission. There was some confusion about what to do if the applicant was under 18 but didn’t live with the Sponsor.

> **P10:** "I would have given [my contact info. My adult (18+) daughter] wouldn't [be familiar] enough with what I’m doing to be able to answer a phone call.”

> **P12:** “If it's a minor I wouldn't think it would go to them, but if they were over 18 it would.”

> **P26:** Veteran participant - “I already did mine [contact info]. So yeah, I would probably have done my wife's right.”

### **Additional Insight 4**: Participants expressed a higher degree of confidence in the security of the online application (especially if signed in) than in the mailed application.

Participants felt that filling out an online form was more secure than sending information through the mail, especially if they were signed in. However, they still expressed worry about the safety of their information, especially Social Security numbers and other PII. Some participants stated that they wouldn’t upload optional documents because they wanted to minimize the amount of information about them “floating around” due to privacy concerns. Some also said they wouldn’t enter email addresses or phone numbers if they didn’t need to due to their worry about spam and scam calls.

> **P13:** "I feel that [the digital application] is more secure [and faster.]"

> **P10:** "I don't like to give any more information that I need to. It's a privacy thing for me."

> **P3:** "The less information that is being floated around somewhere the better."

> **P11:** "[Using my Social for everything] has been frustrating, but I'm used to it." 

### **Additional Insight 5**:  Most participants were unfamiliar with or did not use a VA file number. 

Most participants said they’d enter the Veteran’s Social Security number instead. Participants expressed confusion when asked for VA file numbers for dependents.

> **P11:** "I have no clue what a VA File Number would be."

> **P26:** "To me it means Social, but technically, I think it's different."

> **P5:** “Honestly have no idea. I thought it was a different way for them to not say it's our social security number. Regarding the VA file number”

### **Additional Insight 6**: Using their browser’s native auto-fill functionality was important to some participants.

5 participants explicitly tried to use their browser’s native auto-fill tool because it made filling out the application easier and quicker for them. However, the staging environment we tested in did not accept browser autofill or caused error messages.

> **P13:** “I like the auto-fill option because it does make it a little easier."

> **P11:** “Yeah, I guess that was kind of annoying. Because I'm using auto-fill and it wouldn't automatically link to the abbreviation or take that.” discussing limitations of auto-fill on the form.

> **P26:** “It's pretty much that [makes filling things out more convenient]. I double-check, though.” when asked if why they use auto-fill.

## **Recommendations**

### Recommendation for Finding 1 

* Continue working through usability issues documented in the [preliminary form improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/preliminary-form-improvements.md).
    * As of 6/12/24, 5 of the 28 improvements either have been completed or are in the process of being completed.

### Recommendations for Finding 2

* Consider integrating the required information from 10-7959c into the 10-10d form flow to eliminate outside interactions and lessen the perception of burden.
* Continue conversations with stakeholders on what information is required at different stages of the process in the beneficiary’s journey within CHAMPVA to improve the overall experience and streamline the digital version 10-10d.
* In the future, consider recommending to stakeholders that the 10-7959c is only used for updates to insurance information in light of previous recommendations. This would also help reduce the burden of updating OHI and the perception of burden in the 10-10d (application).

### Recommendations for Finding 3

* Consider removing the “optional” and “required” language from uploads to help eliminate ambiguity.
* Make an effort to consider if any previous “optional” document uploads can reasonably be eliminated from the form flow.
* Consider continuing to present the upload summary page and the confirmation checkbox to help avoid incomplete submissions and delays in processing.

### Recommendations for Finding 4

* Explore solutions for providing a confirmation number.
* Consider including a confirmation number and a copy of what the user submitted in a confirmation email.

### Recommendations for Finding 5

* Present users with a list of documents, files, or other information they might need when filling out the application before they begin.
* Consider breaking the list of documents and files into categories, such as those that everyone will need and those that may be needed based on the user’s circumstances. This will allow users to decide what to gather before starting the application and help reduce confusion.

### Recommendations for Finding 6

* Consider revising the eligibility language so it is easier to understand.
* Consider allowing users to begin their applications from the eligibility page; don’t force them to go back to the main landing page.

### Recommendation for Finding 7

* Allow users to use the address selector to populate the Sponsor’s address into the addresses of all applicants.

### Recommendations for Finding 8

* Consider continuing to work toward solutions that will allow users more visibility into the status of their applications and claims through efforts like VA Notify integration, which is already in progress.
* Consider other current and future functionalities that could be expanded through different systems and products to continue increasing visibility and application status communication. Integration with VES and PEGA (two of the backend systems used by CHAMPVA application processors) could potentially provide numerous opportunities in this regard.

### Recommendation for Finding 9

* Continue looking for opportunities to digitally enable outreach for the program through VA.gov and its various products. This could involve initiatives such as advertising through one of the VA newsletters. Another avenue could be partnering with the disability claims team to request they reference CHAMPVA in some of their communications when Veterans file a claim or become 100% P&T.

### Recommendations for Finding 10

* Explore ways to reduce the cognitive load of reviewing the large amount of information on the review page.
* Continue allowing users to edit information on the review page.
* Address the “file upload” section bug.

### Recommendations for Finding 11

* In the future, explore technological solutions that will extract information from uploaded documents and place it in the right form fields for users to verify (for example, OCR [optical character recognition], which stakeholders have mentioned they did have access to in the past).
* In the future, explore ways to connect VA and other government systems on the back end so participants don’t have to enter information they’ve already given to the VA or that may be available through another government organization.

### Recommendations for Finding 12

* Consider adopting the new list-and-loop pattern for the form in the future. Also, consider testing the new pattern to see how it compares to the old one regarding mental model alignment.
* Consider ways to make the “Add Applicant” interaction more prominent. For example, use a screener question to start the list-and-loop instead.
* Consider adding visual feedback after a second applicant’s information is entered. This could be the addition of a “confirm” button that collapses the fields or potentially an alert that mentions the information was successfully captured, for example.

### Recommendations for Finding 13

* Consider adding data validation to ensure that users upload a file for both the front and back of the card in this situation.
* With other patterns requiring multiple documents or pieces of information uploaded in the same flow, consider adding similar data validation so that it isn’t easily overlooked.

### Recommendations for Finding 14

* Consider providing an estimated time to complete the application.
* In the future, look for ways to streamline the application and reduce additional uploads.
* Consider ways to highlight the existing helpline applicants can use when they are confused or get stuck.

### Recommendations for Additional Insight 1

* Consider providing a definition for the word “Sponsor” to compensate for edge cases.
* Alternatively, consider using and testing with the term “Service Member” or “Veteran” instead in the future.
* Ensure the conditional information in the form flow is logical. For example, if the user selects that they are a Veteran filling out the form on behalf of their dependents, the term “Sponsor” should not appear on the following pages.
* Consider the order in which information is requested or what signals and feedback are provided in the unauthenticated flow, depending on who the user is.

### Recommendations for Additional Insight 2

* Ensure the sign-in button is easy to find.
* Allow users to save their progress if they’ve signed in.
* Pre-fill as much information as possible when users have signed in.

### Recommendation for Additional Insight 3

* Explain how contact information will be used so users can enter the best information for their specific circumstances.
* Consider leaving the phone number and email address fields as they are currently as an option. Users seem capable of making choices for themselves reasonably in a way that meets business needs.

### Recommendations for Additional Insight 4

* In the future, explore connecting more backend VA systems so that users don’t have to submit as much PII with the application.
* Continue enhancing the security of the online application and VA.gov in general.
* Consider removing certain documentation requirements from the application if they’re not strictly necessary to minimize risk for applicants.

### Recommendations for Additional Insight 5

* Remove “VA file number” from dependent screens.
* Explain what a VA file number is and who might have one on the Sponsor information screens to prevent confusion. 

### Recommendation for Additional Insight 6

* Ensure that users are able to use their browser’s auto-fill tool.

## **Next Steps**

* Share information relevant to the program and potentially actionable with stakeholders. Continue to work with stakeholders on interim solutions to give beneficiaries more visibility into the status of their application.
* Make content modifications based on the observed interactions. These changes are already underway.
* Investigate potential solutions for problems that need design input once they are prioritized. These changes are already underway.
* Continue pursuing opportunities to enhance the outreach capabilities, eligibility requirements clarity, and required claims submission documentation through OCTO’s capabilities and VA.gov.

## **Further research needed**

Research should continue moving forward to address the usability of the form (and overall CHAMPVA application) over time, ideally in a revised staging environment or live version of the form. In parallel with that research, user behaviors, perceptions, and pain points should also continue to be explored in order to help optimize the service and improve the overall experience of Veterans, family members, and caretakers interacting with CHAMPVA.

## **Appendix**

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/Research%20Plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/Conversation%20Guide.md)

[Interview transcripts](https://dvagov.sharepoint.com/:f:/r/sites/vaivc/Shared%20Documents/Forms%20Modernization/10-10D%20(Champ%20VA%20application)/Research/10-10d%20Transcripts?csf=1&web=1&e=BIuLkC)

## **Tools used for Synthesis**

[Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1712766096062/a4141cf44d7867853fb69698ea6003aa2216d5d4?sender=u3844370d13a440a7859d3526)

## **Pages and applications used**

[Form 10-10d - staging](https://staging.va.gov/health-care/champva/apply-form-10-10d)

## **Secondary research**

Stakeholder interview findings

[Preliminary form improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/Usability-Accessibility%20Test%20(April)/preliminary-form-improvements.md)

## **Who we talked to**

Recruitment criteria:

The intended audience for this research was Veterans whose dependents had applied for CHAMPVA benefits and dependents of Veterans who had applied for CHAMPVA benefits.

We talked to 13 participants. Our pilot participant was a dependent who had applied for CHAMPVA benefits, but we did not collect their demographic information. Therefore, we included them in our analysis but they are not reflected in the following demographic information.

Audience segment:

* Veterans: 6
* Family members/Caregivers of a Veteran: 7

Gender:

* Male: 4
* Female: 8
* Non-binary: 1

LGBTQ+:

* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1
* Gay, lesbian, or bisexual: 2 

Devices used during study:

* Desktop: 8
* Mobile: 5
* Assistive Technology: 1

Age:

* 25-34: 2
* 35-44: 4
* 45-54: 1
* 55-64: 2
* 65+: 4
* Unknown: 0

Education:

* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 3
* Bachelor's degree: 4
* Master's degree: 3
* Doctorate degree: 0
* Unknown: 0

Geographic location:

* Urban: 8
* Rural: 5
* Unknown: x

Race:

* White: 7
* Black: 1
* Hispanic: 0
* Biracial: 3
* Asian: 0
* Native: 0
* Not given: 2

Disability and Assistive Technology (AT):

* Cognitive: 6
* AT beginner: 1 (sort of - used a Google Chrome plugin)
* AT advanced user: 0
* Desktop screen reader: 1 sort of - used a Google Chrome plugin)
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

## **Underserved groups we haven’t talked to**

_[VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)<span style="text-decoration:underline;"> (master)</span>_

[Our completed spreadsheet](https://docs.google.com/spreadsheets/d/1Ae42llVPxKsPQx3ZP4-od-GrdF28UzZP-hQ_DH47uDY/edit#gid=1116550612)

This research does not include the perspectives of the following marginalized Veteran groups: 

* Veterans with other than honorable discharge
* Veterans of immigrant origin
* Expats
* Transgender users
* Assistive technology users
  
![screenshot of VA recruitment checker for equality for form 10-10d](https://github.com/department-of-veterans-affairs/va.gov-team/assets/147765613/e6c31d69-e247-45d2-899f-b1d1bdae7d9f)  
