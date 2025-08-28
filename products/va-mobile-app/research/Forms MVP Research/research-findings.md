---
title: "[Forms MVP Usability Study] Research Findings"
product: "VA Health & Benefits Mobile App"
team: "Mobile App & Platform Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-08-28"
researchers:
  - "Christine Julian (Researcher)"
  - "Jonathan Post (UX Designer)"
research_goals:
  - "Understand if Veterans can find and interact with forms from the app."
  - "Identify if Veterans can fill out a form from the app on their own."
  - "Identify any usability issues Veterans may experience when interacting with forms on the mobile app."
  - "Identify if Veterans can start a form and come back to it at a later time to complete."
methodology:
  - "Moderated Usability Testing"
  - "System Usability Scale Survey"
devices_used:
    desktop: X
    tablet: X
    smartphone: 11
    assistive_technology: X
participants_total: 11
demographics:
  veterans: 11
  service_members: X
  caregivers: X
  dependents: X
  VA_staff: X
  age:
    "25-34": X
    "35-44": 1
    "45-54": 3
    "55-64": 4
    "65+": 3
  education:
    high_school: X
    some_college: X
    associates: 1
    bachelors: 3
    masters: 7
    doctorate: X
    unknown: X
  location:
    urban: 4
    rural: 7
    unknown: X
  race:
    white: 4
    black: 2
    hispanic: 2
    biracial: 2
    asian: 1
    native: X
  disability:
    cognitive: X
    AT_beginner: X
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: X
    speech_input: X
    hearing_aids: X
    sighted_keyboard: X
    captions: X
key_findings:
  - "Finding 1"
  - "Finding 2"
  # etc.
recommendations:
  - "Recommendation 1"
  - "Recommendation 2"
kpi_alignment:
  - "KPI 1"
  - "KPI 2"
outcomes:
  user: "Desired user outcome"
  business: "Desired business outcome"
opportunity_areas:
  - "Unmet need 1"
  - "Research gap 1"
further_research_needed:
  - "Test with assistive tech users"
  - "Area 2"
underserved_groups_missing:
  - "Group 1"
  - "Group 2"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Github CoPilot Ai: Gemini 2.0"
  - "Affinity Mapping in Figjam"
---

---

# Forms MVP Usability Study Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Product Name, Team Name**

**Date:** 08/28/2025

**Contacts:** [Christine Julian (Researcher)], [Jonathan Post (Designer)]

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
The key objective of this study is to evaluate the usability of completing a VA form in a webview from the VA Health and Benefits app. Additionally, the research aims to uncover the following:

1. Understand if Veterans can find and interact with forms from the app.
2. Identify if Veterans can fill out a form from the app on their own.
3. Identify any usability issues Veterans may experience when interacting with forms on the mobile app.
4. Identify if Veterans can start a form and come back to it at a later time to complete.

This research can impact Veterans across many phases of the Veteran journey from Getting out to Death
[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)  

**Guiding Questions:**  
- What are the key moments this tool supports in the Veteran’s journey?  
- The results of the study will help us determine if Veterans are able to fill out and complete forms from the mobile app and to identify any pain points. This will inform future form development on the app. 

