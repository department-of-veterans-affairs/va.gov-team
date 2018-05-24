import React from 'react';

export default function ExpenseField({ formData }) {
  const noData = !formData.amount && !formData.purpose;

  return noData
    ? <div><strong>Expense</strong></div>
    : <div><strong>{formData.purpose}</strong><br/>${formData.amount}</div>;
}
