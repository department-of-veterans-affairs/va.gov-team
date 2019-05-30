import '../../platform/polyfills';

import startApp from '../../platform/startup';

import routes from './routes';
import manifest from './manifest.json';

startApp({
  url: manifest.rootUrl,
  routes
});
