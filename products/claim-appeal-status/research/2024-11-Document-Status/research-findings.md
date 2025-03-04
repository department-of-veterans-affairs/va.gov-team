# Document Status Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Product Name, Team Name**

Date: 02/12/2025

Gary Homidas gary.homidas@adhocteam.us

_Once you've presented your research readout to your team, if you have a deck, insert a link to it here_ [Research readout](link here)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals

The Claim Status Tool (CST) is utilized by Veterans from the 'Starting Up' phase through the 'Aging' phase of the Veteran journey map. CST's file upload experience on VA.gov needs improvement, as Veterans often find that the status of their uploaded documents is unclear. Previously, silent failures occurred when documents failed to process without notifying the Veteran of the failure. To address this, we now send error notification emails, which eliminates the “silent” aspect of silent failures. While we’ve resolved this issue in a way with the email, it’s important to extend and communicate this transparency about file uploads within CST itself.

Our goal is to provide real-time transparency, reducing anxiety and enabling self-service resolution through clear, actionable feedback. We also aim to decrease the number of support inquiries through this approach.


The purpose of this research was to:

1. Evaluate whether participants can use our proposed new design of alerts and statuses to effectively understand different types of success and upload failures.
2. Identify whether Veterans recognize the connection between a failure notification email and the in-app alerts for failures.
3. Identify what a Veteran expects to happen when they mail in documents.
4. Understand how the upload status impacts trust in the claims process.
 
[See full research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-11-Document-Status/research-plan.md)


## Research Questions

1. Is the "In progress" state useful - do they understand that the document hasn't been completely uploaded to their claim?
2. Do Veterans make the connection between the email content and the in-app alerts?
3. Do Veterans understand what to do after seeing the email and/or in-app alerts for failed uploads?
4. Do Veterans feel confident in VA's ability to properly process their mailed-in documents? What do Veterans expect to happen in CST when they mail in a document?
5. Do the interactions result in any concerns about deadlines or impact trust in VA?

## Methodology 

We conducted hour-long remote moderated semi-structured interview sessions via Zoom. Participants were presented with three distinct scenarios and asked to navigate through a prototype, share their thoughts, and describe the actions they would take in each situation. The three scenarios were as follows:

1. Upload unrequested evidence to a claim.
2. Upload a specific file requested by the VA
3. Review a failure notice in an email and in CST


## Hypotheses and Conclusions

* The proposed design makes clear the status of the uploaded document.
   * **Definitely True:** 8 of 8 participants understood that their documents were initially in progress but not fully uploaded, and were able to identify when the document had been completely to the claim.
* Veterans will know what to do in scenarios where document uploads were successful and scenarios where document uploads failed.
   * **Definitely True:** During successful uploads, all participants understood that they had to wait for the file to be fully uploaded to their claim and then check back later in VA.gov to confirm its receipt. When a document failed to upload due to a downstream system error, all participants knew they needed to resubmit it. Although we encourage Veterans to reupload their file using the non-digital options we provide, 2 out of 7 participants indicated that they would still attempt to reupload using the claim status tool because they found electronic services more convenient than mailing or personally delivering documents to a VA facility.
   * **Note**: One session ended early before we could reach this part of the prototype.
* Users will find that real-time in-app status updates enhance the overall service experience by complementing the information provided via email, offering additional clarity and reassurance during the document upload process.
   * **Likely True:** 7 of 7 participants understood that the in-app status and alerts complemented the failure notice email they received during the study. Some participants noted that the alerts in CST provided more detail about the error situation.
   * **Note**: One session ended early before we could reach this part of the prototype.
* Providing Veterans with clarity via in-app status updates will reduce the need for support inquiries.
   * **Not enough information:** We did not directly seek feedback on this matter.  Participants did not mention reaching out to the call center relating to the in-app status, when asked what they would do next (after seeing the status). 

## Key Findings

1. All participants understood that their recently submitted file was still in progress and had not been added to their claim as long as the "In Progress" card remained visible.

2. Every participant recognized that the upload failure notification email directly corresponds to the failure alerts displayed in CST.

3. After reading the email and in-app alerts, all seven participants acknowledged that they must resubmit documents that failed to upload to their claim.

4. Most participants are confident that VA will properly manage Veterans' physical documents and add them to their claims.

5. Veterans reported an average confidence level of 4.7 out of 5 in their ability to successfully submit their documents to VA based on the instructions provided in the email and CST.

6. 7 of 7 participants expected VA to send a confirmation email or notification once their submitted physical documents were received and added to their claim.

7. While the CST components and content were generally clear and understandable, many participants were uncertain about the inconsistency in file statuses under 'Documents Received.' Some files displayed statuses like 'Pending Review' or 'Reviewed by VA,' while others had no status.


## Details of Findings 

**Finding 1: All participants understood that their recently submitted file was still in progress and had not been added to their claim as long as the "In Progress" card remained visible.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

