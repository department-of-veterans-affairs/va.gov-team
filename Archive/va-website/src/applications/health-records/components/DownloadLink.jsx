import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import recordEvent from '../../../platform/monitoring/record-event';
import { apiRequest } from '../../../platform/utilities/api';

class DownloadLink extends React.Component {
  constructor(props) {
    super(props);
    this.downloadHealthRecord = this.downloadHealthRecord.bind(this);
    this.downloadUrl = null;
    this.state = { downloading: false };
  }

  downloadHealthRecord(e, stopPropagation = true) {
    e.preventDefault();

    if (this.props.onClick && stopPropagation) {
      this.props.onClick(e);
      return;
    }

    if (this.state.downloading) return;

    recordEvent({
      event: 'health-record-download',
      'hr-record-type': this.props.docType,
    });

    if (this.downloadUrl) {
      window.open(this.downloadUrl, '_blank');
      return;
    }

    let downloadWindow;

    // create the window before the AJAX request
    // to mitigate interception by popup blocker
    if (!window.navigator.msSaveOrOpenBlob) {
      downloadWindow = window.open();
    }

    this.setState({ downloading: true });
    const requestUrl = `/health_records?doc_type=${this.props.docType}`;
    apiRequest(
      requestUrl,
      null,
      response => {
        response.blob().then(blob => {
          if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, `health_record_${moment().format('MMDDYYYY')}.${this.props.docType}`);
          } else {
            const downloadUrl = URL.createObjectURL(blob);
            this.downloadUrl = downloadUrl;
            downloadWindow.location.href = this.downloadUrl;
          }
          this.setState({ downloading: false });
        });
      },
      () => { this.setState({ downloading: false }); }
    );
  }

  render() {
    const loadingMessage = <span>Loading...</span>;

    return (
      <button onClick={this.downloadHealthRecord}>
        {this.state.downloading ? <i className="fa fa-spinner fa-pulse"></i> : null}
        {this.state.downloading ? loadingMessage : this.props.name}
      </button>
    );
  }
}

DownloadLink.propTypes = {
  name: PropTypes.string.isRequired,
  docType: PropTypes.oneOf(['pdf', 'txt']),
  onClick: PropTypes.func,
};

export default DownloadLink;
