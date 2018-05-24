import recordEvent from '../../../monitoring/record-event';
import { apiRequest } from '../../../utilities/api';
import { isValidEmail } from '../../../forms/validations';

export const REVEAL_FORM = 'REVEAL_FORM';
export const SET_FORM_VALUES = 'SET_FORM_VALUES';
export const SEND_FEEDBACK = 'SEND_FEEDBACK';
export const FEEDBACK_RECEIVED = 'FEEDBACK_RECEIVED';
export const FEEDBACK_ERROR = 'FEEDBACK_ERROR';
export const CLEAR_FEEDBACK_ERROR = 'CLEAR_FEEDBACK_ERROR';

export function revealForm() {
  recordEvent({ event: 'feedback-revealed' });
  return { type: REVEAL_FORM };
}

export function setFormValues(formValues) {
  const formErrors = {};
  if (formValues.description !== undefined) formErrors.description = formValues.description.length > 0 ? '' : 'Please enter a description';
  if (formValues.email !== undefined) formErrors.email = isValidEmail(formValues.email) ? '' : 'Please enter a valid email';

  return {
    type: SET_FORM_VALUES,
    formValues,
    formErrors
  };
}

function errorMessage(status) {
  switch (status) {
    case 429:
      recordEvent({ event: 'feedback-failure-429' });
      return {
        title: 'We can’t receive your feedback right now',
        description: 'We’re sorry. Something’s not working right on our end, and we can’t process your feedback message right now. Please try back in an hour.'
      };
    default:
      recordEvent({ event: 'feedback-failure' });
      return {
        title: 'We’ve run into a problem',
        description: 'We’re sorry. We couldn’t send your message. Please try again.'
      };
  }
}

export function sendFeedback(formValues) {
  return (dispatch) => {
    const { description, shouldSendResponse, email: ownerEmail } = formValues;
    const targetPage = window.location.pathname;
    const body = { description, targetPage };
    if (shouldSendResponse) body.ownerEmail = ownerEmail;

    const settings = {
      headers: { 'Content-Type': 'application/json', Authorization: '' },
      method: 'post',
      body: JSON.stringify(body)
    };

    dispatch({ type: SEND_FEEDBACK });
    recordEvent({ event: 'feedback-started' });

    return apiRequest(
      '/feedback',
      settings,
      () => {
        recordEvent({ event: 'feedback-success' });
        dispatch({ type: FEEDBACK_RECEIVED });
      },
      (error) => dispatch({ type: FEEDBACK_ERROR, message: errorMessage(error.status) })
    );
  };
}

export function clearError() {
  return { type: CLEAR_FEEDBACK_ERROR };
}
