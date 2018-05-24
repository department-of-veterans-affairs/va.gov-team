import React from 'react';
import PropTypes from 'prop-types';

import {
  getDefaultFormState,
  getDefaultRegistry
} from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

import { errorSchemaIsValid } from '../../../common/schemaform/validation';

import set from '../../../../platform/utilities/data/set';
import get from '../../../../platform/utilities/data/get';
import omit from '../../../../platform/utilities/data/omit';


/**
 * Displays a review card if the information inside is valid.
 *
 * For use on a schema of type 'object' or 'array'.
 * Intended to wrap objects or arrays to avoid duplicate functionality here.
 */
export default class ReviewCardField extends React.Component {
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

    // Throw an error if there’s no viewComponent (should be React component)
    if (typeof get('ui:options.viewComponent', this.props.uiSchema) !== 'function') {
      throw new Error(`No viewComponent found in uiSchema for ReviewCardField ${this.props.idSchema.$id}.`);
    }

    const acceptedTypes = ['object', 'array'];
    if (!acceptedTypes.includes(this.props.schema.type)) {
      throw new Error(`Unknown schema type in ReviewCardField. Expected one of [${acceptedTypes.join(', ')}], but got ${this.props.schema.type}.`);
    }

    this.state = {
      // Set initial state based on whether all the data is valid
      editing: !errorSchemaIsValid(props.errorSchema)
    };
  }

  onPropertyChange(name) {
    return (value) => {
      const formData = Object.keys(this.props.formData || {}).length
        ? this.props.formData
        : getDefaultFormState(this.props.schema, undefined, this.props.registry.definitions);
      this.props.onChange(set(name, value, formData));
    };
  }


  getTitle = () => {
    const { uiSchema, formData } = this.props;
    return typeof uiSchema['ui:title'] === 'function'
      ? uiSchema['ui:title'](formData)
      : uiSchema['ui:title'];
  }


  /**
   * Much of this is taken from ArrayField & ObjectField.
   *
   * Renders a SchemaField for each property it wraps.
   */
  getEditView = () => {
    const {
      disabled,
      errorSchema,
      formData,
      idSchema,
      onBlur,
      onChange,
      readonly,
      registry,
      required,
      schema
    } = this.props;
    const { SchemaField } = registry.fields;
    // We've already used the ui:field and ui:title
    const uiSchema = omit(['ui:field', 'ui:title'], this.props.uiSchema);

    const title = this.getTitle();

    return (
      <div className="review-card">
        <div className="review-card--body input-section va-growable-background">
          <h4 className="review-card--title">{title}</h4>
          <SchemaField
            name={idSchema.$id}
            required={required}
            schema={schema}
            uiSchema={uiSchema}
            errorSchema={errorSchema}
            idSchema={idSchema}
            formData={formData}
            onChange={onChange}
            onBlur={onBlur}
            registry={registry}
            disabled={disabled}
            readonly={readonly}/>
          <button className="usa-button-primary update-button" onClick={this.update}>Done</button>
        </div>
      </div>
    );
  }


  getReviewView = () => {
    const ViewComponent = this.props.uiSchema['ui:options'].viewComponent;
    const title = this.getTitle();

    return (
      <div className="review-card">
        <div className="review-card--header">
          <h4 className="review-card--title">{title}</h4>
          <button className="usa-button-secondary edit-button" onClick={this.startEditing}>Edit</button>
        </div>
        <div className="review-card--body">
          <ViewComponent formData={this.props.formData}/>
        </div>
      </div>
    );
  }


  startEditing = () => {
    this.setState({ editing: true });
  }


  isRequired = (name) => {
    const { schema } = this.props;
    const schemaRequired = Array.isArray(schema.required) &&
      schema.required.indexOf(name) !== -1;

    if (schemaRequired) {
      return schemaRequired;
    }

    return false;
  }


  update = (event) => {
    // Don't act like the continue button
    if (event) {
      // Apparently the unit tests don't send this event to the onClick handler
      event.preventDefault();
    }

    if (!errorSchemaIsValid(this.props.errorSchema)) {
      // Show validation errors
      this.props.formContext.onError();
    } else {
      this.setState({ editing: false });
    }
  }


  render() {
    if (this.state.editing) {
      return this.getEditView();
    }

    return this.getReviewView();
  }
}


ReviewCardField.propTypes = {
  uiSchema: PropTypes.shape({
    'ui:options': PropTypes.shape({
      viewComponent: PropTypes.oneOfType(
        [PropTypes.element, PropTypes.func]
      ).isRequired
    }).isRequired
  }).isRequired,
  schema: PropTypes.object.isRequired,
  errorSchema: PropTypes.object.isRequired,
  idSchema: PropTypes.object.isRequired,
  registry: PropTypes.shape({
    fields: PropTypes.shape({
      SchemaField: PropTypes.func.isRequired
    }),
    definitions: PropTypes.object.isRequired
  }).isRequired,
  formData: PropTypes.object.isRequired,
  onBlur: PropTypes.func.isRequired,
  formContext: PropTypes.shape({
    onError: PropTypes.func.isRequired
  }).isRequired
};

