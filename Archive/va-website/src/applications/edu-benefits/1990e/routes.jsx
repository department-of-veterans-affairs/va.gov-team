import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';

import Form1990eApp from './Form1990eApp';
import formConfig from './config/form';

const routes = [
  {
    path: '/',
    component: Form1990eApp,
    indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
    childRoutes: createRoutesWithSaveInProgress(formConfig),
  }
];

export default routes;
