# Code locations for Veteran Status work:

## Main UI 
[Components in `applications/personalization/profile`](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/profile/components/proof-of-veteran-status)

Where it’s used [(Military Information page)](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx)

[Main e2e tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/profile/tests/e2e/proof-of-veteran-status)

Tapped into [Military Info e2e test and set up constants here for re-use](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/profile/tests/e2e/military-information)

Also adjusted the [mock endpoints](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/mocks/endpoints/service-history/index.js) (might be helpful for you to know where this lives)


## PDF generation

Located in the `src/platform/pdf` [directory](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/pdf) (VS stuff in templates and test subfolders and I also adjusted the index.js file to open in a new tab specifically for this)


## Feature flipper

### UI
In [profile application](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/constants.js)

Main Platform [feature flippers file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/feature-toggles/featureFlagNames.json) (as `profileShowProofOfVeteranStatus`)

[Toggle test](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/tests/components/MilitaryInformation.unit.spec.jsx)


### API
[Features config yml](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml) (as `profile_show_proof_of_veteran_status`)


## Also completed as part of this work:

### Mobile app callout alert

[Component](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/alerts)

[Tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/tests/alerts)

