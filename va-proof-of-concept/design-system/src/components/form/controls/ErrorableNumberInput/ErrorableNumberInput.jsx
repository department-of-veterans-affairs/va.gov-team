import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import { makeField } from '../../../../helpers/fields';

/*
 * A form input with a label that can display error messages.
 *
 */

class ErrorableNumberInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillMount() {
    this.inputId = _.uniqueId('errorable-number-input-');
  }

  handleChange(domEvent) {
    this.props.onValueChange(makeField(domEvent.target.value, this.props.field.dirty));
  }

  handleBlur() {
    this.props.onValueChange(makeField(this.props.field.value, true));
  }

  render() {
    // Calculate error state.
    let errorSpan = '';
    let errorSpanId = undefined;

    // TODO: Look into an alternate way of adding error styling not based on presence of errorMessage:
    // There could be cases where there is an error but we don’t want a message to appear, and this
    // is not clear right now
    if (this.props.errorMessage) {
      errorSpanId = `${this.inputId}-error-message`;
      errorSpan = (
        <span className="usa-input-error-message" role="alert" id={errorSpanId}>
          <span className="sr-only">Error</span> {this.props.errorMessage}
        </span>
      );
    }

    // Calculate required.
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="form-required-span">*</span>;
    }

    return (
      <div className={this.props.errorMessage ? 'usa-input-error' : undefined}>
        <label
          className={this.props.errorMessage !== undefined ? 'usa-input-error-label' : undefined}
          htmlFor={this.inputId}>
          {this.props.label}
          {requiredSpan}
        </label>
        {errorSpan}
        <input
          autoComplete={this.props.autocomplete}
          className={this.props.additionalClass}
          aria-describedby={errorSpanId}
          id={this.inputId}
          name={this.props.name}
          max={this.props.max}
          min={this.props.min}
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          type="number"
          value={this.props.field.value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}/>
      </div>
    );
  }
}

ErrorableNumberInput.propTypes = {
  /* Error string to display in the component. When defined, indicates input has a validation error. */
  errorMessage: PropTypes.string,
  field: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired,
  /* `label` - String for the input field label. */
  label: PropTypes.string.isRequired,
  /* `name` - String for name attribute. */
  name: PropTypes.string,
  /* minimum number value and maximum of same */
  min: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /* String specifying the pattern for the input. */
  pattern: PropTypes.string,
  /* placeholder string for input field. */
  placeholder: PropTypes.string,
  /* Render marker indicating field is required. */
  required: PropTypes.bool,
  /**
   * handler for the value change with this prototype: (newValue)
   */
  onValueChange: PropTypes.func.isRequired,
  additionalClass: PropTypes.string
};

export default ErrorableNumberInput;
