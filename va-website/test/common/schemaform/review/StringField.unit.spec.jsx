import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import StringField from '../../../../src/applications/common/schemaform/review/StringField.jsx';

describe('Schemaform <StringField>', () => {
  it('should render', () => {
    const registry = {
      fields: {},
      widgets: {
        text: () => <div/>
      }
    };
    const schema = {
      type: 'string'
    };
    const uiSchema = {};
    const formData = 'test';

    const tree = SkinDeep.shallowRender(
      <StringField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}/>
    );

    expect(tree.props.value).to.equal(formData);
  });
  it('should render options', () => {
    const registry = {
      fields: {},
      widgets: {
        select: () => <div/>
      }
    };
    const schema = {
      type: 'string',
      'enum': ['test']
    };
    const uiSchema = {
      'ui:options': {
        labels: {
          test: 'Name'
        }
      }
    };
    const formData = 'test';

    const tree = SkinDeep.shallowRender(
      <StringField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}/>
    );

    expect(tree.props.options.enumOptions).to.have.nested.property('[0].value', 'test');
    expect(tree.props.options.labels).to.have.property('test', 'Name');
  });
  it('should render review widget', () => {
    const registry = {
      widgets: {
      }
    };
    const schema = {
      type: 'string'
    };
    const uiSchema = {
      'ui:reviewWidget': () => <span/>
    };
    const formData = 'test';

    const tree = SkinDeep.shallowRender(
      <StringField
        registry={registry}
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}/>
    );

    expect(tree.props.value).to.equal(formData);
  });
});
