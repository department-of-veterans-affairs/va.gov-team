import { createRoutesWithSaveInProgress } from '../common/schemaform/save-in-progress/helpers';

import formConfig from './config/form';
import PreNeedApp from './PreNeedApp.jsx';

const route = {
  path: '/',
  component: PreNeedApp,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutesWithSaveInProgress(formConfig),
};

export default route;
