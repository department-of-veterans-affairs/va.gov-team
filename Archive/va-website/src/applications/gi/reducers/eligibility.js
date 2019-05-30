import { merge, set } from 'lodash/fp';

import { ELIGIBILITY_CHANGED } from '../actions';

const INITIAL_STATE = {
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

export default function (state = INITIAL_STATE, action) {
  if (action.type === ELIGIBILITY_CHANGED) {
    const { field, value } = action;

    const newState = {
      ...state,
      [field]: value
    };

    if (field === 'militaryStatus') {
      return set('spouseActiveDuty', 'no', newState);
    }

    if (field === 'giBillChapter') {
      return merge(newState, {
        cumulativeService: '1.0',
        enlistmentService: '3',
        consecutiveService: '0.8',
        eligForPostGiBill: 'no',
        numberOfDependents: '0',
      });
    }

    return newState;
  }

  return state;
}
