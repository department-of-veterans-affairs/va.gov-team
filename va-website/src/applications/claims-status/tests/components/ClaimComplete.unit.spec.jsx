import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ClaimComplete from '../../components/ClaimComplete';

describe('<ClaimComplete>', () => {
  it('should render message', () => {
    const date = '2010-03-01';
    const tree = SkinDeep.shallowRender(
      <ClaimComplete
        completedDate={date}/>
    );

    expect(tree.text()).to.contain('Your claim was closed on Mar. 1, 2010');
  });
});
