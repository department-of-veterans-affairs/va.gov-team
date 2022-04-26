# Project outline: Add payment/financial info to the My VA dashboard

Last updated April 25, 2022

### Communications

- **GitHub Label**: vsa-authenticated-exp; profile
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Heather Justice|Product Manager| heather.justice@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Angela Agosto	|Designer |	angela.agosto@adhocteam.us|
|Taylor Mitchell| FE Engineer|	tmitchell@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Discovery](#discovery)
- [Launch Planning](#launch-planning)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Screenshots](#screenshots)


## Overview

People have mentioned that seeing payment info on their My VA dashboard is a high priority since our [initial dashboard discovery in 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#for-those-interested-in-education-benefits-gi-bill-balance-and-payment-information-was-most-important), and again in later research sessions, including during [December 2020 exploration research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md#additional-insights), [March 2021 usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research%20V2/MyVA2-research-findings.md#features-users-expected-to-see-that-were-missing), and [July 2021 notifications discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#things-veterans-mentioned-theyd-want-to-see-as-an-alert). The importance of payment information also bears out in analytics. Viewing payments is [a top interaction on VA.gov overall](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20201122&_u.date01=20211121&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.eventCategory:Interactions/), and "Payments" is  [a top search from the My VA dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/product/post-2.0-redesign-analytics.md#searches). This effort aims to add payment information to the My VA dashboard and to determine if any other financial information should be elevated as well.

## Problems

- Users expect to see their payment information on My VA, but currently do not.
- Users have trouble finding this information, with terms like “payment”, “debt”, “travel pay” and “direct deposit” (and variations of those terms) make up half of the top 20 search terms generated from My VA.
- When My VA eventually becomes the authenticated homepage, it needs to accomodate all of the top tasks on VA.gov, of which viewing payment history is one.

## User Outcomes

### Desired User Outcomes

*Why would a user want to use this?*

- This additional section will further support My VA dashboard as a "one-stop shop" for information that is a priority to veterans.
- Actionable links will allow the veteran to access more financial details and perform appropriate actions as needed

*With this problem solved, what should users be able to do/achieve that they couldn't before?*

- Veterans will more quickly view and complete tasks related to their payment and debt information.

### Undesired User Outcomes
- We do not want this section to cause confusion or add to their cognitive load.  It should be informative and usable
- We do not want the My VA page to become too cluttered or cumbersome, slowing down veterans, instead of expediting their experience
 
## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist?*

The addition of a payment information section should help fulfill our north star objective of moving toward My VA being the one-stop shop for action items and benefit status, so that it provides more direct, personalized routes to veterans’ most critical updates and tasks.

*With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Provide veterans with a personalized go-to source for payment and debt information.
- Provide veterans with links to related action items, such as viewing outstanding debts, payment history, or direct deposit.
- Reduce the number of payment or debt-related searches.

### Undesired Business Outcomes
- We do not want the My VA page to become cumbersome and unusable.

---
## Measuring Success

### Objective: Meet user need/expectation and elevate payment and debt information to user dashboard.

**Key result**: Increase overall clicks into payment history and debt information by 10%.

|KPI/metric|Baseline: Aug-Nov 2021|Post-launch: Q3 2022| Post-launch: Q4 2022|
|----------|-------------|---------------|-------------------|
|Clicks to view all payments ("[View your payment history](va.gov/va-payment-history/payments)")| 2.5mil (visits to the url)|TBD|TBD|
|Clicks to view all debts ("You have n oustanding debt payments. [Manage your VA debt](va.gov/manage-va-debt/your-debt")| 158k|TBD|TBD|
|Clicks to manage direct deposit ("[Manage your direct deposit](va.gov/profile/direct-deposit)")| 1.2mil|TBD|TBD|
|Clicks to request travel reimbursement ("[Request travel reimbursement](va.gov/health-care/get-reimbursed-for-travel-pay/)")| 255k|TBD|TBD|

**Key result**: Reduce search incidents for payment, debt, or direct deposit from the My VA dashboard. These terms should not be in the top 20 search terms for searches generate from My VA. 

[My VA Search Report: Aug – November 2021](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20210801&_u.date01=20211130&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fmy-va~2F/)

|KPI/metric|Baseline: Aug-Nov 2021|Post-launch: Q3 2022| Post-launch: Q4 2022|
|----------|-------------|---------------|-------------------|
|Search rank for "payment” or "payment history" from My VA| #1, #10, #11|TBD|TBD|
|Search rank for "debt” or "debt management" from My VA| #3, #20|TBD|TBD|
|Search rank for "direct deposit” from My VA| #2, #6|TBD|TBD|

This may also have an impact on [overall searches on VA.gov for logged in users](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p184624291/&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_.useg=user8twPUpCZT8qMEc9RwdXoUg/).

|KPI/metric|Baseline: Aug-Nov 2021|Post-launch: Q3 2022| Post-launch: Q4 2022|
|----------|-------------|---------------|-------------------|
|Search rank for "payment” or "payment history"| #6|TBD|TBD|
|Search rank for "debt” or "debt management"| #23|TBD|TBD|
|Search rank for "direct deposit”| #7, #17|TBD|TBD|

---

## Discovery

### Solution Summary
> *What's in scope for you to build with this initiative? Describe key features/flows. What have you explicitly decided to **not** include and why?*

**In Scope - MVP**
Please see the [Payment/Financial Discovery Synthesis and MVP doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-discovery-synthesis.md) for detailed documentation on the MVP requirements.

- Most recent payment (31 days out - Confirmed via [this Slack message](https://dsva.slack.com/archives/C909ZG2BB/p1640031990019000), anything older will result in the payment card/block not showing, replaced with a text statement "You haven't received any payments in the past 30 days." (links for debt (if appllicable) and direct deposit will remain.) 
- Dynamic debt text (You have 2 outstanding debt. "Manage your VA debt" is the [link](va.gov/manage-va-debt/your-debt) on the same line), in the case of no debt, the debt box will be replaced with text "Your debt balance is $0".
- Manage your direct deposit [link](va.gov/profile/direct-deposit)
- View your payment history [link](va.gov/va-payment-history/payments)
- Learn about VA debt [link](va.gov/va-debt-management)

**Not In Scope** 
- Survivors pension
- Survivors comp (DIC)
- Caregiver program
- VA Homeloans information
- Co-pay details (future enhancement as data comes available)

---
## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket [#33468](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33468)
- Design Intent ticket [#33477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33477)
- Content ticket [#34015](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34015)
- Experimental Design proposal ticket [#606](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/606)
- Midpoint ticket [#34549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34549)
- Contact Center guide ticket [#38181](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38181)
- Analytics - [Link Clicks Ticket #37589](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37589) and [API load success/fail Ticket #38739](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38739)
- Staging ticket [#38376](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38376)
- Privacy & Security ticket [#434](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/434)

### Incident Response info
A security vulnerability is unlikely due to the 2-factor authentication required to access the page and personal information.

- Payments API: /v0/profile/payment_history
     - Previously managed by the eBenefits team before 4/7/2022; Currently unsure who manages this
          - OCTO-DE Lead: Matt Self
- Debts API: /v0/debts
     - Currently managed by the Debt resolution team 
          - PM: Denise Coveyduc
          - OCTO-DE Lead: Matt Self

---
## Key deliverables

- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research)
- Design documentation [Mural](https://app.mural.co/t/vsa8243/m/vsa8243/1638500075560/0e849f61e282ebe2d8e7119eea504e4c05b0bbe4?sender=u5ad49c107baa41137f271007), [Sketch](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/p/3FB0D20D-D78F-4998-B2F0-1482780C34BB?search=payment) and [UXPIN Prototype](https://preview.uxpin.com/45251888896c8dd47ef62aa20d3a89a334726ac1#/pages/145483168/simulate/no-panels?mode=i)
- [Research/Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research)
- [Technical documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/payment-history-frontend.md)
- How to access and test
    - [Staging env](https://staging.va.gov/my-va/)
    - [Testing documentation - TestRail](https://dsvavsp.testrail.io/index.php?/suites/view/5&group_by=cases:section_id&group_id=3309&group_order=asc&display_deleted_cases=0)
    - [Payments Information test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info.md)
    - [Payments Information a11y test case documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/Staging%20Review/Accessibility%20testing.md)
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/product/release-plan.md)
- [Production env](https://www.va.gov/my-va/)


### Key Dates
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

- Nov 2021: Kickoff with MVP outlined & begin design
- Dec 2021: Design work finalized
- Jan 2022: Usability testing kickoff
- Feb 2022: Finalize designs, development
- Mar 2022: Complete QA
- Apr 2022: Complete UAT
- Apr 20, 2022: Launch to 25% of users

---
   
## Screenshots

### Before

*My VA 2.0 prior to adding a payments section*

![My VA 2.0 All Sections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### After

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
