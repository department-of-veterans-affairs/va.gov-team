import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import DependentField from '../../components/DependentField';

describe('Pensions DependentField', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <DependentField
        id="id"
        formData={{
          fullName: {
            first: 'Jane',
            last: 'Doe'
          },
          relationship: 'child'
        }}/>
    );

    expect(tree.text()).to.contain('Jane Doe');
    expect(tree.text()).to.contain('Child');
  });
});
