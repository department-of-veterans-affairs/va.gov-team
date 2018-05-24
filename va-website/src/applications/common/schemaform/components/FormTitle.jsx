import React from 'react';

export default function FormTitle({ title, subTitle }) {
  return (
    <div className="schemaform-title">
      <h1>{title}</h1>
      {subTitle && <div className="schemaform-subtitle">{subTitle}</div>}
    </div>
  );
}
