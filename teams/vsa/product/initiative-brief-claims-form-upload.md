# Claims Form Upload Initiative Brief 
#### Overview

<details>
Representatives need a way to submit forms for their claimants. We had a way for veterans to submit forms using Simple Forms. We forked Simple Forms code as a starting point. Lifting and shifting the code saved us a lot of time. In the early design phases, it became clear that forking the code rather than reusing it in-place was the better option:

- We needed to make it an Accredited Representative Portal (ARP) app which required functionality changes
- We need to do additional checks on the backend for an established Power of Attorney (POA)
- We will eventually need to add multi-form upload for documents that require supporting evidence
- Because reps are power users, we wanted to simplify the process by making the digital form one page
 
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
 
Representatives need a reliable tool to upload and submit documents for their claimants. Stakeholder Enterprise Portal (SEP) is able to process claims well. However, forms were often outdated, which could delay processing even more. This is [the research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2024-10-VSO-VAbenefits-interviews/research-findings.md#detractors-pain-points) that references the VSOs pain points. 

* How does this initiative help further OCTO-DE's mission and goals?
  
When fully rolled out, this will increase the number of digital claims submissions through VA.gov. By increasing the number of claims, this would allow more Veterans to gain access to VA health care and benefits faster. 

---

## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of Use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
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
  - Reps would be able to access it in the ARP, which is also where they can manage POA requests
  - Some reps may continue to use third-party tools but the quick access to VBMS after accepting POA requests might entice them
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - None. Simple Forms proved the need

### What're you building
A digital form submission tool
- Ability to upload a standalone 686c PDF and routed through central mail
- Established Intent-to-File with structured data directly to VBMS
- Support 526 form PDF upload, and routed through central mail
- Ability to upload supporting documents 
- Ability to track past submissions made through ARP

#### Go-to-market 
We are working with the Connecticut DVA and other VSOs to test our first iteration. We will be working with the VSO Liaison to onboard any other VSO organizations.

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Gradual Rollout Launch Date*
  - May 28, 2025
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
Product Owner: Jennifer Bertsch - jennifer.bertsch@va.gov
Engineering Lead: Steve Albers - steve.albers@va.gov
Design Lead: Lesley Ropp - lesley.ropp@va.gov
Product Manager: Candi Lemoine - candi.lemoine@oddball.io

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
