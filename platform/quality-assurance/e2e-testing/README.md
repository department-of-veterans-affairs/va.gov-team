# End-to-end tests

End-to-end (e2e) tests are tests that run in a browser and test that a user can fill out information and progress through the form. We typically have one e2e test per form, which fills in all the information for that form and submits it to a mock service.

We use [Nightwatch](http://nightwatchjs.org/), which runs on top of Selenium, to write our tests.

Look at an [existing e2e test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/burials/tests/00-all-fields.e2e.spec.js) to get a sense of how they're written.

### Basic e2e steps

1. Set up [Redux dev tools](https://github.com/zalmoxisus/redux-devtools-extension). This will let you pull out some information from your form more easily.
2. Step through your form, filling out all the fields
3. Before submitting, open the Redux dev tools and copy out the form data object into a `schema/maximal-test.json` file in your `tests` folder:

![](Assets/redux_dev.png)

4. Once you've done this, you should be all set to start.

### Example e2e Test

```js
const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts');
const PageHelpers = require('./burial-helpers');
const testData = require('./schema/maximal-test.json');

const runTest = E2eHelpers.createE2eTest(
  (client) => {
    PageHelpers.initApplicationSubmitMock();

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/burials-and-memorials/application/530`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for burial benefits: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow)  // First render of React may be slow.
      .click('.usa-button-primary');

      E2eHelpers.overrideVetsGovApi(client);
      E2eHelpers.overrideSmoothScrolling(client);
      E2eHelpers.expectNavigateAwayFrom(client, '/introduction');
```

Up at the top we're importing some helpers, including `./burial-helpers`, which is where most of the actual testing code lives. In the actual test function, we start up an application submit mock so that we can submit the form at the end. Then we open the form, wait for it to load, and click the Start button. There's also some set up code after that (the last three lines).

Next, we jump into testing the first page of the form:

```js
    // Claimant Information page
    client.waitForElementVisible('input[name="root_claimantFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeClaimantInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/claimant-information');
```

This is largely the same for each page; we check for an element to make sure the page has loaded, we check that the progress bar is at the right point, then we fill out the fields on the page (`PageHelpers.completeClaimantInformation`). After that, we run our accessibility checker and move on to the next page.

In our helpers file, the `completeClaimantInformation` function looks like:

```
function completeClaimantInformation(client, data) {
  client
    .fillName('root_claimantFullName', data.claimantFullName)
    .selectRadio('root_relationship_type', data.relationship.type);

  if (data.relationship.type === 'other') {
    client
      .waitForElementVisible('input[name="root_relationship_other"]', Timeouts.normal)
      .fill('input[name="root_relationship_other"]', data.relationship.other)
      // Not sure what to do with this, exactly, but I'll make it an option.
      .clickIf('#root_relationship_view:isEntity', data.relationship.isEntity);
  }
}
```

You can see that we're using the [Nightwatch API](http://nightwatchjs.org/api) and some [custom helpers](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/nightwatch-commands) to fill in information on the form.

You can follow the above pattern for each page in your form, and then at the end submit:

```js
    // Review and Submit Page.
    client
      .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow)
      .pause(1000)
      .click('input[type="checkbox"]')
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
    client.expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.slow);

    // Submit message
    client.waitForElementVisible('.confirmation-page-title', Timeouts.normal);

    client.axeCheck('.main');

    client.end();
```

Here we're submitting the form on the review page and making sure the page changes to the confirmation page. At this point, you will need to fill out your `initApplicationSubmitMock` function, if you haven't yet. This is so we can simulate a successfull response from the API we're calling:

```js
function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/burial_claims',
    verb: 'post',
    value: {
      data: {
        attributes: {
          regionalOffice: [],
          guid: '1234',
          confirmationNumber: '123fake-submission-id-567',
          submittedAt: '2016-05-16'
        }
      }
    }
  });
  mock(null, {
    path: '/v0/burial_claims/1234',
    verb: 'get',
    value: {
      data: {
        attributes: {
          state: 'success',
        }
      }
    }
  });
}
```

The burial form submission process uses polling, so there are two mocked API responses, but for most forms you'll have just one. Our `mock` helper calls our mock API server and adds a mock response, so that when the form makes a request to the url at the `path` property with the `verb` action, it gets the `value` data back.

### Additonal Resources

- [More about writing end to end tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test)
- [Running tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/test/)
- [Debugging tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/debugging-tests/)
- [Keyboard e2e testing](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/Keyboard_e2e.md)
- [axeCore e2e testing](https://github.com/department-of-veterans-affairs/vets-website/blob/6a27450abed0eb724d9fa0334633ff8ffe700f78/src/platform/testing/e2e/nightwatch-commands/axeCheck.js)
