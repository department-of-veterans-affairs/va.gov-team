# Household Section V2 Initiative Brief
Alex Seelig, 3.21.2025
#### Overview


---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* Improve the layout of the Household section of the 10-10EZR to be “review and edit” as needed, as opposed to page-by-page updates. This is done with the goal of making the Veteran’s time on the EZR shorter, and the data accuracy that VHA has for Veterans higher.

**Related/Associated product(s)**
- [10-10EZR Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)
- [Figma Design](https://www.figma.com/design/tggcJk382w9yQ0ElwKfh3N/10-10EZR-Working-Files?node-id=6685-29229&p=f&t=jT3676jw4CDLUT5i-0)

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem?
- **Veterans are spending too much time filling out the 10-10EZR, particularly the Household section which is time intensive and complex.**
* Why do you think the problem is occurring? Other reasons why this might be occurring?
- **Some of this is due to the nature of the section, but we believe allowing the Veterans to view their information and make changes as needed will help speed up the process and improve data integrity within VHA.**
* How does this initiative help further OCTO-DE's mission and goals?
- **This helps reduce the time burden on Veterans and improves data integrity within VHA**

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

- [Google Analytics Exploration - Household pages](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/bTaqmQkVTT6TeEqtARJBbg)

#### Objective: Reduce time spent and bounce rates on Household section pages
- Results #1: Reduction of time spent by 10%
- Results #2: Reduction of bounce rates by 10%

|Spouse | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-Month post launch|
|---| --- | --- | ---|
|Spouse page views| 4,490 | N/A | N/A|
|Spouse page Avg time per session| 1m 22s | 1m 15s | TBD|
|Spouse page Bounce rate| 1.24% | 1.12% | TBD|

|Dependents | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-Month post launch|
|---| --- | --- | ---|
|Dependents page views| 10,536 | N/A | N/A|
|Dependents page Avg time per session| 1m 33s | 1m 23s | TBD|
|Dependents page Bounce rate| 1.37% | 1.23% | TBD|

|Veteran income | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-Month post launch|
|---| --- | --- | ---|
|Veteran income page views| 6,533 | N/A | N/A|
|Veteran income page Avg time per session| 1m 58s | 1m 46s | TBD|
|Veteran income page Bounce rate| 1.32% | 1.19% | TBD|

|Spouse income | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-Month post launch|
|---| --- | --- | ---|
|Spouse income page views| 3,431 | N/A | N/A|
|Spouse income page Avg time per session| 47s | TBD | TBD|
|Spouse income page Bounce rate| 1.16% | 1.04% | TBD|

|Deductibles | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-Month post launch|
|---| --- | --- | ---|
|Deductibles views| 4,604 | N/A | N/A|
|Deductibles page Avg time per session| 1m 01s | 57s | TBD|
|Deductibles page Bounce rate| 1.63% | 1.47% | TBD|

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Will Veterans find this helpful?
  - Will they take the time to look through all of their information?
- **Usability Risks** (can people figure out how to use it):
  - Will users understand how to edit information on the page that displays their data?
  - Will they find it easier to use than the previous design (multi-page)?
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Can the List&Loop pattern handle this?
  - Can the platform team resolve the bugs in the L&L so that we can launch?
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Will this increase the time burden on Veterans for the EZR and thus go against the stated aim of making things faster for Veterans?
  - Will this improve data integrity within VHA systems?
 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
- Change Dependent, Spouse, and Financial sections of the Household section to utilize the List&Loop pattern and allow Veterans to view their information and edit it as needed. Adding prefill to the household section.
> *What have you explicitly decided to **not** include and why?*
- Any section outside of the Household section. Anything outside of transitioning to List&Loop. 
> *How does this solution address your Assumptions & Risks?
- We believe that fewer screens and presenting information up front will both reduce the time burden for Veterans and improve data integrity for VHA. 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
- Just the 1010 team and our POs Patrick Bateman, Amanda Klausmeier, and Jina Ryu. 
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*
- We are debating either launching at 100%, or doing an A/B testing style launch with the existing flow.
- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

- Links to release plans
     - 1st - [Financials release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Household%20Section%20V2/Household%20section%20V2%3A%20Financials%20-%20Release%20Plan.md)
     - 2nd - [Spouse release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Household%20Section%20V2/Household%20section%20V2%3A%20Spouse%20-%20Release%20Plan.md) 

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
