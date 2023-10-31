# Address Change Messaging Initiative Brief
#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - *Product: Profile* 
   - *Initiatives: Type-ahead, [Search Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/search-landing/initiative-brief.md), [Surfacing Other Search Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/surfacing%20other%20search%20tools/initiative-%20brief.md)*
 - *Product: VA.gov Profile*
   - *Initiatives: Combine Account & Profile, Direct Deposit for Disability, Candidate Address Validation, Direct Deposit for Education, Notification Preferences*
 - *Product: Disability Claims*
   - *Initiatives: Original Claims, Benefits Delivery at Discharge (BDD)*
 
 </details>
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
Mailing addresses and home addresses will be kept in sync if they are the same address.

**Related/Associated product(s)**
- Profile | [Link to product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile)

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* Some users mistakenly think that their mailing address is automatically updated ehwn updating their home address, and/or they don't understand which address is used for sending correspondence and/or prescriptins.
* We believe this is happening because there is nothing to remind the user to update their mailing address if they change their home address.  The VA has also been contacted by users when they realize that they have not been receiving mail and discover that their mailing address was not automatically updated as they previously believed.
* This initiative helps further OCTO-DE's vision and mission by making it easier for Veterans to use VA.gov Profile and helping them continue to receive their benefits (medications in this case).

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

There currently are no metrics for this problem; it was presented to us by Stakeholders who had received complaints.  We would expect that those types of complaints would be reduced, but there doesn't seem to be any data stored to keep track of them.

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks.*

- **Value Risks** (will people use it): 
  - Users may choose not to update their mailing address even if prompted
- **Usability Risks** (can people figure out how to use it):
  - Users may not be clear on the difference between mailing address (where they receive mail) with home address (where they live)
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - API availability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: VA stakeholder testing, marketing, compliance requirements 

### Prioritization
> *Describe how the team will consider competing solution hypotheses/ideas. Prioritize them accounting for reach, impact/value, effort, and confidence.*

### Solution Summary
> *What's in scope for you to build with this initiative? Describe key features/flows. What have you explicitly decided to **not** include and why?*

The scope of this initiative will include providing a message when a user updates their home address, asking if they also want to update their mailing address.  It will simplify the process by asking if they are the same, so they are not required to enter the address a second time.

This *will not* include any additional address validation beyond what is already provided in the VA.gov profile.

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
- GitHub Label(s): `#vsa-authd-exp`, `profile`, `address-chg-msg`
- Slack channel: `#vsa-authd-exp`
- Product POCs: 
  - Samara Strauss (Product Owner)


</details>


#### Stakeholders
  
- Office/Department: VBAVACO
- Contact(s): 
  - Barbara Burns (VA Profile)
  - Melissa Rebstock VBASPT
  - Laurie Baker VBAVACO
  - Rebecca Pass VBAVACO
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

