/**
 * Adds event handler to show/hide the USA site banner
 */

function initBanner() {

  const toggleButton = document.querySelector('#usa-banner-toggle');

  if (!toggleButton) {
    return;
  }

  const usaHeader = document.querySelector('.usa-banner-header');
  const govBanner = document.querySelector('#gov-banner');

  toggleButton.addEventListener('mouseup', () => {
    const shouldExpand = govBanner.getAttribute('aria-hidden') === 'true';

    usaHeader.classList.toggle('usa-banner-header-expanded', shouldExpand);
    toggleButton.setAttribute('aria-expanded', shouldExpand);
    govBanner.setAttribute('aria-hidden', !shouldExpand);
  });
}

document.addEventListener('DOMContentLoaded', initBanner);
