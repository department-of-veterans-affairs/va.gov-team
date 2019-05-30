import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import moment from 'moment';

import SortableTable from '@department-of-veterans-affairs/formation/SortableTable';
import TrackPackageLink from '../components/TrackPackageLink';
import { formatDate } from '../utils/helpers';

export class TrackPackage extends React.Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);

    this.state = {
      currentSort: {
        value: 'fillDate',
        order: 'DESC'
      }
    };
  }

  renderTable() {
    const data = this.props.items.map(item => {
      const {
        id,
        attributes: {
          deliveryService,
          otherPrescriptions,
          prescriptionName,
          prescriptionNumber,
          shippedDate,
          trackingNumber
        },
        links: { trackingUrl }
      } = item;

      const prescriptions = [
        <div key={prescriptionNumber}>{prescriptionName}</div>,
        ...otherPrescriptions.map(p =>
          <div key={p.prescriptionNumber}>{p.prescriptionName}</div>
        )
      ];

      return {
        id,
        shipmentDate: formatDate(shippedDate),
        carrier: deliveryService.toUpperCase(),
        trackingLink: (<TrackPackageLink
          className="rx-history-tracking"
          external
          text={trackingNumber}
          url={trackingUrl}/>),
        prescriptions,
        shippedDate
      };
    });

    data.sort((a, b) => {
      const { value, order } = this.state.currentSort;

      if (value === 'fillDate') {
        const diff = moment(a.shippedDate).diff(moment(b.shippedDate));
        return order === 'DESC' ? -diff : diff;
      }

      return 0;
    });

    const fields = [
      { label: 'Shipment date', value: 'shipmentDate' },
      { label: 'Carrier', value: 'carrier', nonSortable: true },
      { label: 'Tracking number', value: 'trackingLink', nonSortable: true },
      { label: 'Prescriptions in package', value: 'prescriptions', nonSortable: true },
    ];

    const tableClass = classNames(
      'va-table-list',
      'rx-table',
      'rx-table-list',
      'rx-detail-history'
    );

    return (
      <div>
        <p className="rx-tab-explainer">Tracking information for each order expires 30 days after shipment.</p>
        <SortableTable
          className={tableClass}
          currentSort={this.state.currentSort}
          data={data}
          fields={fields}
          onSort={(value, order) => {
            this.setState({
              currentSort: { value, order }
            });
          }}/>
      </div>
    );
  }

  render() {
    const { isPending, items } = this.props;
    let content;

    if (items && items.length) {
      content = this.renderTable();
    } else if (isPending) {
      content = (
        <p className="rx-tab-explainer">
          You recently submitted a refill, and the tracking information isn’t available yet.
        </p>
      );
    } else {
      content = (
        <p className="rx-tab-explainer">
          Your prescription shipped more than 30 days ago, and tracking information is no longer available.
        </p>
      );
    }

    return (
      <div id="rx-track-package" className="va-tab-content">
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const rxState = state.health.rx;
  const {
    rx: { attributes: { refillStatus } },
    trackings
  } = rxState.prescriptions.currentItem;

  return {
    isPending: ['submitted', 'refillinprocess'].includes(refillStatus),
    items: trackings
  };
};

export default connect(mapStateToProps, null)(TrackPackage);
