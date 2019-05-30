import PropTypes from 'prop-types';
import React from 'react';

class MessageAddAttachment extends React.Component {
  render() {
    let mimeTypes = '*';

    if (this.props.allowedMimeTypes) {
      mimeTypes = this.props.allowedMimeTypes.join(',');
    }

    return (
      <div className={this.props.cssClass}>
        <input
          multiple
          accept={mimeTypes}
          id={this.props.id}
          name={this.props.name}
          onChange={this.props.onChange}
          type="file"/>
        <label
          tabIndex="-1"
          className="va-icon-link"
          htmlFor={this.props.id}>
          <i className="fa fa-paperclip"></i>
          <span>{this.props.label}</span>
        </label>
      </div>
    );
  }
}

MessageAddAttachment.propTypes = {
  cssClass: PropTypes.string,
  allowedMimeTypes: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default MessageAddAttachment;
