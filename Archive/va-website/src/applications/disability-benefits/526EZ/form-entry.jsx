import '../../../platform/polyfills';
import './sass/disability-benefits.scss';

import startApp from '../../../platform/startup';

import routes from './routes';
import reducer from './reducer';
import manifest from './manifest.json';

startApp({
  url: manifest.rootUrl,
  reducer,
  routes
});
