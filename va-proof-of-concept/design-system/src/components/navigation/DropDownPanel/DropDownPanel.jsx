import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export default class DropDownPanel extends React.Component {
  componentDidMount() {
    document.body.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (event) => {
    // If this dropdown is open, and it's not an element within this dropdown being clicked,
    // then the user clicked elsewhere and we should invoke the click handler to toggle this
    // dropdown to closed.
    if (this.props.isOpen && !this.dropdownDiv.contains(event.target)) {
      this.toggleDropDown();
    }
  }

  toggleDropDown = () => {
    this.props.clickHandler();
  }

  render() {
    const buttonClasses = classNames(
      this.props.cssClass,
      { 'va-btn-withicon': this.props.icon },
      'va-dropdown-trigger'
    );

    return (
      <div className="va-dropdown" ref={div => { this.dropdownDiv = div; }}>
        <button className={buttonClasses}
          aria-controls={this.props.id}
          aria-expanded={this.props.isOpen}
          disabled={this.props.disabled}
          onClick={this.toggleDropDown}>
          <span>
            {this.props.icon}
            {this.props.buttonText}
          </span>
        </button>
        <div className="va-dropdown-panel" id={this.props.id} hidden={!this.props.isOpen}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DropDownPanel.propTypes = {
  buttonText: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  cssClass: PropTypes.string,
  icon: PropTypes.node, /* Should be SVG markup */
  id: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

DropDownPanel.defaultProps = {
  disabled: false
};
