# Notification Preferences - Accessibility Staging Review Prep

For additional reference see [Accessibility staging review prepartion documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#accessibility-staging-review-preparation) and [VA Platform Collaboration cycle Staging review documentation](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Staging-review.1810137181.html)

## Foundational Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
|Axe scans in daily development | [read more about the axe browser plugin](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-daily-development)| Yes  | Passed (the only issues are sitewide) | Erik Hansen |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-end-to-end-tests)| Yes | No issues | Erik Hansen |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#color-tests)| Yes | Passed | Liz Lantz |
| Content zoomed to 200%, 300%, 400% | [read more about zoomed layouts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#content-resize-check)| Yes | Passed  | Liz Lantz|
| Keyboard navigation | [read more about navigating with the keyboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#keyboard-navigation-check)| Yes | Passed (one thing seems odd to me, but [selecting radio buttons with arrow keys is standard behavior](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30341#issuecomment-930467788) so considering this passed) |Liz Lantz|

## Advanced Accessibility Tests

| Test | Additional info about test | Test Complete (yes/no) | Findings | Test Performed By |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |------------------ |
| Screen reader tests (VoiceOver + Safari or NVDA + Firefox) | [read more about getting started with screen readers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#screen-reader-tests). _Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). DEPO Platform acknowledges this testing is aspirational._| Yes | [Some small issues were found and addressed](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30341) | Liz Lantz and Erik Hansen |
Axe-coconut scans in daily development | [read more about the axe-coconut experimental plugin](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)| Yes | It complained about using `aria-label`s on the radio button `label`s, but that approach was okayed by Trevor and it works with JAWS and VoiceOver so I'll leave it for now | Erik Hansen |
WAVE tool spot checks | [read more about the WebAIM WAVE tool](https://wave.webaim.org/)| Yes | Complained about the `fieldset`s missing `legend`s. I will address this. | Erik Hansen |
