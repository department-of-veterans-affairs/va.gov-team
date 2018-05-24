import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import AppealLayout from '../../components/AppealLayout';

describe('<AppealLayout>', () => {
  it('should render breadcrumbs and children', () => {
    const tree = SkinDeep.shallowRender(
      <AppealLayout>
        Testing
      </AppealLayout>
    );

    expect(tree.text()).to.contain('Testing');
    expect(tree.subTree('Breadcrumbs')).not.to.be.false;
  });
});
