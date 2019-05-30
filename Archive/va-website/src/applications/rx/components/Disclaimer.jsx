import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';


class Disclaimer extends React.Component {
  render() {
    const disclaimerClass = classNames(
      { 'va-alert--open': this.props.isOpen },
      { 'usa-alert usa-alert-warning': true },
    );

    const openButton = classNames(
      { fa: true },
      { 'fa-plus': !this.props.isOpen },
      { 'fa-minus': this.props.isOpen }
    );

    const buttonText = this.props.isOpen ? 'Hide this message' : 'Show this message';

    return (
      <div
        className={disclaimerClass}
        aria-expanded={this.props.isOpen}>
        <div className="usa-alert-body">
          <h4 className="usa-alert-heading">This list includes only your active VA prescriptions</h4>
          <div className="usa-alert-text" hidden={!this.props.isOpen}>
            <p>If you’re taking a medicine that you don’t see on this list — or if you have any questions about your current medicines — please contact your VA health care team.</p>
          </div>
          <button
            className="va-alert-close usa-button-unstyled"
            onClick={this.props.handleClose}>
            <i className={openButton}></i>
            <i className="usa-sr-only">{buttonText}</i>
          </button>
        </div>
      </div>
    );
  }
}

Disclaimer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Disclaimer;
