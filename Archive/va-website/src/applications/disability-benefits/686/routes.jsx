import { createRoutesWithSaveInProgress } from '../../common/schemaform/save-in-progress/helpers';
import formConfig from './config/form';
import Form686App from './containers/Form686App.jsx';

const route = {
  path: '/',
  component: Form686App,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutesWithSaveInProgress(formConfig)
};

export default route;