8 of 8 participants presented with this scenario understood that their recently uploaded document was still in progress and had not yet been added to their claim. They drew this understanding from the confirmation message indicating the document was in progress and from the two sections on the files page that categorize documents: 'Submission in Progress' and 'Documents Received.'

**Note**: This is the only key finding that captured a response from P6. The session ended early due to technical difficulties and late arrival. All other findings are based on responses from 7 participants.

> _The submission is in progress, but it's going to take two business days to see my document. So, you guys put the link to check the status. You can follow that link to make sure if they received it or not... I mean reviewed it. – P1_

> _OK so it gives me a status saying the submission is in progress, lets me know it can take up to two days, and then from this page I can review the status of the submission by clicking this (the link). Looks good. – P12_


**Finding 2: Every participant recognized that the upload failure notification email directly corresponds to the failure alerts displayed in CST.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

In a hypothetical scenario, participants were guided through a file-uploading process that initially appeared successful. However, in the study they were taken through a flow in which  three days later, they received an email notifying them that their uploaded file had not been added to their claim due to a system error. When they revisited CST, they were shown alerts indicating the failed delivery. All seven participants recognized that the upload failure notification email directly corresponded to the failure alerts displayed in CST.

> _The email just tells me that I have a notice, if I'm correct. VA.gov tells me exactly what that notice is. – P8_

> _...So it's basically giving me a breakdown of what the email was about and how I can take care of it and how I can update the situation. – P13_

**Finding 3: After reading the email and in-app alerts, all seven participants acknowledged that they must resubmit documents that failed to upload to their claim.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

Participants understood that they needed to submit physical copies of their documents to VA, based on the instructions provided in the email and the resubmit instructions page, which outlined submission via U.S. mail or in person.

> _I would go ahead and print out my evidence and mail it in. Or I would go to my regional office. – P10_

> _... So it looks like I would need to resubmit by mail or in person. If I get this email in, let's say it's referring to a document that I'm not familiar with, it's saying that I can call the VA to get more information. – P4_

**Finding 4: Most participants are confident that VA will properly manage Veterans' physical documents and add them to their claims.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

Participants gave VA an average confidence rating of 4.4 out of 5 for adding mailed-in documents to their claim. They expressed uncertainty about how quickly the document would be added. While those who  have submitted physical copies in the past haven’t experienced mishandled documents, two participants mentioned concerns about lost files based on stories they had heard.

> _You always hear those few individuals who say they sent something to VA and they lost everything. I would say 5 (rating) because I haven't had those issues personally. – P4_

> _I would feel confident however, because I got that notice, I would go in person to get it time stamp with a receipt. Not confident in digitally uploading again. – P8_

**Finding 5: Veterans reported an average confidence level of 4.7 out of 5 in their ability to successfully submit their documents to VA based on the instructions provided in the email and CST.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

During the study, participants reviewed sample email and web page content with instructions on submitting physical documents to VA if their digital uploads failed. They also received guidance on confirming VA's receipt of their documents. With this information, participants felt confident in their ability to submit physical copies successfully. 

> _...every step is very descriptive. You have all the information you need. Never did I feel like one of my questions or concerns wasn't answered by following along with the process. – P4_

> _Yeah I can do it, it's self-explanatory as far as they give you the options of mailing it in or having that link to show the regional offices. – P13_

**Finding 6: 7 of 7 participants expected VA to send a confirmation email or notification once their submitted physical documents were received and added to their claim.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

After participants indicated their preferred delivery option (e.g., by mail or in person) for submitting physical copies of their documents, they all expected VA to proactively issue a confirmation, despite the resubmit notice page stating that Veterans would need to call to confirm if VA received the documents. Additionally, most participants assumed the file would appear in CST, despite the files page stating that only documents uploaded via CST would be displayed.

> _I would probably get another email or notification and I would come back to the site to check the status of the submission. And see the progress of the submission of that form. – P8_

> _To confirm: Call us. Oh. I don’t like that at all. Preferably I’d get an email that says we received it and your claim status has been updated. – P10_

**Finding 7: While the CST components and content were generally clear and understandable, many participants were uncertain about the inconsistency in file statuses under 'Documents Received.' Some files displayed statuses like 'Pending Review' or 'Reviewed by VA,' while others had no status.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

On the files page, the 'Documents Received' section shows the files Veterans submit through CST. Tracked files, which are VA-requested files, are monitored by the system and may display statuses like 'Pending Review' or 'Reviewed by VA.' Voluntary submissions, however, are not tracked and do not have statuses. When asked why some files had statuses and others did not, participants were unsure but expected all files to have a status indicating they were reviewed or 'looked at.'

> _... I see they’ve been received but would be nice to see reviewed or accepted. Would like to know if someone looked at them. – P10_

> _He thinks that all would have a status. Every document will have a position. Your buddy statement may be the last thing to be reviewed. – Moderator note for P6_

