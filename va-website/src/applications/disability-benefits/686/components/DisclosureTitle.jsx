import React from 'react';
import _ from 'lodash/fp';

export default function createDisclosureTitle(path, title) {
  return function DisclosureTitle({ id, formData }) {
    let fullName;

    // A little hackish
    if (path === 'spouse') {
      const marriages = formData.marriages || [];
      fullName = _.get(['marriages', marriages.length - 1, 'spouseFullName'], formData) || {};
    } else {
      fullName = _.get(path, formData) || {};
    }

    return (
      <div>
        <h4 className="dependent-name">{fullName.first} {fullName.last}</h4>
        <legend
          className="schemaform-block-title dependent-title"
          id={id}>
          {title}
        </legend>
      </div>
    );
  };
}
