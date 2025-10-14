# `va-tag-status` Properties / Architecture Template
_Last updated: 2025-10-14_

## Properties

| Release | Name     | Required | Type                                                             | Default Value   | Platform | Description                                                                      |
|---------|----------|----------|------------------------------------------------------------------|-----------------|----------|----------------------------------------------------------------------------------|
| v1      | `status` | false    | `string`    `informational` \| `warning` \| `success` \| `error` | `informational` | web      | The status variant of the tag. Determines the background color and icon. One of  |
| v1      | `text`   | true     | `string`                                                         | -               | web      | The text to be displayed in the tag element.                                     |                                                     |

## Architecture Overview

This component implementation aims to be as simple as possible while providing adequate context to downstream teams and Veteran end users. The team used [the Tag component from USWDS](https://designsystem.digital.gov/components/tag/) as inspiration, as that component also serves as the basis for current guidance on using [the VDS Tag utility class](https://design.va.gov/components/tag).

Teams using this component should pass the optional `status` prop to determine the background color and contextual icon, and the required `text` prop to set the text displayed in the tag.

Example of composability:
```jsx
<va-tag-status status="success" text="Received"></va-tag-status>
```

For markup, the component's outer wrapper is a styled `<Host>` Stencil element with the [`status` ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role). The wrapper contains the following child elements:
- A `va-icon` instance
- A screen-reader-only `span` element with "Status" as its inner text
- A `span` element containing the display text 

Markup output:
```html
<va-tag-status status="success" text="Received" class="va-tag-status va-tag-status--success hydrated" role="status">
  <va-icon class="va-tag-status__icon hydrated" aria-hidden="true"></va-icon>
  <span class="usa-sr-only">Status</span>
  <span class="va-tag-status__text">Received</span>
</va-tag-status>
```

## Tests (e2e & unit)

Unit tests were written to confirm that the component does the following:
- Renders
- Passes accessibility tests
- Respects the status prop
- Falls back to the default "informational" status if an invalid status prop is passed.

## Storybook Examples

- The "informational" status variant.
- The "warning" status variant.
- The "success" status variant.
- The "error" status variant.

## Future Considerations

- Explore whether the screen-reader-only text should be customizable.
- The VDS will likely move away from using a utility class for a "normal" tag and replace it with a web component (`<va-tag>`). This documentation should be updated accordingly.
