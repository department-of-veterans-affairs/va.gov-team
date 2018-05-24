import React from 'react';
import PrefillMessage from '../save-in-progress/PrefillMessage';

export default function ApplicantDescription({ formContext }) {
  return (
    <div>
      <p>You aren’t required to fill in all fields, but we can review your application faster if you provide more information.</p>
      <PrefillMessage formContext={formContext}/>
    </div>
  );
}
