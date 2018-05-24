import React from 'react';

import { formatName } from '../utils/helpers';

export default function EligibleBuriedView({ formData }) {
  return (
    <div>
      <div><strong>{formatName(formData.name)}</strong></div>
      <div>{formData['view:cemeteryNumber']}</div>
    </div>
  );
}

