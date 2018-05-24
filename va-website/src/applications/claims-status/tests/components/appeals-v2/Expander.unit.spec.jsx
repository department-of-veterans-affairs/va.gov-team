import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Expander from '../../../components/appeals-v2/Expander';

describe('<Expander/>', () => {
  const defaultProps = {
    dateRange: 'June 5, 1985 - July 29, 2017',
    onToggle: () => {},
    cssClass: 'section-unexpanded',
    expanded: false,
    missingEvents: false
  };

  it('should render as an <li/>', () => {
    const wrapper = shallow(<Expander {...defaultProps}/>);
    expect(wrapper.type()).to.equal('li');
  });

  it('should render a button that calls onToggle prop when clicked', () => {
    const toggleSpy = sinon.spy();
    const props = {
      ...defaultProps,
      onToggle: toggleSpy
    };
    const wrapper = shallow(<Expander {...props}/>);
    const toggleButton = wrapper.find('button');
    toggleButton.simulate('click');
    expect(toggleSpy.calledOnce).to.be.true;
  });

  it('should render the correct expanded attributes', () => {
    const props = {
      ...defaultProps,
      expanded: true
    };
    const wrapper = shallow(<Expander {...props}/>);
    expect(wrapper.find('h3').first().text()).to.equal('Hide past events');
    expect(wrapper.find('.section-expanded').exists()).to.be.true;
  });

  it('should render the correct unexpanded attributes', () => {
    const wrapper = shallow(<Expander {...defaultProps}/>);
    expect(wrapper.find('h3').first().text()).to.equal('See past events');
    expect(wrapper.find('.section-unexpanded').exists()).to.be.true;
  });

  it('should render the missing events alert', () => {
    const props = {
      ...defaultProps,
      missingEvents: true,
      expanded: true
    };
    const wrapper = shallow(<Expander {...props}/>);
    expect(wrapper.find('.usa-alert').exists()).to.be.true;
  });

  it('should not render the missing events alert when there are no missing events', () => {
    const props = {
      ...defaultProps,
      expanded: true
    };
    const wrapper = shallow(<Expander {...props}/>);
    expect(wrapper.find('.usa-alert').exists()).to.be.false;
  });
});
