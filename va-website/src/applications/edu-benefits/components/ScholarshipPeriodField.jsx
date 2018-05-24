import React from 'react';

export default function ScholarshipPeriodField({ formData }) {
  const noData = !formData.amount;

  return noData
    ? <div>This entry may be missing information</div>
    : <div><strong>${formData.amount}</strong><br/>{formData.year}</div>;
}
