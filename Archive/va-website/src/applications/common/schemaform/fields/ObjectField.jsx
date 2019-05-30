import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import _ from 'lodash/fp';
import { pureWithDeepEquals } from '../helpers';

import {
  deepEquals,
  getDefaultFormState,
  orderProperties,
  getDefaultRegistry
} from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

import ExpandingGroup from '@department-of-veterans-affairs/formation/ExpandingGroup';

/*
 * This is largely copied from the react-jsonschema-form library,
 * but with the way descriptions are used changed
 */

/*
 * Add a first field class to the first actual field on the page
 * and on any "blocks", which are titled sections of the page
 */
function setFirstFields(id) {
  if (id === 'root') {
    const containers = [document].concat(
      Array.from(document.querySelectorAll('.schemaform-block'))
    );
    containers.forEach(block => {
      const fields = Array.from(block.querySelectorAll('.form-checkbox,.schemaform-field-template'));
      if (fields.length) {
        fields[0].classList.add('schemaform-first-field');
      }
    });
  }
}

class ObjectField extends React.Component {
  static defaultProps = {
    uiSchema: {},
    errorSchema: {},
    idSchema: {},
    registry: getDefaultRegistry(),
    required: false,
    disabled: false,
    readonly: false,
  }

  constructor(props) {
    super(props);
    this.state = this.getStateFromProps(props);
    this.onPropertyChange = this.onPropertyChange.bind(this);
    this.onPropertyBlur = this.onPropertyBlur.bind(this);
    this.isRequired = this.isRequired.bind(this);
    this.SchemaField = pureWithDeepEquals(this.props.registry.fields.SchemaField);
    this.orderedProperties = this.orderAndFilterProperties(props.schema, props.uiSchema);
  }

  componentDidMount() {
    setFirstFields(this.props.idSchema.$id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.schema !== nextProps.schema || this.props.uiSchema !== nextProps.uiSchema) {
      this.orderedProperties = this.orderAndFilterProperties(nextProps.schema, nextProps.uiSchema);
    }
  }

  /*
   * This is a performance optimization to avoid extra renders. Because we mirror
   * formData in local state, each form data change will trigger two renders: one when
   * local state is updated and another when that change is reflected in formData. This check
   * skips the second render if no other props or state has changed
   */
  shouldComponentUpdate(nextProps) {
    return !deepEquals(this.props, nextProps);
  }

  componentDidUpdate() {
    setFirstFields(this.props.idSchema.$id);
  }

  onPropertyChange(name) {
    return (value) => {
      const formData = Object.keys(this.props.formData || {}).length
        ? this.props.formData
        : getDefaultFormState(this.props.schema, undefined, this.props.registry.definitions);
      this.props.onChange(_.set(name, value, formData));
    };
  }

  onPropertyBlur(name) {
    return (path = []) => {
      this.props.onBlur([name].concat(path));
    };
  }

  getStateFromProps(props) {
    const { schema, formData, registry } = props;
    return getDefaultFormState(schema, formData, registry.definitions) || {};
  }

  // This runs a series of steps that order properties and then group them into
  // expandable groups. If there are no expandable groups, then the end result of this
  // will be an array of single item arrays
  orderAndFilterProperties(schema, uiSchema) {
    const properties = Object.keys(schema.properties);
    const orderedProperties = orderProperties(properties, _.get('ui:order', uiSchema));
    const filteredProperties = orderedProperties.filter(prop => !schema.properties[prop]['ui:hidden']);
    const groupedProperties = _.groupBy((item) => {
      const expandUnderField = _.get([item, 'ui:options', 'expandUnder'], uiSchema);
      return expandUnderField || item;
    }, filteredProperties);

    return _.values(groupedProperties);
  }

  isRequired(name) {
    const { schema } = this.props;
    const schemaRequired = Array.isArray(schema.required) &&
      schema.required.indexOf(name) !== -1;

    if (schemaRequired) {
      return schemaRequired;
    }

    return false;
  }

