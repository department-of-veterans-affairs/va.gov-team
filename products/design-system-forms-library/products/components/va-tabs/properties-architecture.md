# `va-tabs` Properties / Architecture
_Last updated: 2025-08-01_

<!-- See [ADR 003](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md#adr-003-tab-style-choices) for a list of design systems that have tab component with a similar tab overflow behavior. -->

## Properties

### `va-tabs`

Parent component

| Release | Name             | Required | Type                                            | Default Value | Platform | Description                                                                                                                                                                                                                                                                                                                                |
|---------|------------------|----------|-------------------------------------------------|---------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| v1      | `label`            | true     | `string`                                        | -             | web      | A unique name for the rendered div serving as `role="tablist"`. To be set as value for wrapper's `aria-label` attribute.                                                                                                                                                                                                                   |
| v1      | `initally-selected` | false    | `number`                                        | `0`           | web      | The index of the initially selected tab. Defaults to `0` (the first tab).                                                                                                                                                                                                                                                                  |
| v2      | `overflow-behavior` | false    | `string`  `'stacked' \| 'full-width' \| 'menu'` | `'menu'`      | web      | Choose between the overflow behavior for the tabs. The  `'stacked'`  option will show all tabs in a single vertical column. The  `'full-width'`  option would show expand the tabs to the full-width of the container with each tab spanning a equal widths of space. The  `'menu'` option will bundle all the extra tabs into a dropdown. | container with each tab spanning a equal widths of space. The `'menu'` option will bundle all the extra tabs into a dropdown. |

### `va-tab-item`
Internal child component
| Release | Name            | Required | Type      | Default Value | Platform | Description                                                                                                                                                                                                   |
|---------|-----------------|----------|-----------|---------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| v1      | `button-text`    | true     | `string`  | -             | web      | The text content of the button element.                                                                                                                                                                       |
| v1      | `target-id`      | true     | `string`  | -             | web      | The `id` of the target panel that this tab item controls.                                                                                                                                                     |
| v1      | `selected` | false    | `boolean` | `false`       | web      | Denotes whether this tab item is currently selected in parent `va-tabs`. Note that this value does not need to be passed for component initialization, it will be set via business logic in parent `va-tabs`. |

### va-tab-panel
Internal child component
| Release | Name       | Required | Type      | Default Value | Platform | Description                                                                                                                                                                                                                      |
|---------|------------|----------|-----------|---------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| v1      | `panel-id`  | true     | `string`  | -             | web      | he unique identifier for the tab panel. This should match the `id` referenced by the corresponding `va-tab-item`.                                                                                                                |
| v1      | `selected` | false    | `boolean` | `false`       | web      | Indicates whether the tab panel is currently selected/visible in parent `va-tabs`. Note that this value does not need to be passed for component initialization, it will be set via logic in parent `va-tabs` on initial render. |


## Architecture Overview

### Foundation Approach: Composition

Tab systems are often a pain point for design and development teams, so creating a usable, accessible implementation was priority.

To accomplish this, it will have two internal child components that will allow the tab system to be constructed via slots.

The advantages for constructing the component this way:

- **Modularity and Maintainability:** Breaking down a complex component with repeating elements into smaller, isolated component files will simplify maintenance and will be easier to reason about.
- **Future Expandability and Modifiability:** The modular design will help with integration of new functionalities, making future expansions and modifications more straightforward. This benefits both design system engineers and external teams.
- **Simplified Tabs Construction:** Leveraging native web component functionality, slots handle the heavy lifting, making it easier to build out tab systems. This also allows non-engineers to set up the component in demos or mock-ups easier.
- **Default Use of Vanilla Web Components:** The vanilla web component can be used by default instead of a React binding. Since web component attributes only support primitive data types (string, number, boolean), requiring an array of data would mean passing it into the component using JavaScript outside of a React environment.
- **Increased Usability Outside of vets-website:** The simple web component design makes it easier to integrate into mock-ups in environments like CodePen and other builds outside of the VA ecosystem. This also means that populating data outside of a React environment requires no JavaScript skills, only the use of slots.

One notable compositional decision was to use Stencil's `<Host>` component as the element that receives semantic meaning via HTML attributes, rather than having nested HTML elements (i.e. `<button>`) receive those attributes.

This decision was made because adding attributes directly to `<Host>` results in the web component element having the attributes set on it directly. This is crucial to prevent nested elements from being locked into each child component's Shadow DOM, where they are unable to "find" corresponding elements and/or components in the DOM via their ARIA attributes (i.e. `aria-controls` in the case of `<va-tab-item>`).

Example of composability:
```jsx
<va-tabs label="Filtered content options" initially-selected"0">
  <va-tab-item target-id="panel-1" button-text="Tab 1"></va-tab-item>
  <va-tab-item target-id="panel-2" button-text="Tab 2"></va-tab-item>
  <va-tab-item target-id="panel-3" button-text="Tab 3"></va-tab-item>
  <va-tab-panel panel-id="panel-1">
    <h2>Panel 1</h2>
    <p>This is the content for Panel 1.</p>
  </va-tab-panel>
  <va-tab-panel panel-id="panel-2">
    <h2>Panel 2</h2>
    <p>This is the content for Panel 2.</p>
  </va-tab-panel>
  <va-tab-panel panel-id="panel-2">
    <h2>Panel 2</h2>
    <p>This is the content for Panel 2.</p>
  </va-tab-panel>
  <va-tab-panel panel-id="panel-3">
    <h2>Panel 3</h2>
    <p>This is the content for Panel 3.</p>
  </va-tab-panel>
</va-tabs>
```

![va-tabs with three tabs and panels](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/products/design-system-forms-library/products/components/va-tabs/images/va-tabs-mobile.png)

### Component Blocks Overview
#### Parent Component
`va-tabs`
- Displays a `<div>` with `role="tablist"` that wraps all `<va-tab-item>` instances, styled with a bottom border that serves as a divider between tabs and tab panels.
- Uses named slots for rendering children in place.
- Wraps all content in a `<div>`.
- Has event listeners for `tabItemSelected` and `tabItemKeyNavigated` custom events.

#### Internal Child Components
`va-tab-item`

![va-tab-item](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/products/design-system-forms-library/products/components/va-tabs/images/va-tab-item.png)

- Stencil `<Host>` component with HTML attributes added directly to it.
- Notable attributes for accessibility and semantics:
  - `role="tab"`
  - `aria-selected` - Indicates if the tab item is currently active/selected
  - `aria-controls` - Points to the corresponding `<va-tab-panel>` instance
  - `id` - Reference point for the `aria-labelledby` value in the corresponding `<va-tab-panel>` instance
  - `tabIndex` - Allows the component to be focusable and facilitates keyboard navigation
  - `data-label` - Takes the `buttonText` prop as its value; used to populate the content of the CSS `::after` pseudo element for active tabs
- Emits custom events:
  - `tabItemSelected`
  - `tabItemKeyNavigated`

`va-tab-panel`

![va-tab-panel](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/products/design-system-forms-library/products/components/va-tabs/images/va-tab-panel.png)

- Stencil `<Host>` component with HTML attributes added directly to it.
- Content for panel is rendered via `<slot>` element.
- Notable attributes for accessibility and semantics:
  - `id` - Serves as a "target" for the corresponding `<va-tab-item>` instance; matches the corresponding component's `aria-controls` attribute and is used as query criteria for finding the panel to display or hide in event handling logic
  - `role="tabpanel"`
  - `tabindex` - Allows the component to receive keyboard focus when it is the selected panel
  - `hidden` - Used to hide non-selected panels from the user
  - `aria-labelledby` - Points to the corresponding `<va-tab-item>` instance for accessibility

## Markup Overview

`va-tab`
```jsx
<Host>
  <div>
    <div role="tablist" aria-label={label} class="va-tabs__list">
      <slot name="tab"></slot>
    </div>
    <slot name="panel"></slot>
  </div>
</Host>
```

`va-tab-item`
```jsx
<Host
  role="tab"
  class={buttonClass}
  aria-selected={selected ? 'true' : 'false'}
  aria-controls={targetId}
  id={`${targetId}-tab`}
  ref={(el) => this.buttonElement = el as HTMLButtonElement}
  tabIndex={selected ? 0 : -1}
  onClick={(e: MouseEvent) => this.handleClick(e)}
  onKeyDown={(e: KeyboardEvent) => this.handleKeyDown(e)}
  data-label={buttonText}
>
  {buttonText}
</Host>
```

`va-tab-panel`
```jsx
<Host
  id={panelId}
  role="tabpanel"
  tabindex={this.selected ? '0' : '-1'}
  class="va-tab-panel__content"
  hidden={!this.selected}
  aria-labelledby={`${panelId}-tab`}
>
  <slot></slot>
</Host>
```

## Technical Considerations

### Suggested limit of 3 tabs

At this stage it is recommended for teams to pass no more than three tabs/panels to the component. The component is able to handle more than three but v1's designs and styling do not have an ideal way of handling overflow. This consideration will be accounted for in future updates.

### Click behavior

Clicking or tapping on a tab updates the active (selected) tab and displays the tab panel with the corresponding HTML `id`, while hiding the tab panel that was currently active. This is achieved by updating the `selected` prop on the respective instances of `<va-tab-item>` and `<va-tab-panel>`.

### Keyboard behavior

Keyboard behavior is meant to match that of [the tab group example from MDN](https://developer.mozilla.org/en-US/play).

With focus on an instance of `<va-tab-item>`:
- Right key: Selects and sets focus on the next tab in the list. If the user is on the final tab in the list, the selection reverts to the first tab.
- Left key: Selects and sets focus on the previous tab in the list. If the user is on the first tab in the list, the selection goes to the last tab.
- Enter key/Space key: Sets the currently focused tab as selected and displays the corresponding `<va-tab-panel>` while hiding the previously selected panel.
- Tab key: Sets focus on the currently displayed `<va-tab-panel>` component.

With focus on an instance of `<va-tab-panel>`
- Shift Key + Tab Key: Sets focus on the selected `<va-tab-item>`.


<!-- See the [ADR 001](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md#adr-001-tab-definitions) for a detailed definition list of the tabs.

The challenging part of this component is there are alot of different smaller components being used together. 
1. **Tabs:** The primary container.
2. **Divider:** A visual separator between the tabs and the content below that will extend the entire width of the container.
3. **Tab Item:** These are tab pseudo buttons themselves - web components without nested elements, given semantic meaning via the `role="tab"` attribute.
  - Selected
    - Hover
    - Active
    - Focus 
  - Unselected
    - Hover
    - Active
    - Focus 
4.**Tab Panel** These are the content panels that are shown/hidden depending on the currently selected tab item. They are targeted by their `id` value. They are meant to be generic containers for page content. They are given semantic context via `role="tabpanel"`. -->

## Storybook Stories
- (v1) Basic example with three tabs/panels.
- (v1) Basic example with the second tab initially selected.
- (v1) **Not advised - for DST testing purposes** Example with one tab having a long label that causes text to wrap onto a second line.
- (v1) Example with panels that do not have heading elements.
- (v1) Example with panels whose heading text does not match the text for the corresponding tab item.
- (v1) **Not advised - for DST testing purposes** Example with a fourth tab (v1 has a suggested limit of three tabs).
- (v1) Example with "meaningful content" — that is, content utilizing other VDS components rather than simple heading & paragraph content.
