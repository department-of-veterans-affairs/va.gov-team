__Please note: some links in this document point to the vets.gov-team repo.__

# 508, Accessibility, and Inclusive Design Best Practices

**Table of Contents**

  - [Checklists](#checklists)
  - [Accessibility Tips for Designers, Researchers, and Developers](#accessibility-tips-for-designers-researchers-and-developers)
  - [Semantic Markup](#semantic-markup)
  - [Formation Design System](#formation-design-system)
  - [Automated Accessibility/508 Testing](#automated-accessibility508-testing)
    - [Getting Started With Automation](#getting-started-with-automation)
    - [Build Pipeline Requirements](#build-pipeline-requirements)
  - [Manual Accessibility/508 Testing](#manual-accessibility-testing)
    - [Color Tests](#color-tests)
    - [Zoom to 400%](#zoom-to-400)
    - [Keyboard Navigation](#keyboard-navigation)
    - [Screen Readers](#screen-readers)
      - [Possible Screen Reader Errors](#possible-screen-reader-errors)
      - [Test Pairings](#test-pairings)

## Checklists
- [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md)
- [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md)

## Accessibility Tips for Designers, Researchers, and Developers

Accessibility is an outcome, generally linked to compliance, ensuring solutions are usable by everyone. Inclusive design is a human-centered process considering user diversity, by including and learning from a range of perspectives. Accessibility and inclusive design should be a part of all product design and development conversations to ensure no one is excluded from using the solutions.

The following recommendations have been put together to help teams identify and mitigate accessibility errors during the design, research, and development cycles. There will always be errors that are identified during test and promotion cycles; the goal is to minimize errors called out by clients and end users.

## Semantic Markup

- Review rendered HTML periodically, especially during development. Ensure HTML validates against the `HTML5` doctype.
- Each page should have an H1 as the first heading.
- Headings should be properly nested.
  - The H1 should convey the page's purpose
  - H2s should be used to semantically define the high-level content groups
  - H3 through H6 should be used to define sub-points
  - In the footer, the first level heading should be an H2 and a utility class will adjust the visual styling.
- Design system utility classes should be used to style headings
  - [Font family](https://design.va.gov/utilities/font-family) should be used to adjust typefaces
  - [Font size](https://design.va.gov/utilities/font-size) should be used to adjust size in pixels
- Page `<title>` tags should update on every URL change.
  - H1 text should be included in the page title
  - Page title may be longer or more descriptive than the H1
  - For example the `<h1>` might read "Learn about benefits" and the `<title>` might read "Learn more about benefits | VA.gov"

## Formation Design System

- Use the [Formation](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools) design system as the base for your visual designs.
- Read the [design system documentation](https://design.va.gov/)

## Automated Accessibility/508 Testing

Automated scan errors are the first recommendation for logging and fixing. These errors can cause issues for screen reader, keyboard, mobile, and low-vision users. Issues include improperly formed markup, misused ARIA attributes, color contrast, and missing landmark structures.

### Getting Started With Automation

- **axe Scans** Front-end engineers should install the [axe plugin for Chrome or Firefox](https://deque.com/axe) and [run automated scans](https://www.youtube.com/watch?v=FW1giWW5M9I) periodically during their daily work against all application pages or states. The axe-core plugin is available for [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/). This adds a tab to developer tools and provides on-demand accessibility scanning for single pages during development.
- **Lighthouse scans** Front-end engineers may audit with the [Lighthouse plugin](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) to ensure web performance, accessibility, best practices, SEO, and even progressive web app support will deliver an optimal user experience.
- Going forward, we should also be testing pages with [axe-coconut](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/), which identifies experimental WCAG2 warnings and best practices.
- Developers should run the [axe browser plugin](https://deque.com/axe) while developing new components. Many automated errors can be avoided or fixed during the development cycle.
- Validate rendered HTML to avoid automated accessibility errors. Valid HTML also helps screen reader users navigate your product.

### Build Pipeline Requirements
When you push your code to a feature branch or merge to master, the automated build process will test for accessibility/508 compliance on all **static** pages. The axe check scans for Section 508, WCAG2 A and WCAG2 AA [ruleset](https://dequeuniversity.com/rules/axe/) violations.

- **Each rendered page must pass an axe check.**
  * Static Markdown pages should be checked for violations using the axe plugin.
  * Static content created by Markdown files or the Content Management System (CMS) will be tested as part of the build step.
  * Pages created with the content management system (CMS) should also be checked using the axe plugin.
  * If a build error occurs, fix the issue and submit your code again.
- **Client-side applications must include end-to-end tests and axe checks**
  * Client-side applications will be tested for accessibility as part of their larger e2e test suite.
  * The engineering team has created a [Nightwatch helper function](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) to add axe checks to e2e tests.
  * Axe checks should be run for each view or unique state of an application. These checks should include hidden content like modal windows and accordions.
  * If a build error occurs, fix the issue and submit your code again.
- **ESLint**
  * ESLint exists as a Node module with a command-line interface. It runs a lint scan on all components as a pre-commit hook, and will break on errors.
  * Generally speaking, ESLint and the needed dependencies should be installed when users *yarn install* from the *vets-website* root.

## Manual Accessibility Testing

### Color Tests

- [Formation design system color palette](https://design.va.gov/design/color-palette) has been tested to ensure compliance and usability.
- Designers should check color pairings during visual design sprints, especially:
    - White text on yellow, orange, red
    - Black text on darker blues, purples
    - Gray text on white or textured backgrounds.
- Sketch plugins for designers to test deliverables in progress:
    - [Sketch Color Contrast Analyzer](https://github.com/getflourish/Sketch-Color-Contrast-Analyser)
    - [Stark - Color Contrast and Color Blindness Plugin](http://www.getstark.co/)
- Check for colorblindness issues in live sites using the [Chrome Colorblinding plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)

### Zoom to 400%

- Set browser width to 1280px
  - In Chrome you can right click on any webpage, and select `Inspect` from the menu. This will open the Developer Tools console. Drag your browser window narrower or wider until the number in the top right corner of your browser window reads "1280"
  - In Firefox you must [turn on rulers](https://developer.mozilla.org/en-US/docs/Tools/Rulers) before you can accurately resize your browser window. When rulers are enabled, right click on a page and select `Inspect Element` from the menu. When the Firefox Developer tools are open, click the ruler icon. The ruler is the third icon from the top right of the Developer tools panel.
- Zoom in by pressing `Ctrl and +` on Windows or `Cmd and +` on Mac, until browser shows 400% zoom.
- Most layouts should not scroll sideways or have content to the edges. Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.
- [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
- [WCAG: Understanding Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)

### Keyboard Navigation

Keyboard testing is a manual process. All pages should be verified by a human tester, and ideally an end-to-end keyboard script. During your testing or user testing, if something doesn’t feel quite right, consider [writing an issue ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=) to investigate with your accessibility specialist.

- [Ensure all pages can be navigated with keyboard.](https://webaim.org/techniques/keyboard/)
- Ensure no links, buttons, or form elements are unreachable using Tab, Shift + Tab
- Ensure custom rich components can be navigated using keyboard, arrow keys
- Skip navigation link should be on all pages with navigation, large numbers of links
- Ensure focusable elements (links, form inputs, buttons, radios, checkboxes) are all reachable by keyboard. Ensure any elements with a `tabIndex="0"` can be focused in the normal document flow.
- Whenever possible, use proper semantic elements. For instance, it is better to use a `<button>` than re-create events and focus behaviors using custom tags.
- Avoid keyboard traps. These are situations where users can tab into an interface, but can't tab out of it by pressing `TAB` or `SHIFT+TAB`.
- Ensure your application has a predictable tabbing order. In left-right languages like English, this is assumed to be left to right, top to bottom. In multi-column layouts, use your best judgment. Interfaces that include a left navigation bar would likely allow users to focus each link or button in the left nav, then move focus to the main content area.
- Offer ways to skip large groups of links like a [skip to content link](https://webaim.org/techniques/skipnav/)
- Review the [WebAIM keyboard accessibility guide](https://webaim.org/techniques/keyboard/) for keyboard navigation patterns.

### Screen Readers

Screen reader testing is mostly a manual process. Consider spot testing with at least two, and ideally all three screen readers listed here. At a minimum, NVDA should be tested as it is cross-browser and open-source. Mac users should also be testing VoiceOver on Safari. **Do not use Chrome** for VoiceOver testing, as it can cause false positives and has some ARIA bugs.

#### Possible Screen Reader Errors:

- Buttons or links that do not provide clear understanding of their function. This could sound like “Edit”, without telling a non-sighted user “Edit...what?”
- Dynamic content being added or removed from the page without announcing a change. \* Alert boxes, forms with hidden questions, continue links, are good items to consider.
- Overly long explanations
- Content that is too far removed from an explanation, or with no explanation at all
- Heading mistakes:
  - H1 at top of page, then next heading is an H4
  - Headings that are nested improperly (H3 inside an H4, for instance)
  - Content that looks like a heading, but is marked up as a div or paragraph
- Missing landmark HTML. This includes banner, navigation, main, aside, footer elements, or divs with role attributes. These help screen reader users navigate through pages.

#### Test Pairings:

- [Test using JAWS + IE11 on Win7/10](https://webaim.org/articles/jaws/)
- [Test using NVDA + Firefox on Win7/10 - VIDEO](https://www.youtube.com/watch?v=Vx1vSd5uYS8)
- [Test using VoiceOver + Safari on OSX](https://webaim.org/articles/voiceover/)

The flow must be possible to complete on [VA.gov supported browsers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/request-for-comment/browser-support.md) with the most commonly used screenreader(s) (see for example [2017 WebAIM screenreader survey](https://webaim.org/projects/screenreadersurvey7/)):

  - [ ] User flow must be possible using a keyboard only (no pointing device). See the [WebAIM keyboard accessibility guide](https://webaim.org/techniques/keyboard/) for keyboard strokes.
  - [ ] Windows 7/10: IE11 with JAWS (tested by the Section 508 office)
  - [ ] Windows 7/10: Chrome with JAWS (tested by the Section 508 office, second option upon request)
  - [ ] Windows 7/10: Firefox with NVDA (tested by the Section 508 office, third option upon request)
  - [ ] MacOS: Safari with Voice Over. Make sure you have [updated the Accessibility System Preference](https://www.scottohara.me/blog/2014/10/03/link-tabbing-firefox-osx.html) before testing.
