import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import { makeField } from '../../../../helpers/fields';

/**
 * A form input with a label that can display error messages.
 */
class ErrorableTextArea extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillMount() {
    this.inputId = _.uniqueId('errorable-textarea-');
  }

  handleChange(domEvent) {
    const val = domEvent.target.value;
    // IE9 doesn’t support max length on textareas
    if (!this.props.charMax || val.length <= this.props.charMax) {
      this.props.onValueChange(makeField(val, this.props.field.dirty));
    }
  }

  handleBlur() {
    this.props.onValueChange(makeField(this.props.field.value, true));
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
    if (this.props.field.value) {
      if (this.props.charMax === this.props.field.value.length) {
        maxCharacters = (<small>(Max. {this.props.charMax} characters)</small>);
      }
    }

    // Calculate required.
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="hca-required-span">*</span>;
    }

    const classes = classNames(this.props.additionalClass, {
      'input-disabled': this.props.disabled,
    });

    return (
      <div className={inputErrorClass}>
        <label
          id={`${this.inputId}-label`}
          className={labelErrorClass}
          htmlFor={this.inputId}>
          {this.props.label}
          {requiredSpan}
        </label>
        {errorSpan}
        <textarea
          disabled={this.props.disabled}
          className={classes}
          aria-describedby={errorSpanId}
          aria-labelledby={`${this.inputId}-label`}
          id={this.inputId}
          placeholder={this.props.placeholder}
          name={this.props.name}
          tabIndex={this.props.tabIndex}
          maxLength={this.props.charMax}
          value={this.props.field.value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}/>
        {maxCharacters}
      </div>
    );
  }
}

ErrorableTextArea.propTypes = {
  disabled: PropTypes.bool,

  /* Error string to display in the component. When defined, indicates input has a */
  errorMessage: PropTypes.string,

  /* String for the input field label. */
  label: PropTypes.string.isRequired,

  /* placeholder string for input field. */
  placeholder: PropTypes.string,

  /* String for the input name attribute. */
  name: PropTypes.string,

  /* Render marker indicating field is required. */
  required: PropTypes.bool,

  /* Value of the input field. */
  field: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired,

  /* Extra attribute for use by CSS selector, specifically by tests */
  additionalClass: PropTypes.string,

  /* max number of characters the field will accept */
  charMax: PropTypes.number,

  /* a function with this prototype: (newValue) */
  onValueChange: PropTypes.func.isRequired
};

export default ErrorableTextArea;
