import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';

/**
 * React component for enabling or disabling access to content based on a randomizer and an integer representing the threshold.
 * The integers representing the threshold are defined in the create-settings build process.
 * For content to be enabled, a randomly-generated number must be greater than than that integer.
 * For example, in theory a "1" would mean 100% of users will be denied access, while a "4" means only 40% of users would be denied.
 * @example Expects a settings object that looks like:
 *  settings: {
 *    [id]: {
 *      rateLimitAuthed: 1,
 *      rateLimitUnauthed: 1
 *    }
 *  }
 * @module platform/monitoring/RateLimiter
 * @see module:config/create-settings
 */
export class RateLimiter extends React.Component {
  constructor(props) {
    super(props);
    // 0 is nothing gets through, 1 is everything gets through
    const { rateLimitAuthed = 1, rateLimitUnauthed = 1 } = window.settings[props.id] || {};
    const randomizer = Math.random();

    this.state = {
      rateLimitDisabled: window.sessionStorage.getItem(`${props.id}_rateLimitDisabled`),
      passedUnauthedRateLimit: randomizer < rateLimitUnauthed,
      passedAuthedRateLimit: randomizer < rateLimitAuthed
    };
  }

  componentDidMount() {
    this.disableRateLimitIfNecessary();
  }

  componentDidUpdate() {
    this.disableRateLimitIfNecessary();
  }

  disableRateLimitIfNecessary = () => {
    const { state, waitForProfile, id } = this.props;
    const { passedAuthedRateLimit, passedUnauthedRateLimit } = this.state;

    if ((!state.user.profile.loading || !waitForProfile) && (
      (state.user.login.currentlyLoggedIn && passedAuthedRateLimit) ||
      (!state.user.login.currentlyLoggedIn && passedUnauthedRateLimit)
    )) {
      window.sessionStorage.setItem(`${id}_rateLimitDisabled`, 'true');
    }
  }

  render() {
    const { state, bypassLimit, renderLimitedContent, waitForProfile, children } = this.props;

    if (waitForProfile && state.user.profile.loading) {
      return <LoadingIndicator message="Loading your profile information..."/>;
    }

    const passedRateLimit = state.user.login.currentlyLoggedIn
      ? this.state.passedAuthedRateLimit
      : this.state.passedUnauthedRateLimit;

    if (passedRateLimit || this.state.rateLimitDisabled || (bypassLimit && bypassLimit(state))) {
      return children;
    }

    return renderLimitedContent(state);
  }
}

RateLimiter.propTypes = {
  id: PropTypes.string.isRequired,
  bypassLimit: PropTypes.func,
  waitForProfile: PropTypes.bool,
  state: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(RateLimiter);
