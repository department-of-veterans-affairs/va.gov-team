import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { merge } from 'lodash/fp';

import SearchHelpSignIn from '../../components/SearchHelpSignIn.jsx';

const defaultProps = {
  isLoggedIn: false,
  isMenuOpen: {
    account: false,
    help: false,
    search: false
  },
  isUserRegisteredForBeta: () => {},
  isProfileLoading: false,
  userGreeting: 'test@vets.gov',
  toggleLoginModal: () => {},
  toggleMenu: () => {}
};

describe('<SearchHelpSignIn>', () => {
  beforeEach(() => {
    global.sessionStorage = {};
    global.window = {
      location: {
        replace: () => {},
      }
    };
    global.window.location.pathname = '/';
  });

  it('should present login links when not logged in', () => {
    const wrapper = shallow(
      <SearchHelpSignIn {...defaultProps}/>
    );
    expect(wrapper.find('.sign-in-link')).to.have.lengthOf(2);
  });

  it('should render <SignInProfileMenu/> when logged in', () => {
    const signedInProps = merge(defaultProps, { isLoggedIn: true });
    const wrapper = shallow(<SearchHelpSignIn {...signedInProps}/>);
    expect(wrapper.find('SignInProfileMenu').exists()).to.be.true;
  });

  it('should display email for an LOA1 user without a firstname', () => {
    const loa1Props = merge(defaultProps, {
      isLoggedIn: true,
      profile: {
        userFullName: { first: null }
      }
    });
    const wrapper = shallow(
      <SearchHelpSignIn {...loa1Props}/>
    );
    const dropdown = wrapper.find('SignInProfileMenu').dive().find('DropDownPanel').dive();
    expect(dropdown.text()).to.contain(defaultProps.userGreeting);
  });
});
