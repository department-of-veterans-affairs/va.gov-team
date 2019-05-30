import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';

import {
  getScheduledDowntime,
  initializeDowntimeWarnings,
  dismissDowntimeWarning
} from '../actions';

import {
  getSoonestDowntime
} from '../util/helpers';

import services from '../config/services';
import serviceStatus from '../config/serviceStatus';

import Down from '../components/Down';
import DowntimeApproaching from '../components/DowntimeApproaching';

/**
 * React component used to conditionally render children components based on the status (down, down-approaching, or ok) of Vets.gov services.
 * @property {string} [appTitle] - The name of the consuming application, which will be displayed in downtime messaging.
 * @property {node} [children] - React components to be rendered based on downtime.
 * @property {node} [content] - Alias for React.children.
 * @property {Array<string>} dependencies - An array of services that the consuming application requires in order to operate.
 * @property {function} getScheduledDowntime - [Provided by container] An action creator that retrieves the array of downtime from the API downtime endpoint.
 * @property {boolean} isReady - [Provided by container] A flag for indicating whether the downtime array has been retrieved from the API and if the component can render.
 * @property {Node} [loadingIndicator] - A React component that will be rendered while the request to the API for downtime information is pending.
 * @property {function} [render] - A function that may be supplied for custom rendering, useful for customizing how downtime/downtime approaching is handled. Receives the derived status, downtimeWindow, downtimeMap, children as arguments.
 * @module platorm/monitoring/DowntimeNotification
 */
class DowntimeNotification extends React.Component {

  static propTypes = {
    appTitle: PropTypes.string,
    children: PropTypes.node,
    content: PropTypes.node,
    dependencies: PropTypes.arrayOf(PropTypes.oneOf(Object.values(services))).isRequired,
    getScheduledDowntime: PropTypes.func.isRequired,
    isReady: PropTypes.bool,
    loadingIndicator: PropTypes.node,
    render: PropTypes.func
  };

  componentDidMount() {
    if (this.props.shouldSendRequest) this.props.getScheduledDowntime();
  }

  render() {
    if (!this.props.isReady) {
      return this.props.loadingIndicator || <LoadingIndicator message={`Checking the ${this.props.appTitle} status...`}/>;
    }

    const children = this.props.children || this.props.content;

    if (this.props.render) {
      return this.props.render({
        externalService: this.props.externalService,
        status: this.props.status,
        startTime: this.props.startTime,
        endTime: this.props.endTime
      }, children);
    }

    if (this.props.status === serviceStatus.downtimeApproaching) {
      return <DowntimeApproaching {...this.props}/>;
    }

    if (this.props.status === serviceStatus.down) {
      return <Down {...this.props}/>;
    }

    return children;
  }
}

// exported for unit tests
export const mapStateToProps = (state, ownProps) => {
  const scheduledDowntime = state.scheduledDowntime;
  const shouldSendRequest = !scheduledDowntime.isReady && !scheduledDowntime.isPending;
  const isDowntimeWarningDismissed = scheduledDowntime.dismissedDowntimeWarnings.includes(ownProps.appTitle);

  let downtime = null;
  if (scheduledDowntime.isReady) {
    downtime = getSoonestDowntime(scheduledDowntime.serviceMap, ownProps.dependencies);
  }

  return {
    shouldSendRequest,
    isDowntimeWarningDismissed,
    ...scheduledDowntime,
    ...downtime
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getScheduledDowntime() {
      return dispatch(getScheduledDowntime());
    },
    initializeDowntimeWarnings() {
      return dispatch(initializeDowntimeWarnings());
    },
    dismissDowntimeWarning() {
      return dispatch(dismissDowntimeWarning(ownProps.appTitle));
    }
  };
};

export { DowntimeNotification };
export default connect(mapStateToProps, mapDispatchToProps)(DowntimeNotification);
