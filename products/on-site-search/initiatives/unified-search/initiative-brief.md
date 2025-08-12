# Initiative brief: Unified search solution

## Outcome Summary
Site visitors can utilize a single search experience to find the information they need regardless of where the information is stored - general web content, facility location data, forms database, authenticated or personal information.   

**Related/Associated product(s)**
- [On-site search product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/product-outline.md)

## Problem
We currently have multiple search solutions in place across various experiences on VA.gov. These independent solutions not only require visitors to know where to go on the site to search for specific types of information, they also are not meeting expectations in relevancy of results returned. Examples of documented issues include:
- Irrelvant, and sometimes inaccurate, search results returned in sitewide search
- R&S search doesn't return results for core information that lives outside of R&S, such as benefit eligibility
- Forms do not appear in sitewide search results unless an "About form" pages is published for the form
- Legacy and subdomain content is often not returned in sitewide search results
- Sitewide search matches exact words and doesn't return relevant results for natural language searches


## Desired User Outcomes
- Creates a unified search that allows site visitors to execute a search for any type of information - facility locations, authenticated information, forms, general information, etc. - from a single search experience
- Improved findability of content currently not served up in global search
- Improved relevancy and accuracy of results

## Desired Business Outcomes

- Reduce development and maintenance overhead due to multiple search code bases and experiences
- Mitigates risks from dependency on other government agencies with unknown priorities


---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
---| ---| ---| ---
Relevancy | | |
Response time
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### Supporting research

- *Is this work supported by user research?* 
  - *If this work **is supported by user research**, please cite the user research by providing links to our [VA.gov research repo](https://github.com/department-of-veterans-affairs/va.gov-research-repository)*
  - *If this work is **not supported by existing user research**, will this work include user research?*
    - *If this work **will include user research**, please briefly state what you hope to learn from that research.*
    - *If this work **does not cite nor include user research**, please state why and be prepared to defend your decision.*

### What're you building?

> *What's in scope for you to build with this initiative? Describe key features/flows.*
- Stand up a POC search experience for Resources and support using Amazon Kendra that showcases the service's ability to
  - return relevant results for simple queries and more complex natural language queries
  - allow for filtering of results based on facets/tagging system created in Drupal
  - display results within a custom front-end experience
- Test POC against sitewide search
- Integrate within Find a form experience

 
> *What have you explicitly decided to **not** include and why?*

> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*

> *How does this solution address your Assumptions & Risks?*

#### Go-to-market 

> *What marketing, outreach, or communications are necessary for this product to be successful?*

> *Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116570)

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

### Before

### After

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
