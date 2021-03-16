# Product Outline: Content & Localization
 
## Table of Contents:

  * [What is the Problem to be Solved?](#What-is-the-Problem-to-be-Solved)
  * [Objectives](#Objectives)
  * [Our Bets](#Our-bets)
  * [Measuring Success](#Measuring-success) 
  * [Product Requirements](#Product-requirements)
  * [Solution Approach](#Solution-Approach)
  * [Go-to-Market Strategy](#Go-to-Market-Strategy)
  * [Key Artifacts](#Key-Artifacts)
  * Technical Artifacts
  * Status and Decisions
  * [For Reference](#For-Reference)

## What is the Problem to be Solved?

Veterans and their family members with limited English proficiency (LEP) don't have access to essential VA content online in their native language. 
We outline 3 key aspects of this problem:

- Lack of a sustainable, strategic approach to translated content: VA has existing guidance for complying with Executive Order 13166, Improving Access to Services for Persons with Limited English Proficiency, 65 Fed. 50,121 (Aug. 16, 2000). But VA currently doesn't currently prioritize localization of digital content in a programmatic and sustainable way. Some translated materials do exist, but they're scattered and there is no current organization-wide program to ensure that we're translating essential content or keeping translated content accurate and up to date.

- Other readability and health literacy issues that further compound the problem: Research has shown that low health literacy causes risks to both the person and the health care system, and that as anxiety increases, readability and health literacy decrease even further for everyone.
  - “People with low health literacy use more health care services, have a greater risk for hospitalization, and have a higher utilization of expensive services, such as emergency care and inpatient admissions. Vulnerable populations include older adults, immigrant populations, minority populations, and low income populations.” [footnote i.] 
  - “Anxiety acts as both a catalyst for information seeking and an obstacle to the ability to read and interpret written messages…when [no information] is found or when the message itself is difficult to comprehend, anxiety is likely to rise…This cycle…can fuel panic and lead to maladaptive behaviors, such as unnecessary trips to emergency rooms or overuse of other emergency resources.” [footnote ii.]

- Congressional pressure: Additionally, Congress has recently asked VHA to provide COVID-19 content (and other essential content) in Spanish and Tagalog. As we work to meet this important and timely need we also need to be working toward an effective and sustainable approach for the future.

## Objectives

Through research, analysis, and stakeholder interviews we will accomplish 2 things:
First. we will identify and prototype a scalable and sustainable potential solution to provide Veterans and their family members with LEP access to essential benefit and service content in their native language that is:

- Accurate
- Timely
- Compassionate
- Clear and written in plain language

This solution will take into consideration the complexities that product owners, content creators, and local site administrators face with providing high-quality translated information that can be easily kept up to date.

At the conclusion of this project, we will have ~an~ written evaluation of this solution to present to leadership as a potential long-term solution for supporting translated content across essential benefit content on VA.gov. (Should we also say something about sharing our experience/findings with other government website owners?)

We will also provide a report further detailing the needs of our Veterans and family members with LEP and recommendations for how we can best prioritize and scope content translation to support those needs.

Specifically, our objectives are as follows:

1. To provide English-as-a-second-language (ESL) or limited-English-proficiency (LEP) Veterans, other family member beneficiaries, and family caregivers access to plain language health and benefit content, so they have equal access to the information and benefits they have earned.
2.	To meet federal/agency requirements for providing translated benefit information.
3.	Provide turn-key solution for content writers/editors using an automated workflow and machine-aided human translations.
4.	Launch an MVP to demonstrate the recommended approach is viable, scalable and sustainable.
5.	Identify requirements to stand-up an MVP including:
a.	Budget
b.	Process for selecting and on-boarding a  SAAS for integration with Drupal
c.	Integration points
d.	Dependencies

The audiences we will address include:
1.	Vets/caretakers
2.	Product Owners
3.	Writers
4.	Local Sites (eg VAMC's?)

Desired User Outcomes
- Limited English proficiency (LEP) Veterans, family members and caregivers have a better understanding of the VA benefits and services they have earned.
- Product Owners and writers have a sustainable, automated approach for providing translated content.
- Local Sites….TBD

Undesired User Outcomes
- Veterans, family members and caregivers find content confusing or unhelpful.
- Veterans, family members and caregivers can't easily find or use translated content.

Desired Business Outcomes
- Meet federal/agency requirements for providing translated benefit information.
- VHA demonstrates to Congress that we are providing essential COVID-19 information in Spanish and Tagalog while working towards a viable longer-term approach
- DEPO/OCTO Health provides a solid recommendation for a sustainable localization program at VA, based on ~MVP~ evaluation, data and user feedback
- VA provides relevant, easy-to-find, high-quality content for LEP Veterans and their families in the languages they most need (Spanish first)
- Product Owners and writers have a clear, manageable process for providing translated content and keeping it up-to-date

Undesired Business Outcomes

- VHA can't demonstrate progress on translation efforts in a timely way
- DEPO/OCTO Health can't gather the data we need to make solid recommendations for translations
- VA continues with a scattered or unsustainable approach to translations

## Our Bet(s)

If we provide Veterans and their caregives better visibility to existing translated content and develop an easier approach for translating additional content, 
we will provide Vets access to essential VA content online in their native language.

[x] Phase 1 (short-term): provide in-language pages for critical and time sensitive Covid-19 information

[ ] Phase 2 (mid-term): add highly visible navigational elements to the VA homepage to provide quick access to existing translated content and information for in-language support assistance and resources.

[ ] Phase 3 (Recommendation for long-term approach):  research and document an enterprise solution that considers needs of internal stakeholders and vets, leverages our existing infrastructure and is scaleable. 

## Measuring Success

Baseline Analytics:
From Jan 1 - March 15, 2021 the total number of Pageviews visiting the Coronavirus FAQs in Spanish was ~700.

From March 1 - March 15, 2021 the total number of Pageviews visiting the Covid-19 Vaccine page in Spanish and Tagalog was ~4k.

From Jan 1 - March 15, 2021 the total number of pageviews across VA.gov with browser set to “Spanish” ~55,505k.~
~(more data will be added once we have dashboard set up)~

Key Performance Indicators (KPIs)
•	Analytics around the engagement and usage for the translated page(s)
•	Measurements for search and direct traffic to the Spanish pages 
•	Call center inquiries
•	Direct user feedback via usability testing
•	We will include a Medallia survey on translated pages to collect customer feedback. 
•	Shorter time to market?
•	Reduction in translation costs?

From KPI worksheet:
- Customer Engagement/Pageviews 
- Time to generate and deploy translated content (north star metric, intenral)
- Net Promoter Score (NPS) - how likely to recommend? (internal)
- Average satisfaction rating across translated VA.gov

Objectives and Key results (OKRs)

Objective 1:  Meet Veterans' and their family members' need for Spanish and Tagalog language information for VA health care and benefits while continuing to gather experience and data for a scalable long-term localization solution 
- Key result 1: Provide Spanish and Tagalog language versions of Coronavirus FAQs and Covid-19 Vaccine pages by 1Q (complete)
- Key result 2: Launch "Language Assistance and Resource pages" for Spanish and Tagalog languages by 2Q 2021 (in progress)
- Key result 3: Satisfaction rating for translated content (Awaiting Medallia)
- Key result 4: Customer Engagement (Awaiting DOMO Dashboard)                                                                                                                      

Objective 2: Provide a recommendation for a scalebale solution that will enable writers with an automated workflow to request, track and manage translated content by 2Q
- Key result 1: Improve time to generate and deploy translated content from 4+ weeks to xx days.
- NPR/Satisfaction survey

## Product Requirements 

- Phase 1: provide Spanish versions of the Corona FAQs, ~Research Volunteer~ and Covid-19 Vaccine pages 
- Phase 2: create a highly visible navigational element on the VA/gov homepage that leads Spanish and Tagalog users to an in-language resource page
- Phase 3: research and document an enterprise-wide recommendation that considers needs of internal stakeholders and vets, leverages our existing infrastructure and is scaleable. 
- 
Out of Scope
- Site-wide roll-out or centralized translation management
- Updates/changes to pages found during translation effort that need updates (bugs will be captured and addressed by team owners)

Assumptions
Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality
- Some Veterans and their family members need or prefer COVID-19 and other content about VA health care and benefits in Spanish and Tagalog.
- Users will be able to find and easily link/toggle to translated content.  
- Mid-term approach will build new pages in Github 
- Google translate widget or machine learning alone will not be an acceptable translation option for our users or for Tier 1 content.
- An expeditious process for completing internal needs analysis and vetting software solutions/partners by mid-May 20201 (RISKY)

## Solution Approach

What are you going to build now, and why have you decided to start there? 

We are going to start with translating the Coronavirus FAQs and Covid-19 Vaccine pages via a front-end solution (not involving Drupal) into Spanish and Tagalog. We'll then widen translation offerings by building a nav link from the homepage to in-language resource pages for Spanish and Tagalog speakers. This will enable them to more easily locate existing translated content, provide information on where to call for translation support and provide discriminatory......

For the long-term enterprise solution recommendation we will be investigating options that use a combination of machine and human translators which we expect to a more efficient approach to providing and updating translated content.

Why this solution / approach over other solutions / approaches? 
The short and mid-term approaches outlined above are the quickest and simplest solution that allows us to start providing translated content while conducting research and gathering data to help inform a long-term solution.

What have you explicitly decided to not include in this initial set of functionality, and why? 
- We're not including Drupal integration for Corona/Covid work because we don't have the resources to support the work.
- We will only support the short and mid-term approaches for a handful of critical pages since the approach we use is resource intensive and not sustainable

How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)? 
- We'll base the evolution on data and user feedback. We expect that we'll move toward a machine-and-human translation approach as part of a broader localization program.

What’s Next
- Conduct stakeholder interviews (internal)
- Research and engage with potential software partners and other agencies within the government
- Develop a recommendation document that includes technical research and internal stakeholders needs

________________________________________
## Go-to-Market Strategy
How are Veterans and others using this product going to know it exists? 

We'll need to reach specific audiences who may need content translated into Spanish (see below)

What marketing, outreach, or communications are necessary for this product to be successful? 

Outreach may include:
- Working with the VA health equity office, center for minority Veterans, patient advocates, and relevant VSOs to communicate to LEP Veterans and family members that we invite them to try this offering and give us feedback to help us improve the experience.
- Targeted social media and other communication outreach efforts
- Link to Release Plan

Target & Actual Launch Dates 

- Target: January 20, 2021 for coronavirus FAQs page (Spanish) 
- Actual: January 22, 2021 for coronavirus FAQs page 
- Actual: March 10th for Covid-19 Vaccine page (Spanish and Tagalog)

What date will you evaluate impact after launch?
- Updated: 3 months post launch (mid-April 2021)
________________________________________

## For Reference
 
For WIP usability session discussion guide, mockup Spanish content, project brief:
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/Products/Global/Benefits%20Spanish%20Localization

For research plan:
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/Products/Global/Benefits%20Spanish%20Localization

Our feedback review session notes:
https://app.mural.co/invitation/mural/workqueue2001/1558543337827?sender=caroladsva8096&key=2cc8b8c8-50be-4b5d-85c4-2903a14c8e8c
Deck from user research share-out.
VA.gov-Spanish-benefits-link-user-research-061019.pdf

Coronavirus MVP Docs
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/spanish-translation/coronavirus-mvp 

## Key Artifacts

Content Translation Process: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/VA.gov%20translation%20process%20•%20Department%20of%20Veterans%20Affairs.pdf 

### Content & Localization Team Members
|Name|Role|
|----|----|
|Danielle Thierry	| Content & Localization Product Owner|
|Sharon Kasimow	| Content & Localization Product Manager|
|Fareez Ahmend	|FE Engineer|
|Michelle Steigerwalt | DEPO Engineer
|Eunice Garcia	| |

### Team
 - Team Name: Content & Localization
 - GitHub Label: 
 - Slack channel: 

________________________________________
## Implementation Info

________________________________________

## Technical Decisions

________________________________________
## Product Decisions

________________________________________
## Current Status

11.24.20 (DT): work continued, but development work was delayed due to lack of people and ability to implement as well as concerns with Google Translate widget quality. We kicked-off the first phase of this project with the VSP platforms team on 

________________________________________
## Key Decisions
________________________________________
## Footnotes
________________________________________

 i. https://nnlm.gov/initiatives/topics/health-literacy#:~:text=People%20with%20low%20health%20literacy%20use%20more%20health,immigrant%20populations%2C%20minority%20populations%2C%20and%20low%20income%20populations.

 ii. https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E1B32CF9E602F287902AD91F1D10DA7D/S1935789320001512a.pdf/public_health_communication_in_time_of_crisis_readability_of_online_covid19_information.pdf 


