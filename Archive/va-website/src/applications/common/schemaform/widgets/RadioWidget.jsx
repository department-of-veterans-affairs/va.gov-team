import React from 'react';

import ExpandingGroup from '@department-of-veterans-affairs/formation/ExpandingGroup';

export default function RadioWidget({
  options,
  value,
  disabled,
  onChange,
  id
}) {
  const { enumOptions, labels = {}, nestedContent = {} } = options;

  // nested content could be a component or just jsx/text
  let content = nestedContent[value];
  if (typeof content === 'function') {
    const NestedContent = content;
    content = <NestedContent/>;
  }

  return (
    <div>{
      enumOptions.map((option, i) => {
        const checked = option.value === value;
        const radioButton = (
          <div className="form-radio-buttons" key={option.value}>
            <input type="radio"
              autoComplete="false"
              checked={checked}
              id={`${id}_${i}`}
              name={`${id}`}
              value={option.value}
              disabled={disabled}
              onChange={_ => onChange(option.value)}/>
            <label htmlFor={`${id}_${i}`}>
              {labels[option.value] || option.label}
            </label>
          </div>
        );

        if (nestedContent[option.value]) {
          return (
            <ExpandingGroup open={checked} key={option.value}>
              {radioButton}
              <div className="schemaform-radio-indent">
                {content}
              </div>
            </ExpandingGroup>
          );
        }

        return radioButton;
      })
    }</div>
  );
}
