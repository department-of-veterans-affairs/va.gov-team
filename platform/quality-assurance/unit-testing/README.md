# Unit Testing

## Unit tests

Write unit tests as you build to make sure your form (or other component) is behaving as you expect and to help guard against future bugs. Your test files should go in a `tests` folder in your application folder. 

We typically follow a pattern of creating a unit test file for each page in a form and testing the following scenarios:

- That the correct number of inputs show up when you render the page
- That the correct number of fields display validation errors if you submit without entering any information
- That any conditional logic on the page displays under the correct conditions

## Example Unit Test

We have some helper utilities to make writing tests a little bit easier. The following example illustrates some of these helpers.

This unit test lives at `src/applications/vic-v2/tests/config/veteranInformation.unit.spec.jsx`

```js
import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio, fillDate } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../config/form.js';

describe('VIC veteran information', () => {
  const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.veteranInformation;
  it('should render', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data=\{{}}
        uiSchema={uiSchema}
        />
    );

    expect(form.find('input').length).to.equal(7);
    expect(form.find('select').length).to.equal(4);
  });

  ...
});
```

At the top, we've done some basic test set up and imported some helpers from `schemaform-utils.jsx`. The most important item in that list is `DefinitionTester`, which is a component we use to simulate a page being rendered (without having to set up a whole form application with all the dependencies).

We write unit tests with [Enzyme](http://airbnb.io/enzyme/) and mount a `DefinitionTester` component that is passed in the schema information from our `veteranInformation` page as props. Then, we check to make sure that we have 7 `input`s and 4 `select`s on the page. When there are errors with definitions on our form pages, you will often see inputs not being rendered, so this helps check for that scenario.

It's also worth nothing that these aren't strictly "unit" tests. They're better described as integration tests that may execute multiple components and functions in our forms code. However, we run them using the same stack as our unit tests, so we generally refer to them as such.

The next test in the file checks to see that we have the right fields marked as required:

```js
  it('should not submit without required info', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}
        />
    );

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(6);
    expect(onSubmit.called).to.be.false;
  });
```

In this test, we simulate a form submission, then count the number of error elements on the page, which is expected to be 6. This way we can make sure our existing validation rules are still generally in place and that we haven't accidentally added another one.

Finally in this file we fill in all the data and submit:

```js
  it('should submit with all info filled in', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data=\{{}}
        uiSchema={uiSchema}
        />
    );

    fillData(form, 'input#root_veteranFullName_first', 'test');
    fillData(form, 'input#root_veteranFullName_last', 'test2');
    fillData(form, 'input#root_veteranSocialSecurityNumber', '233224343');
    selectRadio(form, 'root_gender', 'F');
    fillDate(form, 'root_veteranDateOfBirth', '1920-01-04');
    fillData(form, 'select#root_serviceBranch', 'F');
    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
```

We have some helper functions that will make the right Enzyme calls to fill in data for us, so we don't have a lot of repeated code. Those helpers are documented in the `schemaform-utils.jsx` file. And you can see at the end we check that no errors are displayed and that our `onSubmit` prop was called, which will only happen if our data passed all of the page's validation rules.

Now that you've see these three tests, you should be able to get started writing your own tests. Testing conditional logic works as you might expect, where we use our helpers to fill in data, then check to see that the right number of inputs appear in the page after that change. Some of our tests also directly test logic in `depends` functions on the page config, since that will often not get tested elsewhere.
