# MHV on VA.gov Initiative Brief - Notification email update prompts
#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
- Product: My HealtheVet on VA.gov
    - Initiative: Notification email update prompts
 
 </details>
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
- Veterans will verify, change, or add the email address that they want to use for receiving notifications

**Related/Associated product(s)**
- Product | My HealtheVet on VA.gov

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem?
  - More than 600k Veterans' VA.gov profile email address is null or does not match their My HealtheVet email address where they have been receiving notifications from the My HealtheVet Classic notification system.  When the MHV applications migrate their notifications to VA Notify later this year, Veterans without an email address in VA.gov Profile, or whose VA.gov profile email address has not been confirmed for notifications, may not recieve important emails about their medical appointments, medications, messagages from providers, or medical images that are ready for download.
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  - The My HealtheVet DBA ran a query to compare the two sets of email addresses.
* How does this initiative help further OCTO-DE's mission and goals?
  - It will ensure that Veterans reliably continue to receive their health notifications and know where to find related information on My HealtheVet.

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

- The number of Veterans with missing/mis-matched email addresses decreases. | 600K | 0 | Data source is an SQL database query that cannot be linked.
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

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)



#### Initiative Launch Dates
-  9/1/2025; actual date is dependent on Mobile release dates
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
#### 1. My HealtheVet Landing Page (web)
<img width="772" height="815" alt="image" src="https://github.com/user-attachments/assets/5078c4db-4ae3-48f9-8378-59500e48f5b9" />


#### 2. VA.gov Profile landing page (web)
<img width="787" height="823" alt="image" src="https://github.com/user-attachments/assets/7d77a517-8e2d-47b9-8b08-8f64292f2a4d" />


#### 3. VA.gov Profile contact info page (web)
<img width="772" height="753" alt="image" src="https://github.com/user-attachments/assets/2f6788b3-5aec-4021-b188-324af141223c" />

#### 4. VAHB mobile app Health landing page
<img width="1170" height="2532" alt="image" src="https://github.com/user-attachments/assets/06b7bbd5-a795-4e87-beab-fa7fe9b83a6e" />

#### 5. VAHB mobile app Profile landing page
<img width="1170" height="2532" alt="image" src="https://github.com/user-attachments/assets/3e42d783-b43a-4972-a5a8-640f09ccc5b4" />

#### 6. VAHB mobile app Profile contact info page
<img width="1170" height="2532" alt="image" src="https://github.com/user-attachments/assets/c6731af0-d274-4a0b-b5eb-df5350172412" />


### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: MHV Horizon
- GitHub Label(s): mhv-horizon
- Slack channel: #mhv-horizon-team
- Product POCs: OCTO Lead: Marci McGuire; Product Manager: Bryan Ivie

</details>


#### Stakeholders


<details>
   
- Office/Department: VHA Office of Connected Care
- Contact(s): Theresa Hancock, Carnetta Scruggs
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
