import React from 'react';

export default function InsuranceProviderView({ formData }) {
  return (
    <div>
      <strong>{formData.insuranceName}</strong>
    </div>
  );
}
