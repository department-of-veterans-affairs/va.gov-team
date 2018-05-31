import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

/**
 * A component for the continue button to navigate through panels of questions.
 */

class ProgressButton extends React.Component {
  componentWillMount() {
    this.id = _.uniqueId();
  }

  render() {
    const beforeText = (this.props.beforeText) ? (<span className="button-icon">{this.props.beforeText} </span>) : '';
    const afterText = (this.props.afterText) ? (<span className="button-icon"> {this.props.afterText}</span>) : '';

    return (
      <button
        type={this.props.submitButton ? 'submit' : 'button'}
        disabled={this.props.disabled}
        className={`${this.props.buttonClass} ${this.props.disabled ? 'usa-button-disabled' : null}`}
        id={`${this.id}-continueButton`}
        onClick={this.props.onButtonClick}>{beforeText}{this.props.buttonText}{afterText}
      </button>
    );
  }
}

ProgressButton.propTypes = {

  // function that changes the path to the next panel or submit.
  onButtonClick: PropTypes.func,

  // what is the button's label
  buttonText: PropTypes.string.isRequired,

  // what CSS class(es) does the button have
  buttonClass: PropTypes.string.isRequired,

  // Stores the value for the icon that will appear before the button text.
  beforeText: PropTypes.string,

  // Stores the value for the icon that will appear after the button text.
  afterText: PropTypes.string,

  // is the button disabled or not
  disabled: PropTypes.bool,

  // is this a submit button or not
  submitButton: PropTypes.bool
};

export default ProgressButton;
