import PropTypes from 'prop-types';
import React from 'react';
import ErrorableSelect from '@department-of-veterans-affairs/formation/ErrorableSelect';
import classNames from 'classnames';

class MessageRecipient extends React.Component {
  render() {
    const fieldCss = classNames(
      this.props.cssClass,
      { 'usa-input-error': !!this.props.errorMessage },
      { 'msg-compose-error': !!this.props.errorMessage }
    );

    return (
      <div className={fieldCss}>
        <ErrorableSelect
          errorMessage={this.props.errorMessage}
          label="To"
          name="messageRecipient"
          onValueChange={this.props.onValueChange}
          options={this.props.options}
          value={this.props.recipient}/>
      </div>
    );
  }
}

MessageRecipient.propTypes = {
  cssClass: PropTypes.string,
  errorMessage: PropTypes.string,
  onValueChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number }),
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string })
    ])).isRequired,
  recipient: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired
};

export default MessageRecipient;
