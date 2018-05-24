import PropTypes from 'prop-types';
import React from 'react';

import {
  toIdSchema,
  deepEquals
} from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

class ReadOnlyArrayField extends React.Component {
  shouldComponentUpdate = (nextProps) => {
    return !deepEquals(this.props, nextProps);
  }

  getItemSchema = (index) => {
    return this.props.schema.items[index];
  }

  render() {
    const {
      uiSchema,
      errorSchema,
      idSchema,
      formData,
      disabled,
      readonly,
      registry
    } = this.props;
    const definitions = registry.definitions;
    const { SchemaField } = registry.fields;
    const uiOptions = uiSchema['ui:options'] || {};

    const items = formData || [];

    return (
      <div className="schemaform-field-container">
        <div>
          {items.map((item, index) => {
            const itemSchema = this.getItemSchema(index);
            const itemIdPrefix = `${idSchema.$id}_${index}`;
            const itemIdSchema = toIdSchema(itemSchema, itemIdPrefix, definitions);

            return (
              <div key={index} className="va-growable-background">
                <div className="row small-collapse">
                  <div className="small-12 columns">
                    <h5 className="schemaform-array-readonly-header">{uiOptions.itemName}</h5>
                    <SchemaField key={index}
                      schema={itemSchema}
                      uiSchema={uiSchema.items}
                      errorSchema={errorSchema ? errorSchema[index] : undefined}
                      idSchema={itemIdSchema}
                      formData={item}
                      onChange={f => f}
                      onBlur={f => f}
                      registry={this.props.registry}
                      required={false}
                      disabled={disabled}
                      readonly={readonly}/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ReadOnlyArrayField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  errorSchema: PropTypes.object,
  idSchema: PropTypes.object,
  formData: PropTypes.array,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  registry: PropTypes.shape({
    widgets: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
    ])).isRequired,
    fields: PropTypes.objectOf(PropTypes.func).isRequired,
    definitions: PropTypes.object.isRequired,
    formContext: PropTypes.object.isRequired,
  })
};

export default ReadOnlyArrayField;
