# Profile 2.0 Go/No Go
## September 16, 2020
## Decision: Proceeding with Launch

---

#### Platform: Is monitoring and alerting configured and working as expected via the Privacy and Security Review?
- [X] Yes
- [ ] No
- Comments:

#### Platform: Is the Product Health Tool updated to track this product data and working as expected?
- [X] Yes
- [ ] No
- Comments: Analytics team confirmed this was ready.

#### Are we ready to monitor analytics data for trends and problems?
- [X] Yes
- [ ] No
- Comments: GA dashboard and Domo dashboards to be completed/finalized by this afternoon.
[Domo dashboard](https://va-gov.domo.com/page/492918243)
[GA dashboard] To be added today

#### Backend: Are we confident we can handle the traffic?
- [X] Yes
- [ ] No
- Comments:

#### PM: Is the release plan complete and ready to execute against?
- [X] Yes
- [ ] No
- Comments: [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Release%20Plan.md)

#### PM: Did we see KPI metrics populating from UAT?
- [X] Yes
- [ ] No
- Comments: 

#### FE/BE: Are there any launch-blocking bugs or accessibility issues outstanding?
- [ ] Yes
- [X] No
- Comments:

#### PM: Is the call center ready to handle potential calls that may come in?
- [X] Yes
- [ ] No
- Comments:

#### PM: Are all re-directs in?
- [X] Yes
- [ ] No
- Comments:

#### PM: Is flipper working properly?
- [X] Yes
- [ ] No
- Comments: The URL that was causing problems is "/account"  --> should redirect to the new account setting section of the profile, and it does, but only after logging the user out and then requiring them to sign back in before redirecting. Samara creating a bug ticket for this. It is not a launch blocker.

### Next Steps:
When are we launching?
- [X] Today (launched 9.16.20 at 3pm EST)
- [ ] Tomorrow morning 
- Comments: 

- [Profile 2.0 OKR dashboard - DOMO](https://va-gov.domo.com/page/492918243)
- [Address Validation Dashboard](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/) [Production]
- [Direct Deposit Dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/) [Production]
- [Contact Information Dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/) [Production]
- [Connected Apps](https://analytics.google.com/analytics/web/#/dashboard/-7uuXRP8QJOLgqwi7s5OOg/a50123418w177519031p176188361/)[Production]
- [Account Security](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/AuydfL6WR7WS_nXqNhC5GA/a50123418w177519031p176188361/_u.date00=20200916&_u.date01=20200916/) [Production]

Note: The dashboards that are in both staging and production only have data in staging, but will start to have data in production when Profile 2.0 is live. 
