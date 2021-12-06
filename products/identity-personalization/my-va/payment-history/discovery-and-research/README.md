# Project outline: Add payment/financial info to the My VA dashboard

Last updated November 22, 2021

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
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Key deliverables](#key-deliverables)
- [Key dates](#key-dates)
- [Screenshots](#screenshots)

## Overview

People have mentioned that seeing payment info on their My VA dashboard is a high priority since our [initial dashboard discovery in 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#for-those-interested-in-education-benefits-gi-bill-balance-and-payment-information-was-most-important), and again in later research sessions, including during [December 2020 exploration research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md#additional-insights), [March 2021 usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research%20V2/MyVA2-research-findings.md#features-users-expected-to-see-that-were-missing), and [July 2021 notifications discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#for-those-interested-in-education-benefits-gi-bill-balance-and-payment-information-was-most-important). The importance of payment information also bears out in analytics. Viewing payments is [a top interaction on VA.gov overall](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20201122&_u.date01=20211121&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.eventCategory:Interactions/), and "Payments" is  [a top search from the My VA dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/product/post-2.0-redesign-analytics.md#searches). This effort aims to add payment information to the My VA dashboard and to determine if any other financial information should be elevated as part of the MVP.


### User Goals
- As a person who receives compensation from the VA or owes a debt to the VA, I want to see all my financial information in one place.
- As a veteran, I want to see information and tasks that are personally relevant to my benefits when I log in to VA.gov


### Business Goals
- Provide veterans with compensation and debt information, specific to them.
- Provide veterans with links to related action items, such as viewing debts, payment history, direct deposit or travel reimbursement
- Reduce the number of payment or debt related searches


## Assumptions
- Veterans expect that financial information should be available on their My VA dashboard
- It will provide quick access to payment and debt information, without having to perform a search

## Questions
- What do veterans want to see highlighted on the dashboard?
- What kind of actions to veterans want to take on their financial information?

## Value Propositions
- This additional section will further support My VA dashboard as a "one-stop shop" for information that is a priority to veterans
- Actionable links will allow the veteran to access more financial details and perform appropriate actions as needed

## Measuring success

These are OKRs and KPIs for the initial MVP launch of the My VA Enhancements - Payment Information feature:

As a future initiative identified during the My VA redesign, we are continuously moving My VA towards the one-stop shop for elevating action items by adding a new Payment Information section, so that veterans can quickly and easily view financial information and take desired actions. 

OKRs and KPIs TBD

**Objective: Add a Payments Information section, so that the veteran has access to view and take action on payments and/or debts**

- **Key result #1**: Interaction: Increase overall clicks into payment history, debt information, travel reimbursement, direct deposit



- **Key result #2**: Findability: Reduce search incidents for payment, debt or travel reimbursement.  These terms should not be in the top 20 search terms for searches generate from My VA.



- **Key result #3**: (potential OKR, not yet vetted with debt team) Increase the number of debt payments made by veterans, using the debt information link in My VA 



- **Key result #4**: 



# Implementation Info

## MVP approach
Please see the [Payment/Financial Discovery Synthesis and MVP doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-discovery-synthesis.md) for detailed documentation on the MVP requirements.
- Most recent payment
- Manage Direct deposit [link]
- View Payment History [link]
- Request travel reimbursement [https://www.va.gov/health-care/get-reimbursed-for-travel-pay/]
- Dynamic debt link ('You've got 2 outstanding debt payments)

## Key deliverables

- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research)
- [Design documentation](https://app.mural.co/t/vsa8243/m/vsa8243/1638553268085/b0514c6d027e35eb98f636fa3c614872dd14b8a2?sender=u5ad49c107baa41137f271007) 
- Technical documentation
- How to access and test
- Release plan

## Key dates

- Nov 2021: Kickoff

## Screenshots

### Before

*My VA 2.0 prior to adding a payments section*

![My VA 2.0 All Sections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### After
