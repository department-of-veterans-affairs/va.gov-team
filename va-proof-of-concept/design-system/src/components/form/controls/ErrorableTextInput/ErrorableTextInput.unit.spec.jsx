import React from 'react';
import {
  shallow,
  mount
} from 'enzyme';
import { axeCheck } from '../../../../../lib/testing/helpers';
import { expect } from 'chai';
import ErrorableTextInput from './ErrorableTextInput.jsx';
import { makeField } from '../../../../helpers/fields.js';

describe('<ErrorableTextInput>', () => {
  it('calls onValueChange with input value and dirty state', () => {
    let valueChanged;
    // shallowly render component with callback that alters valueChanged with passed argument
    const wrapper = mount(<ErrorableTextInput
      field={makeField('')}
      label="test"
      onValueChange={(value) => { valueChanged = value; }}/>);

    wrapper.find('input').first().simulate('change', { target: { value: 'hello' } });
    expect(valueChanged.value).to.eql('hello');
    expect(valueChanged.dirty).to.eql(false);
  });

  it('calls onValueChange with dirty state on blur', () => {
    let valueChanged;
    // shallowly render component with callback that alters valueChanged with passed argument
    const wrapper = mount(<ErrorableTextInput
      field={makeField('')}
      label="test"
      onValueChange={(value) => { valueChanged = value; }}/>);

    wrapper.find('input').first().simulate('blur');
    expect(valueChanged.dirty).to.eql(true);
  });

  it('renders a label and a placeholder', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      placeholder="Placeholder"
      onValueChange={(value) => value}/>);

    const label = wrapper.find('label');
    const input = wrapper.find('input');

    expect(label.first().text()).to.eql('test');
    expect(input.first().prop('placeholder')).to.eql('Placeholder');

  });

  it('renders error styling when errorMessage attribute is present', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      errorMessage="errorMessage"
      onValueChange={(value) => value}/>);

    const errorStyles = [
      '.usa-input-error-label',
      '.usa-input-error',
      '.usa-input-error-message'
    ];
    // assert that each error style corresponds to one component
    errorStyles.forEach((style) =>
      expect(wrapper.find(style)).to.have.lengthOf(1));
  });

  it('renders aria-describedby attribute when errorMessage attribute is present', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      errorMessage="errorMessage"
      onValueChange={(value) => value}/>);

    const input = wrapper.find('input');
    const errorMessageId = wrapper.find('.usa-input-error-message').first().prop('id');
    expect(input.prop('aria-describedby')).to.eql(errorMessageId);
  });

  it('renders an error message when errorMessage attribute is present', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      errorMessage="errorMessage"
      onValueChange={(value) => value}/>);

    const errorMessage = wrapper.find('.usa-input-error-message');
    expect(errorMessage).to.have.lengthOf(1);
    expect(errorMessage.text()).to.eql('Error errorMessage');
  });

  it('renders no error styling when errorMessage attribute is not present', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      onValueChange={(value) => value}/>);

    const errorStyles = [
      '.usa-input-error-label',
      '.usa-input-error',
      '.usa-input-error-message'
    ];
    // assert that each error style corresponds to one component
    errorStyles.forEach((style) =>
      expect(wrapper.find(style)).to.have.lengthOf(0));
  });

  it('renders no aria-describedby attribute when errorMessage attribute is not present', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      onValueChange={(value) => value}/>);

    expect(wrapper.find('input').prop('aria-describedby')).to.not.exist;
  });

  it('renders no error message when errorMessage attribute is not present', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      onValueChange={(value) => value}/>);

    expect(wrapper.find('.usa-input-error-message')).to.have.lengthOf(0);
  });

  it('renders a required asterisk when required is true', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      required
      onValueChange={(value) => value}/>);

    expect(wrapper.find('label').text()).to.eql('test*');
  });

  it('renders no required asterisk when required is false', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      onValueChange={(value) => value}/>);

    expect(wrapper.find('label').text()).to.eql('test');
  });

  it('renders the input id as label\'s for attribute value', () => {
    const wrapper = shallow(<ErrorableTextInput
      field={makeField('')}
      label="test"
      onValueChange={(value) => value}/>);

    const inputId = wrapper.find('input').first().prop('id');
    const labelFor = wrapper.find('label').first().prop('htmlFor');
    expect(inputId).to.eql(labelFor);
  });

  it('passes aXe check when no error present', () => {
    const check = axeCheck(<ErrorableTextInput
      field={makeField('')}
      label="test"
      placeholder="Placeholder"
      onValueChange={(value) => value}/>);

    return check;
  });

  it('passes aXe check when error present', () => {
    const check = axeCheck(<ErrorableTextInput
      field={makeField('')}
      label="test"
      placeholder="Placeholder"
      errorMessage="error"
      onValueChange={(value) => value}/>);

    return check;
  });
});
