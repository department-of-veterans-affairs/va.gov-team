import React from 'react';

export default function FullNameField({ formData }) {
  const { first, middle, last, suffix } = formData;
  return (
    <div>
      <strong>{first} {middle && `${middle} `}{last}{suffix && `, ${suffix}`}</strong>
    </div>
  );
}
