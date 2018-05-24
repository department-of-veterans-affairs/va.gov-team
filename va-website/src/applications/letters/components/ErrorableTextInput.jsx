import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

/**
 * A form input with a label that can display error messages.
 *
 * Props:
 * `errorMessage` - Error string to display in the component.
 *                  When defined, indicates input has a validation error.
 * `label` - String for the input field label.
 * `name` - String for the input name attribute.
 * `tabIndex` - Number for keyboard tab order.
 * `autocomplete` - String for the input autocomplete attribute.
 * `placeholder` - placeholder string for input field.
 * `required` - boolean. Render marker indicating field is required.
 * `field` - string. Value of the input field.
 * `additionalClass` - Extra attribute for use by CSS selector, specifically
 *                     by tests
 * `onValueChange` - a function with this prototype: (newValue)
 */
class ErrorableTextInput extends React.Component {
  componentWillMount() {
    this.inputId = _.uniqueId('errorable-text-input-');
  }

  handleChange = (domEvent) => {
    this.props.onValueChange(domEvent.target.value);
  }

  render() {
    // Calculate error state.
    let errorSpan = '';
    let maxCharacters;
    let errorSpanId = undefined;
    let inputErrorClass = undefined;
    let labelErrorClass = undefined;
    if (this.props.errorMessage) {
      errorSpanId = `${this.inputId}-error-message`;
      errorSpan = (
        <span className="usa-input-error-message" role="alert" id={errorSpanId}>
          <span className="sr-only">Error</span> {this.props.errorMessage}
        </span>
      );
      inputErrorClass = 'usa-input-error';
      labelErrorClass = 'usa-input-error-label';
    }

    // Calculate max characters and display '(Max. XX characters)' when max is hit.
    if (this.props.value) {
      if (this.props.charMax === this.props.value.length) {
        maxCharacters = (<small>(Max. {this.props.charMax} characters)</small>);
      }
    }

    // Calculate required.
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="form-required-span">*</span>;
    }

    return (
      <div className={inputErrorClass}>
        <label
          className={labelErrorClass}
          htmlFor={this.inputId}>
          {this.props.label}
          {requiredSpan}
        </label>
        {errorSpan}
        <input
          className={this.props.additionalClass}
          aria-describedby={errorSpanId}
          id={this.inputId}
          placeholder={this.props.placeholder}
          name={this.props.name}
          tabIndex={this.props.tabIndex}
          autoComplete={this.props.autocomplete}
          type={this.props.type}
          maxLength={this.props.charMax}
          value={this.props.value || ''}
          onChange={this.handleChange}
          onBlur={this.props.onBlur}/>
        {maxCharacters}
      </div>
    );
  }
}

ErrorableTextInput.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autocomplete: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  additionalClass: PropTypes.string,
  charMax: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

ErrorableTextInput.defaultProps = {
  type: 'text'
};

export default ErrorableTextInput;
