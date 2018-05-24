import React from 'react';

function GetFormHelp() {
  return (
    <div>
      <p className="help-talk">Enrollment or Eligibility questions:</p>
      <p className="help-phone-number">
        <a className="help-phone-number-link" href="tel:+1-877-222-8387">1-877-222-8387</a><br/>
        TTY: <a className="help-phone-number-link" href="tel:+18008778339">1-800-877-8339</a><br/>
        Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET)
      </p>
    </div>
  );
}

export default GetFormHelp;
