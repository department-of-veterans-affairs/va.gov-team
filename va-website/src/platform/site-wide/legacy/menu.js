/*
 * Creates trigger function that opens/closes mobile menu, 
 * mobile search menu, and the Veterans Crisis Line.
 */

document.addEventListener('DOMContentLoaded', () => {
  const overlays = document.querySelectorAll('.va-overlay-trigger, .va-overlay');

  const toggleOverlay = (domEvent) => {
    const overlayTarget = domEvent.currentTarget; // The overlay to open or close
    const clickTarget = domEvent.target; // The element clicked

    /* 
    overlayId will be _either_    
    - The value of element.getAttribute('href')
    - The value of element.dataset.show
    
    A .va-overlay-trigger element should have either a data-show attribute 
    (preferred) or an href attribute.
    */
    const overlayId = overlayTarget.getAttribute('href') || overlayTarget.dataset.show;

    const shouldCloseOverlay =
      overlayTarget.classList.contains('va-overlay') &&
      clickTarget.classList.contains('va-overlay-close');

    if (shouldCloseOverlay) {
      overlayTarget.classList.remove('va-overlay--open');
      document.body.classList.remove('va-pos-fixed');
    } else if (overlayId) {
      const overlay = document.querySelector(overlayId);
      overlay.classList.add('va-overlay--open');
      overlay.querySelector('a').focus();
      document.body.classList.add('va-pos-fixed');
    }
  };

  Array.from(overlays).forEach((ol) => {
    ol.addEventListener('click', toggleOverlay);
  });
});
