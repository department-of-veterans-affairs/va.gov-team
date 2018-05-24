import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';

import Form1995App from './Form1995App';
import formConfig from './config/form';

const routes = [
  {
    path: '/',
    component: Form1995App,
    indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
    childRoutes: createRoutesWithSaveInProgress(formConfig),
  }
];

export default routes;
