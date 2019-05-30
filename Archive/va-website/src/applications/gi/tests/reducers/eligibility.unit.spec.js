import { expect } from 'chai';

import eligibilityReducer from '../../reducers/eligibility';

const initialState = {
  militaryStatus: 'veteran',
  giBillChapter: '33',
  cumulativeService: '1.0',
  onlineClasses: 'no',
  spouseActiveDuty: 'no',
  enlistmentService: '3',
  consecutiveService: '0.8',
  eligForPostGiBill: 'no',
  numberOfDependents: '0',
};

describe('eligibility reducer', () => {
  it('should reset spouse active duty field after choosing military status', () => {
    const state = eligibilityReducer({
      ...initialState,
      militaryStatus: 'spouse',
      spouseActiveDuty: 'yes'
    }, {
      type: 'ELIGIBILITY_CHANGED',
      field: 'militaryStatus',
      value: 'veteran'
    });

    expect(state.militaryStatus).to.eql('veteran');
    expect(state.spouseActiveDuty).to.eql('no');
  });

  it('should reset fields after choosing GI Bill', () => {
    const state = eligibilityReducer({
      ...initialState,
      giBillChapter: '31',
      eligForPostGiBill: 'yes'
    }, {
      type: 'ELIGIBILITY_CHANGED',
      field: 'giBillChapter',
      value: '30'
    });

    expect(state).to.eql({ ...initialState, giBillChapter: '30' });
  });

  it('should update eligibility for general field', () => {
    const state = eligibilityReducer(
      initialState,
      {
        type: 'ELIGIBILITY_CHANGED',
        field: 'fieldName',
        value: 'fieldValue'
      }
    );

    expect(state.fieldName).to.eql('fieldValue');
  });
});
