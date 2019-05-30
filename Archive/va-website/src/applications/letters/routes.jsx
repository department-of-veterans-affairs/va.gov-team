import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import DownloadLetters from './containers/DownloadLetters.jsx';
import AddressSection from './containers/AddressSection.jsx';
import LetterList from './containers/LetterList.jsx';
import Main from './containers/Main.jsx';
import LettersApp from './containers/LettersApp.jsx';

const routes = (
  <Route path="/" component={LettersApp}>
    <Route
      component={Main}
      key="main">
      <Route
        component={DownloadLetters}
        name="Download Letters"
        key="download-letters">
        <IndexRedirect to="confirm-address"/>,
        <Route
          component={AddressSection}
          name="Review your address"
          key="confirm-address"
          path="confirm-address"/>,
        <Route
          component={LetterList}
          name="Select and download"
          key="letter-list"
          path="letter-list"/>
      </Route>
    </Route>
  </Route>
);

export default routes;

export const chapters = [
  { name: 'Review your address', path: '/confirm-address' },
  { name: 'Select and download', path: '/letter-list' }
];
