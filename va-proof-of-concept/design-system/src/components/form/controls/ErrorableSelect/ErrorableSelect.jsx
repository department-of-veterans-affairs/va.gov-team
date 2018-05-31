import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import { makeField } from '../../../../helpers/fields';

/**
 * A form select with a label that can display error messages.
 */

class ErrorableSelect extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.selectId = _.uniqueId('errorable-select-');
  }

  handleChange(domEvent) {
    this.props.onValueChange(makeField(domEvent.target.value, true));
  }

  render() {
    const selectedValue = this.props.value.value;

    // Calculate error state.
    let errorSpan = '';
    let errorSpanId = undefined;
    if (this.props.errorMessage) {
      errorSpanId = `${this.selectId}-error-message`;
      errorSpan = (
        <span
          className="usa-input-error-message"
          id={`${errorSpanId}`}
          role="alert">
          {this.props.errorMessage}
        </span>
      );
    }

    // Calculate required.
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="form-required-span">*</span>;
    }

    // Calculate options for select
    let reactKey = 0;
    // TODO(awong): Remove this hack to handle options prop and use invariants instead.
    const options = _.isArray(this.props.options) ? this.props.options : [];
    const optionElements = options.map(obj => {
      let label;
      let value;
      if (_.isString(obj)) {
        label = obj;
        value = obj;
      } else {
        label = obj.label;
        value = obj.value;
      }
      return (
        <option key={++reactKey} value={value}>
          {label}
        </option>
      );
    });

    return (
      <div className={this.props.errorMessage ? 'usa-input-error' : undefined}>
        <label
          className={
            this.props.errorMessage !== undefined
              ? 'usa-input-error-label'
              : this.props.labelClass
          }
          htmlFor={this.selectId}>
          {this.props.label}
          {requiredSpan}
        </label>
        {errorSpan}
        <select
          className={this.props.selectClass || this.props.additionalClass}
          aria-describedby={errorSpanId}
          id={this.selectId}
          name={this.props.name}
          autoComplete={this.props.autocomplete}
          value={selectedValue}
          onKeyDown={this.props.onKeyDown}
          onChange={this.handleChange}>
          {this.props.includeBlankOption && (
            <option value="">{this.props.emptyDescription}</option>
          )}
          {optionElements}
        </select>
      </div>
    );
  }
}

ErrorableSelect.propTypes = {
  // Error string to display in the component.
  // When defined, indicates select has a validation error.
  errorMessage: PropTypes.string,

  // Select name attribute.
  name: PropTypes.string,

  // Select autocomplete attribute.
  autocomplete: PropTypes.string,

  // Select field label.
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /*
   * KeyDown handler
   */
  onKeyDown: PropTypes.func,
  // Array of options to populate select.
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
      }),
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    ])
  ).isRequired,

  // Render marker indicating field is required.
  required: PropTypes.bool,

  // is there an empty selectable thing
  includeBlankOption: PropTypes.bool,

  // Description that shows up for the blank option, when includeBlankOption is true
  emptyDescription: PropTypes.string,

  /* `value` - object containing:
   *   - `value`: Value of the select field.
   *   - `dirty`: boolean. Whether a field has been touched by the user.
   */
  value: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired,

  // a function with this prototype: (newValue)
  onValueChange: PropTypes.func.isRequired,

  // Additional css class that is added to the select element.
  additionalClass: PropTypes.string
};

ErrorableSelect.defaultProps = {
  includeBlankOption: true
};

export default ErrorableSelect;
