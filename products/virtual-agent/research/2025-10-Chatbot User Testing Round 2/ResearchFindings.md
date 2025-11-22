---
title: "Chatbot User Testing Round 2"
product: "VA Chatbot"
team: "Chatbot Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-10"
researchers:
  - "Lucas Wright"
research_goals:
  - goal_1: "Increase the accuracy of the answers provided by the VA chatbot."
  - goal_2: "Present these answers in an easy to read, easy to follow format so Veterans can get the answers they need to complete the tasks they need to on VA.gov."
  - goal_3: "mprove the design by finding painpoints in the current proof of concept designs to accomidate any/all level of users."
methodology:
  "Moderated usability testing"
devices_used:
    desktop: X
    tablet:
    smartphone:
    assistive_technology: X
participants_total: 17
demographics:
  veterans: X
  service_members: 
  caregivers: X
  dependents: X
  VA_staff: 
  age:
    "25-34": 1
    "35-44": 4
    "45-54": 3
    "55-64": 3
    "65+": 6
    unknown: 0
  education:
    high_school: 1
    some_college: X
    associates: 1
    bachelors: 6
    masters: 6
    doctorate: 0
    unknown: 0
  location:
    urban: 11
    rural: 6
    unknown: 0
  race:
    white: 3
    black: 5
    hispanic: 2
    biracial: 5
    asian: 1
    native: 1
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 1
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "The chatbot is generally well-received, appreciated for concise answers, hyperlinked instructions, and clarity."
  - "Efficiency was praised compared to traditional support (“I liked that I didn’t have to wait on hold”)."
  - "Most found the format easy to scan/read, crediting bullet points, links, and breaks in information."
  - "Multiple sessions (especially among older or less tech-savvy users) noted the value in direct links and succinct instructions."
  - "Several participants indicated that answers were at a 'third grade reading level,' perceived as accessible."
  # etc.
recommendations:
  - "Clarifying Questions: Participants want fewer generic “please clarify” prompts; chatbot should proactively guide users to rephrase or select from options."
  - "Accessibility: Session 8 and feedback from visually impaired participants highlight need for streamlined navigation (screen reader click cues, skip navigation), clearer input guidance, and more auditory feedback."
  - "Choice Overload: Some feedback that too much detail or too many steps can overwhelm or slow the process."
kpi_alignment:
  - "Resolution Rate: High—Most participants reported being able to resolve issues (average 4.7/5 confidence in task execution)."
  - "First Contact Resolution: Average participant required 1-2 rephrasings per scenario to get a tailored answer, indicating room for improvement."
  - "User Satisfaction: 4.8/5 (average), consistent with Domo-reported satisfaction goals."
  - "Time to Resolution: Chatbot outperformed phone support in speed; delays only occurred when clarification was needed."
outcomes:
  user: "High satisfaction with general chatbot usability, especially for primary account issues."
  business: "Strong alignment with KPIs, especially resolution rate and user satisfaction."
opportunity_areas:
  - "Longitudinal Use: Follow-up with participants over weeks/months as suggested by Session 8 for more robust insight (“I haven’t interacted with it enough to give a definitive answer”)"
  - "Edge Case Simulations: More accessibility testing and rare-case recovery (e.g., multiple lockout scenarios, name-change/identity mismatch)."
  - "Mobile Device/Browser Compatibility: Session 7 notes Safari issues not present in Chrome; cross-platform reliability needs improvement."
further_research_needed:
  - "Expand Testing for Non-English Speakers and Rural Users: No explicit feedback collected from these groups; future sessions should target these demographics."
  - "Caregiver & Proxy Use Cases: Additional focus needed, given mixed feedback on authentication and permission issues."
  - "Mobile and tablet platforms"
underserved_groups_missing:
  - "Non-English Speakers: No test participants explicitly mention language barrier."
  - "Rural/Low Bandwidth Users: No tests for low-connectivity or device constraints."
  - "Severe Cognitive Impairment: No assessment of users with cognitive disabilities beyond “cognitive load manageable.”"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"
---

---

# Chatbot User Testing - Round 2 Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Chatbot Team**

**Date:** 11/21/2025

**Contacts:** Lucas Wright

**[Research Readout (PDF)](link-here)**  
*Add a link to your research readout deck, if available.*


**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Research Goals
The VA Chatbot aims to help Veterans self-serve and access information on VA.gov more easily, ultimately reducing call volume and supporting task completion without human assistance. The product assumes that improved digital experiences can shift behavior away from phone-based support, but gaps may exist in understanding edge cases, digital literacy, and accessibility for all user groups. The use case of this specific project is login or sign in questions, with a specific focus on unauthenticated questions for the chatbot. The long term goal of the chatbot is to have it in the bottom right corner of every page of VA.gov for use by Veterans and it is well documented that location of the chatbot is a poinpoint for many Veterans at the current time.

### Goals

**Clarity & Focus:**

