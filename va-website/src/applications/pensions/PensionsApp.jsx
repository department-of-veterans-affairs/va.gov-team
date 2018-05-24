import React from 'react';

import RoutedSavableApp from '../common/schemaform/save-in-progress/RoutedSavableApp';
import formConfig from './config/form';

export default function PensionsApp({ location, children }) {
  return (
    <RoutedSavableApp formConfig={formConfig} currentLocation={location}>
      {children}
    </RoutedSavableApp>
  );
}
