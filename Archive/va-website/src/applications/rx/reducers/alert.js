import React from 'react';
import { Link } from 'react-router';

const initialState = {
  content: '',
  status: 'info',
  visible: false
};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_ALERT':
      return {
        content: action.content,
        status: action.status,
        visible: true
      };

    case 'CLOSE_ALERT':
      return initialState;

    case 'RX_LOADING_PREFERENCES':
    case 'RX_SAVING_PREFERENCES':
      return initialState;

    case 'RX_SAVE_PREFERENCES_FAILURE': {
      const { errors } = action;
      const error = errors.length && `${errors[0].title}.`;
      return {
        content: <b>Failed to save changes. {error}</b>,
        status: 'error',
        visible: true
      };
    }

    case 'RX_SAVE_PREFERENCES_SUCCESS':
      return {
        content: <b>Your changes have been saved.</b>,
        status: 'success',
        visible: true
      };

    case 'REFILL_FAILURE': {
      return {
        content: (
          <div>
            <h4 className="usa-alert-heading">Prescription refill unsuccessful</h4>
            <p>We couldn’t process this request. Please try again or <a href="/health-care/messaging">message your provider</a>.</p>
          </div>
        ),
        status: 'error',
        visible: true
      };
    }

    case 'REFILL_SUCCESS': {
      const rx = action.prescription;

      return {
        content: (
          <b>
            Refill for <Link to={`/${rx.prescriptionId}`}>{rx.prescriptionName}</Link> has been requested.
          </b>
        ),
        status: 'success',
        visible: true
      };
    }

    default:
      return state;
  }
}
