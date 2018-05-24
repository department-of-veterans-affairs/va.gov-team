import React from 'react';
import PropTypes from 'prop-types';

class SignInLink extends React.Component {
  constructor(props) {
    super(props);

    // I don’t like this, but we need to make sure componentWillReceiveProps
    //  doesn’t call onLogin() when a page with a SignInLink is refreshed and
    //  a user is logged in.
    this.loginAttemptInProgress = false;
  }

  // If the loggedIn status went from false to true, call onLogin()
  componentWillReceiveProps(newProps) {
    const loginAttemptCompleted = this.props.showLoginModal === true
      && newProps.showLoginModal === false
      && this.loginAttemptInProgress;

    if (loginAttemptCompleted && newProps.isLoggedIn) {
      this.loginAttemptInProgress = false;
      if (this.props.onLogin) {
        this.props.onLogin();
      }
    } else if (loginAttemptCompleted && !newProps.isLoggedIn) {
      this.loginAttemptInProgress = false;
    }
  }

  signIn = (e) => {
    if (this.props.type === 'button') {
      e.preventDefault(); // Don’t try to submit the page
    }
    this.loginAttemptInProgress = true;
    this.props.toggleLoginModal(true);
  }

  render() {
    return React.createElement(
      this.props.type || 'a',
      {
        className: this.props.className,
        onClick: this.signIn
      },
      this.props.children
    );
  }
}

SignInLink.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onLogin: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
  showLoginModal: PropTypes.bool.isRequired,
  toggleLoginModal: PropTypes.func.isRequired,
};

export default SignInLink;
