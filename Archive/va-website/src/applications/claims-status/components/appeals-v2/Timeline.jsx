import React from 'react';
import PropTypes from 'prop-types';
import { getEventContent, formatDate } from '../../utils/appeals-v2-helpers';
import Expander from './Expander';
import PastEvent from './PastEvent';

/**
 * Timeline is in charge of the past events.
 */
class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  formatDateRange = () => {
    const { events } = this.props;
    if (!events.length) {
      return '';
    }
    const first = formatDate(events[0].date);
    const last = formatDate(events[events.length - 1].date);
    return `${first} - ${last}`;
  };

  toggleExpanded = (e) => {
    e.stopPropagation();
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  }

  render() {
    const { events, missingEvents } = this.props;
    let pastEventsList = [];
    if (events.length) {
      pastEventsList = events.map((event, index) => {
        const content = getEventContent(event);
        if (!content) {
          return null;
        }

        const { title, description, liClass } = content;
        const date = formatDate(event.date);
        const hideSeparator = (index === events.length - 1);
        return (
          <PastEvent
            key={`past-event-${index}`}
            title={title}
            date={date}
            description={description}
            liClass={liClass}
            hideSeparator={hideSeparator}/>
        );
      }).filter(e => !!e); // Filter out the nulls
    }

    const downArrow = this.state.expanded ? <div className="down-arrow"/> : null;
    const displayedEvents = this.state.expanded ? pastEventsList : [];

    return (
      <div>
        <ol className="form-process appeal-timeline">
          <Expander
            expanded={this.state.expanded}
            key="expander"
            dateRange={this.formatDateRange()}
            onToggle={this.toggleExpanded}
            missingEvents={missingEvents}/>
          {displayedEvents}
        </ol>
        {downArrow}
      </div>
    );
  }
}

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    details: PropTypes.object
  })).isRequired,
  missingEvents: PropTypes.bool.isRequired
};

export default Timeline;
