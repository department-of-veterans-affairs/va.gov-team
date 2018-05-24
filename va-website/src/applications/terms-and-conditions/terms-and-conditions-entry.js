import '../../platform/polyfills';
import './sass/terms-and-conditions.scss';

import startApp from '../../platform/startup';

import routes from './routes';
import reducer from './reducers';

startApp({ reducer, routes });
