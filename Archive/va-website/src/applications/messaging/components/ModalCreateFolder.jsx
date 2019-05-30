import PropTypes from 'prop-types';
import React from 'react';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';
import Modal from '@department-of-veterans-affairs/formation/Modal';
import { makeField } from '../../../platform/forms/fields';
import { validateFolderName } from '../utils/validations';
import { createNewFolderSettings } from '../config';

class ModalCreateFolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(field) {
    this.props.onValueChange(makeField(field.value, true));
  }

  handleSubmit(domEvent) {
    domEvent.preventDefault();
    const newFolderName = this.props.newFolderName;

    // Mark the field dirty upon submit to trigger validation
    // that only works on dirty fields.
    if (!newFolderName.dirty) {
      this.handleValueChange(newFolderName);
    } else {
      this.props.onSubmit(newFolderName.value);
    }
  }

  render() {
    const foldersWeHave = this.props.folders;
    const newFolderName = this.props.newFolderName;
    const error = validateFolderName(newFolderName, foldersWeHave);

    let modalContents;

    if (this.props.loading) {
      modalContents = <LoadingIndicator message="Creating your folder..."/>;
    } else {
      modalContents = (
        <form onSubmit={this.handleSubmit}>
          <h3>
            Create new folder
          </h3>
          <ErrorableTextInput
            errorMessage={error.hasError ? createNewFolderSettings.errorMessages[error.type] : undefined}
            label="Please enter a new folder name:"
            onValueChange={this.handleValueChange}
            name="newFolderName"
            charMax={createNewFolderSettings.maxLength}
            field={this.props.newFolderName}/>
          <div className="va-modal-button-group">
            <button
              disabled={error.hasError || !this.props.newFolderName.dirty}
              type="submit">Create</button>
            <button
              className="usa-button-secondary"
              onClick={this.props.onClose}
              type="button">Cancel</button>
          </div>
        </form>
      );
    }

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

ModalCreateFolder.propTypes = {
  errorMessage: PropTypes.string,
  cssClass: PropTypes.string,
  folders: PropTypes.array,
  newFolderName: PropTypes.object,
  id: PropTypes.string,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  onValueChange: PropTypes.func,
  visible: PropTypes.bool.isRequired
};

export default ModalCreateFolder;
