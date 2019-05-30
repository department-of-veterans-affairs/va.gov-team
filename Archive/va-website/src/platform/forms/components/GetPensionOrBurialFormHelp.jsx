import React from 'react';

function GetFormHelp() {
  return (
    <div>
      <p className="help-talk">For benefit related questions please call:</p>
      <p className="help-phone-number">
        <a className="help-phone-number-link" href="tel:+1-800-827-1000">1-800-827-1000</a><br/>
        Telecommunications Relay Service (TRS): dial <a className="help-phone-number-link" href="tel:711">711</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 9:00 p.m. (ET).
      </p>
    </div>
  );
}

export default GetFormHelp;
