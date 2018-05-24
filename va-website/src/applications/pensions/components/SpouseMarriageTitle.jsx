import React from 'react';
import { getSpouseMarriageTitle } from '../helpers';

export default function SpouseMarriageTitle({ id, formContext }) {
  return (
    <legend
      className="schemaform-block-title"
      id={id}>
      {getSpouseMarriageTitle(formContext.pagePerItemIndex)}
    </legend>
  );
}
