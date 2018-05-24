import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import TitleField from '../../../../src/applications/common/schemaform/fields/TitleField';

describe('Schemaform <TitleField>', () => {
  it('should render legend for root', () => {
    const tree = SkinDeep.shallowRender(
      <TitleField id="root__title"/>
    );

    expect(tree.subTree('legend')).not.to.be.false;
  });
  it('should render subtitle for non-root', () => {
    const tree = SkinDeep.shallowRender(
      <TitleField id="root_someField"/>
    );

    expect(tree.subTree('.schemaform-block-subtitle')).not.to.be.false;
  });
});
