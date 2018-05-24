import React from 'react';
import Dropzone from 'react-dropzone';

import ErrorableFileInput from '@department-of-veterans-affairs/formation/ErrorableFileInput';
import ProgressBar from '@department-of-veterans-affairs/formation/ProgressBar';
import { scrollAndFocus } from '../../../platform/utilities/ui';
import PhotoPreview from '../components/PhotoPreview';
import CropperController from '../components/CropperController';

const MIN_SIZE = 350;

const layouts = {
  choosePhoto: 'choose_photo',
  cropPhoto: 'crop_photo',
  watchUpload: 'watch_upload',
  previewPhoto: 'preview_photo',
  screenReaderError: 'screen_reader_error'
};

function isValidFileType(fileName, fileTypes) {
  return fileTypes.some(type => fileName.toLowerCase().endsWith(type));
}

function isValidImageSize(img) {
  return img.width >= MIN_SIZE && img.height >= MIN_SIZE;
}

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = dataUrl;
    img.onerror = (e) => reject(e);
    img.onload = () => {
      resolve(img);
    };
  });
}

function isSquareImage(img) {
  return img.width === img.height;
}

export default class PhotoField extends React.Component {
  constructor(props) {
    super(props);
    const formData = props.formData || {};
    let previewSrc;
    if (formData.file instanceof Blob) {
      previewSrc = window.URL.createObjectURL(formData.file);
    }

    this.state = {
      currentLayout: layouts.choosePhoto,
      progress: 0,
      src: null,
      previewSrc,
      previewProcessing: false
    };
  }

  componentWillMount() {
    this.detectDrag();
  }

