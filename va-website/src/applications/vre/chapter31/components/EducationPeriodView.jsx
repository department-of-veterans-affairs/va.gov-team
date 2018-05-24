import React from 'react';

export default function EducationPeriodView({ formData }) {
  const from = formData.yearStarted;
  const to = formData.yearLeft;
  let educationPeriod = '';

  if (from && to) {
    educationPeriod = `${from} — ${to}`;
  } else if (from || to) {
    educationPeriod = `${(from || to)}`;
  }

  return (
    <div>
      <strong>{formData.program}</strong><br/>
      {educationPeriod}
    </div>
  );
}
