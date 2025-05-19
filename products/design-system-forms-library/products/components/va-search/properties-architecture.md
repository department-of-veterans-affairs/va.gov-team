# Properties / Architecture Template

Copy this template to assist with the initial planning of properties and architecture of a new component.

## Properties

|             |          |              |          |                   |              |                                                                  |
| ----------- | -------- | ------------ | -------- | ----------------- | ------------ | ---------------------------------------------------------------- |
| **Release** | **Name** | **Required** | **Type** | **Default Value** | **Platform** | **Description**                                                  |
| v1          | header   | true        | `string` | Filter             | web/mobile   |  The filter header text. |
| v1          | filter-options  | true  | string` | Filter             | web/mobile   |  Represents a list of filter facets and their categories. Use a JSON array of objects with label properties. Wrap in a string if not using the React-binding version of the web component. |
| v1          | VaFilterChange   |       |  | Filter    | web/mobile   |  A custom event emitted when the filter changes. The payload will provide all active categories.|

## Architecture Overview

#### Markup

The component will be composed of several child components:

- va-accordion
    
- va-accordion-item
    
- va-checkbox-group
    
- va-button, or, va-button-pair (if possible based on the design)

For example:

```jsx
<va-accordion>
  <va-accordion-item header="facet (1)">
    <va-checkbox-group onVaChange={callback}>
      <va-checkbox
        label="category"
        checked
      />
      <va-checkbox
        label="category"
      />
    </va-checkbox-group>
  </va-accordion-item>
  <va-accordion-item header="facet (1)">
   <va-checkbox-group onVaChange={callback}>
      <va-checkbox
        label="category"
        checked
      />
    </va-checkbox-group>
  </va-accordion-item>
</va-accordion>
<va-button
  full-width
  text="Apply"
  onClick={callback}
/>
<va-button
  full-width
  secondary
  text="Clear all filters"
  onClick={callback}
