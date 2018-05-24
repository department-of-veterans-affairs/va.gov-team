import React from 'react';
import moment from 'moment';

export default function DisabilityField({ formData }) {
  return (
    <div>
      <strong>{formData.name}</strong><br/>{moment(formData.disabilityStartDate).format('MMM D, YYYY')}
    </div>
  );
}
