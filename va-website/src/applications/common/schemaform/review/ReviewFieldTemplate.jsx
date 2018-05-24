import React from 'react';

/*
 * This is the template for each field (which in the schema library means label + widget)
 */

export default function ReviewFieldTemplate(props) {
  const { children, uiSchema, schema } = props;
  const label = uiSchema['ui:title'] || props.label;
  const description = uiSchema['ui:description'];
  const textDescription = typeof description === 'string' ? description : null;
  const DescriptionField = typeof description === 'function'
    ? uiSchema['ui:description']
    : null;

  return schema.type === 'object' || schema.type === 'array'
    ? children
    : <div className="review-row">
      <dt>
        {label}
        {textDescription && <p>{textDescription}</p>}
        {DescriptionField && <DescriptionField options={uiSchema['ui:options']}/>}
        {!textDescription && !DescriptionField && description}
      </dt>
      <dd>{children}</dd>
    </div>;
}