/>
```

#### Receiving Filter Data

The markup could be rendered using slots but this component will instead render the child components internally with a given data set. This will make it less cumbersome for teams to implement and it will also allow us some flexibility for future iterations.

**Data Structure received by the** `filter-options` **property**

```js
[
  {
    label: "Benefits",
    category: [
      { label: "Health Care" },
      { label: "Education" },
      { label: "Housing" }
    ]
  },
  {
    label: "Service Status",
    category: [
      { label: "Veteran" },
      { label: "Active Duty" },
      { label: "Reservist" }
    ]
  }

```

**Types** `Filter[]`

```js
export type FilterFacet = {
  label: string;
  category: FilterCategory[];
};
export type FilterCategory = {
  label: string;
  checked: boolean;
};
export type Filter = FilterFacet[];
```

**Displaying Selection Count**

```html
Filters (3)
  - facet (1)
    - [x] category
    - [ ] category
  - facet (1)
    - [x] category
    - [ ] category
  - facet (1)
    - [x] category
    - [ ] category
```

Internal state will need to keep track of the selection counts for displaying the number of selected categories. [We might not need to re-render the component](https://stenciljs.com/docs/state#when-to-use-state "https://stenciljs.com/docs/state#when-to-use-state") after each va-checkbox change so we should try to avoid using the state decorator if possible. Otherwise, use `@State`.

```js
@Prop() filterOptions?: Filter[] | string;

filtersInternal: Filter[];

handleChange() {
  // update the checked state in this.filtersInternal
}

onComponentDidLoad() {
  // map provided filterOptions to this.filtersInternal
}

<va-accordion-item header="facet (1)">
  <va-checkbox-group onVaChange={handleChange}>
    <va-checkbox
      label="category"
      checked
    />
  </va-checkbox-group>
</va-accordion-item>
```

### Sending Active Filter Data

We should be keeping track of active categories in `filtersInternal` for sending to the server and to any complimentary components (see the active filters component below). The active filters should be sent as a payload with the component’s custom event `VaFilterChange`:

```js
this.filtersInternal = [
  {
    label: "Benefits",
    category: [
      { label: "Health Care", active: true },
      { label: "Education" },
      { label: "Housing" }
    ]
  },
  {
    label: "Service Status",
    category: [
      { label: "Veteran" },
      { label: "Active Duty", active: true },
      { label: "Reservist" }
    ]
  }
]

const filtersActive = filtersInternal
  .map(facet => ({
    ...facet,
    category: facet.category.filter(category => category.active === true)
  }))
  .filter(facet => facet.category.length > 0);
  
filtersActive = [
  {
    label: "Benefits",
    category: [
      { label: "Health Care", active: true }
    ]
  },
  {
    label: "Service Status",
    category: [
      { label: "Active Duty", active: true }
    ]
  }
]
```

### Mobile / Small Viewport

The desktop and mobile displays require separate markup so this will probably need two separate markup blocks conditionally rendered depending on viewport size.

We can try to do this using CSS using `display` but we may have issues keeping elements and state in sync since both markup blocks would still technically be getting rendered by the component.

The approach we probably will need to do instead is listening for the `resize` event, or, using the [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver") API.

```js
@Listen('resize', { target: 'window' })
handleResize() {
  // determine window size and set `isDesktop` boolean.
}

if (isDesktop) {
  return (
    <Host>
      <va-accordion>
        ...
      </va-accordion>
    </Host>
  )
}

return (
  <Host>
    <va-accordion>
      ...
    </va-accordion>
  </Host>
)
```

**Mobile Display: Header**

The header text is displayed as the parent accordion’s `header` prop instead of in a header element above the accordions:

**Desktop**

![Open Screenshot 2025-04-07 at 1.38.45 PM.png](blob:https://vfs.atlassian.net/5e96dce7-68c0-485e-b592-a2e73cbc5daf#media-blob-url=true&id=0ddb6d6a-fba4-4d5e-b402-1fa077df54ed&collection=contentId-4014112769&contextId=4014112769&mimeType=image%2Fpng&name=Screenshot%202025-04-07%20at%201.38.45%E2%80%AFPM.png&size=10148&width=331&height=271&alt=)

**Mobile**

![Open Screenshot 2025-04-08 at 11.21.37 AM.png](blob:https://vfs.atlassian.net/6ab2e58a-75f8-4a7f-bc0f-0d0eeca68f68#media-blob-url=true&id=7b3e14aa-b743-49c2-989f-3cc1a42b67f9&collection=contentId-4014112769&contextId=4014112769&mimeType=image%2Fpng&name=Screenshot%202025-04-08%20at%2011.21.37%E2%80%AFAM.png&size=9661&width=320&height=250&alt=)

**Mobile Display: Parent Accordion**

Small viewports have a single parent accordion wrapping the checkbox groups. Things to consider with the wrapping accordion:

- icon: `filter_list`
    
    - the `va-accordion` component will support an icon in the header
        
- “apply” and “clear all filters” buttons are contained within the parent accordion
    

## Future Considerations

#### Complimentary Active Filters Component

The `va-search-filter` component will have a complimentary component that will live somewhere else on the page that displays active filter pills.

We should be able to send a custom event between these two components so that the active filters can be kept in sync.

Future component name ideas:

- `va-search-filters-active`
    
- `va-search-active`
    
- `va-search-active-categories`

![Open Screenshot 2025-04-10 at 5.16.25 PM.png](blob:https://vfs.atlassian.net/c643242d-3139-4fba-b8e3-9445f7124ef9#media-blob-url=true&id=c97892dc-2ff3-408e-9195-4839ab138206&collection=contentId-4014112769&contextId=4014112769&mimeType=image%2Fpng&name=Screenshot%202025-04-10%20at%205.16.25%E2%80%AFPM.png&size=15521&width=302&height=216&alt=)

**Nested Facets**

Will there ever be a need for nested facets (tree)? I think there are better ways to design it than using a nesting/tree sequence but the possibility is something we should consider at this stage. This is another reason why I think accepting filter data in a prop vs slot content is ideal. We should be able to extend the data structure to allow for nested facets and adjust the markup to accomodate if necessary.

**Search API**

Right now [VA.gov](http://va.gov/) is using [Search.gov](http://search.gov/) for basic lexical search. Faceted search is not implemented but [search.gov supports it](https://open.gsa.gov/api/searchgov-results/#expected-results "https://open.gsa.gov/api/searchgov-results/#expected-results") at least in a limited capacity. This is useful for understanding how a filter request might be made.

> Faceted search offers a set of filters people can use to narrow their results. We support filters for **tags, audience, content type, file (MIME) type, and three custom use fields**. To enable faceted search on your results page, use the parameters below. You must set include_facets=true for these parameters to be applied.
