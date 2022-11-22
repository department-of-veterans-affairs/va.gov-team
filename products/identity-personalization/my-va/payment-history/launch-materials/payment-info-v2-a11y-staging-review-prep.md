# Oustanding Debts and Benefit Payments on My VA - Accessibility Staging Review Prep
Note: this feature is often referred to as "payment info v2" or "payment history v2"

For additional reference see [Accessibility staging review prepartion documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/prepare-for-an-accessibility-staging-review).

## Foundational Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
|Axe scans in daily development | [read more about the axe browser plugin](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-daily-development](https://depo-platform-documentation.scrollhelp.site/developer-docs/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Axescansindailydevelopment))| Yes | No issues | Angela Agosto |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://depo-platform-documentation.scrollhelp.site/developer-docs/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Axescansincludedinend-to-end(e2e)tests)| Yes | No issues  | Taylor Mitchell |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://depo-platform-documentation.scrollhelp.site/developer-docs/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Colortestsforpropercontrastandcolorblindness)| Yes | No issues | Angela Agosto |
| Content zoomed to 200%, 300%, 400% | [read more about zoomed layouts](https://depo-platform-documentation.scrollhelp.site/developer-docs/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Contentzoomedto200%,300%,400%)| Yes | Passed; secondary links responsively move to the left when a user zooms in far enough that they would go off screen | Angela Agosto |
| Keyboard navigation | [read more about navigating with the keyboard](https://depo-platform-documentation.scrollhelp.site/developer-docs/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Keyboardnavigation)| Yes | Passed - all links are accessible by keyboard | Angela Agosto |

## Advanced Accessibility Tests

| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
| Screen reader tests (VoiceOver + Safari or NVDA + Firefox) | [read more about getting started with screen readers](https://depo-platform-documentation.scrollhelp.site/developer-docs/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Advancedaccessibilitytests(recommended)). _Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). DEPO Platform acknowledges this testing is aspirational._|  |  |
Axe-coconut scans in daily development | [read more about the axe-coconut experimental plugin](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)|  |  | |
WAVE tool spot checks | [read more about the WebAIM WAVE tool](https://wave.webaim.org/)|  |  |
