# My VA - Accessibility Staging Review Prep

For additional reference see [Accessibility staging review prepartion documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md).

## Foundational Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
|Axe scans in daily development | [read more about the axe browser plugin](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-daily-development)| Yes |Mostly good. Found [two](https://github.com/department-of-veterans-affairs/va.gov-team/issues/24905) [issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues/24906) | Erik Hansen |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-end-to-end-tests)| Yes | Done. We have many aXe scans in Cypress tests | Erik Hansen |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#color-tests)|Yes|Passed|Tressa Furner|
| Content zoomed to 200%, 300%, 400% | [read more about zoomed layouts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#content-resize-check)|Yes, Firefox, chrome, safari  | Passed - [known error](https://github.com/department-of-veterans-affairs/va.gov-team/issues/24647)  | Tressa Furner|
| Keyboard navigation | [read more about navigating with the keyboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#keyboard-navigation-check)|Yes  |Pass - [Small update](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/24714)  |Tressa Furner|

## Advanced Accessibility Tests

| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
| Screen reader tests (VoiceOver + Safari or NVDA + Firefox) | [read more about getting started with screen readers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#screen-reader-tests). _Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). DEPO Platform acknowledges this testing is aspirational._|  |  |
Axe-coconut scans in daily development | [read more about the axe-coconut experimental plugin](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)| Yes | Same as standard Axe scans | Erik Hansen |
WAVE tool spot checks | [read more about the WebAIM WAVE tool](https://wave.webaim.org/)|  |  |
