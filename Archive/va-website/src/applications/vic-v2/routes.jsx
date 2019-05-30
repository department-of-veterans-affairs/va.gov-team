import { createRoutesWithSaveInProgress } from '../common/schemaform/save-in-progress/helpers';

import formConfig from './config/form';
import VeteranIDCardApp from './VeteranIDCardApp';

const route = {
  path: '/',
  component: VeteranIDCardApp,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutesWithSaveInProgress(formConfig),
};

export default route;
