import React from 'react';

export default function ClaimSyncWarning({ olderVersion }) {
  let additionalText;
  if (olderVersion) {
    additionalText = ' This is an older version of your claim and may be outdated.';
  }

  function handleClick(e) {
    e.preventDefault();
    return window.location.reload();
  }

  return (
    <div className="usa-alert usa-alert-warning claims-alert claims-alert-status">
      <div className="usa-alert-body">
        <h4 className="usa-alert-heading">Claim status is temporarily down</h4>
        <p className="usa-alert-text">
          Please <a href="#" onClick={handleClick}>refresh the page</a> or try again later.
          {additionalText}
        </p>
      </div>
    </div>
  );
}
