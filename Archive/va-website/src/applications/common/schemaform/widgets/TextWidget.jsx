import React from 'react';

const numberTypes = new Set(['number', 'integer']);

export default function TextWidget(props) {
  let inputType = props.options.inputType;
  if (!inputType) {
    inputType = numberTypes.has(props.schema.type) ? 'number' : props.type;
  }
  return (
    <input type={inputType}
      id={props.id}
      name={props.id}
      disabled={props.disabled}
      maxLength={props.schema.maxLength}
      autoComplete={props.options.autocomplete || false}
      className={props.options.widgetClassNames}
      value={typeof props.value === 'undefined' ? '' : props.value}
      onBlur={() => props.onBlur(props.id)}
      onChange={(event) => props.onChange(event.target.value ? event.target.value : undefined)}/>
  );
}

TextWidget.defaultProps = {
  type: 'text'
};
