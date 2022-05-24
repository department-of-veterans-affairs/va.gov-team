
---

# Modernized Check-In Experience: St. Louis Pilot UAT with Veterans Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Healthcare Products, Modernized Check-In Experience**

Date: 05/17/2022

Ben Brasso [[ben.brasso@agile6.com](mailto:ben.brasso@agile6.com)], Ya-ching Tsao [[yaching.tsao@civicactions.com](mailto:yaching.tsao@civicactions.com)], Zach Park [[zach.park@agile6.com](mailto:zach.park@agile6.com)], David Dunnam [[david.dunnam@va.gov](mailto:david.dunnam@va.gov)]

[Research Report PDF]

<br>

**Jump to:**

[Hypotheses and conclusions]

[Key findings]

[Recommendations]

[Who we talked to]

<br>

# Research Goals

The check-in product is reimagining the ecosystem that allows a Veteran to check in for a medical appointment. The check-in experience team, in particular, has created the portion of the ecosystem that enables a Veteran to utilize their mobile device to “check-in” through VA.gov (e.g., letting the VA know that the patient has arrived for their appointment). 

With this round of research, we are looking to gather feedback on the pilot release from Veterans across the St. Louis area. To date, we haven’t spoken with any Veterans who completed the live pre-check-in experience. Within this study, we want to understand how the pre-check-in experience was perceived by Veterans, especially when combined with check-in. It is difficult to recruit Veterans who have completed pre-check-in remotely utilizing our Perigean pool of participants, since we are at such a limited number of clinics. This is why we are interested in going on site to intercept Veterans, who are more likely to have completed pre-check-in.

The purpose of this research was to: 

- Evaluate effectiveness of check-in and pre-check-in experiences with Veterans and staff at St. Louis pilot clinics.
- Identify strengths, pain points and opportunities to inform product team and roadmap (as VISN rollouts begin). 
- Evaluate effectiveness of new poster that addresses low-vision concerns. 
- Gain insights and opinions on product naming.  
- Gain insights from VA staff on opportunities to integrate telephone appointments with pre-check-in and displaying patient record flags in VSE-CS. 

# Research Questions

- Are Veterans able to complete pre-check-in successfully from home? Do they understand the difference between pre-check-in and check-in? 
- What friction points arise for Veterans during check-in? How easy or difficult is check-in to complete on VA.gov? 
- What is the impact on the new poster addressing low vision concerns? 
- How do Veterans refer to the check-in process? 
- How do MSAs interact with Veterans during the check-in process? What impact does pre-check-in and check-in have on MSAs workflow? 
- What are the overall impressions of check-in among Veterans and staff? 
- How are patient record flags currently used by staff? 
- How would adding telephone appointments to the pre-check-in experience impact staff workflow?  

# Methodology 

From April 27-29, 2022, we visited St. Louis VAMC, North County CBOC and Olive Street VA Clinic to conduct intercept interviews with Veterans when they arrived for their appointment. We observed Veterans interact with the updated poster, complete check-in on their mobile device and asked follow-up questions using our [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/StLouis-pilot-feedback/conversation-guide.md).

We also observed and interviewed a variety of VA staff who have a role in the check-in process, including MSAs and clinicians. We used a [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/st-louis/pilot-feedback/conversation-guide.md) to steer those conversations. 

# Hypotheses and Conclusions

1. Veterans should be able to successfully complete pre-check-in from the comfort of their homes. Veterans will correctly assume that they still need to complete mobile check-in even if they completed pre-check-in. The pre-check-in experience improves the staff experience, since they need to review contact, next of kin and emergency contact information with fewer Veterans.<br>
    1. NOT ENOUGH INFORMATION: Most Veterans we spoke with did not complete pre-check-in. Therefore, there wasn't enough information to determine ease of use or perceptions about how it's related to check-in. However, staff said that when Veterans complete pre-check-in, it creates a more seamless check-in experience on the day of the appointment. 
