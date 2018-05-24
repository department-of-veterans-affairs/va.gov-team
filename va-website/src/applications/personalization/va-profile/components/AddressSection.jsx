import React from 'react';
import HeadingWithEdit from './HeadingWithEdit';
import Modal from '@department-of-veterans-affairs/formation/Modal';
import Address from '../../../letters/components/Address';
import LoadingButton from './LoadingButton';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import { fieldFailureMessage } from './LoadFail';
import { consolidateAddress, expandAddress, isEmptyAddress, formatAddress } from '../../../../platform/forms/address/helpers';

class EditAddressModal extends React.Component {

  componentDidMount() {
    const defaultFieldValue = { address: {} };
    if (this.props.addressResponseData) {
      defaultFieldValue.address = consolidateAddress(this.props.addressResponseData.address);
    }
    this.props.onChange(defaultFieldValue);
  }

  onInput = (field, value) => {
    const newFieldValue = {
      address: {
        ...this.props.field.value.address,
        [field]: value
      }
    };
    this.props.onChange(newFieldValue);
  }

  // Receives the field name as its first arg but that fails the linter
  onBlur = () => {}

  onSubmit = (event) => {
    event.preventDefault();
    // @todo Refactor this...
    this.props.onSubmit(expandAddress(this.props.field.value.address));
  }

  render() {
    return (
      <Modal id="profile-address-modal" onClose={this.props.onCancel} visible>
        <h3>{this.props.title}</h3>
        <AlertBox
          isVisible={!!this.props.error}
          status="error"
          content={<p>We’re sorry. We couldn’t update your address. Please try again.</p>}
          onCloseAlert={this.props.clearErrors}/>
        <form onSubmit={this.onSubmit}>
          {this.props.field && (
            <Address
              address={this.props.field.value.address}
              onInput={this.onInput}
              onBlur={this.onBlur}
              errorMessages={{}}
              states={this.props.addressConstants.states}
              countries={this.props.addressConstants.countries}/>
          )}
          <LoadingButton isLoading={this.props.isLoading}>Update</LoadingButton>
          <button type="button" className="usa-button-secondary" onClick={this.props.onCancel}>Cancel</button>
        </form>
      </Modal>
    );
  }
}

function AddressView({ address }) {
  const { street, cityStateZip, country } = formatAddress(address);

  return (
    <div>
      {street}<br/>
      {cityStateZip}<br/>
      {country}
    </div>
  );
}

export default function AddressSection({ addressResponseData, addressConstants, title, field, error, clearErrors, isEditing, isLoading, onChange, onEdit, onAdd,  onCancel, onSubmit }) {
  let content = null;
  let modal = null;

  if (addressResponseData.error) {
    content = fieldFailureMessage;
  } else {
    if (addressResponseData.address && !isEmptyAddress(addressResponseData.address)) {
      const { address } = addressResponseData;
      content = <AddressView address={address}/>;
    } else {
      content = (
        <button
          type="button"
          disabled={!addressResponseData.controlInformation.canUpdate}
          onClick={onAdd}
          className="va-button-link va-profile-btn">Please add your {title.toLowerCase()}</button>
      );
    }
  }

  if (isEditing) {
    modal = (
      <EditAddressModal
        title="Edit mailing address"
        addressResponseData={addressResponseData}
        addressConstants={addressConstants}
        onChange={onChange}
        field={field}
        error={error}
        clearErrors={clearErrors}
        onSubmit={onSubmit}
        isLoading={isLoading}
        onCancel={onCancel}/>
    );
  }

  return (
    <div>
      {modal}
      <HeadingWithEdit
        onEditClick={addressResponseData && !isEmptyAddress(addressResponseData.address) && addressResponseData.controlInformation.canUpdate && onEdit}>{title}
      </HeadingWithEdit>
      {content}
    </div>
  );
}
