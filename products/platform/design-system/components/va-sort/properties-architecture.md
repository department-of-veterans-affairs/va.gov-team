# Properties / Architecture Template

## Element name
`<va-sort>`

## Architecture Overview
An implementation of `va-select` that’s specifically designed to sort content. This component is different from va-select in the following ways:  
* The label is inline and left-aligned, not block
* It has hard-coded value for the `label`  prop  
* It has additional guidance for interaction and accessibility  
* It disallows most of va-select’s props  
  * See props table below for allowed props  
* It does not have a default “- Select \-” option  
  * There should be no generic “no value” option. Instead, the default selection should be the first  \<option\> in the slot.   
    * Can be overridden with the value  prop

### Related components
* Built on top of `va-select`
* Often, but not always, paired with `va-search-filter`

### Related patterns/template
* Will be used in [search results template](https://design.va.gov/templates/search-results)

### Properties

| **Name** | **Required** | **Type** | **Default Value** |  **Description**|
| :----------- | :-------- | :------------ | :-------- | :----------------- | 
| `message-aria-describedby` | No | `string` | undefined | _same as va-select_  |
| `name` | No | `string` | "sort" | _same as va-select_  |
| `value` | No | `string` | undefined | _same as va-select_  |
| `width` | No | `string` | `lg` | “md”, “lg”, “xl” (Subset of va-select widths) |

### Slots

| **Name** |  **Description**|
| :---------| :-------------- |
| unnamed | The `<option>` elements that will be included in the `<select>` element (same as `va-select`) |

### Custom events
| Event name | Description |
| :---- | :---- |
| `vaSortSelect` | _same as `va-select`’s `vaSelect`_ |
| `vaSortKeyDown` | _same as `va-select`’s `vaKeyDown`_ |
| `vaSelectBlur` | _same as `va-select`’s `vaSortSelectBlur`_ |
| `component-library-analytics` | _same as va-select_Note: Analytics will need some special attention because we will want to capture the bubbling analytics event from `va-select` and stop it from actually getting logged as a `va-select` analytics click. It should log as `va-sort`. Here is an example approach from `va-button-pair`: [https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-button-pair/va-button-pair.tsx\#L98-L123](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-button-pair/va-button-pair.tsx#L98-L123) |

  
## Example implementation code

```html
<va-sort>
    <option value="tk">
      TK
    </option>
    <option value="tk">
      TK
    </option>
    <option value="tk">
      TK
    </option>
</va-sort>
```

## Example rendered code  
_Same as va-select_

## Storybook stories
* Default
* Custom width
* Custom value

## Focus management
None - focus stays on the component after selection

## Validation
None - this component does not have an error state

## Related guidance
See [Sort guidance](https://dev-design.va.gov/5102/components/sort)

## Future Considerations
None
