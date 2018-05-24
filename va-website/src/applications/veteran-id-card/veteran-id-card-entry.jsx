import '../../platform/polyfills';
import './sass/veteran-id-card.scss';

import startApp from '../../platform/startup';

import routes from './routes';
import reducer from './reducers';

startApp({
  reducer,
  routes
});
