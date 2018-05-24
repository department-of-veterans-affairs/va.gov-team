import { expect } from 'chai';

import mountWidgets from '../static-page-widgets';

describe('static page widget', () => {
  it('should display a spinner', () => {
    const widget = {
      root: 'testRoot',
      spinner: true,
      loadingMessage: 'Loading',
      timeout: 0
    };

    document.body.insertAdjacentHTML('beforeend', '<div id="testRoot"></div>');
    global.sessionStorage = {
      userToken: 'asdfafd'
    };
    mountWidgets([widget]);

    expect(document.querySelector('#testRoot .loading-indicator')).to.not.be.null;
    expect(document.querySelector('#testRoot .loading-indicator-message').textContent).to.equal(widget.loadingMessage);
  });
  it('should replace loading message with slow loading message', (done) => {
    const widget = {
      root: 'testRoot',
      spinner: true,
      loadingMessage: 'Loading',
      slowMessage: 'Slowly loading',
      slowLoadingThreshold: 0.5,
      timeout: 4
    };

    document.body.insertAdjacentHTML('beforeend', '<div id="testRoot"></div>');
    global.sessionStorage = {
      userToken: 'asdfafd'
    };

    mountWidgets([widget]);

    setTimeout(() => {
      expect(document.querySelector('#testRoot .loading-indicator-message').textContent).to.equal(widget.slowMessage);
      done();
    }, 600);
  });
  it('should show error message after timing out', (done) => {
    const widget = {
      root: 'testRoot',
      spinner: true,
      loadingMessage: 'Loading',
      errorMessage: 'Error',
      timeout: 0.5
    };

    document.body.insertAdjacentHTML('beforeend', '<div id="testRoot"></div>');
    global.sessionStorage = {
      userToken: 'asdfafd'
    };

    mountWidgets([widget]);

    setTimeout(() => {
      expect(document.querySelector('#testRoot .usa-alert-error').textContent).to.equal(widget.errorMessage);
      done();
    }, 600);
  });
  it('should not show error message if content replaced by React', (done) => {
    const widget = {
      root: 'testRoot',
      spinner: true,
      loadingMessage: 'Loading',
      errorMessage: 'Error',
      timeout: 0.5
    };

    document.body.insertAdjacentHTML('beforeend', '<div id="testRoot"></div>');
    global.sessionStorage = {
      userToken: 'asdfafd'
    };

    mountWidgets([widget]);

    document.querySelector('#testRoot').innerHTML = '';

    setTimeout(() => {
      expect(document.querySelector('#testRoot .usa-alert-error')).to.be.null;
      done();
    }, 600);
  });
});
