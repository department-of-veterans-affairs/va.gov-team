import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

class ClaimComplete extends React.Component {
  render() {
    const completedDate = this.props.completedDate;
    return (
      <div className="usa-alert usa-alert-info no-background-image claims-alert-status">
        <h4 className="claims-alert-header">Your claim was closed {completedDate ? `on ${moment(completedDate).format('MMM D, YYYY')}` : null}</h4>
      </div>
    );
  }
}

ClaimComplete.propTypes = {
  completedDate: PropTypes.string
};

export default ClaimComplete;
