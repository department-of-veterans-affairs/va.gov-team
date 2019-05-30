import { expect } from 'chai';

import alertReducer from '../../reducers/alert';

describe('alert reducer', () => {
  it('should open the alert', () => {
    const state = alertReducer({ visible: false, }, {
      type: 'OPEN_ALERT',
      content: 'testing',
      status: 'success'
    });

    expect(state.visible).to.be.true;
    expect(state.content).to.eql('testing');
    expect(state.status).to.eql('success');
  });

  it('should close the alert', () => {
    const state = alertReducer({ visible: true }, {
      type: 'CLOSE_ALERT'
    });

    expect(state.visible).to.be.false;
  });

  it('should dismiss alerts when loading preferences', () => {
    const state = alertReducer(undefined, { type: 'RX_LOADING_PREFERENCES' });
    expect(state.visible).to.be.false;
  });

  it('should dismiss alerts when saving preferences', () => {
    const state = alertReducer(undefined, { type: 'RX_SAVING_PREFERENCES' });
    expect(state.visible).to.be.false;
  });

  it('should alert an error for failing to save preferences', () => {
    const state = alertReducer({
      visible: false,
      content: '',
      status: 'info'
    }, {
      type: 'RX_SAVE_PREFERENCES_FAILURE',
      errors: [{ title: 'Email address is invalid' }]
    });

    expect(state.visible).to.be.true;
    expect(state.content).to.be.not.empty;
    expect(state.status).to.eql('error');
  });

  it('should alert success for successfully saving preferences', () => {
    const state = alertReducer({
      visible: false,
      content: '',
      status: 'info'
    }, { type: 'RX_SAVE_PREFERENCES_SUCCESS' });

    expect(state.visible).to.be.true;
    expect(state.content).to.be.not.empty;
    expect(state.status).to.eql('success');
  });

  it('should alert an error for a failed refill', () => {
    const state = alertReducer({
      visible: false,
      content: '',
      status: 'info'
    }, {
      type: 'REFILL_FAILURE',
      prescription: { prescriptionId: 1 }
    });

    expect(state.visible).to.be.true;
    expect(state.content).to.be.not.empty;
    expect(state.status).to.eql('error');
  });

  it('should alert a success for a successful refill', () => {
    const state = alertReducer({
      visible: false,
      content: '',
      status: 'info'
    }, {
      type: 'REFILL_SUCCESS',
      prescription: { prescriptionId: 1 }
    });

    expect(state.visible).to.be.true;
    expect(state.content).to.be.not.empty;
    expect(state.status).to.eql('success');
  });
});
