# Initiative Brief Template

## Outcome Summary
> *Provide a save-in-progress functionality within the List & Loop pattern*

**Related/Associated product(s)**
- [10-10EZ Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [Epic - SIP for List & Loop pattern #94818](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94818)
- [Mural - Discovery board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699485613760/d40578dbce4f0433d792988db24e4dec8d5b4fd1?sender=u5ad49c107baa41137f271007)
- [Figma Designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=0-13663&node-type=canvas&t=CPd4xDpz3QwiOE4C-0)

## Problem
Since the end of October 2023, we started to see submission failures for the 10-10EZ, failing all retries.  The error message states `Missing required fields` and then lists the fields missing: a combination of Child DOB, SSN and Dependent date.  
There has been one failure that has an error message `Missing required fields`, and the missing field was the insurance company name.
There has also been several failures with error message  `undefined method [] for nil:NilClass`, which seems to indicate the Dependent name is missing.

We have since removed the functionality of "Save in progress" within the Dependents and Insurance sections.  The Veteran must complete adding all dependents and/or insurance policies within a single session before it will save.

Now, we need to determine how to implement a validation mechanism on fields within the List & Loop pattern, after a Veteran has saved the form (or auto-save), left the form and is now returning to the form, so that their previously entered input is saved and still available for viewing and/or editing.

**If** _we add the Save In-Progress functionality within the List & Loop pattern_ **then** _we expect that any data input within the List & Loop pattern will remain as saved, and the returning authenticated user will be prompted if there are any required fields that were left blank.  This will save time, effort and cognitive load for the Veteran_.

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
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is analytical evidence that reflects users are revisiting the form and expecting their form to reload with any pre-entered data, so they may continue where they left off.  This functionality needs to be reinstated within the form for continuity and less effort for the user.
  - The risk is the Save-in-progress continuing not to work for the List & Loop patterns, causing continued dropoffs, frustration and distrust.

- **Usability Risks** (can people figure out how to use it):
  - The effort is low, as the save is automatic when any change is made within the form pages, so there are no usability risks

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - The risk here is that the solution may not work across all forms that use the List & Loop pattern on VA.gov
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
- **In Scope**
     - Implement the Save-in-Progress functionality within the List & Loop patterns within the 10-10EZ form
     - Display alerts on the cards if there are "*Required" fields that are missing input/blank
     - Allow the fields to be updated
     - SIP functionality automatically updates as it does on other pages

- **Out of Scope**
     - Any pre-fill opportunities for fields
     - Changes to fields or questions
     - Changes to question flow

#### Go-to-market 
- There are no Go to market/communication requirements or needs
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline & Major decisions documented
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative - TBD](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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

- Team Name: 10-10 Health Apps
- GitHub Label(s): 1010-team
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO, VES, VEO, HEC
- Contact(s): Patrick Bateman, Lois Lewis, Joshua Faulkner, Bryan Burgan
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
