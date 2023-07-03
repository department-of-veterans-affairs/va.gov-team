# Level 3

Time: approximately 1 - 3 hours

1. Test your product with Mac VoiceOver and Safari, and keyboard navigation.
    **How this helps:** Hearing how a screen reader delivers your content provides insights to the reasoning behind many WCAG best practices.

    * Review this guide, [How to use Apple's Voice Over to manually check basic accessibility/usability issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/mac-voiceover-guide.md)
    * Review this guide, [A11yProject Quick Tip: Browser Keyboard Navigation in macOS](https://a11yproject.com/posts/macos-browser-keyboard-navigation/)
    * If you’d like to try screen reader Testing on Windows, here’s a [Getting Started with Screen Reader Testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/screenreader-testing-cross-platform.md), that includes guidance for JAWS and NVDA.
    * Keyboard testing is a manual process. All pages should be verified by a human tester, and ideally an end-to-end keyboard script. During your testing or user testing, if something doesn’t feel quite right, consider writing an issue ticket to investigate with your accessibility specialist.
    * [Ensure all pages can be navigated with a keyboard](https://webaim.org/techniques/keyboard/).
    * Ensure no links, buttons, or form elements are unreachable using Tab, Shift + Tab.
    * Ensure custom rich components can be navigated using keyboard, arrow keys.
    * Skip navigation link should be on all pages with navigation, large numbers of links.
    * Ensure focusable elements (links, form inputs, buttons, radios, checkboxes) are all reachable by keyboard. Ensure any elements with a tabIndex="0" can be focused in the normal document flow.
    * Whenever possible, use proper semantic elements. For instance, it is better to use a <button> than re-create events and focus behaviors using custom tags.
    * Avoid keyboard traps. These are situations where users can tab into an interface, but can't tab out of it by pressing TAB or SHIFT+TAB.
    * Ensure your application has a predictable tabbing order. In left-right languages like English, this is assumed to be left to right, top to bottom. In multi-column layouts, use your best judgment. Interfaces that include a left navigation bar would likely allow users to focus each link or button in the left nav, then move focus to the main content area.
    * Offer ways to skip large groups of links like a [skip to content link](https://webaim.org/techniques/skipnav/).
    * Review the [WebAIM keyboard accessibility guide](https://webaim.org/techniques/keyboard/) for keyboard navigation patterns.

[Go to Level 4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/a11y-champs/04-level.md)
