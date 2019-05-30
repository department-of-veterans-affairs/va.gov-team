import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { checkRefreshStatus } from '../actions/refresh';
import { submitForm } from '../actions/form';

import ProgressBar from '@department-of-veterans-affairs/formation/ProgressBar';

export class UpdatePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSkipToDownload = this.handleSkipToDownload.bind(this);
    this.submitAndDownload = this.submitAndDownload.bind(this);
  }

  componentDidMount() {
    scrollTo(0, 0);
    this.props.checkRefreshStatus();
    this.pollRefresh = setInterval(this.props.checkRefreshStatus, 30000);
    this.refreshTimeout = setTimeout(this.submitAndDownload, 600000);
  }

  componentDidUpdate() {
    const incompleteUpdates = this.props.refresh.statuses.incomplete;
    // automatically go to Download page when all statuses have resolved
    // in either success or failure
    if (!incompleteUpdates || incompleteUpdates.length === 0) {
      this.submitAndDownload();
    }
  }

  componentWillUnmount() {
    clearInterval(this.pollRefresh);
    clearTimeout(this.refreshTimeout);
  }

  submitAndDownload() {
    this.props.router.push('/download');
    this.props.submitForm(JSON.parse(sessionStorage.getItem('hr-form')));
  }

  handleSkipToDownload(e) {
    e.preventDefault();
    this.submitAndDownload();
  }

  render() {
    const { statuses } = this.props.refresh;
    const successes = statuses.succeeded.length;
    const failures = statuses.failed.length;
    const completionPercentage = (successes / (successes + failures) * 100) || 0;

    return (
      <div className="update-page usa-width-one-half medium-6">
        <ProgressBar percent={completionPercentage}/>
        <h1>Updating your records</h1>
        <p>
          To get the most up-to-date information, please wait for your health records to finish updating. This may take a few minutes.
        </p>
        <p>
          <Link to="/download" onClick={this.handleSkipToDownload}>Get an older version of your records ></Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const hrState = state.health.hr;
  return { refresh: hrState.refresh };
};

const mapDispatchToProps = {
  checkRefreshStatus,
  submitForm,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePage));
