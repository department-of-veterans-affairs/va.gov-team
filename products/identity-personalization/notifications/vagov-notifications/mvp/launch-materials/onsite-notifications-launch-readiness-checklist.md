# On-site Notifications (MVP): Launch Go / No Go | 09.23.2022

## Decision: ~Pending analytics, will postpone launch until analytics issues are resolved.~ 

**Decision Update (10/12):** Analytics issues are resolved and we are ready to proceed with our phased launch!

---

**Tom: Is monitoring and alerting configured and working as expected?**
- Answer: Yes

**Tom: are you ready to monitor performance data for latency, errors, etc?**
- Answer: Yes

**Tom: are you confident that the feature we can handle the traffic?**
- Answer: Yes

**AJ and Erica: is UAT complete?**
- Answer: Yes

**Taylor and Tom: are there any Sev1 bugs or accessibility issues outstanding?**
- Answer: No

**Taylor: are you ready to turn the feature on for 25% of users?**
- Answer: Yes

**Samara/AJ: is Google Analytics updated to track this product data and are they working as expected?**
- Answer: ~No, we have been able to confirm that the majority of the KPIs are tracking properly in GA but one metric is showing elevated numbers so we will postpone launch until we can understand why the numbers look off. This is for clicks into "Manage my VA Debt" from the notification.~
- **Update (10/12)** - we were able to resolve our GA issues with the help of the Analytics team and we're now able to track successful GETs with and without notifications, dismissals and clicks on the "Manage your VA debt" link from the notification.

**Samara/AJ: did you see KPI metrics and other usability metrics populating from UAT?**
- Answer: Same as above

**Samara/AJ: is call center ready to handle potential calls that may come in about the feature (i.e. have we submitted our updated product guide)?**
- Answer: Yes

**Samara/AJ: are you ready to monitor analytics data for trends and problems?**
- Answer: ~Sort of. Same as above, we need to better understand why some numbers look inflated in GA>.~
- **Update (10/12):** Yes, all three major data points we wanted to track are tracking in our [GA dashboard](https://analytics.google.com/analytics/web/#/dashboard/MALmun-7S7WXBNKxUrQ39g/a50123418w177519031p184624291/_u.date00=20220912&_u.date01=20221012/)

**Samara/AJ: is the [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/mvp/launch-materials/onsite-notifications-release-plan.md) complete and ready to execute against?**
- Answer: Yes

**Everyone: does anyone have any concerns or reasons we should postpone a launch of the feature to 25% of users?**
- Answer: ~Analytics are not solid yet, we will not launch until they are resolved.~
- **Update (10/12):** Nope - ready to go!
