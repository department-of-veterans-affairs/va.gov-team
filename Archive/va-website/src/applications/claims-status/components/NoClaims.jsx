import React from 'react';

export default function NoClaims() {
  return (
    <div className="usa-alert usa-alert-info claims-alert no-background-image claims-alert-status">
      <h4 className="claims-alert-header usa-alert-heading">You do not have any submitted claims</h4>
      <p>This page shows only completed claim applications. If you started a claim but haven’t finished it yet, go to <a href="https://www.ebenefits.va.gov/ebenefits-portal/ebenefits.portal">eBenefits</a> to work on it.</p>
    </div>
  );
}
