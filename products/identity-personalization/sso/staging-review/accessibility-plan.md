# Accessibility Test Cases Template

* Confirm your team has a folder in the [va.gov-team-sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/) repo. This private repo is a good place to store test credentials and passwords.
* Copy the [accessibility test credentials template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-credentials-template.md) and this test case template into your team folder.
* Enter your unique product/feature data into the copied documents before requesting a [staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review) with VSP.
* Include links to your test credentials and test plan in your staging review.

## Automated testing (required)

This will be the automated tests teams must run before requesting a staging accessibility review. These tests are critical for providing an accessible foundation for your product.

### Scan with axe browser plugin (required)

![Axe plugin for Chrome dev tools](https://user-images.githubusercontent.com/934879/76459202-a8d4f780-63d3-11ea-8ef6-aaec0a2482ba.jpg)

---

**Steps to test:**

1. Install the [browser plugin for Chrome, Firefox or Edge Chromium](https://deque.com/axe)
2. Open the Developer tools and select the Axe tab
3. Press the large Analyze button to run the scan, one page at a time
4. Verify the issues (if any)

**Expected result:**

1. The axe scan should have 0 violations. Any `Best practices` items can be reviewed with the accessibility specialist.

---

### Create end-to-end tests for client-side applications (required)

All pages and applications must have axe checks that run on every continuous integration/continuous deployment (CI/CD) build. React applications require these tests to be added as part of the end-to-end test suite. Tests should open modal windows, accordions, hidden content, and re-run the axe check for high test coverage.

**Steps to test:**

1. Read the [basic end-to-end test setup](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/e2e-testing) document
2. Add [axe checks](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) to all of your end-to-end tests
3. Run tests on `localhost` to confirm proper functionality

**Expected result:**

1. End-to-end tests should show 0 violations. Axe checks that result in 1 or more violations will break branch builds and prevent merging into the `master` branch until they are resolved.



## Additional automated testing (recommended)

This will be the automated tests teams should run before requesting a staging accessibility review. If your feature or product has a lot of keyboard navigation, the keyboard end-to-end tests are encouraged.

### Scan with axe-coconut (recommended)

![Axe-coconut plugin for Chrome dev tools](https://user-images.githubusercontent.com/934879/76459245-bd18f480-63d3-11ea-95b2-2072ed374e8f.jpg)

---

**Steps to test:**

1. Install the [browser plugin for Chrome](https://www.deque.com/axe/axe-for-web/early-release/)
2. Open the Developer tools and select the Axe-coconut tab
3. Press the large Analyze button to run the scan, one page at a time
4. Verify the issues (if any)

**Expected result:**

1. The axe-coconut scan should have 0 violations. Any `Best practices` items can be reviewed with the accessibility specialist.

---

### Visually scan with WAVE (recommended)

![WAVE plugin summary pane](https://user-images.githubusercontent.com/934879/76459466-27319980-63d4-11ea-8ed1-9caa79f31498.jpg)

---

**Steps to test:**

1. Install the [WAVE plugin for Chrome](https://wave.webaim.org/)
2. Press the WAVE `W` icon in the top right of the browser window
3. Review the findings in WAVE, and investigate any issues with Axe, in case they are violations. Follow up with the accessibility specialist on Slack if you have questions or concerns.

**Expected result:**

1. The WAVE scanner should show 0 violations.

---

### Create keyboard end-to-end tests (experimental)

Keyboard navigation is largely a manual testing process. With that said, VSP is piloting helper functions for our end-to-end tests that can mimic how keyboard users navigate our pages and applications. This process is being pilot-tested for wider adoption.

**Steps to test:**

1. Reach out to the VSP accessibility specialist if you would like to include your project in this pilot program.

**Expected result:**

1. Keyboard end-to-end tests should show 0 violations. Axe checks that result in 1 or more violations will break branch builds and prevent merging into the `master` branch until they are resolved.



## Manual testing (required)

Manual testing includes zoomed layouts, color contrast and color blindness, keyboard navigation, and screen reader usage. The VSP accessibility specialist will use your test findings as a starting point for their staging accessibility review.

### Color comparisons (required)

[Best practices - color testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#color-tests)

**Steps to test:**

1. Check color pairings for proper color contrast. Text of 20px or smaller must have a 4.5:1 constrast ratio to its background. Text 20px or larger must have a 3:1 constrast ratio to its background.  Be aware of the following pairings, and evaluate them carefully:
   * White text on yellow, orange, red
   * Black text on darker blues, purples
   * Gray text on white or textured backgrounds.
2. Check for color blindness issues. VSP recommends the [Colorblinding plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en) for Chrome. There are several key items to look for:
   * Links that do not have underlines
   * Use of color as the only indicator something is in error, has changed, etc.

**Expected result:**

1. Text meets contrast ratio requirements to its background.
2. All links, buttons, icons, and other elements retain their meaning when color blindness filters are enabled.

---

### Zoom layouts (required)

All layouts should support readability and usability when zoomed up to 400% at 1280px browser width.
[Best practices - zooming layouts to 400%](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#zoom-to-400)

**Steps to test:**

1. Set browser window width to 1280px
2. Zoom the browser in to 200%
3. Review all pages and interactions. Make sure the layouts are readable and usable. Consider:
   * [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
   * [F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F69)
   * [F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F80)
4. Zoom layouts to 300%. Repeat steps 2 and 3.
5. Zoom layouts to 400%. Repeat steps 2 and 3.

**Expected result:**

1. All layouts should support readability and usability when zoomed in to 200, 300, or 400% at 1280px browser width. Most layouts should not scroll sideways or have content to the edges. Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.

---

### Keyboard navigation (required)

All pages and user flows (forms, data entry, navigation, user interface) must be navigable using a keyboard. A number of elements can receive keyboard focus, including form elements, buttons, links, and custom UI that has had a tabIndex applied. Pressing TAB should move focus to the next element that can receive keyboard focus. Pressing SHIFT+TAB should move focus to the previous element.

* [Keyboard best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#keyboard-navigation)
* [WebAIM keyboard navigation guide](https://webaim.org/techniques/keyboard/)

**Steps to test:**

1. valuate each link, button, form input, checkbox, radio button, select menu, and custom element can receive keyboard focus
2. Evaluate that checkboxes can be checked and unchecked by pressing SPACE when under keyboard focus
3. Evaluate that radio buttons can be selected by pressing ARROW_DIRECTION when a radio group is under keyboard focus
4. Evaluate that select menus can be opened by pressing SPACE, and an option selected with arrow keys. Select menus should close when user presses ENTER.
5. Evaluate that users shouldn't have to press TAB a large number of times to reach elements, or get back to their previous focus. This usually happens when UI is changed like a text block switched to an edit form and back again.
6. Evaluate that the element under focus has a yellow halo around it

**Expected result:**

1. There should be no issues navigating pages and user flows.

---

### Screen reader (required)

All [happy path user flows or pages](https://en.wikipedia.org/wiki/Happy_path) should be passed through with **VoiceOver for MacOS** or **NVDA (open-source) for Windows**. This is meant to be a quick pass to catch difficult or incomplete user interactions.

* [VSP MacOS VoiceOver Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/mac-voiceover-guide.md)
* [WebAIM: Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)
* [NVDA Download](https://www.nvaccess.org/download/)
* [NVDA Focus Plugin - recommended](https://addons.nvda-project.org/addons/focusHighlight.en.html)

**Expected result:**

1. There should be no issues navigating pages and user flows. Please consult with your accessibility specialist early and often. Screen reader testing is as much art as it is science.



## Certification

All required tests must be completed and a representative of the product team should confirm these tests have been run for the VSP staging accessibility to proceed.

**Required tests**

* [ ] Scan with axe browser plugin
* [ ] Create end-to-end tests for React apps _(ignore if not applicable)_
* [ ] Color comparisons
* [ ] Zoom layouts
* [ ] Keyboard navigation
* [ ] Screen reader

---

**Recommended tests**

* [ ] Scan with axe-coconut
* [ ] Visually scan with WAVE

---

**Experimental tests**

* [ ] Create keyboard end-to-end tests

---

**Certifying person**

First name only:
