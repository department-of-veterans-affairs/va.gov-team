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

Through research, analysis, and stakeholder interviews we will identify and recommend a scalable and sustainable potential solution to provide Veterans and their family members with LEP access to essential benefit and service content in their native language that is:

- Accurate
- Timely
- Compassionate
- Clear and written in plain language

This solution will take into consideration the complexities that product owners, content creators, and local site administrators face with providing high-quality translated information that can be easily kept up to date.

At the conclusion of this project, we will have a written evaluation of this solution to present to leadership as a potential long-term solution for supporting translated content across essential benefit content on VA.gov. 

We will also provide a report further detailing the needs of our Veterans and family members with LEP and recommendations for how we can best prioritize and scope content translation to support those needs.

Specifically, our objectives are as follows:

1. To provide English-as-a-second-language (ESL) or limited-English-proficiency (LEP) Veterans, other family member beneficiaries, and family caregivers access to plain language health and benefit content, so they have equal access to the information and benefits they have earned.
2. Give Veterans clear and concise information on accessing translation services.
3.	To meet federal/agency requirements for providing translated benefit information.
4.	Provide turn-key solution for content writers/editors using an automated workflow and machine-aided human translations.
5.	Research and identify requirements for a scaleable enterprise solution. This includes:
a.	Budget estimates
b. Resource needs
b.	Process for selecting and on-boarding a software provider for integration with Drupal
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

Baseline Analytics:(note: create table)

During March 2021 the total number of pageviews for the Covid-10 and Corona FAQ pages in Spanish and Tagalog were ~7000.
Jan and Feb 2021 saw ~40k users with browsers set to Spanish visiting VA.gov each month.
From Jan 1 - March 15, 2021 the total number of pageviews across VA.gov with browser set to “Spanish” ~600k. 

Key Performance Indicators (KPIs)
•	Analytics around the engagement and usage for the translated page(s)
•	Measurements for search and direct traffic to the Spanish pages 
•	Direct user feedback via usability testing
•	Customer feedback via Medallia survey 
•	Shorter time to publish?
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
- Key result 1: Improve time to generate and deploy translated content from yy weeks to xx days.
- NPR/Satisfaction survey

## Product Requirements 

- Phase 1: provide Spanish versions of the Corona FAQs, ~Research Volunteer~ and Covid-19 Vaccine pages 
- Phase 2: create a highly visible navigational element on the VA/gov homepage that leads Spanish and Tagalog users to an in-language resource page
- Phase 3: research and document an enterprise-wide recommendation that considers needs of internal stakeholders and vets, leverages our existing infrastructure and is scaleable. 

Out of Scope
- Site-wide roll-out or centralized translation management
- Non-content pages (ie: tools, VAMCs)
- Updates/changes to pages found during translation effort that need updates (bugs will be captured and addressed by team owners)
- other chanels including notifications, email, snail mail). SK note: this could be a big driver for saving on translation costs - enabling other depts to leverage database)

Assumptions
Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality
- Some Veterans and their family members need or prefer COVID-19 and other content about VA health care and benefits in Spanish and Tagalog.
- Users will be able to find and easily link/toggle to translated content.  
- Mid-term approach will build new pages in Github 
- Google translate widget or machine learning alone will not be an acceptable translation option for our users or for Tier 1 content.
- An expeditious process for completing internal needs analysis and vetting software solutions/partners by June 2021 (RISKY)

## Solution Approach

- What are you going to build now, and why have you decided to start there? 

We are going to start with translating the Coronavirus FAQs and Covid-19 Vaccine pages via a front-end solution (not involving Drupal) into Spanish and Tagalog. We'll then widen translation offerings by building a nav link from the homepage to in-language resource pages for Spanish and Tagalog speakers. This will enable them to more easily locate existing translated content and provide information on how to access translation support.

For the long-term enterprise solution recommendation we will be investigating options that use a combination of machine and human translators which we expect to a more efficient approach to providing and updating translated content.

- Why this solution / approach over other solutions / approaches? 
The short and mid-term approaches outlined above are the quickest and simplest solution that allows us to start providing translated content while conducting research and gathering data to help inform a long-term solution.

- What have you explicitly decided to not include in this initial set of functionality, and why? 
- We're not including Drupal integration for Corona/Covid work because we don't have the resources to support the work.
- We will only support the short and mid-term approaches for a handful of critical pages since the approach we use is resource intensive and not sustainable
- We wont support translations for non-content pages such as forms since is more complex and may require a different approach.

- How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)? 
- We'll base the evolution on data and user feedback. We expect that we'll move toward a machine-and-human translation approach as part of a broader localization program.

- What’s Next
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

11.24.20 (DT): work continued, but development work was delayed due to lack of people and ability to implement as well as concerns with Google Translate widget quality. We kicked-off the first phase of this project with the VSP platforms team.

________________________________________
## Key Decisions
________________________________________
## Footnotes
________________________________________

 i. https://nnlm.gov/initiatives/topics/health-literacy#:~:text=People%20with%20low%20health%20literacy%20use%20more%20health,immigrant%20populations%2C%20minority%20populations%2C%20and%20low%20income%20populations.

 ii. https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E1B32CF9E602F287902AD91F1D10DA7D/S1935789320001512a.pdf/public_health_communication_in_time_of_crisis_readability_of_online_covid19_information.pdf 


