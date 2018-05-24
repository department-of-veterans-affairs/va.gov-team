import React from 'react';

export default function CurrencyWidget({ value }) {
  if (value && typeof value === 'number') {
    return <span>${value.toFixed(2)}</span>;
  }

  return <span>{value}</span>;
}
