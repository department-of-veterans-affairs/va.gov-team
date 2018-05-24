import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

import SortableTable from '@department-of-veterans-affairs/formation/SortableTable';
import { formatDate } from '../utils/helpers';
import PrescriptionCard from './PrescriptionCard';

class RefillStatus extends PrescriptionCard {
  render() {
    return (
      <div>
        {this.showTracking()}
        {this.showRefillStatus()}
        {this.showMessageProvider()}
      </div>
    );
  }
}

class PrescriptionTable extends React.Component {
  render() {
    const { items } = this.props;

    if (!items) {
      return null;
    }

    const fields = [
      { label: 'Prescription Name', value: 'prescriptionName' },
      { label: 'Submit Date', value: 'refillSubmitDate' },
      { label: 'Fill Date', value: 'refillDate' },
      { label: 'Facility Name', value: 'facilityName' },
      { label: 'Refills Left', value: 'refillsLeft', nonSortable: true },
      { label: 'Refill Status', value: 'refillStatus', nonSortable: true },
    ];

    const data = items.map(item => {
      const attrs = item.attributes;

      return {
        id: item.id,
        rowClass: attrs.refillRemaining === 0 ? 'no-refills' : '',
        prescriptionName: (
          <div>
            <Link to={`/${attrs.prescriptionId}`} className="rx-prescription-name">
              {attrs.prescriptionName}
            </Link>
            <span>Prescription #: {item.id}</span>
          </div>
        ),
        refillSubmitDate: formatDate(attrs.refillSubmitDate),
        refillDate: formatDate(attrs.refillDate),
        facilityName: attrs.facilityName,
        refillsLeft: attrs.refillRemaining,
        refillStatus: <RefillStatus {...item} glossaryModalHandler={this.props.glossaryModalHandler} refillModalHandler={this.props.refillModalHandler}/>,
      };
    });

    return (
      <SortableTable
        className="va-table-list rx-table rx-table-list"
        currentSort={this.props.currentSort}
        data={data}
        fields={fields}
        onSort={this.props.handleSort}/>
    );
  }
}

PrescriptionTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  glossaryModalHandler: PropTypes.func.isRequired,
  refillModalHandler: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
};

export default PrescriptionTable;
