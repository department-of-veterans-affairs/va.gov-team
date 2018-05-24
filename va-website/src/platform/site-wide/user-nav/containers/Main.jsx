import React from 'react';
import { connect } from 'react-redux';
import appendQuery from 'append-query';
import URLSearchParams from 'url-search-params';

import recordEvent from '../../../monitoring/record-event';

import SignInModal from '../../../user/authentication/components/SignInModal';
import {
  isLoggedIn,
  isProfileLoading,
  isLOA3
} from '../../../user/selectors';
import { getProfile } from '../../../user/profile/actions';
import { updateLoggedInStatus } from '../../../user/authentication/actions';

import {
  toggleLoginModal,
  toggleSearchHelpUserMenu
} from '../../../site-wide/user-nav/actions';

import SearchHelpSignIn from '../components/SearchHelpSignIn';
import { selectUserGreeting } from '../selectors';

// const SESSION_REFRESH_INTERVAL_MINUTES = 45;

export class Main extends React.Component {
  componentDidMount() {
    window.addEventListener('message', this.setToken);
    this.bindNavbarLinks();

    // In some cases this component is mounted on a url that is part of the login process and doesn't need to make another
    // request, because that data will be passed to the parent window and done there instead.
    if (!window.location.pathname.includes('auth/login/callback')) {
      window.addEventListener('load', this.checkTokenStatus);
    }
  }

  componentDidUpdate() {
    const { currentlyLoggedIn, showLoginModal } = this.props;
    const nextParam = this.getRedirectUrl();

    const shouldRedirect =
      currentlyLoggedIn && nextParam && !window.location.pathname.includes('verify');

    if (shouldRedirect) {
      const redirectPath = nextParam.startsWith('/') ? nextParam : `/${nextParam}`;
      window.location.replace(redirectPath);
    }

    const shouldCloseLoginModal = currentlyLoggedIn && showLoginModal;

    if (shouldCloseLoginModal) { this.props.toggleLoginModal(false); }
  }

  componentWillUnmount() {
    this.unbindNavbarLinks();
  }

  setToken = (event) => {
    if (event.data === sessionStorage.userToken) { this.props.getProfile(); }
  }

  getRedirectUrl = () => (new URLSearchParams(window.location.search)).get('next');

  bindNavbarLinks = () => {
    [...document.querySelectorAll('.login-required')].forEach(el => {
      el.addEventListener('click', e => {
        if (!this.props.login.currentlyLoggedIn) {
          e.preventDefault();
          const nextQuery = { next: el.getAttribute('href') };
          const nextPath = appendQuery('/', nextQuery);
          history.pushState({}, el.textContent, nextPath);
          this.props.toggleLoginModal(true);
        }
      });
    });
  }

  unbindNavbarLinks = () => {
    [...document.querySelectorAll('.login-required')].forEach(el => {
      el.removeEventListener('click');
    });
  }

  checkTokenStatus = () => {
    if (sessionStorage.userToken) {
      // @todo once we have time to replace the confirm dialog with an actual modal we should uncomment this code.
      // if (moment() > moment(sessionStorage.entryTime).add(SESSION_REFRESH_INTERVAL_MINUTES, 'm')) {
      //   if (confirm('For security, you’ll be automatically signed out in 2 minutes. To stay signed in, click OK.')) {
      //     login();
      //   } else {
      //     logout();
      //   }
      // } else {
      //   if (this.props.getProfile()) {
      //     this.props.updateLoggedInStatus(true);
      //   }
      // }

      // @todo after doing the above, remove this code.
      if (this.props.getProfile()) {
        recordEvent({ event: 'login-user-logged-in' });
        this.props.updateLoggedInStatus(true);
      }
    } else {
      this.props.updateLoggedInStatus(false);
      if (this.getRedirectUrl()) { this.props.toggleLoginModal(true); }
    }
  }

  handleCloseModal = () => {
    this.props.toggleLoginModal(false);
    recordEvent({ event: 'login-modal-closed' });
  }

  render() {
    return (
      <div>
        <SearchHelpSignIn
          isLOA3={this.props.isLOA3}
          isLoggedIn={this.props.currentlyLoggedIn}
          isMenuOpen={this.props.utilitiesMenuIsOpen}
          isProfileLoading={this.props.isProfileLoading}
          userGreeting={this.props.userGreeting}
          toggleLoginModal={this.props.toggleLoginModal}
          toggleMenu={this.props.toggleSearchHelpUserMenu}/>
        <SignInModal
          onClose={this.handleCloseModal}
          visible={this.props.showLoginModal}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentlyLoggedIn: isLoggedIn(state),
    isProfileLoading: isProfileLoading(state),
    isLOA3: isLOA3(state),
    userGreeting: selectUserGreeting(state),
    ...state.navigation
  };
};

const mapDispatchToProps = {
  toggleLoginModal,
  toggleSearchHelpUserMenu,
  updateLoggedInStatus,
  getProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
