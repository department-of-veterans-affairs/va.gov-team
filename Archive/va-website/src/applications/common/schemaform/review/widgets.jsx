import React from 'react';
import { formatReviewDate } from '../helpers';

export function TextWidget({ value }) {
  return <span>{value}</span>;
}

export function DateWidget({ value, options }) {
  return <span>{formatReviewDate(value, options.monthYear)}</span>;
}

export const EmailWidget = TextWidget;
export const TextareaWidget = TextWidget;

export function SelectWidget({ options, value }) {
  const { enumOptions, labels = {} } = options;
  const selected = enumOptions.find(opt => opt.value === value);
  if (selected) {
    return <span>{labels[value] || selected.label}</span>;
  }

  return null;
}

export const RadioWidget = SelectWidget;

export const yesNo = ({ value, options = {} }) => {
  const { yesNoReverse = false, labels = {} } = options;
  const yesValue = !yesNoReverse;
  const noValue = !yesValue;

  let displayValue;
  if (value === yesValue) {
    displayValue = labels.Y || 'Yes';
  } else if (value === noValue) {
    displayValue = labels.N || 'No';
  }

  return <span>{displayValue}</span>;
};

export const CheckboxWidget = ({ value }) => {
  return <span>{value === true ? 'True' : ''}</span>;
};
