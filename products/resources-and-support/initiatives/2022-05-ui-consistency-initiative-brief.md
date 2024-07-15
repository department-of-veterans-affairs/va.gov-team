# UI Consistency for R&S Article Pages Initiative Brief
May 2022 - Initiative never completed

#### Overview


 
 *The current R&S Article pages to not match the style of the rest of the VA.gov pages. They do not currently align with the design patterns in the <a href="https://design.va.gov/">VA.gov Design System</a>.  We are proposing UI updates for R&S Article sections, 'Related information', 'VA Benefits', 'Need more help?', to align with the rest of VA.gov. We want to ensure that these changes are reviewed and approved by our Design, UI and Accessibility experts so that they inherently adhere to standards when implemented.*
 

 <Summary>Examples:</Summary>
 
 - *Product: VA.gov- R&S Article Page: https://www.va.gov/resources/can-i-be-buried-in-arlington-national-cemetery/* 
   - *Initiatives: The above page outlines the issues related to the page and specifically these areas: 'Related information', 'VA Benefits', 'Need more help?'.*


 
---

## Outcome Summary
> *Completing this project will align the style of the R&S Articles with the other pages/articles on VA.gov*
* Approximately 70 articles are published and 68 are unpublished on R&S will be updated with this effort*
* Going forward this will be the standard style utilized for any new R&S articles*

**Related/Associated product(s)**
- Product | Link to product outline- N/A

## Problem
* The problem is the discrepancies in the style and visuals for the pages. We have gone through and determined every R&S article page needs updated. 
* Correcting these pages creates a more seamless experience for the Veterans. Inconsistent UI on pages can create confusion and distrust.

<!--
## Desired User Outcomes
- *With this problem solved, users will see the same design patterns on R&S as they see across VA.gov*
- A consistent UI is a better experience for Veterans, their caregivers, and their advocates as it allows them to form one mental model that carries across each tool that follows the same design pattern.
- Consistent calls to actions (links, buttons, downloads) enable users to quickly recognize these elements as they are encountered on different tools, providing a more accessible experience for those with cognitive disabilities.
- Users utilize links more frequently because they are easier to recognize on each affected page.
- Veterans, their caregivers, and their advocates are more quickly and easily able to access the content, forms, documents, facilities, or other resources they need.

## Undesired User Outcomes
## Desired Business Outcomes

- Veterans, their caregivers, and their advocates use the search tools more.
- Veterans, their caregivers, and their advocates take advantage of the resources they are searching for.
- Veterans, their caregivers, and their advocates are less likely to call for support.
- VSP teams spend less time identifying and documenting accessibility and/or usability issues like those listed below because search elements are designed and written in a manner that includes affordances.
- VSA teams spend less time remediating accessibility and/or usability issues because compliance comes "baked in" when Engineers implement an approved component from the library

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *All article pages on Va.gov have been updated.*
> 💡 *All newly created artciles on VA.gov use the new template going forward.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo) N/A

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks.*

- **Value Risks** (will people use it): 
  - N/A
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - We will need to work with the CMS team to pull in description text for linked articles within the  'Related information' section 
  - There are currently 5-6 different templates being used. We need to migrate articles in an organized fashion. The templates that exist and that are in use today: 
  - https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/checklist.drupal.liquid
https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/q_a.drupal.liquid
https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/step_by_step.drupal.liquid
https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/faq_multiple_q_a.drupal.liquid
https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/support_resources_detail_page.drupal.liquid

- The templates themselves will not need to change. The design elements can be applied to each of the R&S Articles. We should however test a few before we change all forms. 
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Proposal to test 5-10 articles of the articles before the overall change is made. 
  - Unpublished articles will also need updated
### Prioritization
> *Describe how the team will consider competing solution hypotheses/ideas. Prioritize them accounting for reach, impact/value, effort, and confidence.*

### Solution Summary
> *Within this intiative the goal is to correct formatting and styles including regular and major links on all R&S atricle pages. Below I have attached two examples. The first example is the style guide that appears on VA.gov's Sketch template and the second example is includes information from an existing R&S article utilizing the those templates.* 
> 
> *Example https://github.com/department-of-veterans-affairs/va.gov-team/issues/34256#issuecomment-1001621775*<br>
> *Example: https://github.com/department-of-veterans-affairs/va.gov-team/issues/34256#issuecomment-1002227146*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots
 <details>
 Styles from Sketch Template:
 <br>
 
 <img width="613" alt="style-sketch" src="https://user-images.githubusercontent.com/5553542/150179124-0a847458-87e4-401e-ad13-9dc9f4385181.png">


### Before
 <a href="https://www.va.gov/resources/va-debt-management/">https://www.va.gov/resources/va-debt-management/</a>
<img width="780" alt="r-s-before" src="https://user-images.githubusercontent.com/5553542/150184865-5cf3626c-f568-43a5-b166-071f732eb08b.png">

### After
<img width="636" alt="r-s-after" src="https://user-images.githubusercontent.com/5553542/150186403-604cbcc0-d8ae-4985-ae2f-ecdb3913bd20.png">

Updated sections styles:

**Related information:** 
Using the style, "Related Links, for navigating to related information outside a content section". 
We will work with the CMS team to pull in description text from linked pages.

Used elsewhere: [Pay your VA copay bill](https://www.va.gov/health-care/pay-copay-bill/), [Coronavirus FAQs](https://www.va.gov/coronavirus-veteran-frequently-asked-questions/)

**VA benefits:** 
Using the style, "Quick Links, for navigating to related topics located outside of a section". Link descriptions are not used within this style. 

Used elsewhere (similar to 'Need help?' style): [Apply for burial benefits](https://www.va.gov/burials-and-memorials/application/530/introduction)

**Need help?:** 
Using the style, "Quick Links, for navigating to related topics located outside of a section". Update header from "Need more help?" to "Need help?"

Used elsewhere: [Apply for burial benefits](https://www.va.gov/burials-and-memorials/application/530/introduction)
</details>


---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 
- GitHub Label(s): 
- Slack channel: 
- Product POCs:

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
