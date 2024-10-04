# Initiative Brief Payment History
#### Overview

Providing Veterans with timely and accurate information on their payment history is a crucial need that is underscored by the feedback Veterans have left on the <a href="https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_fsr/research/medallia_reports">Debt Portal Medallia feedback</a>.

Related tickets: 
<a href="https://app.zenhub.com/workspaces/vsa---debt-607736a6c8b7e2001084e3ab/issues/gh/department-of-veterans-affairs/va.gov-team/18859">#18859</a>

 
---

## Outcome Summary
- Improved clarity (measure through usability testing)
- Provides confirmation and reassurance that their copay bill and overpayment has been resolved once they have made a payment 
- Reduced confusion and anger that Veterans feel (as seen in Medallia feedback)
- Reduced possibility of inaccurate information or outdated information (as seen in Medallia feedback)


**Related/Associated product(s)**
- Combined Debt Portal  | <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/product_outline.md">Link to product outline</a>

## Problem
- What is the problem and who is affected? And, what evidence do we have of the problem?
- Why do you think the problem is occurring? Other reasons why this might be occurring?
- How does this initiative help further OCTO-DE's mission and goals?

**What**

- As of May 2024, Veterans do not receive timely confirmation of payments made on the debt portal, resulting in confusion, frustration, and possibly mistrust. - Veterans may not see their payment confirmation reflected in the debt portal for months. 
- They receive an immediate confirmation when the payment is made * 
- They can’t revisit the debt portal to review this payment history
- They have to wait for the next statement a month later to see their payment
- Inconsistent messaging about payments made can be a distressing experience for Veterans seeking to resolve and address their debt.
  
**Why**

- The payment history data messaging discrepancy is due to the payment history being batched on a monthly basis, resulting in untimely information on the debt portal. 
- Veterans rely on consistent messaging across the different channels of official communication with VA (email, debt portal, call center) to have confidence that their payments went through. Inconsistencies can reinforce mistrust of VA. 

**How**

Payment history improvements support the following: 
- All new products have a faster transaction time than those they replaced.
- Veterans share more positive feedback on Medallia

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

**Value Risks (will people use it):**

*Payment History*
- The feature will be integrated with the debt portal and it will solve an existing major issue with the debt portal that is resulting in high frustration and anger. 
- If we use both CDW and Lighthouse data, alignment with these 2 data sources

*Data Discovery*
- _Letter codes_ are unrelated to the transaction/Hines codes. They are literally the [codes for the various debt letters](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/discovery/letter-samples/eFolder-Supported%20Letter%20Types.md) that get sent to a veteran. They are entirely separate objects and not related to transaction data.
- We will need to do the work of categorizing and grouping the transaction/Hines codes similarly to how the diary codes are currently done. A transaction code is a more broad term, and each set of transaction codes has a specific Hines code, and together, you get something unique and specific. Since they are so granular, we think the best path forward is to figure out the general groupings and create more broad, generic, veteran-facing, humanly readable descriptions. DMC is now working on a more cleaned-up version of what they sent over recently, and once we get that, the UX team will try to attempt to create some kind of spreadsheet similar to the Diary Codes with groupings and base-level descriptions.
 
*PDF*
- We recommend delivering a printable PDF as in the current experience. 
- The risk of providing a printable PDF that is generated by VA.gov teams is the need to provide a mechanism for verifying the accuracy of such PDFs that match with the letters that Veterans receive.
- There will need to be an updated backend API that links with Lighthouse instead of CDW.
- Best case scenario: PDFs provide the Veteran with a printable document of their payment history.

**Usability Risks (can people figure out how to use it):**
- We will confirm the usability of new payment history designs in an evaluative usability study

**[Technical] Feasibility Risks (can we build it with available tech/data):**
Examples:
Upstream/Downstream API/Data availability and reliability
Site performance impacts (see Google Lighthouse, WebPageTest, #-daily-lighthouse-scan)

*(For Kevin Suarez to fill out)*

**Organizational Viability Risks/Constraints (will there be a positive organizational impact):**

- We are confident that an improvement in the timeliness of payment history messaging will result in a positive user experience for Veterans on the debt portal. 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

 **TBD: Discuss unknowns**

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85533)

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
Current Debt (VBA) Summary Page:
https://staging.va.gov/manage-va-debt/summary/debt-balances (log in to User81)
![debt-summary](https://github.com/department-of-veterans-affairs/va.gov-team/assets/5553542/80f41667-27ac-4a37-9dbf-8c84463814c2)


Current Debt (VBA) Detail Page:
https://staging.va.gov/manage-va-debt/summary/debt-balances/details/79612301872 (log in to User81)
![debt-detail](https://github.com/department-of-veterans-affairs/va.gov-team/assets/5553542/31710c63-abe2-45ba-b627-6faa751b998d)


---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 
- GitHub Label(s): Debt Portal
- Slack channel: #debt-resolution
- Product POCs: Denise Coveyduc, Tom Davis, Heather Rienks

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: VBA, DMC
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
