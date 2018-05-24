import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import PhotoField from '../../components/PhotoField';
import CropperController from '../../components/CropperController';

describe('<PhotoField>', () => {
  let oldFileReader;
  let oldImage;
  beforeEach(() => {
    window.addEventListener = sinon.spy();
    window.removeEventListener = sinon.spy();
    window.URL = {
      revokeObjectURL: sinon.spy(),
      createObjectURL: sinon.spy()
    };
    oldFileReader = global.FileReader;
    oldImage = global.Image;
  });
  afterEach(() => {
    global.Image = oldImage;
    global.FileReader = oldFileReader;
    delete window.URL;
  });
  it('should render', () => {
    const formContext = {};
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        formContext={formContext}/>
    );

    expect(tree.find('.cropper-container-outer').exists()).to.be.false;
    expect(tree.find('Dropzone').exists()).to.be.true;
    expect(tree.text()).to.contain('Step 1');
    expect(tree.find('ErrorableFileInput').length).to.equal(2);
  });
  it('should render cropper', () => {
    const formContext = {};
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        formContext={formContext}/>
    );

    tree.setState({ currentLayout: 'crop_photo' });

    expect(tree.find('Dropzone').exists()).to.be.false;
    expect(tree.find(CropperController).exists()).to.be.true;
    expect(tree.text()).to.contain('Step 2');
    expect(tree.find('ErrorableFileInput').length).to.equal(1);
  });
  it('should render uploading', () => {
    const formContext = {};
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        formData={{
          uploading: true
        }}
        formContext={formContext}/>
    );

    tree.setState({ progress: 10, currentLayout: 'watch_upload' });
    expect(tree.find('.cropper-container-outer').exists()).to.be.false;
    expect(tree.find('Dropzone').exists()).to.be.false;
    expect(tree.text()).not.to.contain('Step');
    expect(tree.find('ErrorableFileInput').exists()).to.be.false;
    expect(tree.find('ProgressBar').props().percent).to.equal(10);
  });
  it('should render preview while processing', () => {
    const formContext = {};
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        formData={{
          confirmationCode: 'asdfasdf'
        }}
        idSchema={{ $id: 'photo' }}
        formContext={formContext}/>
    );

    tree.instance().onPreviewError();
    tree.update();
    tree.setState({ currentLayout: 'preview_photo' });

    const text = tree.text();
    expect(tree.find('PhotoPreview').exists()).to.be.true;
    expect(text).not.to.contain('Edit your photo');
    expect(text).to.contain('Go back and change');
    expect(text).not.to.contain('Success!');
  });
  describe('onChange', () => {
    function FileReader() { }
    FileReader.prototype.readAsDataURL = function readAsDataURL(file) {
      this.result = file.data;
      this.onload();
    };

    it('should set error for too small image', (done) => {
      const formContext = {};
      const uiSchema = {
        'ui:title': 'Title',
        'ui:options': {
          fileTypes: ['jpg']
        }
      };
      const onChange = sinon.spy();

      const tree = shallow(
        <PhotoField
          uiSchema={uiSchema}
          idSchema={{ $id: 'photo' }}
          onChange={onChange}
          formContext={formContext}/>
      );

      global.Image = class Image {
        constructor() {
          this.width = 5;
          this.height = 5;
        }
        set onload(callback) {
          callback();
        }
      };
      global.FileReader = FileReader;

      tree.find('ErrorableFileInput').first().props().onChange([{
        name: 'examplephoto.jpg',
      }]);

      setTimeout(() => {
        expect(onChange.firstCall.args[0].errorMessage).to.contain('smaller than the');
        done();
      });
    });
    it('should set error for wrong type', (done) => {
      const formContext = {};
      const uiSchema = {
        'ui:title': 'Title',
        'ui:options': {
          fileTypes: ['jpg']
        }
      };
      const onChange = sinon.spy();

      const tree = shallow(
        <PhotoField
          uiSchema={uiSchema}
          idSchema={{ $id: 'photo' }}
          onChange={onChange}
          formContext={formContext}/>
      );

      global.Image = class Image {
        constructor() {
          this.width = 5;
          this.height = 5;
        }
        set onload(callback) {
          callback();
        }
      };
      global.FileReader = FileReader;

      tree.find('ErrorableFileInput').first().props().onChange([{
        name: 'examplephoto.png',
      }]);

      setTimeout(() => {
        expect(onChange.firstCall.args[0].errorMessage).to.contain('make sure the file you’re uploading is a jpeg');
        done();
      });
    });
    it('should set currentLayout state to crop_photo with valid file', (done) => {
      const formContext = {
        uploadFile: sinon.spy()
      };
      const uiSchema = {
        'ui:title': 'Title',
        'ui:options': {
          fileTypes: ['jpg']
        }
      };
      const onChange = sinon.spy();

      const tree = shallow(
        <PhotoField
          uiSchema={uiSchema}
          idSchema={{ $id: 'photo' }}
          onChange={onChange}
          formContext={formContext}/>
      );

      global.Image = class Image {
        constructor() {
          this.width = 400;
          this.height = 400;
        }
        set onload(callback) {
          callback();
        }
      };
      global.FileReader = FileReader;

      tree.find('ErrorableFileInput').first().props().onChange([{
        name: 'examplephoto.jpg',
      }]);

      setTimeout(() => {
        expect(tree.state().currentLayout).to.equal('crop_photo');
        done();
      });
    });
  });
  describe('screen reader path', () => {
    function FileReader() { }
    FileReader.prototype.readAsDataURL = function readAsDataURL(file) {
      this.result = file.data;
      this.onload();
    };

    it('should set error for square image', (done) => {
      const formContext = {};
      const uiSchema = {
        'ui:title': 'Title',
        'ui:options': {
          fileTypes: ['jpg']
        }
      };
      const onChange = sinon.spy();

      const tree = shallow(
        <PhotoField
          uiSchema={uiSchema}
          idSchema={{ $id: 'photo' }}
          onChange={onChange}
          formContext={formContext}/>
      );

      global.Image = class Image {
        constructor() {
          this.width = 5;
          this.height = 6;
        }
        set onload(callback) {
          callback();
        }
      };
      global.FileReader = FileReader;

      tree.find('ErrorableFileInput').last().props().onChange([{
        name: 'examplephoto.jpg',
      }]);

      setTimeout(() => {
        expect(onChange.firstCall.args[0].errorMessage).to.contain('square');
        done();
      });
    });
    it('should set error for too small image', (done) => {
      const formContext = {};
      const uiSchema = {
        'ui:title': 'Title',
        'ui:options': {
          fileTypes: ['jpg']
        }
      };
      const onChange = sinon.spy();

      const tree = shallow(
        <PhotoField
          uiSchema={uiSchema}
          idSchema={{ $id: 'photo' }}
          onChange={onChange}
          formContext={formContext}/>
      );

      global.Image = class Image {
        constructor() {
          this.width = 5;
          this.height = 5;
        }
        set onload(callback) {
          callback();
        }
      };
      global.FileReader = FileReader;

      tree.find('ErrorableFileInput').last().props().onChange([{
        name: 'examplephoto.jpg',
      }]);

      setTimeout(() => {
        expect(onChange.firstCall.args[0].errorMessage).to.contain('smaller than the');
        done();
      });
    });
    it('should set error for wrong type', (done) => {
      const formContext = {};
      const uiSchema = {
        'ui:title': 'Title',
        'ui:options': {
          fileTypes: ['jpg']
        }
      };
      const onChange = sinon.spy();

      const tree = shallow(
        <PhotoField
          uiSchema={uiSchema}
          idSchema={{ $id: 'photo' }}
          onChange={onChange}
          formContext={formContext}/>
      );

      global.Image = class Image {
        constructor() {
          this.width = 5;
          this.height = 5;
        }
        set onload(callback) {
          callback();
        }
      };
      global.FileReader = FileReader;

      tree.find('ErrorableFileInput').last().props().onChange([{
        name: 'examplephoto.png',
      }]);

      setTimeout(() => {
        expect(onChange.firstCall.args[0].errorMessage).to.contain('make sure the file you’re uploading is a jpeg');
        done();
      });
    });
    it('should call uploadFile with valid image', (done) => {
      const formContext = {
        uploadFile: sinon.spy()
      };
      const uiSchema = {
        'ui:title': 'Title',
        'ui:options': {
          fileTypes: ['jpg']
        }
      };
      const onChange = sinon.spy();

      const tree = shallow(
        <PhotoField
          uiSchema={uiSchema}
          idSchema={{ $id: 'photo' }}
          onChange={onChange}
          formContext={formContext}/>
      );

      global.Image = class Image {
        constructor() {
          this.width = 400;
          this.height = 400;
        }
        set onload(callback) {
          callback();
        }
      };
      global.FileReader = FileReader;

      tree.find('ErrorableFileInput').last().props().onChange([{
        name: 'examplephoto.jpg',
      }]);

      setTimeout(() => {
        expect(formContext.uploadFile.called).to.be.true;
        done();
      });
    });
  });
  it('should render error', () => {
    const formContext = {};
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        formData={{
          errorMessage: 'Some error'
        }}
        idSchema={{ $id: 'photo' }}
        formContext={formContext}/>
    );

    tree.setState({ currentLayout: 'screen_reader_error' });

    expect(tree.find('CropperController').exists()).to.be.false;
    expect(tree.find('Dropzone').exists()).to.be.false;
    expect(tree.find('.usa-input-error-message').text()).to.contain('Some error');
    expect(tree.find('ErrorableFileInput').props().buttonText).to.equal('Upload Photo Again');
  });
  it('should render preview in review mode', () => {
    const formContext = {
      reviewMode: true
    };
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        formData={{
          errorMessage: 'Some error'
        }}
        idSchema={{ $id: 'photo' }}
        formContext={formContext}/>
    );

    expect(tree.find('CropperController').exists()).to.be.false;
    expect(tree.find('Dropzone').exists()).to.be.false;
    expect(tree.find('ErrorableFileInput').exists()).to.be.false;
    expect(tree.find('PhotoPreview').exists()).to.be.true;
  });
  it('should upload photo', () => {
    const uploadStub = (file, options, onProgress, onChange) => {
      expect(file.name).to.equal('profile_photo.png');
      expect(file.lastModifiedDate).to.be.a('Date');
      onChange({
        confirmationCode: 'testing'
      });
    };
    const onChange = sinon.spy();
    const formContext = {
      uploadFile: uploadStub
    };
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        onChange={onChange}
        uiSchema={uiSchema}
        formData={{
          errorMessage: 'Some error'
        }}
        idSchema={{ $id: 'photo' }}
        formContext={formContext}/>
    );

    const file = {};
    tree.instance().uploadPhoto(file);

    expect(onChange.firstCall.args[0]).to.deep.equal({
      confirmationCode: 'testing',
      file
    });
  });
  it('should revoke url on unmount', () => {
    const formContext = {};
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        formData={{
          errorMessage: 'Some error'
        }}
        idSchema={{ $id: 'photo' }}
        formContext={formContext}/>
    );
    tree.setState({ previewSrc: 'testing' });

    tree.instance().componentWillUnmount();

    expect(window.URL.revokeObjectURL.called).to.be.true;
  });
  it('should recreate object url on blob change', () => {
    const formContext = {};
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        formData={{
          errorMessage: 'Some error'
        }}
        idSchema={{ $id: 'photo' }}
        formContext={formContext}/>
    );

    tree.setState({ previewSrc: 'testing', formData: {} });
    tree.instance().componentWillReceiveProps({
      formData: {
        file: new Blob()
      }
    });

    expect(window.URL.revokeObjectURL.called).to.be.true;
    expect(window.URL.createObjectURL.called).to.be.true;
  });
  it('should reset file on preview view', () => {
    const formContext = {};
    const uiSchema = {
      'ui:title': 'Title',
      'ui:options': {
        fileTypes: ['jpg']
      }
    };
    const onChange = sinon.spy();

    const tree = shallow(
      <PhotoField
        uiSchema={uiSchema}
        onChange={onChange}
        formData={{
          confirmationCode: 'asdfasdf'
        }}
        idSchema={{ $id: 'photo' }}
        formContext={formContext}/>
    );

    tree.setState({ currentLayout: 'preview_photo' });
    tree.find('.photo-preview-link').first().props().onClick();

    expect(onChange.called).to.be.true;
    expect(tree.state().currentLayout).to.equal('choose_photo');
  });
});
