import PropTypes from 'prop-types';
import React from 'react';

class MessageNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
  }

  handleClickNext() {
    if (this.props.itemNumber < this.props.totalItems) {
      this.props.onItemSelect(this.props.itemNumber + 1);
    }
  }

  handleClickPrev() {
    if (this.props.itemNumber > 1) {
      this.props.onItemSelect(this.props.itemNumber - 1);
    }
  }

  render() {
    return (
      <div className="messaging-message-nav">
        <span className="messaging-count">
          <b>{this.props.currentRange}</b>
          &nbsp;of&nbsp;
          <b>{this.props.messageCount}</b>
        </span>
        <button
          type="button"
          disabled={this.props.itemNumber <= 1}
          aria-label="Previous"
          onClick={this.handleClickPrev}>
          <i className="fa fa-chevron-left"></i>
          <span>Previous</span>
        </button>
        <button
          type="button"
          disabled={this.props.itemNumber >= this.props.totalItems}
          aria-label="Next"
          onClick={this.handleClickNext}>
          <span>Next</span>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    );
  }
}

MessageNav.propTypes = {
  currentRange: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  messageCount: PropTypes.number.isRequired,
  onItemSelect: PropTypes.func,
  itemNumber: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default MessageNav;
