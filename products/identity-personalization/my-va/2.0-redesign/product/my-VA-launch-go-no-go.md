# My VA 2.0 redesign: Go / No Go | 6.29.21

## Decision: ________

---

**Lihan**: Is monitoring and alerting configured and working as expected?
- Answer:

**Lihan**: are you ready to monitor performance data for latency, errors, etc?
- Answer:

**Lihan**: are you confident we can handle the traffic?
- Answer:

**Erik, Taylor and Lihan**: are there any Sev1 bugs or accessibility issues outstanding?
- Answer:

**Erik and Taylor**: is the content page set-up to handle our phased launch?
- Answer:

**Erik and Taylor**: are you ready to flip on My VA 2.0 to 25% of users?
- Answer: 

**Kevin/AJ**: is the Product Health Tool updated to track this product data and working as expected?
- Answer:

**Kevin/AJ**: did you see KPI metrics populating from UAT?
- Answer: We had trouble during UAT distinguishing between traffic on My VA 1.0 and traffic on My VA 2.0. We have since updated our tracking to pass events to GA that distinguish between My VA 1.0 and My VA 2.0 ([#26649](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26649)). We also have an additional GA implementation request in to track how often the claims and appeals API fails to retrieve data as this failed several times in UAT ([#26703](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26703)). Based on the SLO report for the API however, it seems that performance is generally a bit slow. Regardless, we want to monitor failure rate going forward to determine if there are ways to remediate this on our end in the UI.

**Kevin/AJ**: is call center ready to handle potential calls that may come in about My VA?
- Answer:

**Kevin/AJ**: are you ready to monitor analytics data for trends and problems?
- Answer:

**Kevin/AJ**: is the [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Release-Plan.md) complete and ready to execute against?
- Answer:

**Everyone**: does anyone have any concerns or reasons we should postpone a launch to 25% of users?
- Answer: 
