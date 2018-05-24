import React from 'react';

function GetFormHelp() {
  return (
    <div>
      <p className="help-talk">For help filling out this form,<br/>
      ask the Education Call Center:</p>
      <p className="help-phone-number">
        <a className="help-phone-number-link" href="tel:+1-888-442-4551">1-888-442-4551</a><br/>
        Monday &#8211; Friday, 8:00 a.m. &#8211; 7:00 p.m. (ET)<br/>
        <a className="help-phone-number-link" href="https://gibill.custhelp.com/app/utils/login_form/redirect/ask">Submit a question to Education Service</a>
      </p>
    </div>
  );
}

export default GetFormHelp;
