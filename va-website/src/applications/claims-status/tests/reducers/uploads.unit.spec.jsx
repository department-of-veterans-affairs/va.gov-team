import { expect } from 'chai';

import uploads from '../../reducers/uploads';
import {
  RESET_UPLOADS,
  ADD_FILE,
  REMOVE_FILE,
  SET_UPLOADING,
  SET_UPLOADER,
  SET_PROGRESS,
  DONE_UPLOADING,
  SET_UPLOAD_ERROR,
  UPDATE_FIELD,
  SHOW_MAIL_OR_FAX,
  CANCEL_UPLOAD,
  SET_FIELDS_DIRTY
} from '../../actions';

describe('Uploads reducer', () => {
  it('should reset uploads state', () => {
    const state = uploads({
      things: null
    }, {
      type: RESET_UPLOADS
    });

    expect(state.things).to.be.undefined;
    expect(state.files).to.be.empty;
  });

  it('should add a file', () => {
    const state = uploads({
      files: []
    }, {
      type: ADD_FILE,
      files: [
        { name: 'test' }
      ]
    });

    expect(state.files.length).to.equal(1);
    expect(state.files[0].file.name).to.equal('test');
  });

  it('remove a file', () => {
    const state = uploads({
      files: [
        { name: 'test1' },
        { name: 'test2' }
      ]
    }, {
      type: REMOVE_FILE,
      index: 1
    });

    expect(state.files).not.to.be.empty;
    expect(state.files[0].name).to.equal('test1');
  });

  it('set state as uploading', () => {
    const uploader = {};
    const state = uploads({
    }, {
      type: SET_UPLOADING,
      uploading: true,
      uploader
    });

    expect(state.uploading).to.be.true;
    expect(state.uploadError).to.be.false;
    expect(state.uploadComplete).to.be.false;
    expect(state.uploader).to.eql(uploader);
  });

  it('set uploader in state', () => {
    const uploader = {};
    const state = uploads({
    }, {
      type: SET_UPLOADER,
      uploader
    });

    expect(state.uploader).to.eql(uploader);
  });

  it('set upload progress', () => {
    const state = uploads({
    }, {
      type: SET_PROGRESS,
      progress: 0.5
    });

    expect(state.progress).to.equal(0.5);
  });

  it('set upload error', () => {
    const state = uploads({
    }, {
      type: SET_UPLOAD_ERROR
    });

    expect(state.uploading).to.be.false;
    expect(state.uploadError).to.be.true;
    expect(state.uploader).to.be.null;
  });

  it('set upload done', () => {
    const state = uploads({
    }, {
      type: DONE_UPLOADING
    });

    expect(state.uploading).to.be.false;
    expect(state.uploadComplete).to.be.true;
    expect(state.uploader).to.be.null;
  });

  it('update form field', () => {
    const state = uploads({
    }, {
      type: UPDATE_FIELD,
      path: 'uploadField',
      field: {
        value: 'test',
        dirty: true
      }
    });

    expect(state.uploadField.value).to.equal('test');
  });

  it('toggle mail or fax modal', () => {
    const state = uploads({
    }, {
      type: SHOW_MAIL_OR_FAX,
      visible: true
    });

    expect(state.showMailOrFax).to.be.true;
  });

  it('cancel upload', () => {
    const state = uploads({
    }, {
      type: CANCEL_UPLOAD
    });

    expect(state.uploading).to.be.false;
    expect(state.uploader).to.be.null;
  });

  it('dirty fields', () => {
    const state = uploads({
      uploadField: {
        value: 'test',
        dirty: false
      }
    }, {
      type: SET_FIELDS_DIRTY
    });

    expect(state.uploadField.dirty).to.be.true;
  });
});
