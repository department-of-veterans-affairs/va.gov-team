import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../lib/testing/helpers';
import SystemDownView from './SystemDownView.jsx';

describe('<SystemDownView>', () => {
  it('should render', () => {
    const tree = shallow(<SystemDownView
      messageLine1="This is the first line"
      messageLine2="This is the second line"/>);
    expect(tree.text()).to.contain('This is the first line');
  });

  it('should pass aXe check', () => {
    return axeCheck(<SystemDownView
      messageLine1="This is the first line"
      messageLine2="This is the second line"/>);
  });

});
