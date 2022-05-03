
# Accessibility staging review preparation

> Copied from <https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/accessibility/guidance/staging-review-processes.md>

## Foundational accessibility tests (required)

- [ ] Axe scans in daily development - [read more about the axe browser plugin](#axe-scans-in-daily-development)
- [ ] Axe scans included in end-to-end (e2e) tests - [read more about e2e tests with axe checks](#axe-scans-in-end-to-end-tests)
- [ ] Color tests for proper contrast and colorblindness - [read more about contrast and colorblindness](#color-tests)
- [ ] Content zoomed to 200%, 300%, 400% - [read more about zoomed layouts](#content-resize-check)
- [ ] Keyboard navigation - [read more about navigating with the keyboard](#keyboard-navigation-check)

## Advanced accessibility tests (recommended)

- [ ] Screen reader tests (VoiceOver + Safari or NVDA + Firefox) - [read more about getting started with screen readers](#screen-reader-tests). Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). _DEPO Platform acknowledges this testing is aspirational._
- [ ] Axe-coconut scans in daily development - [read more about the axe-coconut experimental plugin](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)
- [ ] WAVE tool spot checks - [read more about the WebAIM WAVE tool](https://wave.webaim.org/)

## Future accessibility tests

- **Keyboard end-to-end tests**<br/>These tests are currently written in Nightwatch, and will be ported to Cypress in the future. [Read more about the legacy Nightwatch tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/testing/508-automated-testing.md).

## Artifacts

### Axe checks

#### plugins

- [To Do List](assets/axe.check.list.png)
- [Completed List](assets/axe.check.list.completed.png)
- No known issues

#### e2e

- [list](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/health-care-questionnaire/list/tests/e2e/00.home.cypress.spec.js#L12)
- [form](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/health-care-questionnaire/questionnaire/tests/e2e/03.questionnaire.landing.page.accessibility.cypress.spec.js#L27)
- No known issues


### Wave checks

- [Screen Recording](assets/Screen%20Recording%202021-04-07%20at%202.14.10%20PM.mov)
- No known issues

### Screen reader checks

- Verified using [this chrome plugin](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)
- No known issues

### Zoom checks

- [zoomed into 400](assets/zoom.in.png)
- No known issues

### Keyboard tests
