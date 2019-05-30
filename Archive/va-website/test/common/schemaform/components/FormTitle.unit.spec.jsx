import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import FormTitle from '../../../../src/applications/common/schemaform/components/FormTitle';

describe('Schemaform <FormTitle>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <FormTitle title="My title" subTitle="My subtitle"/>
    );

    expect(tree.text()).to.contain('My title');
    expect(tree.text()).to.contain('My subtitle');
  });
});
