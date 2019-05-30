import React from 'react';

export default function DependentField({ formData }) {
  const { first, middle, last, suffix } = formData.fullName;

  return (
    <div>
      <strong>{first} {middle && `${middle} `}{last}{suffix && `, ${suffix}`}</strong><br/>
    </div>
  );
}
