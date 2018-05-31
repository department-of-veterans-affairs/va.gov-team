import React from 'react';
import { shallow } from 'enzyme';
import { axeCheck } from '../../../../lib/testing/helpers';
import { expect } from 'chai';

import Breadcrumbs from './Breadcrumbs.jsx';

const crumbs = [{ link: '#1', key: 'key1', label: 'link1' },
  { link: '#2', key: 'key2', label: 'link2' },
  { link: '#3', key: 'key3', label: 'link3' }];

describe('<Breadcrumbs>', () => {
  it('should render three items', () => {
    const tree = shallow(<Breadcrumbs
      crumbs={crumbs}/>);

    expect(tree.find('li')).to.have.lengthOf(3);
  });

  it('should contain link elements', () => {
    const tree = shallow(<Breadcrumbs
      crumbs={crumbs}/>);

    expect(tree.find('a')).to.have.lengthOf(3);
  });

  it('should have plain-text labels', () => {
    const tree = shallow(<Breadcrumbs
      crumbs={crumbs}/>);

    expect(tree.find('a').first().text()).to.equal('link1');
    expect(tree.find('a').last().text()).to.equal('link3');
  });

  it('should pass aXe check', () => {
    return axeCheck(<Breadcrumbs
      crumbs={crumbs}/>);
  });
});
