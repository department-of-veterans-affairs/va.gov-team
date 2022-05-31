# Prevent unintended MPI updates via 10-10ez (created prior to 5/2022, moved to its own folder)

## Outcome Summary
Prevent unintended/inappropriate modifications to MPI when filling out the 10-10ez.

**Related/Associated product(s)**
- [Health care Application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)

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

- Submission rate
- Application completion rate 

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks.*

- **Value Risks** (will people use it): 
  - What's the history of why these fields are editable? 
  - Is the data accurate to begin with? 
    - In research, we've found e.g. new Veterans have inaccurate data and they may use the opportunity to fix. 
  - What's the volume of changes to these fields? 
    - Unclear. MPI team found 2 instances. 
  - Are there other detours for someone to bypass "locked" fields? 
    - No, they can't use e.g. the unauthenticated route. 
  - What happens to submission numbers if we prevent editing? 
  - What is the recourse for incorrect data (assuming turning off editing)? 
    - https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/
  
- **Usability Risks** (can people figure out how to use it):
  - What fields must/should/won't be editable? 
  
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Does MPI have a check for changes to it's data? 
    - No
  - What is the difficulty in turning off editing? 
    - Known 
  - What sort of checks should we have to ensure the data is not modified based what's coming from MPI (and into the user object)?
    - Initial assessment is that we're not sending anything off to MPI **directly.** That may still mean the entire HCA package that ES receives _is_ sent off to MPI, including potentially modified data.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Are other forms dealing with this potential risk? 
    - It is **not** common for other VA forms to allow editing of Veteran (biographical) data via their forms. 
  - What downstream impacts are there to e.g. Medical Centers having to deal with data changes? 
    - Unclear at the moment.  
 
### Prioritization
> *Describe how the team will consider competing solution hypotheses/ideas. Prioritize them accounting for reach, impact/value, effort, and confidence.*

It matters more that we close off a potential vulnerability over deferring Veterans to another route e.g. Medical Centers to edit their data. 

### Solution Summary
> *What's in scope for you to build with this initiative? Describe key features/flows. What have you explicitly decided to **not** include and why?*

- For authenticated users who fill out the 10-10EZ, the Name, DOB, and SSN fields will
  - a/ show the current values from MPI
  - b/ be grayed out so as to indicate they can't be updated
  - c/ not be able to be updated
- For authenticated users who submit the 10-10EZ, the Name, DOB, and SSN fields submitted will be those from MPI, not from the form
- None of this applies for not-logged-in users

For the second bullet, we need to make sure we use the attributes from our user object behind-the-scenes / in vets-api, not the submitted greyed out form fields. Even submitting the greyed out fields is a security risk. Cody Reinold is happy to chat further if we're not sure how to do this part.

Not electing for addtional backend validation; relying on frontend validation to prevent passing along changes to MPI "trait" data.

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- n/a

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

- We're modifying the existing HCA product, greying out fields that are previously editable. 

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

<details>
  
- ![image](https://user-images.githubusercontent.com/13204473/141007160-c9ee91a5-ff15-4391-b29b-5092eab47c79.png)
- ![image](https://user-images.githubusercontent.com/13204473/141007323-913d5c06-66a0-40f2-b505-81c73aa903e4.png)

</details>

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
