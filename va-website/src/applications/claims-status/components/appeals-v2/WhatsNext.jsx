import React from 'react';
import PropTypes from 'prop-types';
import NextEvent from './NextEvent';
import DurationCard from './DurationCard';

const WhatsNext = ({ nextEvents }) => {
  const { header, events } = nextEvents;
  const eventsList = events.map((event, index) => {
    return (
      <NextEvent
        key={event.title}
        title={event.title}
        description={event.description}
        durationText={event.durationText}
        cardDescription={event.cardDescription}
        // show a separator after all events except the last one
        showSeparator={(index !== events.length - 1)}/>
    );
  });

  // Some current status types (really, just pendingSoc) have multiple
  // NextEvents that each have the same duration. In these cases, we want to
  // show one duration card, above the NextEvent list, instead of one card for
  // each NextEvent item. getNextEvents() will only return a headerCard
  // property if the corresponding current status type should be treated in
  // this way
  let headerDurationCard = null;
  if (nextEvents.headerCard) {
    const { durationText, cardDescription } = nextEvents.headerCard;
    headerDurationCard = (
      <DurationCard
        durationText={durationText}
        cardDescription={cardDescription}/>
    );
  }

  return (
    <div>
      <h2>What happens next?</h2>
      <p>{header}</p>
      {headerDurationCard}
      <ul className="appeals-next-list">
        {eventsList}
      </ul>
    </div>
  );
};

WhatsNext.propTypes = {
  nextEvents: PropTypes.shape({
    header: PropTypes.string.isRequired,
    headerCard: PropTypes.shape({
      durationText: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
    }),
    events: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.element.isRequired,
      durationText: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
};

export default WhatsNext;

