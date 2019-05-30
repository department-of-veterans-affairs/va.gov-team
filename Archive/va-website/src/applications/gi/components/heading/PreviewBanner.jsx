import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

class PreviewBanner extends React.Component {
  render() {
    const when = moment(this.props.version.createdAt).format('MMM D, YYYY [at] h:mm a [EST]');

    return (
      <div className="gi-preview-banner">
        <div className="outer small-12 medium-12 large-9">
          <div className="inner">
            <h5>Preview draft</h5>
            <p>
              This is what the version of this data from {when} will look like.&nbsp;
              <span className="actions">
                <a onClick={this.props.onViewLiveVersion}>View live version</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href={this.props.toolUrl}>Go back to the data tool</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

PreviewBanner.propTypes = {
  version: PropTypes.object.isRequired,
  toolUrl: PropTypes.string.isRequired,
  onViewLiveVersion: PropTypes.func.isRequired
};

PreviewBanner.defaultProps = {
  toolUrl: '/gids'
};

export default PreviewBanner;
