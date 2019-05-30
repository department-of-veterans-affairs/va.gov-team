import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import AddressContent from '../../components/AddressContent';

const addressLines = {
  streetAddress: '57 Columbus Strassa, Ben Franklin Village',
  cityStatePostal: 'APO, AE 09028',
  country: 'USA',
};

const defaultProps = {
  saveError: false,
  addressObject: addressLines,
  name: 'Gary Todd',
};

describe('<AddressContent/>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<AddressContent { ...defaultProps }/>);
    const header = tree.subTree('p').text();
    expect(header).to.contain('Downloaded documents will list your address as:');
  });

  it('should render an <UpdateFailureAlert/> if address save fails', () => {
    const props = { ...defaultProps, saveError: true };
    const tree = SkinDeep.shallowRender(<AddressContent { ...props }/>);
    const updateFailureAlert = tree.dive(['UpdateFailureAlert']);
    const updateFailureHeader = updateFailureAlert.subTree('h4').text();

    expect(updateFailureAlert).to.exist;
    expect(updateFailureHeader).to.contain('Address update unsuccessful');
  });

  it('should render an <AddressBlock/> if there is no save error', () => {
    const tree = SkinDeep.shallowRender(<AddressContent { ...defaultProps }/>);
    const addressBlock = tree.dive(['AddressBlock']);
    const addressHelpText = addressBlock.subTree('p').text();

    expect(addressBlock).to.exist;
    expect(addressHelpText).to.contain('When you download a letter');
  });
});
