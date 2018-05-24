import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

import recordEvent from '../../../../platform/monitoring/record-event';
import TrackPackageLink from '../../../rx/components/TrackPackageLink';
import { formatDate } from '../../../rx/utils/helpers';

function recordDashboardClick(product) {
  return () => {
    recordEvent({
      event: 'dashboard-navigation',
      'dashboard-action': 'view-button',
      'dashboard-product': product,
    });
  };
}

export default function PrescriptionCard({ prescription }) {
  const { prescriptionName, refillSubmitDate, refillDate, isTrackable } = prescription.attributes;

  return (
    <div className="claim-list-item-container">
      <h3 className="claim-list-item-header-v2">
        {prescriptionName}
      </h3>
      <p>
        <strong>Order status:</strong> {isTrackable ? 'We’ve shipped your order' : 'We’re working to fill your prescription'}
      </p>
      <p><strong>You submitted your refill order on:</strong> {
        formatDate(refillSubmitDate || refillDate, {
          format: 'L'
        })
      }</p>
      <p>
        {isTrackable ? (
          <TrackPackageLink
            key={`rx-${prescription.id}-track`}
            className="usa-button"
            text="Track Your Package"
            url={`/${prescription.id}/track`}
            onClick={recordDashboardClick('track-your-package')}/>
        ) : (
          <Link
            className="usa-button usa-button-primary"
            href={`/health-care/prescriptions/${prescription.id}`} onClick={recordDashboardClick('view-your-prescription')}>
            View Your Prescription<i className="fa fa-chevron-right"/>
          </Link>
        )}
      </p>
    </div>
  );
}

PrescriptionCard.propTypes = {
  prescription: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
  })
};
