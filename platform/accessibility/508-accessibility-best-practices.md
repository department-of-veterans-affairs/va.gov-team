# 508 Accessibility Best Practices

**Table of Contents**

- [508 Accessibility Best Practices](#508-accessibility-best-practices)
  - [Semantic Markup](#semantic-markup)
  - [Formation Design System](#formation-design-system)
  - [Automated Accessibility/508 Testing](#automated-accessibility508-testing)
  - [Manual Accessibility/508 Testing](#manual-accessibility508-testing)
    - [Zoom to 400%](#zoom-to-400)
    - [Keyboard Navigation](#keyboard-navigation)
    - [Screen Readers](#screen-readers)
    - [Color Tests](#color-tests)

## Semantic Markup

- Review rendered HTML periodically, especially during development. Ensure HTML validates against the `HTML5` doctype.
- Each page should have an H1 as the first heading.
- Headings should be properly nested.
  - The H1 should convey the page's purpose
  - H2s should be used to semantically define the high-level content groups
  - H3 through H6 should be used to define sub-points

## Formation Design System

- Use the [Formation](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools) design system as the base for your visual designs.
- Read the [design system documentation](https://design.va.gov/)

## Automated Accessibility/508 Testing

1. Axe Scans

   1. Front-end engineering should install the [axe plugin for Chrome or Firefox](https://deque.com/axe) and run it periodically during their daily work.
   2. This manual process should be repeated in end-to-end tests that scan rendered pages for regressions every time a build is initiated. These e2e 508 scans should be looking for `['Section 508', 'WCAG 2 Level A', 'WCAG 2 Level AA']` errors.

2. When you push your code to a feature branch or merge to master, the automated build process will test for Accessibility/508 compliance.

3. If a build error occurs, fix the issue and submit your code again.

## Manual Accessibility/508 Testing

### Zoom to 400%

- Set browser width to 1280px
- Zoom in by pressing `Ctrl and +` on Windows or `Cmd and +` on Mac, until browser shows 400% zoom.
- Most layouts should not scroll sideways or have content to the edges. Horizontal scrolling is permitted for content like images, maps, diagrams,
  presentations, and data tables.
- [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
- [WCAG: Understanding Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)

### Keyboard Navigation

- Ensure focusable elements (links, form inputs, buttons, radios, checkboxes) are all reachable by keyboard. Ensure any elements with a `tabIndex="0"` can be focused in the normal document flow.
- Whenever possible, use proper semantic elements. For instance, it is better to use a `<button>` than re-create events and focus behaviors using custom tags.
- Avoid keyboard traps. These are situations where users can tab into an
  interface, but cannot tab out of it by pressing `TAB` or `SHIFT+TAB`.
- Ensure your application has a predictable tabbing order. In left-right
  languages like English, this is assumed to be left to right, top to bottom.
  In multi-column layouts, use your best judgment. Interfaces that include a left
  navigation bar would likely allow users to focus each link or button in the left
  nav, then move focus to the main content area.
- Offer ways to skip large groups of links like a [skip to content link](https://webaim.org/techniques/skipnav/)
- Review the [WebAIM keyboard accessibility guide](https://webaim.org/techniques/keyboard/) for keyboard navigation patterns.

### Screen Readers

- The flow must be possible to complete on [vets.gov supported browsers](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/DocumentedDecisions/Browser%20Support.md) with the most commonly used screenreader(s) (see for example [2017 WebAIM screenreader survey](https://webaim.org/projects/screenreadersurvey7/)):

  - [ ] User flow must be possible using a keyboard only (no pointing device). See the [WebAIM keyboard accessibility guide](https://webaim.org/techniques/keyboard/) for keyboard strokes.
  - [ ] Windows 7/10: IE11 with JAWS (tested by the Section 508 office)
  - [ ] Windows 7/10: Chrome with JAWS (tested by the Section 508 office, second option upon request)
  - [ ] Windows 7/10: Firefox with NVDA (tested by the Section 508 office, third option upon request)
  - [ ] MacOS: Safari with Voice Over. Make sure you have [updated the Accessibility System Preference](https://www.scottohara.me/blog/2014/10/03/link-tabbing-firefox-osx.html) before testing.

### Color Tests

- Color blindness accessibility with tools like the [Chrome Colorblinding plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)
- Sketch plugin, [Color Contrast Analyser](https://github.com/getflourish/Sketch-Color-Contrast-Analyser) to catch contrast issues early
- [Formation design system color palette](https://design.va.gov/design/color-palette)
