# Properties / Architecture Template

## Properties

| Release     | Name       | Required     | Type                                                 | Default Value                          | Platform     | Description                                                                                                                        |
| ----------- | --------   | ------------ | ---------------------------------------------------  | -------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1          | ariaLabel    | true         | `string`  | null                                   | mobile/web   | The `aria-label` value to be applied to component's `<ul>` element.
| v1          | buttons    | true         | `Button[]`<br> _Must contain between 2 to 4 items._  | null                                   | mobile/web   | An array of button labels and values.
| v1          | onVaButtonClick   | true         | `event`                                              | null                                   | mobile/web   | A custom event emitted that returns to value of the active button when one of the buttons is clicked.                                     |
| v1          | selected   | false         | `number`                                                    | `0`                         | mobile/web   | The active button

**NOTE: May need to reconcile properties with the mobile implementation.**

The high-level vision behind the component’s architectural direction which could include how it will handle properties/data, present markup, its flexibilities and constraints. This might also be a good place to list features.

## Future Considerations

- Should we have different sizes? For example: `small`/`default`/`large`.
- Should we allow icons with the labels?
- Should we allow icons alone as the label?
- Should we allow segmented button to fill the container in non-mobile viewports?


