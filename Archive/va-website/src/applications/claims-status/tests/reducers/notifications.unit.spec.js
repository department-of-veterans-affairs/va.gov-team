import { expect } from 'chai';
import { SET_NOTIFICATION, CLEAR_NOTIFICATION } from '../../actions';
import notificationsReducer from '../../reducers/notifications';

describe('notificationsReducer', () => {
  it('should set a notification', () => {
    const state = notificationsReducer(undefined, {
      type: SET_NOTIFICATION,
      message: {
        title: 'Testing',
        body: 'Body'
      }
    });

    expect(state.message.title).to.equal('Testing');
    expect(state.message.body).to.equal('Body');
  });
  it('should clear a notification', () => {
    const state = notificationsReducer(undefined, {
      type: CLEAR_NOTIFICATION
    });

    expect(state.message).to.be.null;
  });
});
