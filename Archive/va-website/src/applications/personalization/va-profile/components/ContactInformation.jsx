import {
  SAVE_MAILING_ADDRESS,
  SAVE_PRIMARY_PHONE,
  SAVE_ALTERNATE_PHONE,
  SAVE_EMAIL_ADDRESS,
  SAVE_ALTERNATE_PHONE_FAIL,
  SAVE_PRIMARY_PHONE_FAIL,
  SAVE_MAILING_ADDRESS_FAIL,
  SAVE_EMAIL_ADDRESS_FAIL
} from '../actions';

import React from 'react';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import DowntimeNotification, { services } from '../../../../platform/monitoring/DowntimeNotification';
import recordEvent from '../../../../platform/monitoring/record-event';
import accountManifest from '../../account/manifest.json';
import PhoneSection from './PhoneSection';
import AddressSection from './AddressSection';
import EmailSection from './EmailSection';
import LoadingSection from './LoadingSection';
import LoadFail from './LoadFail';
import { handleDowntimeForSection } from './DowntimeBanner';

function recordedAction(actionName, sectionName, callback) {
  return () => {
    if (sectionName && actionName) {
      recordEvent({
        event: 'profile-navigation',
        'profile-action': actionName,
        'profile-section': sectionName,
      });
    }
    callback();
  };
}

class ContactInformationContent extends React.Component {

  componentDidMount() {
    this.props.fetchContactInformation();
    this.props.fetchAddressConstants();
  }

  openModalHandler(modalName) {
    return () => this.props.modal.open(modalName);
  }

  closeModal = () => {
    this.props.modal.open(null);
  }

  renderContent = () => {
    const {
      modal: {
        currentlyOpen: currentlyOpenModal,
        pendingSaves,
        formFields,
        errors,
        clearErrors
      },
      profile: {
        contactInformation: {
          email,
          mailingAddress,
          primaryTelephone,
          alternateTelephone,
        },
        addressConstants
      },
      updateFormFieldActions,
      updateActions
    } = this.props;

    if (email.error && mailingAddress.error && primaryTelephone.error && alternateTelephone.error) {
      return <LoadFail information="contact"/>;
    }

    return (
      <div>
        <AddressSection
          title="Mailing Address"
          addressResponseData={mailingAddress}
          field={formFields.mailingAddress}
          error={errors.includes(SAVE_MAILING_ADDRESS_FAIL)}
          clearErrors={clearErrors}
          onChange={updateFormFieldActions.mailingAddress}
          isEditing={currentlyOpenModal === 'mailingAddress'}
          isLoading={pendingSaves.includes(SAVE_MAILING_ADDRESS)}
          onEdit={recordedAction('edit-link', 'mailing-address', this.openModalHandler('mailingAddress'))}
          onAdd={recordedAction('add-link', 'mailing-address', this.openModalHandler('mailingAddress'))}
          onSubmit={recordedAction('update-button', 'mailing-address', updateActions.updateMailingAddress)}
          onCancel={recordedAction('cancel-button', 'mailing-address', this.closeModal)}
          addressConstants={addressConstants}/>

        <PhoneSection
          title="Primary Phone"
          phoneResponseData={primaryTelephone}
          field={formFields.primaryTelephone}
          error={errors.includes(SAVE_PRIMARY_PHONE_FAIL)}
          clearErrors={clearErrors}
          onChange={updateFormFieldActions.primaryTelephone}
          isEditing={currentlyOpenModal === 'primaryPhone'}
          isLoading={pendingSaves.includes(SAVE_PRIMARY_PHONE)}
          onEdit={recordedAction('edit-link', 'primary-telephone', this.openModalHandler('primaryPhone'))}
          onAdd={recordedAction('add-link', 'primary-telephone', this.openModalHandler('primaryPhone'))}
          onSubmit={recordedAction('update-button', 'primary-telephone', updateActions.updatePrimaryPhone)}
          onCancel={recordedAction('cancel-button', 'primary-telephone', this.closeModal)}/>

        <PhoneSection
          title="Alternate Phone"
          phoneResponseData={alternateTelephone}
          field={formFields.alternateTelephone}
          error={errors.includes(SAVE_ALTERNATE_PHONE_FAIL)}
          clearErrors={clearErrors}
          onChange={updateFormFieldActions.alternateTelephone}
          isEditing={currentlyOpenModal === 'altPhone'}
          isLoading={pendingSaves.includes(SAVE_ALTERNATE_PHONE)}
          onEdit={recordedAction('edit-link', 'alternative-telephone', this.openModalHandler('altPhone'))}
          onAdd={recordedAction('add-link', 'alternative-telephone', this.openModalHandler('altPhone'))}
          onSubmit={recordedAction('update-button', 'alternative-telephone', updateActions.updateAlternatePhone)}
          onCancel={recordedAction('cancel-button', 'alternative-telephone', this.closeModal)}/>

        <EmailSection
          emailResponseData={email}
          field={formFields.email}
          error={errors.includes(SAVE_EMAIL_ADDRESS_FAIL)}
          clearErrors={clearErrors}
          onChange={updateFormFieldActions.email}
          isEditing={currentlyOpenModal === 'email'}
          isLoading={pendingSaves.includes(SAVE_EMAIL_ADDRESS)}
          onEdit={recordedAction('edit-link', 'email', this.openModalHandler('email'))}
          onAdd={recordedAction('add-link', 'email', this.openModalHandler('email'))}
          onSubmit={recordedAction('update-button', 'email', updateActions.updateEmailAddress)}
          onCancel={recordedAction('cancel-button', 'email', this.closeModal)}/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <AlertBox
          isVisible
          status="info"
          content={<p>We’ll use this information to communicate with you about your VA <strong>Compensation &amp; Pension benefits.</strong></p>}/>
        <LoadingSection
          isLoading={!this.props.profile.contactInformation || !this.props.profile.addressConstants}
          message="Loading contact information..."
          render={this.renderContent}/>
        <div>
          <h3>Want to update the email you use to sign in to Vets.gov?</h3>
          <a href={accountManifest.rootUrl} onClick={() => { recordEvent({ event: 'profile-navigation', 'profile-action': 'view-link', 'profile-section': 'account-settings' }); }}>Go to your account settings</a>
        </div>
      </div>
    );
  }
}

export default function ContactInformation(props) {
  return (
    <div>
      <h2 className="va-profile-heading">Contact Information</h2>
      <DowntimeNotification render={handleDowntimeForSection('contact')} dependencies={[services.evss, services.mvi]}>
        <ContactInformationContent {...props}/>
      </DowntimeNotification>
    </div>
  );
}
