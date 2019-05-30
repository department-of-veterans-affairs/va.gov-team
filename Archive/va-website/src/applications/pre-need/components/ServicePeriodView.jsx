import React from 'react';
import { formatReviewDate } from '../../common/schemaform/helpers';
import { serviceLabels } from '../utils/labels';

export default function ServicePeriodView({ formData }) {
  let from = '';
  let to = '';
  if (formData.dateRange) {
    from = formatReviewDate(formData.dateRange.from);
    to = formatReviewDate(formData.dateRange.to);
  }

  return (
    <div>
      <strong>{serviceLabels[formData.serviceBranch]}</strong><br/>
      {from} &mdash; {to}
    </div>
  );
}
