# Level 4
Time: approximately 2 hours

1. Review the [508, Accessibility, and Inclusive Design Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#color-tests).

1. Learn about color contrast
    * [Formation design system color palette](https://design.va.gov/design/color-palette) has been tested to ensure compliance and usability.
    * Designers should check color pairings during visual design sprints, especially:
        * White text on yellow, orange, red
        * Black text on darker blues, purples
        * Gray text on white or textured backgrounds.
    * Check color contrast ratios of deliverables in progress:
        * [Who Can Use](https://whocanuse.com/) is a great resource for previewing text for contrast and readability
        * [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
        * [Tanaguru Contrast Finder](https://contrast-finder.tanaguru.com/)

1. Learn about color blindness
    * [Color blindness: how to design an accessible user interface](https://uxdesign.cc/color-blindness-in-user-interfaces-66c27331b858)
    * Check for colorblindness issues in live sites using the [Chrome Colorblindly plugin](https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg).
    * Ensure [color is not the only means to distinguish links](https://www.w3.org/TR/WCAG20-TECHS/F73.html) from standard text.
    * Consider underlining links, especially in paragraph blocks.
    * Check that links maintain a [3:1 color contrast ratio](https://www.w3.org/TR/WCAG20-TECHS/G183.html) if not underlined
    * Consider typefaces, font weight, and iconography as third options. Icons will need semantic guides for screen reader users. Example: a download icon is added to links for downloading documents. The accessible title will need to announce this information.
    * Charts, maps, and tables should convey information without relying on color
    * Do not use descriptions such as "Click the green button" for calls to action

1. Zoom to 400% at 1280px
    * Set browser width to 1280px
    * In Chrome you can right click on any webpage, and select Inspect from the menu. This will open the Developer Tools console. Drag your browser window narrower or wider until the number in the top right corner of your browser window reads "1280".
    * In Firefox you must [turn on rulers](https://developer.mozilla.org/en-US/docs/Tools/Rulers) before you can accurately resize your browser window. When rulers are enabled, right click on a page and select Inspect Element from the menu. When the Firefox Developer tools are open, click the ruler icon. The ruler is the third icon from the top right of the Developer tools panel.
    * Zoom in by pressing Ctrl and + on Windows or Cmd and + on Mac, until the browser shows 400% zoom.
    * Most layouts should not scroll sideways or have content to the edges. Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.
    * [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
    * [WCAG: Understanding Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
