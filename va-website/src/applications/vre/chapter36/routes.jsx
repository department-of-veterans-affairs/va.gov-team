import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';

import formConfig from './config/form';
import Chapter36App from './Chapter36App.jsx';

const route = {
  path: '/',
  component: Chapter36App,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutesWithSaveInProgress(formConfig),
};

export default route;
