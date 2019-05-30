import PropTypes from 'prop-types';
import React from 'react';

import Modal from '@department-of-veterans-affairs/formation/Modal';

class ModalDiscardChanges extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
    this.props.onClose();
  }

  render() {
    const contents = (
      <form onSubmit={this.handleSubmit}>
        <h3>Confirm discard changes</h3>
        <div>Your changes have not been saved. Discard changes?</div>
        <div className="va-modal-button-group">
          <button>Discard changes</button>
          <button
            className="usa-button-secondary"
            type="button"
            onClick={this.props.onClose}>
            Cancel
          </button>
        </div>
      </form>
    );

    return (
      <Modal
        cssClass="messaging-modal"
        contents={contents}
        onClose={this.props.onClose}
        visible={this.props.visible}/>
    );
  }
}

ModalDiscardChanges.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  visible: PropTypes.bool.isRequired
};

export default ModalDiscardChanges;
