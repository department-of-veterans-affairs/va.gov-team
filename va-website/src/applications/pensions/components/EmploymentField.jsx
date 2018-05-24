import React from 'react';
import moment from 'moment';

export default function EmploymentField({ formData }) {
  const { employer, dateRange } = formData;
  return (
    <div>
      <strong>{employer}</strong>
      <br/>
      {moment(dateRange.from).format('MMM D, YYYY')} – {moment(dateRange.to).format('MMM D, YYYY')}
    </div>
  );
}
