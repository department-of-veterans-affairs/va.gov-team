import Main from './containers/Main';
import Active from './containers/Active';
import History from './containers/History';
import Prescription from './containers/Prescription';
import Details from './containers/Details';
import TrackPackage from './containers/TrackPackage';
import Settings from './containers/Settings';
import RxRefillsApp from './containers/RxRefillsApp';
import GlossaryPage from './components/GlossaryPage';


const routes = {
  path: '/',
  component: RxRefillsApp,
  childRoutes: [
    {
      component: Main,
      indexRoute: { component: Active },
      childRoutes: [
        { path: 'history', component: History },
      ]
    },
    { path: 'glossary', component: GlossaryPage },
    { path: 'settings', component: Settings },
    {
      path: ':id',
      component: Prescription,
      indexRoute: { component: Details },
      childRoutes: [
        { path: 'track', component: TrackPackage }
      ]
    }
  ]
};

export default routes;
