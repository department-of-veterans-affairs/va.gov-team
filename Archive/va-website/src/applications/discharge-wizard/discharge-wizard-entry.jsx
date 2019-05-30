import '../../platform/polyfills';
import './sass/discharge-wizard.scss';

import startApp from '../../platform/startup';

import routes from './routes';
import reducer from './reducers';
import manifest from './manifest.json';

startApp({
  url: manifest.rootUrl,
  reducer,
  routes
});
