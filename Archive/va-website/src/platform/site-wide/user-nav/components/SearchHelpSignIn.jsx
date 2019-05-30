import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import recordEvent from '../../../monitoring/record-event';
import HelpMenu from './HelpMenu';
import SearchMenu from './SearchMenu';
import SignInProfileMenu from './SignInProfileMenu';

class SearchHelpSignIn extends React.Component {
  handleSignInSignUp = (e) => {
    e.preventDefault();
    recordEvent({ event: 'login-link-clicked' });
    this.props.toggleLoginModal(true);
  }

  handleMenuClick = (menu) => {
    return () => { this.props.toggleMenu(menu, !this.props.isMenuOpen[menu]); };
  }

  handleSearchMenuClick = this.handleMenuClick('search');
  handleHelpMenuClick = this.handleMenuClick('help');
  handleAccountMenuClick = this.handleMenuClick('account');

  hasSession = () => {
    // Includes a safety check because sessionStorage is not defined during e2e testing
    return !!(window.sessionStorage && window.sessionStorage.getItem('userFirstName'));
  }

  renderSignInContent = () => {
    const isLoading = this.props.isProfileLoading;
    const shouldRenderSignedInContent =
      (!isLoading && this.props.isLoggedIn) ||
      (isLoading && this.hasSession());

    // If we're done loading, and the user is logged in, or loading is in progress,
    // and we have information is session storage, we can go ahead and render.
    if (shouldRenderSignedInContent) {
      return (
        <SignInProfileMenu
          disabled={isLoading}
          clickHandler={this.handleAccountMenuClick}
          greeting={this.props.userGreeting}
          isOpen={this.props.isMenuOpen.account}
          isLOA3={this.props.isLOA3}/>
      );
    }

    const buttonClasses = classNames({
      'va-button-link': true,
      'sign-in-link': true
    });

    return (
      <div className="sign-in-links">
        <button className={buttonClasses} onClick={this.handleSignInSignUp}>Sign In</button>
        <span className="sign-in-spacer">|</span>
        <button className={buttonClasses} onClick={this.handleSignInSignUp}>Sign Up</button>
      </div>
    );
  }

  render() {
    return (
      <div className="profile-nav">
        <SearchMenu
          isOpen={this.props.isMenuOpen.search}
          clickHandler={this.handleSearchMenuClick}/>
        <HelpMenu
          isOpen={this.props.isMenuOpen.help}
          clickHandler={this.handleHelpMenuClick}/>
        <div className="sign-in-nav">
          {this.renderSignInContent()}
        </div>
      </div>
    );
  }
}

SearchHelpSignIn.propTypes = {
  isLOA3: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  isMenuOpen: PropTypes.objectOf(PropTypes.bool).isRequired,
  isProfileLoading: PropTypes.bool.isRequired,
  userGreeting: PropTypes.string.isRequired,
  toggleLoginModal: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default SearchHelpSignIn;
