import PropTypes from 'prop-types';
import React from 'react';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';

class MessageSubject extends React.Component {
  render() {
    return (
      <div className={this.props.cssClass}>
        <ErrorableTextInput
          charMax={this.props.charMax}
          additionalClass={`${this.props.cssClass}-input`}
          label="Additional subject line"
          onValueChange={this.props.onValueChange}
          required={this.props.required}
          name="messageSubject"
          field={this.props.subject}/>
      </div>
    );
  }
}

MessageSubject.propTypes = {
  cssClass: PropTypes.string,
  errorMessage: PropTypes.string,
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  subject: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired
};

export default MessageSubject;
