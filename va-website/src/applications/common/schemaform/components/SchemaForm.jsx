import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash/fp';
import Form from '@department-of-veterans-affairs/react-jsonschema-form';
import { deepEquals } from '@department-of-veterans-affairs/react-jsonschema-form/lib/utils';

import { uiSchemaValidate, transformErrors } from '../validation';
import FieldTemplate from './FieldTemplate';
import * as reviewWidgets from '../review/widgets';
import ReviewFieldTemplate from '../review/ReviewFieldTemplate';
import StringField from '../review/StringField';
import widgets from '../widgets/index';
import ObjectField from '../fields/ObjectField';
import ArrayField from '../fields/ArrayField';
import ReadOnlyArrayField from '../review/ReadOnlyArrayField';
import BasicArrayField from '../fields/BasicArrayField';
import TitleField from '../fields/TitleField';
import ReviewObjectField from '../review/ObjectField';
import { scrollToFirstError } from '../../../../platform/utilities/ui';

/*
 * Each page uses this component and passes in config. This is where most of the page level
 * form logic should live.
 */
class SchemaForm extends React.Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.onError = this.onError.bind(this);
    this.getEmptyState = this.getEmptyState.bind(this);
    this.transformErrors = this.transformErrors.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.setTouched = this.setTouched.bind(this);
    this.state = this.getEmptyState(props);
    this.fields = {
      ObjectField,
      ArrayField,
      BasicArrayField,
      TitleField
    };

    this.reviewFields = {
      ObjectField: ReviewObjectField,
      ArrayField: ReadOnlyArrayField,
      BasicArrayField,
      address: ReviewObjectField,
      StringField
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.name !== this.props.name || newProps.pagePerItemIndex !== this.props.pagePerItemIndex) {
      this.setState(this.getEmptyState(newProps));
    } else if (newProps.title !== this.props.title) {
      this.setState({ formContext: _.set('pageTitle', newProps.title, this.state.formContext) });
    } else if (!!newProps.reviewMode !== !!this.state.formContext.reviewMode) {
      this.setState(this.getEmptyState(newProps));
    } else if (newProps.formContext !== this.props.formContext) {
      this.setState(this.getEmptyState(newProps));
    }
  }

  /*
   * If we’re in review mode, we can short circuit updating
   * by making sure the schemas are the same and the data
   * displayed on this particular page hasn’t changed
   */
  shouldComponentUpdate(nextProps, nextState) {
    if ((nextProps.reviewMode && !nextProps.editModeOnReviewPage)
      && nextProps.reviewMode === this.props.reviewMode
      && deepEquals(this.state, nextState)
      && nextProps.schema === this.props.schema
      && typeof nextProps.title !== 'function'
      && nextProps.uiSchema === this.props.uiSchema) {
      return !Object.keys(nextProps.schema.properties).every(objProp => {
        return this.props.data[objProp] === nextProps.data[objProp];
      });
    }

    return true;
  }

  onError() {
    const formContext = _.set('submitted', true, this.state.formContext);
    this.setState({ formContext });
    scrollToFirstError();
  }

  onBlur(id) {
    if (!this.state.formContext.touched[id]) {
      const formContext = _.set(['touched', id], true, this.state.formContext);
      this.setState({ formContext });
    }
  }

  getEmptyState(props) {
    const { onEdit, hideTitle, title, reviewMode, reviewTitle, pagePerItemIndex, uploadFile, hideHeaderRow, formContext } = props;
    return {
      formContext: Object.assign({
        touched: {},
        submitted: false,
        onEdit,
        hideTitle,
        setTouched: this.setTouched,
        reviewTitle,
        pageTitle: title,
        pagePerItemIndex,
        reviewMode,
        hideHeaderRow,
        uploadFile,
        onError: this.onError
      }, formContext)
    };
  }

  setTouched(touchedItem, setStateCallback) {
    const touched = _.merge(this.state.formContext.touched, touchedItem);
    const formContext = _.set('touched', touched, this.state.formContext);
    this.setState({ formContext }, setStateCallback);
  }

  /*
   * This gets the list of JSON Schema errors whenever validation
   * is run
   */
  transformErrors(errors) {
    return transformErrors(errors, this.props.uiSchema);
  }

  validate(formData, errors) {
    const { schema, uiSchema } = this.props;
    if (uiSchema) {
      uiSchemaValidate(errors, uiSchema, schema, formData);
    }
    return errors;
  }

  render() {
    const {
      data,
      schema,
      uiSchema,
      reviewMode,
      editModeOnReviewPage,
      children,
      onSubmit,
      onChange,
      safeRenderCompletion
    } = this.props;

    const useReviewMode = reviewMode && !editModeOnReviewPage;

    return (
      <div>
        <Form
          safeRenderCompletion={safeRenderCompletion}
          FieldTemplate={useReviewMode ? ReviewFieldTemplate : FieldTemplate}
          formContext={this.state.formContext}
          liveValidate
          noHtml5Validate
          onError={this.onError}
          onBlur={this.onBlur}
          onChange={({ formData }) => onChange(formData)}
          onSubmit={onSubmit}
          schema={schema}
          uiSchema={uiSchema}
          validate={_.once(this.validate)}
          showErrorList={false}
          formData={data}
          widgets={useReviewMode ? reviewWidgets : widgets}
          fields={useReviewMode ? this.reviewFields : this.fields}
          transformErrors={this.transformErrors}>
          {children}
        </Form>
      </div>
    );
  }
}

SchemaForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object.isRequired,
  data: PropTypes.any,
  reviewMode: PropTypes.bool,
  editModeOnReviewPage: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  hideTitle: PropTypes.bool
};

export default SchemaForm;
