# Properties / Architecture Template

## Properties

|             |          |              |          |                   |              |                                                                  |
| ----------- | -------- | ------------ | -------- | ----------------- | ------------ | ---------------------------------------------------------------- |
| **Release** | **Name** | **Required** | **Type** | **Default Value** | **Platform** | **Description**                                                  |
| v1 | label | true | `string` | - | web/mobile | Text label for the field. |
| v1 | name| true | `string` | -  | web/mobile  |   Name attribute for the select field. |
| v1 | value  | false | `string` | - | web/mobile | Selected value (will get updated on select). |
| v1 | required | false |  `boolean` | `false` | web/mobile | Whether or not this is a required field. |
| v1 | error | false | `string` | - | web/mobile | Error message to display. When defined, this indicates an error. |
| v1 | disabled | false | `boolean` | `false` | web/mobile | The combo box component will be disabled / read-only. |
| v1 | hint | false | `string` | - | web/mobile | Optional hint text. |
| v1 | message-aria-describedby | false | `string` | - | web/mobile | An optional message that will be read by screen readers when the select is focused. |
| v1 | placeholder | false | `string` | - | web/mobile | The placeholder string. |
| v1 | show-input-error	| false | `boolean` | `true` | web/mobile | Whether to show error message text |


## Architecture Overview

This component is following the [USWDS combo box](https://designsystem.digital.gov/components/combo-box/) component. Properties and features follow those designs. 

## Tests (e2e & unit)

Tests that will be written for the component.

## Storybook Examples

### Web
- Default
- With default value
- With error
- Required
- With placeholder text
- With hint text
- With message aria described by
- Option groups

### Mobile
- Default
- With default value
- With error
- Required
- With placeholder text
- With hint text
- With message aria described by
- Option groups

## Future Considerations

For the web version of the `va-input-telephone`, we are using a modified version of the combo box. We have yet to add the mobile version on the telephone input and don't have designs yet. This might be something to consider when developing the mobile version of the combo box. 
