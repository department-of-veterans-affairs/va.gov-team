import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import { closeAlert } from '../actions/alert.js';
import { loadPrescription } from '../actions/prescriptions';
import SettingsButton from '../components/SettingsButton';
import TabItem from '../components/TabItem';

export class Prescription extends React.Component {
  componentDidMount() {
    scrollTo(0, 0);

    if (!this.props.loading) {
      this.props.loadPrescription(this.props.params.id);
    }
  }

  render() {
    const { alert, loading, prescription } = this.props;
    const requestedRxId = this.props.params.id;
    const currentRxId = _.get(prescription, 'rx.id');
    const isSameRx = requestedRxId === currentRxId;

    const title = _.get(
      prescription,
      ['rx', 'attributes', 'prescriptionName'],
      'Prescription Refill'
    );

    let content;

    // If the item in state doesn’t reflect the item from the URL,
    // show the loader until the requested item finishes loading.
    if (loading || (prescription && !isSameRx)) {
      content = <LoadingIndicator message="Loading your prescription..."/>;
    } else if (prescription) {
      content = (
        <div>
          <ul className="va-tabs rx-nav va-dnp">
            <TabItem tabpath={`/${currentRxId}`} title="Prescription Details"/>
            <TabItem tabpath={`/${currentRxId}/track`} title="Track Package"/>
          </ul>
          {this.props.children}
        </div>
      );
    } else {
      content = (
        <p className="rx-loading-error">
          We couldn’t retrieve your prescription.
          Please refresh this page or try again later.
          If this problem persists, please call the Vets.gov Help Desk
          at <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET).
        </p>
      );
    }

    return (
      <div id="rx-prescription">
        <AlertBox
          content={alert.content}
          isVisible={alert.visible}
          onCloseAlert={this.props.closeAlert}
          scrollOnShow
          status={alert.status}/>
        <div className="rx-app-title">
          <h1>{title}</h1>
          <SettingsButton/>
        </div>
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const rxState = state.health.rx;
  return {
    alert: rxState.alert,
    loading: rxState.prescriptions.detail.loading,
    prescription: rxState.prescriptions.currentItem
  };
};

const mapDispatchToProps = {
  closeAlert,
  loadPrescription
};

export default connect(mapStateToProps, mapDispatchToProps)(Prescription);
