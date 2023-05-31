# Notification Design System Component Build (and implementation on My VA) - Accessibility Staging Review Prep

For additional reference see [Accessibility staging review prepartion documentation](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review).

## Foundational Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
|Axe scans in daily development | [read more about the axe browser plugin](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-AutomatedtestingwithaxebyDequeaxe)| Yes | Pass - 0 automatic issues | Allison Lu |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-axescansinend-to-endtests)| Yes | Pass - all e2e tests pass (`dashboard-notifications.cypress.spec.js`) | Allison Lu |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Useofcolorandcolorcontrastuse-of-color)| Yes | Pass - readable with all forms of colorblindness | Angela Agosto |
| Content zoomed to 200%, 300%, 400% | [read more about zoomed layouts](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Contentzoomandreflowcontent-zoom)| Yes | Pass - since width is minimal everything is in view at 400% | Angela Agosto |
| Keyboard navigation | [read more about navigating with the keyboard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Keyboardnavigationkeyboard-nav)| Yes | Pass - both links accessible via keyboard | Angela Agosto |

## Advanced Accessibility Tests (optional)

| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
| Screen reader tests (VoiceOver + Safari or NVDA + Firefox) | [read more about getting started with screen readers](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Screenreadersscreen-readers). _Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). DEPO Platform acknowledges this testing is aspirational._|  |  |  |
Axe-coconut scans in daily development | [read more about the axe-coconut experimental plugin](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)|  |  |  |
WAVE tool spot checks | [read more about the WebAIM WAVE tool](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-WAVEspotcheckswave)|  | | |

