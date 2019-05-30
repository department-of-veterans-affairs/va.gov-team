import { isWideScreen } from '../utilities/accessibility';

const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const ESCAPE = 27;

/**
 * Finds the closest ancestor for which the callback returns true.
 *
 * @param {HTMLElement}  element
 * @param {function}     testCB   When this returns true on an ancestor, that ancestor is returned
 * @return {HTMLElement|null}     If there is no ansestor for which the test returns true, null is returned
 */
function findNearestAncestor(element, testCB) {
  const parent = element.parentElement;
  if (!parent) {
    return null;
  }
  const returnVal = testCB(parent) ? parent : findNearestAncestor(parent, testCB);
  return returnVal;
}


// Reduce code duplication
function findNearestLi(element) {
  return findNearestAncestor(element, el => el.tagName.toLowerCase() === 'li');
}


/**
 * Returns whether the HTMLElement passed is a menu button. This is only true if:
 *  1. The element is a button or has [role="button"]
 *  2. The element has popup
 *  3. The element has aria-controls that contains the id of an element with [role="menu"]
 *
 * @param {HTMLElement} element  The element in question
 * @return {bool}
 */
function isMenuButton(element) {
  // There is no element.getElementById() :matrix:
  const menuElement = element.parentElement.querySelector(`#${element.getAttribute('aria-controls')}`);
  if (!menuElement) {
    return false;
  }

  const menuRole = (menuElement.getAttribute('role') || '').toLowerCase();
  const isButton = element.tagName.toLowerCase() === 'button' || element.getAttribute('role').toLowerCase() === 'button';
  const hasPopup = ['menu', 'true'].includes(element.getAttribute('aria-haspopup'));
  const isOrHasMenu = !!(menuRole === 'menu' || menuElement.querySelector('[role="menu"]'));

  return isButton && hasPopup && isOrHasMenu;
}

/**
 * Tests if element is a script tag
 *
 * @param {HTMLIElement} element The element to test against
 */

function isScript(element) {
  return element.nodeName === 'SCRIPT';
}

/**
 * Determines if an element is visible by checking both its display and at least one of its children's
 *  display is neither hidden nor none. Only goes one level deep.
 *
 * @param {HTMLElement} element  The element to determine the visibility of
 * @return {bool}
 */
function isVisible(element) {
  const hiddenDisplays = ['hidden', 'none'];

  // If the element has children, check them; otherwise, naively assume it's visible
  const childrenAreVisible = element.children.length ?
    Array.from(element.children).some(e => isScript(e) || !hiddenDisplays.includes(getComputedStyle(e).display)) :
    true;
  const visible = !hiddenDisplays.includes(getComputedStyle(element).display) && childrenAreVisible;

  return visible;
}


/**
 * Gets the first visible child of the element specified. Useful for focusing on the first visible
 * element in a list.
 *
 * @param {HTMLElement} element  The element in question
 * @return {HTMLElement|null}    If no children are present or none of them are visible, returns null
 */
function firstVisibleChild(element) {
  if (!element.children.length) {
    return null;
  }

  const firstVisible = Array.from(element.children).find(c => isVisible(c));
  if (!firstVisible) {
    return null;
  }

  return firstVisible;
}

/**
 * Focuses on either the previous or next element in a list. If either the beginning or end of the list
 *  is reached, it wraps to the last or first element respectively. If an element isn't visible, it's
 *  skipped.
 *
 * @param {HTMLLIElement} element  The <li> containing the menu item
 * @param {String} direction     The direction to move the focus. Possible options: 'previous', 'next'
 */
function moveFocus(element, direction) {
  const focusElement = direction === 'previous' ?
    (element.previousElementSibling || element.parentNode.lastElementChild) :
    (element.nextElementSibling || element.parentNode.firstElementChild);

  // If focusElement isn't visible, recurse
  if (!isVisible(focusElement)) {
    moveFocus(focusElement, direction);
  } else {
    // The focusElement should be a <li>, so we want to focus on the contents
    focusElement.firstElementChild.focus();
  }
}

/**
 * Gets the menu and associated menu button from an element if possible. Returns null if not.
 *
 * @param {HTMLElement} menuLi  The element (probably <li>) that may contain a menu
 * @return {Object|null}        If the element contains a proper menu structure, returns an object
 *                               { menu: <HTMLElement>, menuButton: <HTMLElement> }
 *                               Otherwise, returns null
 */
