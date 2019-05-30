import PropTypes from 'prop-types';
import React from 'react';
import DropDownPanel from '@department-of-veterans-affairs/formation/DropDownPanel';
import IconUser from '@department-of-veterans-affairs/formation/IconUser';

import LegacyDropdown from './LegacyDropdown';
import PersonalizationDropdown from './PersonalizationDropdown';

import isPersonalizationEnabled from '../../../../applications/personalization/dashboard/isPersonalizationEnabled';

class SignInProfileMenu extends React.Component {
  render() {
    const icon = <IconUser color="#fff"/>;

    return (
      <DropDownPanel
        buttonText={this.props.greeting}
        clickHandler={this.props.clickHandler}
        id="account-menu"
        icon={icon}
        isOpen={this.props.isOpen}
        disabled={this.props.disabled}>
        {isPersonalizationEnabled() && this.props.isLOA3 ? <PersonalizationDropdown/> : <LegacyDropdown/>}
      </DropDownPanel>
    );
  }
}

SignInProfileMenu.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  cssClass: PropTypes.string,
  greeting: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

SignInProfileMenu.defaultProps = {
  services: []
};

export default SignInProfileMenu;