The goals are clear, actionable, and generally measurable (accuracy, readability, pain points). However, specific success metrics (e.g., target accuracy rates, satisfaction thresholds) would make them more robust.


`1.` **Increase the accuracy of the answers provided by the VA chatbot.**

`2.` **Present these answers in an easy to read, easy to follow format so Veterans can get the answers they need to complete the tasks they need to on VA.gov.**

`3.` **Improve the design by finding pain points in the current proof of concept designs to accomidate any/all level of users.** 

**Guiding Questions:**  
- What are the key moments this tool supports in the Veteran’s journey?  
- What outcomes are we aiming to achieve for Veterans and stakeholders?  

[Example Research Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#research-goals) 

## Research Questions

*List the research questions that guided this study.*  

* Question 1
* Question 2
* Question 3

[Example Research Questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#research-questions)

## Methodology 

*Provide a brief description of the research methods used (e.g., usability testing, interviews).*  

- Method 1: Description  
- Method 2: Description  

[Example Methodology](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#methodology)


## Hypotheses and Conclusions

*List hypotheses explored in the research and the conclusions drawn. If applicable, list the success or task completion rate.*

> [!TIP]
> Place true or false statements in bold for easier scanability

- **Hypothesis Statement:** [Insert statement]  
  - **"Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”**  
  - Supporting evidence  

[Example Hypotheses and Conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#hypotheses-and-conclusions)


## Key Findings

*Summarize the 5–10 most impactful findings from your study.* 

> [!TIP] 
> Write findings as stand-alone insights that are easy to scan. For example:  
> - "Most participants used the search field to locate forms, often searching for 'veteran health.'"  
> - "Participants struggled with the secondary caregiver section on the form."  

[Example Key Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#key-findings)

1. Finding one
1. Finding two
1. Finding three
1. Finding four
1. Finding five
1. Finding six
1. Finding seven

## Details of Findings 

*Provide detailed descriptions and supporting evidence for each key finding.*  

### Finding 1
Brief description  
- _Supporting data: Quote [add context]_  
- _Supporting data: ![description of the image (image)](link - add image to github folder and link here with .png)_  

> **TIP:** For details on how to write descriptive links that are accessible to assistive technology users, see Platform documentation on [How to create accessible GitHub Markdown files](https://depo-platform-documentation.scrollhelp.site/research-design/how-to-create-accessible-github-markdown-files).

### Finding 2  
Brief description  
- _Supporting data: Quote [add context]_  

---

## Additional Insights
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

### Desired User Outcome 
This research supports our desired user outcome by....
 
### Desired Business Outcome
This research supports our desired business outcome by....


## Key Performance Indicators

*Explain how findings will support KPI measurement.*  

> [!NOTE]
> Refer back to your Product Outline. 

### KPI 1
This research supports measurement of this KPI by....


## Next Steps

*Outline immediate actions based on findings, including owners if applicable.*  


## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 


## Appendix

### Research documents
- [Product Outline](link here)
- [Research plan](link here)
- [Conversation guide](link here)
- [Interview transcripts](link here)

### Tools used for Synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
  
### Pages and applications used

*Link to prototypes or pages tested during the study.*  


### Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


### Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.*  

### Research participants 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 

[Example Research participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-findings.md#research-participants)

#### Recruitment criteria

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

#### Demographics 

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


#### Underserved groups we haven’t talked to 
> [!NOTE]
_Complete the [VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726):_
> 1. Duplicate the ***Template*** worksheet
> 1. Enter your participant information **(see the *Template Instructions* worksheet for details)**
> 1. Make a screenshot of the cells that you want to share and paste it into this report below
> 1. Generate an accessible version of those cells using Github Copilot Chat:
>    - Start a new Github Copilot chat
>    - Enter: "I want to convert these spreadsheet cells into a table in markdown:" 
>    - Copy and paste the cells from the recruitment checker spreadsheet that you've filled in
>    - Copy the resulting markdown table by clicking the copy icon in the Copilot chat, and paste it into this report below 
>    - (If Copilot returns an error, try using a different AI model, such as "Claude Sonnet 3.7 Thinking")

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

➡️ _[insert screenshot of completed recruitment checker in the format below]_

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](link - add image to github folder and link here with .png)

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in [Study name]

➡️ _[paste markdown table of completed recruitment checker from Github Copilot chat]_



Summarize and examine all 17 uploaded files and give an accurate and complete summary of the data therein.  Give an average rating of the 1-5 sliding scale questions.  Find the items that participants had the most trouble with.  Point out memorable quotes with attributed particpant who quoted this, popular and repeated phrases and sentiments and give an overall detailed analysis of the data from these transcripts. I also request that the data source statements be fact-checked before they appear in any summary. Review for stray range statements or other possible artifacts that may drift in during drafting.

Include information that breaks down the number of each category interviewed.  That is, how many venterans, how many caregivers, how many dependants.  Analyze and compare/contrast those answers in relation to the entire summary previously given. 

