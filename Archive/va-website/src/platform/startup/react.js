/**
 * Module for React related startup functions
 * @module platform/startup/react
 * @see module:platform/startup
 */
import ReactDOM from 'react-dom';

/**
 * Mounts a React application in a given location. Also sets up dev tools and sets the global
 * VetsGov object on window.
 *
 * @param {ReactElement} component The React element you want to mount
 * @param {Element} [root=null] A DOM element to mount the react application into. By default,
 * this will be the element with an id of 'react-root'.
 */
export default function startReactApp(component, root = null) {
  // Detect if this is a child frame. If yes, initialize the react devtools hook to work around
  //   https://github.com/facebook/react-devtools/issues/57
  // This must occur before any react code is loaded.
  if (window.parent !== window) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  }

  // Create a Vets.gov global that all code can use. This is mostly useful for overrides for
  // think like api URL endpoints during testing.
  window.VetsGov = window.VetsGov || {
    api: {
      url: '',  // API server. Evetually should be 'https://api.vets.gov' in production.
    },
    scroll: { // Default scroll settings.  These are overridden by our E2E tests.
      duration: 500,
      delay: 0,
      smooth: true
    }
  };

  let mountElement = root;
  if (!mountElement) {
    mountElement = document.getElementById('react-root');
  }
  // eslint-disable-next-line scanjs-rules/call_addEventListener
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(component, mountElement);
  });
}

