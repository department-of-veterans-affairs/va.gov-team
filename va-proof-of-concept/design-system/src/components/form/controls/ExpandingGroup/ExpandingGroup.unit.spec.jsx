import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { axeCheck } from '../../../../../lib/testing/helpers';

import ExpandingGroup from './ExpandingGroup.jsx';

describe('<ExpandingGroup>', () => {
  it('renders only first child when open is false', () => {
    const wrapper = shallow(<ExpandingGroup open={false}><first/><second/></ExpandingGroup>);

    const first = wrapper.find('first');
    const second = wrapper.find('second');
    expect(first).to.have.lengthOf(1);
    expect(second).to.have.lengthOf(0);
  });

  it('renders both children when open is true', () => {
    const wrapper = shallow(<ExpandingGroup open><first/><second/></ExpandingGroup>);

    const first = wrapper.find('first');
    const second = wrapper.find('second');
    expect(first).to.have.lengthOf(1);
    expect(second).to.have.lengthOf(1);
  });

  it('passes aXe check when only first child is rendered', () => {
    const check = axeCheck(<ExpandingGroup open={false}><first/><second/></ExpandingGroup>);
    return check;
  });

  it('passes aXe check when both children are rendered', () => {
    const check = axeCheck(<ExpandingGroup open><first/><second/></ExpandingGroup>);
    return check;
  });
});
