import React from 'react';
import Raven from 'raven-js';

const vbaVersion = (
  <div>
    <h2 className="help-heading">Need help?</h2>
    <p>Call the Veterans Affairs Benefits and Services</p>
    <p className="help-phone-number">
      <a className="help-phone-number-link" href="tel:1-800-827-1000">1-800-827-1000</a>
    </p>
    <p>Monday - Friday, 8:00am - 9:00pm (ET)</p>
  </div>
);

const boardVersion = (
  <div>
    <h2 className="help-heading">Need help?</h2>
    <p>Call the Board of Veterans’ Appeals</p>
    <p className="help-phone-number">
      <a className="help-phone-number-link" href="tel:1-800-923-8387">1-800-923-8387</a>
    </p>
    <p>Monday - Friday, 9:00am - 4:30pm (ET)</p>
  </div>
);


/**
 * Displays the "Need help?" sidebar content based on the appeal's location.
 *
 * @param {String} location  The location of the appeal. Possible options:
 *                            ['aoj', 'bva']
 * @param {String} aoj       The Agency of Original Jurisdiction.
 *                            Used if the location is 'aoj'
 *                            Possible options:
 *                            ['vba', 'vha', 'nca', 'other']
 */
export default function AppealHelpSidebar({ location, aoj }) {
  if (location === 'aoj') {
    // If the location is 'aoj', we have to check which agency it came from to show
    //  the appropriate information.
    switch (aoj) {
      case 'vba': return vbaVersion;
      case 'vha': return null; // vha version (coming soon to a sidebar near you!)
      case 'nca': return null; // nca version (coming soon to a sidebar near you!)
      case 'other': return boardVersion;
      default:
        Raven.captureMessage(`appeal-status-unexpected-aoj: ${aoj}`);
    }
  } else if (location === 'bva') {
    return boardVersion;
  } else {
    Raven.captureMessage(`appeal-status-unexpected-location: ${location}`);
  }

  return null;
}

