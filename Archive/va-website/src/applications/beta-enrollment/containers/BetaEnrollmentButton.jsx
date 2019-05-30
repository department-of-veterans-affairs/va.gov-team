import appendQuery from 'append-query';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerBeta } from '../actions';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import { createIsServiceAvailableSelector } from '../../../platform/user/selectors';

class BetaEnrollmentButton extends React.Component {
  static propTypes = {
    feature: PropTypes.string.isRequired,
    returnUrl: PropTypes.string.isRequired
  };

  constructor(props) {
    // Using state instead of props for error handling, because there isn't a place to store errors
    // in the Redux user/profile store, and I chose not to clutter that up with something that is unlikely to be used.
    super(props);
    this.state = { isEnrolling: false, hasError: false };
  }

  onError = () => {
    this.setState({ isEnrolling: false, hasError: true });
  }

  onRegistered = () => {
    document.location.replace(this.props.returnUrl);
  }

  onClick = () => {
    if (this.props.user.login.currentlyLoggedIn) {
      this.setState({ isEnrolling: true });
      this.props.registerBeta(this.props.feature).then(this.onRegistered).catch(this.onError);
    } else {
      const nextQuery = { next: window.location.pathname };
      const signInUrl = appendQuery('/', nextQuery);
      window.location.replace(signInUrl);
    }
  }

  render() {
    if (this.props.isUserRegisteredForBeta) this.onRegistered();

    if (this.state.hasError) {
      return (
        <AlertBox status="error"
          isVisible={this.state.hasError}
          content={<div><h3>We can't turn on the beta tools</h3><p>We're sorry. Something went wrong on our end, and we can't turn on the beta tools for you. Please try again later.</p></div>}/>
      );
    }

    let buttonText = 'Turn On Beta Tools';

    if (this.props.user.profile.loading) buttonText = 'Loading Profile...';
    else if (this.state.isEnrolling) buttonText = 'Turning On Beta Tools';

    const disabled = this.state.isEnrolling || this.props.user.profile.loading;

    return (
      <button className="usa-button-primary"
        disabled={disabled}
        onClick={this.onClick}>
        {buttonText}
      </button>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const isServiceAvailable = createIsServiceAvailableSelector(ownProps.feature);
  return {
    user: state.user,
    isUserRegisteredForBeta: isServiceAvailable(state)
  };
};

const mapDispatchToProps = {
  registerBeta
};

export { BetaEnrollmentButton };

export default connect(mapStateToProps, mapDispatchToProps)(BetaEnrollmentButton);
