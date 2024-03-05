# Feature: Payment and debt info on the My VA dashboard

**Last updated: February 16, 2024 - added Figma link**

### Communications

- **GitHub Label**: vsa-authenticated-exp; my-va-dashboard
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)
- **MVP Epic [#43337](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43337)**
- **Payment info v2 Epic [#43332](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43332)**

### Roles

[Please see the My VA product outline for the current My VA team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [User Problem Statements](#user-problem-statements)
- [Measuring success](#measuring-success)
- [Projects](#projects)
- [Feature Overview](#feature-overview)
- [How to Access and Test](#how-to-access-and-test)
- [Frontend](#frontend)
- [Backend](#backend)
- [Design and UX](#design-and-UX)


## Overview

People have mentioned that seeing payment info on their My VA dashboard is a high priority since our [initial dashboard discovery in 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#for-those-interested-in-education-benefits-gi-bill-balance-and-payment-information-was-most-important), and again in later research sessions, including during [December 2020 exploration research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md#additional-insights), [March 2021 usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research%20V2/MyVA2-research-findings.md#features-users-expected-to-see-that-were-missing), and [July 2021 notifications discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#things-veterans-mentioned-theyd-want-to-see-as-an-alert). The importance of payment information also bears out in analytics. Viewing payments is [a top interaction on VA.gov overall](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20201122&_u.date01=20211121&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.eventCategory:Interactions/), and "Payments" is  [a top search from the My VA dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/product/post-2.0-redesign-analytics.md#searches).

Our intitial effort -- to add payment information to the My VA dashboard -- aimed to meet this expectation, and appears to have done so. After having launched this work to 100% of users in May 2022, the link to view payment information is already 5th most-clicked link on My VA. Additionally, the debt and direct deposit links we added get a fair amount of traction, and searches for debt and direct deposit from My VA are down from where they were prior to launch.

Prior to this initial launch, we were made aware of some usability problems with our MVP through UAT and the VA.gov collab cycle staging review. Feedback of note included that it was sometimes hard to differentiate between payment info (money going to the veteran) and debt info (money owed to the VA), and that we did not give enough emphasis to debt information. Given how late in the project we heard this feedback, we did not get a chance to address these issues before launch, so our team is now working on a "V2" of this section to better clarify and balance payment and debt information.

## User Problem Statements

- As a veteran who receives payments from the VA, I expect to see that information reflected on my personalized dashboard.
- As a veteran who owes money to the VA, I expect to be alerted to that promptly and clearly, including on my personalized dashboard.

## Measuring Success

### MVP: Adding payments and debts to My VA (October 2021 - May 2022)

<details>  <summary>MVP</summary>  

These stats are for the MVP effort to add payment and debt info to My VA.
 
**Note that we launched the My VA redirect in September 2022, which significantly increased all interactions on My VA** 

### Objective: Meet user need/expectation and elevate payment and debt information to user dashboard.
 
 [My VA Domo Dashboard](https://va-gov.domo.com/page/1167851935?userId=1322887837) 

**Key result**: Gather baseline metrics for clicks into payment history and debt information on My VA.
 
|KPI/metric|Baseline: Q1 2022|Post-launch: May - July 2022| Post-launch: Aug - Oct 2022|
|----------|-------------|---------------|-------------------|
|Clicks to view all payments ("[View your payment history](https://www.va.gov/va-payment-history/payments)")| N/A|140,469|391,684|
|Clicks to view all debts ("You have n oustanding debt payments. [Manage your VA debt](https://va.gov/manage-va-debt/your-debt")| N/A|40,313|68,202|
|Clicks to manage direct deposit ("[Manage your direct deposit](https://va.gov/profile/direct-deposit)")|N/A|39,567|81,339|

**Key result**: Reduce search incidents for payment, debt, or direct deposit from the My VA dashboard. These terms should not be in the top 20 search terms for searches generate from My VA. 

[My VA Search Report: Aug – November 2021](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20210801&_u.date01=20211130&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fmy-va~2F/)

|KPI/metric|Baseline: Q1 2022|Post-launch: May - July 2022| Post-launch: Aug - Oct 2022|
|----------|-------------|---------------|-------------------|
|Search rank for "payment” or "payment history" from My VA (whichever comes first)| #1|#3|#13|
|Search rank for "debt” or "debt management" from My VA (whichever comes first)| #5 |#11|#25|
|Search rank for "direct deposit” from My VA (whichever comes first)|#3|#10|#14|

This may also have an impact on [overall searches on VA.gov for logged in users](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p184624291/&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_.useg=user8twPUpCZT8qMEc9RwdXoUg/).

|KPI/metric|Baseline: Q1 2022|Post-launch: May - July 2022| Post-launch: Aug - Oct 2022|
|----------|-------------|---------------|-------------------|
|Search rank for "payment” or "payment history" (whichever comes first)| #5|#15|#20|
|Search rank for "debt” or "debt management" (whichever comes first)| #8|#12|#25|
|Search rank for "direct deposit” (whichever comes first)| #2|#9|#12|

</details>

### V2: Updating payments and debts to address usability issues (May 2022 - October 2022)

<details>  <summary>V2</summary>    

### Objective: Bring greater differentiation and more equal weight to debts and payments (payments over emphasized and debts de-emphasized in V1).
 
**Key result: Increase clicks into "Manage your VA debt" CTA on My VA by 10%.**
 
[My VA Domo Dashboard](https://va-gov.domo.com/page/1167851935?userId=1322887837) 
 
**When filling in data -- updates dates to be 1 month pre-launch, one month post launch to 100%, and the second month post-launch to 100% based on actual launch dates.** 

|KPI/metric|Baseline: October 29 - Nov 28, 2022| One month post-launch to 100%: December 12, 2022 - January 11, 2023| Two months post-launch to 100%: January 12 - February 11, 2023|
|----------|-------------|---------------|-------------------|
|Clicks into "Manage your VA debt" CTA on My VA|25,712|29,627 (~15% increase)|30,309 (~2% increase from month 1)|
 
**Key result: Increase pageviews for the debt tool overall by 10%** 

  - Prior to Dec 17, 2022: [Pageviews for /manage-va-debt/your-debt/](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fmanage-va-debt~2Fyour-debt~2F/)
  - Post Dec 17, 2022, a new url was added for debt summary: [Pageviews for /manage-va-debt/summary/debt-balances/](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20230112&_u.date01=20230113&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fmanage-va-debt~2Fsummary~2Fdebt-balances~2F/)
 

|KPI/metric|Baseline: October 29 - Nov 28, 2022| One month post-launch to 100%: December 12, 2022 - January 11, 2023 (combine reports linked above)| Two months post-launch to 100%: January 12 - February 11, 2023|
|----------|-------------|---------------|-------------------|
|Pageviews of the debt summary page|35,495| 82,036 (~131% increase)|86,943 (~6% increase from month 1) | 

### Objective: Elevate copays to My VA.
 
**Key result: Establish baseline metric for clicks into copay CTA from My VA.**

[My VA Domo Dashboard](https://va-gov.domo.com/page/1167851935?userId=1322887837)  
 
**When filling in data -- updates dates to be 1 month pre-launch, one month post launch to 100%, and the second month post-launch to 100% based on actual launch dates.** 

|KPI/metric|Baseline: October 29 - Nov 28, 2022| One month post-launch to 100%: December 12, 2022 - January 11, 2023| Two months post-launch to 100%: January 12 - February 11, 2023|
|----------|-------------|---------------|-------------------|
|Clicks into copay CTA: "Manage your VA bills"  <br />(Dashboard - Navigation - View link - Manage your VA bills) |N/A|42,629|40,956 (~4% decrease from month 1|

**Key result: Increase pageviews for the copay tool overall by 10%** 
 
- **Note**: Confirm this URL is correct once we have copay users in staging.
 
[Pageviews for /manage-va-debt/summary/copay-balances/](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fmanage-va-debt~2Fsummary~2Fcopay-balances~2F/)
 
|KPI/metric|Baseline: October 29 - Nov 28, 2022|One month post-launch to 100%: December 12, 2022 - January 11, 2023| Two months post-launch to 100%: January 12 - February 11, 2023|
|----------|-------------|---------------|-------------------|
|Pageviews of the copay summary page|10,365|68,463 (~561% increase)|68,949 (~1% increase from month 1)|  
 
</details>

## Projects

### MVP: Adding payments and debts to My VA (October 2021 - May 2022)

<details>  <summary>MVP</summary>  

#### MVP Epic [#43337](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43337)
 
#### Problems

- Users expect to see their payment information on My VA, but currently do not.
- Users have trouble finding this information, with terms like “payment”, “debt”, “travel pay” and “direct deposit” (and variations of those terms) make up half of the top 20 search terms generated from My VA.
- When My VA eventually becomes the authenticated homepage, it needs to accomodate all of the top tasks on VA.gov, of which viewing payment history is one.

#### Desired User Outcomes

*Why would a user want to use this?*

- This additional section will further support My VA dashboard as a "one-stop shop" for information that is a priority to veterans.
- Actionable links will allow the veteran to access more financial details and perform appropriate actions as needed

*With this problem solved, what should users be able to do/achieve that they couldn't before?*

- Veterans will more quickly view and complete tasks related to their payment and debt information.

#### Undesired User Outcomes

- We do not want this section to cause confusion or add to their cognitive load.  It should be informative and usable.
- We do not want the My VA page to become too cluttered or cumbersome, slowing down veterans, instead of expediting their experience.
 
#### Desired Business Outcomes

*Why would your business want this to exist?*

Showing payment and debt information on My VA helps fulfill our north star objective of moving toward My VA being the one-stop shop for action items and benefit status, so that it provides more direct, personalized routes to veterans’ most critical updates and tasks.

*With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Provide veterans with a personalized go-to source for payment and debt information.
- Provide veterans with links to related action items, such as viewing outstanding debts, payment history, or direct deposit.
- Reduce the number of payment or debt-related searches.

#### Undesired Business Outcomes
- We do not want the My VA page to become cumbersome and unusable.

#### Discovery

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
 
#### Launch Planning

##### Collaboration Cycle
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


#### Incident Response info
A security vulnerability is unlikely due to the 2-factor authentication required to access the page and personal information.

- Payments API: /v0/profile/payment_history
     - Previously managed by the eBenefits team before 4/7/2022; Currently unsure who manages this
          - OCTO-DE Lead: Matt Self
- Debts API: /v0/debts
     - Currently managed by the Debt resolution team 
          - PM: Denise Coveyduc
          - OCTO-DE Lead: Matt Self

#### Key deliverables

- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research)
- Design documentation [Mural](https://app.mural.co/t/vsa8243/m/vsa8243/1638500075560/0e849f61e282ebe2d8e7119eea504e4c05b0bbe4?sender=u5ad49c107baa41137f271007), [Figma](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A1&mode=design&t=WghpiwwCzYuhYyHN-1) and [UXPIN Prototype](https://preview.uxpin.com/45251888896c8dd47ef62aa20d3a89a334726ac1#/pages/145483168/simulate/no-panels?mode=i)
- [Research/Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research)
- [Technical documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/payment-history-frontend.md)
- How to access and test
    - [Staging env](https://staging.va.gov/my-va/)
    - [Testing documentation - TestRail](https://dsvavsp.testrail.io/index.php?/suites/view/5&group_by=cases:section_id&group_id=3309&group_order=asc&display_deleted_cases=0)
    - [Payments Information test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info.md)
    - [Payments Information a11y test case documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/Staging%20Review/Accessibility%20testing.md)
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/product/release-plan.md)
- [Production env](https://www.va.gov/my-va/)
 
#### Key Dates

- Nov 2021: Kickoff with MVP outlined & begin design
- Dec 2021: Design work finalized
- Jan 2022: Usability testing kickoff
- Feb 2022: Finalize designs, development
- Mar 2022: Complete QA
- Apr 2022: Complete UAT
- Apr 20, 2022: Launched V1 to 25% of users
- Apr 26, 2022: Launched V1 to 50% of users
- Apr 29, 2022: Design intent for V2 updates
- May 2, 2022: Launched V1 to 100% of users
 
 </details>
 
 
### V2: Updating payments and debts to address usability issues (May 2022 - December 2022)

<details>  <summary>V2</summary>  
 
#### Payment info v2 Epic [#43332](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43337)

#### Problems 
 
- In the V1 of benefit payments and debts, it's hard to differentiate between payment info and debt info.
- At a glance, people confuse payment information with a debt notice because they see the debt alert and assume the gray box (payment info) below it is showing money they owe to the VA. 
- Payment information has a much larger emphasis than debt information, even though debt information is more important for those to whom that scenario applies.
- We are using a notification style for the debt information but a gray box style for payment info. This is confusing, and the two should be styled more consistently. 
 
#### Key Dates
 
- April 2022: Collab cycle kickoff, design iterations, design intent
- May 2022: Design 
- June 2022: Temporary hold; Midpoint review prep
- July 2022: Midpoint review; Research
- Aug 2022: FE documentation; FE build begins
- Sept 2022: Finish FE build; UAT planning
- Oct 2022: QA; Analytics request; Staging review; UAT
- Nov 29, 2022: Launch to 25%
- Dec 5, 2022: Launch to 50%
- Dec 12, 2022: Launch to 100%
 
</details> 

## Feature Overview

Authenticated and verified users will always see the Outstanding Debts and Benefit Payments sections on My VA. 

The **Outstanding Debts** section on My VA gives the user an overview of their outstanding debts if there are any to show and links them to the combined debt portal. Outstanding debts encompasses overpayment debts and copay debts:
- Overpayment debts occur when a user is overpaid for VA benefits. This can happen for a variety of reasons but an example is when a Veteran doesn't update their dependency information and is paid more for their VA benefits than they are entitled to. The Veteran then owes this money back to VA as an overpayment debt.
- A copay debt is an amount that a Veteran must pay for health care services, similar to how copays work with private health insurance. This amount varies depending on a Veteran's health care benefits through VA.

The **Benefit Payments** section on My VA gives the Veteran a summary of their most recent benefit payment and a link to past payments, if there are any to show. Benefit payments occur when a Veteran has already applied and been approved for VA benefits. These are paid out monthly via direct deposit or paper check. 

## How to Access and Test

- [MVP staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info.md)
- [V2 staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md)

## Frontend
 
### Outstanding Debts

- For the debts card we are pulling in debts from `/v0/debts`. We are then checking for approved deduction codes and filtering out debts with a zero balance. This is all based on the debt team's APIs so our values match theirs.
- For the copays card we are pulling in copays from `/v0/medical_copays`. We are then sorting the statements by date and getting the latest one by facility name because we were informed only the latest statement by facility is valid. We then filter out zero balances. A lot of the code here is pulled from the debt team.

### Benefit Payments

- The payments card is pulled from `/profile/payment_history`. We grab the last payment within the last 60 days. If there is no payment we show `You have no recent payments to show.`

## Backend

- Payment information comes from the [Benefit Gateway Service (BGS)](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html).
- Debt information comes from the Debt Management Center (DMC).

[This document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/communication.md) reviews the communication workflow for the MyVA page explains improvements that were made to reduce payment history requests that result in 403 errors.

## Design and UX

### Use cases

- WIP
   
### Screenshots

<details>
 <summary><b>My VA prior to adding a payments section v1</b></summary>

![My VA 2.0 All Sections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

</details> 

<details>
  <summary><b>My VA after adding a payments section v1</b></summary>

![My VA with benefits payments and debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/My%20VA_April%202022.jpeg)

</details>  

<details>
  <summary><b>My VA after V2 updates to the payments section</b></summary>

<img width="1060" alt="Screen Shot 2022-12-12 at 14 25 32" src="https://user-images.githubusercontent.com/97113607/207136017-a567dd73-cb1d-4023-877f-074085bef375.png">

 
 </details>  
 

