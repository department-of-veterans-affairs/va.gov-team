import { api } from '../config';
import { find, compact, isEmpty } from 'lodash';
import { mapboxClient } from '../components/MapboxClient';

export function updateSearchQuery(query) {
  return {
    type: 'SEARCH_QUERY_UPDATED',
    payload: {
      ...query,
    }
  };
}

export function updateLocation(propertyPath, value) {
  return {
    type: 'LOCATION_UPDATED',
    propertyPath,
    value
  };
}

export function fetchVAFacility(id, facility = null) {
  if (facility) {
    return {
      type: 'FETCH_VA_FACILITY',
      payload: facility,
    };
  }

  const url = `${api.url}/${id}`;

  return dispatch => {
    dispatch({
      type: 'SEARCH_STARTED',
      payload: {
        active: true,
      },
    });

    return fetch(url, api.settings)
      .then(res => res.json())
      .then(
        data => dispatch({ type: 'FETCH_VA_FACILITY', payload: data.data }),
        err => dispatch({ type: 'SEARCH_FAILED', err })
      );
  };
}

export function searchWithBounds(bounds, facilityType, serviceType, page = 1) {
  const params = compact([
    ...bounds.map(c => `bbox[]=${c}`),
    facilityType ? `type=${facilityType}` : null,
    facilityType === 'benefits' && serviceType ? `services[]=${serviceType}` : null,
    `page=${page}`
  ]).join('&');
  const url = `${api.url}?${params}`;

  return dispatch => {
    dispatch({
      type: 'SEARCH_STARTED',
      payload: {
        page,
        searchBoundsInProgress: true,
      },
    });

    return fetch(url, api.settings)
      .then(res => res.json())
      .then(
        data => {
          dispatch({ type: 'FETCH_VA_FACILITIES', payload: data });
        },
        err => dispatch({ type: 'SEARCH_FAILED', err })
      );
  };
}

export function searchWithAddress(query) {
  // Prevent empty search request to Mapbox, which would result in error, and
  // clear results list to respond with message of no facilities found.
  if (!query.searchString) {
    return { type: 'SEARCH_FAILED' };
  }

  return dispatch => {
    dispatch({
      type: 'SEARCH_STARTED',
    });
    // commas can be stripped from query if Mapbox is returning unexpected results
    let types = 'place,address,region,postcode,locality';
    // check for postcode search
    if (query.searchString.match(/^\s*\d{5}\s*$/)) {
      types = 'postcode';
    }
    mapboxClient.geocodeForward(query.searchString, {
      country: 'us,pr,ph,gu,as,mp',
      types,
    }, (err, res) => {
      if (!err && !isEmpty(res.features)) {
        const coordinates = res.features[0].center;
        const zipCode = (find(res.features[0].context, (v) => {
          return v.id.includes('postcode');
        }) || {}).text || res.features[0].place_name;
        const featureBox = res.features[0].box;

        let minBounds = [
          coordinates[0] - 0.5,
          coordinates[1] - 0.5,
          coordinates[0] + 0.5,
          coordinates[1] + 0.5,
        ];

        if (featureBox) {
          minBounds = [
            Math.min(featureBox[0], coordinates[0] - 0.5),
            Math.min(featureBox[1], coordinates[1] - 0.5),
            Math.max(featureBox[2], coordinates[0] + 0.5),
            Math.max(featureBox[3], coordinates[1] + 0.5),
          ];
        }

        return dispatch({
          type: 'SEARCH_QUERY_UPDATED',
          payload: {
            ...query,
            context: zipCode,
            position: {
              latitude: coordinates[1],
              longitude: coordinates[0],
            },
            bounds: minBounds,
            zoomLevel: res.features[0].id.split('.')[0] === 'region' ? 7 : 11,
          }
        });
      }

      return dispatch({
        type: 'SEARCH_FAILED',
        err,
      });
    });
  };
}
