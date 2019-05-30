import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { RateLimiter } from '../RateLimiter';

describe('<RateLimiter>', () => {
  it('should display limited content when under threshold', () => {
    window.sessionStorage = {
      getItem: sinon.spy(),
      setItem: sinon.spy()
    };
    window.settings = {
      app: {
        rateLimitAuthed: 0,
        rateLimitUnauthed: 0
      }
    };

    const state = {
      user: {
        profile: {
          loading: true
        },
        login: {
          currentlyLoggedIn: false
        }
      }
    };

    const tree = mount(
      <RateLimiter
        id="app"
        state={state}
        renderLimitedContent={() => <div>Limited content</div>}>
        <div>Real content</div>
      </RateLimiter>
    );

    expect(window.sessionStorage.getItem.firstCall.args[0]).to.eql('app_rateLimitDisabled');
    expect(window.sessionStorage.setItem.called).to.be.false;
    expect(tree.text()).to.contain('Limited content');
  });
  it('should display loading indicator when waiting for profile', () => {
    window.sessionStorage = {
      getItem: sinon.spy(),
      setItem: sinon.spy()
    };
    window.settings = {
      app: {
        rateLimitAuthed: 0,
        rateLimitUnauthed: 0
      }
    };

    const state = {
      user: {
        profile: {
          loading: true
        },
        login: {
          currentlyLoggedIn: false
        }
      }
    };

    const tree = mount(
      <RateLimiter
        id="app"
        state={state}
        waitForProfile
        renderLimitedContent={() => <div>Limited content</div>}>
        <div>Real content</div>
      </RateLimiter>
    );

    expect(tree.find('LoadingIndicator').exists()).to.be.true;
    expect(window.sessionStorage.setItem.called).to.be.false;
  });
  it('should display real content when over threshold', () => {
    window.sessionStorage = {
      getItem: sinon.spy(),
      setItem: sinon.spy()
    };
    window.settings = {
      app: {
        rateLimitAuthed: 1,
        rateLimitUnauthed: 1
      }
    };

    const state = {
      user: {
        profile: {
          loading: true
        },
        login: {
          currentlyLoggedIn: false
        }
      }
    };

    const tree = mount(
      <RateLimiter
        id="app"
        state={state}
        renderLimitedContent={() => <div>Limited content</div>}>
        <div>Real content</div>
      </RateLimiter>
    );

    expect(tree.text()).to.contain('Real content');
    expect(window.sessionStorage.setItem.called).to.be.true;
  });
  it('should display real content when bypassLimit returns true', () => {
    window.sessionStorage = {
      getItem: sinon.spy(),
      setItem: sinon.spy()
    };
    window.settings = {
      app: {
        rateLimitAuthed: 0,
        rateLimitUnauthed: 0
      }
    };

    const state = {
      user: {
        profile: {
          loading: true
        },
        login: {
          currentlyLoggedIn: false
        }
      }
    };

    const tree = mount(
      <RateLimiter
        id="app"
        state={state}
        bypassLimit={() => true}
        renderLimitedContent={() => <div>Limited content</div>}>
        <div>Real content</div>
      </RateLimiter>
    );

    expect(tree.text()).to.contain('Real content');
  });
  it('should display real content when disabled through session storage', () => {
    window.sessionStorage = {
      getItem: sinon.stub().returns('true'),
      setItem: sinon.spy()
    };
    window.settings = {
      app: {
        rateLimitAuthed: 0,
        rateLimitUnauthed: 0
      }
    };

    const state = {
      user: {
        profile: {
          loading: true
        },
        login: {
          currentlyLoggedIn: false
        }
      }
    };

    const tree = mount(
      <RateLimiter
        id="app"
        state={state}
        bypassLimit={() => false}
        renderLimitedContent={() => <div>Limited content</div>}>
        <div>Real content</div>
      </RateLimiter>
    );

    expect(tree.text()).to.contain('Real content');
  });
  afterEach(() => {
    delete window.sessionStorage;
    delete window.settings;
  });
});
