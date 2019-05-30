import React from 'react';

import RoutedSavableApp from '../common/schemaform/save-in-progress/RoutedSavableApp';
import formConfig from './config/form';
import RateLimiter from '../../platform/monitoring/RateLimiter';
import RateLimitContent from './components/RateLimitContent';

export default function VeteranIDCard({ location, children }) {
  return (
    <RateLimiter
      id="vic2"
      waitForProfile
      renderLimitedContent={RateLimitContent}
      bypassLimit={({ user }) => user.profile.savedForms.some(f => f.form === 'VIC')}>
      <RoutedSavableApp formConfig={formConfig} currentLocation={location}>
        {children}
      </RoutedSavableApp>
    </RateLimiter>
  );
}
