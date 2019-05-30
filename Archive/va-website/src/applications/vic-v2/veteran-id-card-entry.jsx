import '../../platform/polyfills';
import './sass/vic-v2.scss';

import startApp from '../../platform/startup';

import routes from './routes';
import reducer from './reducer';
import manifest from './manifest.json';

startApp({
  url: manifest.rootUrl,
  reducer,
  routes
});
