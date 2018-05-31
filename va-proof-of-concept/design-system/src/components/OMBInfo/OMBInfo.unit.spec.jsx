import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../lib/testing/helpers';

import OMBInfo from './OMBInfo.jsx';

describe('<OMBInfo/>', () => {
  it('should render', () => {
    const tree = shallow(<OMBInfo
      resBurden={15}
      ombNumber="OMB Number"
      expDate="Expiration date"/>);
    expect(tree.text()).to.contain('Expiration date');
  });

  it('should pass aXe check', () => {
    return axeCheck(<OMBInfo
      resBurden={15}
      ombNumber="OMB Number"
      expDate="Expiration date"/>);
  });
});
