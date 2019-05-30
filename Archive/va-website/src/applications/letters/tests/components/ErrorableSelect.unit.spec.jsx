import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import chaiAsPromised from 'chai-as-promised';
import chai, { expect } from 'chai';

import ErrorableSelect from '../../components/ErrorableSelect';

chai.use(chaiAsPromised);

describe('<ErrorableSelect>', () => {
  const testValue = '';
  const options = [{ value: 1, label: 'first' }, { value: 2, label: 'second' }];

  it('ensure value changes propagate', () => {
    let errorableSelect;

    const updatePromise = new Promise((resolve, _reject) => {
      errorableSelect = ReactTestUtils.renderIntoDocument(
        <ErrorableSelect label="test" options={options} value={testValue} onValueChange={(update) => { resolve(update); }}/>
      );
    });

    const select = ReactTestUtils.findRenderedDOMComponentWithTag(errorableSelect, 'select');
    select.value = 1;
    ReactTestUtils.Simulate.change(select);

    return expect(updatePromise).to.eventually.eql('1');
  });

  it('no error styles when errorMessage undefined', () => {
    const tree = SkinDeep.shallowRender(
      <ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);

    // No error classes.
    expect(tree.everySubTree('.usa-input-error')).to.have.lengthOf(0);
    expect(tree.everySubTree('.usa-input-error-label')).to.have.lengthOf(0);
    expect(tree.everySubTree('.usa-input-error-message')).to.have.lengthOf(0);

    // Ensure no unnecessary class names on label w/o error..
    const labels = tree.everySubTree('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels[0].props.className).to.be.undefined;

    // No error means no aria-describedby to not confuse screen readers.
    const selects = tree.everySubTree('select');
    expect(selects).to.have.lengthOf(1);
    expect(selects[0].props['aria-describedby']).to.be.undefined;
  });

  it('has error styles when errorMessage is set', () => {
    const tree = SkinDeep.shallowRender(
      <ErrorableSelect label="my label" options={options} errorMessage="error message" value={testValue} onValueChange={(_update) => {}}/>);

    // Ensure all error classes set.
    expect(tree.everySubTree('.usa-input-error')).to.have.lengthOf(1);

    const labels = tree.everySubTree('.usa-input-error-label');
    expect(labels).to.have.lengthOf(1);
    expect(labels[0].text()).to.equal('my label');

    const errorMessages = tree.everySubTree('.usa-input-error-message');
    expect(errorMessages).to.have.lengthOf(1);
    expect(errorMessages[0].text()).to.equal('Error error message');

    // If there's an error, we should have a describedby for screen readers
    const selects = tree.everySubTree('select');
    expect(selects).to.have.lengthOf(1);
    expect(selects[0].props['aria-describedby']).to.not.be.undefined;
    expect(selects[0].props['aria-describedby']).to.equal(errorMessages[0].props.id);
  });

  it('required=false does not have required asterisk', () => {
    const tree = SkinDeep.shallowRender(
      <ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);

    expect(tree.everySubTree('label')[0].text()).to.equal('my label');
  });

  it('required=true has required asterisk', () => {
    const tree = SkinDeep.shallowRender(
      <ErrorableSelect label="my label" options={options} required value={testValue} onValueChange={(_update) => {}}/>);

    const label = tree.everySubTree('label');
    expect(label[0].text()).to.equal('my label*');
  });

  it('label attribute propagates', () => {
    const tree = SkinDeep.shallowRender(
      <ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);

    // Ensure label text is correct.
    const labels = tree.everySubTree('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels[0].text()).to.equal('my label');

    // Ensure label htmlFor is attached to select id.
    const selects = tree.everySubTree('select');
    expect(selects).to.have.lengthOf(1);
    expect(selects[0].props.id).to.not.be.undefined;
    expect(selects[0].props.id).to.equal(labels[0].props.htmlFor);
  });
});
