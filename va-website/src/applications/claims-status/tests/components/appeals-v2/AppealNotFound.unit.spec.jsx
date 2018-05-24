import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AppealNotFound from '../../../components/appeals-v2/AppealNotFound';

describe('<AppealNotFound/>', () => {
  it('renders', () => {
    const wrapper = shallow(<AppealNotFound/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('renders a heading', () => {
    const wrapper = shallow(<AppealNotFound/>);
    expect(wrapper.find('h1').length).to.equal(1);
  });

  it('renders a React Router link back to claims page', () => {
    const wrapper = shallow(<AppealNotFound/>);
    expect(wrapper.find('Link').length).to.equal(1);
  });
});
