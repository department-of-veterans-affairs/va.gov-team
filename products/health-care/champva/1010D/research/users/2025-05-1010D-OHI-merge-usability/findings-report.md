# 10-10D/10-7959c Merge Usability Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), VA Forms 10-10d/10-7959c Application for CHAMPVA Benefits (with Other Health Insurance Certification), IVC Forms Team**

**Date:** MM/DD/YYYY

**Contacts:** Renata Keck, Jamie Fiore & Rachel Pope

**[Link to Research Readout](link-here)**  
*Add a link to your research readout deck, if available.*

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Product User and Business Outcomes](#product-user-and-business-outcomes)
- [Key Performance Indicators](#key-performance-indicators)
- [Next Steps](#next-steps)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
Applicants seeking CHAMPVA benefits must complete and submit VA Form 10-10d for benefits enrollment and VA Form 10-7959c for Other Health Insurance (OHI) certification separately. To enhance user experience and streamline operations, we propose merging these two forms into a single, cohesive digital application process.​

Applicants are required to submit VA Form 10-10d and VA Form 10-7959c separately, leading to potential redundancy and increased processing times. This dual-submission process can be burdensome for users and may delay the overall application process. Our goal is to merge the submission processes to reduce the load on both the time it takes a veteran to submit, and the time it takes the approval team to process and approve applications.

1. Understand whether the placement of the 10-7959c within the 10-10d application for CHAMPVA benefits works better than the standalone forms, as it relates to form submission and time on task.

2. Understand if the placement of the 10-7959c within the 10-10d form works better for users, specifically as it relates to providing all necessary and required supporting evidence.

3. Get user feedback on the [V3 file upload component](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input--docs#upload-status).

**Guiding Product Questions:**  
- How might we simplify the CHAMPVA application and OHI supporting docs process to allow applicants to submit both benefits enrollment and OHI certification seamlessly in a single digital experience?
- How can we reduce processing times by merging the CHAMPVA application and OHI Cert forms?


## Research Questions

**Goal 1: Understand whether the placement of the 10-7959c within the 10-10D application for CHAMPVA benefits works better than the standalone forms, as it relates to form submission and time on task.**
1. How well are users able to orient into and out of the ancillary 10-7959c within the 10-10D?
2. Does content on transitional pages between the 10-10D and 10-7959c provide sufficient context about the purpose of the 10-7959c?
3. Is the slim header/footer sufficient context for users knowing where they are within the 10-10D or 10-7959c?

**Goal 2: Understand if the placement of the 10-7959c within the 10-10D form works better for users, specifically as it relates to providing all necessary and required supporting evidence.**
1. Will users be confused by what supporting evidence is required for the 10-10D and 10-7959c?
2. Will users prefer to upload documents mid-flow?
3. Are the examples and content around what evidence to prepare and provide on the forms clear?

**Goal 3: Get user feedback on the [V3 file upload component](https://design.va.gov/storybook/?path=/docs/uswds-va-file-input--docs#upload-status).**
1. Does the v3 file upload component help users to successfully upload front/back views of their Medicare and Private Health Insurance cards?
2. Do users want any additional confirmation around uploading files?

## Methodology 

We conducted 1-hour remote moderated research sessions from **June 30, 2025-July 18, 2025**. These sessions included a semi-structured interview as well as a combined usability/content comprehension test protocol to gauge users' understanding of the CHAMPVA application process, the supporting documentation required to complete the application, and whether the merged 10-10D/10-7959c forms worked well for users over the alternative (submitting the two forms separately).

Each participant saw the introduction page to the 10-10D/10-7959c forms, completed Forms 10-10D and 10-7959c questions, and uploaded any documentation required through branching logic associated with their responses. All participants also saw the review page, and discussed their expectations around the submission and application decision process.

## Hypotheses and Conclusions

1. When filling out the merged 10-10D/10-7959c, users will have faster completion times when compared to cumulative completion times from the standalone 10-10D and 10-7959c.

    - **NOT ENOUGH INFORMATION**
    - The team will need to monitor the 10-10D/10-7959c form in production to compare against standalone form times.
    - While users did not struggle with the length of the merged form, 4 users reported that the form felt "tedious," and 6 of 18 reported that the questions were repetitive to the point of confusion.

3. Users will be able to easily orient themselves around the transition between the 10-10D and 10-7959c.

    - **LIKELY TRUE**
    - Participants did not have difficulty navigating the 10-7959c subform within the 10-10D, but they also struggled to identify content about the 10-7959c subform throughout the test.

5. Users will prefer to complete the 10-7959c as part of their CHAMPVA application, as opposed to a separate, standalone form.

    - **LIKELY TRUE**
    - 3 participants who are current CHAMPVA beneficiaries stated that the online form was a better overall experience than the paper/PDF application. 

7. New instructions, examples, and directions for uploading necessary and required supporting evidence will provide relevant assistance as the user navigates the forms.

    - **MAYBE TRUE**
    - 15 of 18 participants said that the content on the intro page made them feel "informed" or "very informed" about the 10-10D/10-7959c application, and 12 of 18 participants reiterated at the end of the test session that the amount of information they saw throughout the application was "just right."

9. Veterans will understand that there is separate upload sections for applicant information and OHI, and avoid duplicate uploads/entries. 

    - **DEFINITELY TRUE**
    - 18 of 18 participants understood what supporting documentation was being asked for in the applicant and OHI sections. Only 2 participants had issues with uploading files in the form, due to Staging crashing, and due to an issue with the participant's iPad device.
    - 2 participants specifically called out the ease of uploading supporting documentation as part of what made the 10-10D/10-7959C easy overall.

10. The v3 file upload component will provide visual validation of complex file uploads, like front/back of Medicare and Private Health Insurance cards
  
    - **NOT ENOUGH INFORMATION**
    - We were unable to implement the v3 upload component in time for testing. We will test this component in a future study.   

8. The v3 component will help users identify if they have provided all necessary evidence before submitting.
    - **NOT ENOUGH INFORMATION**
    - We were unable to implement the v3 upload component in time for testing. We will test this component in a future study.      



## Key Findings

**1.**  Most participants (14 of 18) self-reported that the 10-10D/10-7959c form was "easy" or "very easy."

**2.** Participants had mixed understanding about the supporting documentation required to submit their 10-10D/10-7959c application, based on the content on the Introduction page of the form.

**3.** Participants struggled with terms used to designate the person filling out the application ("Signer"), the Veteran ("Sponsor"), and their dependents ("Applicants"). This confusion resulted in duplicative and incorrect data entry in the Signer, Sponsor and Applicant sections of the application, which may result in applications being delayed or denied.

**4.** While users had no trouble navigating into and out of the 10-7959c subform, there were specific usability concerns with the Medicare and Health Insurance list&loops.

**5.** While users did not struggle with the length of the merged form, 4 users reported that the form felt "tedious," and 6 of 18 reported that the questions were repetitive to the point of confusion. 


## Details of Findings 

**Finding 1:**  Most participants (14 of 18) self-reported that the 10-10D/10-7959c form was "easy" or "very easy." 

In self-reported ease of use ratings, aspects of the form that participants said made it easy were:
- The overall flow (10 of 18)
- Easy-to-read pages (5 of 18)
- Inter-form navigation (3 of 18), and
- Ease of uploading supporting documentation (2 of 18)

    > _I like the steps, how [the form] is laid out, so it’s nice to see the steps that I’m gonna be taking [and] approximately how long it’s gonna take you to fill it out._ (P1)
    
    > _[The application is] self-explanatory, easy to navigate through, [...] and you’re able to do the little edit buttons if you make a mistake._ (P4)
    
    > _If I were applying for CHAMPVA, I would feel very comfortable applying for it, using that [form]._ (P5)
    
    > _Uploading stuff was a piece of cake._ (P6)
    
    > _Everything on the [form] worked perfectly._ (P12)
    
    > _The amount of information that I had to enter[,] that was extremely helpful._ (P19)

Requested changes to the flow and content of the 10-10D/10-7959c were minimal. 6 of 18 users specifically requested tweaks to the overall content of the form to make submitting the CHAMPVA application easier. Areas for improvement included:
- Improved terminology about Sponsors and Applicants (4 of 18) _See finding 3_
- "Spelling out" the forms instead of relying on VA form numbers on the Intro page and slim header (3 of 18)
- More information about the CHAMPVA program (2 of 18)

    > _Well, I’d like more information about CHAMPVA, like what you describe to me. I don’t think it covers that until you click [on the application.] I wish it was right there._ (P18)
    
    > _Tell [people] upfront: there is no cost for this, or something like that. And this will not affect your [Sponsor’s] benefits. Because if there’s a cost for CHAMPVA, then I wouldn’t even probably [apply.] That probably needs to be way up at the beginning of the form, if there’s a cost._ (P9)
    
    > _The signer and the sponsor information, like to me that’s the only thing confusing about [the application]. Everything else was pretty easy to understand._ (P19)
    
    > _“1010D Extended” [...] is like [garbled] speak to me. I actually wish it was in more in English here, because I do these menu trees sometimes and I don’t actually know how I landed here [on the application[.] This is the type of thing that ends up making call to the VA CHAMPVA line. What does this mean? Like I don’t understand. Yeah, that’s the name of the form. But regular people don’t speak that way, and I’m a regular person._ (P13)
    
    > _Not having to re-enter, re-key information that you’ve already entered, be more specific when it’s asking for information: who is the applicant you’re asking information about, be more specific._ (P15)


**Finding 2:**  Participants had mixed understanding about the supporting documentation required to submit their 10-10D/10-7959c application, based on the content on the Introduction page of the form.

On the Introduction page, users struggled to fully understand the breadth of information and supporting documents required to complete the CHAMPVA application. Based on the introduction page, users expected they would need:
- Veteran and dependent information (12 of 18)**
- Health insurance information (6 of 18)**
- Veteran military information, like branch of service, service dates, and DD-214 (6 of 18)
- Financial information like most recent tax statement or estimated income (3 of 18)
- School letter or enrollment verification (1 of 18)**
- Residency and location, assuming it has a bearing on eligibility for benefits (1 of 18)

  ** Indicates information required by the 10-10D/10-7959c application

Crucially, the confusion about required information and supporting documents on the introduction page meant that users were unprepared to provide key documentation as part of the Applicant and Other Health Information subsections of the form. 

- **Applicant Enrollment Verification**: Participants felt unprepared when being asked for the school certification letter. Of the 5 participants who saw the School Enrollment portion of the Applicant loop:
    - 4 said they would have to stop the form to call their dependents' school to request an enrollment letter.
    - 3 stated that it would cause significant friction and delay with completing the CHAMPVA application because the school certification is not something they can obtain easily and quickly.
    - 1 participant who saw the school enrollment page assumed that the requirements for this document were identical to other VA education benefits and did not stop to verify if they would need additional information for the CHAMPVA application.
    - Participants familiar with requesting enrollment letters stated they would want more clarity on the request process to schools, including possible workarounds, so as not to delay enrollment.

    > _I just had to do this as [one dependent] is enrolled, and the other one plans to enroll, and he’s already enrolled in a vocational [program]. You need a submitted letter from the school letterhead, first name, last name [of the beneficiary]. That’s what I was expecting, what I need to do._ (P4)
    
    > _The challenge has always been like the stuff from school, just getting that information. It’s just, you know, very time consuming._ (P15)
    
    > _I’m looking at [the Introduction page]: it says ‘proof of school enrollment. Well, I mean, I have a daughter who’s in college. So I have that proof because we’ve been applying for other things through VA with her, so probably a lot of these documents I already have._ (P5)
    
    > _Typically I wouldn’t have thought [to have a school enrollment letter]. That’s where the eligibility and what documents to have in place [on the Introduction page]...where I would have read that. And hopefully, that’s in there. [...] I’ve been doing this for all 3 kids, almost one in a row, because they’re about 4-5 years apart. So that’s about the only reason I would have known to have [the school letter] on file. Like I have [my daughter’s] file now on my desktop, because those are things I routinely have to use, instead of having to bug or call her, especially since she’s going to school out of state._ (P1)
    
    > _I know exactly what they’re asking for. They’re asking for her enrollment or acceptance letter. That shows that, see, this is actually a very difficult thing! Because my daughter’s college was able to provide that, gave her graduation date. But my son’s college in [another state] only gives it for the semesters he’s enrolled in at the time. So [...] I had to go to the Publisher’s Clearinghouse and beg, plead, wheedle, and get them to change it to his actual graduation date._ (P12)

**Note to Renata: pick up here**

**Finding 3:**   Participants struggled with terms to designate the person filling out the application ("Signer"), the Veteran ("Sponsor"), and their dependents ("Applicants"). This confusion resulted in some duplicative and incorrect data entry in the Signer, Sponsor and Applicant sections of the CHAPMVA application, which may result in applications being delayed or denied.

**Finding 4:**   Many participants expresssed confusion about the Medicare (9 of 18) and health insurance (9 of 18) sections of the 10-7959c Other Health Insurance (OHI) subform.



**Finding 5:**   Participants had expectations about the submission and post-submission application process that would make them feel more confident their application was received and being processed. 


---

## **Additional Insights**
*Include insights that do not represent patterns but are still valuable.*  
> **TIP:** These could be powerful user comments or unexpected issues worth noting


## Recommendations

*Summarize actionable recommendations based on findings.*  

1. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_  
2. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_

## Product User and Business Outcomes

*Explain how findings and recommendations align with the product's goals.*

> [!NOTE] 
> Refer back to your Product Outline. 

- **Desired User Outcome**
  - This research supports our desired user outcome by....
 
- **Deisred Business Outcome**
  - This research supports our desired business outcome by....


## Key Performance Indicators

*Explain how findings will support KPI measurement.*  

> [!NOTE]
> Refer back to your Product Outline. 

- **KPI 1**
  -  This research supports measurement of this KPI by....


## Next Steps

*Outline immediate actions based on findings, including owners if applicable.*  


## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 


## Appendix
[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10D-OHI-Merge-Product-Outline.md)

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability/Research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability/Conversation-guide.md)

[Transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability/transcripts)


## Tools used for Synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1750264395515/2f3e86214b70c294fb7e4c8abec93c83f80f3de5) 
  
## Pages and applications used

- [Staging environment](https://staging.va.gov/ivc-champva/10-10d-extended/)
- [Figma mocks]


## Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


## Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.*  

## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

We talked to **18 participants.**

Audience segment:
* Veterans:  14
* Family members of a Veteran: 4  


Gender:
* Male: 12 
* Female: 6 


Devices used during study: 
* Desktop: 12 
* Tablet: 1 
* Smart phone: 5 
* Assistive Technology: 5


Age:
* 25-34: x
* 35-44: 1
* 45-54: 4
* 55-64: 5 
* 65+: 8
* Unknown: x


Education:
* High school degree or equivalent: 3
* Some college (no degree): 4
* Associate's degree, trade certificate or vocational training: 3
* Bachelor's degree: 4
* Master's degree: 3
* Doctorate degree: x
* Unknown: 3


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
