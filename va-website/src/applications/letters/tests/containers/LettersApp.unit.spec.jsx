import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { LettersApp, AppContent } from '../../containers/LettersApp';

import reducer from '../../reducers';
import createCommonStore from '../../../../platform/startup/store';

const store = createCommonStore(reducer);

const mockRoutes = [{ path: '/fake' }];
const defaultProps = {
  store,
  location: { pathname: '/blah' },
  route: { childRoutes: mockRoutes },
  profile: {
    userFullName: { first: null, middle: null, last: null, suffix: null },
    email: null,
    dob: null,
    gender: null,
    accountType: null,
    terms: { loading: false, terms: {} },
    savedForms: [],
    prefillsAvailable: [],
    loading: true
  }
};

describe('<LettersApp>', () => {
  it('should render AppContent', () => {
    const tree = SkinDeep.shallowRender(<LettersApp {...defaultProps}/>);
    // div() throws an exception if it can't find the selector
    expect(tree.dive(['AppContent'])).to.not.be.null;
  });

  describe('<AppContent>', () => {
    it('should render children if data available', () => {
      const tree = SkinDeep.shallowRender(
        <AppContent isDataAvailable>
          <span>Rendered!</span>
        </AppContent>
      );
      expect(tree.text()).to.equal('Rendered!');
    });

    it('should display error message if data is not available', () => {
      const tree = SkinDeep.shallowRender(
        <AppContent isDataAvailable={false}>
          <span>Rendered!</span>
        </AppContent>
      );
      const text = tree.text();
      expect(text).to.contain('We weren’t able to find information about your VA letters.');
      expect(text).to.not.contain('Rendered!');
    });
  });
});
