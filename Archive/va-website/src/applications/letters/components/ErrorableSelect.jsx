import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

/**
 * A form select with a label that can display error messages.
 *
 * Validation has the following props.
 * `errorMessage` - Error string to display in the component.
 *                  When defined, indicates select has a validation error.
 * `label` - String for the select field label.
 * `name` - String for the select name attribute.
 * `tabIndex` - Number for keyboard tab order.
 * `autocomplete` - String for the select autocomplete attribute.
 * `options` - Array of options to populate select.
 * `required` - boolean. Render marker indicating field is required.
 * `value` - object containing:
 *   - `value`: Value of the select field.
 *   - `dirty`: boolean. Whether a field has been touched by the user.
 * `onValueChange` - a function with this prototype: (newValue)
 */
class ErrorableSelect extends React.Component {
  componentWillMount() {
    this.selectId = _.uniqueId('errorable-select-');
  }

  handleChange = (domEvent) => {
    this.props.onValueChange(domEvent.target.value);
  }

  render() {
    const selectedValue = this.props.value;

    // Calculate error state.
    let errorSpan = '';
    let errorSpanId = undefined;
    if (this.props.errorMessage) {
      errorSpanId = `${this.selectId}-error-message`;
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

    // Calculate options for select
    let reactKey = 0;
    // TODO(awong): Remove this hack to handle options prop and use invariants instead.
    const options = _.isArray(this.props.options) ? this.props.options : [];
    const optionElements = options.map((obj) => {
      let label;
      let value;
      if (_.isString(obj)) {
        label = obj;
        value = obj;
      } else {
        label = obj.label;
        value = obj.value;
      }
      return <option key={++reactKey} value={value}>{label}</option>;
    });

    return (
      <div className={this.props.errorMessage ? 'usa-input-error' : undefined}>
        <label
          className={this.props.errorMessage !== undefined ? 'usa-input-error-label' : undefined}
          htmlFor={this.selectId}>
          {this.props.label}
          {requiredSpan}
        </label>
        {errorSpan}
        <select
          className={this.props.additionalClass}
          aria-describedby={errorSpanId}
          id={this.selectId}
          name={this.props.name}
          autoComplete={this.props.autocomplete}
          value={selectedValue || ''}
          onChange={this.handleChange}>
          {this.props.includeBlankOption && <option value="">{this.props.emptyDescription}</option>}
          {optionElements}
        </select>
      </div>
    );
  }
}

ErrorableSelect.propTypes = {
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  autocomplete: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number }),
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string }),
    ])).isRequired,
  required: PropTypes.bool,
  includeBlankOption: PropTypes.bool,
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
  additionalClass: PropTypes.string,
  emptyDescription: PropTypes.string
};

ErrorableSelect.defaultProps = {
  includeBlankOption: true
};

export default ErrorableSelect;
