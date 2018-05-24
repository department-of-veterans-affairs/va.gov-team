import React from 'react';

import { formatName } from '../utils/helpers';

export default function ClaimantView({ formData }) {
  const { name, relationshipToVet } = formData.claimant;

  let relationship;

  switch (relationshipToVet.type) {
    case 1:
      relationship = 'Servicemember';
      break;
    case 2:
      relationship = 'Spouse';
      break;
    case 3:
      relationship = 'Child';
      break;
    default:
      // Invalid case; show nothing for relationship.
  }

  return (
    <div>
      <div><strong>{formatName(name)}</strong></div>
      <div>{relationship}</div>
    </div>
  );
}
