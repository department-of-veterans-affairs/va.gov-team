import { createRoutesWithSaveInProgress } from '../common/schemaform/save-in-progress/helpers';

import formConfig from './config/form';
import App from './containers/App.jsx';

const route = {
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutesWithSaveInProgress(formConfig),
};

export default route;
