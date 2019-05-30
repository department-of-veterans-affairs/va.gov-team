import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';

import Form1990nApp from './Form1990nApp';
import formConfig from './config/form';

const routes = [
  {
    path: '/',
    component: Form1990nApp,
    indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
    childRoutes: createRoutesWithSaveInProgress(formConfig),
  }
];

export default routes;
