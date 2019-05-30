import { expect } from 'chai';
import reducer from '../../reducers';
import {
  SEND_FEEDBACK,
  FEEDBACK_RECEIVED,
  FEEDBACK_ERROR,
  CLEAR_FEEDBACK_ERROR
} from '../../actions';

const reducerInterface = ['requestPending', 'feedbackReceived', 'errorMessage', 'formErrors', 'formIsSubmittable', 'formIsVisible', 'formValues'];

describe('Feedback Reducer', () => {

  it('returns the initial state', () => {
    const result = reducer(undefined, { type: 'NOT_RELEVANT_TO_FEEDBACK' });
    expect(result).to.have.all.keys(reducerInterface);
  });

  it('sets requestPending to true during action type SEND_FEEDBACK', () => {
    const result = reducer(undefined, { type: SEND_FEEDBACK, values: {} });
    expect(result.requestPending).to.be.true;
  });

  it('sets requestPending to false during action type FEEDBACK_RECEIVED', () => {
    const result = reducer(undefined, { type: FEEDBACK_RECEIVED });
    expect(result.requestPending).to.be.false;
  });

  it('sets the errorMessage to a string during action type FEEDBACK_ERROR anc clears it during CLEAR_FEEDBACK_ERROR', () => {
    const message = 'My message';
    const result = reducer(undefined, { type: FEEDBACK_ERROR, message });
    expect(result.errorMessage).to.equal(message);

    const result2 = reducer(result, { type: CLEAR_FEEDBACK_ERROR });
    expect(result2.errorMessage).to.be.null;
  });

});
