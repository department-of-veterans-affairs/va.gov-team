/* eslint-disable no-case-declarations */
import { FETCH_PROFILE_STARTED, FETCH_PROFILE_FAILED, FETCH_PROFILE_SUCCEEDED } from '../actions';
import camelCaseKeysRecursive from 'camelcase-keys-recursive';

const INITIAL_STATE = {
  attributes: {},
  version: {},
  inProgress: false,
};

function normalizedAttributes(attributes) {
  const name = attributes.name ? attributes.name.toUpperCase() : attributes.name;
  const city = attributes.city ? attributes.city.toUpperCase() : attributes.city;
  const state = attributes.state ? attributes.state.toUpperCase() : attributes.state;
  return {
    ...attributes,
    name,
    city,
    state,
  };
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROFILE_STARTED:
      return {
        ...state,
        inProgress: true
      };
    case FETCH_PROFILE_FAILED:
      return {
        ...state,
        ...action.err,
        inProgress: false
      };
    case FETCH_PROFILE_SUCCEEDED:
      const camelPayload = camelCaseKeysRecursive(action.payload);
      const attributes = normalizedAttributes({
        ...camelPayload.data.attributes,
        ...camelPayload.data.links
      });
      // delete attributes.self;
      const version = camelPayload.meta.version;
      return {
        ...state,
        attributes,
        version,
        inProgress: false
      };
    default:
      return state;
  }
}
