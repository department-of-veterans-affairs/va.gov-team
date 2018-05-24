import HealthBetaEnrollment from './containers/HealthBetaEnrollment';
import Main from './containers/Main';

const routes = {
  path: '/health-beta',
  component: HealthBetaEnrollment,
  indexRoute: { component: Main },
};

export default routes;

