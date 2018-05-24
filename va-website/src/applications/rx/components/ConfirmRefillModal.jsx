import PropTypes from 'prop-types';
import React from 'react';
import Modal from '@department-of-veterans-affairs/formation/Modal';
import { formatDate } from '../utils/helpers';

class ConfirmRefillModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleConfirmRefill = this.handleConfirmRefill.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleConfirmRefill(event) {
    event.preventDefault();
    this.props.refillPrescription(this.props.prescription);
  }

  handleCloseModal(event) {
    event.preventDefault();
    this.props.onCloseModal();
  }

  render() {
    // Initialize to prevent console errors
    let innerElement = '';

    if (this.props.prescription) {
      const prescription = this.props.prescription;
      const spinnerIcon = this.props.isLoading && <i className="fa fa-spin fa-spinner"/>;

      innerElement = (
        <form onSubmit={this.handleConfirmRefill}>
          <div className="rx-modal-refillinfo">
            <button className="va-modal-close" type="button" onClick={this.handleCloseModal}><i className="fa fa-close"></i><span className="usa-sr-only">Close this modal</span></button>
            <span className="rx-modal-drug">
              {prescription.prescriptionName}
            </span>
            <div className="rx-modal-rxnumber">
              <strong>Prescription <abbr title="number">#</abbr>:</strong> {prescription.prescriptionNumber}
            </div>
            <div className="rx-modal-facility">
              <strong>Facility name:</strong> {prescription.facilityName}
            </div>
            <div className="rx-modal-lastrefilled">
              <strong>Last submit date:</strong> {formatDate(prescription.refillSubmitDate)}
            </div>
            <div className="va-modal-button-group cf">
              <button type="submit" disabled={this.props.isLoading}>{spinnerIcon} Order refill</button>
              <button type="button" className="usa-button-secondary"
                onClick={this.handleCloseModal}>Cancel</button>
            </div>
          </div>
        </form>
      );
    }

    return (
      <Modal
        cssClass="rx-modal"
        contents={innerElement}
        hideCloseButton
        id="rx-confirm-refill"
        onClose={this.props.onCloseModal}
        title="Confirm refill"
        visible={this.props.isVisible}/>
    );
  }
}

ConfirmRefillModal.propTypes = {
  prescription: PropTypes.shape({
    prescriptionId: PropTypes.number.isRequired,
    prescriptionName: PropTypes.string.isRequired
  }),
  isLoading: PropTypes.bool,
  isVisible: PropTypes.bool,
  refillPrescription: PropTypes.func,
  onCloseModal: PropTypes.func
};

export default ConfirmRefillModal;
