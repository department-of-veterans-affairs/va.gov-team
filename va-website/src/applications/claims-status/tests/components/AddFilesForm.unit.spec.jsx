import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import AddFilesForm from '../../components/AddFilesForm';

describe('<AddFilesForm>', () => {
  it('should render component', () => {
    const files = [];
    const field = { value: '', dirty: false };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    expect(tree.everySubTree('ErrorableFileInput')).not.to.be.empty;
    expect(tree.everySubTree('Modal')[0].props.visible).to.be.undefined;
    expect(tree.everySubTree('Modal')[1].props.visible).to.be.undefined;
  });

  it('should show uploading modal', () => {
    const files = [];
    const field = { value: '', dirty: false };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        uploading
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    expect(tree.everySubTree('Modal')[0].props.visible).to.be.true;
  });

  it('should show mail or fax modal', () => {
    const files = [];
    const field = { value: '', dirty: false };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        showMailOrFax
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    expect(tree.everySubTree('Modal')[1].props.visible).to.be.true;
  });

  it('should not submit if files empty', () => {
    const files = [];
    const field = { value: '', dirty: false };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    tree.getMountedInstance().submit();
    expect(onSubmit.called).to.be.false;
    expect(onDirtyFields.called).to.be.true;
  });

  it('should submit if files are valid', () => {
    const files = [{
      file: {
        size: 20,
        name: 'something.jpeg'
      },
      docType: 'L501'
    }];
    const field = { value: '', dirty: false };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    tree.getMountedInstance().submit();
    expect(onSubmit.called).to.be.true;
    expect(onDirtyFields.called).to.be.false;
  });

  it('should not add an invalid file type', () => {
    const files = [];
    const field = { value: '', dirty: false };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    tree.getMountedInstance().add([{
      name: 'something.exe',
      size: 200
    }]);
    expect(onAddFile.called).to.be.false;
    expect(tree.getMountedInstance().state.errorMessage).not.to.be.empty;
  });

  it('should not add an invalid file size', () => {
    const files = [];
    const field = { value: '', dirty: false };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    tree.getMountedInstance().add([{
      name: 'something.exe',
      size: 999999999999
    }]);
    expect(onAddFile.called).to.be.false;
    expect(tree.getMountedInstance().state.errorMessage).not.to.be.empty;
  });

  it('should add a valid file', () => {
    const files = [];
    const field = { value: '', dirty: false };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    tree.getMountedInstance().add([{
      name: 'something.jpg',
      size: 9999
    }]);
    expect(onAddFile.called).to.be.true;
    expect(tree.getMountedInstance().state.errorMessage).to.be.null;
  });

  it('should return an error message when no files present and field is dirty', () => {
    const files = [];
    const field = { value: '', dirty: true };
    const onSubmit = sinon.spy();
    const onAddFile = sinon.spy();
    const onRemoveFile = sinon.spy();
    const onFieldChange = sinon.spy();
    const onCancel = sinon.spy();
    const onDirtyFields = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <AddFilesForm
        files={files}
        field={field}
        onSubmit={onSubmit}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
        onFieldChange={onFieldChange}
        onCancel={onCancel}
        onDirtyFields={onDirtyFields}/>
    );
    let message = tree.getMountedInstance().getErrorMessage();
    expect(message).to.equal('Please select a file first');
    tree.getMountedInstance().state.errorMessage = 'message';
    message = tree.getMountedInstance().getErrorMessage();
    expect(message).to.equal('message');
  });
});