Cloud-based technology stores, tracks and manages multilingual content across different enterprise applications allowing continuous, integrated translation in real time. For large, complex translation projects — assuming there are no internet connectivity problems — the best way to handle the volume, continuity and synchronization between several different departments and locations is by managing translation in the cloud.

Cloud-based translation is continuous translation with no down time — unless, again, the internet goes down. Content that is constantly changing needs a dynamic and agile tool to keep up with the increasing demand for round-the-clock translation and distribution.
A cloud-based translation platform may give companies more control over their content, and keeps corporate information in a single native environment.

Categories that localization tools fall into include:

- Computer-assisted translation (CAT) tools
They enable a translator to reuse previously translated content from old projects in new projects. This allows them to translate a high volume of words in a shorter amount of time while maintaining a high level of quality through terminology and style consistency. This is especially handy for localization, as text in a lot of software and web UIs is often the same across platforms and applications. CAT tools are standalone pieces of software though, requiring translators that use them to work locally and merge to a central repository.


Machine translation (MT) engines
MT engines automate the transfer of text from one language to another. MT is broken up into three primary methodologies: rules-based, statistical, and neural (which is the new player). 

Translation management systems (TMS)
Most TMS tools aim to automate many manual parts of the localization process by including version control system (VCS) integrations, cloud services integrations, project reporting, as well as the standard translation memory and terminology recall features. These tools are most amenable to community localization or translation projects, as they allow large groups of translators and reviewers to contribute to a project. Some also use a WYSIWYG editor to give translators context for their translations. This added context improves translation accuracy and cuts down on the amount of time a translator has to wait between doing the translation and reviewing the translation within the user interface.


Terminology management tools
Localization automation tools
Localization automation tools facilitate the way you process localization data. This can include text extraction, file format conversion, tokenization, VCS synchronization, term extraction, pre-translation, and various quality checks over common localization standard file formats. In some tool suites, like the Okapi Framework, you can create automation pipelines for performing various localization tasks. This can be very useful for a variety of situations, but their main utility is in the time they save by automating many tasks. They can also move you closer to a more continuous localization process.

Tools to check out

Okapi Framework
Mojito


Translation
When we use the term "translation" in everyday speech, we typically mean that content in one language is rendered in another so that speakers of the second language can understand it. This usage is quite broad and covers everything from real-time interpretation of the spoken word to translation of a novel for publication in another language.


Localisation
The Localisation Industry Standards Association (LISA) defines localisation as "the process of modifying products or services to account for differences in distinct markets".   Thus it would entail adapting, translating and customising a product for a specific market. This would involve dealing with a specific locale or cultural conventions. By locale, we mean conventions such as sort order, keyboard layout, date, time, number and currency format.

The Difference between Translations and Localisation

Localisation might seem identical or similar to translation. However, the process of localisation is much broader than simply translation. Localisation should ensure that the product provides the local user with the correct local "look-and-feel" while they interact with the product.


Aspects of Localisation

Here is a list of some of items that are considering in localisation:

Translation of the product's interface and documentation
Colours, images, graphics and icons: adapting to cultural and legal requirements
Rendering (can we display the text correctly, does the new text fit inside the allocated space), fonts (do we have fonts and characters for the language), bi-directional text needed in Arabic and other languages.
Locale data: how to display dates, time, number, currency and other regional data.


Because of this publishers take several different approaches when building multilingual sites. Among the strategies they use are:

Adding automated links to machine translation versions of your content.
Building separate, parallel sites for each individual language.
Using a single, multilingual CMS (e.g. Drupal, Joomla, WordPress) to manage translations of original articles.
Using an RSS translator to import content to a platform where entries can be translated into other languages. Translations are then made available in a separate RSS feed.
Which approach is best depends on the type of site you run, how many articles you post per day, and how important it is for multilingual content to be integrated with your primary website or language.

Multilingual Content Management Systems

Another approach is to use a multilingual CMS, such as Drupal, Joomla, or WordPress. These systems allow a single post to be associated with translations, which in turn can be displayed adjacent to the original post, or when the user switches to a different language using a language selection menu on the home page.

These translations are not generated automatically, so you need people to create them, and you need to have a system for notifying translators of new articles and changes to articles which have already been translated.

Some CMSs, Drupal especially, are designed to support translations in the core system. This means you can "skin" a post in any number of languages. You might write the original post in English, and then create many child documents in other languages, which the system treats as translations of the original post. So when the user switches the user interface to German, he will see German versions of posts and pages, if they are available.
Sample Multilingual Publishing Workflow

There are many content management systems and many different plugins for each system that allow you to publish, manage, and organize content in multiple languages. What follows is a sample workflow using WordPress (http://wordpress.org) as a content management system and WPML (http://wpml.org/) as a plugin to manage translations. A guide to WordPress is available at http://en.flossmanuals.net/wordpress.

Setting Up A Parallel Site

If you are building a fairly simple site, with a relatively low volume of posts, and expect other languages to be a minority of your audience, the best approach is to set up a parallel, sister site for each language you seek to support. For example Yoani Sánchez is a popular Cuban blogger who writes in Spanish at http://www.desdecuba.com/generaciony/.  Many of her readers have volunteered to translate her blog posts into over a dozen other languages. Those translations are published on parallel blogs. For example, Japanese translations of Yoani's posts are available at http://desdecuba.com/generaciony_jp/.

