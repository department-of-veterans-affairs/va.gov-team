import React from 'react';
import PropTypes from 'prop-types';

function DefaultView({ revealForm }) {
  return (
    <div  id="feedback-initial" className="usa-grid-full">
      <div className="usa-width-one-half">
        <h4 className="feedback-widget-title">Tell us what you think</h4>
        <p className="feedback-widget-intro">
          We are always looking for ways to make Vets.gov better.
        </p>
      </div>
      <div className="usa-width-one-half">
        <button id="feedback-tool" onClick={revealForm} className="usa-button-secondary feedback-button">Give us feedback</button>
      </div>
    </div>
  );
}

DefaultView.propTypes = {
  revealForm: PropTypes.func.isRequired
};

export default DefaultView;
