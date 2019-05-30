import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import Modal from '@department-of-veterans-affairs/formation/Modal';
import GlossaryList from './GlossaryList';

class GlossaryModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal(event) {
    event.preventDefault();
    this.props.onCloseModal();
  }

  render() {
    let element;
    if (this.props.isVisible) {
      element = (
        <div>
          <GlossaryList terms={this.props.content}/>
          <button className="va-modal-close" type="button" onClick={this.handleCloseModal}><i className="fa fa-close"></i><span className="usa-sr-only">Close this modal</span></button>
          <Link
            to="/glossary"
            onClick={this.props.onCloseModal}>
            See all status definitions
          </Link>
        </div>
      );
    } else {
      element = (<div/>);
    }

    return (
      <Modal
        cssClass="va-modal"
        contents={element}
        hideCloseButton
        id="rx-glossary-modal"
        title="Glossary"
        onClose={this.handleCloseModal}
        visible={this.props.isVisible}/>
    );
  }
}

GlossaryModal.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    term: PropTypes.string,
    definition: PropTypes.string
  })),
  onCloseModal: PropTypes.func
};

export default GlossaryModal;