  render() {
    const {
      uiSchema,
      errorSchema,
      idSchema,
      schema,
      required,
      disabled,
      readonly,
      onBlur
    } = this.props;
    const { definitions, fields, formContext } = this.props.registry;
    const { TitleField } = fields;
    const SchemaField = this.SchemaField;
    const formData = Object.keys(this.props.formData || {}).length
      ? this.props.formData
      : getDefaultFormState(schema, {}, definitions);
    const uiOptions = uiSchema['ui:options'] || {};

    // description and title setup
    const showFieldLabel = uiOptions.showFieldLabel;
    const fieldsetClassNames = uiOptions.classNames;
    const title = uiSchema['ui:title'] || schema.title;
    const CustomTitleField = typeof title === 'function'
      ? title
      : null;

    const description = uiSchema['ui:description'];
    const textDescription = typeof description === 'string' ? description : null;
    const DescriptionField = typeof description === 'function'
      ? uiSchema['ui:description']
      : null;

    const hasTitleOrDescription = !!title || !!description;
    const isRoot = idSchema.$id === 'root';

    const containerClassNames = classNames({
      'input-section': isRoot,
      'schemaform-field-container': true,
      'schemaform-block': title && !isRoot
    });

    const renderProp = (propName) => {
      return (
        <div key={propName}>
          <SchemaField
            name={propName}
            required={this.isRequired(propName)}
            schema={schema.properties[propName]}
            uiSchema={uiSchema[propName]}
            errorSchema={errorSchema[propName]}
            idSchema={idSchema[propName]}
            formData={formData[propName]}
            onChange={this.onPropertyChange(propName)}
            onBlur={onBlur}
            registry={this.props.registry}
            disabled={disabled}
            readonly={readonly}/>
        </div>
      );
    };

    const fieldContent = (
      <div className={containerClassNames}>
        {hasTitleOrDescription && <div className="schemaform-block-header">
          {CustomTitleField && !showFieldLabel
            ? <CustomTitleField
              id={`${idSchema.$id}__title`}
              formData={formData}
              formContext={formContext}
              required={required}/> : null}
          {!CustomTitleField && title && !showFieldLabel
            ? <TitleField
              id={`${idSchema.$id}__title`}
              title={title}
              required={required}
              formContext={formContext}/> : null}
          {textDescription && <p>{textDescription}</p>}
          {DescriptionField && <DescriptionField formData={formData} formContext={formContext} options={uiSchema['ui:options']}/>}
          {!textDescription && !DescriptionField && description}
        </div>}
        {this.orderedProperties.map((objectFields, index) => {
          if (objectFields.length > 1) {
            const [first, ...rest] = objectFields;
            const visible = rest.filter(prop => !_.get(['properties', prop, 'ui:collapsed'], schema));
            return (
              <ExpandingGroup open={visible.length > 0} key={index}>
                {renderProp(first)}
                <div className={_.get([first, 'ui:options', 'expandUnderClassNames'], uiSchema)}>
                  {visible.map(renderProp)}
                </div>
              </ExpandingGroup>
            );
          }

          // if fields have expandUnder, but are the only item, that means the
          // field they’re expanding under is hidden, and they should be hidden, too
          return !_.get([objectFields[0], 'ui:options', 'expandUnder'], uiSchema)
            ? renderProp(objectFields[0], index)
            : undefined;
        })
        }
      </div>
    );

    if (title) {
      return (
        <fieldset className={fieldsetClassNames}>
          {fieldContent}
        </fieldset>
      );
    }

    return (
      <div className={fieldsetClassNames}>
        {fieldContent}
      </div>
    );
  }
}

ObjectField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  errorSchema: PropTypes.object,
  idSchema: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  formData: PropTypes.object,
  required: PropTypes.bool,
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

export default ObjectField;
