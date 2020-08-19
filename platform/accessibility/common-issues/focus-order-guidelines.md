# Focus order guidelines

We build a lot of rich interet applications (RIA) using React, for VA.gov. We often update routes using client-side technology, add and remove HTML fragments, and update interfaces without making page requests to a server.

This is a common issue that can be solved with human-centered design and a collaborative effort among design, front-end engineering, and accessibility.

These type of client-side changes require us to think about focus order. 

- What elements can receive keyboard focus when users press the `TAB` key or the `SHIFT + TAB` chord?
- Are there non-focusable elements that we want to receive keyboard focus?
- Are there elements that need to receive focus when a dynamic event like a data fetch is completed?

## [508-defect-2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-2)
**Focus order MUST be visually and programmatically usable**

Applications must have elements that receive [focus in an order that preserves meaning and usability](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) for sighted, keyboard, and assistive technology users. All users should be able to determine where their keyboard focus is quickly, and understand when that focus changes based on changes in the user interface.

## Acceptance criteria

- [ ] As a visual, keyboard, or screen reader user, I want to understand the focus order and navigate your web application successfully.
- [ ] As a screen reader user, I want to hear partial page changes or dynamic updates announced properly
- [ ] As a keyboard user, I want focus to be maintained or reset in a predictable way when a dynamic update occurs

## Environment

* Operating System: all
* Browser: all
* Screenreading device: all
* Server destination: all

## Steps to confirm current focus

1. Enter [URL] in browser (Chrome works well)
1. Right click on the page and click `Inspect` to open Chrome dev tools
1. Click `Console` in the Dev Tools palette
1. Type the following snippet into your console to confirm keyboard focus<br/><br/>
    ```javascript
    document.activeElement
    ```
1. Ensure focus is aligned with design guidance or review with your accessibility specialist

## Possible approaches for managing focus
There are two situations where adding a `tabindex` attribute is preferable: When you need to set focus with JavaScript, or when you need to add a non-focusable element to the document focus order.

### Setting focus with JavaScript
Our rich applications often require us to update small sections of the page, or use client-side routing to change views. These are both good candidates for [setting focus with JavaScript](https://github.com/department-of-veterans-affairs/vets-website/blob/f9333cd7f38116943a64d119c866a6e745c9d999/src/platform/utilities/ui/index.js#L17). We do this to help screen readers announce page changes, avoid extra tab stops for keyboard users, and support people with cognitive considerations. Elements that will receive keyboard focus via scripting must have a `tabIndex="-1"` attribute.

```html
<h2 id="first-heading" tabIndex="-1">This heading will receive focus</h2>
```

```javascript
/*
 * This is a simple example of setting focus with our
 * focusElement helper method.
 */
import { focusElement } from 'platform/utilities/ui';

componentDidMount() {
  focusElement(this.props.target);
}
```

### Adding an element to the native focus order
Sometimes it is preferable to add a non-focusable element to the native focus order without JavaScript. By adding a `tabindex="0"` to an element like a `<div>` or `<p>`, that element can receive keyboard focus when a user tabs to it. These are beneficial when we want keyboard and screen reader users to interact with things like information cards, alert boxes, or status updates.

Accessibility specialists might recommend this approach for messages that we don't want users who are navigating by keyboard to miss. This might include a save-in-progress message, or an information box.

```html
<p class="va-alert-box" tabindex="0">This status message will receive keyboard focus now!</p>
```


## WCAG or vendor guidance

* [Focus Order: Understanding SC 2.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
* [Meaningful Sequence: Understanding SC 1.3.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)
