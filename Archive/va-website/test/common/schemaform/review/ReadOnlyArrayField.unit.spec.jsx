import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import ReadOnlyArrayField from '../../../../src/applications/common/schemaform/review/ReadOnlyArrayField';

describe('Schemaform review: ReadOnlyArrayField', () => {
  it('should render', () => {
    const schema = {
      items: [{
        type: 'object',
        properties: {
          test: {
            type: 'string'
          }
        }
      }]
    };
    const uiSchema = {
      'ui:options': {
        itemName: 'Item'
      }
    };
    const registry = {
      definitions: {},
      fields: {
        SchemaField: function SchemaField() { return null; }
      }
    };
    const formData = [{}];

    const tree = SkinDeep.shallowRender(
      <ReadOnlyArrayField
        schema={schema}
        formData={formData}
        uiSchema={uiSchema}
        idSchema={{}}
        registry={registry}
        requiredSchema={{}}/>
    );

    expect(tree.everySubTree('SchemaField').length).to.equal(1);
    expect(tree.subTree('.schemaform-array-readonly-header').text()).to.contain('Item');
  });
});
