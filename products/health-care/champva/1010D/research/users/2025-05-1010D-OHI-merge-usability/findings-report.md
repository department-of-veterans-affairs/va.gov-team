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

We conducted 1-hour remote moderated research sessions from **June 30, 2025-July 18, 2025**. These sessions included a semi-structured interview as well as a combined usability/content comprehension test protocol to gauge users' understanding of the CHAMPVA application process, the supporting documentation required to complete the application, and whether the merged 10-10D/10-7959c forms worked well for users over the alternative (submitting the two forms separately). The usability/content comprehension protocol was conducted in Staging.

Each participant saw the introduction page to the 10-10D/10-7959c forms, completed Forms 10-10D and 10-7959c questions, and uploaded any documentation required through branching logic associated with their responses. All participants also saw the review page, and discussed their expectations around the submission and application decision process.

## Hypotheses and Conclusions

1. When filling out the merged 10-10D/10-7959c, users will have faster completion times when compared to cumulative completion times from the standalone 10-10D and 10-7959c.

    - **LIKELY TRUE**: 16 of 18 users were able to complete the entire merged form in a single sitting (the 2 who did not submit were due to technical difficulties with the Staging environment or their devices) compared to # number of visits to the 1010D and # to OHI to submit the standalone forms in production.
        - The team will need to monitor the 10-10D/10-7959c form in production to compare against standalone form times and the number of sessions required to finish the merged form vs. standalone forms. See [_Next Steps_](#next-steps).

2. Users will be able to easily orient themselves around the transition between the 10-10D and 10-7959c.

    - **LIKELY TRUE**: Participants did not have difficulty navigating the 10-7959c subform within the 10-10D, but they also struggled to identify content about the 10-7959c subform throughout the test.

3. Users will prefer to complete the 10-7959c as part of their CHAMPVA application, as opposed to a separate, standalone form.

    - **LIKELY TRUE**: 3 participants who are current CHAMPVA beneficiaries stated that the online form was a better overall experience than the paper/PDF application.

4. New instructions, examples, and directions for uploading necessary and required supporting evidence will provide relevant assistance as the user navigates the forms.

    - **MAYBE TRUE**: 15 of 18 participants said that the content on the intro page made them feel "informed" or "very informed" about the 10-10D/10-7959c application, and 12 of 18 participants reiterated at the end of the test session that the amount of information they saw throughout the application was "just right."
        - We believe some minor tweaks to the content to address observed usability issues, alongside self-reported ease of comprehension, will make file uploads and supporting docs even easier for users. See _Recommendations_ and [_Next Steps_](#next-steps).

5. Veterans will understand that there is separate upload sections for applicant information and OHI, and avoid duplicate uploads/entries. 

    - **DEFINITELY TRUE**: 18 of 18 participants understood what supporting documentation was being asked for in the applicant and OHI sections.
        - Only 2 participants had issues with uploading files in the form, due to Staging crashing, and due to an issue with the participant's iPad device.
        - 2 participants specifically called out the ease of uploading supporting documentation as part of what made the 10-10D/10-7959C easy overall.

6. The v3 file upload component will provide visual validation of complex file uploads, like front/back of Medicare and Private Health Insurance cards
  
    - **NOT ENOUGH INFORMATION**: We were unable to implement the v3 upload component in time for testing. We will test this component in a future study.   

7. The v3 component will help users identify if they have provided all necessary evidence before submitting.
    - **NOT ENOUGH INFORMATION**: See above.    

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

- **Health Insurance Documents**: 12 of 18 participants did not recall if health insurance information was mentioned on the Introduction page, when they reached the Other Health Insurance subsection of the application.
    - 11 of 18 participants said they would have to pause the form at the Other Health Insurance section, because they did not know to gather Medicare and Health Insurance cards prior to starting the form.
        - 1 participant mentioned feeling "catfished" or like a "bait and switch" occurred at this point in the form, and went back to the Introduction page to verify that health insurance information hadn't been asked.
    - Notable edge case: 1 participant was confused about whether they needed the Veteran's health insurance information, or just applicants'.

    > The concern, the confusion, the whatever I have is, apply for CHAMPVA benefits, and you were looking at 10-10d, right? So here it all is, nowhere in this form does it talk about Medicare. Right? Here's all this stuff. And then all of a sudden, to continue now step 4 of 6. We're bringing in Medicare information. Wait a minute, you didn't inform me of that. I didn't know.
    
    > So I would have to go look that [Medicare/Health Insurance information] up, find it, or something like that, and especially if it's new to me. I might have to log into something to get that number. So yeah, I would need to save and continue later. (P8)
    
    > I assume this is gonna time out at some point in real life. So it would be really bad for someone to lose all their information, but not be told when it's gonna time out. So if that is true. Hopefully, they can tell people upfront when it will time out or put a warning sign that comes up. Because that could create some real frustrations. (P13)

- **ADD INTRO HERE**9 of 18 users said they would click on the [link](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/#supporting-documents-for-your-) on the introduction page to verify their assumptions about required supporting documents, and to make a plan to gather everything before starting the application.

    > _I would read the whole thing 1st to see, to give me an over[view] of what I'm gonna be looking to do, and I can always come back to each page as I go. Like number one, I'll hit ["Find out if you're eligible,"](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/) read all that, and I can go back to find number 2, read all it, and then go back down where it said find out which documents I'll need to apply._ (P21)
    
    > _So in advance I could get all the paperwork that I needed, or documents or information, and then that way, when I went to apply. It would be like 1, 2, 3, you know. I like to have everything in front of me rather than go through the form and get part way through and see._ (P14)

**Finding 3:** Participants struggled with terms to designate the person filling out the application ("Signer"), the Veteran ("Sponsor"), and their dependents ("Applicants"). This confusion resulted in some duplicative and incorrect data entry in the Signer, Sponsor and Applicant sections of the CHAMPVA application, which may result in applications being delayed or denied.

[Insert link to flow or high-level photo of the flow]

- 11 of 18 participants hesitated on the [**Signer**] section, not comprehending the question asking them to self-identify as a dependent, Veteran, or third-party representative filling out the form.
    - 2 participants said they use their spouse’s VA.gov account and would default to self-selecting “Veteran,” and then proceeded to get confused by the information required in the Sponsor section.
    - Another participant said they wanted more context on the Signer designation, such as the ability to select who you were applying for, rather than self-identifying as a Signer-type.

    > I'm applying on behalf of my spouse and a child. I don't see a box that accurately describes that. The middle box says I'm a veteran applying benefits from my spouse or dependents. And okay. I'd probably want to go find out what they wanted, because a lot of these things could get completely screwed up if you check the wrong box. (P7)
    
    > I'm not a veteran, so I don't see one that's for me and a dependent …hopefully, when it's live, it can be more clear on that cause I wouldn't know what to do if I had a child, and which that would be a phone call to the CHAMPVA to try to get that answer, or ChatGpt. (P13)

- 11 of 18 participants had issues completing the [**Sponsor**] section, either confused by the form asking them to provide their information twice in a row (Veterans), or not understanding what a Sponsor meant in relation to applicants (Dependents). Even participants who understood that a Sponsor was a Veteran were confused by the Signer/Sponsor/Applicant sections being close together, making the form appear to ask for the same information two or even three times.
    - All 11 participants who struggled with the Sponsor section completed it as thought it was for a dependent/applicant, not the Veteran.
    - 8 of the 11 participants who struggled with this section were Veterans, for whom the Sponsor section was prefilled based on their answers in the Signer section of the form.

    > _I have no idea if the information I just put in there was wrong or not. Just like reading this. I enter the sponsor's name. Wouldn't that be me? The sponsor? I would be the sponsor for my husband, but all the information I just filled in was for me, and I don't know if I should have put his information in there._ (P6)
    
    > _So it says sponsor's name and date of birth...oh, I may have misread the original where I was putting in the original information. I thought that was the… Is there any way to go back?_ (P19)

- 6 of 18 participants continued to struggle with the Applicant section, unclear who an Applicant was in relation to CHAMPVA benefits.

    > _In the beginning it asked for my information, and then they asked me, for the sponsor was just the same person as myself, so If I'm not mistaken. The sponsor and myself are the same person. But then this is applicant information, the applicant would be … oh, am I the applicant?_ (P18)
    
    > _I think it's for me, cause it says applicant. But I guess it's confusing, because I already put my information a couple of times so. And I was doing it for myself and one other person. So I guess that part was confusing at the beginning. Then, so okay, so makes sense for me to put it twice, but if if I'm applying, I'm the applicant, I would be putting in my information._ (P1)

**Finding 4:**   Many participants expresssed confusion about the Medicare (9 of 18) and health insurance (9 of 18) sections of the 10-7959c Other Health Insurance (OHI) subform.

**Note: Complete finding**

**Finding 5:**   Participants had expectations about the submission and post-submission application process that would make them feel more confident their application was received and being processed. 

**Note: Complete finding**

---

## **Additional Insights**

**1.** School-aged CHAMPVA beneficiaries are required to re-submit school verification documents in between semesters to retain CHAMPVA benefits, which is a tedious task and may result in a lapse of coverage. 

**2.** Participants had expectations about the submission and post-submission application process that would make them feel more confident their application was received and being processed.

**Additional Finding 1:** School-aged CHAMPVA beneficiaries are required to re-submit school verification documents in between semesters to retain CHAMPVA benefits, which is a tedious task and may result in a lapse of coverage. 

- 1 participant mentioned that lapses in CHAMPVA coverage were not announced, and it was the responsibility of the beneficiaries to check if coverage lapses between semesters at school, resulting in surprise copays or uncovered medical bills.

    > My daughter…she goes to school, right? So she’s always cut off [from CHAMPVA benefits]. The fall semester runs from August all the way through December, and then there’s a gap period from mid-December til mid-January, when the VA sometimes would cut her off from benefits, because technically she’s not in school. So she would have to send in another recertifying form [10-7959c]. She always has [health issues] and was constantly having to go [to the doctor]...repeatedly. There were times where I would need to find out: do they [CHAMPVA] still have her, you know, insured or not? And so we’d have to call the 1-800 number to find out if she was still covered, and they would tell us. But I’ve never been able to check [if we’re still eligible]. Honestly, there’s very limited information that you can get regarding your CHAMPVA benefits as far as eligibility, finding out if you’re still eligible and still covered online. (P15)
    
    > We’ve had to do this multiple times. Every year, we have to do it, and it’s always a challenge with my son’s college. - P12

- Another participant mentioned a workaround to communicating with the school, which was utilizing a third party enrollment verification system through Publisher’s Clearinghouse.

    > [Pull quote]

**Additional Finding 2:** Participants had expectations about the submission and post-submission application process that would make them feel more confident their application was received and being processed.

**COMPLETE THIS ADDITIONAL FINDING**

## Recommendations

* Inform the users about the CHAMPVA program: Include more information on the form introduction page about who qualifies for the program and what it is used for. Adding the form names to the headers can also increase awareness and understanding of what is the purpose of VA form 1010d and the 10-7959c.

    _Supporting evidence:_

    * 6 of 18 users specifically requested tweaks to the overall content of the form to make submitting the CHAMPVA application easier.

* Help users feel more prepared to complete the form: Add more details about the types of supporting documents needed before entering the form. Include explicit information about submitting school certification and those requirements. Acknowledge the need to submit Medicare cards and/or health insurance cards at the beginning of the form and during the Medicare and health insurance questions. 

    _Supporting evidence:_

    * On the Introduction page, users struggled to fully understand the breadth of information and supporting documents required to complete the CHAMPVA application.
    * Of the 5 participants who saw the School Enrollment portion of the Applicant loop, 4 said they would have to stop the form to call their dependents' school to request an enrollment letter.
    * 12 of 18 participants did not recall if health insurance information was mentioned on the Introduction page, when they reached the Other Health Insurance subsection of the application.

* Reduce confusion of each role type involved in the form: Update the form content to clarify in plain language who the signer, sponsor and applicant is. Users were more likely to understand the term “Veteran” rather than “sponsor”.

    _Supporting evidence:_

    * 11 of 18 participants hesitated on the **Signer section**, not understanding the question asking them to self-identify as a dependent, Veteran, or third-party representative.
        * 2 participants said they use their spouse’s [VA.gov](http://VA.gov) account and would default to selecting “Veteran,” but then proceeded to get confused by the information required in the Sponsor section.
        * Another participant said they wanted more context on the Signer designation, such as the ability to select who you were applying for, rather than self-identifying as a Signer-type.
    * 11 of 18 participants had issues completing the Sponsor section, either confused by the form asking them to provide their information twice in a row (Veterans), or not understanding what a Sponsor meant in relation to applicants (Dependents). Even participants who understood that a Sponsor was a Veteran were confused by the Signer/Sponsor/Applicant sections being close together, making the form appear to ask for the same information two or even three times. 
        * All 11 participants who struggled with the Sponsor section completed it as thought it was for a dependent/applicant, not the Veteran.
        * This was the case even for Veterans (8 of 11) in our study, for whom the Sponsor section was prefilled based on answers in the Signer section.
    * 6 of 18 participants continued to struggle with the Applicant section, unclear who an Applicant was in relation to CHAMPVA benefits. 
* Remove unnecessary burden and confusion and ask for contact info for each one of the roles (signer, sponsor and applicant(s)) involved in the form. Consider updating signer form flow to reduce repetitive and possibly confusing form entries. Moving the signer questions to the end of the form may decrease the amount of similar form fields such as address and phone number needed.


    _Supporting evidence:_

    * 11 of 18 participants had issues completing the Sponsor section, either confused by the form asking them to provide their information twice in a row (Veterans), or not understanding what a Sponsor meant in relation to applicants (Dependents). Even participants who understood that a Sponsor was a Veteran were confused by the Signer/Sponsor/Applicant sections being close together, making the form appear to ask for the same information two or even three times.

* Remove the need for users to submit the same information from their health insurance and Medicare cards in multiple ways making it less tedious to complete the application. Consider employing strategies such as omitting these questions and relying on the data on the insurance card upload, omitting the card uploads to relying on the information types into the form fields, using a database or AI to prefill this information.

    _Supporting evidence:_

    * 4 of 11 participants reported that the form felt "tedious,"
    * 3 of 11 participants  users expected to be able to either have the Medicare fields pre-filled in some way either from Medicare itself or from the uploaded card image
    * 2 of 11 participants wanted a way to enter the effective date only once for both of their Medicare Parts A and B
* To better prepare applicants to have Part D information ready and alleviate uncertainty on if it is needed it is recommended to mention Medicare Part D earlier on the in Medicare flow. 

    _Supporting evidence:_

    * 3 of 11 participants were unsure how to add their Medicare Part D information \

* To avoid confusion on how applicants are added to Medicare and health insurance plans consider using similar user flows for both of these sections.

    _Supporting evidence:_

    * 9 participants were unsure how to **[add applicants]** to a Medicare (7 of 9) or other health insurance (2 of 9) plan.  \

* It is recommended to add more context about health insurance details such as the termination date and the plan type to encourage applicants to enter the correct information.

    _Supporting evidence:_

    * 6 of 11 participants Users were unsure of the more specific details regarding their health insurance plans such as the termination date and the plan type. 

* Ease the burden involved with obtaining a school certification letter: Many other VA benefits (Education benefits) require proof of school enrollment but from the perspective of the participant it seems that these requirements don’t align CHAMPVA’s school certification requirements and may be more difficult to obtain. It is recommended to conduct more research with the CHAMPVA partners to gain a better understanding of their school certification process. To help with user burden and prevent users from having to stop the form until they receive the school certification, ask for similar requirements and documentation as the Education benefits program does.

    _Supporting evidence:_

    * 4 out of 11 participants mentioned that they would either have to pause the form to obtain the school certification.
    * 3 of 11 participants stated that it would cause significant friction and delay with completing the CHAMPVA application because the school certification is not something they can obtain easily and quickly. 
    * 1 participant mentioned having to submit several school certification letters for the same university in order to maintain her dependent CHAMPVA status in between semesters.
     
### A11y Recommendations

* Reduce redundant name, address and contact questions to remove friction with screen readers. Having redundant questions can add confusion to a person only listening to the headers on the page because the assumption is that they need to fill out the same info again. 

    *_Supporting evidence:_*
    * Our pilot assistive technology user preferred to navigate by headers and did so for the majority of the form. This participant wanted to skip the second address page because she missed that the page was pre-filled.

    * One of our assistive technology participants (P20) stated that even though it’s nice to have the name, address and contact fields pre-filled but it requires too much mental energy to listen to the screen reader (Talkback) announce these fields. They would rather not see those pages at all. The participant goes on to mention that if we must show the redundant pre-filled pages it would be helpful to announce that users are to confirm that the information in these fields are correct.
      
* Reduce keyboard and screen reader users from losing their place when interacting with an object: It was noted that when a screen reader user selects one of the radio buttons on the initial signer question that it moves focus to another area on the screen causing the user to lose their place. It is recommended to perform an audit with a screen reader to check for these problems and fix them within the frontend code.

    *_Supporting evidence:_*
    * One of our assistive technology participants (P20) notes that after they select a radio button option at the bottom of the page the focus automatically jumps to the top making him lose his place when zoomed in. They noted that this would also confuse screen readers because it would read the top of the page again instead of moving to the next action meant to be taken on the page.

* Add focus to the header rather than the progress bar when entering a page. This form only includes 5 steps with multiple questions/pages under the same step. When entering a new page and the focus is on the progress bar, screen readers will read that first which gives the impression that the user is on the same page as the previous question and their progress has not changed.  

    *_Supporting evidence:_*
  * One of our assistive technology participants (P20) seemed confused by the progress bar remaining the same as they answered several questions. They expected to see more of a change as they progressed through the form.


## Product User and Business Outcomes

### Product User Outcomes

- **Veterans can complete and submit both the CHAMPVA benefits application and OHI certification through a unified digital interface.​**
  - This research supports our desired user outcome by confirming that users can successfully complete both the CHAMPVA and OHI forms through a single digital interface. 16 of 18 participants completed the merged form in one sitting, with the two exceptions due to technical issues in the staging environment or participant devices—not confusion with the form itself, suggesting high task completion success.
 
- **Veterans spend less time and effort filling out the forms.**
  - This research supports our desired user outcome by validating that users want the streamlined flow of the merged forms. Participants appreciated the streamlined flow and reported it was easier and faster than the paper-based process. 10 of 18 cited the overall flow as a key reason for ease, and others highlighted features like easy-to-read pages, inter-form navigation, and straightforward document uploads. Several commented positively on navigation and clarity, reinforcing that the merged form helps reduce burden.
  - 3 participants who were current CHAMPVA beneficiaries stated that the online form was a better overall experience than the paper/PDF version.

- **Veterans spend less time waiting to hear back on the status of their application**
  - Not included in this study. 
 
- **Veteran satisfaction increased with application experience.**
  - This research supports our desired user outcome by validating the navigation, ease of use, and clarity of steps with the merged application. 14 of 18 participants rated the form as “easy” or “very easy.” Positive feedback included comments on intuitive navigation, the clarity of steps, and the ease of uploading documents. Several participants expressed that they would feel comfortable applying for CHAMPVA online.

### Desired Business Outcomes

- **Reduce the amount of time spent processing paper forms.**
  - Not included in this study.

- **Expedite the application process for these two forms by reducing multitasking**
  - Not included in this study.

- **Reduce error rates or rejections by removing the dependence on handwritten forms.**
  - Findings highlight preventable causes of incomplete or incorrect submissions—such as misunderstandings about document requirements and confusion over the roles of signer, sponsor, and applicant—that can be mitigated in a digital environment through clearer terminology, improved instructions, and streamlined input flows.
  - Addressing these issues is expected to lower error rates and reduce rework compared to processing handwritten paper forms. Users were more satisfied and less likely to revert to paper forms—particularly when digital issues (terminology, instructions) are addressed.

## Key Performance Indicators

**Objective: Increase number of people filing online for CHAMPVA and OHI**
- **Key result: Increase % of Veterans and families who apply for health care benefits online**
- **Key result: Increase number of beneficiaries who apply for CHAMPVA & submit OHI online**
- **Key result: Applicant satisfaction increases due to digital form**

This research supports measurement of this KPI by showing that:

-  Users prefer the unified digital experience over standalone or paper forms (as reported by 3 current CHAMPVA beneficiaries included in this study).
-  This study also provides qualitative indicators that satisfaction and ease of use are strong enough to encourage wider adoption, especially once known pain points are addressed.
-  Validates that users can complete the merged application without major issues, supporting a push to phase out the standalone forms and paper pathway.
-  Capturing user quotes praising navigation, layout, and document supporting document upload ease.

**Objective: Reduce time to submit both CHAMPVA and OHI**
- **Key result: Measure number of applications completed in single session**
- **Key result: Lower average session length than submitting CHAMPVA & OHI separately**
- **Key result: Low dropoff when users encounter OHI part of merged solution**

This research supports measurement of this KPI by:

-  Demonstrating that 16 out of 18 participants completed the form in one session, with delays attributed only to technical issues—not user confusion.
-  Users noted that the merged form avoided the need to submit the two forms separately — a time savings even without exact session time comparisons.
-  Several participants commented on fewer clicks and less navigation effort than expected, which they linked to speed of completion.
-  Providing baselines for expected completion rates to measure against real-world metrics post-launch.

**Objective: Faster delivery of benefits for Veterans and their families**
- **Key result: Increase number of people who obtain approvals for claims filed**
- **Key result: Reduce processing and approval time**
- **Key result: Reduce the number of resubmissions**

This research supports measurement of this KPI by:

- 18 of 18 participants understood the documentation categories for applicant and OHI sections, which can reduce delays due to missing evidence.
- Participants called out that uploading supporting documentation was “a piece of cake” and easier than mailing or faxing, which should reduce the approval team’s document-gathering time.
- Identifying how the digital experience can reduce back-and-forth due to errors in submission (e.g., sponsor/applicant role mix-ups).
- Helping define form improvements that minimize resubmissions, allowing the approval team to process more efficiently.

## Next Steps

1. Address launch-blocking UX, UI, content and engineering concerns identified in testing to prepare for Staging Review.
2. Identify fast-follows and post-MVP improvements for the merged form experience.
3. Implement UX/UI/content changes identified in this study to other IVC forms, where applicable.

## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 

We recommended conducting additional research with the CHAMPVA partners to gain a better understanding of their school certification process, and how to better align business requirements with users' expectations. 

## Appendix
[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10D-OHI-Merge-Product-Outline.md)

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability/Research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability/Conversation-guide.md)

[Transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/champva/1010D/research/users/2025-05-1010D-OHI-merge-usability/transcripts)


## Tools used for Synthesis

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

Our intended audience for this study was Veterans with high disability ratings and their dependent spouses and children, who may or may not be currently enrolled in the CHAMPVA program. We split this study into three cohorts:

- **Cohort 1 (n = 12 minimum)**: Veterans with a 100% service connected disability rating with a spouse and/or dependent children who may or may not be enrolled in CHAMPVA benefits. 

- **Cohort 2 (n = 3 minimum)**: Spouses and dependent children of Veterans with a 100% service connected disability rating, who may or may not be enrolled in CHAMPVA benefits.

- **Cohort 3 (n = 2 minimum)**: Veterans with a 50% or higher service connected disability rating with a spouse and/or dependent children who may or may not be enrolled in CHAMPVA benefits. 

We talked to **18 participants.**

Audience segment:
* Veterans:  10 (5 without CHAMPVA beneficiaries / 5 with CHAMPVA beneficiaries)
* Family members of a Veteran: 4  (1 not currently enrolled in CHAMPVA / 3 currently enrolled in CHAMPVA)
* Assistive Technology: 4 (All without current CHAMPVA beneficiaries)


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
