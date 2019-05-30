import PropTypes from 'prop-types';
import React from 'react';

import DropDownPanel from '@department-of-veterans-affairs/formation/DropDownPanel';
import IconHelp from '@department-of-veterans-affairs/formation/IconHelp';

class HelpMenu extends React.Component {
  render() {
    const icon = <IconHelp color="#fff"/>;

    const dropDownContents = (
      <div>
        <p><b>Call the Vets.gov Help Desk</b></p>
        <p><a href="tel:18555747286">1-855-574-7286</a></p>
        <p>TTY: <a href="tel:+18008778339">1-800-877-8339</a></p>
        <p>Monday &ndash; Friday, 8:00 a.m. &ndash; 8:00 p.m. (ET)</p>
      </div>
    );

    return (
      <DropDownPanel
        buttonText="Help"
        clickHandler={this.props.clickHandler}
        cssClass={this.props.cssClass}
        id="helpmenu"
        icon={icon}
        isOpen={this.props.isOpen}>
        {dropDownContents}
      </DropDownPanel>
    );
  }
}

HelpMenu.propTypes = {
  cssClass: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default HelpMenu;
