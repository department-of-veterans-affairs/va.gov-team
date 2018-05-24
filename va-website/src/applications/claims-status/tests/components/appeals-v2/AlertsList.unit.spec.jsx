import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AlertsList from '../../../components/appeals-v2/AlertsList';
import { mockData } from '../../../utils/helpers';

const defaultProps = {
  alerts: mockData.data[0].attributes.alerts
};

describe('<AlertsList/>', () => {
  it('renders', () => {
    const wrapper = shallow(<AlertsList {...defaultProps}/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('should render all alerts', () => {
    const wrapper = shallow(<AlertsList {...defaultProps}/>);
    const alertsList = wrapper.find('Alert');
    expect(alertsList.length).to.equal(defaultProps.alerts.length);
  });

  it('should return null if alerts prop missing', () => {
    const wrapper = shallow(<AlertsList/>);
    expect(wrapper.type()).to.equal(null);
  });

  it('should return null if alerts array empty', () => {
    const props = { alerts: [] };
    const wrapper = shallow(<AlertsList {...props}/>);
    expect(wrapper.type()).to.equal(null);
  });
});
