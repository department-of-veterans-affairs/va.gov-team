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

The Claim Status Tool (CST) is utilized by Veterans from the 'Starting Up' phase through the 'Aging' phase of the Veteran journey map. CST's file upload experience on VA.gov needs improvement, as Veterans often find the status of their uploaded documents unclear. Previously, silent failures occurred when documents failed to process without notifying the Veteran. To address this, we now send error notification emails, eliminating silent failures. While we’ve resolved this issue, it’s important to highlight the past impact—causing confusion, delays, and repeated failed attempts due to the lack of real-time updates.

Our goal is to provide real-time transparency, reducing anxiety and enabling self-service resolution through clear, actionable feedback. We also aim to decrease the number of support inquiries through this approach.

The purpose of this research was to:

1. Evaluate whether participants can use the alerts and statuses to effectively understand different types of success and upload failures.
2. Identify whether Veterans recognize the connection between a failure notification email and the in-app alerts.
3. Identify what a Veteran expects to happen when they mail in documents
4. Understand how the upload status impacts trust in the claims process
 
[See full research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-11-Document-Status/research-plan.md)


## Research Questions

1. Is the "In progress" state useful - do they understand that the document hasn't been completely uploaded to their claim?
2. Do Veterans make the connection between the email content and the in-app alerts
3. Do Veterans understand what to do after seeing the email and/or in-app alerts for failed uploads?
4. Do Veterans feel confident in VA's ability to properly process their mailed-in documents? What do Veterans expect to happen in CST when they mail in a document?
5. Do the interactions result in any concerns about deadlines or impact trust in VA?

## Methodology 

We conducted hour-long remote moderated research sessions via Zoom. Participants were presented with three distinct scenarios and asked to navigate through them, share their thoughts, and describe the actions they would take in each situation. The three scenarios were as follows:

1. Voluntarily uploading additional evidence to a claim.
2. Uploading a specific file requested by the VA.
3. Reviewing a failure notice in an email and in CST.


## Hypotheses and Conclusions

* The proposed design makes it clear what the status of the uploaded document is.
   * **Definitely True:** 8 of 8 participants understood that their documents were in progress and were able to identifiy when the document has been added to the claim. 
* Veterans will know what to do in scenarios where document uploads were successful and scenarios where document uploads failed.
   * **Likely True:** During successful uploads, all participants understood that they had to wait for the file to be added to their claim and then check VA.gov to confirm its receipt. When a document failed to upload due to a downstream system error, participants knew they needed to resubmit it. Although we desire Veterans to avoid reuploading their file and the email and web content provide non-digital options to submit, 2 out of 7 participants said they would still attempt to re-upload using the claim status tool due to the perceived convenience of using electronic services over mailing or personally delivering documents to a VA facility.
   * **Note**: One session ended early before we could reach this part of the prototype.
* Users will find that real-time in-app status updates enhance the overall service experience by complementing the information provided via email, offering additional clarity and reassurance during the document upload process.
   * **Likely True:** 7 of 7 participants understood that the in-app status and alerts complemented the failure notice email they received during the study. Some participants noted that the alerts in CST provided more detail about the error situation.
   * **Note**: One session ended early before we could reach this part of the prototype.
* Providing Veterans with clarity via in-app status updates will reduce the need for support inquiries.
   * **Not enough information:** We did not directly seek feedback on this matter. However, during our sessions, a few participants shared different reasons for why they would call. One participant said they would call to verify that the email they received wasn’t a scam, while another mentioned they would call if they were unsure about the email’s content. Ultimately, we need to review call center data post-launch to accurately confirm this.

## Key Findings

1. All participants understood that their recently submitted file was still in progress and had not been added to their claim as long as the "In Progress" card remained visible.

2. Every participant recognized that the upload failure notification email directly corresponds to the failure alerts displayed in CST.

3. After reading the email and in-app alerts, all seven participants acknowledged that they must resubmit documents that failed to upload to their claim.

4. Most participants are confident in VA's ability to properly manage their mailed-in documents and add them to their claim.

5. Veterans reported an average confidence level of 4.7 out of 5 in their ability to successfully submit their documents to the VA based on the instructions provided in the email and CST.

6. 7 of 7 participants expected VA to send a confirmation email or notification once their submitted physical documents were received and added to their claim. 

7. While the CST components and content were generally clear and understandable, many participants were uncertain about the inconsistency in file statuses under 'Documents Received.' Some files displayed statuses like 'Pending Review' or 'Reviewed by VA,' while others had no status.


## Details of Findings 

**Finding 1: All participants understood that their recently submitted file was still in progress and had not been added to their claim as long as the "In Progress" card remained visible.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

8 of 8 participants presented with this scenario understood that their recently uploaded document was still in progress and had not yet been added to their claim. They drew this understanding from the confirmation message indicating the document was in progress and from the two sections on the files page that categorize documents: 'Submission in Progress' and 'Documents Received.'

**Note**: This is the only key finding that captured a response from P6. His session ended early due to technical difficulties and his late arrival. All other findings are based on responses from 7 participants.

> _The submission is in progress, but it's going to take two business days to see my document. So, you guys put the link to check the status. You can follow that link to make sure if they received it or not... I mean reviewed it. – P1_

> _OK so it gives me a status says the submission is in progress, lets me know it can take up to two days, and then from this page I can review the status of the submission by clicking this (the link). Looks good. – P12_


