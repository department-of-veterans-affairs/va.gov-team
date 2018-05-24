import React from 'react';

export default function YesNoWidget({
  id,
  value,
  disabled,
  onChange,
  options = {}
}) {
  const { yesNoReverse = false, labels = {} } = options;
  const yesValue = !yesNoReverse;
  const noValue = !yesValue;
  return (
    <div className="form-radio-buttons">
      <input type="radio"
        autoComplete="false"
        checked={value === yesValue}
        id={`${id}Yes`}
        name={`${id}`}
        value="Y"
        disabled={disabled}
        onChange={_ => onChange(yesValue)}/>
      <label htmlFor={`${id}Yes`}>
        {labels.Y || 'Yes'}
      </label>
      <input type="radio"
        autoComplete="false"
        checked={value === noValue}
        id={`${id}No`}
        name={`${id}`}
        value="N"
        disabled={disabled}
        onChange={_ => onChange(noValue)}/>
      <label htmlFor={`${id}No`}>
        {labels.N || 'No'}
      </label>
    </div>
  );
}
