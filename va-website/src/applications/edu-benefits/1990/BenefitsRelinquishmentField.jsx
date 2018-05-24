import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';

/**
 * Field for selecting the benefitsRelinquished and corresponding date as necessary.
 * @type {Object}
 */
export default class BenefitsRelinquishmentField extends React.Component {
  onPropertyChange(name) {
    return (value) => {
      this.props.onChange(_.set(name, value, this.props.formData));
    };
  }

  getNestedContent = () => {
    const {
      schema,
      uiSchema,
      errorSchema,
      idSchema,
      formData,
      onBlur,
      registry
    } = this.props;
    const SchemaField = registry.fields.SchemaField;
    const effectiveDateContent = (
      <div>
        <SchemaField
          name="benefitsRelinquishedDate"
          required
          schema={schema.properties.benefitsRelinquishedDate}
          uiSchema={uiSchema.benefitsRelinquishedDate}
          errorSchema={errorSchema.benefitsRelinquishedDate}
          idSchema={idSchema.benefitsRelinquishedDate}
          formData={formData.benefitsRelinquishedDate}
          onChange={this.onPropertyChange('benefitsRelinquishedDate')}
          onBlur={onBlur}
          registry={registry}/>
        <ul>
          <li>Use today’s date unless you aren’t going to use your Post 9/11 GI Bill benefits until later.</li>
          <li>If you pick a future date, you can’t get benefits until then.</li>
          <li>If your classes started less than 2 years ago, enter the date they began.</li>
        </ul>
      </div>
    );

    return {
      chapter30: (
        <div>
          <div>
            <div className="usa-alert usa-alert-warning usa-content secondary">
              <div className="usa-alert-body">
                <span>If you choose to give up MGIB-AD, you’ll get benefits only for the number of months you had left under MGIB-AD.</span>
              </div>
            </div>
            <br/>
            {effectiveDateContent}
          </div>
        </div>
      ),
      chapter1606: effectiveDateContent,
      chapter1607: (
        <div>
          <div>
            <div className="usa-alert usa-alert-warning usa-content secondary">
              <div className="usa-alert-body">
                <span>You can only give up REAP benefits if you had them for the last semester, quarter, or term that ended on or before November 24, 2015.</span>
              </div>
            </div>
            <br/>
            {effectiveDateContent}
          </div>
        </div>
      )
    };
  }

  render() {
    const {
      schema,
      uiSchema,
      formData,
      errorSchema,
      idSchema,
      onBlur,
      onChange,
      registry,
      required,
      name,
      formContext
    } = this.props;

    const benefitsRelinquished = _.get('benefitsRelinquished', formData);
    if (formContext.reviewMode &&
      benefitsRelinquished !== 'unknown' &&
      typeof benefitsRelinquished !== 'undefined') {
      const ObjectField = registry.fields.ObjectField;
      return (
        <ObjectField
          name={name}
          required={required}
          schema={schema}
          uiSchema={uiSchema}
          errorSchema={errorSchema}
          idSchema={idSchema}
          formData={formData}
          onChange={onChange}
          onBlur={onBlur}
          registry={registry}/>
      );
    }

    const SchemaField = registry.fields.SchemaField;
    return (
      <SchemaField
        name="benefitsRelinquished"
        required
        schema={schema.properties.benefitsRelinquished}
        uiSchema={_.merge(uiSchema.benefitsRelinquished, {
          'ui:options': {
            nestedContent: this.getNestedContent()
          }
        })}
        errorSchema={errorSchema.benefitsRelinquished}
        idSchema={idSchema.benefitsRelinquished}
        formData={formData.benefitsRelinquished}
        onChange={this.onPropertyChange('benefitsRelinquished')}
        onBlur={onBlur}
        registry={registry}/>
    );
  }
}

BenefitsRelinquishmentField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  errorSchema: PropTypes.object,
  requiredSchema: PropTypes.object,
  idSchema: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  formData: PropTypes.object,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  registry: PropTypes.shape({
    widgets: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
    ])).isRequired,
    fields: PropTypes.objectOf(PropTypes.func).isRequired,
    definitions: PropTypes.object.isRequired,
    formContext: PropTypes.object.isRequired
  })
};
