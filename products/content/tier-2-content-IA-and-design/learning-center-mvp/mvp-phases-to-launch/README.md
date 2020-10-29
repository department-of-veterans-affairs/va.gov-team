
# MVP 2020 roadmap to end of December

[Reference: PPT deck](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/pw-learning-center-takeaways-mvp-roadmap-082820.pptx)

[Reference: MVP Document 1.0](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13983)

## Preface - Information Management Process 
When referencing various data sources related to the Learning Center MVP 1.0/1.1, please reference defined user stories below, followed by associated linked epics/sprint breakdown and mockups as a final step.   

## Public Website Learning Center Launch Checklist  
[Epic/Sprint Breakdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/LC%20Launch%20Checklist.md)

## 1.0 - End of October - beta launch

<details>
  
<summary>Requirements</summary>

### Search

|User Story|Phase|Epic|Resource/artifact/reqs|
|---|---|---|---|
|As a Veteran or beneficiary, I need to search for LC articles so I can find answers to questions I have about the site or about VA services or benefits. As a non-beneficiary who works with Veterans (like VSOs, fiduciaries), I want to find answers to questions I have about what I need to do in order to do my job (e.g., how to apply to become a fiduciary)|1.0|[Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13983)|[User Story Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/pw-learning-center-takeaways-mvp-roadmap-082820.pptx) [User query-based dynamic search](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/search-feature-inside-LC/LC-search-requirements.md) [Content Field Req](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#content-fields-on-all-learning-center-pages)|


### Articles lists 

|User Story|Phase|Epic|Resource/artifact/reqs|
|---|---|---|---|
|As a Veteran and or Veteran caregiver, I need an relevant article list that guides me to content that appeals and is interesting to me. - Article lists should help users self-resolve VA.gov issues/questions that span benefits or that are agnostic of benefit issues. Intent of article lists (by category or tag) is to funnel users to the articles within that category or tag|1.0|[Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14114)|[User Story Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/view-all-articles-in-X-category-landing-pg-requirements.md)|
  
### Templates

|User Story|Phase|Epic|Resource/artifact/reqs|
|---|---|---|---|
|As a Veteran, I need a visual way to view a step-by-step process quick navigation to Tier 1 benefits tools and content. - The design of the learning center pages should make it easy to navigate and find information for primary users and caregivers. Visuals add to the UX and ease the process for visual learners.|1.0| [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12365)|[User Story Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#specific-lc-content-template-types)|
  
### Tier 2 learning/support content

|User Story|Phase|Epic|Resource/artifact/reqs|
|---|---|---|---|
|As a Veteran, the learning center content should 1) answer my specific question, and 2) when relevant, point me to Tier 1 benefit tools or to eligibility, enrolling, filing, creating an account, signing in to do manage tasks. Provide contextual content access points in unauthenticated and authenticated product experiences, but only if it’s truly relevant and related information.  All learning content should send people TO related tier 1 benefit hub. (EX: via the VA benefit hub component on all articles)|1.0|[Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12933)|[User Story Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#frontend-content-tags)|

### Tags

|User Story|Phase|Epic|Resource/artifact/reqs|
|---|---|---|---|
|As a Veteran, I wanted to browse, explore and discover VA information in an engaging way through content tags. Adapting content tags will encourage UX behavior to browse, explore and enagage with content they otherwise wouldn't through the learning center categories. Tags are not meant to be a substitute search in the learning center, but a way of filtering the ocean into a lake. Content relevance based on keyword-driven search will be the primary way users can quickly find content in the learning center: Example of a tag vs. category: Some "claims and appeals status" tagged article might live in the Disability category or Health care or Pension, etc.|1.0|[Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11491)|[User Story Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/view-all-articles-in-X-category-landing-pg-requirements.md) [FE Content Tag Requirements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#frontend-content-tags) 
  
</details>

### Designs 
[Mural Mock Ups](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b) 

Tags: Audience and Topics

Categories: How content is organized on the LC homepage e.g. disability
- VA account and profile
- Other topics and questions

Content tags in 1.0 beta launch: 
- All Veterans
- Sign in
- Claims and appeals status
- Payments and debt


Templates for Oct launch:

- LC homepage
- LC search results (dynamic page driven by search.gov)
- ‘all articles in: Xcategory’ landing page (static FE page)
- 'all articles tagged: Ytag' landing page (static FE page)
- Multiple FAQs 
- Single Q&A ("Question and answer")
- Step-by-step
- About

Reusable FAQs infrastructure

## 1.1 - End of December - full launch

Finish manual migration of IRIS FAQs content into LC with:

- Additional audience and topic categories. [Complete list of LC categories for mvp 1.1 state](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#learning-center-categories)
- Was this helpful component data integration with Google Analytics
- LC add to IA

Remaining templates to add for Dec launch:
- Videos template
- Images template
- Checklist template

Template iteration:
LC homepage FE iteration – audience section, more topic categories


## 2021 super high level

- Migrate additional tier 2 content from legacy site into LC
- Migrate appropriate tier 2 content from benefit hubs into LC
- Onboard and train contact center authors and other VA content authors
