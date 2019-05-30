import FacilityLocatorApp from './containers/FacilityLocatorApp';
import FacilityDetail from './containers/FacilityDetail';
import VAMap from './containers/VAMap';

const routes = {
  path: '/',
  component: FacilityLocatorApp,
  childRoutes: [
    {
      indexRoute: { component: VAMap },
      childRoutes: [
        { path: 'facility/:id', component: FacilityDetail },
      ]
    },
  ]
};

export default routes;
