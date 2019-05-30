import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

import { rxStatuses } from '../config';
import { formatDate } from '../utils/helpers';
import GlossaryLink from '../components/GlossaryLink';
import RefillsRemainingCounter from './RefillsRemainingCounter';
import TrackPackageLink from './TrackPackageLink';
import SubmitRefill from './SubmitRefill';

class PrescriptionCard extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTracking = this.showTracking.bind(this);
    this.showMessageProvider = this.showMessageProvider.bind(this);
    this.showRefillStatus = this.showRefillStatus.bind(this);
  }

  handleSubmit(domEvent) {
    domEvent.preventDefault();
    this.props.refillModalHandler(this.props.attributes);
  }

  showTracking() {
    let trackMessage;

    const trackable = this.props.attributes.isTrackable;
    const id = this.props.id;

    if (trackable) {
      trackMessage = (
        <TrackPackageLink
          key={`rx-${id}-track`}
          className="usa-button"
          text="Track package"
          url={`/${id}/track`}/>
      );
    }

    return trackMessage;
  }

  showMessageProvider() {
    let msgProvider;
    const id = this.props.id;
    const remaining = this.props.attributes.refillRemaining;

    if (remaining === 0) {
      msgProvider = (
        <div
          className="rx-call-provider"
          key={`rx-${id}-call`}>
          <a href="/health-care/messaging/compose">Message Provider</a>
        </div>
      );
    }
    return msgProvider;
  }

  showRefillStatus() {
    const refillable = this.props.attributes.isRefillable;
    const id = this.props.id;
    const status = this.props.attributes.refillStatus;

    let refillStatus;

    if (refillable === true) {
      refillStatus = (
        <SubmitRefill
          key={`rx-${id}-refill`}
          cssClass="rx-prescription-button"
          onSubmit={this.handleSubmit}
          refillId={id}
          text="Refill Prescription"/>
      );
    } else {
      const displayStatus = (status === 'active')
        ? rxStatuses.refillinprocess
        : rxStatuses[status];

      refillStatus = (
        <div
          key={`rx-${id}-status`}
          className="rx-prescription-status">
          Refill status: <GlossaryLink
            term={displayStatus}
            onClick={this.props.glossaryModalHandler}/>
        </div>
      );
    }

    return refillStatus;
  }

  render() {
    const attrs = this.props.attributes;
    const id = this.props.id;
    const name = attrs.prescriptionName;

    const action = [];

    // Show tracking if applicable
    action.push(this.showTracking());

    // Show Refill prescription button or refill status
    action.push(this.showRefillStatus());

    // Show 'Message Provider' link when refillsRemaining === 0
    action.push(this.showMessageProvider());

    return (
      <div className="rx-prescription-card">
        <div className="rx-prescription-inner cf">
          <div className="rx-prescription-info">
            <input type="hidden" name="refillId" value={id}/>
            <h3 className="rx-prescription-title" title={name}>
              <Link to={`/${id}`}>
                {name}
              </Link>
            </h3>
            <div className="rx-prescription-number">
              <strong>Prescription <abbr title="number">#</abbr>:</strong> {attrs.prescriptionNumber}
            </div>
            <div className="rx-prescription-facility">
              <strong>Facility name:</strong> {attrs.facilityName}
            </div>
            <div className="rx-prescription-submitted">
              <strong>Last submit date:</strong> {
                formatDate(attrs.refillSubmitDate, {
                  format: 'L'
                })
              }
            </div>
            <div className="rx-prescription-refilled">
              <strong>Last fill date:</strong> {
                formatDate(attrs.refillDate, {
                  format: 'L',
                  validateInPast: true
                })
              }
            </div>
          </div>
          <div className="rx-prescription-countaction">
            <div>
              <RefillsRemainingCounter
                remaining={attrs.refillRemaining}/>
              <div className="rx-prescription-action">
                {action}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PrescriptionCard.propTypes = {
  id: PropTypes.string.isRequired,
  glossaryModalHandler: PropTypes.func.isRequired,
  refillModalHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    prescriptionId: PropTypes.number.isRequired,
    prescriptionNumber: PropTypes.string.isRequired,
    prescriptionName: PropTypes.string.isRequired,
    refillSubmitDate: PropTypes.string,
    refillDate: PropTypes.string.isRequired,
    refillRemaining: PropTypes.number.isRequired,
    facilityName: PropTypes.string.isRequired,
    orderedDate: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    expirationDate: PropTypes.string.isRequired,
    dispensedDate: PropTypes.string,
    stationNumber: PropTypes.string,
    isRefillable: PropTypes.bool.isRequired,
    isTrackable: PropTypes.bool.isRequired,
  }).isRequired
};

export default PrescriptionCard;
