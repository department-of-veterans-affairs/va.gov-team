# Initiative Brief - Permission to Include PHI and PII in Appointment Reminders

- **Product:** VA.gov Profile | Notification Settings
   - **Initiative:** Support the MHV to VA.gov Migration by displaying the PHI/PII Appointment Reminder Permission 

#### Overview

Historically, the VA was sending generic appointment reminders devoid PHI/PII. Some veterans have multiple appointments at different VA Facilities so it is important they receive specifics around the location and doctor's office they are scheduled to visit. 

Veterans expressed frustration at the legacy reminders and shared the desire to have additional context in their unencrypted text and email appointment reminders. MHV responded to the request by allowing users to grant permission to send PHI/PII in their appointment reminders. As MHV migrates to VA.gov we'll need to support this feature to ensure a consistent user experience for veterans who opt in to have PHI/PII in appointment reminders. 

We need to allow for the same functionality on VA.gov Profile where users can grant or rescind permission for PHI/PII in appointment reminders.

---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*

The goal of this is to ensure veterains who use MHV today are able to maintain the same capabilities as MHV migrates to VA.gov. The option to grant the VA permission to include PHI/PII in appointment reminders is an important aspect of that. 

**Related/Associated product(s)**
- Product | AE Profile - [Notification Settings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences)

## Problem
> *Describe the challenge / pain point you seek to address.:* 
>* What is the problem and who is affected? And, what evidence do we have of the problem?
>* Why do you think the problem is occurring? Other reasons why this might be occurring?
>* How does this initiative help further OCTO-DE's mission and goals?


Email and Text Message are unencrypted communication channels. When communicating with veterans we have to be mindful of the risks inherent to unencrypted messaging which can expose sensitive information. In light of the risks associated with unecnrypted messaging it's important Veterans opt-in and grant us permission to send sensitive PII and PHI in those unencrypted channels. Additionally, this is a requirement mandated by law.

Today, MHV users have an opt in/out process that allows them to decide if they would like to see PII/PHI in their appointment reminders. There's a process flow through Vet Text that allows them to opt in / grant permission for MHV to send PII/PHI in appointment reminders. The goal of this initiative is allow users to update their VA.gov profile to grant or rescind persmission for including PHI/PII in appointment reminders. 




## Desired User Outcomes
>- *Why would a user want to use this?*
>- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

- Users are already leveraging this in the MHV ecosystem. We will be allowing them to make the same decisions on VA.gov. This will allow a veteran to receive important health related contex in their appointment reminder so they arrive at the appropriate time at the correct facility.

## Undesired User Outcomes
- A confusing or challenging to navigate UI 
- If we delay in deploying this, users could have a  loss of functionality when MHV is migrated to VA.gov


## Desired Business Outcomes
>- *Why would your business want this to exist?*
>- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
- Successful implementation of this feature is an important component of documenting that our users have granted permission to include PHI/PII in appointment reminders. 

## Undesired Business Outcomes
- The AE Profile team misses the mark and delays go to market for MHV on VA.gov

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*
> - Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

**TBD**

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - This is already in use in the MHV ecosystem 
- **Usability Risks** (can people figure out how to use it):
  - TBD based on our design 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 
VA Notify is assuming the risk of sending PHI/PII in unencrypted messages and is coordinating the work necessary to ensure they have the proper approvals in place. In the VA.gov Profile, we will give users a way to grant permission. 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

In the VA.gov profile under notification settings > "your healthcare" > "appointment reminders" selection we will enable users to grant permission for PHI/PII in their appointment reminders 

Currently users see:
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/fb11bba5-6574-405b-bed1-7e981d4d3aa8)

We'd need a check box or radio button feature to be determined with the team's designers to allow veterans a means to see if they've granted the VA permission to include PII/PHI in their appointment reminders and to opt in or out. 

This would be for text and email. A user could opt in to the permission to allow PHI/PII in Text OR Email, BOTH, or Neither. 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
We will be coordinating with VA Profile, VA Notify, and MHV teams to ensure this rolls out at the necessary moment. 
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
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/fb11bba5-6574-405b-bed1-7e981d4d3aa8)
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
