import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import ToolTip from './ToolTip';
import ExpandingGroup from '@department-of-veterans-affairs/formation/ExpandingGroup';

/**
 * A radio button group with a label.
 *
 * `label` - String for the group field label.
 * `name` - String for the name attribute.
 * `toolTipText` - String with help text for user.
 * `tabIndex` - Number for keyboard tab order.
 * `options` - Array of options to populate group.
 * `required` - is this field required.
 * `value` - string. Value of the select field.
 * `onValueChange` - a function with this prototype: (newValue)
 */
class RadioButtons extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.inputId = _.uniqueId('radio-buttons-');
  }

  handleChange(domEvent) {
    this.props.onChange(domEvent);
  }

  render() {
    // TODO: extract error logic into a utility function
    // Calculate error state.
    let errorSpan = '';
    let errorSpanId = undefined;
    if (this.props.errorMessage) {
      errorSpanId = `${this.inputId}-error-message`;
      errorSpan = (
        <span className="usa-input-error-message" role="alert" id={errorSpanId}>
          <span className="sr-only">Error</span> {this.props.errorMessage}
        </span>
      );
    }

    // Addes ToolTip if text is provided.
    let toolTip;
    if (this.props.toolTipText) {
      toolTip = (
        <ToolTip
          tabIndex={this.props.tabIndex}
          toolTipText={this.props.toolTipText}/>
      );
    }

    // Calculate required.
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="form-required-span">*</span>;
    }

    const options = _.isArray(this.props.options) ? this.props.options : [];
    const storedValue = this.props.value;
    const optionElements = options.map((obj, index) => {
      let optionLabel;
      let optionValue;
      let optionAdditional;
      if (_.isString(obj)) {
        optionLabel = obj;
        optionValue = obj;
      } else {
        optionLabel = obj.label;
        optionValue = obj.value;
        if (obj.additional) {
          optionAdditional = (<div>{obj.additional}</div>);
        }
      }
      const checked = optionValue === storedValue ? 'checked=true' : '';
      const radioButton = (
        <div key={optionAdditional ? undefined : index} className="form-radio-buttons">
          <input
            autoComplete="false"
            checked={checked}
            id={`${this.inputId}-${index}`}
            name={this.props.name}
            type="radio"
            value={optionValue}
            onChange={this.handleChange}/>
          <label
            name={`${this.props.name}-${index}-label`}
            htmlFor={`${this.inputId}-${index}`}>
            {optionLabel}
          </label>
        </div>
      );

      let output = radioButton;

      // Return an expanding group for buttons with additional content
      if (optionAdditional) {
        output = (
          <ExpandingGroup
            additionalClass="form-expanding-group-active-radio"
            open={checked}
            key={index}>
            {radioButton}
            <div>{optionAdditional}</div>
          </ExpandingGroup>
        );
      }

      return output;
    });

    return (
      <div className={this.props.errorMessage ? 'usa-input-error' : ''}>
        <label
          className={this.props.errorMessage ? 'usa-input-error-label' : undefined}
          htmlFor={this.inputId}>
          {this.props.label}
          {requiredSpan}
        </label>
        {errorSpan}
        {optionElements}
        {toolTip}
      </div>
    );
  }
}

RadioButtons.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element,
        ]),
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.bool
        ]),
        additional: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ])
      })
    ])).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default RadioButtons;
