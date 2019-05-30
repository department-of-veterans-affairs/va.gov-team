import React from 'react';
import { Route, IndexRedirect, Redirect } from 'react-router';

// import YourClaimsPage from './containers/YourClaimsPage';
import YourClaimsPageV2 from './containers/YourClaimsPageV2';
import ClaimPage from './containers/ClaimPage';
import ClaimStatusPage from './containers/ClaimStatusPage';
// import AppealStatusPage from './containers/AppealStatusPage';
import FilesPage from './containers/FilesPage';
import DetailsPage from './containers/DetailsPage';
import AskVAPage from './containers/AskVAPage';
import DocumentRequestPage from './containers/DocumentRequestPage';
import AdditionalEvidencePage from './containers/AdditionalEvidencePage';
import ClaimEstimationPage from './containers/ClaimEstimationPage';
// import AppealLayout from './components/AppealLayout';
import AppealsV2StatusPage from './containers/AppealsV2StatusPage';
import AppealsV2DetailPage from './containers/AppealsV2DetailPage';
import AppealInfo from './containers/AppealInfo';

const routes = [
  <Redirect
    key="/track-claims/your-claims"
    from="/disability-benefits/track-claims*"
    to="/your-claims"/>,
  <Route
    component={YourClaimsPageV2}
    key="/your-claims"
    path="/your-claims"/>,
  /*
  <Route
    component={YourClaimsPage}
    key="/your-claims"
    path="/your-claims"/>,
  <Route
    component={YourClaimsPage}
    showClosedClaims
    key="/your-claims/closed"
    path="/your-claims/closed"/>,
  <Route
    component={AppealLayout}
    key="/appeals"
    path="/appeals">
    <Route
      component={AppealStatusPage}
      key=":id/status"
      path=":id/status"/>,
  </Route>,
  */
  <Route
    component={AppealInfo}
    key="/appeals/:id"
    path="/appeals/:id">
    <IndexRedirect
      to="status"/>
    <Route
      component={AppealsV2StatusPage}
      key="status"
      path="status"/>
    <Route
      component={AppealsV2DetailPage}
      key="detail"
      path="detail"/>
  </Route>,
  <Route
    component={ClaimPage}
    key="/your-claims/:id"
    path="/your-claims/:id">
    <IndexRedirect to="status"/>
    <Route
      component={ClaimStatusPage}
      path="status"/>,
    <Route
      component={FilesPage}
      path="files"/>,
    <Route
      component={DetailsPage}
      path="details"/>,
    <Route
      component={AskVAPage}
      path="ask-va-to-decide"/>
    <Route
      component={AdditionalEvidencePage}
      key="additional-evidence"
      path="additional-evidence"/>,
    <Route
      component={DocumentRequestPage}
      path="document-request/:trackedItemId"/>
    <Route
      component={ClaimEstimationPage}
      key="claim-estimate"
      path="claim-estimate"/>,
  </Route>,
];

export default routes;
