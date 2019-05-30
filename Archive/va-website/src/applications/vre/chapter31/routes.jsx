import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';

import formConfig from './config/form';
import Chapter31App from './Chapter31App.jsx';

const route = {
  path: '/',
  component: Chapter31App,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutesWithSaveInProgress(formConfig),
};

export default route;
