import PropTypes from 'prop-types';
import React from 'react';

class ButtonPrint extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button
        className="msg-btn-print"
        type="button"
        onClick={this.handleClick}>
        <i className="fa fa-print"></i>
        <span>Print</span>
      </button>
    );
  }
}

ButtonPrint.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonPrint;
