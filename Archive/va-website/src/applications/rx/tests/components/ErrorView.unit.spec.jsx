import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ErrorView from '../../components/ErrorView';

const props = {
  errors: [],
};

describe('<ErrorView>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<ErrorView {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should render children when there are no errors', () => {
    // mock out window location object
    global.window = { location: { reload: () => {} } };
    const errorView = ReactTestUtils.renderIntoDocument(
      <ErrorView {...props}>
        <div id="children"/>
      </ErrorView>
    );
    const children = ReactDOM.findDOMNode(errorView).children;

    expect(children.length).to.equal(1);
    expect(children[0].id).to.equal('children');
  });

  it('should render children when errors are non-blocking', () => {
    // mock out window location object
    global.window = { location: { reload: () => {} } };
    const nonBlockingErrors = [{ code: 'RX000' }];
    const errorView = ReactTestUtils.renderIntoDocument(
      <ErrorView errors={nonBlockingErrors}>
        <div id="children"/>
      </ErrorView>
    );
    const children = ReactDOM.findDOMNode(errorView).children;

    expect(children.length).to.equal(1);
    expect(children[0].id).to.equal('children');
  });

  it('should render alert errors as expected', () => {
    const alertErrors = [
      { code: 'RX101' }
    ];
    const errorView = SkinDeep.shallowRender(<ErrorView errors={alertErrors}/>);

    expect(errorView.subTree('AlertBox')).to.be.ok;
  });

  it('should render non-alert errors correctly', () => {
    const errors = [
      { code: 'RX135' }
    ];
    const errorView = SkinDeep.shallowRender(<ErrorView errors={errors}/>);

    expect(errorView.props.className).to.equal('rx-app-error rx-tab-explainer');
  });
});
