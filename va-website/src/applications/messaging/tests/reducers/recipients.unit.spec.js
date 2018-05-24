import { expect } from 'chai';

import recipientsReducer from '../../reducers/recipients';

import {
  FETCH_RECIPIENTS_FAILURE,
  FETCH_RECIPIENTS_SUCCESS
} from '../../utils/constants';

import { recipients } from '../messaging-helpers';

describe('recipients reducer', () => {
  it('should have no data when it fails to load recipients', () => {
    const state = recipientsReducer(undefined, {
      type: FETCH_RECIPIENTS_FAILURE
    });

    expect(state.data).to.be.null;
  });

  it('should populate the list of possible recipients on success', () => {
    const state = recipientsReducer(undefined, {
      type: FETCH_RECIPIENTS_SUCCESS,
      recipients
    });

    recipients.data.forEach((recipient) => {
      expect(state.data).to.deep.contain({
        label: recipient.attributes.name,
        value: recipient.attributes.triageTeamId
      });
    });
  });
});
