import React from 'react';

export default function PersonalizationBanner({ dismiss, isLoggedIn }) {
  if (!isLoggedIn) return <div/>;
  return (
    <div className="personalization-announcement">
      <span className="usa-label va-label-primary">New</span> <a onClick={dismiss} href="/dashboard">Check out your new personalized homepage</a>
      <button type="button" onClick={dismiss} className="va-modal-close">
        <i className="fa fa-close"/>
      </button>
    </div>
  );
}
