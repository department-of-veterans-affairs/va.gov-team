# Liquid Template Unit Testing Framework

The Liquid Template Unit Testing Framework was created to replace Cypress for unit testing the logic in `liquid` templates because Cypress is slow, heavy, and is overkill for this purpose. More importantly, this framework provides us with total control over the test data which is critical for testing `liquid` templates, something that Cypress does not provide. For example, a you can test a given `liquid` template against any number of fixtures that represent different enteries into the Drupal CMS, so bugs in `liquid` templates can be discovered more quickly.

**Please note**: End-to-end (e2e) tests on VA.gov use Cypress; Cypress has NOT been replaced by this tool.

## How to Use the Framework
To test a `liquid` template, use the `parseFixture` and `renderHTML` functions in `~/src/site/tests/support/`.

`parseFixture` takes a json fixtures path and returns a `JavaScript` object.

`renderHTML` takes a liquid template path and the `JavaScript` object returned by `parseFixture`, and renders an HTML document by populating the liquid template with the JSON provided. We can then run the usual mocha assertions on the result. This function uses the same code as our build process, so all of our custom liquid filters can be used.

This technique can be used to generate tests of varying complexity, ranging from simple rendering sanity checks to complex logic. Since we control the JSON test data, we can easily test different scenarios.

## Sample Test
Here is a sample test:

```js
const layoutPath = 'src/site/layouts/landing_page.drupal.liquid';

describe('intro', () => {
  describe('no fieldTitleIcon', () => {
    const data = parseFixture(
      'src/site/layouts/tests/landing_page/fixtures/landing_page.json',
    );

    it('renders elements with expected values', async () => {
      const container = await renderHTML(layoutPath, data);
      expect(container.querySelector('h1').innerHTML).to.equal(data.title);
      expect(container.querySelector('.va-introtext p').innerHTML).to.equal(
        data.fieldIntroText,
      );
      expect(
        container.querySelector('i.icon-large.white.hub-icon-foo'),
      ).to.equal(null);
    });
  });
});
```

## Sample Spec Files
Here are several example spec files:
- [src/site/layouts/tests/landing_page/landing_page.unit.spec.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/layouts/tests/landing_page/landing_page.unit.spec.js)
- [src/site/layouts/tests/vamc/health_care_region_page.unit.spec.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/layouts/tests/vamc/health_care_region_page.unit.spec.js)

## Rendered `html` Is Saved to Disk
For convenience, the `html` that's generated from each `liquid` template is automatically saved to `src/site/tests/html` when tests are executed so the `html` can be inspected when writing tests. These files are gitignored.

