import PropTypes from 'prop-types';
import React from 'react';
import ErrorableTextArea from '@department-of-veterans-affairs/formation/ErrorableTextArea';

class MessageWrite extends React.Component {
  render() {
    return (
      <div className={this.props.cssClass}>
        <ErrorableTextArea
          disabled={this.props.disabled}
          errorMessage={this.props.errorMessage}
          label="Message"
          onValueChange={this.props.onValueChange}
          placeholder={this.props.placeholder}
          name="messageText"
          field={this.props.text}/>
      </div>
    );
  }
}

MessageWrite.propTypes = {
  disabled: PropTypes.bool,
  cssClass: PropTypes.string,
  errorMessage: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired
};

export default MessageWrite;
