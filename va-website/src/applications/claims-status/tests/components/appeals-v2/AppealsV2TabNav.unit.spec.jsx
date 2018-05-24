import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import AppealsV2TabNav from '../../../components/appeals-v2/AppealsV2TabNav';

const defaultProps = {
  appealId: '123456',
};

describe('<AppealsV2TabNav/>', () => {
  it('should render', () => {
    const wrapper = shallow(<AppealsV2TabNav {...defaultProps}/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('should render 2 tabs: Status and Detail', () => {
    const wrapper = mount(<AppealsV2TabNav {...defaultProps}/>);
    const tabs = wrapper.find('li.appeals-tabs-item');
    const statusTab = wrapper.findWhere(c => c.type() === 'li' && c.text() === 'Status');
    const detailTab = wrapper.findWhere(c => c.type() === 'li' && c.text() === 'Issues');
    expect(tabs.length).to.equal(2);
    expect(statusTab.length).to.equal(1);
    expect(detailTab.length).to.equal(1);
  });
});
