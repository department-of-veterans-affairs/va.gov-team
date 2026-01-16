# Component architecture

## Common name
Sort

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
Will be used in [search results template](https://design.va.gov/templates/search-results)

### Styles
See related [Figma file](https://www.figma.com/design/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates--Patterns--and-Forms?node-id=19333-12070&t=aGgWiYmVyXlmvRjt-0)

### Guidance
See [Sort guidance](https://dev-design.va.gov/5102/components/sort)

### Existing implementations with similar functionality
https://www.va.gov/forms/?q=medications

## Text content
| Element| Default value | Notes |
| :---- | :---- | :---- |
| `<label>` | "Sort by" | This value should be hard-coded into the component. It should not be customizable by downstream teams.  Defined with `va-select`’s `label` prop. |
    
## Properties
Disallow all props available to va-select except the following:

| **Name** | **Required** | **Type** | **Default Value** |  **Description**|
| :----------- | :-------- | :------------ | :-------- | :----------------- | 
| `message-aria-describedby` | No | `string` | undefined | _same as va-select_  |
| `name` | No | `string` | "sort" | _same as va-select_  |
| `value` | No | `string` | undefined | _same as va-select_  |
| `width` | No | `string` | `lg` | “md”, “lg”, “xl” (Subset of va-select widths) |

## Slots

| **Name** | **Description**                                                                               |
| :------- | :-------------------------------------------------------------------------------------------- |
| unnamed  | The `<option>` elements that will be included in the `<select>` element (same as `va-select`) |

## Events
| Event name | Description |
| :---- | :---- |
| `vaSortSelect` | _same as `va-select`’s `vaSelect`_ |
| `vaSortKeyDown` | _same as `va-select`’s `vaKeyDown`_ |
| `vaSortSelectBlur`| _same as `va-select`’s `vaSelectBlur`_ |
| `component-library-analytics` | _same as va-select_ <br/> Note: Analytics will need some special attention because we will want to capture the bubbling analytics event from `va-select` and stop it from actually getting logged as a `va-select` analytics click. It should log as `va-sort`. Here is an example approach from `va-button-pair`: [https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-button-pair/va-button-pair.tsx\#L98-L123](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-button-pair/va-button-pair.tsx#L98-L123) |

### Additional considerations
Allow debounce/delay in the onchange event (See [related guidance](https://dev-design.va.gov/5102/components/sort/#accessibility-considerations:~:text=Debounce%20network%20requests%20when%20multiple%20sorts%20occur%20in%20quick%20succession%20or%20delay%20the%20onchange%20event%20to%20check%20for%20another%20option%20selection.%20This%20prevents%20assistive%20technology%20users%20who%20do%20not%20open%20menus%20from%20prematurely%20making%20a%20selection%20while%20exploring%20sort%20options.)  for details) 
  * Note: Teams can and should manage debouncing themselves based on their specific use-case. Teams can use one of the custom events (`vaSortSelect`, `vaSortKeyDown`, `vaSelectBlur`) to manage this. We should update the guidance to reflect this change once the correct method(s) is clear.
  
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
* Custom width - demonstrate a different value in the `width` prop
* Custom value - demonstrate a default value that is not the first option

## Focus management
None - focus stays on the component after selection

## Validation
None - this component does not have an error state

## Future Considerations
None
