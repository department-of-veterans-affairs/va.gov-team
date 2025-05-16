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

See the [ADR 001](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md#adr-001-tab-definitions) for a definition list of the tab anatomy.

The challenging part of this component is there are alot of different smaller components being used together. 
1. **Tabs:** The tabs will be contained within the the page.
2. **Divider:** The divider will be 
3. **Horizontal Tab:** URL based so they will be links instead of buttons.
  - Selected
    - Hover
    - Active
    - Focus 
  - Unselected
    - Hover
    - Active
    - Focus 
2. **Button:** The dropdown will be a button.
3. **Popover:** The container for the overflow tabs.
4. **Vertical Tab:** The tabs in a vertical layout within the popover. Will have the same selected and unselected states as horizontal tabs.

### Overflow behavior

The overflow behavior works by sizing each tab individually and figuring out how many tabs can fit within the contained space. Any tabs that doesn't fit horizontally will be placed into the dropdown. 

See [ADR 002](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md#adr-002-behavior-when-tabs-overflow-off-the-screen) For more info about the tab overflow behavior.

You can see a prototype of the [tab overflow - menu](https://codepen.io/babsdenney/pen/EaaYvQV). This prototype can be used as a example but it is not required to follow the architecture or styles.

See [ADR 003](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md#adr-003-tab-style-choices) for more information about different styles and layout used for the tabs.

### Click behavior

Clicking or tapping a tab takes the user to a dedicated page. You can find more information about the URL behavior in the submitted experimental design. 
[Experimental Design [New tabs design] #2346](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2346)

## Future Considerations

### Stacked option
- For V2, it could be beneficial to offer different overflow behaviors. A stacked version like you see in this prototype might be a better option in some use cases. 
  [Stacked tabs prototype](https://codepen.io/babsdenney/pen/yyyBbYY)

### Popover and Side nav components
- This component could be the starting point for future components that can be reused.
  - Side nav component - You can consider this component a horizontal version of the side nav component. The vertical tabs used within the dropdown should probably be revaluated when we do decide to implement a side nav component. 
  - Popover component - We have a few instances now that use a form of a popover. The combo box, search results, and now this button dropdown component. We should consider adding a popover component to create consistency within the components.
