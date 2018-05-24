import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import PrescriptionCard from './PrescriptionCard';
import PrescriptionGroup from './PrescriptionGroup';
import SortMenu from './SortMenu';

class PrescriptionList extends React.Component {
  render() {
    const items = this.props.items;
    let prescriptions;
    let facilities;

    const makeItem = (rx) => {
      const uniqId = _.uniqueId('rx-');
      return (
        <PrescriptionCard
          { ...rx }
          glossaryModalHandler={this.props.glossaryModalHandler}
          refillModalHandler={this.props.refillModalHandler}
          key={uniqId}/>
      );
    };

    // If we need to display the list as a grouping...
    if (this.props.grouped) {
      // Extract facilities from items as an array.
      // Make it an array of unique values.
      facilities = _.uniq(_.map(items, (obj) => {
        return obj.attributes.facilityName;
      }));

      /*
      For every facility in `facilities`, filter those
      prescriptions that match that facility name.

      Returns an object in the form:
      { facilityname: [array,of,prescription,objects] }
      */
      const groupByFacility = {};

      _.map(facilities, (value) => {
        groupByFacility[value] = _.filter(items, (obj) => {
          return obj.attributes.facilityName === value;
        });
      });

      // Create prescription groups containing prescriptions
      prescriptions = facilities.map((value) => {
        const groupChildren = groupByFacility[value].map(makeItem);
        const uniqId = _.uniqueId('rx-g');

        return (<PrescriptionGroup
          glossaryModalHandler={this.props.glossaryModalHandler}
          refillModalHandler={this.props.refillModalHandler}
          title={value}
          key={uniqId}
          items={groupChildren}/>);
      });
    } else {
      prescriptions = items.map(makeItem);
    }

    const sortOptions = [
      { value: 'prescriptionName', label: 'Prescription name' },
      { value: 'facilityName', label: 'Facility name' },
      { value: 'refillSubmitDate', label: 'Last submit date' },
      { value: 'refillDate', label: 'Last fill date' },
    ];

    const sortMenu = (
      <SortMenu
        onChange={this.props.handleSort}
        onClick={this.props.handleSort}
        options={sortOptions}
        selected={this.props.currentSort}/>
    );

    return (
      <div>
        {sortMenu}
        <div className="rx-prescription-items cf">
          {prescriptions}
        </div>
      </div>
    );
  }
}

PrescriptionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  glossaryModalHandler: PropTypes.func.isRequired,
  grouped: PropTypes.bool,
  refillModalHandler: PropTypes.func.isRequired
};

export default PrescriptionList;