> _He expects a status for every file and color-coded labels to communicate meaning. He likes the green checkmark to indicate that everything is good, yellow for pending, and another color for submitted. – Moderator note for P10_

## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._
1. 6 out of 7 participants preferred to hand-deliver their evidence to VA when asked about their delivery preference, with some citing the system failure as a reason for wanting instant confirmation that their document was received.
2. Nearly half of the participants who read the failure notice resubmit instructions expressed concerns about writing their full Social Security numbers on a document that could be sent via U.S. mail.
3. Most participants wanted to know why their file failed to upload to their claim. Among those seeking an explanation, all blamed themselves for the upload failure, despite the note indicating it was a system error.


## Recommendations

* Continue using this design approach to differentiate 'In Progress' documents from 'Documents Received,' but unify the terms 'Submission Started On' and 'Submitted On' to align the language better.
    * _Only confusion (part) is “starts on Jan 16” and “submitted on Jan 16”. Maybe a little confusing. – P12_
* Update content to ensure that important information is clearly communicated.
    * _Participants recommended highlighting important content, such as requiring Social Security numbers on physical document copies, using iconography to make information stand out, and emphasizing helpful tips that set expectations for Veterans when they speak to call center staff._
* Explore a UI design for received file statuses under the 'Documents Received' section to resolve the lack of clarity around tracked items having status and unrequested files not having status.
    * _Most participants expected every file to have a status indicating that it has been reviewed._
* Consider sending notifications to Veterans to confirm that their physical documents have been received and added to their claims.
    * _I think bringing it in person would make the review process much quicker. At some point whether you send it by mail or in person if you check the status it should...reflect that they actually have the document that they need. – P4_

## Additional Considerations
* When possible, provide Veterans with a substantive explanation of why the file upload failed; in all cases reassure them that they are not at fault for the failure.
    * _It says there was a problem, now I have to investigate. Why not? Did I do something wrong? – P5_
* Provide an alternative option for digitally re-submitting documents to the VA if the initial upload fails.
    * _… that’s why you have to embrace tech… they see veterans every day. They see a lot of people and you lose confidence that something can get lost. – P13_
* Explore ways to associate files to the correct Veterans and claims without requiring a full SSN for mailed documents. If an upload fails, allow Veterans to use a partial SSN and other PII (e.g., claim number, partial DOB) to reduce privacy concerns.
    * _3 of 7 participants who read the failure notice resubmission instructions expressed concerns about mailing documents with their full Social Security numbers._

## Next Steps

* _Create design tickets to address recommendations and finding_
* _Iterate on design incorporating insights from this study_


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-11-Document-Status/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-11-Document-Status/conversation-guide.md)

[Interview transcripts[Mural]](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1737488183058/58387a43cf0743cc0dde1eac7d0fb2925d3c8846?sender=u606d6bea4af40ec4fe659363)

[Verbatim interview trascirpts [Github]](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/research/2024-11-Document-Status/verbatim-notes)


## Tools used for Synthesis

e.g. mural boards, etc.

Mural board and google sheet 

## Pages and applications used

[Link to prototype](https://www.figma.com/proto/m1Xt8XjVDjZIbliCYcCKpE/Document-status-%28formerly-silent-failures%29?node-id=2771-20256&t=YQPL10Sibs5kZtpY-1)


## Other supporting documents created

e.g. user flows, personas, etc.

[User flow [Figma]](https://www.figma.com/design/m1Xt8XjVDjZIbliCYcCKpE/Document-status?node-id=2771-20257&t=3Pl0vX58St61HjxI-4)

## Secondary research

Include any secondary research you may have. 
E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.

* [CST Silent Failures Journey Map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727291362631/d858abe176f90441de772a4b35ddf9412918053b)




## Who we talked to 

**Recruitment criteria**

We talked to **x participants.**

Audience segment:
* Veterans: 8 
* Caregivers: x 
* Family members of a Veteran: x  


Gender:
* Male: 6 
* Female: 2 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: 7 
* Tablet: x 
* Smart phone: 1 
* Assistive Technology: x


Age:
* 25-34: 
* 35-44: 1
* 45-54: 2
* 55-64: 4
* 65+: 1
* Unknown: x


Education:
* High school degree or equivalent: 2
* Some college (no degree): 1
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 2
* Master's degree: 1
* Doctorate degree: x
* Unknown: x


Geographic location:
* Urban: 4
* Rural: 3
* Unknown: 1


Race:
* White: 2
* Black: 6
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

This research does not include the perspectives of the following marginalized Veteran groups:

* Veterans with cognitive disabilities
* Veterans with other-than-honorable discharge status
* Veterans of immigrant origin or living abroad (expats)
* Veterans of Hispanic, biracial, Asian, or Native descent
* Veterans who identify as part of the LGBTQ+ community.
* Veterans who use assistive technology

![VA-recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-11-Document-Status/images/recruitment-tracker.png)
