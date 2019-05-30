import { expect } from 'chai';
import sinon from 'sinon';
import Raven from 'raven-js';

import {
  login,
  mfa,
  verify,
  logout,
  signup
} from '../../user/authentication/utilities';

import { mockApiRequest, resetFetch } from '../../testing/unit/helpers';

let windowOpen;
let oldWindow;

const fakeWindow = () => {
  oldWindow = global.window;
  windowOpen = sinon.stub().returns({
    focus: f => f,
    location: ''
  });
  global.window = {
    open: windowOpen,
    dataLayer: []
  };
};

describe('auth URL helpers', () => {
  beforeEach(fakeWindow);
  afterEach(() => { global.window = oldWindow; });

  describe('when able to open a window', () => {
    afterEach(resetFetch);

    it('should open a window to an error page', (done) => {
      mockApiRequest({ error: 'Couldn\'t find url' }, false);
      login('idme').then(popup => {
        expect(windowOpen.calledOnce).to.be.true;
        expect(popup.location).to.include('/auth/login/callback');
        done();
      }).catch(done);
    });

    it('should open a window for signup', (done) => {
      mockApiRequest({ url: 'signup-url' });
      signup().then(popup => {
        expect(windowOpen.calledOnce).to.be.true;
        expect(popup.location).to.eq('signup-url');
        done();
      }).catch(done);
    });

    it('should open a window for login', (done) => {
      mockApiRequest({ url: 'login-url' });
      login('idme').then(popup => {
        expect(windowOpen.calledOnce).to.be.true;
        expect(popup.location).to.eq('login-url');
        done();
      }).catch(done);
    });

    it('should open a window for logout', (done) => {
      mockApiRequest({ url: 'logout-url' });
      logout().then(popup => {
        expect(windowOpen.calledOnce).to.be.true;
        expect(popup.location).to.eq('logout-url');
        done();
      }).catch(done);
    });

    it('should open a window for mfa', (done) => {
      mockApiRequest({ url: 'mfa-url' });
      mfa().then(popup => {
        expect(windowOpen.calledOnce).to.be.true;
        expect(popup.location).to.eq('mfa-url');
        done();
      }).catch(done);
    });

    it('should open a window for verify', (done) => {
      mockApiRequest({ url: 'verify-url' });
      verify().then(popup => {
        expect(windowOpen.calledOnce).to.be.true;
        expect(popup.location).to.eq('verify-url');
        done();
      }).catch(done);
    });
  });

  it('should handle failure to open window', (done) => {
    global.window.open = sinon.stub().returns(null);
    const mockRaven = sinon.stub(Raven, 'captureMessage');
    login('idme').catch(error => {
      try {
        expect(error.message).to.eq('Failed to open new window');
        done();
      } catch (e) {
        done(e);
      }
    });
    expect(mockRaven.calledOnce).to.be.true;
  });
});
