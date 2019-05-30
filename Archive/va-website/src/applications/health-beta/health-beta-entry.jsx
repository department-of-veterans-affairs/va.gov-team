import '../../platform/polyfills';
import '../rx/sass/rx.scss';
import '../user-profile/sass/user-profile.scss';

import startApp from '../../platform/startup';

import routes from './routes';
import reducer from './reducers';

// This will need a url when/if it gets turned back on
startApp({
  reducer,
  routes
});
