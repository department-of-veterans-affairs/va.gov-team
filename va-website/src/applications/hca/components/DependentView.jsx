import React from 'react';

export default function DependentView({ formData }) {
  return (
    <div>
      <strong>{formData.fullName.first} {formData.fullName.last}</strong>
      <br/>
      {formData.dependentRelation}
    </div>
  );
}
