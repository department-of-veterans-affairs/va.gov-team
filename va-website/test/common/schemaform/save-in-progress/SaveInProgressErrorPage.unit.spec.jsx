import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { SaveInProgressErrorPage } from '../../../../src/applications/common/schemaform/save-in-progress/SaveInProgressErrorPage';
import { LOAD_STATUSES } from '../../../../src/applications/common/schemaform/save-in-progress/actions';

let oldFetch;
let oldSessionStorage;
const setup = () => {
  oldSessionStorage = global.sessionStorage;
  oldFetch = global.fetch;
  global.sessionStorage = {
    userToken: '123abc'
  };
  global.fetch = sinon.stub();
  global.fetch.returns(Promise.resolve({ ok: true }));
};
const teardown = () => {
  global.fetch = oldFetch;
  global.sessionStorage = oldSessionStorage;
};

describe('<SaveInProgressErrorPage>', () => {
  beforeEach(setup);
  afterEach(teardown);

  const route = {
    formConfig: {
      formId: '1010ez',
      migrations: []
    }
  };

  const router = {
    goBack: sinon.spy()
  };

  const mockLoginUrl = {
    idme: '/mockLoginUrl'
  };

  it('should render the no auth error', () => {
    const tree = ReactTestUtils.renderIntoDocument(
      <SaveInProgressErrorPage
        updateLogInUrls={f => f}
        isLoggedIn
        router={router}
        loginUrls={mockLoginUrl}
        route={route}
        loadedStatus={LOAD_STATUSES.noAuth}/>
    );
    const findDOM = findDOMNode(tree);

    expect(findDOM.querySelector('.usa-alert').textContent).to.contain('You’re signed out of your account.');
    expect(findDOM.querySelector('.usa-button-secondary').textContent).to.contain('Back');
    expect(findDOM.querySelector('.usa-button-primary').textContent).to.contain('Sign In');
  });
  it('should render the unrecoverable failure error', () => {
    const tree = ReactTestUtils.renderIntoDocument(
      <SaveInProgressErrorPage
        updateLogInUrls={f => f}
        isLoggedIn
        router={router}
        loginUrls={mockLoginUrl}
        route={route}
        loadedStatus={LOAD_STATUSES.notFound}/>
    );
    const findDOM = findDOMNode(tree);

    expect(findDOM.querySelector('.usa-alert').textContent).to.contain('We’re sorry. Something went wrong when we tried to find your application');
    expect(findDOM.querySelector('.usa-button-primary').textContent).to.contain('Back');
  });
  it('should render the recoverable failure error', () => {
    const tree = ReactTestUtils.renderIntoDocument(
      <SaveInProgressErrorPage
        updateLogInUrls={f => f}
        isLoggedIn
        router={router}
        loginUrls={mockLoginUrl}
        route={route}
        loadedStatus={LOAD_STATUSES.failure}/>
    );
    const findDOM = findDOMNode(tree);

    expect(findDOM.querySelector('.usa-alert').textContent).to.contain('We’re sorry. We’re having some server issues');
    expect(findDOM.querySelector('.usa-button-secondary').textContent).to.contain('Back');
    expect(findDOM.querySelector('.usa-button-primary').textContent).to.contain('Continue Your Application');
  });
  it('should go back', () => {
    const fetchFormStatusSpy = sinon.spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <SaveInProgressErrorPage
        updateLogInUrls={f => f}
        setFetchFormStatus={fetchFormStatusSpy}
        isLoggedIn
        router={router}
        loginUrls={mockLoginUrl}
        route={route}
        loadedStatus={LOAD_STATUSES.noAuth}/>
    );
    const findDOM = findDOMNode(tree);
    const button = findDOM.querySelector('.usa-button-secondary');
    ReactTestUtils.Simulate.click(button);
    expect(router.goBack.called).to.be.true;
    expect(fetchFormStatusSpy.calledWith(LOAD_STATUSES.notAttempted));
  });
  it('should attempt to fetch the form again', () => {
    const fetchSpy = sinon.spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <SaveInProgressErrorPage
        updateLogInUrls={f => f}
        isLoggedIn
        router={router}
        loginUrls={mockLoginUrl}
        route={route}
        loadedStatus={LOAD_STATUSES.failure}
        fetchInProgressForm={fetchSpy}/>
    );
    const findDOM = findDOMNode(tree);
    const button = findDOM.querySelector('.usa-button-primary');
    ReactTestUtils.Simulate.click(button);
    expect(fetchSpy.called).to.be.true;
  });
  it('should call remove form if user was starting over', () => {
    const fetchSpy = sinon.spy();
    const removeSpy = sinon.spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <SaveInProgressErrorPage
        updateLogInUrls={f => f}
        isLoggedIn
        router={router}
        loginUrls={mockLoginUrl}
        route={route}
        isStartingOver
        loadedStatus={LOAD_STATUSES.failure}
        removeInProgressForm={removeSpy}
        fetchInProgressForm={fetchSpy}/>
    );
    const findDOM = findDOMNode(tree);
    const button = findDOM.querySelector('.usa-button-primary');
    ReactTestUtils.Simulate.click(button);
    expect(fetchSpy.called).to.be.false;
    expect(removeSpy.called).to.be.true;
  });
});
