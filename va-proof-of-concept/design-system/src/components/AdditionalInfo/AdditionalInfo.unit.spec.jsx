import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { axeCheck } from '../../../lib/testing/helpers';

import AdditionalInfo from './AdditionalInfo.jsx';
import ExpandingGroup from '../form/controls/ExpandingGroup/ExpandingGroup';

describe('<AdditionalInfo/>', () => {
  let wrapper;
  // for the sake of more tests could be written
  // declared beforeEach and assigned to wrapper
  beforeEach(() => {
    wrapper = mount(<AdditionalInfo triggerText="test"/>).setState({
      open: true
    });
  });

  it('should render', () => {
    expect(wrapper.text()).to.contain('test');
  });
  it('should pass aXe check', () => {
    return axeCheck(<AdditionalInfo triggerText="test"/>);
  });
  it('renders both children when open is true', () => {
    const first = wrapper.find('ExpandingGroup').props();
    expect(first.open).to.be.true;
    return axeCheck(
      <ExpandingGroup open={first.open}>
        <child1/>
        <child2/>
      </ExpandingGroup>
    );
  });
});
