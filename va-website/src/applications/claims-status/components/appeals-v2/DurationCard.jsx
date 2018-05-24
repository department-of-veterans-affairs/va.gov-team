import React from 'react';
import PropTypes from 'prop-types';

const DurationCard = ({ durationText, cardDescription }) => {
  // Card's not very helpful without any actual duration information
  if (!durationText) {
    return null;
  }

  return (
    <div className="card information">
      <span className="number">{durationText}</span>
      <span className="description">{cardDescription}</span>
    </div>
  );
};

DurationCard.propTypes = {
  durationText: PropTypes.string.isRequired,
  cardDescription: PropTypes.string
};

export default DurationCard;
