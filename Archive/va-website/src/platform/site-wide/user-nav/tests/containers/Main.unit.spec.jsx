import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import Main from '../../containers/Main';
import createCommonStore from '../../../../startup/store';

const store = createCommonStore();

let fetchMock;
let windowOpen;
let windowOnload;
let oldFetch;
let oldWindow;

const setup = () => {
  global.sessionStorage = { userToken: '1234' };
  oldFetch = global.fetch;
  fetchMock = sinon.stub();
  global.fetch = fetchMock;

  oldWindow = global.window;
  windowOpen = sinon.stub();
  global.window = {
    open: windowOpen,
    onload: windowOnload,
    dataLayer: []
  };
};

const teardown = () => {
  global.fetch = oldFetch;
  global.window = oldWindow;
};

describe('<Main>', () => {
  beforeEach(setup);
  const tree = SkinDeep.shallowRender(<Main store={store} location={{ pathname: '/blah' }}/>);

  it('should render', () => {
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should fetch urls', () => {
    // TODO: make this return something so that the loginUrl fields are assigned
    fetchMock.returns({
      then: (fn) => fn({ json: () => Promise.resolve() })
    });
    // TODO: check that it's called twice and that props are updated
    /*
    expect(fetchMock.called).to.be.true;
    expect(tree.props.loginUrl).to.be.defined; // put in the value here
    expect(tree.props.verifyUrl).to.be.defined; // put in the value hereb
     */
  });

  afterEach(teardown);
});
