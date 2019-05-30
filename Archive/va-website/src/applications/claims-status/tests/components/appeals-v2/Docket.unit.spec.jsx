import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Docket from '../../../components/appeals-v2/Docket';
import { APPEAL_TYPES } from '../../../utils/appeals-v2-helpers';


describe('Appeals V2 Docket', () => {
  const defaultProps = {
    total: 123456,
    ahead: 23456,
    form9Date: '2006-10-24',
    docketMonth: '2004-04-15',
    appealType: APPEAL_TYPES.original,
    aod: false,
    frontOfDocket: false
  };

  it('should render', () => {
    const wrapper = shallow(<Docket {...defaultProps}/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('should display frontOfDocket text', () => {
    const props = { ...defaultProps, frontOfDocket: true };
    const wrapper = shallow(<Docket {...props}/>);
    expect(wrapper.text()).to.contain('The Board is currently reviewing appeals from');
  });

  it('should display non-frontOfDocket text', () => {
    const wrapper = shallow(<Docket {...defaultProps}/>);
    expect(wrapper.text()).to.contain('appeals on the docket, not including Advanced on Docket');
  });

  it('should render DocketCard', () => {
    const wrapper = shallow(<Docket {...defaultProps}/>);
    expect(wrapper.find('DocketCard').length).to.equal(1);
  });

  it('should not render DocketCard for aod', () => {
    const props = { ...defaultProps, aod: true };
    const wrapper = shallow(<Docket {...props}/>);
    expect(wrapper.find('DocketCard').length).to.equal(0);
  });

  it('should not render DocketCard for postCavcRemand', () => {
    const props = { ...defaultProps, appealType: APPEAL_TYPES.postCavcRemand };
    const wrapper = shallow(<Docket {...props}/>);
    expect(wrapper.find('DocketCard').length).to.equal(0);
  });

  it('should render aod when both aod and appeal type postCavcRemand', () => {
    const props = { ...defaultProps, appealType: APPEAL_TYPES.postCavcRemand, aod: true };
    const wrapper = shallow(<Docket {...props}/>);
    expect(wrapper.render().text()).to.contain('Your appeal is Advanced on Docket.');
  });

  it('should display aod text', () => {
    const props = { ...defaultProps, aod: true };
    const wrapper = shallow(<Docket {...props}/>);
    expect(wrapper.text()).to.contain('Your appeal is Advanced on Docket.');
  });

  it('should display postCavcRemand text', () => {
    const props = { ...defaultProps, appealType: APPEAL_TYPES.postCavcRemand };
    const wrapper = shallow(<Docket {...props}/>);
    expect(wrapper.text()).to.contain('Your appeal was remanded by the Court of Appeals for Veterans’ Claims.');
  });
});
