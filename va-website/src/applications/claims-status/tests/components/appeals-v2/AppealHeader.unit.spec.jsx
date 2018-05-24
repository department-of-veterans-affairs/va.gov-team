import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AppealHeader from '../../../components/appeals-v2/AppealHeader';

describe('<AppealHeader/>', () => {
  const defaultProps = {
    heading: 'Some heading text',
    lastUpdated: '2018-01-03T09:30:15-05:00',
  };

  const formattedDate = 'Up to date as of January 03, 2018, at 9:30 a.m. (ET)';

  it('renders', () => {
    const wrapper = shallow(<AppealHeader {...defaultProps}/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('renders the heading text passed in as a prop', () => {
    const wrapper = shallow(<AppealHeader {...defaultProps}/>);
    expect(wrapper.find('h1').text()).to.equal(defaultProps.heading);
  });

  it('renders a last updated <p/> with a formatted date and time', () => {
    const wrapper = shallow(<AppealHeader {...defaultProps}/>);
    expect(wrapper.find('p').text()).to.equal(formattedDate);
  });
});
