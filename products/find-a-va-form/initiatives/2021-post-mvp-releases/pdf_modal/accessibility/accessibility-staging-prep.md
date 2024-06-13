## Foundational Testing for WCAG2.1

### Mobile

Design must account for a minimum width of at least 320px and a minimum height of at least 256px

Finger gestures must able to be used with 1 finger when able. Gestures can still be used with multiple fingers. Gestures that cannot be used with 1 finger will be reviewed on a case-by-case basis.

Actions must trigger on touch/mouse up. Actions must be cancellable on touch/mouse down.

### Cognitive

Inputs with an HTML label must have a HTML attribute name that matches the label

Status messages ([modals](https://design.va.gov/storybook/?path=/docs/components-modal--default), [alerts](https://design.va.gov/storybook/?path=/docs/components-va-alert--default), [error messages](https://design.va.gov/patterns/messaging-dictionary), etc) should be identifiable programmably for assistive technologies determined through the "role" property

The purpose of each input field collecting information about the user can be programmatically determined when used for the purposes noted in the "Input Purposes for User Interface Components" section of the WCAG 2.1 standards: https://www.w3.org/TR/WCAG21/#x7-input-purposes-for-user-interface-components

### Color

Color contrast ratio must be a minimum of 3:1 for things like UI components, graphic objects, and focus haloes.

## Foundational testing tips

### Axe scans in daily development

**When:** As part of daily development

**Who:** Frontend engineer


#### Steps to test

1. Install the [browser plugin for Chrome, Firefox or Edge Chromium](https://deque.com/axe).
2. Right click on the page you want to test and select **Inspect.**
3. Select the **Axe** tab. (see screenshot)
4. Select **Analyze** to run the scan, one page at a time.
5. Verify the issues (if any).


#### Expected result

Stable code with no violations reported in axe checks.


#### Definition of done

No violations indicated in axe scan results.

OR

Axe scan results in violations, but those violations are documented in issue ticket(s). Issue tickets are listed as known issues in your staging review request ticket.


### Axe scans in end-to-end tests

**When:** Before requesting a staging review. 

**Who:** Frontend engineers

Note: Having automated accessibility checks in place is a launch requirement for section 508 compliance. [Learn more about automated and integrated 508 compliance](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/memos/508-ds-process.md#automated-and-integrated-508-compliance-tests-and-digital-service-reviews). 

All pages and applications **must** have axe checks that run on every continuous integration/continuous deployment (CI/CD) build. React applications require these tests to be added as part of the end-to-end test suite. Tests should open modal windows, accordions, hidden content, and re-run the axe check for high test coverage.


#### Steps to test



1. Read the [basic end-to-end test setup](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/e2e-testing) document
2. Add [axe checks](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) to all of your end-to-end tests
3. Run tests on `localhost` to confirm proper functionality


#### Expected result

Stable code with no violations reported in end-to-end tests.

Note: Axe checks that result in 1 or more violations will break branch builds and prevent merging into the `main` branch until they are resolved.


#### Definition of done

No violations indicated in end-to-end tests.

OR

End-to-end tests result in violations, but those violations are documented in issue ticket(s). Issue tickets are listed as known issues in your staging review request ticket. 



### Color tests

**Who:** Design, any team member with time to review

**When:** At a minimum, before staging review. We recommend that you consider color accessibility best practices throughout design and development, particularly if you introduce new colors into the design.


#### Color contrast

Use [Who Can Use](https://whocanuse.com/) to preview your text for contrast and readability.



*   Check color pairings for proper color contrast. 
    *   Text of 20px or smaller must have a 4.5:1 contrast ratio to its background. 
    *   Text 20px or larger must have a 3:1 contrast ratio to its background. 
*   Pay particular attention to
*   White text on yellow, orange, or red
*   Black text on darker blues or purples
*   Gray text on white or textured backgrounds


#### Colorblindness

We recommend that you use the [Chrome Colorblindly plugin](https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg) to check for colorblindness issues.



*   Ensure [color is not the only means to distinguish links](https://www.w3.org/TR/WCAG20-TECHS/F73.html) from standard text.
    *   Consider underlining links, especially in paragraph blocks.
    *   Check that links maintain a [3:1 color contrast ratio](https://www.w3.org/TR/WCAG20-TECHS/G183.html) if not underlined
    *   Consider typefaces, font weight, and iconography as third options. Icons will need semantic guides for screen reader users. Example: a download icon is added to links for downloading documents. The accessible title will need to announce this information.
*   Charts, maps, and tables should convey information without relying on color
*   Do not use descriptions such as "Click the green button" for calls to action


#### Definition of done



*   Text meets color contrast ratio requirements relative to its background.
*   All links, buttons, icons, and other elements retain their meaning when color blindness filters are enabled.

OR 

Unresolved color test issues are documented in issue tickets and listed as known issues in your staging review request ticket.


#### Related resources

*   [VA.gov design system color palette](https://design.va.gov/design/color-palette)
*   [Color blindness: how to design an accessible user interface](https://uxdesign.cc/color-blindness-in-user-interfaces-66c27331b858)

### Content resize check

**Who:** Design or any team member with time to review

**When:** At a minimum, before staging review. We recommend that you consider content resizing best practices throughout design and development.

#### Steps to test

*   Set browser width to 1280px
    *   In Chrome you can right click on any webpage, and select Inspect from the menu. This will open the Developer Tools console. Drag your browser window narrower or wider until the number in the top right corner of your browser window reads "1280"
    *   In Firefox you must [turn on rulers](https://developer.mozilla.org/en-US/docs/Tools/Rulers) before you can accurately resize your browser window. When rulers are enabled, right click on a page and select Inspect Element from the menu. When the Firefox Developer tools are open, click the ruler icon. The ruler is the third icon from the top right of the Developer tools panel.
*   Zoom your browser to 400%, 300% and then 200% 
    *   Windows: hold down **Ctrl** and select **+** until you reach your desired zoom level  
    *   Mac: hold down **Cmd** and  select **+** until you reach your desired zoom level


#### Definition of done

Layouts do not scroll sideways or have content to the edges. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.)

OR

Unresolved content resize issues are documented in issue tickets and listed as known issues in your staging review request ticket. 


#### Related resources

*   [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
*   [WCAG: Understanding Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
*   [F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F69)
*   [F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%](http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F80)


### Pointer Gestures

**Who:** Frontend engineer

**When:** As part of daily development

#### Steps to test

*   Using a mobile device, make sure you can use the full functionality of a feature with only 1 finger to gesture (tapping, swiping, etc.)

#### Definition of done

All functionality is available when limited to 1 finger to gesture

#### Related resources

*   [2.5.1 Pointer Gestures](https://www.w3.org/TR/WCAG21/#pointer-gestures)
*   [Understanding Success Criterion 2.5.1: Pointer Gestures](https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html)


### Pointer Cancellation

**Who:** Frontend engineer

**When:** As part of daily development

#### Steps to test

*   Touch/click down on a button/link/feature. The button/link/feature should not trigger.
*   Untouch/click up on a button/link/feature. The button/link/feature should trigger.

#### Definition of done

Buttons/links/features should only trigger when touch up/click up.

AND

User should be able to cancel triggering a button/link/feature by moving finger/mouse away after touch/click down performing touch/click up

#### Related resources

*   [2.5.2 Pointer Cancellation](https://www.w3.org/TR/WCAG21/#pointer-cancellation)
*   [Understanding Success Criterion 2.5.2: Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)

### Input label and name label check

**Who:** Frontend engineer

**When:** As part of daily development

#### Steps to test

*   Confirm that for any input with an HTML label, the input label and input HTML attribute name match.

#### Definition of done

Input HTML label and input HTML attribute name are matching

#### Related resources

*   [2.5.3 Label in Name](https://www.w3.org/TR/WCAG21/#label-in-name)
*   [Understanding Success Criterion 2.5.3: Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)


### Status messages

**Who:** Frontend engineer

**When:** As part of daily development

#### Steps to test

*   Review status message HTML and check if it has the appropriate role for screen reader announcement

#### Definition of done

The status message will have the correct **role** attribute

#### Related resources

*   [4.1.3 Status Messages](https://www.w3.org/TR/WCAG21/#status-messages)
*   [Understanding Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)


### Keyboard navigation check

**Who:** Any team member with time to review

**When:** At a minimum, prior to your staging review. However, there are a lot of factors to consider when optimizing designs and code for keyboard navigation. We recommend that you learn about developing for keyboard navigation best practices early on to prevent issues.

#### Keyboard testing instructions
All pages and user flows (forms, data entry, navigation, user interface, etc.) must be navigable using a keyboard.

To test keyboard navigation, **TAB** to move focus to the next element that can receive keyboard focus. **SHIFT+TAB** to move focus to the previous element.

*   Confirm that each link, button, form input, checkbox, radio button, select menu, and custom element can receive keyboard focus
*   Confirm that that checkboxes can be checked and unchecked by pressing SPACE when under keyboard focus
*   Confirm that radio buttons can be selected by pressing ARROW_DIRECTION when a radio group is under keyboard focus
*   Confirm that select menus can be opened by pressing SPACE, and an option selected with arrow keys. Select menus should close when user presses ENTER.
*   Confirm that users shouldn't have to press TAB a large number of times to reach elements, or get back to their previous focus. This usually happens when UI is changed like a text block switched to an edit form and back again.
*   Evaluate that the element under focus has a yellow halo around it


#### Definition of done

There are no keyboard navigation issues navigating pages and user flows.

OR

Unresolved keyboard navigation issues are documented in issue tickets and listed as known issues in your staging review request ticket.


#### Related resources

*   [Keyboard best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#keyboard-navigation)
*   [WebAIM keyboard navigation guide](https://webaim.org/techniques/keyboard/)


### Screen reader tests

**Who:** Any team member with time to review

**When:** Recommended before your staging review. There is a bit of a learning curve to screen reader testing that comes with experience. If you are new to screen reader testing, don’t hesitate to [ask for help](#what-to-do-if-you-have-questions-or-need-help) early and often.

All [happy path user flows or pages](https://en.wikipedia.org/wiki/Happy_path) must be possible to complete on [VA.gov supported browsers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/request-for-comment/browser-support.md) with at least 1 screen reader tool to catch difficult or incomplete user actions. This is meant to be a quick pass to catch difficult or incomplete user interactions.


#### Screen reader testing tool options

*   [VoiceOver for macOS using Safari](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/mac-voiceover-guide.md)
*   [NVDA (open source) for Windows](https://webaim.org/articles/nvda/)


#### Common screen reader errors

*   Buttons or links that do not provide clear understanding of their function.  \
Example: An **Edit** button that doesn’t make it clear to a non-sighted user what will be edited
*   Dynamic content added or removed from a page without announcing a change. Example: Alert boxes, forms with hidden questions, and continue links
*   Overly long explanations
*   Content that is too far removed from an explanation, or with no explanation at all.
*   Heading mistakes:
    *   at top of page, then next heading is an `&lt;h4>`
    *   Headings that are nested improperly (Example: `&lt;h3>` inside an `&lt;h4>`, for instance)
    *   Content that looks like a heading, but is marked up as a `&lt;div>` or `&lt;p>`
*   Missing [landmark HTML](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html or some similar resource? If we are saying that any resource with time to test can do screen reader testing, non-engineer people might not be familiar with this.). This includes banner, navigation, main, aside, footer elements, or divs with role attributes. These help screen reader users navigate through pages.


#### Definition of done

No issues navigating pages and user flows. 

OR

Unresolved screen reader testing issues are documented in issue tickets and listed as known issues in your staging review request ticket.


