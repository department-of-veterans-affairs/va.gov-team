import { values, every, capitalize } from 'lodash';
import React, { Component } from 'react';

export default class FacilityHours extends Component {
  colonizeTime(time) {
    const found = time.match(/(\d?\d)(\d\d)(\w\w)/);
    return `${found[1]}:${found[2]}${found[3]}`;
  }

  renderNotes(notes) {
    if (notes) {
      return (
        <div className="row">
          <div className="small-12 columns">
            <p>Notes: {notes}</p>
          </div>
        </div>
      );
    }

    return null;
  }

  renderVetCenterContent() {
    const { facility } = this.props;
    if (facility && facility.attributes.facilityType === 'vet_center') {
      return (
        <p>
          In addition to the hours listed above, all Vet Centers maintain non-traditional hours that are specific to each site and can change periodically given local Veteran, Service member & Family needs.  Please contact your Vet Center to obtain the current schedule.
        </p>
      );
    }
    return null;
  }

  render() {
    const { facility } = this.props;

    if (!facility) {
      return null;
    }

    const {
      attributes: { hours }
    } = facility;

    const isVetCenter = facility.attributes.facilityType === 'vet_center';

    if (every(values(hours), h => !h) && !isVetCenter) {
      return null;
    }

    const mappedHours = {};

    Object.keys(hours).forEach(k => {
      mappedHours[k] = hours[k];
      if (hours[k] === '-') {
        mappedHours[k] = 'Closed';
      } else if (hours[k]) {
        const regex = /(\d+\w\w)-(\d+\w\w)/;
        const found = hours[k].match(regex);
        if (found) {
          mappedHours[k] = `${this.colonizeTime(found[1])}-${this.colonizeTime(found[2])}`;
        }
      }
    });

    const hourRows = Object.keys(mappedHours).map(h => {
      if (h !== 'notes' && mappedHours[h] && mappedHours[h] !== '') {
        return (
          <div className="row" key={h}>
            <div className="small-6 columns">
              {capitalize(h)}:
            </div>
            <div className="small-6 columns">
              {capitalize(mappedHours[h])}
            </div>
          </div>
        );
      }
      return null;
    });

    return (
      <div>
        <h4 className="highlight">Hours of Operation</h4>
        <div>
          {hourRows}
        </div>
        {this.renderVetCenterContent()}
      </div>
    );
  }
}
