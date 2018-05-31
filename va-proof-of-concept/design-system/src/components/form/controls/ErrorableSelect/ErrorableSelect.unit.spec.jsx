import React from 'react';
import { mount,  shallow } from 'enzyme';
import chaiAsPromised from 'chai-as-promised';
import chai, { expect } from 'chai';
import { axeCheck } from '../../../../../lib/testing/helpers';

import ErrorableSelect from './ErrorableSelect.jsx';
import { makeField } from '../../../../helpers/fields.js';

chai.use(chaiAsPromised);

describe('<ErrorableSelect>', () => {
  const testValue = makeField('');
  const options = [{ value: 1, label: 'first' }, { value: 2, label: 'second' }];

  it('calls onValueChange with input value', () => {
    let valueChanged;
    // render component with callback that alters valueChanged with passed argument
    const wrapper = mount(<ErrorableSelect
      label="my label"
      options={options}
      value={testValue}
      onValueChange={(value) => { valueChanged = value; }}/>);

    wrapper.find('select').first().simulate('change', { target: { value: 'hello' } });
    expect(valueChanged.value).to.eql('hello');
  });

  it('no error styles when errorMessage undefined', () => {
    const tree = shallow(<ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);

    // No error classes.
    expect(tree.find('.usa-input-error')).to.have.lengthOf(0);
    expect(tree.find('.usa-input-error-label')).to.have.lengthOf(0);
    expect(tree.find('.usa-input-error-message')).to.have.lengthOf(0);

    // Ensure no unnecessary class names on label w/o error.
    const labels = tree.find('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.hasClass('')).to.be.true;

    // No error means no aria-describedby to not confuse screen readers.
    const selects = tree.find('select');
    expect(selects).to.have.lengthOf(1);
    expect(selects.find('aria-describedby')).to.have.lengthOf(0);
  });

  it('should pass aXe check when errorMessage is undefined', () => {
    return axeCheck(<ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);
  });

  it('has error styles when errorMessage is set', () => {
    const tree = shallow(<ErrorableSelect label="my label" options={options} errorMessage="error message" value={testValue} onValueChange={(_update) => {}}/>);

    // Ensure all error classes set.
    expect(tree.find('.usa-input-error')).to.have.lengthOf(1);

    const labels = tree.find('.usa-input-error-label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.text()).to.equal('my label');

    const errorMessages = tree.find('.usa-input-error-message');
    expect(errorMessages).to.have.lengthOf(1);
    expect(errorMessages.text()).to.equal('error message');

    // No error means no aria-describedby to not confuse screen readers.
    const selects = tree.find('select');
    expect(selects).to.have.lengthOf(1);

    const idNum = selects.props().id.split('-')[2];
    expect(selects.prop('aria-describedby')).to.not.be.undefined;
    expect(selects.prop('aria-describedby')).to.equal(`errorable-select-${idNum}-error-message`);
  });

  it('should pass aXe check when errorMessage is set', () => {
    return axeCheck(<ErrorableSelect label="my label" options={options} errorMessage="error message" value={testValue} onValueChange={(_update) => {}}/>);
  });

  it('required=false does not have required asterisk', () => {
    const tree = shallow(<ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);
    expect(tree.find('label').text()).to.equal('my label');
  });

  it('should pass aXe check when it is not required', () => {
    return axeCheck(<ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);
  });

  it('required=true has required asterisk', () => {
    const tree = shallow(<ErrorableSelect label="my label" options={options} required value={testValue} onValueChange={(_update) => {}}/>);
    expect(tree.find('label').text()).to.equal('my label*');
  });

  it('should pass aXe check when it is required', () => {
    return axeCheck(<ErrorableSelect label="my label" options={options} required value={testValue} onValueChange={(_update) => {}}/>);
  });

  it('label attribute propagates', () => {
    const tree = shallow(<ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);

    // Ensure label text is correct.
    const labels = tree.find('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.text()).to.equal('my label');

    // Ensure label htmlFor is attached to select id.
    const selects = tree.find('select');
    const idNum = selects.props().id.split('-')[2];
    expect(selects).to.have.lengthOf(1);
    expect(selects.find('id')).to.not.be.undefined;
    expect(selects.prop('id')).to.equal(`errorable-select-${idNum}`);
  });
});
