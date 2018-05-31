import React from 'react';
import { shallow } from 'enzyme';
import { axeCheck } from '../../../../../lib/testing/helpers';
import chaiAsPromised from 'chai-as-promised';
import chai, { expect } from 'chai';

import { makeField } from '../../../../helpers/fields.js';

import ReactTestUtils from 'react-dom/test-utils';
import ErrorableNumberInput from './ErrorableNumberInput';

chai.use(chaiAsPromised);

describe('<ErrorableNumberInput>', () => {
  const testValue = makeField('');

  it('ensure value changes propagate', () => {
    let errorableInput;

    const updatePromise = new Promise((resolve, _reject) => {
      errorableInput = ReactTestUtils.renderIntoDocument(
        <ErrorableNumberInput field={testValue} label="test" onValueChange={(update) => { resolve(update); }}/>
      );
    });

    const input = ReactTestUtils.findRenderedDOMComponentWithTag(errorableInput, 'input');
    input.value = '1';
    ReactTestUtils.Simulate.change(input);

    return expect(updatePromise).to.eventually.eql(makeField('1', false));
  });

  it('ensure blur makes field dirty', () => {
    let errorableInput;

    const updatePromise = new Promise((resolve, _reject) => {
      errorableInput = ReactTestUtils.renderIntoDocument(
        <ErrorableNumberInput field={testValue} label="test" onValueChange={(update) => { resolve(update); }}/>
      );
    });

    const input = ReactTestUtils.findRenderedDOMComponentWithTag(errorableInput, 'input');
    ReactTestUtils.Simulate.blur(input);

    return expect(updatePromise).to.eventually.eql(makeField('', true));
  });

  it('no error styles when errorMessage undefined', () => {
    const tree = shallow(
      <ErrorableNumberInput field={testValue} label="my label" onValueChange={(_update) => {}}/>);

    // No error classes.
    expect(tree.find('.usa-input-error')).to.have.lengthOf(0);
    expect(tree.find('.usa-input-error-label')).to.have.lengthOf(0);
    expect(tree.find('.usa-input-error-message')).to.have.lengthOf(0);

    // Ensure no unnecessary class names on label w/o error..
    const labels = tree.find('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.hasClass('foo')).to.be.false;

    // No error means no aria-describedby to not confuse screen readers.
    const inputs = tree.find('input');
    expect(inputs).to.have.lengthOf(1);
    expect(inputs.prop('aria-describedby')).to.be.undefined;
  });

  it('has error styles when errorMessage is set', () => {
    const tree = shallow(
      <ErrorableNumberInput field={testValue} label="my label" errorMessage="error message" onValueChange={(_update) => {}}/>);

    // Ensure all error classes set.
    expect(tree.find('.usa-input-error')).to.have.lengthOf(1);

    const labels = tree.find('.usa-input-error-label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.text()).to.equal('my label');

    const errorMessages = tree.find('.usa-input-error-message');
    expect(errorMessages).to.have.lengthOf(1);
    expect(errorMessages.text()).to.equal('Error error message');

    // No error means no aria-describedby to not confuse screen readers.
    const inputs = tree.find('input');
    expect(inputs).to.have.lengthOf(1);
    expect(inputs.prop('aria-describedby')).to.not.be.undefined;
    expect(inputs.prop('aria-describedby')).to.equal(errorMessages.prop('id'));
  });

  it('required=false does not have required asterisk', () => {
    const tree = shallow(
      <ErrorableNumberInput field={testValue} label="my label" onValueChange={(_update) => {}}/>);
    expect(tree.find('label').text()).to.equal('my label');
  });

  it('required=true has required asterisk', () => {
    const tree = shallow(
      <ErrorableNumberInput field={testValue} label="my label" required onValueChange={(_update) => {}}/>);

    const label = tree.find('label');
    expect(label.text()).to.equal('my label*');
  });

  it('label attribute propagates', () => {
    const tree = shallow(
      <ErrorableNumberInput field={testValue} label="my label" onValueChange={(_update) => {}}/>);

    // Ensure label text is correct.
    const labels = tree.find('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.text()).to.equal('my label');

    // Ensure label htmlFor is attached to input id.
    const inputs = tree.find('input');
    expect(inputs).to.have.lengthOf(1);
    expect(inputs.prop('id')).to.not.be.undefined;
    expect(inputs.prop('id')).to.equal(labels.prop('htmlFor'));
  });

  it('passes aXe check', () => {
    const check = axeCheck(<ErrorableNumberInput field={testValue} label="my label" onValueChange={(_update) => {}}/>);
    return check;
  });
});
