import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

import InfoPair from './InfoPair';

import { formatDateParsedZoneShort } from '../../../platform/utilities/date';
import { getScrollOptions } from '../../../platform/utilities/ui';

const scroller = Scroll.scroller;

class EnrollmentPeriod extends React.Component {
  constructor() {
    super();
    this.scrollToEnrollment = this.scrollToEnrollment.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.state = { historyExpanded: false };
  }

  scrollToEnrollment() {
    const options = getScrollOptions({
      duration: 500,
      delay: 2,
      smooth: true,
    });
    scroller.scrollTo(this.props.id, options);
  }

  toggleHistory() {
    const shouldExpand = !this.state.historyExpanded;
    this.setState({ historyExpanded: !this.state.historyExpanded });
    if (shouldExpand) {
      this.scrollToEnrollment();
    }
  }

  render() {
    const { enrollment, id } = this.props;
    const amendments = enrollment.amendments || [];
    const yellowRibbonStatus = enrollment.yellowRibbonAmount > 0 && (
      <div className="yellow-ribbon-school">
        This is a Yellow Ribbon School. <a href="/education/gi-bill/yellow-ribbon/" target="_blank">Learn more about the Yellow Ribbon Program.</a>
      </div>
    );

    const changes = this.state.historyExpanded ? (
      <div className="usa-accordion-content" aria-hidden="false">
        {amendments.map((amendment, index) => {
          return (
            <div key={`amendment-${index}`}>
              {index > 0 ? <hr/> : null}
              <InfoPair label="On-campus Hours" value={amendment.onCampusHours}/>
              <InfoPair label="Online Hours" value={amendment.onlineHours}/>
              <InfoPair label="Type of Change" value={amendment.type}/>
              <InfoPair
                label="Change Effective Date"
                value={formatDateParsedZoneShort(amendment.changeEffectiveDate)}/>
            </div>
          );
        })}
      </div>
    ) : null;

    const changeHistory = amendments.length > 0 ? (
      <div className="usa-accordion">
        <ul className="usa-unstyled-list">
          <li>
            <div className="accordion-header clearfix">
              <button
                className="usa-button-unstyled"
                aria-expanded={this.state.historyExpanded ? 'true' : 'false'}
                aria-controls={`collapsible-${id}`}
                onClick={this.toggleHistory}>
                See Change History
              </button>
            </div>
            <div id={`collapsible-${id}`}>
              {changes}
            </div>
          </li>
        </ul>
      </div>
    ) : null;

    return (
      <div id={id}>
        <h4>{formatDateParsedZoneShort(enrollment.beginDate)} to {formatDateParsedZoneShort(enrollment.endDate)} at <span className="facility">{(enrollment.facilityName || '').toLowerCase()}</span> ({enrollment.facilityCode})</h4>
        {yellowRibbonStatus}
        <InfoPair label="On-campus Hours" value={enrollment.onCampusHours}/>
        <InfoPair label="Online Hours" value={enrollment.onlineHours}/>
        {changeHistory}
        <hr/>
      </div>
    );
  }
}

EnrollmentPeriod.propTypes = {
  id: PropTypes.string,
  enrollment: PropTypes.object
};

export default EnrollmentPeriod;
