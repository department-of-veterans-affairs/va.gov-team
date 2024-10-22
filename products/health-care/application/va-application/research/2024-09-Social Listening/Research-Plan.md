# Research Plan for 10-10EZR, User Generated Content Analysis
**Office of the CTO - Digital Experience, Health Enrollment Team, 10-10EZR**
September 2024

Hieu Vo and Renata Keck

## Background
The online health care application (VA Form 10-10EZ) and the update form (VA Form 10-10EZR) can both impact a Veteran's eligibility and placement when applying for and managing their health care benefits. This is moreso impactful for those placed in a [Priority Group](https://www.va.gov/health-care/eligibility/priority-groups/) who need to report additional income information to be considered for copay and travel reimbursement in addition to their basic eligibility. The 10-10EZ is the initial application that places a Veteran in a Priority group for enrollment into the full medical benefits package. The 10-10EZR is used to provide personal, financial or insurance information updates after enrollment.

The outcome of this exploratory research study will aid in further understanding how Veterans comprehend their eligibility for health care benefits as it pertains to applying for and maintaining those benefits.

[Link to Priority Groups product initiative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Priority%20Group).

### OCTO Priorities 
This research supports OCTO-DE's 2024 priorities, specifically [objective 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md): to make digital experiences the best way to access VA health care and benefits.

Data collected from this study will contribute to designing an updated process for applying for and maintaining eligibility for medical benefits that can be easily understood and managed online.

### Veteran Journey
The 10-10EZ and 10-10EZR fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) any time between getting out and dying, as a Veteran could be applying for and updating their information to maintain medical benefits around any milestone or change in life circumstances.

Special attention has been paid to Starting Up, Taking Care of Myself and Putting Down Roots sections within the Veteran journey in this study.

## Research Goals	
Health care updates, especially regarding financial information, are a critical touchpoint in a Veteran's health journey, as they determine a Veteran's deligibility for receiving non-service-connected care at VA facilities, as well as other health care benefits.

The online Health Care Benefit Update form (VA 10-10EZR) is vailable, but currently there is no notification system in place online to inform the Veteran about when to update their information and why that information is important to keep current. This raises key questions: Who should be notified? When should we notify them? How often should notifications be sent out? Moreover, [how should be categorize Veterans for these notifications](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1698266698151/d82092b38107a883cc3975d9ea21deaf4fb0739a?sender=u503219bf4e47eab9c75d3838)? Should we group them by Priority Group, by Disability Rating, or by other eligibility factors?

To address these questions, we propose taking a step back to analyze online user-generated content (UGC). By examining real-world experiences and questions shared by Veterans and other VA health care users, we aim to gain insight into their expectations, pain points, and preferences regarding notifications. This approach allows us to:
- Goal 1: Understand how Veterans currently perceive their health care journey, especially in terms of financial eligibility
- Goal 2: Identify frustrations or gaps in VA-Veteran communication that could help us shape more effective notification strategies
- Goal 3: Determine patterns that may help us decide how to group Veterans for tailored notifications (e.g., by disability rating, health care needs, or personal preferences)

### Outcome
1. Prioritize areas for design and engineering discovery for 10-10EZR notifications
2. Determine the best groupings for tailored notifications
3. Identify gaps to address in future research

### Research questions
**Goal 1: Understand how Veterans currently perceive their health care journey, especially in terms of financial eligibility**
1. How much do Veterans associate income with Priority Groups, and by extension, the covered care they can expect to receive at VA?
2. How do Veterans perceive the financial-related information provided by the VA, such as copays and travel reimbursement?

**Goal 2: Identfy frustrations or gaps in VA-Veteran communication that could help us shape more effective notification strategies**
1. When do Veterans want to know about insurance and eligibility? Are our assumptions wrong?
2. What do Veterans identify as their main frustrations with the current notification system (e.g., timing, clarity, or frequency)?

**Goal 3: Determine patterns that may help us decide how to group Veterans for tailored notifications (e.g., by disability rating, health care needs, or personal preferences)**
1. Do Veterans know which life events necessitate updaitng their information through the 10-10EZR form, and if so, which life events?
2. Do Veterans understand why they need to update their information on a (semi)regular basis to maintain their eligibility?

### Hypotheses
1. Veterans do not fully understand how financial information, such as income, impacts their eligibility for health care benefits, including Priority Group rating and covered care
2. The current method of notifications about insurance, reliability, and billing updates do not align with Veterans' preferences, leading to confusion and frustration
3. Veterans are unclear about which life events are changes to their circumstances require them to update their information using the 10-10EZR form, resulting in infrequent updates that could negatively affect the continuity of care they receive

## Methodology	
We will be collecting and analyzing [user generated content](https://www.sciencedirect.com/topics/computer-science/user-generated-content) (UGC) from public, Veteran-centered communities on [Reddit](https://www.reddit.com/). This data will be anonymized during analysis, and destroyed at the conclusion of the study, in accordance with ethical data collection guidelines.

Qualitative data will be collected and analyzed for thematic, sentiment, and narrative findings. If relevant, statistical significance will be calculated relative to key findings.

### Why Reddit?
**Targeted search results**
Google search results have become less and less accurate and reliable over time, for a number of reasons, from the proliferation of ads, to SEO-optimized junk sites, to AI generated content ([1](https://dkb.blog/p/google-search-is-dying)). Users find Reddit recommendations useful, and increasingly are appending “Reddit” to their online search criteria to specifically seek out content on the platform ([2](https://www.fastcompany.com/90722739/is-reddit-a-better-search-engine-than-google), [3](https://blog.google/inside-google/company-announcements/expanded-reddit-partnership/)).

**Trust**
Past research has shown that Veterans feel more comfortable seeking peer support to navigate VA experiences. Many Veterans mistrust [VA.gov](https://www.va.gov) and seek support before engaging with it. Veteran-centered subreddits are among the largest and most active communities on the platform: [r/VeteransBenefits](https://www.reddit.com/r/VeteransBenefits/) is in the Top 1%, and [r/VeteransAffairs](https://www.reddit.com/r/VeteransAffairs/) the top 10% by size, respectively. These and other Veteran-centered subreddits have developed resources specifically for individuals seeking assistance with understanding service-connected disability benefits and health care.

### Location
This study will be remote, asynchronous, secondary research. Analysis tools will include spreadsheets and Mural.

### Research materials
- [Link to User Generated Content analysis Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726532865198/888111d9429b3f4a0c1ad8ac8287dffcf09a7682?sender=u503219bf4e47eab9c75d3838) 
- [Link to EZR notifications discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1698266698151/d82092b38107a883cc3975d9ea21deaf4fb0739a?sender=u503219bf4e47eab9c75d3838)
