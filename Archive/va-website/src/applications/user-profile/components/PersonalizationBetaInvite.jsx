import React from 'react';
import dashboardManifest from '../../personalization/dashboard/manifest.json';

const eligibleServices = [
  'evss-claims',
  'appeals-status',
  'messaging',
  'rx'
];

function enabled() {
  if (dashboardManifest.hideInvitation) return false;
  if (document.location.hostname === 'www.vets.gov') return dashboardManifest.production;
  return true;
}

function meetsCriteria(profile) {
  // Check if they are already enrolled
  if (profile.services.includes('dashbord-beta')) return false;

  // Otherwise, they should be a user of at least one of the applications listed above
  return profile.services.some(service => {
    return eligibleServices.includes(service);
  });
}

export default function PersonalizationBetaInvite({ profile }) {
  if (!enabled() || !meetsCriteria(profile)) return null;

  return (
    <div>
      <h4 className="section-header">Beta tools</h4>
      <p>You’re invited to try our new online tools that make it easier to see important updates and keep your information current.</p>
      <a className="usa-button-primary" type="button" href="/beta-enrollment/personalization">Learn more</a>
    </div>
  );
}
