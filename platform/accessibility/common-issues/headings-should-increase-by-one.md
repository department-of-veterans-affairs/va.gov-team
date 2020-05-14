# [AXE-CORE]: Heading levels SHOULD increase by one

## [508-defect-2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-2)

## Acceptance Criteria

As a screen reader user, I want to navigate the hierarchy of the page content using heading levels to save time and frustration.

## Environment

- Operating System: all
- Browser: all
- Screenreading device: any
- Server destination: staging & production

## Steps to Recreate

1. Enter [URL] in browser
2. Have developer tools open, and the axe browser extension loaded
3. Run an axe audit
4. Verify that [heading code] is called out as an error of "Heading levels should only increase by one"
5. This error is repeated throughout the form process

## Possible Fixes (optional)

### Sample 

**Current code**
```html
<h4 class="review-card--title vads-u-display--inline vads-u-margin--0">Permanent address</h4>
```

**Recommended code**
```html
<h3 class="review-card--title vads-u-display--inline vads-u-margin--0 vads-u-font-size--h4">Permanent address</h3>
```


## WCAG or Vendor Guidance (optional)

* [axe-core 3.4 - Heading levels should only increase by one](https://dequeuniversity.com/rules/axe/3.4/heading-order)

