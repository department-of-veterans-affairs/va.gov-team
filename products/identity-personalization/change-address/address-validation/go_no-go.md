# Address validation: Go/No-go 
## 3.17.20

## Decision: Continue launch

---

### Joanne: is the Google Analytics Dashboard updated to track this product data and working as expected?

**OK to proceed?**: Yes

- Working as expected!


### Samara: are you ready to monitor analytics data for trends and problems?

**OK to proceed?**: Yes

- Analytics are set up. We have link to the board (!!). Waiting to hear back if we can see total successes/failures from this board as well (we track that elsewhere, so this shouldn't be a blocker).
- Should get Foresee set up as well. A Foresee survey could potentially be assessing information in the profile outside of address validation, so Samara and Joanne will sync about that after this meeting.
- **Are KPIs documented?** Yes — in the product outline.


### Lihan: are you ready to monitor performance data for latency, errors, etc?

**OK to proceed?**: Yes

- In Sentry, it will show errors and latency timeouts, so we're ready to monitor there.

### Lihan: are you confident we can handle the traffic?

**OK to proceed?**: Yes

- According to load test, the traffic level should be fine.

### Samara: is the release plan complete and ready to execute against?

**OK to proceed?**: Yes

- https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/release-plan.md
- Samara and Erik can test when we launch.
- Samara to ask in Slack for additional volunteers with LOA3 accounts that wouldn't mind helping us take ~5 minutes to test the feature after launch.

### Samara: did you see KPI metrics populating from UAT?

**OK to proceed?**: N/A

- Per our [approved release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/release-plan.md), we did not do UAT. For launch, we will be launching this feature behind a feature flag and then confirming everything works ourselves. Only when we're sure everything is working as expected will we lift the flag and release the feature to 25% of users. 

### Brad/Erik/Lihan: are there any Sev1 bugs or accessibility issues outstanding?

**OK to proceed?**: Yes

- Lihan — No
- Erik/Brad — No. The outstanding accessibility bug is not a blocker and has been determined to not be specific to this work.

### Chante: is call center ready to handle potential calls that may come in about address validation?

**OK to proceed?**: Yes

- Via Slack: "Call centers are good to go!"

### VA Profile: Amy/Mike — is there anything on the VA Profile end that would prevent us from launching tomorrow? Or do you have any questions you'd like us to answer before you feel comfortable with us proceeding?


**OK to proceed?**: Yes

- Amy: No objections
- Mike: No concerns
- Rebecca: Comfortable with this
- Our team will be the first team using this feature in production!

### Other concerns/discussion/questions

- No other additional comments
