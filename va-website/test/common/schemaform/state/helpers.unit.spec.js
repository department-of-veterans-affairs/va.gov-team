import { expect } from 'chai';

import {
  updateRequiredFields,
  setHiddenFields,
  removeHiddenData,
  updateSchemaFromUiSchema,
  updateItemsSchema,
  replaceRefSchemas
} from '../../../../src/applications/common/schemaform/state/helpers';

describe('Schemaform formState:', () => {
  describe('updateRequiredFields', () => {
    it('should add field to required array', () => {
      const schema = {
        type: 'object',
        properties: {
          test: {
            type: 'string'
          }
        }
      };
      const uiSchema = {
        test: {
          'ui:required': () => true
        }
      };
      expect(updateRequiredFields(schema, uiSchema).required[0]).to.equal('test');
    });
    it('should remove field from required array', () => {
      const schema = {
        type: 'object',
        required: ['test'],
        properties: {
          test: {
            type: 'string'
          }
        }
      };
      const uiSchema = {
        test: {
          'ui:required': () => false
        }
      };
      expect(updateRequiredFields(schema, uiSchema).required).to.be.empty;
    });
    it('should not change schema if required does not change', () => {
      const schema = {
        type: 'object',
        required: ['test'],
        properties: {
          test: {
            type: 'string'
          }
        }
      };
      const uiSchema = {
        test: {
          'ui:required': () => true
        }
      };
      expect(updateRequiredFields(schema, uiSchema)).to.equal(schema);
    });
    it('should set required in arrays', () => {
      const schema = {
        type: 'array',
        items: [{
          type: 'object',
          properties: {
            test: {
              type: 'string'
            }
          }
        }],
        additionalItems: {
          type: 'object',
          properties: {
            test: {
              type: 'string'
            }
          }
        }
      };
      const uiSchema = {
        items: {
          test: {
            'ui:required': () => true
          }
        }
      };
      const data = [{}];
      expect(updateRequiredFields(schema, uiSchema, data).items[0].required[0]).to.equal('test');
    });
  });
  describe('setHiddenFields', () => {
    it('should set field as hidden', () => {
      const schema = {};
      const uiSchema = {
        'ui:options': {
          hideIf: () => true
        }
      };
      const data = {};

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema['ui:hidden']).to.be.true;
      expect(newSchema).not.to.equal(schema);
    });
    it('should not touch non-hidden field without prop', () => {
      const schema = {};
      const uiSchema = {
        'ui:options': {
          hideIf: () => false
        }
      };
      const data = {};

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema['ui:hidden']).to.be.undefined;
      expect(newSchema).to.equal(schema);
    });
    it('should remove hidden prop from schema', () => {
      const schema = {
        'ui:hidden': true
      };
      const uiSchema = {
        'ui:options': {
          hideIf: () => false
        }
      };
      const data = {};

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema['ui:hidden']).to.be.undefined;
      expect(newSchema).not.to.equal(schema);
    });
    it('should set hidden on object field', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {}
        }
      };
      const uiSchema = {
        field: {
          'ui:options': {
            hideIf: () => true
          }
        }
      };
      const data = { field: '' };

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema.properties.field['ui:hidden']).to.be.true;
      expect(newSchema).not.to.equal(schema);
    });
    it('should set hidden on nested hidden object field', () => {
      const schema = {
        type: 'object',
        properties: {
          unhide: { type: 'boolean' },
          nestedObject: {}
        }
      };
      const uiSchema = {
        'ui:options': { hideIf: () => false },
        nestedObject: {
          'ui:options': { hideIf: () => true }
        }
      };
      const data = { unhide: false };

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema.properties.nestedObject['ui:hidden']).to.be.true;
      expect(newSchema).not.to.equal(schema);
    });
    it('should set collapsed on expandUnder field', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {},
          field2: {}
        }
      };
      const uiSchema = {
        field: {
          'ui:options': {
            expandUnder: 'field2'
          }
        }
      };
      const data = { field: '', field2: false };

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema.properties.field['ui:collapsed']).to.be.true;
      expect(newSchema).not.to.equal(schema);
    });
    it('should set collapsed on expandUnder field with value condition', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {},
          field2: {}
        }
      };
      const uiSchema = {
        field: {
          'ui:options': {
            expandUnder: 'field2',
            expandUnderCondition: 'blah'
          }
        }
      };
      const data = { field: '', field2: 'bleh' };

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema.properties.field['ui:collapsed']).to.be.true;
      expect(newSchema).not.to.equal(schema);
    });
    it('should set collapsed on expandUnder field with function condition', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {},
          field2: {}
        }
      };
      const uiSchema = {
        field: {
          'ui:options': {
            expandUnder: 'field2',
            expandUnderCondition: () => false
          }
        }
      };
      const data = { field: '', field2: 'bleh' };

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema.properties.field['ui:collapsed']).to.be.true;
      expect(newSchema).not.to.equal(schema);
    });
    it('should set collapsed on nested expandUnder field', () => {
      const schema = {
        type: 'object',
        properties: {
          nested: {
            type: 'object',
            properties: {
              field: {},
              field2: {}
            }
          }
        }
      };
      const uiSchema = {
        nested: {
          field: {
            'ui:options': {
              expandUnder: 'field2'
            }
          }
        }
      };
      const data = { nested: { field: '', field2: false } };

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema.properties.nested.properties.field['ui:collapsed']).to.be.true;
      expect(newSchema).not.to.equal(schema);
    });
    it('should set hidden on array field', () => {
      const schema = {
        type: 'array',
        items: [{
          type: 'object',
          properties: {
            field: {}
          }
        }],
        additionalItems: {
          type: 'object',
          properties: {
            field: {}
          }
        }
      };
      const uiSchema = {
        items: {
          field: {
            'ui:options': {
              hideIf: () => true
            }
          }
        }
      };
      const data = [{}];

      const newSchema = setHiddenFields(schema, uiSchema, data);

      expect(newSchema).not.to.equal(schema);
      expect(newSchema.items[0].properties.field['ui:hidden']).to.be.true;
    });
  });
  describe('removeHiddenData', () => {
    it('should remove hidden field', () => {
      const schema = {
        'ui:hidden': true
      };
      const data = 'test';

      const newData = removeHiddenData(schema, data);

      expect(newData).to.be.undefined;
    });
    it('should remove hidden field in object', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {},
          field2: {
            'ui:hidden': true
          }
        }
      };
      const data = { field: 'test', field2: 'test2' };

      const newData = removeHiddenData(schema, data);

      expect(newData).to.eql({ field: 'test' });
    });
    it('should remove collapsed field in object', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {},
          field2: {
            'ui:collapsed': true
          }
        }
      };
      const data = { field: 'test', field2: 'test2' };

      const newData = removeHiddenData(schema, data);

      expect(newData).to.eql({ field: 'test' });
    });
    it('should remove collapsed field in nested object', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {},
          nested: {
            type: 'object',
            properties: {
              field2: {
                'ui:collapsed': true
              }
            }
          }
        }
      };
      const data = { field: 'test', nested: { field2: 'test2' } };

      const newData = removeHiddenData(schema, data);

      expect(newData).to.eql({ field: 'test', nested: {} });
    });
    it('should remove hidden field in array', () => {
      const schema = {
        type: 'array',
        items: [{
          type: 'object',
          properties: {
            field: {},
            field2: {
              'ui:hidden': true
            }
          }
        }],
        additionalItems: {
          type: 'object',
          properties: {
            field: {},
            field2: {}
          }
        }
      };
      const data = [{ field: 'test', field2: 'test2' }];

      const newData = removeHiddenData(schema, data);

      expect(newData[0]).to.eql({ field: 'test' });
    });
  });
  describe('updateSchemaFromUiSchema', () => {
    it('should update schema', () => {
      const schema = {
        type: 'string'
      };
      const uiSchema = {
        'ui:options': {
          updateSchema: () => {
            return { type: 'number' };
          }
        }
      };
      const data = 'test';
      const formData = {};

      const newSchema = updateSchemaFromUiSchema(schema, uiSchema, data, formData);

      expect(newSchema).to.eql({ type: 'number' });
      expect(newSchema).not.to.equal(schema);
    });
    it('should update schema in object', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {
            type: 'string'
          }
        }
      };
      const uiSchema = {
        field: {
          'ui:options': {
            updateSchema: () => {
              return { type: 'number' };
            }
          }
        }
      };
      const data = {};
      const formData = {};

      const newSchema = updateSchemaFromUiSchema(schema, uiSchema, data, formData);

      expect(newSchema.properties.field).to.eql({ type: 'number' });
      expect(newSchema).not.to.equal(schema);
    });
    it('should update schema in array', () => {
      const schema = {
        type: 'array',
        items: [{
          type: 'object',
          properties: {
            field: {
              type: 'string'
            }
          }
        }],
        additionalItems: {
          type: 'object',
          properties: {
            field: {
              type: 'string'
            }
          }
        }
      };
      const uiSchema = {
        items: {
          field: {
            'ui:options': {
              updateSchema: () => {
                return { type: 'number' };
              }
            }
          }
        }
      };
      const data = [{}];
      const formData = {};

      const newSchema = updateSchemaFromUiSchema(schema, uiSchema, data, formData);

      expect(newSchema.items[0].properties.field).to.eql({ type: 'number' });
      expect(newSchema).not.to.equal(schema);
    });
  });
  describe('replaceRefSchemas', () => {
    const definitions = {
      common: {
        type: 'string'
      }
    };
    it('should replace ref', () => {
      const schema = {
        $ref: '#/definitions/common'
      };

      const newSchema = replaceRefSchemas(schema, definitions);

      expect(newSchema).to.eql({ type: 'string' });
      expect(newSchema).not.to.equal(schema);
    });

    it('should replace nested $ref', () => {
      const schema = {
        $ref: '#/definitions/common'
      };
      const nestedDefinitions = {
        common: {
          $ref: '#/definitions/nested'
        },
        nested: {
          type: 'number'
        }
      };

      const newSchema = replaceRefSchemas(schema, nestedDefinitions);

      expect(newSchema).to.eql({ type: 'number' });
      expect(newSchema).not.to.equal(schema);
    });
    it('should replace ref in object', () => {
      const schema = {
        type: 'object',
        properties: {
          field: {
            $ref: '#/definitions/common'
          }
        }
      };

      const newSchema = replaceRefSchemas(schema, definitions);

      expect(newSchema.properties.field).to.eql({ type: 'string' });
      expect(newSchema).not.to.equal(schema);
    });
    it('should update schema in array', () => {
      const schema = {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            field: {
              $ref: '#/definitions/common'
            }
          }
        }
      };

      const newSchema = replaceRefSchemas(schema, definitions);

      expect(newSchema.items.properties.field).to.eql({ type: 'string' });
      expect(newSchema).not.to.equal(schema);
    });
    it('should throw error on missing schema', () => {
      const schema = {
        $ref: '#/definitions/common2'
      };

      const replaceCall = () => replaceRefSchemas(schema, definitions);

      expect(replaceCall).to.throw(Error, /Missing definition for #\/definitions\/common2/);
    });
  });
  describe('updateItemsSchema', () => {
    it('should set array and additional items', () => {
      const schema = {
        type: 'array',
        items: {
          type: 'string'
        }
      };

      const newSchema = updateItemsSchema(schema);

      expect(newSchema.additionalItems).to.equal(schema.items);
      expect(newSchema.items).to.eql([]);
    });
    it('should remove all item schemas when data is falsy', () => {
      const schema = {
        type: 'array',
        items: [{
          type: 'string'
        }]
      };

      const newSchema = updateItemsSchema(schema);

      expect(newSchema.items).to.eql([]);
    });
    it('should remove all item schemas when data is empty', () => {
      const schema = {
        type: 'array',
        items: [{
          type: 'string'
        }]
      };
      const data = [];

      const newSchema = updateItemsSchema(schema, data);

      expect(newSchema.items).to.eql([]);
    });
    it('should add item to array when form data has more items', () => {
      const schema = {
        type: 'array',
        items: [{
          type: 'string'
        }],
        additionalItems: {
          type: 'string'
        }
      };
      const data = ['test', 'test2', 'test3'];

      const newSchema = updateItemsSchema(schema, data);

      expect(newSchema.items.length).to.equal(data.length);
      expect(newSchema.items[1]).to.equal(schema.additionalItems);
      expect(newSchema.items[2]).to.equal(schema.additionalItems);
    });
    it('should remove item from schema items if fewer items in data array', () => {
      const schema = {
        type: 'array',
        items: [{
          type: 'string'
        }, {
          type: 'string'
        }],
        additionalItems: {
          type: 'string'
        }
      };
      const data = ['test'];

      const newSchema = updateItemsSchema(schema, data);

      expect(newSchema.items.length).to.equal(data.length);
    });
  });
});
