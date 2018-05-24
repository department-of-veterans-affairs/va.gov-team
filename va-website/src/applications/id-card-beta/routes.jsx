import IDCardBetaEnrollment from './containers/IDCardBetaEnrollment';
import Main from './containers/Main';

const routes = {
  path: '/id-card-beta',
  component: IDCardBetaEnrollment,
  indexRoute: { component: Main },
};

export default routes;

