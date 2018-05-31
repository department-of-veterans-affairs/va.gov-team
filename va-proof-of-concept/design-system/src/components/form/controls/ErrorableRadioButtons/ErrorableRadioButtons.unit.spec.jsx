import React from 'react';
import { expect } from 'chai';
import {
  shallow,
  mount
} from 'enzyme';
import { axeCheck } from '../../../../../lib/testing/helpers';
import ErrorableRadioButtons from './ErrorableRadioButtons.jsx';
import { makeField } from '../../../../helpers/fields.js';

describe('<ErrorableRadioButtons>', () => {
  const nonExpandingOptions = ['yes', 'no'];
  const allExpandingOptions = [{ value: 'yes', label: 'Yes', additional: 'Yes addtional' }, { value: 'no', label: 'No', additional: 'No additional' }];
  const someExpandingOptions =  ['yes', { value: 'no', label: 'No', additional: 'No additional' }, 'maybe'];

  it('calls onValueChange with value and dirty state', () => {
    let valueChanged;
    // shallowly render component with callback that alters valueChanged with passed argument
    const wrapper = mount(<ErrorableRadioButtons label="test" options={nonExpandingOptions} value={makeField('test')} onValueChange={(value) => {valueChanged = value;}}/>);

    // simulate change event on first input
    wrapper.find('input').first().simulate('change');

    // verify that change event value matches first value in options passed to component
    expect(valueChanged.value).to.eql(nonExpandingOptions[0]);
    expect(valueChanged.dirty).to.eql(true);
  });

  it('renders label htmlFor attribute with correct input id attribute value', () => {
    const wrapper = shallow(<ErrorableRadioButtons label="test" options={nonExpandingOptions} value={makeField('test')} onValueChange={(value) =>  value}/>);

    // gather input id and label for attributes from render component
    const inputIds = wrapper.find('input').map((inputId) => inputId.prop('id'));
    const labelFors = wrapper.find('label').map((labelFor) => labelFor.prop('htmlFor'));

    // assert each input id attribute value matches respective label for attribute value
    inputIds.forEach((inputId, index) => expect(inputId).to.eql(labelFors[index]));
  });

  it('renders a legend tag with the label attribute', () => {
    const labelValue = 'test';
    const wrapper = shallow(<ErrorableRadioButtons label={labelValue} options={nonExpandingOptions} value={makeField('test')} onValueChange={(value) =>  value}/>);

    // assert that legend element was rendered with label value as its text
    const legendText = wrapper.find('legend').text();
    expect(legendText).to.eql(labelValue);
  });

  it('passes aXe check when only non-expanding options are rendered', () => {
    const check = axeCheck(<ErrorableRadioButtons label="test" options={nonExpandingOptions} value={makeField('test')} onValueChange={(value) => value}/>);
    return check;
  });

  it('passes aXe check when only expanding options are rendered', () => {
    const check = axeCheck(<ErrorableRadioButtons label="test" options={allExpandingOptions} value={makeField('test')} onValueChange={(value) => value}/>);
    return check;
  });

  it('passes aXe check when non-expanding and expanding options rendered', () => {
    const check = axeCheck(<ErrorableRadioButtons label="test" options={someExpandingOptions} value={makeField('test')} onValueChange={(value) => value}/>);
    return check;
  });
});
