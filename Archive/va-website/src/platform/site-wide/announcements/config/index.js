import DashboardIntro from '../components/DashboardIntro';
import ProfileIntro from '../components/ProfileIntro';
import PersonalizationBanner from '../components/PersonalizationBanner';
import isPersonalizationEnabled from '../../../../applications/personalization/dashboard/isPersonalizationEnabled';

const personalizationDisabled = !isPersonalizationEnabled();

const config = {
  announcements: [
    {
      name: 'dashboard-intro',
      paths: /^(\/dashboard\/)$/,
      component: DashboardIntro,
      relatedAnnouncements: ['personalization'],
      disabled: personalizationDisabled
    },
    {
      name: 'profile-intro',
      paths: /^(\/profile\/)$/,
      component: ProfileIntro,
      relatedAnnouncements: ['personalization'],
      disabled: personalizationDisabled
    },
    {
      name: 'personalization',
      paths: /(.)/,
      component: PersonalizationBanner,
      disabled: personalizationDisabled
    }
  ]
};

export default config;
