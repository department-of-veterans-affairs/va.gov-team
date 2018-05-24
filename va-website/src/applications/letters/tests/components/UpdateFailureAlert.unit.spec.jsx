import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import { getFormDOM } from '../../../../platform/testing/unit/schemaform-utils';

import UpdateFailureAlert from '../../components/UpdateFailureAlert';

const defaultProps = {
  addressObject: {
    addressOne: '123 Main St N',
    city: 'Bigtowne',
    stateCode: 'BS',
    countryName: 'Elsweyre'
  }
};

describe('<UpdateFailureAlert>', () => {
  it('should render address and warning', () => {
    // Have to wrap the stateless (function) component in <div></div> so renderIntoDocument() is happy
    const tree = ReactTestUtils.renderIntoDocument(<div><UpdateFailureAlert {...defaultProps}/></div>);
    const component = getFormDOM(tree);

    const addressBlock = component.getElement('#warning-address-block').textContent;
    Object.keys(defaultProps.addressObject).forEach((key) => {
      expect(addressBlock).to.contain(defaultProps.addressObject[key]);
    });
  });
});

