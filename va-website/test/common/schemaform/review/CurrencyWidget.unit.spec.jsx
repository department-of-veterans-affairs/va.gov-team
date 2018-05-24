import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import CurrencyWidget from '../../../../src/applications/common/schemaform/review/CurrencyWidget';

describe('Schemaform review <CurrencyWidget>', () => {
  it('should format currency', () => {
    const tree = SkinDeep.shallowRender(
      <CurrencyWidget value={10}/>
    );

    expect(tree.text()).to.equal('$10.00');
  });
  it('should render empty value', () => {
    const tree = SkinDeep.shallowRender(
      <CurrencyWidget/>
    );

    expect(tree.text()).to.equal('');
  });
});
