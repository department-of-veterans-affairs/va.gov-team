import React from 'react';

export default class DemographicField extends React.Component {
  render() {
    const { formContext, uiSchema, schema, formData } = this.props;
    const ObjectField = this.props.registry.fields.ObjectField;

    if (!formContext.reviewMode) {
      return <ObjectField {...this.props}/>;
    }

    const categories = Object.keys(schema.properties).filter(prop => formData[prop]);
    return (
      <div>
        <div className="review-row">
          <dt>{uiSchema['ui:title']}</dt>
          {categories.length > 0 && <dd>{uiSchema[categories[0]]['ui:title']}</dd>}
        </div>
        {categories.slice(1).map(prop => (
          <div key={prop} className="review-row">
            <dt></dt>
            <dd>{uiSchema[prop]['ui:title']}</dd>
          </div>
        ))}
      </div>
    );
  }
}
