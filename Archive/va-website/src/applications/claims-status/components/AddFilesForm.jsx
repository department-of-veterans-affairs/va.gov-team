import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import Scroll from 'react-scroll';

import recordEvent from '../../../platform/monitoring/record-event';

import ErrorableFileInput from '@department-of-veterans-affairs/formation/ErrorableFileInput';
import ErrorableSelect from '@department-of-veterans-affairs/formation/ErrorableSelect';

import Modal from '@department-of-veterans-affairs/formation/Modal';

import UploadStatus from './UploadStatus';
import MailOrFax from './MailOrFax';
import { displayFileSize, DOC_TYPES, getTopPosition } from '../utils/helpers';
import { getScrollOptions } from '../../../platform/utilities/ui';
import { validateIfDirty, isNotBlank, isValidFile, isValidDocument, isValidFileSize, isValidFileType, FILE_TYPES } from '../utils/validations';
import { setFocus } from '../utils/page';

const displayTypes = FILE_TYPES.map(type => (type === 'pdf' ? 'pdf (unlocked)' : type)).join(', ');

const scrollToFile = (position) => {
  const options = getScrollOptions({ offset: -25 });
  Scroll.scroller.scrollTo(`documentScroll${position}`, options);
};
const scrollToError = () => {
  const errors = document.querySelectorAll('.usa-input-error');
  if (errors.length) {
    const errorPosition = getTopPosition(errors[0]);
    const options = getScrollOptions({ offset: -25 });
    Scroll.animateScroll.scrollTo(errorPosition, options);
    errors[0].querySelector('label').focus();
  }
};
const Element = Scroll.Element;

class AddFilesForm extends React.Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { errorMessage: null };
  }
  getErrorMessage() {
    if (this.state.errorMessage) {
      return this.state.errorMessage;
    }
    return validateIfDirty(this.props.field, () => this.props.files.length > 0)
      ? undefined
      : 'Please select a file first';
  }
  add(files) {
    const file = files[0];

    if (isValidFile(file)) {
      this.setState({ errorMessage: null });
      this.props.onAddFile(files);
      setTimeout(() => {
        scrollToFile(this.props.files.length - 1);
        setFocus(document.querySelectorAll('.document-item-container')[this.props.files.length - 1]);
      });
    } else if (!isValidFileType(file)) {
      this.setState({ errorMessage: 'Please choose a file from one of the accepted types.' });
    } else if (!isValidFileSize(file)) {
      this.setState({
        errorMessage: 'The file you selected is larger than the 25MB maximum file size and could not be added.'
      });
    }
  }
  submit() {
    if (this.props.files.length > 0 && this.props.files.every(isValidDocument)) {
      this.props.onSubmit();
    } else {
      this.props.onDirtyFields();
      setTimeout(scrollToError);
    }
  }
  render() {
    return (
      <div>
        <div>
          <p><a href onClick={(evt) => {
            evt.preventDefault();
            recordEvent({
              event: 'claims-mailfax-modal',
            });
            this.props.onShowMailOrFax(true);
          }}>Need to mail or fax your files</a>?</p>
        </div>
        <Element name="filesList"/>
        <div>
          <ErrorableFileInput
            errorMessage={this.getErrorMessage()}
            label={<span className="claims-upload-input-title">Select files to upload</span>}
            accept={FILE_TYPES.map(type => `.${type}`).join(',')}
            onChange={this.add}
            buttonText="Add Files"
            name="fileUpload"
            additionalErrorClass="claims-upload-input-error-message"/>
        </div>
        <div className="file-requirements">
          <p className="file-requirement-header">Accepted file types:</p>
          <p className="file-requirement-text">{displayTypes}</p>
          <p className="file-requirement-header">Maximum file size:</p>
          <p className="file-requirement-text">25MB</p>
        </div>
        {this.props.files.map(({ file, docType }, index) => (
          <div key={index} className="document-item-container">
            <Element name={`documentScroll${index}`}/>
            <div>
              <div className="document-title-row">
                <div className="document-title-text-container">
                  <div>
                    <span className="document-title">{file.name}</span>
                  </div>
                  <div>
                    {displayFileSize(file.size)}
                  </div>
                </div>
                <div className="remove-document-button">
                  <button className="usa-button-secondary" onClick={() => this.props.onRemoveFile(index)}>Remove</button>
                </div>
              </div>
              <div className="clearfix"></div>
              <ErrorableSelect
                required
                errorMessage={validateIfDirty(docType, isNotBlank) ? undefined : 'Please provide a response'}
                name="docType"
                label="What type of document is this?"
                options={DOC_TYPES}
                value={docType}
                emptyDescription="Select a description"
                onValueChange={(update) => this.props.onFieldChange(`files[${index}].docType`, update)}/>
            </div>
          </div>
        ))}
        <div>
          <button
            className="usa-button"
            onClick={this.submit}>
            Submit Files for Review
          </button>
          <Link to={this.props.backUrl} className="claims-files-cancel">Cancel</Link>
        </div>
        <Modal
          onClose={() => true}
          visible={this.props.uploading}
          hideCloseButton
          cssClass=""
          id="upload-status"
          contents={<UploadStatus
            progress={this.props.progress}
            files={this.props.files.length}
            onCancel={this.props.onCancel}/>}/>
        <Modal
          onClose={() => true}
          visible={this.props.showMailOrFax}
          hideCloseButton
          focusSelector="button"
          cssClass=""
          contents={<MailOrFax onClose={() => this.props.onShowMailOrFax(false)}/>}/>
      </div>
    );
  }
}

AddFilesForm.propTypes = {
  files: PropTypes.array.isRequired,
  field: PropTypes.object.isRequired,
  uploading: PropTypes.bool,
  showMailOrFax: PropTypes.bool,
  backUrl: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onAddFile: PropTypes.func.isRequired,
  onRemoveFile: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDirtyFields: PropTypes.func.isRequired
};

export default AddFilesForm;
