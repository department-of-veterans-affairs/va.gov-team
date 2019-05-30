import { createRoutesWithSaveInProgress } from '../common/schemaform/save-in-progress/helpers';

import formConfig from './config/form';
import HealthCareApp from './HealthCareApp.jsx';

const route = {
  path: '/',
  component: HealthCareApp,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutesWithSaveInProgress(formConfig),
};

export default route;
