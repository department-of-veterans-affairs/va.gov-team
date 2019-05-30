import React from 'react';
import recordEvent from '../../../../platform/monitoring/record-event';

export default function LoginSettings() {
  return (
    <div>
      <h4>ID.me settings</h4>
      <p>Want to change the email you use to sign in to ID.me, or update your ID.me password or other account settings?<br/>
        <a href="https://wallet.id.me/settings" target="_blank">Go to ID.me to manage your account</a>
      </p>
      <p>
        <strong>Note:</strong> ID.me is a digital identity platform that provides the strongest identity verification system available to prevent fraud and identity theft. We use ID.me to help you create a verified account on Vets.gov-or to connect your premium MyHealtheVet or DS Logon account to our site-as well as to add an extra layer of security to your account.<br/>
        <a href="/faq/#what-is-idme" onClick={() => recordEvent({ event: 'account-navigation', 'account-action': 'view-link', 'account-section': 'learn-more-idme' })}>Learn more about ID.me</a>
      </p>
    </div>
  );
}
