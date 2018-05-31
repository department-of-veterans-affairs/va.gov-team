/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

class ErrorableFileInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.inputId = _.uniqueId('errorable-file-input-');
  }

  handleChange(domEvent) {
    this.props.onChange(domEvent.target.files);
    // clear the original input, otherwise events will be triggered
    // with empty file arrays and sometimes uploading a file twice will
    // not work
    domEvent.target.value = null; // eslint-disable-line no-param-reassign
  }

  render() {
    let errorSpan = '';
    let errorSpanId = undefined;
    let inputErrorClass = undefined;
    let labelErrorClass = undefined;

    if (this.props.errorMessage) {
      errorSpanId = `${this.inputId}-error-message`;
      errorSpan = (
        <span className={`usa-input-error-message ${this.props.additionalErrorClass}`} role="alert" id={errorSpanId}>
          <span className="sr-only">Error</span> {this.props.errorMessage}
        </span>
      );
      inputErrorClass = 'usa-input-error';
      labelErrorClass = 'usa-input-error-label';
    }

    // Calculate required
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="form-required-span">*</span>;
    }

    return (
      <div className={this.props.additionalClass}>
        <div className={inputErrorClass} role="alert">
          <label
            className={labelErrorClass}
            htmlFor={this.inputId}>
            {this.props.label}
            {requiredSpan}
          </label>
          {errorSpan}
          <label
            role="button"
            tabIndex="0"
            htmlFor={this.inputId}
            aria-describedby={this.props['aria-describedby']}
            className={this.props.triggerClass || 'usa-button usa-button-secondary'}>
            {this.props.buttonText}
          </label>
          <input
            multiple={this.props.multiple}
            style={{ display: 'none' }}
            type="file"
            accept={this.props.accept}
            id={this.inputId}
            name={this.props.name}
            onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

ErrorableFileInput.propTypes = {
  /* accepts multiple files */
  multiple: PropTypes.bool,

  /* label for the button */
  buttonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element]),

  /* additional CSS classes */
  additionalClass: PropTypes.string,
  additionalErrorClass: PropTypes.string,
  triggerClass: PropTypes.string,

  /* function to handle interaction */
  onChange: PropTypes.func.isRequired,

  /* ? */
  accept: PropTypes.string,

  /* input name */
  name: PropTypes.string.isRequired,

  /* message for error state */
  errorMessage: PropTypes.string,

  /* file types */
  mimeTypes: PropTypes.string,

};

ErrorableFileInput.defaultProps = {
  buttonText: 'Add Files',
  mimeTypes: '',
  multiple: false
};

export default ErrorableFileInput;