function getMenuStructure(menuLi) {
  const menuButton = menuLi.querySelector('button, [role="button"]');
  const menu = menuButton ? menuLi.querySelector(`#${menuButton.getAttribute('aria-controls')}`) : null;

  if (!menuButton || !menu) {
    return null;
  }
  const menuRole = (menu.getAttribute('role') || '').toLowerCase();
  if (!(menuRole === 'menu' || menu.querySelector('[role="menu"]'))) {
    return null;
  }

  return { menuButton, menu };
}


/**
 * Closes a menu.
 *
 * @param {HTMLLIElement} menuLI  The <li> containing the menubutton and menu
 */
function closeMenu(menuLiOrStruct) {
  // Make sure we've got a menu
  const struct = menuLiOrStruct.menuButton ? menuLiOrStruct : getMenuStructure(menuLiOrStruct);
  if (!struct) {
    return;
  }

  const { menuButton, menu } = struct;

  // Tell the parent menu (if any) that this one is open
  // This is so longer parent menus on mobile don't show up underneath shorter child menus
  const parentMenu = findNearestAncestor(menuButton, el => el.getAttribute('role') === 'menu');
  if (parentMenu) {
    parentMenu.classList.remove('child-menu-opened');
  }

  // Close the menu
  menuButton.removeAttribute('aria-expanded');
  menu.setAttribute('hidden', 'hidden');
  menuButton.focus();
}


/**
 * Opens a menu.
 *
 * @param {HTMLLIElement} menuLi  The <li> containing the menubutton and menu
 * @param {bool} openSubMenu      Whether or not the first submenu should be opened. E.g. if we're opening the
 *                                 second-level menu in a wide screen, we want the third-level opened as well
 * @param {bool} stealFocus       Whether or not to focus on the first item in the opened menu
 */
function openMenu(menuLi, menuStructure = null, openSubMenu = false, stealFocus = true) {
  // If we're not dealing with a menu structure, abort
  const struct = menuStructure || getMenuStructure(menuLi);
  if (!struct) {
    return;
  }

  const { menuButton, menu } = struct;

  // First, close all sibling menus
  const openMenus = Array.from(menuLi.parentElement.querySelectorAll('[aria-expanded=true]'));
  openMenus.forEach(m => closeMenu(m.parentElement));

  // Open the menu
  menuButton.setAttribute('aria-expanded', true);
  menu.removeAttribute('hidden');

  // Tell the parent menu (if any) that this one is open
  // This is so longer parent menus on mobile don't show up underneath shorter child menus
  const parentMenu = findNearestAncestor(menuButton, el => el.getAttribute('role') === 'menu');
  if (parentMenu) {
    parentMenu.classList.add('child-menu-opened');
  }

  if (stealFocus) {
    const menuRole = (menu.getAttribute('role') || '').toLowerCase();
    const firstMenuItem = menuRole === 'menu' ?
      firstVisibleChild(menu) :
      firstVisibleChild(menu.querySelector('[role="menu"]'));
    firstMenuItem.firstElementChild.focus();
  }

  // If we're wide-screen (for example), open the first submenu
  if (openSubMenu) {
    openMenu(menu.firstElementChild, null, false, false);
  }
}


/**
 * Opens a menu if it's closed, closes a menu if it's open.
 *
 * @param {HTMLLIElement} menuLi  The <li> containing the menubutton and menu
 */
function toggleMenu(menuLi) {
  // If we're not dealing with a menu structure, abort
  const struct = getMenuStructure(menuLi);
  if (!struct) {
    return;
  }

  // Check if it's open
  if (struct.menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu(struct);
  } else {
    openMenu(menuLi, struct, isWideScreen());
  }
}


/**
 * Closes all the menus in menuElement
 *
 * @param {HTMLElement} menuElement
 * @return {function}   Call this to close all menus
 */
function closeAll(menuElement) {
  // Get all the parent <li>s of open menus
  const allMenus = Array.from(menuElement.querySelectorAll('[aria-expanded=true]'))
    .map(e => findNearestLi(e));

  // Add the top-level
  if (menuElement.getAttribute('aria-expanded') === true) {
    allMenus.push(findNearestLi(menuElement));
  }

  allMenus.forEach(e => closeMenu(e));
}


/**
 * Attaches event listeners to a menu or menu bar to make it keyboard navigable.
 *
 * If the mobile buttons are provided, this will also handle the opening and closing
 *  of the menu on small screens when there's just a "Menu" button.
 *
 * @param {HTMLElement} menuElement        A menubar or menu
 * @param {HTMLElement} mobileOpenButton   Optional - The "Menu" button on mobile
 * @param {HTMLElement} mobileCloseButton  Optional - The "Close" button on mobile
 */
