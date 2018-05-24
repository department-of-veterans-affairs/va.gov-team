/* eslint-disable no-case-declarations */
import { FETCH_CONSTANTS_STARTED, FETCH_CONSTANTS_FAILED, FETCH_CONSTANTS_SUCCEEDED } from '../actions';
import camelCaseKeysRecursive from 'camelcase-keys-recursive';

const INITIAL_STATE = {
  inProgress: false,
  version: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CONSTANTS_STARTED:
      return {
        ...state,
        inProgress: true
      };
    case FETCH_CONSTANTS_FAILED:
      return {
        ...state,
        ...action.err,
        inProgress: false
      };
    case FETCH_CONSTANTS_SUCCEEDED:
      const camelPayload = camelCaseKeysRecursive(action.payload);
      const constants = camelPayload.data.reduce((acc, c) => {
        const { name, value } = c.attributes;
        return { ...acc, [name]: value };
      }, {});
      return {
        ...state,
        constants,
        version: camelPayload.meta.version,
        inProgress: false,
      };
    default:
      return state;
  }
}
