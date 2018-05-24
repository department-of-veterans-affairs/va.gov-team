import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';

import Form1990App from './Form1990App';
import formConfig from './config/form';

const routes = [
  {
    path: '/',
    component: Form1990App,
    indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
    childRoutes: createRoutesWithSaveInProgress(formConfig),
  }
];

export default routes;
