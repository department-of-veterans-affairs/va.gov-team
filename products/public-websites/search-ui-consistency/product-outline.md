# Search UI Consistency Outline
---

## Overview
Currently, search tools such as the main [VA.gov Search page](https://www.va.gov/search/?query=search%20term), [Find a VA Form](https://www.va.gov/find-forms/), and [Resources & Support](https://www.va.gov/resources/) have different UI styling. Our intent is to create UI consistency using the current style guide and component library for all of the listed search tools.  We also want to ensure that these changes are reviewed and approved by our Design, UI and Accessibility experts so that they inherently adhere to standards when implemented.  A longer-range goal is that these redesigned elements will be incorporated into new VA.gov search tools, as well as existing tools, as teams have the capacity to do so.   

## Problem Statement
Having an inconsistent UI style for each of the search tools creates confusion for Veterans. 
In order to improve the UI style for Veterans we need to apply a clear and consistent styling across all tools.

 
## Desired User Outcomes

- A consistent UI is a better experience for Veterans, their caregivers, and their advocates as it allows them to form one mental model that carries across each tool that follows the same design pattern.
- Consistent calls to actions (links, buttons, downloads) enable users to quickly recognize these elements as they are encountered on different tools, providing a more accessible experience for those with cognitive disabilities.
- Users utilize calls to action more frequently because they are easier to recognize on each affected page.
- Veterans, their caregivers, and their advocates are more quickly and easily able to access the content, forms, documents, facilities, or other resources they need.

## Undesired User Outcomes

- Users don't click on calls to action because the iconography or labeling is unclear. 
- Users don't click on calls to action because they are not highly visible within the overall page design.
- Users with disabilities are not afforded an accessible experience due to improperly labeled elements, lack of tags for screen readers, improper use of elements, improper tagging, or the reliance upon color for meaning.
- PDF downloads result in errors or confusing messages.

## Desired Business Outcomes

- Veterans, their caregivers, and their advocates use the search tools more.
- Veterans, their caregivers, and their advocates take advantage of the resources they are searching for.
- Veterans, their caregivers, and their advocates are less likely to call for support.
- VSP teams spend less time identifying and documenting accessibility and/or usability issues like those listed below because search elements are designed and written in a manner that includes affordances.
     - [#18442](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18442)
     - [#3556](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3556)
     - [#13819](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13819)
     - [#18395](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18395)
- VSA teams spend less time remediating accessibility and/or usability issues because compliance comes "baked in" when Engineers implement an approved component from the library


## Undesired Business Outcomes
- Veterans, their caregivers, and their advocates lose trust and confidence in VA.gov search tools after a call to action click produces unexpected results.
- Veterans, their caregivers, and their advocates do not take desired actions because they are unsure what will result from clicking a CTA.
- Veterans, their caregivers, and their advocates call in or visit a facility for assistance because they encounter an error or confusing message.
- Veterans, their caregivers, and their advocates call in or visit a facility for assistance because their search does not yield clear calls to action.

---
## Measuring Success


### 🚩 Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
 - Click through rate (GA/Domo)
 - Return visitors (GA/Domo)
 - Customer satisfaction (Medallia)

 
* _What are the most important metrics that track with this product/initiative's success?_
- Click through rate increases (GA/Domo)
- Percent of return visitors increases (GA/Domo)
- Customer satisfaction increases (Medallia)

* _Include links to Domo or Google Analytics Dashboards/Reports_


* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

- TBD 

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 
  - Key result: 

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

1. Creating consistency will build trust and improve users' perception about VA.gov, thereby increasing customer satisfaction.
2. Making calls to action more visible will increase the chances of users clicking on them, thereby increasing click through rate.
3. (MOST RISKY) Creating UI consistency will build trust in VA.gov search tools and encourge them to utilize them again in the future, thereby increasing the percent of return users.  This is highest risk because it is possible that users' need a tool for a specific circumstance and may never need to return.

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*

We are going to start by creating consistency between the [three search tools listed above](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/search-ui-consistency/product-outline.md#overview).  We have decided to start there because the tools all fall within the Unauth Portfolio and share the same PO.

- *Why this solution / approach over other solutions / approaches?*

This is a relatively low-risk approach due to the nature of the tools.  It has limited scope vs. a "big bang" approach, and allows other teams to incorporate the changes as they  have bandwidth.

- *What have you explicitly decided to not include in this initial set of functionality, and why?*

We are not including changes to the sidebar because that has the potential of creating a much larger impact across other products.  Possible sidebar changes will be addressed separately.

- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

Our hope is that the improvements realized with this change will be an impetus for other product teams to incorporate them into their products, and even possibly spur a similar effort for other areasa of VA.gov that can benefit from improved UI consistency.

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
 All products currently exist.

- *What marketing, outreach, or communications are necessary for this product to be successful?*
### External Communcation
These changes should be completely seamless to end users. 

### Internal Communication

Internally, the following updates will be needed:

  - Release plans will be created as each team does its own implentation for their respective product(s)
  - The [VA Content Style Guide](https://design.va.gov/content-style-guide/) will be updated to reflect the new search component designs
  - The [VA Component Library](https://design.va.gov/components/) will be updated to reflect the new search component designs
   - Each team will notify Contact Center of upcoming UI changes and update their product's Contact Center documentation and any uses cases that might be impacted. These communications will occur as each team implements the changes.
   - Each team will work with QA to update screen shots in TestRail
   - Each team implementing will notify its respective VA stakeholders of upcoming UI changes

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- Each team will implement UI changes as their own team priorities and capacity allow.  They will also define their dates for measuring success based on those timelines.
  - 
---

## 🚩Solution Narrative

### Current Status

### Key Decisions
- 2021-04-13 - Dave Conlon has de-prioritized this effort for the Facilities team, so the design intent will only involve Decision Tools, Search & Discovery, and Public Websites teams.
- 2021-04-07 - After discussion with Shira Goodman, a decision was made to have a combined design review, but then each team would manage their own collab cycles for implementation since their priorites and timelines will differ.
- 2021-04-01 - Marci McGuire will lead the creation of the Product Outline and request a Design Intent Review.
---
   
## Screenshots

### Before
#### VA.gov Global Search (results)
![image](https://user-images.githubusercontent.com/73354907/114746181-70fa5b00-9d1d-11eb-9e68-447f28d728d3.png)

#### Find a VA Form
![image](https://user-images.githubusercontent.com/73354907/114748180-a56f1680-9d1f-11eb-9f3a-44b1d3b8be6a.png)

#### Resources and Support
![image](https://user-images.githubusercontent.com/73354907/114747546-f2062200-9d1e-11eb-8c7c-8ccff9acaf60.png)

### After

---

####🚩 Communications

<details>

- Team Name: (Decision Tools)[https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/decision-tools], (Search & Discovery)[https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/search-discovery], (Public Websites)[https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/public-websites]
- GitHub Label:  search-ui-consistency
- Slack channel: vsa-unauth-portfolio, unless this extends to other areas of VA.gov
- Product POCs:  https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/search-ui-consistency
🚩- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: John Hashimoto
 - PM: Marci McGuire (Find a VA Form), Brian Lloyd (Resources & Support), Denise Coveyduc (Global Search)
 - Engineering: Zach Morel (Find a VA Form), Nick
 - Research/Design:  Cassandra Allen (Find a VA Form, Resources & Support), Megan Gayle (Global Search), Cindy Merrill (Research)

</details>


#### 🚩Stakeholders

<details>
 
🚩_What offices/departments are critical to make this initiative successful?_
 
</details>

