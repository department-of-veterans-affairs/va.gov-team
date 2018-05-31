import PropTypes from 'prop-types';
import React from 'react';

class SystemDownView extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <div className="react-container">
            <h3>{this.props.messageLine1}</h3>
            <h4>{this.props.messageLine2}</h4>
            <a href="/"><button>Go Back to Vets.gov</button></a>
          </div>
        </div>
      </div>
    );
  }
}

SystemDownView.propTypes = {

  // first line of the system down message, required
  messageLine1: PropTypes.string.isRequired,

  // optional second line of messaging
  messageLine2: PropTypes.string,
};

export default SystemDownView;
