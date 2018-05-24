import dashboardManifest from './manifest.json';

export default function isPersonalizationEnabled() {
  if (__BUILDTYPE__ !== 'production') return true;
  return dashboardManifest.production;
}
