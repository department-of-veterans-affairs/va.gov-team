import PropTypes from 'prop-types';
import React from 'react';

import Modal from '@department-of-veterans-affairs/formation/Modal';

class ModalAttachments extends React.Component {
  render() {
    const modalContents = (
      <div>
        <h3>
          {this.props.title}
        </h3>
        <p>{this.props.text}</p>
        <div>
          <button
            onClick={this.props.onClose}
            type="button">Ok, got it</button>
        </div>
      </div>
    );

    return (
      <Modal
        cssClass={this.props.cssClass}
        contents={modalContents}
        id={this.props.id}
        onClose={this.props.onClose}
        visible={this.props.visible}/>
    );
  }
}

ModalAttachments.propTypes = {
  cssClass: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default ModalAttachments;
