# Properties / Architecture for Sidenav component 

Figma Designs: [https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/hK3f7fD02KrgWNJ8XNhtVU/VADS-Component-Library?node-id=32602-2395&t=UAwrul7GJ2rhVjKK-0](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/hK3f7fD02KrgWNJ8XNhtVU/VADS-Component-Library?node-id=32602-2395&t=UAwrul7GJ2rhVjKK-0)

## Properties

### va-sidenav

Parent Component

| Release | Name                | Required | Type    | Default Value       | Platform | Description                                                                                                                                  |
|---------|---------------------|----------|---------|---------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| v1      | `header`            | false    | string  | -                   | web      | Header text to display at the top of the side navigation.                                                                                   |
| v2      | `headerLevel`       | false    | number  | 2                   | web      | The header level for the header text                                                                                                         |
| v1      | `sectionName`       | true     | string  | -                   | web      | Used to describe the navigation for screen readers. If the header property is set, that text will be used instead.                          |
| v1      | `iconName`          | false    | string  | -                   | web      | The [icon name](https://design.va.gov/components/icon) for the icon that will display to the left of the header text. A iconBackgroundColor must be set.                        |
| v1      | `iconBackgroundColor` | false  | string  | vads-color-primary  | web      | Adds a circle around the icon with the provided background [color token](https://design.va.gov/foundation/color-palette).                                                                 |
| v2      | `backLinkLabel`     | false    | string  | -                   | web      | The visible text for the back link                                                                                                           |
| v2      | `backLinkHref`      | false    | string  | -                   | web      | The href value for the back link                                                                                                        |


### va-sidenav-item
Internal Child Component

| Release | Name           | Required | Type     | Default Value | Platform | Description                                                                                                                                           |
|---------|----------------|----------|----------|----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| v1      | `label`        | true     | string   | -              | web      | The visible text for the menu item                                                                                                                    |
| v1      | `href`         | true     | string   | -              | web      | The href value for the menu item link                                                                                                                 |
| v1      | `currentPage`  | false    | boolean  | false          | web      | When the sidenav item is the current page. The current page link will have distinct style treatment and use the `#content` hash.                     |
| v1      | `routerLink`   | false    | boolean  | false          | web      | When set, native link routing behavior will be disabled with `preventDefault` and the `vaRouteChange` event will fire.                               |
|         | **Custom Event** |          |          |                |          |                                                                                                                                                       |
| v1      | `vaRouteChange`|          |          |                | web      | Fires when a sidenav anchor link is clicked. This can be leveraged when using a SPA routing library like React Router. `href` and `routerLink` must be set. |

### va-sidenav-submenu
Internal Child Component

| Release | Name           | Required | Type     | Default Value | Platform | Description                                                                                                                                           |
|---------|----------------|----------|----------|----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| v1      | `label`        | true     | string   | -              | web      | The visible category name                                                                                                                             |
| v1      | `href`         | false    | string   | -              | web      | When present, the category name will be a link.                                                                                                       |
| v1      | `routerLink`   | false    | boolean  | false          | web      | When set, native link routing behavior will be disabled with `preventDefault` and the `vaRouteChange` event will fire.                               |
|         | **Custom Event** |          |          |                |          |                                                                                                                                                       |
| v1      | `vaRouteChange`|          |          |                | web      | Fires when a sidenav anchor link is clicked. This can be leveraged when using a SPA routing library like React Router. `href` and `routerLink` must be set. |


### va-sidenav-accordion
Internal Child Component

| Release | Name           | Required | Type     | Default Value | Platform | Description                                                                                                                                           |
|---------|----------------|----------|----------|----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| v2      | `label`        | true     | string   | -              | web      | The visible text for the accordion button                                                                                                                           |
| v2      | `open`         | false    | boolean   | -              | web      | If the accordion menu section is expanded.                                                                                                      |
|         | **Custom Event** |          |          |                |          |                                                                                                                                                       |
| v2      | `vaSidenavItemToggled`|          |          |                | web      | Fires when an accordion section is toggled. Internally used to manage which items are opened or closed. Only one accordion item should be opened at a time. |

## Architecture Overview

### Foundational Approach: Composition

Because a side navigation component could be used in different types of environments/builds and with many different configurations, the implementation should be flexible and easy to use. 

To accomplish this, it will have several internal child components that will allow the menu to be constructed via slots.

The advantages for constructing the component this way:

- **Modularity and Maintainability**: Breaking down a complex component with repeating elements into smaller, isolated component files will simplify maintenance and will be easier to reason about.

- **Future Expandability and Modifiability**: The modular design will help with integration of new functionalities (ie. accordion sections), making future expansions and modifications more straightforward. This benefits both design system engineers and external teams.

- **Simplified Menu Construction**: Leveraging native web component functionality, slots handle the heavy lifting, making it easier to build menus. This also allows non-engineers to set up the component in demos or mock-ups easier.

- **Default Use of Vanilla Web Components**: The vanilla web component can be used by default instead of a React binding. Since web component attributes only support primitive data types (string, number, boolean), requiring an array of data would mean passing it into the component using JavaScript outside of a React environment.

- **Increased Usability Outside of `vets-website`**: The simple web component design makes it easier to integrate into mock-ups in environments like CodePen and other builds outside of the VA ecosystem. This also means that populating data outside of a React environment requires no JavaScript skills, only the use of slots.

Example of composability:

```html
<va-sidenav>
<va-sidenav-item href="#" label="Parent item"></va-sidenav-item>
<va-sidenav-item href="#" label="Parent item"></va-sidenav-item>
<va-sidenav-submenu>
    <va-sidenav-item href="#" label="Child item"></va-sidenav-item>
    <va-sidenav-item href="#" label="Child item with children">
    <va-sidenav-submenu>
        <va-sidenav-item href="#" label="Grandchild item" is-current-page="true"></va-sidenav-item>
        <va-sidenav-item href="#" label="Grandchild item"></va-sidenav-item>
    </va-sidenav-submenu>
    </va-sidenav-item>
</va-sidenav-submenu>
<va-sidenav-item href="#" label="Another parent item"></va-sidenav-item>
</va-sidenav>
```

![Rendered composed components (not our Figma design; just a POC)](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/products/design-system-forms-library/products/components/va-sidenav/images/composition-poc.png)

### Component Blocks Overview
#### Parent Component

`va-sidenav`

![The top of the parent sidenav component with optional header and back link](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/products/design-system-forms-library/products/components/va-sidenav/images/sidenav-poc.png)

- Displays a header (optional) with icon (optional)
- (v2) Displays the “Go to” back link using the `va-link` `back` variation (optional)
- Parent slot for composition of internal child components
- Wraps all slot content with `nav`
- Top and bottom border 

#### Internal Child Components

`va-sidenav-item`

![Four individual va-sidenav-item components with the active page in bold](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/products/design-system-forms-library/products/components/va-sidenav/images/sidenav-item-poc.png)

- Clickable using the anchor link `href`. 
    - We should allow the native click event to handle page navigation.
- Links should also work with React Router if needed though
    See [va-breadcrumbs](https://design.va.gov/storybook/?path=/docs/uswds-va-breadcrumbs--docs#with-router-link-support) as an example


`va-sidenav-submenu`

![va-sidenav-submenu with four va-sidenav-item links](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/products/design-system-forms-library/products/components/va-sidenav/images/sidenav-submenu-poc.png)

- parent item will optionally navigate to the href

`va-sidenav-accordion`

![Accordion section example](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/products/design-system-forms-library/products/components/va-sidenav/images/sidenav-accordion-poc.png)

- Parent item toggles an accordion of sidenav submenus and items
- button element toggles the content 
- Represents a “category”
- Top border

## Markup Overview

The markup that composes the sidebar should try to follow a `nav > ul > li` structure but if there are limitations with web component composability (ie. not possible to have direct `ul > li` descendants), we may need to use a `nav > a` structure instead. See: [MDN nav element examples](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav#examples)

**va-sidenav**

```jsx
<Host>
  <nav aria-label="Pages related to [this section] or [h2]">
    <h2>
      <div class="va-sidenav__icon">
        <va-icon 
          icon-name={iconName}>
        </va-icon>
      </div>
      {header}
    </h2>
    <va-link back text={backLinkLabel} link={backLinkHref}></va-link>
    <div class="va-sidenav">
      <slot></slot>
    </div>
  </nav>
</Host>
```

**va-sidenav-item**

```jsx
<Host>
  <a class="va-sidenav__item-link" aria-current="page" href={href}>{label}></a>
  <slot></slot>
</Host>
```

**va-sidenav-submenu**

```jsx
<Host>
  <nav class="va-sidenav__submenu">
    <slot></slot>
  </nav>
</Host>
```

**va-sidenav-accordion**

```jsx
<Host>
  <nav>
    <button 
      class="va-sidenav__button" 
      aria-expanded="true" 
      aria-controls="accordionmenu">
      <span class="va-sidenav__button-header">First Amendment</span>
    </button>
    <div id="accordionmenu">
      <slot></slot>
    </div>
  </nav>
</Host>
```

## Other Technical Considerations

If multiple accordion sections are being used, only one section should be open at a time. We can manage this by watching for slot changes, or, using an internal custom event in the parent `va-sidenav` component. There we can get all available accordion sections and set the `open` prop similar to how it’s being done for `va-accordion`:

**[va-accordion example](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-accordion/va-accordion.tsx#L125-L130) for getting all accordion sections and setting the open prop**

```js
import { getSlottedNodes } from '../../utils/utils';

getSlottedNodes(this.el, 'va-accordion-item')
    .filter(item => item !== clickedItem)
    .forEach(item => (item as Element).setAttribute('open', 'false'))`
```

**va-sidenav**

```js
// see if we can capture the va-sidenav-accordion toggle like this
<slot onSlotchange={this.handleSlotChange} />

// or, emit a custom event when va-sidenav-accordion is toggled (probably better)

@Listen('vaSidenavItemToggled')
itemToggledHandler(event: CustomEvent) {
 // getSlottedNodes and toggle the open prop
}
```

## Future Considerations

- `va-sidenav-item`: will a navigation link ever need to navigate to an id on the same page? If so, we’ll need to add an additional prop that suppresses the links href with preventDefault and assign an id.

## Storybook Stories
- (v1) Basic example with header + icon and single items
- (v1) “Profile” example with header + icon using multiple items and a submenu section
- (v1) Basic example with single items and router link support example
- (v2) “Hub” example with header + icon, back link, a sub-menu section
- (v2) “Hub” various levels with back link
- (v2) “Facilities” example with back link and multiple items
