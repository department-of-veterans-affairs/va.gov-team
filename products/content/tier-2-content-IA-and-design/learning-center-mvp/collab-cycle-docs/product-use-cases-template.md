# Product Use Cases Template

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Resources and support (formerly called learning center)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/product-outline.md)

Demo environment - LC homepage: http://learningcenter.web.demo.ci.cms.va.gov/resources/ 

## Contents
<details>
<summary></summary>
  
- [Use Case A](#use-case-a) 
- [Use Case B](#use-case-b)
- [Use Case C](#use-case-c) 
- [Use Case D](#use-case-d) 
- [Use Case E](#use-case-e)
- [Use Case F](#use-case-f)

</details>

## Use Case A

* **Description - broken link**
  - A user clicks on a link or CTA button or a tag on an article and it doesn't work. 
  - The link could be in the form of a CTA button or a content link in the `Related information` section; the `VA benefits` section; a text link within body text. 

* **Link to designs**
  - [Mural mockups](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b?wid=0-1602122053838) - see 1.0 section for beta launch mockups

* **Instructions to access in demo environment (for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - ~http://learningcenter.demo.ci.cms.va.gov/~  http://learningcenter.web.demo.ci.cms.va.gov/resources/
  - the URL for the LC homepage will be va.gov/resources/   {updated 10/21 with final IA recommendation}

## Use Case B

* **Description - no search results**
  - User enters a search query on the LC search bar using the default "Resources and support" selection. 
  - User is taken to the LC search results page, and there, receives `null` results. 
  - The user should receive a message telling them we couldn't find resources and support articles matching their query, and that they should try expanding their search query or searching all of VA.gov. 

* **Link to designs**
  - Mural board: [search - user query with no results](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b?wid=0-1602257201953)

* **Instructions to access in demo environment (for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - http://learningcenter.web.demo.ci.cms.va.gov/resources/


## Use Case C - UPDATE 10/26: We are not launching 1.0 with this component

* **Description - feedback confirmation**
  - User clicks on one of the response options in the `How do you rate your experience on this page?` section. 
  - User should receive a 'thank you-feedback' confirmation message. 

* **Link to designs**
  - Mural board: [Thank you for your feedback.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b?wid=0-1602252163376)


## Use Case D

* **Description - wrong breadcrumb links** {updated 10/21 with final IA recommendation}
  - User is on an article that belongs to X primary category. (One primary category is selected in the CMS for each article.) The breadcrumb should show: `Home > Resources and support > {Article H1}`  but doesn't show the correct path. 
  - The user is on an 'all articles' landing page for a category. The breadcrumb should show: `Home > Resources and support > All articles in: {category-name}`  
  - The user is on an 'all articles' landing page for a tag. The breadcrumb should show: `Home > Resources and support > All articles tagged: {tag-label}` 





  ## Use Case E

* **Description - required global article template fields are not showing/missing**

  - All articles share a set of 'global' article sections/fields. All articles should include the following required global fields:
    - H1 title of article
    - Intro text (This is the answer text for single Q&A article)
    - At least 1 tag. [See doc for list of 1.0 tags[(https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch#designs)
    - Article rating "How do you rate your experience on this page?" section (Component is required; user respons is not required.)
    - [Related information list of content links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#related-information-section)
    - [VA benefits section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#va-benefits-section)
    - [Need more help? contact info section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#need-more-help-section)


## Use Case F
* **Description - content fields per 1.0 article templates**
- Some templates pull certain fields, whereas others don't

Templates

- some templates pull certain fields, whereas others don't


**Multiple FAQs article template content fields:** 
http://learningcenter.web.demo.ci.cms.va.gov/node/8233/

- Required: H1 – new H1 limit for LC pages – 70 max characters including spaces

- Required: Intro text - 1,000  characters max including spaces. 

- Optional: Alert component

- Required: CTA buttons – at  least 1 required; up to 2; 40 characters max including spaces per button  text

- Optional: On this page TOC  links – When enabled in the CMS by author, at least 2 H2 sections are required; TOC link text generated by the H2 text

- Optional: H2 section  header - H2s (and other headings) should be hard limited to 70     characters max including spaces

- Required: List of question and  answers – can be in accordions or not. See [Required: Body - content type template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#specific-lc-content-template-types) for  details.

- - Each answer block can also include  an alert component below the answer block.
  - No images, videos, tables,  subway maps, number callouts, etc. are enabled for FAQs.
  - Question and answers can be  chunked into groups, separated by H2 headers.

- Optional: Repeat same CTA  button(s) 

- Required: At least 1 tag.  [See doc for list of 1.0 tags[(https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch#designs)

- STETCH FOR 1.0 - WE MAY NOT LAUNCH WITH: Required component:  Article rating - "How do you rate your experience on this page?" (Component is required – user response  is NOT)

- Required: [Related information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#related-information-section) - freeform list of links and text

- Required: [VA benefits section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#va-benefits-section)

- Required: [Need more help?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#need-more-help-section) - This section includes contact info based   on a pre-set list of options

- STETCH FOR 1.0 - WE MAY NOT LAUNCH WITH: Back to top links: dynamic based on page height.

**Question and Answer article template (aka “single Q&A”)** 
http://learningcenter.web.demo.ci.cms.va.gov/node/8540/

- Required: H1 – new H1 limit for LC pages – 70 max characters including spaces, rigid in AX
- Required: Answer text - 1,000  characters max including spaces. 
- Optional: Alert component
- Required: CTA buttons – at  least 1 required; up to 2; 40 characters max including spaces per button     text
- Required: At least 1 tag.   [See doc for list of 1.0 tags[(https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch#designs)
- Required component:  Article rating - "How do you rate  your experience on this page?" (Component is required – user response  is NOT required)
- Required: [Related information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#related-information-section) - freeform list of links and text
- Required: [VA benefits section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#va-benefits-section)
- Required: [Need more help?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#need-more-help-section) - This section includes contact info based  on a  pre-set list of options


**Step-by-step article template (uses “subway map” design)**
http://learningcenter.web.demo.ci.cms.va.gov/node/8417

- Required: H1 – new H1  limit for LC pages – 70 max characters including spaces, rigid in AX

- Required: Intro text - 1,000  characters max including spaces. 

- Optional: Alert component

- Required: CTA buttons – at  least 1 required; up to 2; 40 characters max including spaces per button     text

- Optional: On this page TOC  links – When enabled in the CMS by author, at least 2 H2 sections are     required; TOC link text generated by the H2 text

- Optional: H2 section  header - H2s (and other headings) should be hard limited to 70     characters max including spaces

- Required: Subway map steps. See  [Required: Body - content type template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#specific-lc-content-template-types) for  details.

- - Each step must include a  text description.
  - Each step can include an  optional alert below the text description.
  - Each step can include a screenshot.
  - No accordions, videos, tables, number callouts, etc. are enabled for step-by-steps.
  - Steps can be chunked up in  multiple subway map groupings (eg., Part 1 steps; then Part 2 steps)

- Optional: Repeat same CTA  button(s) 

- Required: At least 1 tag.  [See doc for list of 1.0 tags](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch#designs)

- STETCH FOR 1.0 - WE MAY NOT LAUNCH WITH: Required component:  Article rating - "How do you rate your experience on this page?" (Component is required – user response is NOT required)

- Required: [Related information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#related-information-section) - freeform list of links and text

- Required: [VA benefits section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#va-benefits-section)

- Required: [Need more help?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#need-more-help-section) - This section includes contact info based on a pre-set list of options

- STETCH FOR 1.0 - WE MAY NOT LAUNCH WITH: Back to top links: dynamic  based on page height.

 

**About article template**
http://learningcenter.web.demo.ci.cms.va.gov/node/8427

- Required: H1 – new H1  limit for LC pages – 70 max characters including spaces

- Required: Intro text - 1,000 characters max including spaces. 

- Optional: Alert component

- Required: CTA buttons – at least 1 required; up to 2; 40 characters max including spaces per button     text

- Optional: On this page TOC  links – When enabled in the CMS by author, at least 2 H2 sections are     required; TOC link text generated by the H2 text

- Optional: H2 section  header - H2s (and other headings) should be hard limited to 70  characters max including spaces

- Required: About body content.  See [Required: Body - content type template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#specific-lc-content-template-types) for  details.

- - Optional: REACT component allowed.
  - Each rich text block can also include an alert component.
  - No images, videos, subway maps are enabled for FAQs.
  - Tables and accordions are allowed.

- Optional: Repeat same CTA  button(s) 

- Required: At least 1 tag.   [See doc for list of 1.0 tags](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/mvp-phases-to-launch#designs)

- STETCH FOR 1.0 - WE MAY NOT LAUNCH WITH: Required component:  Article rating - "How do you rate  your experience on this page?" (Component is required – user response is NOT)

- Required: [Related information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#related-information-section) - freeform list of links and text

- Required: [VA benefits section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#va-benefits-section)

- Required: [Need more help?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#need-more-help-section) - This section includes contact info based  on a pre-set list of options

- STETCH FOR 1.0 - WE MAY NOT LAUNCH WITH: Back to top links: dynamic based on page height.

 


