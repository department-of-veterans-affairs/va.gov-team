# Self-Identifying Gender Identity - Accessibility Staging Review Prep

#### Resources
- [How to prepare for an accessibility staging review](https://depo-platform-documentation.scrollhelp.site/developer-docs/prepare-for-an-accessibility-staging-review)
- [Staging review guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)

- Any findings will be documented in this [QA folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Self%20Identifying%20Gender%20Identity%20(SIGI)/QA), and additional GH tickets will be created

## Required Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
|Scan with axe browser plugin in daily development (required) | [read more about the axe browser plugin](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-daily-development)| Yes  | No findings | Lisa Zapson |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-end-to-end-tests)| Yes  | No findings | Lisa Zapson |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#color-tests)| Yes, color tested with ColorBlindly, and WCAG Color Contrast Checker  | No Findings on the form page| Heather Justice |
| Content zoomed to 200% | [read more about zoomed layouts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#content-resize-check)| Yes  | No findings | Heather Justice |
| Content zoomed to 300% | [read more about zoomed layouts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#content-resize-check)| Yes  | No findings | Heather Justice |
| Content zoomed to 400% | [read more about zoomed layouts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#content-resize-check)| Yes  | No findings | Heather Justice |
| Keyboard navigation | [read more about navigating with the keyboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#keyboard-navigation-check)| Yes  | No findings | Heather Justice |


## Recommended Accessibility Tests

| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
| Test with WAVE (recommended) | [read more about the WebAIM WAVE tool](https://wave.webaim.org/)| Yes  | No findings on the form | Heather Justice |
| Screen reader tests (NVDA + Firefox) | [read more about getting started with screen readers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#screen-reader-tests).| Yes  | No findings | Heather Justice |
| Screen reader tests (VoiceOver + Safari) | [read more about getting started with screen readers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#screen-reader-tests).| Yes  | No Findings | Matt Long |
