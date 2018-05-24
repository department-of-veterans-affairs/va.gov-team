export function closeModal() {
  return {
    type: 'MODAL_CLOSED',
  };
}

export function openModal(title, content) {
  return {
    type: 'MODAL_OPENED',
    title,
    content,
  };
}
