# Forms Status on My VA - Accessibility Staging Review Prep

For additional reference see [Accessibility staging review prepartion documentation](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review).

## Foundational Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Pass/Fail | Findings | Test Performed By |
| -------------------------- | ------------------------------- |----------------------------- | ------------------ | ---------------------------------- |------------------ |
|Axe scans in daily development | [read more about the axe browser plugin](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-AutomatedtestingwithaxebyDequeaxe)|  yes | Pass | 0 issues after running full-page scan  | Allison |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-axescansinend-to-endtests)| yes | Pass | All [relevant e2e tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/tests/e2e/in-progress-forms.cypress.spec.js) include `cy.injectAxe()` and `cy.axeCheck()` | Allison |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Useofcolorandcolorcontrastuse-of-color)| yes | Pass | Web components from DS has proper color contrast | Allison |
| Content zoomed to 200%, 300%, 400% | [read more about zoomed layouts](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Contentzoomandreflowcontent-zoom)| yes | Pass | Functionality isn't blocked; content doesn't overlap; there is no horizontal scrolling  |  Allison |
| Keyboard navigation | [read more about navigating with the keyboard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Keyboardnavigationkeyboard-nav)| yes  | Pass | Keyboard navigation working as expected  | Allison   |


## Advanced Accessibility Tests (optional)

| Test | Additional info about test | Test Complete (yes/no) | Pass/Fail | Findings | Test Performed By |
| ------------------------------- | ------------------------------ | ----------------------- | --------------------------- |------------------ |------------------ |
| Screen reader tests (VoiceOver + Safari or NVDA + Firefox) | [read more about getting started with screen readers](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Screenreadersscreen-readers). _Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). DEPO Platform acknowledges this testing is aspirational._| yes (VoiceOver only) | Pass | VO working as expected | Allison  |
WAVE tool spot checks | [read more about the WebAIM WAVE tool](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-WAVEspotcheckswave)|  yes | Pass | No issues found within our product |  Allison |

