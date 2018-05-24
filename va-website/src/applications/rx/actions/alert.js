export function openAlert(status, content) {
  return {
    type: 'OPEN_ALERT',
    status,
    content
  };
}

export function closeAlert() {
  return {
    type: 'CLOSE_ALERT'
  };
}
