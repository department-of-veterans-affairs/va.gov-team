# Initiative Brief : Typeahead 2.0 
#### Overview


## Description
- Typeahead has successfully be added to the global search header where users are able to benefit from suggestions that align to the queries that they conduct. However this feature is only associated with the search input field in the header and not available in other locations such as the search results page, a search landing page, etc.  This initiative is focused on establishing a drop down component which can be leveraged in multiple locations as described below. 


**Related product(s)**
- Typeahead | [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/typeahead/product-outline.md) 

## Problem
* Typeahead is only available to users in the global header
* DownShift implementation limits our ability to resolve accessibility feedback to address user needs and still meet analytics requirements
* Typeahead (using the current implementation) can not be added to other locations across va.gov search pages

## Benefits
_Establishing a drop down component for typeahead will:_
* ensure we are not reliant on third party components such as downshift which limits our ability to address accessibility needs
* enable more complex rendering of acronymns
* facilitate universal typeahead for other search tools and locations across va.gov
* more bespoke analytics tagging capabilities / no sacrifice to accessibility "nice to haves" to meet analytics requirements

<!--
## Desired User Outcomes
- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes
## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks.*

- **Value Risks** (will people use it): 
  - Many teams are already using various implementations of a dropdown component. Creating a universal component would see immediate use on multiple pages, even if you don't count the 2 pages we are planning to implement it on.
- **Usability Risks** (can people figure out how to use it):
  - Our analytics has shown that people can and will use it, and with great success.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Our proposed implementation is entirely possible using native HTML elements.
- **Viability Risks/Constraints** (will there be a positive organizational impact):
  - .

### Hypotheses & Prioritization
- Creating a drop down component will improve the user experience by offering typeahead suggestions in other locations across the VA.gov search experience which align with the search experience in the header.  


### Solution Scope
- Drop down component allows typeahead to become a more universal experience helping veterans get to the content they are looking for faster. 
> *What's in scope for you to build? Describe key features/flows. What have you explicitly decided to **not** include and why?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/typeahead/initiatives/typeahead_2.0/release%20plan.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - This is a Q3 initiative but actual launch date has yet to be established. Targetting end of September 2021. 
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
<img width="1286" alt="Screen Shot 2021-08-10 at 1 24 36 PM" src="https://user-images.githubusercontent.com/72393866/128906421-5c187d11-e713-4fdb-94fc-9bfeda488eef.png">

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Search & Discovery
- GitHub Label: vsa-search-discovery
- Slack Channel: #va-search
</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: VA.gov Search
- Contact(s): - DEPO Lead: John Hashimoto
- PM: Denise Coveyduc
- Engineering: Sam Suddath
- Design: Megan Gayle
- Research: Cindy Merrill
 
</details>


