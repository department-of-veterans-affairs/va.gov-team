import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import environment from '../../../platform/utilities/environment';
import { apiRequest as commonApiClient } from '../../../platform/utilities/api';

function createQueryString(query) {
  const segments = [];

  for (const key of Object.keys(query)) {
    segments.push(`${key}=${query[key]}`);
  }

  return segments.join('&');
}

export function createUrlWithQuery(url, query) {
  const queryString = createQueryString(query);
  const fullUrl = queryString
    ? `${url}?${queryString}`
    : url;

  return fullUrl;
}

export function apiRequest(resource, optionalSettings = {}, success, error) {
  const baseUrl = `${environment.API_URL}/v0/messaging/health`;
  const url = resource[0] === '/'
    ? [baseUrl, resource].join('')
    : resource;

  return commonApiClient(url, optionalSettings, success, error);
}

export function formatFileSize(bytes, decimalplaces = 2) {
  const kilo = 1000;
  const mega = 1000000;
  const multiplier = 10 ** decimalplaces;
  let size;

  if (bytes < kilo) {
    size = `${bytes}B`;
  }

  if (bytes > kilo && bytes < mega) {
    const kbytes = Math.ceil(bytes / kilo);
    size = `${kbytes}K`;
  }

  if (bytes > mega) {
    const mbytes = Math.round((bytes / mega) * multiplier) / multiplier;
    size = `${mbytes}M`;
  }

  return size;
}

export function formattedDate(date, options = {}) {
  if (!date) { return 'Not available'; }

  const now = moment();
  const momentDate = moment(date);
  let dateString;

  if (momentDate.isSame(now, 'd')) {
    dateString = (
      <span>
        {momentDate.format('HH:mm')}
        &nbsp;<abbr title="Eastern Standard Time">EST</abbr>
      </span>
    );
  } else if (momentDate.isSame(now, 'y')) {
    dateString = momentDate.format('MMM D');
  } else {
    return momentDate.format('MM/DD/YYYY');
  }

  if (options.fromNow) {
    const weeksAgo = now.diff(momentDate, 'w');

    if (weeksAgo < 2) {
      // Overwrite defaults for singular units ('a(n)' -> '1') when
      // displaying the 'ago' string. Use the defaults for plural.
      moment.locale('en', {
        relativeTime: {
          m: '1 minute',
          h: '1 hour',
          d: '1 day'
        }
      });

      dateString = <span>{dateString} ({momentDate.fromNow()})</span>;
    }
  }

  return dateString;
}

export function folderUrl(folderName) {
  return folderName ? `/${_.kebabCase(folderName)}` : '/inbox';
}
