import Raven from 'raven-js';
import appendQuery from 'append-query';

import recordEvent from '../../monitoring/record-event';
import { apiRequest } from '../../utilities/api';
import environment from '../../utilities/environment';

const SESSIONS_URI = `${environment.API_URL}/sessions`;
const redirectUrl = (type) => `${SESSIONS_URI}/${type}/new`;

const MHV_URL = redirectUrl('mhv');
const DSLOGON_URL = redirectUrl('dslogon');
const IDME_URL = redirectUrl('idme');
const MFA_URL = redirectUrl('mfa');
const VERIFY_URL = redirectUrl('verify');
const LOGOUT_URL = redirectUrl('slo');

const loginUrl = (policy) => {
  switch (policy) {
    case 'mhv': return MHV_URL;
    case 'dslogon': return DSLOGON_URL;
    default: return IDME_URL;
  }
};

function popup(popupUrl, clickedEvent, openedEvent) {
  recordEvent({ event: clickedEvent });
  const popupWindow = window.open('', 'vets.gov-popup', 'resizable=yes,scrollbars=1,top=50,left=500,width=500,height=750');
  if (popupWindow) {
    recordEvent({ event: openedEvent });
    popupWindow.focus();

    return apiRequest(
      popupUrl,
      null,
      ({ url }) => { popupWindow.location = url; },
      () => { popupWindow.location = `${environment.BASE_URL}/auth/login/callback`; }
    ).then(() => popupWindow);
  }

  Raven.captureMessage('Failed to open new window', {
    extra: { url: popupUrl }
  });

  return Promise.reject(new Error('Failed to open new window'));
}

export function login(policy) {
  return popup(loginUrl(policy), 'login-link-clicked', 'login-link-opened');
}

export function mfa() {
  return popup(MFA_URL, 'multifactor-link-clicked', 'multifactor-link-opened');
}

export function verify() {
  return popup(VERIFY_URL, 'verify-link-clicked', 'verify-link-opened');
}

export function logout() {
  return popup(LOGOUT_URL, 'logout-link-clicked', 'logout-link-opened');
}

export function signup() {
  return popup(appendQuery(IDME_URL, { signup: true }), 'register-link-clicked', 'register-link-opened');
}
