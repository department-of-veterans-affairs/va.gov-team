export const LOG_OUT = 'LOG_OUT';
export const UPDATE_LOGGEDIN_STATUS = 'UPDATE_LOGGEDIN_STATUS';

export function updateLoggedInStatus(value) {
  return {
    type: UPDATE_LOGGEDIN_STATUS,
    value
  };
}

export function logOut() {
  return {
    type: LOG_OUT
  };
}

