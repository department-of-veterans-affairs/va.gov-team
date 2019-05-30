/* eslint-disable no-case-declarations */
import {
  FILTER_TOGGLED,
  SEARCH_STARTED,
  SEARCH_FAILED,
  SEARCH_SUCCEEDED
} from '../actions';

import camelCaseKeysRecursive from 'camelcase-keys-recursive';

const INITIAL_STATE = {
  facets: {
    category: {},
    type: {},
    state: {},
    country: [],
    cautionFlag: {},
    studentVetGroup: {},
    yellowRibbonScholarship: {},
    principlesOfExcellence: {},
    eightKeysToVeteranSuccess: {},
  },
  links: {},
  results: [],
  count: null,
  version: {},
  pagination: {
    currentPage: 1,
    totalPages: 1
  },
  inProgress: false,
  filterOpened: false
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

function uppercaseKeys(obj) {
  return Object.keys(obj).reduce((result, key) => {
    return {
      ...result,
      [key.toUpperCase()]: obj[key]
    };
  }, {});
}

function normalizedFacets(facets) {
  const state = uppercaseKeys(facets.state);
  const type = uppercaseKeys(facets.type);
  return { ...facets, state, type };
}

function derivePaging(links) {
  const selfPage = links.self.match(/page=(\d+)/i);
  const currentPage = Number(selfPage === null ? 1 : selfPage[1]);
  const totalPages = Number(links.last.match(/page=(\d+)/i)[1]);
  const perPage = Number(links.last.match(/per_page=(\d+)/i)[1]);
  return { currentPage, totalPages, perPage };
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_TOGGLED:
      return { ...state, filterOpened: !state.filterOpened };
    case SEARCH_STARTED:
      return { ...state, inProgress: true };
    case SEARCH_FAILED:
      return {
        ...state,
        ...action.err,
        inProgress: false
      };
    case SEARCH_SUCCEEDED:
      const camelPayload = camelCaseKeysRecursive(action.payload);
      const results = camelPayload.data.reduce((acc, result) => {
        const attributes = normalizedAttributes(result.attributes);
        return [...acc, attributes];
      }, []);
      return {
        ...state,
        results,
        pagination: derivePaging(camelPayload.links),
        facets: normalizedFacets(camelPayload.meta.facets),
        count: camelPayload.meta.count,
        version: camelPayload.meta.version,
        inProgress: false
      };
    default:
      return state;
  }
}