export default function addMenuListeners(menuElement, closeOnResize = false) {
  const menuRole = menuElement.getAttribute('role');
  if (!['menubar', 'menu'].includes(menuRole)) {
    // If we don't have a menubar or menu, don't continue
    return;
  }

  // For all the sub menus, add listeners for:
  //  Up, down, left, right, escape
  menuElement.addEventListener('keydown', (e) => {
    const targetLi = e.target.parentElement;
    // Target's grandparent because the parent is a <li>
    const inMenubar = targetLi.parentElement.getAttribute('role').toLowerCase() === 'menubar';
    const inMenu = targetLi.parentElement.getAttribute('role').toLowerCase() === 'menu';

    switch (e.keyCode) {
      case LEFT_ARROW: {
        if (inMenubar) {
          e.preventDefault();
          closeMenu(targetLi);
          moveFocus(targetLi, 'previous');
        } else if (inMenu) {
          e.preventDefault();

          // Move focus to the opening menu button
          // This wins no prizes for efficiency, but until we have efficiency problems...
          // Find the nearest ancestor who has a menu structure
          const parentMenuLi = findNearestAncestor(targetLi, getMenuStructure);
          firstVisibleChild(parentMenuLi).focus();
        }
        break;
      }

      case RIGHT_ARROW: {
        if (inMenubar) {
          e.preventDefault();
          closeMenu(targetLi);
          moveFocus(targetLi, 'next');
        } else if (isMenuButton(e.target)) {
          e.preventDefault();
          // Open the menu, focus on the first item
          openMenu(targetLi);
        }
        break;
      }

      case UP_ARROW: {
        const isMB = isMenuButton(e.target);
        if (inMenubar && isMB) {
          // Open the menu, focus on the last item
          e.preventDefault();

          // Only open the first menu; we'll manually open the next level
          openMenu(targetLi);

          if (isWideScreen()) {
            // `[role="menu"] > li:last-child` was acting more like `[role="menu"] > li :last-child`, so we're
            //  doing it the hard way
            const menuItems = targetLi.querySelector('[role="menu"]').children;
            const lastSubmenu = menuItems[menuItems.length - 1];
            openMenu(lastSubmenu, null, false, false);
            lastSubmenu.firstElementChild.focus();
          }
        } else if (inMenu) {
          e.preventDefault();
          // If we've reached the top of a list, figure out if we need to go up a level or wrap around
          if (targetLi.previousElementSibling === null) {
            const firstLi = findNearestLi(targetLi);

            // If the first <li> ancestor is in a [role="menubar"], we're at the first submenu and should
            //  go up to the top-level menubar item
            if (firstLi && (firstLi.parentElement.getAttribute('role') || '') === 'menubar') {
              firstLi.firstElementChild.focus();
            } else {
              moveFocus(targetLi, 'previous');
            }
          } else {
            moveFocus(targetLi, 'previous');
          }
        }
        break;
      }

      case DOWN_ARROW: {
        const isMB = isMenuButton(e.target);
        if (inMenubar && isMB) {
          e.preventDefault();
          openMenu(targetLi, null, isWideScreen());
        } else if (inMenu) {
          e.preventDefault();
          moveFocus(targetLi, 'next');
        }
        break;
      }

      case ESCAPE: {
        closeAll(menuElement);
        // May have to figure out what to do with focus, but it works for now
        break;
      }

      default: break;
    }
  });

  // Close when the screen is resized
  // Useful for when the menu might be hidden on smaller screens (nav menubar)
  if (closeOnResize) {
    window.addEventListener('resize', () => closeAll(menuElement));
  }

  menuElement.addEventListener('click', e => {
    const targetLi = e.target.parentElement;
    // Target's grandparent because the parent is a <li>
    const inMenubar = targetLi.parentElement.getAttribute('role').toLowerCase() === 'menubar';
    const inMenu = targetLi.parentElement.getAttribute('role').toLowerCase() === 'menu';

    // Handle opening (and closing) menus
    if (e.target.classList.contains('back-button')) {
      // Small menus with a "Back to menu" button in sub-menus
      closeMenu(findNearestLi(targetLi));
    } else if (inMenubar) {
      toggleMenu(targetLi);
    } else if (inMenu) {
      openMenu(targetLi);
    }
  });

  // Handle clicking away from the menu
  document.addEventListener('click', event => {
    const target = event.target;
    if (!menuElement.contains(target)) {
      closeAll(menuElement);
    }
  });
}

