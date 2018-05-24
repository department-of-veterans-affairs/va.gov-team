import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';

import Form526EZApp from './Form526EZApp';
import formConfig from './config/form';

const routes = [
  {
    path: '/',
    component: Form526EZApp,
    indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
    childRoutes: createRoutesWithSaveInProgress(formConfig),
  }
];

export default routes;
