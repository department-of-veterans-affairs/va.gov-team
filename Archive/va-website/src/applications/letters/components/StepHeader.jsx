import React from 'react';
import PropTypes from 'prop-types';

class StepHeader extends React.Component {
  render() {
    const { current, steps, name } = this.props;
    return (
      <div className="section-content">
        <div
          role="progressbar"
          aria-valuenow={this.props.current}
          aria-valuemin="1"
          aria-valuetext={`Step ${current} of ${steps}: ${name}`}
          aria-valuemax={steps}
          className="nav-header">
          <h4>
            <span className="form-process-step current">{current}</span>
            <span className="form-process-total">of {steps}</span>
            {name}
          </h4>
        </div>
        {this.props.children}
      </div>
    );
  }
}

StepHeader.ProptTypes = {
  name: PropTypes.string,
  current: PropTypes.number,
  steps: PropTypes.number
};

export default StepHeader;
