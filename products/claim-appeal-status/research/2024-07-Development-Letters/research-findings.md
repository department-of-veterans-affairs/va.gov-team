# Evaluate development letter experience and improvements to 5103 notices

**Office of the CTO - Digital Experience (OCTO-DE), Benefits Management Tools**

Date: 09/10/2024

Gary Homidas gary.homidas@adhocteam.us, Skyler Schain skyler.schain@coforma.io


[Research readout](https://github.com/user-attachments/files/17247654/research-findings_evaluate-development-letter-experience-and-5103-improvements.pdf)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
1. Understand more about Veterans' experience with development letters today, including pain points and things that seem to be working.
2. Evaluate the efficacy of the new 5103 Notice design. 
3. Asses how well CST's tracked items "content model" for alerts works across a variety of different request types associated with development letters.
4. Identify pain points in the current development letters experience that we might help resolve with CST user experience improvements
5. Assess Veteran perception of the value and/or risks associated with electronic-only communications from VA

[See full research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-07-Development-Letters/research-plan.md)



## Research Questions

- Is it clear what Veterans are being asked to do? Is it clear how it relates to the 5103 Notice letter?

**Part 1: Understanding development letters experience**
- How do Veterans perceive and manage the letters they receive related to their claim?
- Do Veterans have clarity about what actions they need to take for their claim?
- What’s difficult about the letters Veterans receive about their benefits claims?
- What's helpful about the letters Veterans receive about their benefits claims?

**Part 2: Evaluate 5103 design (Prototype)**
- Are Veterans clear what the alert means and what they're being asked to do?
- On the document request page, what action are Veterans more likely to take?
- Are Veterans clear how the 5103 alert relates to the 5103 Notice letter?
- Can Veterans find the 5103 letter related to their claim?

**Part 3: Review other benefit letter types (Prototype)**
- Are Veterans clear what the alert means and what they're being asked to do?

**Part 4: Electronic-only communications**
- If they had the option, would Veterans like receiving only electronic communications like this?
- How would they configure these communications, if they had those options?


## Methodology 

We conducted hour-long remote moderated research sessions via Zoom

## Hypotheses and Conclusions

1. Veterans have had some confusing or frustrating experiences with development letters while their claim was being processed.

   - **MAYBE TRUE**: While most participants were generally satisfied with the level of detail in decision letters, some mentioned they would take their letters to the VA for guidance. Additionally, others expressed dissatisfaction with the vague status updates included in the letters.
   
2. There are opportunities to improve the experience of receiving development letters by including them in CST.

   - **LIKELY TRUE**: Most participants indicated they would prefer electronic-only communication for development letters, with some noting that it would reduce paper waste and allow them to receive letters more quickly than through USPS. 


3. The new 5103 design makes it clear to Veterans what the 5103 Notice letter is for and what is being asked of them.

   - **LIKELY FALSE**: While the new design helped participants navigate responses to the VA, nearly half were still unclear about the purpose of the 5103 waiver. Additonally, some participants were confused by the term 'waiver' as it generally associated with giving up a right.

4. It is reasonably easy for Veterans to find the development letter they're looking for among the full list of letters in the Claim Letters page.

   - **LIKELY TRUE**: Participants primarily relied on the date to find letters, using descriptions as a secondary reference. However, when the date was unknown, descriptions became less helpful due to overlaps. Some participants recommended categorizing the letters to improve their findability.

5. CST's tracked items content model works to make various types of development letters and their notifications clear and actionable in CST.

   - **LIKELY TRUE**: Participants expressed satisfaction with the prototype's layout. Their initial focus was on the top-listed actions for 5103 and development letters. To assist Veterans in completing requests and taking appropriate actions, the development letters page should be structured in a clear and logical manner.

## Key Findings

1. Veterans rated the notice information an average score of 4.5 out of 5 for helpfulness.

2. Most participants accurately summarized the 5103 notice page, but by the end of the flow, they were unclear about the purpose and implications of the waiver.

3. Confirmation messages appear on unexpected pages, and are missing where some participants expected them.

4. Most participants recalled valuing the thoroughness of decision letters but were frustrated by the lengthy wait and vague information about their claim status.

5. Most participants said they would prefer to receive electronic-only communication regarding their claims.


## Details of Findings 

**1. Veterans rated the notice information an average score of 4.5 out of 5 for helpfulness.**

Labels: BNFT: Disability, Claims Status, PRDT: Claim-status-tool

During the study, we discovered that **10 of 12** participants liked the notice page design. They’ve cited that the available options like the claims letters link and VA 21-4142 form link. Note: One participant was excluded due to technical issues.

**Note**: Participant 11 was not counted for this question because they were having internet issues, we weren’t able to get their feedback on that question.

Veterans rated the page flow of the new design an average of **4.5 out of 5** for helpfulness.

> _“Very straightforward and helpful: dates letter sent. Deadline to wait for process claims.” - P12_

> _This gives me more confidence in working with the VA, unlike right now where I'm working with a VSO." "Referring to evidence notice page - P1_


**2. Most participants accurately summarized the 5103 notice page, but by the end of the flow, they were unclear about the purpose and implications of the waiver.**

Labels: BNFT: Disability, Claims Status, PRDT: Claim-status-tool

Participants were able to explain the purpose of alerts and understood deadlines, including the 5103 notice 30-day suspension period. They understood they respond to requests from VA.

> _“ What page is saying: VA sent you a letter, they're requesting more evidence, you can upload the evidence through the app, and you have a certain amount of time to get that evidence in” - P6_

> _“Mostly the page is pretty self-explanatory, just more clarification around what the evidence waiver is and how that plays into the process” - P13_

However, they were confused about submitting the 5103 waiver due to the term 'waiver' and after uploading evidence. Addition to the term, ‘waiver’ creating pause for some participants. Others were under the impression that submitting the waiver would prevent them from adding evidence later.

> _“Thinks that after he submits waiver, the claim will be "locked" and that he won't be able to submit more evidence” - P5, observer note_

**Note**: The content has been updated post the study. We believe it will help Veterans have a clearer understanding of 5103 notice.

**3. Confirmation messages appear on unexpected pages, and are missing where some participants expected them.**

Labels: BNFT: Disability, Claims Status, PRDT: Claim-status-tool

Participants were confused by confirmation messages on the files tab, as its top portion resembled the status tab when an alert was present, making them think they had returned to the status page.

> _“ the confirmation being in the files tab is weird because the waiver asserts you are done uploading evidence. But seeing the files upload and content about upload is confusing.” - P9_


They were also confused because the claim card page didn't display an update message after uploading evidence or submitting a waiver, giving the impression that nothing had changed.

> _“I’m still getting an error notice that something needs to be done.” - P15_

> _“Doesn’t show I've uploaded anything a couple days ago. Everything looks the same except the 5103 notice isn't there any more.” - P17_


**4. Most participants recalled valuing the thoroughness of decision letters but were frustrated by the lengthy wait and vague information about their claim status.**

Labels: BNFT: Disability, Claims Status, PRDT: Claim-status-tool

Participants felt the letter's content helped them understand how VA arrived at the decision about their claim and guided them on the appropriate actions to take.

> _“The decision letters are helpful "absolutely" - likes seeing why the VA made the decision that they made” - P2_
> _“Helpful? yea tons of stuff. . next step you need to take in whatever claim you’re submitting. there’s stuff that tells you about the site. where to go and what to do.” - P17_

Participants were frustrated by length of time in receiving claim letters and found updates stating only that the VA was working on their claim unhelpful due to vague information and lack of actions or dates.


> _“Was frustrated by the lack of status - mentioned the 5 step process is "so vague and broad" that he doesn't get any useful information” - P13_

> _“Finds letters just saying they'll call him are problematic, but if there are actions with dates attached they're helpful” - P11_



**5. Most participants said they would prefer to receive electronic-only communication regarding their claims.**

Labels: BNFT: Disability, Claims Status, PRDT: Claim-status-tool


**Prefers electronic communication**

9 out of 13 preferred electronic communication, citing faster delivery and reduced risk of loss compared to postal service. They would mainly monitor emails for claim updates.

> _“Prefers electrical communication, because I'm always online it's easier. Hopefully I won’t lose it.” - P10_

> _“Would prefer only electronic communications for development letters "it takes forever to get something from the VA through the mail...its ridiculous” - P8_

**Prefers paper communication**

Popular reasons for participants who liked having paper copies would be to have a “back up” and  checks and balances.

> _“At first she said she would prefer electronic only, but then very quickly said "Ahhh actually I like both" -- likes seeing the paper trail and the security of having them in both places” - P2_

> _“only e-comm? i’m old school so i like the mail. getting it electronic would make it easier. the paper would be the back up.” - P6_

## Secondary Finding
1. 77% of participants preferred completing the VA Form 21-4142 online, while 33% opted for downloading the PDF version.
2. Participants want PDF forms to be fillable and to include an electronic signature option, based on their past experiences with non-interactive PDFs on the VA platform.
3. Participants want to feel confident that claims requiring their action or containing new notifications are prioritized  
4. Participants want mobile app notifications displayed as badges with numbers, similar to other apps.
5. Participants want two-way communication options to assist with their claims. Some suggested features like live chat or FaceTime within the app or website for tech support or direct contact with the VSR handling their claim.

## Recommendations

1. Continue refining the flow and design of the notice page experience.
2. Clarify that submitting the evidence waiver doesn't prevent Veterans from adding evidence later.
3. Strengthen the flow to prompt Veterans to submit an evidence waiver after uploading evidence.
4. Add a homepage message confirming the submission of a waiver or evidence during the last session.
5. Reduce confusion by moving the 5103 waiver confirmation to the status page and deep-linking to "Additional Evidence" on the files tab when navigating from the 5103 notice page.
6. Switch the order of form links to show online tool before PDF download option on the VA 21-4142 form page.
7. Ensure the online VA 21-4142 form closes the tracked item, not just the PDF version that is uploaded into CST.
8. Investigate whether more  PDF forms needs to be fillable and allow e-signatures.
9. Include future usability testing to test scenarios where Veterans upload multiple files to check whether 'Choose from folder’ isn’t confusing.


## Next Steps

_Next steps here. Include owners if appropriate._


## Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-07-Development-Letters/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-07-Development-Letters/conversation-guide.md)

[Interview transcripts]()


## Tools used for Synthesis

[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723666169965/01ec9b6c7e8c80b5439c0c079a630f008faabf74?sender=u606d6bea4af40ec4fe659363)

[Mural Synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723479885988/f06de5b1f951935c2ba1c8401ffe89a669884c8c?sender=u606d6bea4af40ec4fe659363)


## Pages and applications used

[Prototype](https://www.figma.com/proto/BUdMIxAiIutG12rZxZ0cg1/Claim-Letters-Navigation-%2B-5103-Alert-Updates?node-id=2479-8381&t=LwNKtGkDqoPJkrXQ-1&starting-point-node-id=2479%3A8381)



## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

We talked to **13 participants.**

Audience segment:
* Veterans: 13 
* Caregivers: 0 
* Family members of a Veteran: 0

Gender:
* Male: 9 
* Female: 4

LGBTQ+:
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 0

Devices used during study: 
* Desktop: 11 
* Tablet: 1 
* Smart phone: 1
* Assistive Technology: 0

age: 
1,2, 5-14, 16-18

Age:
* 25-34: 1
* 35-44: 2
* 45-54: 4
* 55-64: 4
* 65+:  2
* Unknown: 0

Education:
* High school degree or equivalent: 2
* Some college (no degree): 1
* Associate's degree, trade certificate or vocational training: 4
* Bachelor's degree: 4
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: unknown
* Rural: unknown
* Unknown: unknown

Race:
* White: 7
* Black: 3
* Hispanic: 2
* Biracial: 0
* Asian: 1
* Native: 0
* self-describe: 1

Disability and Assistive Technology (AT):
* Cognitive: 0
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

**Note**: We had a show rate of 15 out of 20 enabling us to gather more participant input than expected, which is valuable in qualitative research where insights and patterns are sought. However, quantitative research typically requires a larger sample size for statistical significance.

## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:

* Cognitive Disability
* Other than honorable
* Immigrant origin
* Expat (living abroad)
* Live in rural areas or abroad
* Identify as Biracial, or LGBTQ+
* User relying on assistive technology

<a href="https://docs.google.com/spreadsheets/d/1Q5ZOzX8Y---IlzpbwHYNm017zDw1jFFyEqTd56wvG_E/edit?pli=1&gid=1606067745#gid=1606067745" target="_blank">
   <img alt="VA Recruitment Checker for this study" src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-07-Development-Letters/recruitment-stats-for-benefit-claims-development-letters.png" width="800"  height="">
</a>
