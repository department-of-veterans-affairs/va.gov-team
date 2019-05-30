import React from 'react';
import Modal from '@department-of-veterans-affairs/formation/Modal';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';
import HeadingWithEdit from './HeadingWithEdit';
import LoadingButton from './LoadingButton';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import { fieldFailureMessage } from './LoadFail';

class EditEmailModal extends React.Component {

  componentDidMount() {
    const defaultFieldValue = this.props.emailResponseData || { email: '' };
    this.props.onChange(defaultFieldValue);
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.props.field.errorMessage) return;
    this.props.onSubmit(this.props.field.value);
  }

  onChange = ({ value: email, dirty }) => {
    const newFieldValue = { ...this.props.field.value, email };
    this.props.onChange(newFieldValue, dirty);
  }

  render() {
    const {
      title,
      onCancel,
      isLoading,
      field,
      clearErrors
    } = this.props;

    return (
      <Modal id="profile-email-modal" onClose={onCancel} visible>
        <h3>{title}</h3>
        <AlertBox
          isVisible={!!this.props.error}
          status="error"
          content={<p>We’re sorry. We couldn’t update your email. Please try again.</p>}
          onCloseAlert={clearErrors}/>
        {field && (
          <form onSubmit={this.onSubmit}>
            <ErrorableTextInput
              autoFocus
              label="Email Address"
              field={{ value: field.value.email, dirty: false }}
              errorMessage={field.errorMessage}
              onValueChange={this.onChange}/>
            <LoadingButton isLoading={isLoading}>Update</LoadingButton>
          </form>
        )}
      </Modal>
    );
  }
}


export default function EmailSection({ emailResponseData, field, error, clearErrors, isEditing, isLoading, onChange, onEdit, onAdd, onCancel, onSubmit }) {
  let content = null;
  let modal = null;

  if (emailResponseData) {
    if (emailResponseData.email) {
      content = emailResponseData.email;
    } else {
      content = <button type="button" onClick={onAdd} className="va-button-link va-profile-btn">Please add your email address</button>;
    }
  } else {
    content = fieldFailureMessage;
  }

  if (isEditing) {
    modal = (
      <EditEmailModal
        title="Edit email address"
        emailResponseData={emailResponseData}
        field={field}
        error={error}
        clearErrors={clearErrors}
        onChange={onChange}
        onSubmit={onSubmit}
        isLoading={isLoading}
        onCancel={onCancel}/>
    );
  }

  return (
    <div>
      {modal}
      <HeadingWithEdit onEditClick={emailResponseData && emailResponseData.email && onEdit}>Email Address</HeadingWithEdit>
      <div>{content}</div>
    </div>
  );
}
