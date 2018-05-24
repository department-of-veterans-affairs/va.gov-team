import sendAndMergeApiRequests from '../util/sendAndMergeApiRequests';

export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS';
export const FETCH_CONTACT_INFORMATION_SUCCESS = 'FETCH_CONTACT_INFORMATION_SUCCESS';
export const FETCH_PERSONAL_INFORMATION_SUCCESS = 'FETCH_PERSONAL_INFORMATION_SUCCESS';
export const FETCH_MILITARY_INFORMATION_SUCCESS = 'FETCH_MILITARY_INFORMATION_SUCCESS';
export const FETCH_ADDRESS_CONSTANTS_SUCCESS = 'FETCH_ADDRESS_CONSTANTS_SUCCESS';

export * from './updaters';
export * from './misc';

export function fetchHero() {
  return async (dispatch) => {
    const hero = await sendAndMergeApiRequests({
      userFullName: '/profile/full_name'
    });
    dispatch({
      type: FETCH_HERO_SUCCESS,
      hero
    });
  };
}

export function fetchContactInformation() {
  return async (dispatch) => {
    const contactInformation = await sendAndMergeApiRequests({
      email: '/profile/email',
      primaryTelephone: '/profile/primary_phone',
      alternateTelephone: '/profile/alternate_phone',
      mailingAddress: '/profile/mailing_address'
    });
    dispatch({
      type: FETCH_CONTACT_INFORMATION_SUCCESS,
      contactInformation
    });
  };
}

export function fetchPersonalInformation() {
  return async (dispatch) => {
    const result = await sendAndMergeApiRequests({
      personalInformation: '/profile/personal_information'
    });
    dispatch({
      type: FETCH_PERSONAL_INFORMATION_SUCCESS,
      personalInformation: result.personalInformation
    });
  };
}

export function fetchMilitaryInformation() {
  return async (dispatch) => {
    const militaryInformation = await sendAndMergeApiRequests({
      serviceHistory: '/profile/service_history'
    });
    dispatch({
      type: FETCH_MILITARY_INFORMATION_SUCCESS,
      militaryInformation
    });
  };
}

export function fetchAddressConstants() {
  return async (dispatch) => {
    const addressConstants = await sendAndMergeApiRequests({
      countries: '/address/countries',
      states: '/address/states'
    });
    dispatch({
      type: FETCH_ADDRESS_CONSTANTS_SUCCESS,
      addressConstants
    });
  };
}

export function startup() {
  return async (dispatch) => {
    dispatch(fetchHero());
    dispatch(fetchAddressConstants());
    dispatch(fetchContactInformation());
    dispatch(fetchPersonalInformation());
    dispatch(fetchMilitaryInformation());
  };
}
