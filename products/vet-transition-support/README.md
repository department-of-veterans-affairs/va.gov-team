# Veteran Transition Support
## Product Outline


### Problem to Solve
Transitioning Servicemembers (TSMs) and Recently Separated Veterans (RSVs) are particularly overwhelmed by the transition process. The entire process, from planning, to separation, to adjustment to civilian life can occur over the course of several years. The change to routines and circumstances are a major change and during that time there is an increased risk of creating vulnerable populations. In addition to juggling personal challenges, TSMs and RSVs have no easy way to find the range of benefits which they are eligible for.

### Opportunity
As part of the President's Management Agenda (PMA) and in partnership with VEO and OTED; VA has an opportunity to address the specific needs of TSMs and RSVs. By creating centralized resources and a "front door", we can help navigate benefits for awareness, and make personalized recommendations based on the information we receive. Veteran Transition Support, also known as "Transition Experience" is a product that bridges the gap between DoD and VA for incoming Veterans around core VA benefits (healthcare, disability, education, career planning, housing) and extended benefits from cross agency partners (SBA, DOL, HUD, etc). It can be enriched by connections to various systems and services such as VA.gov personalization, MyVA, Benefit Discovery Service (BDS) and VA Solid Start, as well as any other onboarding programs around Transition.

### Key Outcome
The primary goal of Veteran Transition Support is to aid in simplifying the enrollment process by acting as a hub for TSMs or RSCs discover their benefits and understand eligibility. The main goals are to 
- increase the utilization of benefits
- improve awareness of benefits beyond the most well-known (healthcare, disability, home loan) as well as other non-VA benefits (SBA, DoL, etc)
- create earlier engagement between VA and active servicemembers
- increase the proportion of Veterans that engage with VA post-service

While the initial value proposition is aimed at TSMs and RSVs, the Veteran Transition Support product is meant to be useful for anyone engaging with the VA including family members and caregivers, as well as Veterans re-engaging with VA regardless of their time since service.

### Product Link
The current product is an [unauthenticated questionnaire](https://www.va.gov/discover-your-benefits/introduction) hosted on VA.gov and is publicly accessible.

### Additional Context
The project is a merger of two separate initiatives; Transition Assistant from VEO and Extended Statement of Benefits from OTED.

#### Transition Assistant
The VEO team conducted research around the challenges in Transition and created the concept for the Transition Assistant (TA). It was designed as a more structured approach to transition with clear steps and guidance for a transitioning servicemember, from creating civilian resumes, to finding employment, housing, etc. It is meant to cover the gaps between the explanation of benefits that TSMs receive from various sources such as the Transition Assistance Program (TAP) courses and the actual required steps in the process of getting out of the service.

#### Extended Statement of Benefits
Outreach, Transition and Economic Development (OTED) simultaneously conducted research around the challenges with benefit discovery. The original Statement of Benefits exists in the form of a PDF, alongside the Transition Assistance Program (TAP) resource book as an explanation of benefits. While detailed, these static documents are not an easy reference when going through the many activities of transition. The goal of the Exteneded Statement of Benefits (ESOB) was to provide a more dynamically navigable list of resources and benefits that change based on a person's eligibility. A secondary goal was to include a more comprehensive list of benefits and resources beyond VA; such as Veteran Preference in hiring which is not a direct VA benefit, but can be difficult to cross-reference against VA administered benefits.

### Discovery
The VES research is conducting discovery research which consists of: 
1. A desk research review of any existing research and prototypes from VES, VEO, OTED and any other relevant studies around Transition (including those done by BDS and Personalization teams) 
2. Concept testing with a range of participants to determine pain points and an ideal starting place for an MVP launch planned for September 2024, including the following groups: 
+ Internal VA subject matter experts
+ Veterans
+ Transitioning Servicemembers
+ Commanding Officers
+ + [Interview Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/vet-transition-support/research/2024-02-discovery/research-findings.md)
3. Several rounds of testing with a clickable prototype with a similar group of participants to phase 2.
+ + [v1 prototype user testing with users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/vet-transition-support/research/2024-07-user-testing-v1/research-findings.md)
+ + [v1 prototype user testing with internal stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/vet-transition-support/research/2024-07-user-testing-v1/v1-sme-vso-user-testing-research-findings.md)
+ + [v2 prototype user testing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/vet-transition-support/research/2024-10-user-testing-v2)

### Roadmap for questionnaire
In the short term
- Updating the questionnaire with more accurate questions around service history (for guard and reserve)
- Bug fixes, improving written content for clarity, small fast follows (ex: link to resources for state VA benefits)

In the medium term
- Creating a basic structure to organize transition tasks for active service members, that gets broad approval from DoD for accuracy.
- Making the information more personalized and relevant for other non-Veteran groups (family members, caregivers, friends, advocates, etc) looking for information for themselves or to help others.

In the long term
- Integrating with other VA systems like MyVA, BDS, the Innovate Iterate and Run team (IIR) and authenticated experiences in general to get more accurate information from service members for eligibility calculations to align efforts, streamlime processes and make discovering and enrolling in benefits more straightforward.

We envision that this product will take roughly 2-4 years to see to completion. We plan to deliver value incrementally through periodic releases, but realizing the full goal of the original ESOB and TA may be beyond the scope of a single product.

In addition to the questionnaire itself, we are looking at additional ways to expand our sights onto other aspects of the broader Veteran and service member onboarding experience including
- Content audits for pages on VA.gov around transition
- Consolidating existing benefit resources (discover.va.gov, choose.va.gov, REACH)
- Connecting more entry points for transition related resources (TAP courses, Solid Start, VA mobile app, DoD websites, etc)
- Exploring a series of smaller tools to help understand benefits, such as a disability percentage calculator
- Working with teams to align on efforts for onboarding to VA.gov / MyVA landing pages

We will continue to improve the product, stay current with the VA Design System, evolving VA best practices, and subject matter expert guidance.

### MVP Strategy
Our updated MVP strategy is as follows:
+ Jan 2025: Launched our initial Discover your benefits product on the live VA.gov website with ~20 benefits. The initial product allows the user to provide some basic information about goals and service history, which informs the recommended benefits shown on the Results page. The product also includes a "window shopping" mode, as requested during user research, to show all of the benefits available in our tool. This release is unauthenticated and relies on manually entered data.
    + For design purposes, this is v2 of our product. We contributed to an interim "v0" release of the [Getting started with VA](https://www.va.gov/resources/getting-started-with-va/) page that links to several information hubs for service members, Veterans, caregivers and family members. Our v1 product with ~8 benefits went through the Collaboration Cycle in fall 2024, but did not launch to production.
+ Mar 2025: Release v2.5 to enhance the current experience. v2.5 is slated to include new questions about active-duty, Reserve, and Guard service to improve the relevance of our benefit recommendations. This version will also include updates to the "window shopping" page to clearly differentiate from a user's personalized Results page.
+ Jun 2025: Conduct user testing on the live v2.5 product and planned transition timeline content. Based on the user research, our team will release v3, which will incorporate the transition timeline to support TSMs and improve current content.
+ Sep 2025 and beyond: Expand on the v3 product to include an authenticated experience and to use BDS for the backend recommendation logic.