**Finding 2: Every participant recognized that the upload failure notification email directly corresponds to the failure alerts displayed in CST.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

In a hypothetical scenario, participants were guided through a file-uploading process that initially appeared successful. However, they imagined that three days later, they would receive an email notifying them that their uploaded file had not been added to their claim due to a system error. When they revisited CST, they received notifications alerting them to the failed delivery. All seven participants recognized that the upload failure notification email directly corresponded to the failure alerts displayed in CST.

> _The email just tells me that I have a notice, if I'm correct. VA.gov tells me exactly what that notice is. – P8_

> _...So it's basically giving me a breakdown of what the email was about and how I can take care of it and how I can update the situation. – P13_

**Finding 3: After reading the email and in-app alerts, all seven participants acknowledged that they must resubmit documents that failed to upload to their claim.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

Participants understood that they needed to submit physical copies of their documents to VA, based on the instructions provided in the email and the resubmit instructions page, which outlined submission via U.S. mail or in person.

> _I would go ahead and print out my evidence and mail it in. Or I would go to my office regional office. – P10_

> _... So it looks like I would need to resubmit by mail or in person. If I get this email in, let's say it's referring to a docoument that I'm not familiar with it's saying that I can call the VA to get more information. – P4_

**Finding 4: Most participants are confident in VA's ability to properly manage their mailed-in documents and add them to their claim.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

Participants gave VA an average confidence rating of 4.4 out of 5 for adding mailed-in documents to their claim. They expressed uncertainty about how quickly the document would be added. While those who have submitted physical copies in the past haven’t experienced mishandled documents, two participants mentioned concerns about lost files based on stories they had heard.

> _You always hear those few individuals who say they sent something to VA and they lost everything. I would say 5 (rating) because I haven't had those issues personally. – P4_

> _Very confident, I have great experience with VA.gov – P8_

**Finding 5: Veterans reported an average confidence level of 4.7 out of 5 in their ability to successfully submit their documents to the VA based on the instructions provided in the email and CST.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

During the study, participants reviewed sample email and web page content with instructions on submitting physical documents to VA if their digital uploads failed. They also received guidance on confirming VA's receipt of their documents. With this information, participants felt confident in their ability to submit physical copies successfully. 

> _...every step is very descriptive. You have all the information you need. Never did I feel like one of my questions or concerns wasn't answered by following along with the process. – P4_

> _Yeah I can do it, it's self-explanatory as far as they give you the options of mailing it in or having that link to show the regional offices.  – P13_

**Finding 6: 7 of 7 participants expected VA to send a confirmation email or notification once their submitted physical documents were received and added to their claim.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

After participants indicated their preferred delivery option (e.g., by mail or in person) for submitting physical copies of their documents, they all expected VA to proactively issue a confirmation, despite the resubmit notice page stating that Veterans would need to call to confirm if VA received the documents. Additionally, most participants assumed the file would appear in CST, despite the files page stating that only documents uploaded via CST would be displayed.

> _I would probably get another email or notification and I would come back to the site to check the status of the submission. And see the progress of the submission of that form. – P8_

> _To confirm: Call us. Oh. I don’t like that at all. Preferably I’d get an email that says we received it and your claim status has been updated. – P10_

**Finding 7: While the CST components and content were generally clear and understandable, many participants were uncertain about the inconsistency in file statuses under 'Documents Received.' Some files displayed statuses like 'Pending Review' or 'Reviewed by VA,' while others had no status.**

Labels: BNFT: Disability, PRDT: Claim-status-tool, RESRCH: CST Document status, RESRCH: Evaluative, RESRCH: Interviews, RESRCH: Remote, RESRCH: Usability Testing

On the files page, the 'Documents Received' section shows the files Veterans submit through CST. Tracked files, which are VA-requested files, are monitored by the system and may display statuses like 'Pending Review' or 'Reviewed by VA.' Voluntary submissions, however, are not tracked and do not have statuses. When asked why some files had statuses and others did not, participants were unsure but expected all files to have a status indicating they were reviewed or 'looked at.'

> _... I see they’ve been received but would be nice to see reviewed or accepted. Would like to know if someone looked at them. – P10_

> _He thinks that all would have  a status. every document will have a position hold. Your buddy statement may be the last thing to be reviewed. – Moderator note for P6_

> _He expects a status for every file and color-coded labels to communicate meaning. He likes the green checkmark to indicate that everything is good, yellow for pending, and another color for submitted. – Moderator note for P10_

## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._
1. 6 out of 7 participants preferred to hand-deliver their evidence to VA when asked about their delivery preference, with some citing the system failure as a reason for wanting instant confirmation that their document was received.
2. Nearly half of the participants who read the failure notice resubmit instructions expressed concerns about writing their full Social Security numbers on a document that could be sent via U.S. mail.
3. Most participants wanted to know why their file failed to upload to their claim. Among those seeking an explanation, all blamed themselves for the upload failure, despite the note indicating it was a system error.


## Recommendations

* Continue using the design approach to differentiate 'In Progress' documents from 'Documents Received,' but unify the terms 'Submission started on' and 'Submitted on' to align the language better.
    * _Only confusion is starts on jan 16 and submitted on jan 16. Maybe a little confusing. – P12_
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
