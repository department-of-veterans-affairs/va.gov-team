import React from 'react';
import { findDOMNode } from 'react-dom';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import StatusPage from '../../containers/StatusPage';

import reducer from '../../reducers/index.js';
import createCommonStore from '../../../../platform/startup/store';

const store = createCommonStore(reducer);
const defaultProps = store.getState();
defaultProps.post911GIBStatus = {
  enrollmentData: {
    veteranIsEligible: true,
    dateOfBirth: '1995-11-12T06:00:00.000+0000',
    remainingEntitlement: {},
    originalEntitlement: {},
    usedEntitlement: {}
  }
};

describe('<StatusPage>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<StatusPage store={store} {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('should show title and print button', () => {
    window.dataLayer = [];
    const node = findDOMNode(ReactTestUtils.renderIntoDocument(<StatusPage store={store} {...defaultProps}/>));
    expect(node.querySelector('.schemaform-title').textContent)
      .to.contain('Post-9/11 GI Bill Statement of Benefits');
    expect(node.querySelector('.usa-button-primary').textContent)
      .to.contain('Get Printable Statement of Benefits');
  });

  it('should not show intro and print button if veteran is not eligible', () => {
    const props = {
      enrollmentData: {
        veteranIsEligible: false,
        dateOfBirth: '1995-11-12T06:00:00.000+0000',
        originalEntitlement: {},
        usedEntitlement: {},
        remainingEntitlement: {},
      }
    };

    const tree = SkinDeep.shallowRender(<StatusPage store={store} {...props}/>);
    expect(tree.subTree('.va-introtext')).to.be.false;
    expect(tree.subTree('.usa-button-primary')).to.be.false;
  });
});
