import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import objectValues from 'lodash/fp/values';
import { features } from '../routes';
import { isProfileLoading, createIsServiceAvailableSelector } from '../../../platform/user/selectors';

class BetaApp extends React.Component {

  static propTypes = {
    featureName: PropTypes.oneOf(objectValues(features)).isRequired
  };

  render() {
    if (this.props.loading) return null;
    if (this.props.isUserRegisteredForBeta) return this.props.children;

    document.location.replace(this.props.redirect);
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  const isServiceAvailable = createIsServiceAvailableSelector(ownProps.featureName);
  return {
    loading: isProfileLoading(state),
    isUserRegisteredForBeta: isServiceAvailable(state)
  };
};

export { BetaApp, features };

export default connect(mapStateToProps)(BetaApp);
