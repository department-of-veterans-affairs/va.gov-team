import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import SpouseMarriageTitle from '../../components/SpouseMarriageTitle';

describe('Pensions SpouseMarriageTitle', () => {
  it('should render first marriage title', () => {
    const tree = SkinDeep.shallowRender(
      <SpouseMarriageTitle
        id="id"
        formContext={{ pagePerItemIndex: 0 }}/>
    );

    expect(tree.text()).to.contain('Spouse’s first marriage');
  });
  it('should render marriage title with number value', () => {
    const tree = SkinDeep.shallowRender(
      <SpouseMarriageTitle
        id="id"
        formContext={{ pagePerItemIndex: 10 }}/>
    );

    expect(tree.text()).to.contain('Spouse marriage 11');
  });
});