1. Veterans will be able to successfully check-in via their mobile device, verify their identity and confirm their demographic information without any friction. In the ideal scenario, Veterans will be able to complete check-in with little to no intervention from MSAs. Therefore, MSAs should have shorter lines of Veterans waiting to check in, since Veterans will be utilizing the new check-in solution in the waiting area. 
    1. MAYBE TRUE: Some Veterans were able to complete check-in on their own, while others needed assistance from MSAs. In addition, in some clinics, MSAs engaged Veterans to help with the check-in process. Of course, there were Veterans that did not want to use the mobile check-in process, therefore requiring MSAs to assist them with check-in through VSE-GUI. 
1. The updated poster enables low-vision Veterans to easily read check-in instructions. 
    1. NOT ENOUGH INFORMATION: Based on the nature of the research, we were not able to capture demograhpic information from Veterans. Many Veterans at the eye clinic were not thrilled with checking in on their mobile device, but it's unclear if the poster was problematic for them. 
1. MSAs will still check-in Veterans who prefer in-person over mobile. 
    1. MAYBE TRUE: Some clinics checked Veterans in through VSE-GUI that didn't want to use their phone, while other clinics were much more insistent on Veterans using thier phones.  
1. Veteran responses will indicate that the pre-check-in and mobile phone check-in solutions are useful and do not negatively impact their care experience.
    1. MAYBE TRUE: Responses were mixed. Some Veterans simply do not want to use their phone to check in, and of course, some cannot due to various reasons. However, other Veterans had no difficulty with the new process. 
1. Staff responses will indicate that the mobile check-in solution is useful and does not negatively impact experience or clinical workflow.
    1. MAYBE TRUE: Staff see the potential, but are hesitant until technical and lag issues are resolved. 
1. Properly displaying patient record flags is very important to staff.
    1. NOT ENOUGH INFORMATION: There were mixed opinions on where patient record flags should reside. Some feel that flags could be added to VSE-CS, while others are content with CPRS. 
1. Gathering necessary pre-registration and other information prior to a telephone appointment can be difficult. Adding telephone appointments to pre-check-in would solve the staff pain point of reviewing pre-registration during appointments.
    1. LIKELY TRUE: Clinics and providers seem to be inconsistent in how pre-registration is completed for telephone appointments. Therefore, utilizing the new check-in process would create consistencies. 

# Key Findings

1. MSAs 

# Details of Findings 

Labels: AUD: Veterans, HDW: Smartphone, PRDT: health-care-check-in, RESRCH: User Acceptance Testing, RESRCH: Interviews, VETSJNY: Taking care of themselves

**MSAs see value in allowing editing of demographic information in pre-check-in.**

MSAs felt that allowing Veterans to edit their information in pre-check-in would expedite the check-in process. I.e., Veterans wouldn't be required to speak with an MSA if their information needs to be updated. In turn, shortening the line of Veterans that have to speak to MSAs on the day of their appointment. 

> _If the Veteran does pre-check-in, it saves us time. They should be able to update their demographic information in pre-check-in._

# Recommendations

* **Pre-check-in**
    * Explore opportunities to increase utilization of pre-check-in with Veterans (to ensure it doesn't "get lost.") For example, communicating the value to Veterans, test new text message variations, send the text message multiple times if not completed, send text message at a different time or day after confirminng their appointment, move pre-check-in link into initial text message, introduce email for pre-check-in, etc. 
    * Consider implementing editing of demograhpic information in pre-check-in. 

# Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/st-louis/pilot-feedback/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/st-louis/pilot-feedback/conversation-guide.md)

[Session notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/st-louis/pilot-feedback/session-notes/session-notes.md)


## Tools used for Synthesis

[Research Synthesis Mural](https://app.mural.co/t/vfscie8528/m/vfscie8528/1651764128759/12f7863ae34343d5eb0086756dee8998d6124f61?sender=u70b8b2930b03d3ef317d2520)

## Pages and applications used

[Check-In Product Demo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/product/product-demos)

## Who we talked to

9 MSAs, MSA Leads and clinic administrators
6 clinicians

Due to the intercept method used for this research, we were unable to collect demographic information that supports the VA's inclusive research guidelines. 

We spoke with staff from a number of clinics, including:

- North County CBOC, St. Louis (Primary care, wellness, nutrition, etc.) 
- GI Lab, Eye Clinic, OT/PT, Speciality Care Clinic (at St. Louis VAMC) 
- Olive Street VA Clinic (Women's Health and Dermatology Clinic) 
