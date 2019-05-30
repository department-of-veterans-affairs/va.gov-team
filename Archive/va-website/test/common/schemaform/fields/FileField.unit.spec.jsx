import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import { DefinitionTester, getFormDOM } from '../../../../src/platform/testing/unit/schemaform-utils.jsx';

import FileField from '../../../../src/applications/common/schemaform/fields/FileField';
import fileUploadUI, { fileSchema } from '../../../../src/applications/common/schemaform/definitions/file';

const formContext = {
  setTouched: sinon.spy()
};
const requiredSchema = {};

describe('Schemaform <FileField>', () => {
  it('should render', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      additionalItems: {},
      items: [{
        properties: {}
      }]
    };
    const uiSchema = fileUploadUI('Files');
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        formContext={formContext}
        onChange={f => f}
        requiredSchema={requiredSchema}/>
    );

    expect(tree.find('label').first().text()).to.contain('Upload');
  });
  it('should render files', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      additionalItems: {},
      items: [{
        properties: {}
      }]
    };
    const uiSchema = fileUploadUI('Files');
    const formData = [
      {
        confirmationCode: 'asdfds',
        name: 'Test file name'
      }
    ];
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        formData={formData}
        formContext={formContext}
        onChange={f => f}
        requiredSchema={requiredSchema}/>
    );

    expect(tree.find('li').text()).to.contain('Test file name');
  });

  it('should call onChange once when deleting files', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      additionalItems: {},
      items: [{
        properties: {}
      }]
    };
    const uiSchema = fileUploadUI('Files');
    const formData = [
      {
        confirmationCode: 'asdfds',
        name: 'Test file name'
      }
    ];
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const onChange = sinon.spy();

    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        formData={formData}
        formContext={formContext}
        onChange={onChange}
        requiredSchema={requiredSchema}/>
    );

    tree.instance().removeFile(0);

    expect(onChange.calledOnce).to.be.true;
    expect(onChange.firstCall.args.length).to.equal(0);
  });

  it('should render uploading', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      additionalItems: {},
      items: [{
        properties: {}
      }]
    };
    const uiSchema = fileUploadUI('Files');
    const formData = [
      {
        uploading: true
      }
    ];
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        formData={formData}
        formContext={formContext}
        onChange={f => f}
        requiredSchema={requiredSchema}/>
    );

    expect(tree.find('ProgressBar').exists()).to.be.true;
    expect(tree.find('button').text()).to.equal('Cancel');
  });

  it('should update progress', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      additionalItems: {},
      items: [{
        properties: {}
      }]
    };
    const uiSchema = fileUploadUI('Files');
    const formData = [
      {
        uploading: true
      }
    ];
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        formData={formData}
        formContext={formContext}
        onChange={f => f}
        requiredSchema={requiredSchema}/>
    );

    expect(tree.find('ProgressBar').props().percent).to.equal(0);

    tree.instance().updateProgress(20);
    tree.update();

    expect(tree.find('ProgressBar').props().percent).to.equal(20);
  });
  it('should render error', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      additionalItems: {},
      items: [{
        properties: {}
      }]
    };
    const uiSchema = fileUploadUI('Files');
    const formData = [
      {
        errorMessage: 'asdfas'
      }
    ];
    const errorSchema = {
      0: {
        __errors: [
          'Bad error'
        ]
      }
    };
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        errorSchema={errorSchema}
        formData={formData}
        formContext={formContext}
        onChange={f => f}
        requiredSchema={requiredSchema}/>
    );

    expect(tree.find('.va-growable-background').text()).to.contain('Bad error');
  });

  it('should not render upload button if over max items', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      maxItems: 1,
      additionalItems: {},
      items: [{
        properties: {}
      }]
    };
    const uiSchema = fileUploadUI('Files');
    const formData = [
      {
        confirmationCode: 'asdfds',
        name: 'Test file name'
      }
    ];
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        formData={formData}
        formContext={formContext}
        onChange={f => f}
        requiredSchema={requiredSchema}/>
    );

    expect(tree.find('label').exists()).to.be.false;
  });

  it('should delete file', () => {
    const uiSchema = fileUploadUI('Files');
    const schema = {
      type: 'object',
      properties: {
        fileField: fileSchema
      }
    };
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{
          fileField: [
            {
              confirmationCode: 'asdfasfd'
            }
          ]
        }}
        uiSchema={{
          fileField: uiSchema
        }}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('li')).not.to.be.empty;

    formDOM.click('.va-growable-background button');

    expect(formDOM.querySelectorAll('li')).to.be.empty;
  });

  it('should upload file', () => {
    const uiSchema = fileUploadUI('Files');
    const schema = {
      type: 'object',
      properties: {
        fileField: fileSchema
      }
    };
    const uploadFile = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{
          fileField: []
        }}
        uploadFile={uploadFile}
        uiSchema={{
          fileField: uiSchema
        }}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.files('input[type=file]', [{}]);

    expect(uploadFile.firstCall.args[0]).to.eql({});
    expect(uploadFile.firstCall.args[1]).to.eql(uiSchema['ui:options']);
    expect(uploadFile.firstCall.args[2]).to.be.a('function');
    expect(uploadFile.firstCall.args[3]).to.be.a('function');
    expect(uploadFile.firstCall.args[4]).to.be.a('function');
  });
  it('should render file with attachment type', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      additionalItems: {
        type: 'object',
        properties: {
          attachmentId: {
            type: 'string'
          }
        }
      },
      items: [{
        type: 'object',
        properties: {
          attachmentId: {
            type: 'string'
          }
        }
      }]
    };
    const uiSchema = fileUploadUI('Files');
    const formData = [
      {
        confirmationCode: 'asdfds',
        name: 'Test file name'
      }
    ];
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        formData={formData}
        formContext={formContext}
        onChange={f => f}
        requiredSchema={requiredSchema}/>
    );

    expect(tree.find('li').text()).to.contain('Test file name');
    expect(tree.find('SchemaField').prop('schema')).to.equal(schema.items[0].properties.attachmentId);
  });
  it('should render file with attachment name', () => {
    const idSchema = {
      $id: 'field'
    };
    const schema = {
      additionalItems: {
        type: 'object',
        properties: {
          attachmentId: {
            type: 'string'
          }
        }
      },
      items: [{
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }]
    };
    const uiSchema = fileUploadUI('Files', {
      attachmentName: {
        'ui:title': 'Document name'
      }
    });
    const formData = [
      {
        confirmationCode: 'asdfds',
        name: 'Test file name'
      }
    ];
    const registry = {
      fields: {
        SchemaField: f => f
      }
    };
    const tree = shallow(
      <FileField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        idSchema={idSchema}
        formData={formData}
        formContext={formContext}
        onChange={f => f}
        requiredSchema={requiredSchema}/>
    );

    expect(tree.find('li').text()).to.contain('Test file name');
    expect(tree.find('SchemaField').prop('schema')).to.equal(schema.items[0].properties.name);
  });
});
