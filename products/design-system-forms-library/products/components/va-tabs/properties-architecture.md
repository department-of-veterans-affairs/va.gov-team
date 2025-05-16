# `va-tabs` Properties / Architecture
_Last updated: 2025-05-16_

See [ADR 003](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md#adr-003-tab-style-choices) for a list of design systems that have tab component with a similar tab overflow behavior.

## Properties

|             |          |              |          |                   |              |                                                        |
| ----------- | -------- | ------------ | -------- | ----------------- | ------------ | ---------------------------------------------------------------- |
| **Release** | **Name** | **Required** | **Type** | **Default Value** | **Platform** | **Description**                                                  |
| v1          | aria-label      | true        | `string` | -                 | web/mobile   | A unique name for the rendered nav landmark. |
| v1          | aria-current    | true        | ` 'page'  'step' 'location'  'date'  'time' 'true' 'false'` |  `'page'` |   web/mobile   |  Set aria-current to "page" to indicate that the item represents the current page. Set aria-current to "location" to indicate that the item represents the current location on a page. For more information about aria-current, see [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current). |
| v1          | href      | true         |  `string` |    -             |    web/mobile               |   The unique url used for each tab        |   
| v2         |  overflowBehavior  | true        |  `'stacked'` `'menu'` |  `'menu'`        |  web/mobile | Choose between the overflow behavior for the tabs. A `'stacked'` option will show all tabs in a single vertical column while the `'menu'` option will bundle all the extra tabs into a dropdown. |

## Architecture Overview

See the [ADR 001](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md#adr-001-tab-definitions) for a detailed definition list of the tabs.

The challenging part of this component is there are alot of different smaller components being used together. 
1. **Tabs:** The primary container.
2. **Divider:** A visual separator between the tabs and the content below that will extend the entire width of the container.
3. **Horizontal Tab:** These are **URL-based** tabs implemented as `<a>` links (not buttons).
  - Selected
    - Hover
    - Active
    - Focus 
  - Unselected
    - Hover
    - Active
    - Focus 
2. **Dropdown Button:** A button used to trigger a menu when tabs overflow.
3. **Popover:**
   - A floating container that appears when the dropdown is triggered.
   - Houses the vertical list of overflowed tabs.
4. **Vertical Tab (Inside Popover):**
  - Displayed vertically inside the popover.
  - Mirror the same states and behaviors as the horizontal tabs.

### Overflow behavior

When the number of tabs exceeds the available horizontal space:

- Each tab is measured individually.
- Tabs that don’t fit are moved into a dropdown menu (Popover).
- Reference: [ADR 002 – Overflow Behavior](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md#adr-002-behavior-when-tabs-overflow-off-the-screen)
- Prototype Example: [Tab Overflow Menu (CodePen)](https://codepen.io/babsdenney/pen/EaaYvQV)

> Note: While the prototype demonstrates functionality, it is **not required** to replicate its architecture or styles.

### Max-width
This is something I kept going back and forth about. What is a good max-width for the tabs? Some scenarios I was thinking of. This might be something we need to test out different scenarios.
1. 120px max-width if there were only two tabs then both tabs could fit on a 288px screen width with a 24px margin between the tabs.
2. 144px max-width so that 2 tabs could fit but we would need to remove the margin and the tabs would be flush.
3. 160px max-width so that a single tab and the dropdown button can fit on screen.

### Minimum of 2 tabs in the dropdown

This is a behavior we saw in the [Primer DS](https://primer.style/react/storybook/?path=/story/components-underlinenav-features--overflow-on-narrow-screen&globals=viewport:narrowScreen) where the dropdown would not appear until there were two tabs that needed to be put in the dropdown. There is probably a few different scenarios to consider with this when you think about making sure two tabs can fit at a 288px width. 

### Click behavior

Clicking or tapping on a tab navigates the user to a new page via the tab’s URL.

More on the click behavior can be found in the [Experimental Design: New Tabs Design #2346](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2346).

## Future Considerations

### Stacked option
- For V2, it could be beneficial to offer different overflow behaviors. A stacked version like you see in this prototype might be a better option in some use cases. 
  [Stacked tabs prototype](https://codepen.io/babsdenney/pen/yyyBbYY)

### Popover and Side nav components
This component could be the starting point for future components that can be reused.
- **Side nav component:** You can consider this component a horizontal version of the side nav component. The vertical tabs used within the dropdown should probably be revaluated when we do decide to implement a side nav component. 
- **Popover component:** We have a few instances now that use a form of a popover. The combo box, search results, and now this button dropdown component. We should consider adding a popover component to create consistency within the components.
