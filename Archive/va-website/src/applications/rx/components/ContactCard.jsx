import PropTypes from 'prop-types';
import React from 'react';

import MessageProviderLink from './MessageProviderLink';

class ContactCard extends React.Component {
  render() {
    let phoneNumber;
    if (this.props.phoneNumber) {
      phoneNumber = (
        <div className="rx-contact-line">
          <span className="rx-contact-header">Facility number:&nbsp;</span>
          {this.props.phoneNumber}
        </div>
      );
    }

    return (
      <div className="rx-contact-card">
        <h4 className="va-h-ruled">Contact</h4>
        <div className="rx-contact-line">
          <span className="rx-contact-header">Facility:&nbsp;</span>
          {this.props.facilityName}
        </div>
        {phoneNumber}
        <MessageProviderLink/>
      </div>
    );
  }
}

ContactCard.propTypes = {
  facilityName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string
};

export default ContactCard;
