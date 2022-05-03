# Accessibility Testing by Practice Area

This document will outline the team members or practice area(s) who are best suited to oversee tests outlined in the [accessibility staging review process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md).

## Table of Contents

- [Accessibility Testing by Practice Area](#accessibility-testing-by-practice-area)
  - [Table of Contents](#table-of-contents)
  - [The Testing Process](#the-testing-process)
  - [Axe Scans in Daily Development](#axe-scans-in-daily-development)
  - [Axe Checks in End-to-End Tests](#axe-checks-in-end-to-end-tests)
  - [Color Contrast and Colorblindness](#color-contrast-and-colorblindness)
  - [Zoom Layouts to 400%](#zoom-layouts-to-400)
  - [Keyboard Navigation](#keyboard-navigation)
  - [Screen Readers](#screen-readers)

## The Testing Process

1. Begin your testing as soon as possible:
   * [Color contrast and colorblindness testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/testing-by-practice-area.md#color-contrast-and-colorblindness) can be done in the design phase
   * [Axe checks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/testing-by-practice-area.md#axe-scans-in-daily-development) and [end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/testing-by-practice-area.md#axe-checks-in-end-to-end-tests) can be run/created during development
   * [Keyboard navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/testing-by-practice-area.md#keyboard-navigation) can be tested during development
   * [Zooming layouts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/testing-by-practice-area.md#zoom-layouts-to-400) and [screen reader testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/testing-by-practice-area.md#screen-readers) should be done as features are stable in Staging
2. Ask your accessibility specialist if you encounter an issue you're not sure about. Issues that can't be completed before the staging review should be logged using the [508 accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=) template and passed to your accessibility specalist as known items.
3. Accessibility specialist will add known issues to an `epic` during the staging accessibility review
4. After the staging review is complete, the accessibility specialist will work with your team to triage issues. Launch blocking issues ( severity 0/1 ) will be prioritized for immediate fix. All other issues will be prioritized according to their severity post-launch.
5. When fixes are ready, please include the accessibility specialist in the pull request review cycle.
6. The accessibility specialist will close issues once fixes have been verified in Staging.

## Axe Scans in Daily Development

**Testers:** Front-end engineering

**Description:** Axe scans will include as-needed tests using browser plugins. These checks are the foundation of accessible products and cannot be overlooked.

**Getting Started:**

* [Getting started with automation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#getting-started-with-automation)
* [Scan with axe plugin for staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#scan-with-axe-browser-plugin-required)

**Definition of Done:**

* Stable code has zero [WCAG 2.0 Level A or AA violations](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-20-level-a--aa-rules) reported in browser plugin
* Team certifies their axe checks in the [Markdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) or [TestRail](https://dsvavsp.testrail.io/index.php?/projects/overview/13) test case template

## Axe Checks in End-to-End Tests

**Testers:** Front-end engineering

**Description:** Axe scans will include automated checks in end-to-end (e2e) test suites. These checks are the foundation of accessible products and cannot be overlooked.

**Getting Started:**

* [Quality assurance guide to creating end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/e2e-testing)
* [Build pipeline requirements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#build-pipeline-requirements)
* [Create end-to-end tests for staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#create-end-to-end-tests-for-client-side-applications-required)

**Definition of Done:**

* Stable code has zero [WCAG 2.0 Level A or AA violations](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-20-level-a--aa-rules) reported in CI/CD logs
* Team certifies their automated axe checks in their preferred test case template. This should include links to line numbers in e2e tests checked into the `main` branch of vets-website. Accessibility specialists will be reviewing tests to make sure hidden content like accordions and modal windows are being evaluated.

## Color Contrast and Colorblindness

**Testers:** Design, any team member with time to review

**Description:** All layouts should support [WCAG2 Level AA color contrast ratios](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) and provide allowances for users with colorblindness issues.

**Getting Started:**

* [Color testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#color-tests)
* [Color comparisons for staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#color-comparisons-required)

**Definition of Done:**

* Unresolved issues are added to the known issues list
* Team certifies their color contrast and colorblindness checks in the [Markdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) or [TestRail](https://dsvavsp.testrail.io/index.php?/projects/overview/13) test case template

## Zoom Layouts to 400%

**Testers:** Design, any team member with time to review

**Description:** All layouts should support readability and usability when zoomed up to 400% at 1280px browser width.

**Getting Started:**

* [Zoom layouts to 400%](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#zoom-to-400)

**Definition of Done:**

* Unresolved issues are added to the known issues list
* Team certifies their zoom layout checks in the [Markdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) or [TestRail](https://dsvavsp.testrail.io/index.php?/projects/overview/13) test case template

## Keyboard Navigation

**Testers:** Any team member with time to review

**Description:** All pages and user flows (forms, data entry, navigation, user interface) must be navigable using a keyboard.

**Getting Started:**

* [Keyboard navigation best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#keyboard-navigation)
* [Keyboard navigation for staging review]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#keyboard-navigation-required)

**Questions or Unresolved Items:** Questions or items you're not sure about should be logged using the [508 accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=) template and passed to your accessibility specalist as known items.

**Definition of Done:**

* Unresolved issues are added to the known issues list

* Team certifies their keyboard navigation checks in the [Markdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) or [TestRail](https://dsvavsp.testrail.io/index.php?/projects/overview/13) test case template

## Screen Readers

**Testers:** Any team member with time to review

**Description:** All [happy path user flows or pages](https://en.wikipedia.org/wiki/Happy_path) should be passed through with **VoiceOver for MacOS** or **NVDA (open-source) for Windows**. This is meant to be a quick pass to catch difficult or incomplete user interactions.

**Getting Started:**

* [Screen reader best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#screen-readers)
* [Screen readers for staging review]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#screen-reader-required)
* [MacOS VoiceOver Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/mac-voiceover-guide.md)
* [Cross-platform Screen Reader Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/screenreader-testing-cross-platform.md)
* [WebAIM: Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)
* [NVDA download](https://www.nvaccess.org/download/)
* [NVDA Focus Plugin](https://addons.nvda-project.org/addons/focusHighlight.en.html) *recommended*

**Definition of Done:**

* Unresolved issues are added to the known issues list
* Team certifies their screen reader checks in the [Markdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) or [TestRail](https://dsvavsp.testrail.io/index.php?/projects/overview/13) test case template
