import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import SignInLink from '../../components/SignInLink';


let oldWindow;
let oldFetch;
const response = {
  json: () => {
    return {
      authenticate_via_get: true // eslint-disable-line camelcase
    };
  }
};
let fetchPromise;

const setup = () => {
  oldFetch = global.fetch;
  oldWindow = global.window;
  fetchPromise = Promise.resolve(response); // Reset it every time.

  global.fetch = sinon.spy(() => {
    return fetchPromise;
  });
  global.window = {
    dataLayer: [],
    open: sinon.spy(() => {
      return { focus: sinon.stub() };
    }),
    addEventListener: () => {},
  };
};
const teardown = () => {
  global.window = oldWindow;
  global.fetch = oldFetch;
};

describe('<SignInLink>', () => {
  // Don't need this for each test, so I'm calling them in just the tests I need
  // beforeEach(setup);
  // afterEach(teardown);

  const toggleLoginModal = sinon.spy();
  it('should render', () => {
    const tree = ReactTestUtils.renderIntoDocument(
      <div>
        <SignInLink
          isLoggedIn={false}
          toggleLoginModal={toggleLoginModal}>Sign in</SignInLink>
      </div>
    );
    const findDOM = findDOMNode(tree);

    const link = findDOM.querySelector('a');
    expect(link).to.exist;
    expect(link.textContent).to.equal('Sign in');
  });
  it('should render as a button', () => {
    const tree = ReactTestUtils.renderIntoDocument(
      <div>
        <SignInLink
          type="button"
          isLoggedIn={false}
          toggleLoginModal={toggleLoginModal}>Sign in</SignInLink>
      </div>
    );
    const findDOM = findDOMNode(tree);

    expect(findDOM.querySelectorAll('button').length).to.equal(1);
  });
  it('should attempt to login', () => {
    setup();
    const tree = ReactTestUtils.renderIntoDocument(
      <div>
        <SignInLink
          loginUrl="login/url"
          isLoggedIn={false}
          toggleLoginModal={toggleLoginModal}>Sign in</SignInLink>
      </div>
    );
    const findDOM = findDOMNode(tree);

    // Poke the button!
    ReactTestUtils.Simulate.click(findDOM.querySelector('a'));

    expect(toggleLoginModal.calledOnce).to.be.true;
    // TODO: make sure we test for these once analytics are set up for new modal-based signin flow
    // expect(global.window.dataLayer).to.eql([
    //   { event: 'login-link-clicked' },
    //   { event: 'login-link-opened' }
    // ]);

    teardown();
  });

  // TODO: While this _does_ test that the function is called, it doesn't test
  //  that the function is called _at the right time_. We should circle back to
  //  this and fix that.
  xit('should call onLogin after a successful login', () => {
    setup();
    const loginSpy = sinon.spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <div>
        <SignInLink
          loginUrl="login/url"
          isLoggedIn={false}
          toggleLoginModal={toggleLoginModal}
          onLogin={loginSpy}>Sign in</SignInLink>
      </div>
    );
    const findDOM = findDOMNode(tree);

    // Poke the button!
    ReactTestUtils.Simulate.click(findDOM.querySelector('a'));

    // setTimeout is gross, but the test doesn't have visibility into
    //  SignInLink's loginUrlRequest, so...we have to wait until it's done doing
    //  its thing
    // If this fails consistently, increase the timeout
    setTimeout(() => {
      expect(loginSpy.called).to.be.true;
    }, 500);

    teardown();
  });
});
