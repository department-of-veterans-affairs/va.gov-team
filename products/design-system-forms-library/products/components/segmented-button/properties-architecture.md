# Properties / Architecture Template

## Properties

| Release     | Name       | Required     | Type                                                 | Default Value                          | Platform     | Description                                                                                                                        |
| ----------- | --------   | ------------ | ---------------------------------------------------  | -------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1          | buttons    | true         | `Button[]`<br> _Must contain between 2 to 4 items._  | null                                   | mobile/web   | An array of button labels and values.
| v1          | full-width? | false        | `boolean`                                            | false                                  | web          | Specifies if the component spans the width of it's container. Note: At mobile viewports, component is always full width.           |
| v1          | onChange   | true         | `event`                                              | null                                   | mobile/web   | A custom event emitted that returns to value of the active button when the component changes                                       |
| v1          | selected   | true         | ?                                                    | First button?                          | mobile/web   | The active button

**NOTE: May need to reconcile properties with the mobile implementation.**

The high-level vision behind the component’s architectural direction which could include how it will handle properties/data, present markup, its flexibilities and constraints. This might also be a good place to list features.

## Future Considerations

- Should we have different sizes? For example: `small`/`default`/`large`.
- Should we allow icons with the labels?
- Should we allow icons alone as the label? 


