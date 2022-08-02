# Benefit payments and debts Release Plan


## Phase I: UAT

### Planning:
- **UAT Go/No go:** Week of 4/4
- Link to [readiness checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/uat/UAT%20Go-No%20Go.md)
- **Desired date range or test duration:**
     - Week of 4/12 - 4/15
- **Desired number of users:** 
     - Recruiting 12 participants with a target of completeing 6 sessions
- **How you'll recruit the right production test users:** 
     - We will recruit users via Perigean.
- **How you'll conduct the testing:** 
     - We will conduct UAT over Zoom to ensure the different features work correctly.
- **How you'll give the test users access to the product in production w/o making it live on VA.gov:** 
     - The feature will be behind a feature flag.
- **Link to Research plan for UAT**: 
   - [Research Plan for Benefit payments and debts UAT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/uat/uat-research-plan.md)
   - [Conversation Guide: Benefit payments and debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/uat/uat-conversation-guide.md)

### Results:
- **Number of users:**
     - 12 scheduled, 8 completed (5 were no-shows or couldn't complete the exercise due to technical difficulties logging in)
- **Number of bugs identified / fixed:**
     - 0
- **Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?** 
     - No

## Phase II: Staged Rollout

### Planning
**Launch Go/No go:** completed 4/19
     - [Readiness checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/Release%20Plan/Benefit%20payments%20and%20debts%20-%20Launch%20Go-No%20Go.md)

**Desired date range:** 04/18/2022 - 05/06/2022
- **How will you make the product available in production while limiting the number of users who can find/access it:** 
     - The feature will be behind a feature flag.
- **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:** 
     - [Payment Information - Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history#measuring-success)
     - Link clickthroughs are successfully directing users to the intended page with no errors originating from My VA
     - Zero load failures for those users with a payment history
- Links to dashboard(s) showing "success criteria" metrics: 
  - [GA My VA dashboard link](https://analytics.google.com/analytics/web/#/dashboard/XOEdSZeVT9qyxQU5T29PNw/a50123418w177519031p176188361/)
  - [Top events: My VA page](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fmy-va~2F,analytics.eventCategory:Interactions/)

**Phased rollout:** 
- 25% of users (1 week), Dates: week of 04/18 ([Ticket #38382)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38382)
- 50% of users (1 week), Dates: week of 04/25 ([Ticket #38386)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38386)
- If all goes well, then go to 100% of users: week of 05/02 ([Ticket #38388)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38388)

## Go Live!

### Planning:
- **Desired date:** _4/20/22_
- **Actual date:** 4/20/22

**Key result 1**: Increase overall clicks into payment history and debt information by 10%.

|KPI/metric|Baseline: Jan-Mar 2022|Post-launch: Week 1 (at 100%)| Post-launch: Month 1 (at 100%)|
|----------|-------------|---------------|-------------------|
|Clicks to view all payments (["View your payment history"](https://www.va.gov/va-payment-history/payments) | 1.9 mil (visits to the url)|118k URL visits, TBD URL visits orig from My VA|513k URL visits, TBD URL visits orig from My VA|
|Clicks to view all debts (You have n oustanding debt payments. [Manage your VA debt](https://www.va.gov/manage-va-debt/your-debt))| 170k|22k|80k|
|Clicks to manage direct deposit ([Manage your direct deposit](https://www.va.gov/profile/direct-deposit)) | 476k|33k|118k|
|Clicks to request travel reimbursement ([Request travel reimbursement](https://www.va.gov/health-care/get-reimbursed-for-travel-pay/))| 404k|29k|115k|

**Key result 2**: Reduce search incidents for payment, debt, or direct deposit from the My VA dashboard. These terms should not be in the top 20 search terms for searches generate from My VA. 

[My VA Search Report: Aug – November 2021](https://analytics.google.com/analytics/web/#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20220101&_u.date01=20220331&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fmy-va~2F/)

|KPI/metric|Baseline: Jan-Mar 2022|Post-launch: Week 1 (at 100%)| Post-launch: Month 1 (at 100%)|
|----------|-------------|---------------|-------------------|
|Search rank for "payment(s)” or "payment history" from My VA| payment #10, payments #9, payment history #1| payment #52 , payments #34, payment history #5 |payment #39, payments #36, payment history #4 |
|Search rank for "debt” or "debt management" from My VA| debt #5, debt management #21| debt #12, debt management #36| debt #11, debt management #48 |
|Search rank for "direct deposit” (or "change direct deposit) from My VA| direct deposit #2, change direct deposit #26 | direct deposit #6, change direct deposit #88 |direct deposit #9, change direct deposit #65|

This may also have an impact on [overall searches on VA.gov for logged in users](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p184624291/&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_.useg=user8twPUpCZT8qMEc9RwdXoUg/).

|KPI/metric|Baseline: Jan-Mar 2021|Post-launch: Week 1| Post-launch: Month 1|
|----------|-------------|---------------|-------------------|
|Search rank for "payment” or "payment history"| #9|TBD|TBD|
|Search rank for "debt” or "debt management"| #17|TBD|TBD|
|Search rank for "direct deposit”| #11, #19|TBD|TBD|
 
### 1-week results:
- **Number of unique users:**
     - ...
- **Any issues with VA handling/processing?**
     - ...
- **Types of errors logged:**
     - ...
- **Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?** 
     - ...
- **If yes, what:** 
     - ...

### 1-month results:
- **Number of unique users:**
     - ...
- **Any issues with VA handling/processing?**
     - ...
- **Types of errors logged:**
     - ...
- **Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?**
     - ...
- **If yes, what:** 
     - ...

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?

