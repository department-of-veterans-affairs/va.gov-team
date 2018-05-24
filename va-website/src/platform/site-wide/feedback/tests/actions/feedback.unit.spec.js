import { expect } from 'chai';
import sinon from 'sinon';
import {
  sendFeedback,
  clearError,
  SEND_FEEDBACK,
  FEEDBACK_RECEIVED,
  FEEDBACK_ERROR,
  CLEAR_FEEDBACK_ERROR
} from '../../actions';

describe('sendFeedback', () => {

  const dispatch = sinon.spy();
  const old = { sessionStorage: global.sessionStorage, fetch: global.fetch, dataLayer: global.window.dataLayer };
  const fetchResponse = {
    ok: true,
    json() {},
    headers: {
      get: key => ({ 'content-type': 'application/json' }[key])
    }
  };
  const fetch = sinon.spy(() => Promise.resolve(fetchResponse));

  beforeEach(() => {
    global.sessionStorage = {};
    global.fetch = fetch;
    global.window.dataLayer = [];
  });

  afterEach(() => {
    global.fetch = old.fetch;
    global.sessionStorage = old.sessionStorage;
    global.window.dataLayer = old.dataLayer;
    fetch.reset();
    dispatch.reset();
  });

  it('dispatches SEND_FEEDBACK and FEEDBACK_RECEIVED when there is a successful request', (done) => {
    const actionCreator = sendFeedback({ description: 'My feedback', shouldSendResponse: true, email: 'test@test.com' });
    const result = actionCreator(dispatch);

    result.then(() => {

      expect(fetch.calledOnce).to.be.true;
      expect(dispatch.calledTwice).to.be.true;

      const firstAction = dispatch.args[0][0];
      const secondAction = dispatch.args[1][0];

      expect(firstAction.type).to.equal(SEND_FEEDBACK);
      expect(secondAction.type).to.equal(FEEDBACK_RECEIVED);

      const [url, settings] = fetch.args[0];
      const payload = JSON.parse(settings.body);

      expect(payload).to.contain.all.keys('ownerEmail', 'description', 'targetPage');
      expect(url.endsWith('/feedback')).to.be.true;

    }).then(done, done);
  });

  it('does not include the email address field if the user does not indicate that they want a response', (done) => {
    const actionCreator = sendFeedback({ description: 'My feedback', shouldSendResponse: false, email: 'test@test.com' });
    const result = actionCreator(dispatch);

    result.then(() => {

      expect(fetch.calledOnce).to.be.true;
      expect(dispatch.calledTwice).to.be.true;

      const firstAction = dispatch.args[0][0];

      expect(firstAction.type).to.equal(SEND_FEEDBACK);

      const [url, settings] = fetch.args[0];
      const payload = JSON.parse(settings.body);

      expect(payload).to.not.contain.keys('ownerEmail');
      expect(url.endsWith('/feedback')).to.be.true;

    }).then(done, done);
  });

  it('dispatches FEEDBACK_ERROR when response.ok is false', (done) => {
    const failedResponse = Object.assign({}, fetchResponse);
    failedResponse.ok = false;
    const failedFetch = sinon.spy(() => Promise.resolve(failedResponse));
    global.fetch = failedFetch;
    const actionCreator = sendFeedback({ description: 'My feedback', shouldSendResponse: true, email: 'test@test.com' });
    const result = actionCreator(dispatch);

    result.then(() => {

      expect(failedFetch.calledOnce).to.be.true;
      expect(dispatch.calledTwice).to.be.true;

      const firstAction = dispatch.args[0][0];
      const secondAction = dispatch.args[1][0];

      expect(firstAction.type).to.equal(SEND_FEEDBACK);
      expect(secondAction.type).to.equal(FEEDBACK_ERROR);
      expect(secondAction.message).to.be.a('object');

    }).then(done, done);
  });
});

describe('clearError', () => {
  it('returns type CLEAR_FEEDBACK_ERROR', () => {
    const result = clearError();
    expect(result.type).to.equal(CLEAR_FEEDBACK_ERROR);
  });
});
