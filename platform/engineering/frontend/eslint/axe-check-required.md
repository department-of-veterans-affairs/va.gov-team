# ESLint: `axe-check-required` rule

VSP engineering has shipped a custom ESLint rule: [`axe-check-required`](https://github.com/department-of-veterans-affairs/vets-website/pull/12667). The `axe-check-required` rule will warn you if your end-to-end (e2e) tests do not include at least one `axeCheck` accessibilty scan.

The `axe-check-required` rule looks for the [`axeCheck()` method](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) in Nightwatch end-to-end tests, and will throw if it does not find at least one per e2e test.

![ESLint warning message on the user terminal](https://user-images.githubusercontent.com/934879/82089161-b733de00-96b8-11ea-88a7-6558a4dbfdf6.jpg)

## Adding `axeCheck` to Nightwatch e2e tests

So the `axe-check-required` rule has thrown a warning — your end-to-end test doesn't have an accessibility scan. Not to worry, we can add `axeCheck` in just a few lines of code, and remove that ESLint warning.

**`axeCheck` method arguments**

Generally you will call `axeCheck` by passing a CSS selector as the first argument, and ignoring the second argument. `axeCheck` reviews [Section 508, WCAG 2 Level A, and WCAG 2 Level AA](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-20-level-a--aa-rules) rulesets by default. Please consult with your VSA/VSP accessibility specialist before overriding the default rulesets.

```javascript
@param  {string} context The selector to run the axe check against
@param  {object} [config] Additional axe configuration options
```

---

**Add a default `axeCheck` to TEST_NAME.e2e.spec.js**

```javascript
/**
 * Many of our React applications use a class "main" for their entry point.
 * This is often the best place to add an axeCheck because it keeps the scan
 * focused on your application code and not the full page.
 */
client.axeCheck('.unique-class-name');
```

---

**Add a Section 508 `axeCheck` to TEST_NAME.e2e.spec.js** 

_(Please review with your accessibility specialist.)_

```javascript
client.axeCheck('.unique-class-name', rules: ['section508'] });
```

## Nightwatch `axeCheck` errors

If `axeCheck` finds an accessibility error, it will appear on your terminal in the format below. This information is intended to help you find the elements that are causing the issue, determine the severity of the issue, and learn more about how to correct it.

```javascript
1. Failed [fail]: ([n/a]: [serious] Elements must have sufficient color contrast
2.   See https://dequeuniversity.com/rules/axe/2.6/color-contrast?application=axeAPI
3.
4.   <h1 tabindex="-1" style="color: rgb(153, 153, 153);">DODGE CITY COMMUNITY COLLEGE</h1>
5.   .usa-width-two-thirds.medium-8 > h1)
```

* Line 1 identifies a failed test and the **[severity]** of the accessibility issue. In this example, the error is `Elements must have sufficient color contrast`. This is a **serious** issue.
* Line 2 contains a URL to Deque University. This site documents accessibility issues detected by the Axe plugin and how to fix them.
* Line 4 outputs a string of the DOM element containing the violation.
