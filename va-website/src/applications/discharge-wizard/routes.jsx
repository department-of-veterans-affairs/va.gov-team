import DischargeWizardApp from './DischargeWizardApp';
import GuidancePage from './containers/GuidancePage';
import FormPage from './containers/FormPage';
import InstructionsPage from './components/InstructionsPage';
import RequestDD214 from './containers/RequestDD214';

const routes = {
  path: '/',
  component: DischargeWizardApp,
  indexRoute: { component: InstructionsPage },
  childRoutes: [
    { path: 'questions', component: FormPage },
    { path: 'guidance', component: GuidancePage },
    { path: 'request-dd214', component: RequestDD214 },
  ],
};

export default routes;
