# Claims Form Upload Initiative Brief 
#### Overview

<details>
    Representatives need a way to submit forms for their claimants. We had a way for veterans to submit forms using Simple forms. We forked Simple Forms code as a starting point. Lifting and shifting the code saved us a lot of time. In the early design phases, it became clear that forking the code rather than reusing it in-place was the better option:
        - We needed to make it an ARP app which required some changes to make it function
        - We need to do additional checks on the backend for POA
        - We will eventually need to add multi-form upload for documents that require supporting evidence
        - We wanted to make the process easier for reps by making the digital form all one page
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - Product: Claims Form Upload
 
 </details>

---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
- Increase the ease and efficiency of digital form submission

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem? 
- We needed a way for Representatives to upload and submit documents for their claimants
* How does this initiative help further OCTO-DE's mission and goals?
- When fully rolled out, this will increase the number of digital claims submissions through va.gov

---

## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Number of forms submitted
- Number of representatives using platform
- Uptime of platform

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Will reps log into ARP to use it
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - none. Simple forms proved the need

### What're you building
> A digital form submission tool

#### Go-to-market 
> We are working with the Connecticut VA to test our product first and have also received feedback from other groups

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

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

Old digital form
![alt text](<Screenshot 2025-03-05 at 3.14.21 PM.png>)
![alt text](<Screenshot 2025-03-05 at 3.14.42 PM.png>)

### After
New ss the claimant the veteran page

![alt text](<Screenshot 2025-03-05 at 3.13.08 PM.png>)

Digital Form as One Page
![alt text](<Screenshot 2025-03-05 at 3.11.42 PM.png>)
![alt text](<Screenshot 2025-03-05 at 3.11.29 PM.png>)

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Accredited Rep Facing
- GitHub Label(s): benefits-accredited-rep-facing
- Slack channel: veteran-facing-forms
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
