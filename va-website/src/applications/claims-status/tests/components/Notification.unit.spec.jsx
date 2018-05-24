import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import Notification from '../../components/Notification';

describe('<Notification>', () => {
  it('should render success class', () => {
    const tree = SkinDeep.shallowRender(
      <Notification
        title="Testing title"
        body="Testing body"/>
    );

    expect(tree.text()).to.contain('Testing body');
    expect(tree.text()).to.contain('Testing title');
    expect(tree.everySubTree('.usa-alert-success')).not.to.be.empty;
  });
  it('should render error class', () => {
    const tree = SkinDeep.shallowRender(
      <Notification
        title="Testing title"
        type="error"
        body="Testing body"/>
    );

    expect(tree.text()).to.contain('Testing body');
    expect(tree.text()).to.contain('Testing title');
    expect(tree.everySubTree('.usa-alert-error')).not.to.be.empty;
  });
});
