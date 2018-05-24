import React from 'react';

// When coming from a PhoneNumberWidget (not review), value will be only numbers
export default function PhoneNumberWidget({ value }) {
  let formatted = value;
  if (value && value.length === 10) {
    formatted = `(${value.substr(0, 3)}) ${value.substr(3, 3)}-${value.substr(6)}`;
  }

  return <span>{formatted}</span>;
}
