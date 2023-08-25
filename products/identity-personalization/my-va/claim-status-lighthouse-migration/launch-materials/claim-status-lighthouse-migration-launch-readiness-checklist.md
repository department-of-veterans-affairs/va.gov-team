# My VA Claims and Appeals Section: EVSS > Lighthouse Migration: Launch Readiness Checklist

### Launch Go / No Go | 08/07/2023

## Decision: Ready to go! 

---

**Tom and Derrick**: Is monitoring and alerting configured and working as expected?
- Answer: Yes - [GA dashboard](https://analytics.google.com/analytics/web/?authuser=3#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/), error alerts logged in sentry and datadog 

**Tom and Derrick**: are you ready to monitor performance data for latency, errors, etc?
- Answer:  Yes, see above

**Derrick**: are there any Sev1 bugs or accessibility issues outstanding?
- Answer: No

**Derrick**: are you ready to turn the feature on to 10% of users?
- Answer: Yes 

**Samara & AJ**: is the PSIR Review complete?
- Answer: Yes, approved 8/1 ([#1061](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/1061))

**Samara & AJ**: is the Google Analytics/Domo updated to track this product data and are they working as expected?
- Answer: Yes, [dashboard](https://analytics.google.com/analytics/web/?authuser=3#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/) configured. Confirm with Analytics team if anything needs to be updated to make sure new info flows through to domo.

**Samara & AJ**: are you ready to monitor analytics data for trends and problems?
- Answer: Yes, we have the dashboard

**Samara & AJ**: is the [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/claim-status-lighthouse-migration/launch-materials/claim-status-lighthouse-migration-release-plan.md) complete and ready to execute against?
- Answer: Yes

**Everyone**: does anyone have any concerns or reasons we should postpone launch to 10% of users?
- Answer: No - good to go!

