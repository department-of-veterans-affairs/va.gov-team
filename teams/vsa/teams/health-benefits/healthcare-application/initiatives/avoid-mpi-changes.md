# Prevent unintended MPI updates via 10-10ez

## Outcome Summary
Prevent unintended/inappropriate modifications to MPI when filling out the 10-10ez.

**Related/Associated product(s)**
- [Health care Application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/product-outline.md)

## Problem

On the 10-10EZ, if the user is authenticated, we pre-populate some of the fields for them, based on the values in the Master Person Index (MPI). However, these fields are editable, and may be changed by the user. 

Because the ICN is submitted with the 10-10EZ for an authenticated user, the MPI for that user gets changed. This represents both a data integrity issue and a security vulnerability as someone can overwrite certain information and then try to merge entries.

The likely step for a user who notices inaccurate information is to raise with their local medical center. 

Potential data at risk include: name, ssn, dob. 

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
  - What's the history of why these fields are editable? 
  - Is the data accurate to begin with? In research, we've found e.g. new Veterans have inaccurate data and they may use the opportunity to fix. 
  - What's the volume of changes to these fields? Unclear. MPI team found 2 instances. 
  - Are there other detours for someone to bypass "locked" fields? No, they can't use e.g. the unauthenticated route. 
  - What happens to submission numbers if we prevent editing? 
  - What is the recourse for incorrect data (assuming turning off editing)? 
  
- **Usability Risks** (can people figure out how to use it):
  - What fields must/should/won't be editable? 
  
  - **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Does MPI have a check for changes to it's data? No
  - What is the difficulty in turning off editing? 
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Are other forms dealing with this potential risk? Unclear. May be happening on other forms. 
  - What downstream impacts are there to e.g. Medical Centers having to deal with data changes? 
 

### Prioritization
> *Describe how the team will consider competing solution hypotheses/ideas. Prioritize them accounting for reach, impact/value, effort, and confidence.*

It matters more that we close off a potential vulnerability over deferring Veterans to another route e.g. Medical Centers. 

### Solution Summary
> *What's in scope for you to build with this initiative? Describe key features/flows. What have you explicitly decided to **not** include and why?*

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
