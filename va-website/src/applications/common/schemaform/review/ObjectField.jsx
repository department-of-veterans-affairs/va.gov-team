import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash/fp';

import {
  getDefaultFormState,
  orderProperties,
  shouldRender,
  getDefaultRegistry,
} from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

/*
 * This is largely copied from the react-jsonschema-form library,
 * but with the way descriptions are used changed
 */

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

  constructor() {
    super();
    this.isRequired = this.isRequired.bind(this);
    this.orderAndFilterProperties = _.flow(
      properties => orderProperties(properties, _.get('ui:order', this.props.uiSchema)),
      _.groupBy((item) => {
        const expandUnderField = _.get([item, 'ui:options', 'expandUnder'], this.props.uiSchema);
        return expandUnderField || item;
      }),
      _.values
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  onPropertyChange(name) {
    return (value) => {
      const formData = Object.keys(this.props.formData || {}).length
        ? this.props.formData
        : getDefaultFormState(this.props.schema, undefined, this.props.registry.definitions);
      this.props.onChange(_.set(name, value, formData));
    };
  }

  getStateFromProps(props) {
    const { schema, formData, registry } = props;
    return getDefaultFormState(schema, formData, registry.definitions) || {};
  }

  isRequired(name) {
    const schema = this.props.schema;
    return Array.isArray(schema.required) &&
      schema.required.indexOf(name) !== -1;
  }

  render() {
    const {
      uiSchema,
      errorSchema,
      idSchema,
      schema,
      formContext
    } = this.props;
    const SchemaField = this.props.registry.fields.SchemaField;

    const properties = Object.keys(schema.properties);
    const isRoot = idSchema.$id === 'root';
    const formData = this.props.formData || {};

    const renderField = (propName) => {
      return (
        <SchemaField key={propName}
          name={propName}
          schema={schema.properties[propName]}
          uiSchema={uiSchema[propName]}
          errorSchema={errorSchema[propName]}
          idSchema={idSchema[propName]}
          onChange={this.onPropertyChange(propName)}
          onBlur={this.props.onBlur}
          required={this.isRequired(propName)}
          formData={formData[propName]}
          registry={this.props.registry}/>
      );
    };

    const showField = (propName) => {
      const hiddenOnSchema = schema.properties[propName]['ui:hidden'];
      const collapsedOnSchema = schema.properties[propName]['ui:collapsed'];
      const hideOnReviewIfFalse = _.get([propName, 'ui:options', 'hideOnReviewIfFalse'], uiSchema) === true;
      const hideOnReview = _.get([propName, 'ui:options', 'hideOnReview'], uiSchema) === true;
      return (!hideOnReviewIfFalse || !!formData[propName]) && !hideOnReview && !hiddenOnSchema && !collapsedOnSchema;
    };

    const renderedProperties = this.orderAndFilterProperties(properties)
      .map((objectFields, index) => {
        const [first, ...rest] = objectFields;
        // expand under functionality is controlled in the reducer by setting ui:collapsed, so
        // we can check if its expanded by seeing if there are any visible "children"
        const visible = rest.filter(prop => !_.get(['properties', prop, 'ui:collapsed'], schema));
        if (objectFields.length > 1 && visible.length > 0) {
          return objectFields.filter(showField).map(renderField);
        }
        return showField(first) ? renderField(first, index) : null;
      });

    if (isRoot) {
      let title = formContext.pageTitle;
      if (!formContext.hideTitle && typeof title === 'function') {
        title = title(formData, formContext);
      }
      return (
        <div>
          {!formContext.hideHeaderRow && <div className="form-review-panel-page-header-row">
            <h5 className="form-review-panel-page-header">{!formContext.hideTitle ? title : null}</h5>
            <button type="button" className="edit-btn primary-outline" onClick={() => formContext.onEdit()}>Edit</button>
          </div>}
          <dl className="review">
            {renderedProperties}
          </dl>
        </div>
      );
    }

    return <div>{renderedProperties}</div>;
  }
}

ObjectField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  errorSchema: PropTypes.object,
  idSchema: PropTypes.object,
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

