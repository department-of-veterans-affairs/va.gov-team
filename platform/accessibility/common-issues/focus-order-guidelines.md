# [KEYBOARD]: Focus order MUST be visually and programmatically usable

## TODO: Add a defect criteria for improper focus order

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
1. Type the following snippet to confirm current focused element
```javascript
document.activeElement
```

## Possible Fixes (optional)

TODO: Add the information about tab index 0 and -1


## WCAG or Vendor Guidance (optional)

* [Focus Order: Understanding SC 2.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
