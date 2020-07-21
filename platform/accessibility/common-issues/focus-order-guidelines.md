# [KEYBOARD]: Focus order MUST be visually and programmatically usable

## [508-defect-2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-2)
TODO: Write a new defect critera 

## Acceptance Criteria

- [ ] As a visual, keyboard, or screen reader user, I want to understand the focus order and navigate your web application successfully.
- [ ] As a screen reader user, I want to hear partial page changes or dynamic updates announced properly
- [ ] As a keyboard user, I want focus to be maintained or reset in a predictable way when a dynamic update occurs

## Environment

* Operating System: all
* Browser: all
* Screenreading device: all
* Server destination: all

## Steps to Confirm Current Focus

1. Enter [URL] in browser (Chrome works well)
1. Right click on the page and click `Inspect` to open Chrome dev tools
1. Click `Console` in the Dev Tools palette
1. Type the following snippet into your console to confirm keyboard focus
    ```javascript
    document.activeElement
    ```
1. Ensure focus is in line with design guidance or review with your accessibility specialist

## Possible Fixes (optional)
There are two situations where adding a `tabindex` attribute is preferable: When you need to set focus with JavaScript, or when you need to add a non-focusable element to the document focus order.

### Setting focus with JavaScript
Our rich applications often require us to update small sections of the page, or use client-side routing to change views. These are both good candidates for setting focus with JavaScript. We do this to help screen readers understand that something has changed on the page, and to avoid extra tab stops for keyboard users. Elements that will receive keyboard focus via scripting must have a `tabIndex="-1"` attribute.

```html
<h2 id="first-heading" tabIndex="-1">This heading will receive focus</h2>
```

```javascript
/*
 * This is a simple DOM example of setting focus through scripting.
 * React applications will usually use the componentDidMount()
 * lifecycle method or useEffect hooks to accomplish this task.
 */
const target = document.getElementById('first-heading');
target.focus();
```

### Adding an element to the native focus order
Sometimes it is preferable to add a non-focusable element to the native focus order without JavaScript. By adding a `tabindex="0"` to an element like a `<div>` or `<p>`, that element can receive keyboard focus when a user tabs to it. These are beneficial when we want keyboard and screen reader users to interact with things like information cards, alert boxes, or status updates.

```html
<p class="va-alert-box" tabindex="0">This status message will receive keyboard focus now!</p>
```


## WCAG or Vendor Guidance (optional)

* [Focus Order: Understanding SC 2.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
* [Meaningful Sequence: Understanding SC 1.3.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)
