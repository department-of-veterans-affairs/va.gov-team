import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PrefillMessage from '../../../../src/applications/common/schemaform/save-in-progress/PrefillMessage';

describe('Schemaform <PrefillMessage>', () => {
  it('should render', () => {
    const tree = shallow(
      <PrefillMessage formContext={{ prefilled: true }}/>
    );

    expect(tree.text()).to.contain('prefilled some of your information');
  });
  it('should not render when not prefilled', () => {
    const tree = shallow(
      <PrefillMessage formContext={{ prefilled: false }}/>
    );

    expect(tree.text()).not.to.contain('prefilled some of your information');
  });
  it('should render child message', () => {
    const tree = shallow(
      <PrefillMessage formContext={{ prefilled: true }}>
        Test message
      </PrefillMessage>
    );

    expect(tree.text()).not.to.contain('prefilled some of your information');
    expect(tree.text()).to.contain('Test message');
  });
});
