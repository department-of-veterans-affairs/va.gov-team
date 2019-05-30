import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PastEvent from '../../../components/appeals-v2/PastEvent';

describe('<PastEvent', () => {
  const defaultProps = {
    title: 'Test',
    description: 'Some test event',
    liClass: 'class-goes-here',
    date: 'June 01, 2015'
  };

  it('should render an <li/>', () => {
    const wrapper = shallow(<PastEvent {...defaultProps}/>);
    expect(wrapper.type()).to.equal('li');
  });
});
