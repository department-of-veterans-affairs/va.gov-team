# Project outline: Add payment/financial info to the My VA dashboard

Last updated December 10, 2021

### Communications

- **GitHub Label**: vsa-authenticated-exp; profile
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Heather Justice|Product Manager| heather.justice@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
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
>Throughout [My VA 2.0 research and discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research) in 2020 - 2021, the recurring theme mentioned by veterans is that seeing payment info on their My VA dashboard is a high priority.  The importance of payment information is also reflected in analytics, as viewing payments is a top interaction on VA.gov overall and is a top search term from the My VA dashboard. 
>- People have mentioned that seeing payment info on their My VA dashboard is a high priority since our [initial dashboard discovery in 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#for-those-interested-in-education-benefits-gi-bill-balance-and-payment-information-was-most-important)
>- Again in later research sessions, including during [December 2020 exploration research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md#additional-insights)
>- [March 2021 usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research%20V2/MyVA2-research-findings.md#features-users-expected-to-see-that-were-missing)
>- [July 2021 notifications discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#for-those-interested-in-education-benefits-gi-bill-balance-and-payment-information-was-most-important)
>- The importance of payment information also bears out in analytics. Viewing payments is [a top interaction on VA.gov overall](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20201122&_u.date01=20211121&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.eventCategory:Interactions/)
>- "Payments" is  [a top search from the My VA dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/product/post-2.0-redesign-analytics.md#searches)
> 
>This effort aims to add payment information to the My VA dashboard to be elevated for logged-in veteran's awareness and attention, as the MVP.


**Related/Associated product(s)**
- [My VA 2.0 Product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va)

## Problem
> *The pain point to resolve is that veterans expect to have their personalized financial information available on the My VA dashboard, without having to search VA.gov for it.* 
- *What is the problem and who is affected?*
     * Logged-in veterans have to perform a search or access the homepage to find links to their compensation and/or debt information
- *And, what evidence do we have of the problem?* 
     * The terms “payment”, “debt”, “travel pay” and “direct deposit” (and variations of those terms) make up half of the top 20 search terms generated from My VA 
     * The same terms make up 4 of the top 20 search terms on VA.gov overall
- *Why do you think the problem is occurring?*
     * Once veterans log in to My VA, there is no quick, intuitive way to easily view their payments, debts and perform financial actions 
- *Other reasons why this might be occurring?* 
     * Veterans may have difficulty finding the appropriate links to access their financial information
- *How does this initiative help further OCTO-DE's mission and goals?*
    * Increase the usage of My VA to become a one-stop shop for users’ benefit-related action items and status
    * Become a place where users can complete quick tasks related to their benefits

## User Outcomes

### Desired User Outcomes
- *Why would a user want to use this?*
    * This additional section will further support My VA dashboard as a "one-stop shop" for information that is a priority to veterans
    * Actionable links will allow the veteran to access more financial details and perform appropriate actions as needed
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*
    * With this problem solved, Veterans will more quickly view their payment and debt information, instead of having to perform searches on the site
    * With this problem solved, Veterans will more easily be able to access payment history or view outstanding debts, which may result in quicker task completion
    * With this problem solved, Veterans may be able to more fully engage with the VA

### Undesired User Outcomes
- We do not want this section to cause confusion or add to their cognitive load.  It should be informative and usable
- We do not want the My VA page to become too cluttered or cumbersome, slowing down veterans, instead of expediting their experience
 
## Business Outcomes

### Desired Business Outcomes

- *Why would your business want this to exist?*
    * The addition of a payment information section should help fulfill our north star objective of moving toward My VA being the one-stop shop for action items and benefit status, so that it provides more direct, personalized routes to veterans’ most critical updates and tasks

- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
    * Provide veterans with a personalized go-to source for payment and debt information
    * Provide veterans with links to related action items, such as viewing outstanding debts, payment history, or direct deposit
    * Reduce the number of payment or debt related searches


### Undesired Business Outcomes
- We do not want the My VA page to become cumbersome and unusable
- We do not want the payment information section to display irrelevant or incorrect information


---
## Measuring Success
- NOT YET FINALIZED

### Looking ahead to Q1 2022 - These OKR/KPIs are potential suggestions only

- **Objective: Add a Payments Information section, so that the veteran has access to view and take action on payments and/or debts**

- **Key result #1**: Interaction: Increase overall clicks into payment history, debt information, and direct deposit CTAs.

|KPI/metric|Baseline: Aug-Nov 2021|Post-launch: Qx 2022| Post-launch: Qx 2022|
|----------|-------------|---------------|-------------------|
|Clicks to view all payments ("View all payments"))| 2.3mil|TBD|TBD|
|Clicks to view all debts ("You have n oustanding debt payments")| 179k|TBD|TBD|
|Clicks to view direct deposit settings ("Manage direct deposit")| 464k|TBD|TBD|



- **Key result #2**: Findability: Reduce search incidents for payment, debt, or direct deposit.  These terms should not be in the top 20 search terms for searches generate from My VA. 
- *SUGGESTION: Consider a metric that is optimized by this change, rather than not.  Look for something that has no ceiling, rather than this that has a definite floor (zero).*

[My VA Search Report: Aug – November 2021](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20210801&_u.date01=20211130&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fmy-va~2F/)

|KPI/metric|Baseline: Aug-Nov 2021|Post-launch: Qx 2022| Post-launch: Qx 2022|
|----------|-------------|---------------|-------------------|
|Search rank for "payment” or "payment history" from My VA| #1, #10, #11|TBD|TBD|
|Search rank for "debt” or "debt management" from My VA| #3, #20|TBD|TBD|
|Search rank for "direct deposit” from My VA| #2, #6|TBD|TBD|

This may also have an impact on [overall searches on VA.gov for logged in users](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p184624291/&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_.useg=user8twPUpCZT8qMEc9RwdXoUg/).

|KPI/metric|Baseline: Aug-Nov 2021|Post-launch: Qx 2022| Post-launch: Qx 2022|
|----------|-------------|---------------|-------------------|
|Search rank for "payment” or "payment history" from My VA| #6|TBD|TBD|
|Search rank for "debt” or "debt management" from My VA| #23|TBD|TBD|
|Search rank for "direct deposit” from My VA| #7, #17|TBD|TBD|

- **Key result #3**: Usage: Increase % of logged-in users visiting My VA from 8% in Q4 to n% post-launch by end of Q1.

[My VA Usage Report for Logged-in Users: Aug – Nov 2021](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p176188361/_u.date00=20210801&_u.date01=20211130&_.useg=builtin1,uservhdeJJNEQr6TNXxgFLMPGQ/)

|KPI/metric|Baseline: Aug - Nov 2021|Post-launch: Qx 2022| Post-launch: Qx 2022|
|----------|-------------|---------------|-------------------|
|% of logged-in users who visit My VA| 7%|TBD%|TBD|
|% of logged-in users interact with the Payments Information| 0% (new)|TBD%|TBD|


---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks.*

- **Value Risks** (will people use it): 
  - Risk: Accuracy of the financial information displayed.  If incorrect information is displayed, it can damage the trust between the veteran and VA.gov. 
    - This can be mitigated by connecting directly to the payment/debt backend DBs to pull the correct data
- **Usability Risks** (can people figure out how to use it):
  - Risk: Potential confusion on where the links may direct the veteran
  - Risk: Potential confusion or degrading user experience when links direct to a page outside of My VA
    - This section will function the same as other sections already existing on My VA for a consistent experience.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Risk: Dependency on payment and debt database availability
    - Payment and debt information is currently available within VA.gov, and can easily be accessed by My VA for display 
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - A constraint to consider is to complete full testing of the new section, with a phased production release while measuring against OKR/KPIs. Only successful results will trigger the next roll-out phase.

### Prioritization
> *Describe how the team will consider competing solution hypotheses/ideas. Prioritize them accounting for reach, impact/value, effort, and confidence.*
  - There is a question on whether we should display specific details on the last payment amount made to the veteran OR specific details on the outstanding debt.  
    - We will be conducting usability testing to determine the most effective and useful information to display to veterans.
  - Our research shows that direct deposit management and travel reimbursement are other top financial related searches, and we intend to include a link to manage each of them.  

### Solution Summary
> *What's in scope for you to build with this initiative? Describe key features/flows. What have you explicitly decided to **not** include and why?*


**In Scope - MVP**
Please see the [Payment/Financial Discovery Synthesis and MVP doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-discovery-synthesis.md) for detailed documentation on the MVP requirements.

  - Most recent payment (30-31 days out (actual number TO BE CONFIRMED), anything older will result in the payment section not showing on My VA. 
  - Dynamic debt link ('You've got 2 outstanding debt payments)
  - Manage Direct deposit [link]
  - View all payments [link]


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

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
  - No marketing or communications are needed.

## Key deliverables

- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research)
- [Design documentation](https://app.mural.co/t/vsa8243/m/vsa8243/1638500075560/0e849f61e282ebe2d8e7119eea504e4c05b0bbe4?sender=u5ad49c107baa41137f271007) 
- [Research/Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research)
- Technical documentation
- How to access and test
    - [Staging env](https://staging.va.gov/my-va/)
    - Testing documentation
    - Payments Information test/use cases & users
    - Payments Information a11y test case documentation
- Release plan
- [Production env](https://www.va.gov/my-va/)


### Key Dates
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

- Nov 2021: Kickoff with MVP outlined & begin design
- Dec 2021: Design work finalized


#### Initiative Launch Dates
- *Target Launch Date*
  - TBD- Q1
- *Actual Launch Date* 
  - TBD

---
   
## Screenshots

### Before

*My VA 2.0 prior to adding a payments section*

![My VA 2.0 All Sections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Authenticated Experience
- GitHub Label(s): my-va-dashboard
- Slack channel: vsa-authd-exp
- Product POCs: Samara Strauss (PO), Heather Justice (PM)

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
