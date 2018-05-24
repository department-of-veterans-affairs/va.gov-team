import { expect } from 'chai';
import sinon from 'sinon';
import {
  getScheduledDowntime,
  RECEIVE_SCHEDULED_DOWNTIME,
  RETRIEVE_SCHEDULED_DOWNTIME
} from '../actions';

describe('getScheduledDowntime', () => {
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

  before(() => {
    global.sessionStorage = {};
    global.fetch = fetch;
    global.window.dataLayer = [];
  });

  after(() => {
    global.fetch = old.fetch;
    global.sessionStorage = old.sessionStorage;
    global.window.dataLayer = old.dataLayer;
  });

  beforeEach(() => {
    sinon.spy();
    fetch.reset();
    fetchResponse.json = () => {};
  });

  it('dispatches the correct actions and maps the data correctly', (done) => {
    const actionCreator = getScheduledDowntime();
    const description = 'This is a description';
    const startTime = new Date().toISOString();
    const endTime = new Date(new Date().valueOf() + (24 * 60 * 24 * 1000)).toISOString();
    const raw = {
      data: [
        { id: '139', type: 'maintenance_windows', attributes: { externalService: 'appeals', description, startTime, endTime } },
        { id: '139', type: 'maintenance_windows', attributes: { externalService: 'mhv', description, startTime, endTime } },
      ]
    };
    fetchResponse.json = () => Promise.resolve(raw);
    actionCreator(dispatch).then(() => {
      const [firstArgs, secondArgs] = dispatch.args;
      const firstAction = firstArgs[0];
      const secondAction = secondArgs[0];
      expect(firstAction.type).to.be.equal(RETRIEVE_SCHEDULED_DOWNTIME, 'RETRIEVE_SCHEDULED_DOWNTIME was dispatched');
      expect(secondAction.type).to.be.equal(RECEIVE_SCHEDULED_DOWNTIME, 'RECEIVE_SCHEDULED_DOWNTIME was dispatched');
    }).then(done, done);
  });
});
