import '../../platform/polyfills';
import './sass/hca.scss';

import startApp from '../../platform/startup';

import routes from './routes';
import reducer from './reducer';
import manifest from './manifest.json';

let rootUrl = manifest.rootUrl;
if (window.location.pathname.indexOf('healthcare/') >= 0) {
  rootUrl = rootUrl.replace('health-care/', 'healthcare/');
}

startApp({
  url: rootUrl,
  reducer,
  routes
});
