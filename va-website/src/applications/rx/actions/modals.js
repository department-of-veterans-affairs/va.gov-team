import recordEvent from '../../../platform/monitoring/record-event';

export function closeRefillModal() {
  recordEvent({
    event: 'rx-cancel-refill',
  });
  return {
    type: 'CLOSE_REFILL_MODAL'
  };
}

export function openRefillModal(rx) {
  return {
    type: 'OPEN_REFILL_MODAL',
    rx
  };
}

export function closeGlossaryModal() {
  return {
    type: 'CLOSE_GLOSSARY_MODAL'
  };
}

export function openGlossaryModal(content) {
  return {
    type: 'OPEN_GLOSSARY_MODAL',
    content
  };
}
