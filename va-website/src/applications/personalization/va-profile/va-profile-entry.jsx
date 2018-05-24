import './sass/va-profile.scss';
import '../../../platform/polyfills';

import startApp from '../../../platform/startup';

import routes from './routes';
import reducer from './reducers';
import manifest from './manifest.json';

startApp({
  url: manifest.rootUrl,
  reducer,
  routes
});