  componentWillReceiveProps(nextProps) {
    const nextFormData = nextProps.formData || {};
    const prevFormData = this.props.formData || {};

    if (nextFormData.file instanceof Blob && nextFormData.file !== prevFormData.file) {
      if (this.state.previewSrc) {
        window.URL.revokeObjectURL(this.state.previewSrc);
      }
      this.setState({ previewSrc: window.URL.createObjectURL(nextFormData.file) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const newFile = this.props.formData || {};
    const oldFile = prevProps.formData || {};
    const newState = this.state;
    if (newFile.errorMessage && oldFile.errorMessage !== newFile.errorMessage) {
      scrollAndFocus(this.errorMessage);
    } else if (prevState.currentLayout !== layouts.cropPhoto && newState.currentLayout === layouts.cropPhoto) {
      scrollAndFocus(this.borderBox);
    } else if (typeof this.props.formData === 'undefined' && this.props.formData !== prevProps.formData) {
      scrollAndFocus(this.borderBox);
    }
  }

  componentWillUnmount() {
    if (this.state.previewSrc) {
      window.URL.revokeObjectURL(this.state.previewSrc);
    }
  }

  onEdit = () => {
    this.setState({
      currentLayout: layouts.cropPhoto,
      fileName: this.props.formData.name,
      src: this.state.previewSrc,
      warningMessage: null
    });
  }

  onChangeScreenReader = (files) => {
    const file = files[0];

    const fileTypes = this.props.uiSchema['ui:options'].fileTypes;
    if (!isValidFileType(file.name, fileTypes)) {
      this.props.onChange({
        errorMessage: 'We weren’t able to upload your file. Please make sure the file you’re uploading is a jpeg, tiff, .gif, or .png file and try again.'
      });
      this.setState({ currentLayout: layouts.screenReaderError });
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        loadImage(reader.result)
          .then((img) => {
            if (!isSquareImage(img)) {
              this.props.onChange({
                errorMessage: 'The photo you uploaded isn’t a square photo. Please upload a new one that fits the requirements.'
              });
              this.setState({ currentLayout: layouts.screenReaderError });
            } else if (!isValidImageSize(img)) {
              this.props.onChange({
                errorMessage: 'The file you selected is smaller than the 350-pixel minimum file width or height and couldn’t be uploaded. Please try to upload a different photo.'
              });

              this.setState({ currentLayout: layouts.screenReaderError });
            } else {
              this.setState({
                currentLayout: layouts.watchUpload,
                progress: 0,
                warningMessage: null
              });
              this.uploadRequest = this.props.formContext.uploadFile(
                file,
                this.props.uiSchema['ui:options'],
                this.updateProgress,
                (formData) => this.handleUploadComplete(formData, file),
                () => {
                  this.props.onBlur(this.props.idSchema.$id);
                  this.uploadRequest = null;
                }
              );
            }
          });
      };
      reader.readAsDataURL(file);
    }
  }

  onChange = (files) => {
    const fileTypes = this.props.uiSchema['ui:options'].fileTypes.concat('bmp');
    if (files && files[0]) {
      const file = files[0];
      const fileName = file.name;
      if (file.preview) {
        // dropzone recommendation
        window.URL.revokeObjectURL(file.preview);
      }
      if (!isValidFileType(fileName, fileTypes)) {
        this.props.onChange({
          errorMessage: 'We weren’t able to upload your file. Please make sure the file you’re uploading is a jpeg, tiff, .gif, .png, or .bmp file and try again.'
        });
        this.setState({ dragActive: false });
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          loadImage(reader.result)
            .then((img) => {
              if (!isValidImageSize(img)) {
                this.props.onChange({
                  errorMessage: 'The file you selected is smaller than the 350-pixel minimum file width or height and couldn’t be uploaded. Please try to upload a different photo.'
                });
                this.setState({ dragActive: false });
              } else {
                // Clear any error messages
                this.props.onChange();
                this.setState({
                  dragActive: false,
                  currentLayout: layouts.cropPhoto,
                  fileName,
                  src: img.src
                });
              }
            })
            .catch(() => {
              this.props.onChange({
                errorMessage: 'Sorry, we weren’t able to load the image you selected.'
              });
              this.setState({ dragActive: false });
            });
        };
        reader.readAsDataURL(file);
      }
    }

    this.setState({ warningMessage: '' });
  }

  onPreviewError = () => {
    this.setState({ previewProcessing: true });
  }

  handleUploadComplete = (formData, file) => {
    if (formData.confirmationCode) {
      this.props.onChange(Object.assign({}, formData, {
        file
      }));
      this.uploadRequest = null;
      this.setState({
        currentLayout: layouts.previewPhoto
      });
    } else {
      this.props.onChange(formData);
    }
  }

  cancelUpload = () => {
    if (this.uploadRequest) {
      this.uploadRequest.abort();
    }
    this.props.onChange();
  }

  uploadPhoto = (blob) => {
    this.setState({
      currentLayout: layouts.watchUpload,
      progress: 0,
      warningMessage: null });
    const file = blob;
    file.lastModifiedDate = new Date();
    file.name = 'profile_photo.png';

    this.uploadRequest = this.props.formContext.uploadFile(
      file,
      this.props.uiSchema['ui:options'],
      this.updateProgress,
      (formData) => this.handleUploadComplete(formData, file),
      () => {
        this.uploadRequest = null;
      }
    );
  }

  resetFile = () => {
    this.props.onChange();
    this.setState({
      currentLayout: layouts.choosePhoto
    });
  }

  updateProgress = (progress) => {
    this.setState({ progress });
  }

  detectDrag = () => {
    const div = document.createElement('div');
    const supportsDragAndDrop = ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    const iOS = !!navigator.userAgent.match('iPhone OS') || !!navigator.userAgent.match('iPad');
    const dragAndDropSupported = supportsDragAndDrop && window.FileReader;
    this.setState({ dragAndDropSupported: dragAndDropSupported && !iOS });
  }

  handleDrag(dragActive) {
    this.setState(dragActive);
  }

  updatePreviewSrc = (src) => {
    this.setState({ previewSrc: src });
  }

  render() {
    const { formData, formContext } = this.props;
    const file = formData || {};
    const onReview = formContext.reviewMode;

    if (onReview) {
      return (
        <div className="va-growable-background">
          <PhotoPreview
            id={file.confirmationCode}
            className="photo-review"
            isLoggedIn={formContext.isLoggedIn}
            processing={this.state.previewProcessing}
            src={this.state.previewSrc}
            onUpdatePreview={this.updatePreviewSrc}
            onError={this.onPreviewError}/>
        </div>
      );
    }

    const errorMessage = file.errorMessage;
    const label = this.props.uiSchema['ui:title'];
    const fileTypes = this.props.uiSchema['ui:options'].fileTypes;
    const cropperTypes = fileTypes.concat('bmp');
    const progressBarContainerClass = 'schemaform-file-uploading progress-bar-container';

    let currentLayout = this.state.currentLayout;
    let uploadButtonText = 'Your Photo';
    let instruction;
    let description;
    let uploadControlClass = 'photo-input-container';
    switch (currentLayout) {
      case layouts.choosePhoto:
        description = <p>Drag and drop your image into the square or click the upload button.</p>;
        instruction = <span><strong>Step 1 of 2:</strong> Upload a digital photo.</span>;
        break;
      case layouts.cropPhoto:
        uploadButtonText = 'a New Photo';
        instruction = <span><strong>Step 2 of 2:</strong> Fit your head and shoulders in the frame.</span>;
        description = <p>Move and resize your photo, so your head and shoulders fit in the square frame below. Click and drag, or use the arrow and magnifying buttons to help.</p>;
        break;
      case layouts.watchUpload:
        break;
      case layouts.previewPhoto:
        description = <div>Success! This photo will be printed on your Veteran ID Card.</div>;
        uploadControlClass = 'photo-input-container photo-input-container-left';
        break;
      case layouts.screenReaderError:
        uploadControlClass = 'photo-input-container photo-input-container-left';
        break;
      default:
        currentLayout = layouts.choosePhoto;
        description = <p>Drag and drop your image into the square or click the upload button.</p>;
    }

    return (
      <fieldset className="photo-fieldset">
        <legend className="schemaform-label photo-label">{label}<span className="form-required-span">(*Required)</span></legend>
        <div ref={element => { this.borderBox = element; }} className={errorMessage ? 'error-box' : 'border-box'}>
          {currentLayout === layouts.cropPhoto && <span className="sr-only">
            This is a photo editing tool that requires sight to use. If you're using a screen reader <button type="button" onClick={this.resetFile}>go back one step to upload your photo without cropping.</button>
          </span>}
          <div>
            {errorMessage && <div className="photo-error-wrapper">
              <div ref={element => { this.errorMessage = element; }} role="alert" className="usa-input-error-message photo-error-message">
                We’ve run into a problem.
                <p>{errorMessage}</p>
              </div>
              <a href="/veteran-id-card/how-to-upload-photo" target="_blank">
                Learn more about uploading a photo for your Veteran ID Card
              </a>
            </div>}
            {instruction}
            {!this.state.previewProcessing && description}
            {currentLayout === layouts.previewPhoto && <PhotoPreview
              id={file.confirmationCode}
              className="photo-preview"
              isLoggedIn={formContext.isLoggedIn}
              processing={this.state.previewProcessing}
              src={this.state.previewSrc}
              onUpdatePreview={this.updatePreviewSrc}
              onError={this.onPreviewError}/>
            }
          </div>
          {currentLayout === layouts.watchUpload && <div className={progressBarContainerClass}>
            <span>{this.state.fileName}</span><br/>
            <ProgressBar percent={this.state.progress}/>
            <button type="button" className="va-button-link" onClick={this.cancelUpload}>
              Cancel
            </button>
          </div>}
          {currentLayout === layouts.cropPhoto && <CropperController
            windowWidth={this.state.windowWidth}
            onPhotoCropped={blob => this.uploadPhoto(blob)}
            src={this.state.src}/>
          }
          {currentLayout === layouts.choosePhoto && <div className="drop-target-container">
            <Dropzone
              className={`drop-target ${this.state.dragActive && 'drag-active'}`}
              onDragEnter={() => this.handleDrag({ dragActive: true })}
              onDragLeave={() => this.handleDrag({ dragActive: false })}
              onDrop={this.onChange}
              accept="image/jpeg, image/gif, image/jpg, image/png, image/tiff, image/tif, image/bmp">
              {this.state.dragActive ? <div className="drag-active-text">
                <span>DROP PHOTO</span>
              </div> : <img alt="placeholder" src="/img/photo-placeholder.png"/>}
            </Dropzone>
          </div>}
          <div className={uploadControlClass}>
            {currentLayout === layouts.previewPhoto && <button
              className="photo-preview-link va-button-link"
              type="button"
              onClick={this.resetFile}>
              Go back and change your photo
            </button>}
            {currentLayout === layouts.previewPhoto && !this.state.previewProcessing && <button
              className="photo-preview-link va-button-link"
              type="button"
              aria-describedby="editButtonDescription"
              onClick={this.onEdit}>
              Edit your photo
            </button>}
            {(currentLayout === layouts.choosePhoto || currentLayout === layouts.cropPhoto) && <ErrorableFileInput
              accept={cropperTypes.map(type => `.${type}`).join(',')}
              onChange={this.onChange}
              buttonText={`Upload ${uploadButtonText}`}
              aria-describedby="croppingToolDescription"
              name="fileUpload"/>}
            {currentLayout === layouts.choosePhoto && <ErrorableFileInput
              accept={fileTypes.map(type => `.${type}`).join(',')}
              onChange={this.onChangeScreenReader}
              buttonText="Use our screen reader-friendly photo upload tool."
              aria-describedby="screenReaderPathDescription"
              triggerClass="va-button-link"
              name="screenReaderFileUpload"/>}
            {currentLayout === layouts.screenReaderError && <ErrorableFileInput
              accept={fileTypes.map(type => `.${type}`).join(',')}
              onChange={this.onChangeScreenReader}
              buttonText="Upload Photo Again"
              name="screenReaderFileUpload"/>}
          </div>
          <span className="sr-only" id="croppingToolDescription">This button will take you to a photo cropping tool which requires sight to use. The recommended path for screen readers is to use the screen-reader friendly upload tool button.</span>
          <span className="sr-only" id="editButtonDescription">This button will take you into a photo cropping tool, which requires sight to use. This button is not recommended if you are using a screen reader.</span>
          <span className="sr-only" id="screenReaderPathDescription">This is the recommended path if you are using a screen reader. It will allow you to upload your photo without having to crop, as long as you have a photo that is square and at least 350 pixels wide.</span>
        </div>
      </fieldset>
    );
  }
}
