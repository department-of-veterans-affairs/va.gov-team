import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import Scroll from 'react-scroll';


import {
  toIdSchema,
  getDefaultFormState,
  deepEquals
} from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

const Element = Scroll.Element;


class BasicArrayField extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return !deepEquals(this.props, nextProps) || nextState !== this.state;
  }

  onItemChange = (indexToChange, value) => {
    const newItems = _.set(indexToChange, value, this.props.formData || []);
    this.props.onChange(newItems);
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
      registry,
      formContext,
      onBlur,
      schema
    } = this.props;
    const definitions = registry.definitions;
    const { TitleField, SchemaField } = registry.fields;

    const title = uiSchema['ui:title'] || schema.title;
    const hideTitle = !!_.get(['ui:options', 'hideTitle'], uiSchema);
    const description = uiSchema['ui:description'];
    const textDescription = typeof description === 'string' ? description : null;
    const DescriptionField = typeof description === 'function'
      ? uiSchema['ui:description']
      : null;
    const hasTitleOrDescription = (!!title && !hideTitle) || !!description;

    // if we have form data, use that, otherwise use an array with a single default object
    const items = (formData && formData.length)
      ? formData
      : [getDefaultFormState(schema, undefined, registry.definitions)];

    const containerClassNames = classNames({
      'schemaform-field-container': true,
      'schemaform-block': hasTitleOrDescription
    });


    return (
      <div className={containerClassNames}>
        {hasTitleOrDescription && <div className="schemaform-block-header">
          {title && !hideTitle
            ? <TitleField
              id={`${idSchema.$id}__title`}
              title={title}
              formContext={formContext}/> : null}
          {textDescription && <p>{textDescription}</p>}
          {DescriptionField && <DescriptionField options={uiSchema['ui:options']}/>}
          {!textDescription && !DescriptionField && description}
        </div>}
        <div>
          {items.map((item, index) => {
            const itemSchema = this.getItemSchema(index);
            const itemIdPrefix = `${idSchema.$id}_${index}`;
            const itemIdSchema = toIdSchema(itemSchema, itemIdPrefix, definitions);

            return (
              <div key={index}>
                <Element name={`table_${itemIdPrefix}`}/>
                <div className="row small-collapse">
                  <div className="small-12 columns">
                    <SchemaField key={index}
                      schema={itemSchema}
                      uiSchema={uiSchema.items}
                      errorSchema={errorSchema ? errorSchema[index] : undefined}
                      idSchema={itemIdSchema}
                      formData={item}
                      onChange={(value) => this.onItemChange(index, value)}
                      onBlur={onBlur}
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

BasicArrayField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  errorSchema: PropTypes.object,
  requiredSchema: PropTypes.object,
  idSchema: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
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

export default BasicArrayField;
