import React from 'react';
import { connect } from 'react-redux';

import UserInfoSection from '../components/UserInfoSection';

import { focusElement } from '../../../platform/utilities/ui';
import { formatDateLong } from '../../../platform/utilities/date';

export class PrintPage extends React.Component {
  componentDidMount() {
    focusElement('.print-screen');
    document.querySelector('header').classList.add('no-print-no-sr');
    document.querySelector('footer').classList.add('no-print-no-sr');
    document.querySelector('.va-nav-breadcrumbs').classList.add('no-print-no-sr');
  }

  componentWillUnmount() {
    document.querySelector('header').classList.remove('no-print-no-sr');
    document.querySelector('footer').classList.remove('no-print-no-sr');
    document.querySelector('.va-nav-breadcrumbs').classList.remove('no-print-no-sr');
  }

  backToStatement = () => this.props.router.push('/');
  printWindow = () => window.print();

  render() {
    const enrollmentData = this.props.enrollmentData || {};

    const todayFormatted = formatDateLong(new Date());

    return (
      <div className="usa-width-two-thirds medium-8 columns gib-info">
        <div className="print-status">
          <div className="print-screen">
            <img src="/img/design/logo/va-logo.png" alt="VA logo" width="300"/>
            <h1 className="section-header">Post-9/11 GI Bill<sup>&reg;</sup> Statement of Benefits</h1>
            <button
              className="usa-button-primary"
              onClick={this.printWindow}>Print This Page</button>
            <p>
              The information in this letter is the Post-9/11 GI Bill Statement of Benefits for
              the beneficiary listed below as of {todayFormatted}. Any pending or recent changes to
              enrollment may affect remaining entitlement.
            </p>
            <UserInfoSection enrollmentData={enrollmentData}/>
            <button
              className="usa-button-secondary"
              onClick={this.backToStatement}>Back to Statement Page</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    enrollmentData: state.post911GIBStatus.enrollmentData
  };
}

export default connect(mapStateToProps)(PrintPage);
