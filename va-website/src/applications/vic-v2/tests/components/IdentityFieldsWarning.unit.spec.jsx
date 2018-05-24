import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import IdentityFieldsWarning from '../../components/IdentityFieldsWarning';

describe('<IdentifyFieldsWarning>', () => {
  it('should render prefill message', () => {
    const tree = shallow(
      <IdentityFieldsWarning
        formData={{
          processAsIdProofed: false
        }}
        formContext={{
          prefilled: true
        }}/>);

    expect(tree.find('PrefillMessage').exists()).to.be.true;
  });
  it('should render warning', () => {
    const tree = shallow(
      <IdentityFieldsWarning
        formData={{
          processAsIdProofed: true
        }}
        formContext={{
          prefilled: true
        }}/>);

    expect(tree.find('.usa-alert-warning').exists()).to.be.true;
  });
  it('should render nothing', () => {
    const tree = shallow(
      <IdentityFieldsWarning
        formData={{
          processAsIdProofed: false
        }}
        formContext={{
          prefilled: false
        }}/>);

    expect(tree.html()).to.be.null;
  });
});
