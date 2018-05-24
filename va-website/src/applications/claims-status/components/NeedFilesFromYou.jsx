import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

class NeedFilesFromYou extends React.Component {
  render() {
    const files = this.props.files;
    return (
      <div className="usa-alert usa-alert-warning claims-alert claims-alert-status need-files-alert">
        <div className="usa-alert-body alert-with-details">
          <div className="item-container">
            <h4 className="usa-alert-heading">{files} {files === 1 ? 'item needs' : 'items need'} your attention</h4>
          </div>
          <div className="button-container">
            <Link
              aria-label="View details about items that need your attention"
              title="View details about items that need your attention"
              to={`your-claims/${this.props.claimId}/files`}
              className="usa-button usa-button-secondary view-details-button">View Details</Link>
          </div>
        </div>
      </div>
    );
  }
}

NeedFilesFromYou.propTypes = {
  files: PropTypes.number.isRequired
};

export default NeedFilesFromYou;
