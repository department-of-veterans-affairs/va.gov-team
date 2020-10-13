Placeholder wip

# Product Use Cases Template

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Resources and support (formerly called learning center)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/product-outline.md)

## Contents
<details>
<summary></summary>
  
- [Use Case A](#use-case-a) 
- [Use Case B](#use-case-b)
- [Use Case C](#use-case-c) 
- [Use Case D](#use-case-D) 

</details>

## Use Case A

* **Description - broken link**
  - A user clicks on a link or CTA button or a tag on an article and it doesn't work. 
  - The link could be in the form of a CTA button or a content link in the `Related information` section; the `VA benefits` section; a text link within body text. 

* **Link to designs**
  - lorem ipsum

* **Instructions to access in demo environment (for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - http://learningcenter.demo.ci.cms.va.gov/
  - the final/real URL for the LC homepage will be available once the LC homepage is created in the CMS - still TBD.

## Use Case B

* **Description - no search results**
  - User enters a search query on the LC search bar using the default "Resources and support" selection. 
  - User is taken to the LC search results page, and there, receives `null` results. 
  - The user should receive a message telling them we couldn't find resources and support articles matching their query, and that they should try expanding their search query or searching all of VA.gov. 

* **Link to designs**
  - Mural board: [search - user query with no results](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b?wid=0-1602257201953)

* **Instructions to access in demo environment (for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - http://learningcenter.demo.ci.cms.va.gov/


## Use Case C

* **Description - feedback confirmation**
  - User clicks on one of the response options in the `How do you rate your experience on this page?` section. 
  - User should receive a 'thank you-feedback' confirmation message. 

* **Link to designs**
  - Mural board: [Thank you for your feedback.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1588167553516/2773c854e8ff3a725a5e3ee03272b78e8519f78b?wid=0-1602252163376)

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - lorem ipsum
  
  ## Use Case D

* **Description - wrong breadcrumb links** TBD
  - User is on an article that belongs to X primary category. (One primary category is selected in the CMS for each article.) The breadcrumb should show: `Home > Resources and support > {Primary-category-label} > {Article H1}`  but doesn't show the correct path. 
  - The user is on an 'all articles' landing page for a category. The breadcrumb should show: `Home > Resources and support > All articles in: {category-name}`  or if it is a tag landing page: `Home > Resources and support > All articles tagged: {tag-label}` 
  - The user is on an 'all articles' landing page for a tag. The breadcrumb should show: `Home > Resources and support > All articles tagged: {tag-label}` 



* **Link to designs**
  - lorem ipsum

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - lorem ipsum

