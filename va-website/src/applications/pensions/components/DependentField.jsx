import React from 'react';
import { relationshipLabels } from '../labels';

export default function DependentField({ formData }) {
  const { first, middle, last, suffix } = formData.fullName;
  const relationship = relationshipLabels[formData.relationship];

  return (
    <div>
      <strong>{first} {middle && `${middle} `}{last}{suffix && `, ${suffix}`}</strong><br/>
      {relationship}
    </div>
  );
}
