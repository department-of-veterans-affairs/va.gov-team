## Required accessibility tests

- [ ] Axe scans in daily development - [read more about the axe browser plugin](#axe-scans-in-daily-development)
- [ ] Axe scans included in end-to-end (e2e) tests - [read more about e2e tests with axe checks](#axe-scans-in-end-to-end-tests)
- [ ] Color tests for proper contrast and colorblindness - [read more about contrast and colorblindness](#color-tests)
- [ ] Content zoomed to 200%, 300%, 400% - [read more about zoomed layouts](#content-resize-check)
- [ ] Keyboard navigation - [read more about navigating with the keyboard](#keyboard-navigation-check)
- [ ] Screen reader tests (VoiceOver + Safari or NVDA + Firefox) - [read more about getting started with screen readers](#screen-reader-tests)

## Recommended accessibility tests

- [ ] Axe-coconut scans in daily development - [read more about the axe-coconut experimental plugin](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)
- [ ] WAVE tool spot checks - [read more about the WebAIM WAVE tool](https://wave.webaim.org/)
- [ ] Keyboard end-to-end tests. These tests are currently written in Nightwatch.js, and will be ported to Cypress.io in the future. [Read more about the legacy Nightwatch tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/testing/508-automated-testing.md)
