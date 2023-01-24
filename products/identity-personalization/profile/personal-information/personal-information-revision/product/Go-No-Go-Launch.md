# Personal Information Revision: Go/No-Go Launch | 06/15/22

## Decision: Go!! 

--- 

**Samara: Is the [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/product/release-plan.md) complete and ready to execute against?**
- Answer: Yes

**Christina: Have we completed UAT without finding launch blockers?**
- Answer: Yes

**Adam: Are all launch-blocking accessibility / issues fixed?** 
- Answer:  Yes

**All: Have you all reviewed the feature in staging and/or production and confirmed that it works as expected?**
- Answer: Yes

**Adam: Are you prepared to set the feature flag, or revoke the feature flag if any serious issues arise?** (Reminder to turn on feature toggle in both the FE and BE)
- Answer: Yes -- we are going to set the BE to 100% but only 25% for the FE. This way, the frontend gets the data if it needs it, but we are still gating the feature to 25% of users.

**Samara/Sharon: Are analytics being properly recorded and showing in the GA widget(s)?**
- Answer: Yes

**Everyone: Does anyone have any concerns about us launching this feature to 25% of users after this meeting?**
- Answer: No


