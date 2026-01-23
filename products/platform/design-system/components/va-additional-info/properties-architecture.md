
# Requirements

---

Purpose: Define the technical requirements for updating the existing additional info component 

---

## **Component architecture**

* Common name  
  * Additional info  
* Element name  
  * `<va-additional-info>`

## **Architecture overview**

Additional info makes content easier to scan by hiding secondary, contextual information that may not be applicable to all users or situations. It is used to surface plain-language help at the point in the experience where it is most relevant.

This component is **implemented using native HTML `<details>` and `<summary>` elements**, with expand/collapse behavior fully handled by the browser.

Key architectural decisions:

* **Built on native disclosure semantics**  
  * Uses `<details>` for state management (open / closed)  
  * Uses `<summary>` as the interactive trigger  
  * Expand/collapse behavior is **not re-implemented in JavaScript**  
* **Not an accordion**  
  * No grouping behavior  
  * No expectation of heading-level content sections  
  * Intended for short, inline contextual help  
* **Content constraints**  
  * Not intended for form controls, inputs, or complex interactive content  
  * Expanded content should be brief, scannable, and optional  
* **Trigger constraints**  
  * Trigger text should be short, plain-language, and descriptive  
  * The trigger is not a question and does not end in punctuation

This approach intentionally reduces custom logic, improves reliability across assistive technologies, and aligns with platform-native accessibility expectations.

### Related components

* Accordion  
  * Use Accordion instead when content  
    * Warrants a heading  
    * Is part of a series  
    * Is long or structurally complex  
* Alert – Expandable  
  * Preferred over Additional info when the content communicates important or time-sensitive information  
 

### Related patterns/template

* Forms — contextual help associated with a specific question or input  
* Process lists — secondary explanations that would otherwise interrupt the primary flow


### Styles

* [Figma branch link](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/G8NbXDnLJJSiAvHyaDeoxS/VADS-Component-Library?m=auto&node-id=42924-57682&t=SeRZK2Qwt16MF5wi-1)

### Existing implementations with similar functionality

* Widespread usage across VA.gov forms for inline contextual help  
* Often appears immediately after labels, legends, or short instructional text  
  


## **Text content**

| Element | Default value | Notes |
| :---- | :---- | :---- |
| Trigger text (rendered as the summary text that open/closes the disclosure) | None | Provided via the `trigger` prop. Must be short, descriptive, and written as a statement (not a question), with no ending punctuation. |
| Expanded content | None | Slotted content inside `<va-additional-info>`. guidance recommends keeping it brief and scannable (lists as needed), and linking out if the content is long/complex.  |

## **Properties**

| Prop name | Description  | Expected values | Default value |
| :---- | :---- | :---- | :---- |
| trigger | The text to trigger the expansion | String | None |
| ~~`disable-border`~~ | ~~If `true`, left blue border and padding is removed.~~ | ~~boolean~~ | ~~false~~ |
| `disable-analytics` | If `true`, doesn’t fire the analytics CustomEvent used for tracking usage | boolean | false |


## **Slots:**

| Slot name | Description |
| :---- | :---- |
| (default/unnamed) | Content revealed when the `<details>` element is open |

## **Events:**

| Event name | Description |
| :---- | :---- |
| component-library-analytics | Analytics event emitted when the trigger anchor is clicked and `disable-analytics` is not true. |
| resize | Custom event emitted for resize behavior (listed as a component event).  |


**Note:** Expand/collapse state is managed by the browser via the \<details\> element. No custom open/close events are introduced.

### Additional considerations

* Accessibility  
  * \<details\> and \<summary\> provide built-in keyboard interaction, focus handling, and state announcement  
  * No ARIA roles, states, or properties are added to override native semantics  
* Focus behavior  
  * Focus remains on the \<summary\> element when toggling  
  * No programmatic focus movement occurs  
* Do not use for  
  * Error messages  
  * Critical or blocking information  
  * Content that must be read before continuing

## **Example implementation code:**

```html
<va-additional-info trigger="Why we ask for this information">
  <p>
    We use this information to help verify your eligibility.
  </p>
  <p>
    You can still continue if you don’t have it right now.
  </p>
</va-additional-info>
```

## **Example rendered code**

```html
 <details>
  <summary>
    <va-icon class="va-additional-info-icon hydrated"></va-icon>
    <span class="va-additional-info-summary">Why we ask you for this information</span>
  </summary>
  <div class="va-additional-info__text">
    <p>
      We use this information to help verify your eligibility.
    </p>
    <p>
      You can still continue if you don’t have it right now.
    </p>
  </div>
</details>
```

## **Storybook stories**

* Default  


## **Focus management**

* None \- focus stays on the `<summary>` element before and after expansion or collapse

## **Validation**

* None — this component does not represent user input and does not have an error state.

## **Future considerations**

* Consider whether to expose the native `open` attribute as a controlled prop (only if a strong use case emerges)
