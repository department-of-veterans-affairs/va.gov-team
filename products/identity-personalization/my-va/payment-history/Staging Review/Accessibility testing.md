# Payment Information - Accessibility Staging Review Prep

#### Resources
- [How to prepare for an accessibility staging review](https://depo-platform-documentation.scrollhelp.site/developer-docs/How-to-prepare-for-an-accessibility-staging-review.1909293137.html)
- [Staging review guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Staging-review.1810137181.html)
- [Notification Preferences accessibility testing document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/staging-review/accessibility-test-prep.md)

## Required Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
|Scan with axe browser plugin (required) | [read more about the axe browser plugin](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-daily-development)| YES  | No Findings | Taylor Mitchell |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-end-to-end-tests)| YES  | No Findings | Taylor Mitchell |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#color-tests)| YES | No Findings!  | Heather Justice|
| Content zoomed to 200%, 300%, 400% | [read more about zoomed layouts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#content-resize-check)| YES | No Findings!  | Heather Justice|
| Keyboard navigation | [read more about navigating with the keyboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#keyboard-navigation-check)| YES | No Findings!  | Heather Justice|


## Recommended Accessibility Tests

| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
| Test with WAVE (recommended) | [read more about the WebAIM WAVE tool](https://wave.webaim.org/)| YES | no Issues! | Heather Justice|
| Screen reader tests (VoiceOver + Safari or NVDA + Firefox) | [read more about getting started with screen readers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#screen-reader-tests).| NO | Issues with screenreader |...|
