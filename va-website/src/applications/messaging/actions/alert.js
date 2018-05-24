import {
  CLOSE_ALERT,
  OPEN_ALERT
} from '../utils/constants';

export function closeAlert() {
  return {
    type: CLOSE_ALERT
  };
}

export function openAlert(status, content) {
  return {
    type: OPEN_ALERT,
    status,
    content
  };
}
