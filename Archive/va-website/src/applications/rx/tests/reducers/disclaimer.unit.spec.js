import { expect } from 'chai';

import disclaimerReducer from '../../reducers/disclaimer.js';

describe('disclaimer reducer', () => {
  it('should close the disclaimer', () => {
    const state = disclaimerReducer(
      { open: true },
      { type: 'CLOSE_DISCLAIMER' }
    );

    expect(state.open).to.be.false;
  });
});
