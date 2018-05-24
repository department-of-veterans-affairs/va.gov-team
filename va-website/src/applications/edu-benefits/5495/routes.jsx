import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';

import Form5495App from './Form5495App';
import formConfig from './config/form';

const routes = [
  {
    path: '/',
    component: Form5495App,
    indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
    childRoutes: createRoutesWithSaveInProgress(formConfig),
  }
];

export default routes;
