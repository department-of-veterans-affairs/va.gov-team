import React from 'react';

class AskVAQuestions extends React.Component {
  render() {
    return (
      <div>
        <h2 className="help-heading">Need help?</h2>
        <p>Call Veterans Affairs Benefits and Services:</p>
        <p className="help-phone-number">
          <a className="help-phone-number-link" href="tel:+1-800-827-1000">1-800-827-1000</a>
        </p>
        <p>Monday &#8211; Friday, 8:00 a.m. &#8211; 9:00 p.m. (ET)</p>
        <p><a href="https://iris.custhelp.com/">Submit a question to VA</a></p>
      </div>
    );
  }
}

export default AskVAQuestions;
