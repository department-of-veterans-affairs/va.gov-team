import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import { FormApp } from '../../../../src/applications/common/schemaform/containers/FormApp';

describe('Schemaform <FormApp>', () => {
  it('should render children on intro page, but not form title or nav', () => {
    const formConfig = {};
    const currentLocation = {
      pathname: 'introduction',
      search: ''
    };
    const routes = [{
      pageList: [{ path: currentLocation.pathname }]
    }];

    const tree = SkinDeep.shallowRender(
      <FormApp
        formConfig={formConfig}
        routes={routes}
        currentLocation={currentLocation}>
        <div className="child"/>
      </FormApp>
    );

    expect(tree.everySubTree('.child')).not.to.be.empty;
    expect(tree.everySubTree('FormNav')).to.be.empty;
    expect(tree.everySubTree('FormTitle')).to.be.empty;
  });
  it('should show nav when the form is in progress', () => {
    const formConfig = {};
    const currentLocation = {
      pathname: '/veteran-information/personal-information',
      search: ''
    };
    const routes = [{
      pageList: [{ path: currentLocation.pathname }]
    }];

    const tree = SkinDeep.shallowRender(
      <FormApp
        formConfig={formConfig}
        routes={routes}
        currentLocation={currentLocation}>
        <div className="child"/>
      </FormApp>
    );

    expect(tree.everySubTree('.child')).not.to.be.empty;
    expect(tree.everySubTree('FormNav')).not.to.be.empty;
  });
});
