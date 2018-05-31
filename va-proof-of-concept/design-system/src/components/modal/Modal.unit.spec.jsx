import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../lib/testing/helpers';

import Modal from './Modal.jsx';

describe('<Modal/>', () => {
  it('should render', () => {
    const tree = shallow(<Modal id="modal" title="Modal title" visible onClose={() => {}}>Modal contents</Modal>);
    expect(tree.text()).to.contain('Modal contents');
  });

  it('should pass aXe check', () => {
    return axeCheck(<Modal id="modal" title="Modal title" visible onClose={() => {}}/>);
  });
});
