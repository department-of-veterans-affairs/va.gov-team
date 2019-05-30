import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { ClaimsStatusApp, AppContent } from '../../containers/ClaimsStatusApp';

describe('<ClaimsStatusApp>', () => {
  it('should render children and login view', () => {
    const tree = SkinDeep.shallowRender(
      <ClaimsStatusApp
        available
        authorized>
        <div className="test-child"/>
      </ClaimsStatusApp>
    );

    expect(tree.everySubTree('.test-child')).not.to.be.empty;
    expect(tree.everySubTree('RequiredLoginView')).not.to.be.empty;
    expect(tree.subTree('RequiredLoginView').props.serviceRequired).to.eql(['evss-claims', 'appeals-status']);
    expect(tree.subTree('RequiredLoginView').props.verify).to.be.true;
  });
  it('should render children', () => {
    const tree = SkinDeep.shallowRender(
      <AppContent
        available
        authorized>
        <div className="test-child"/>
      </AppContent>
    );

    expect(tree.everySubTree('.test-child')).not.to.be.empty;
    expect(tree.everySubTree('ClaimsUnavailable')).to.be.empty;
  });
});
