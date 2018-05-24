import {
  isWideScreen,
  isEscape,
  isReverseTab,
  isTab,
  getTabbableElements
} from '../../utilities/accessibility';

class MegaMenu {
  constructor(menuElement, openMenuElement, closeMenuElement) {
    this.menu = menuElement;
    this.closeControl = closeMenuElement;
    this.openControl = openMenuElement;
    this.tabbableMenuElements = getTabbableElements(this.menu);
    this.firstTabbableMenuElement = this.tabbableMenuElements[0];
    this.lastTabbableMenuElement = this.tabbableMenuElements[this.tabbableMenuElements.length - 1];
    this.lastTabbableElement = document.querySelector('[href="http://usa.gov"]');
    this.addListeners = this.addListeners.bind(this);
    this.resetMenu = this.resetMenu.bind(this);
    this.showMegaMenu = this.showMegaMenu.bind(this);
    this.hideMegaMenu = this.hideMegaMenu.bind(this);
    this.enterSmallMegaMenu = this.enterSmallMegaMenu.bind(this);
    this.exitSmallMegaMenu = this.exitSmallMegaMenu.bind(this);
    this.toggleSmallMegaMenu = this.toggleSmallMegaMenu.bind(this);

    this.addListeners();
  }

  addListeners() {
    this.closeControl.addEventListener('click', this.hideMegaMenu);
    this.closeControl.addEventListener('keydown', this.enterSmallMegaMenu);
    this.openControl.addEventListener('click', this.showMegaMenu);
    this.firstTabbableMenuElement.addEventListener('keydown', this.exitSmallMegaMenu);
    this.lastTabbableMenuElement.addEventListener('keydown', this.exitSmallMegaMenu);
    this.menu.addEventListener('keydown', this.toggleSmallMegaMenu);
    window.addEventListener('resize', this.resetMenu);
  }

  resetMenu() {
    if (isWideScreen()) {
      // this.closeAll();
      this.showMegaMenu();
    } else {
      this.hideMegaMenu();
    }
  }

  showMegaMenu() {
    this.openControl.setAttribute('hidden', 'hidden');
    this.menu.removeAttribute('hidden');
    this.closeControl.removeAttribute('hidden');
    if (!isWideScreen()) {
      this.firstTabbableMenuElement.focus();
    }
  }

  hideMegaMenu() {
    this.closeControl.setAttribute('hidden', 'hidden');
    this.menu.setAttribute('hidden', 'hidden');
    this.openControl.removeAttribute('hidden');
    this.menu.classList.remove('vetnav--submenu-expanded');
  }

  toggleSmallMegaMenu(e) {
    if (!isWideScreen() && isEscape(e)) {
      this.hideMegaMenu();
      this.openControl.focus();
    }
  }

  enterSmallMegaMenu(e) {
    if (!isWideScreen() && isTab(e)) {
      e.preventDefault();
      this.firstTabbableMenuElement.focus();
    }
  }

  exitSmallMegaMenu(e) {
    if (e.target === this.firstTabbableMenuElement) {
      if (!isWideScreen() && isReverseTab(e)) {
        e.preventDefault();
        this.closeControl.focus();
      }
    }
    if (e.target === this.lastTabbableMenuElement) {
      if (!isWideScreen() && isTab(e)) {
        this.lastTabbableElement.focus();
      }
    }
  }
}

export default MegaMenu;

function initNavMenu() {
  const menuElement = document.querySelector('#vetnav');
  const openMenuElement = document.querySelector('.vetnav-controller-open');
  const closeMenuElement = document.querySelector('.vetnav-controller-close');

  const mm = new MegaMenu(menuElement, openMenuElement, closeMenuElement);
  mm.resetMenu();
}

document.addEventListener('DOMContentLoaded', initNavMenu);
