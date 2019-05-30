import HealthRecordsApp from './containers/HealthRecordsApp';
import Main from './containers/Main';
import DownloadPage from './containers/DownloadPage';
import UpdatePage from './containers/UpdatePage';

const routes = {
  path: '/',
  component: HealthRecordsApp,
  indexRoute: { component: Main },
  childRoutes: [
    { path: 'download', component: DownloadPage },
    { path: 'loading', component: UpdatePage },
  ],
};

export default routes;