[Example Research Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#research-goals) 



## Research Questions

*List the research questions that guided this study.*  

Research goal #1: Understand if Veterans can find and interact with forms from the app.

1. How easily can Veterans locate the forms section within the mobile app?
2. What steps do Veterans take to start a new form from within the app?
3. Are there any points of confusion or difficulty when Veterans attempt to start a new form?

Research goal #2: Identify if Veterans can fill out a form from the app on their own.

1. Can Veterans independently complete all required fields in a form using the mobile app?
2. Do Veterans understand the instructions and language used in the forms?
3. How do Veterans interpret the status of the form once the form is submitted?

Research goal #3: Identify any usability issues Veterans may experience when interacting with forms on the mobile app.

1. What challenges, if any, do Veterans encounter while entering information into the forms?
2. What, if any, technical or design barriers prevent Veterans from successfully interacting with forms?
3. How do Veterans feel about the overall experience of using forms in the mobile app?
4. Research goal #4: Identify if Veterans can start a form and come back to it at a later time to complete.

Can Veterans locate and resume a form they previously started in the mobile app?
1. Do Veterans encounter any challenges or confusion when attempting to access and complete a saved or in-progress form?
2. What steps do Veterans take to find and finish a form they started earlier?
3. Are there any barriers that prevent Veterans from successfully submitting a previously started form through the app?


## Methodology 

*Provide a brief description of the research methods used (e.g., usability testing, interviews).*  

- Method 1: Moderated usability study (remote)
- Method 2: SuS Survey (system usability scale)


## Hypotheses and Conclusions

*List hypotheses explored in the research and the conclusions drawn. If applicable, list the success or task completion rate.*

> [!TIP]
> Place true or false statements in bold for easier scanability

- **Hypothesis Statement:**

Research goal #1: Understand if Veterans can find and interact with forms from the app.

1. Veterans will be able to easily locate the forms section within the mobile app without extensive guidance.
- **Likely False**. Many participants needed guidance to locate the "Go to my forms" button, as they initially thought to look under "Claims" or "Benefits." 
2. Veterans will be able to follow the intended navigation steps to start a new form from within the app.
- **Likely True**. Veterans could generally follow the steps, but the research also revealed issues with participants skipping introductory text on screen "Submit a statement in support of a claim" and being unclear about which option to choose on the screen 'What would you like to do".
3. Some Veterans may experience confusion or difficulty due to unclear labeling or navigation options related to forms.
- **Definitely True**. User confusion on the form selection screen 'What would you like to do', returning to the app from webview via the "Done" button placement, combined with lower SuS scores on "well integrated" directly contribute to a less usable system.

Research goal #2: Identify if Veterans can fill out a form from the app on their own.

1. Most Veterans will be able to independently complete all required fields in a form using the mobile app.
- **Likely True**. The research showed that Veterans could complete the fields. Although they encountered some challenges with typing difficulties from their mobile devices. In part, related to small touch targets and auto-corrections from their device.
2. The instructions and language used in the forms will be clear and understandable to Veterans.
- **Definitely False**. The research revealed that the instructions and language used in the forms were often not clear and understandable, particularly on the form selection screen 'What would you like to do?' and regarding the meaning of the "In Progress" status following submission of the form.
3. Some Veterans may experience confusion interpretting the status of the form after submission.
- **Definitely True**. The "In Progress" status was consistently misinterpreted, with Veterans unsure if it meant the form had been submitted, was still being drafted, or was being reviewed.

Research goal #3: Identify any usability issues Veterans may experience when interacting with forms on the mobile app.

1. Veterans may encounter difficulty entering information into forms from their mobile device.
- **Definitely True**. The research confirmed that typing on a mobile device was a significant challenge, leading to errors and frustration.
2. Technical or design barriers, such as small touch targets or required page scrolling, may add additional frustration for Veterans when completing forms from a mobile device.
- **Definitely True**. The research identified the "Done" button placement required to return to the mobile app from webview was widely missed, while users often did not dismiss toast messages blocking needed content, and the small touch targets on their mobile keyboards resulted in typos that caused additional frustration.
3. Veterans will have mixed feelings about the overall experience, with some expressing frustration regarding usability issues and others finding the process straightforward.
- **Definitely True**. The research revealed a range of feelings, with some Veterans finding the process relatively easy while others expressed significant frustration with the identified usability issues. The overall SUS scores, along with the specific responses to questions about ease of use, complexity, and consistency, provide strong quantitative evidence that usability issues are negatively impacting the user experience.

Research goal #4: Identify if Veterans can start a form and come back to it at a later time to complete.

1. Veterans will be able to locate and resume a form they previously started within the mobile app.
- **Definitely True**. Veterans were able to locate and resume previously started forms without difficulty.
2. Barriers such as difficulty finding saved forms or unclear resumption instructions will prevent some Veterans from successfully submitting a previously started form.
- **Likely False**. Users did not experience problems directly related to the ability to find started forms, resume and successfully submit.  

  - Supporting evidence  

[Example Hypotheses and Conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#hypotheses-and-conclusions)


## Key Findings

*Summarize the 5–10 most impactful findings from your study.* 

> [!TIP] 
> Write findings as stand-alone insights that are easy to scan. For example:  
> - "Most participants used the search field to locate forms, often searching for 'veteran health.'"  
> - "Participants struggled with the secondary caregiver section on the form."  

[Example Key Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#key-findings)

**1.** Veterans perceive the system as highly usable. With a SuS score of **84.38** a rating of **excellent** ikely to be well-received by users.

**2.** Finding two

**3.** Finding three

**4.** Finding four

**5.** Finding five

**6.** Finding six

**7.** Finding seven


## Details of Findings 

*Provide detailed descriptions and supporting evidence for each key finding.*  

**Finding 1:**  
Brief description  
- _Supporting data: Quote [add context]_  
- _Supporting data: ![text](link - add image to github folder and link here with .png)_  

**Finding 2:**  
Brief description  
- _Supporting data: Quote [add context]_  

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
[Product Outline](link here)

[Research plan](link here)

[Conversation guide](link here)

[Interview transcripts](link here)


## Tools used for Synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
  
## Pages and applications used

*Link to prototypes or pages tested during the study.*  


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
