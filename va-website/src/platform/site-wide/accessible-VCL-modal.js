import {
  isEscape,
  isTab,
  isReverseTab,
  getTabbableElements
} from '../utilities/accessibility';

/*
 * Creates function that captures/releases Veterans Crisis Line modal focus.
 */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('modal-crisisline');
  const modal = document.querySelector('.va-crisis-panel.va-modal-inner');
  const tabbableElements = getTabbableElements(modal);
  let openControl;
  const closeControl = tabbableElements[0];
  const lastTabbableElement = tabbableElements[tabbableElements.length - 1];

  function setOpenControl(e) {
    if (e.target.classList.contains('va-overlay-trigger')) {
      openControl = e.target;
    }
  }

  function captureFocus(e) {
    if (e.target === closeControl) {
      if (isReverseTab(e)) {
        e.preventDefault();
        lastTabbableElement.focus();
      }
    }
    if (e.target === lastTabbableElement) {
      if (isTab(e)) {
        e.preventDefault();
        closeControl.focus();
      }
    }
  }

  function closeModal(e) {
    if (isEscape(e)) {
      overlay.classList.remove('va-overlay--open');
      document.body.classList.remove('va-pos-fixed');
      openControl.focus();
    }
  }

  document.body.addEventListener('click', setOpenControl);
  modal.addEventListener('keydown', closeModal);
  closeControl.addEventListener('keydown', captureFocus);
  lastTabbableElement.addEventListener('keydown', captureFocus);
});
