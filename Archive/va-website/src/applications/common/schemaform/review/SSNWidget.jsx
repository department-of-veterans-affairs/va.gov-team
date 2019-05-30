import React from 'react';

export default function SSNWidget({ value }) {
  if (value && value.length === 9) {
    return <span>{`${value.substr(0, 3)}-${value.substr(3, 2)}-${value.substr(5)}`}</span>;
  }

  return <span>{value}</span>;
}
