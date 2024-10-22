# CTA widget

## About
CTA widget is a vets-website React application: [src/applications/static-pages/cta-widget](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/static-pages/cta-widget).

## Ownership
Codeowners declaration in vets-website: [src/applications/static-pages/cta-widget](https://github.com/department-of-veterans-affairs/vets-website/blob/main/.github/CODEOWNERS#L128)

As of August 2024, there are 28 uses of the CTA widget throughout VA.gov, across various portfolios and teams. Full list of uses is in [src/applications/static-pages/cta-widget/ctaWidgets.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/cta-widget/ctaWidgets.js#L17). 

Five of those were historically managed by the Public Websites team and are transitioning in Q4 2024 to the Health Apps team along with ownership of the widget itself: 

| Widget | Page | 
| --- | --- |
| HEALTH_RECORDS | https://www.va.gov/health-care/get-medical-records/ |
| LAB_AND_TEST_RESULTS | https://www.va.gov/health-care/view-test-and-lab-results/ |
| MESSAGING | https://www.va.gov/health-care/secure-messaging/ |
| RX | https://www.va.gov/health-care/refill-track-prescriptions/ |
| SCHEDULE_APPOINTMENTS | https://www.va.gov/health-care/schedule-view-va-appointments/ |

**Content** for these five widgets is provided by Sitewide Content team.

Other teams may opt to use this widget. When that happens, the codeowner will be tagged for PR review and approval. 


## Functionality
The CTA widget creates a widget that appears on both the unauthenticated and authenticated versions of pages where it is included. 
Text can be specified for the unauthed and authed cases. 
After auth, page will reload and include calls to action that point users to the Electronic Healthcare Records (EHR) system used by their primary healthcare facility. 

[React widget flows (image exported from Mural)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/cta-widget/Cerner%20react%20widget%20flows_2024-10-15_18-03-13.png) documents the behavior / user flow for these five widgets.

As of August 2024, there are three flavors of EHR: 
* **MyHealtheVet** - Digital platform of the VistA healthcare provider. CTAs that point to MHV, once a user logs in, will take users out to MHV's platform.
* **Oracle Health** (formerly Cerner) - New EHR provider as of 2020, used at some VAMC systems/facilities. For Veterans who have patient records at an Oracle Health facility, CTAs that point to Oracle Health will also appear and take those users out to Oracle Health's digital platform.
  * VAMC system migrations to Cerner are on pause as of July 2022. 
* **MyHealtheVet on VA.gov** - An in-house digital platform built by the VA. CTAs that point to MHV on VA.gov will take users to a VA.gov dashboard, where both MHV and Oracle Health data is pulled in via APIs.

As Health care tool teams are updating landing pages or CTA actions to point to MyHealtheVet on VA.gov, CTA widget owner may be called up on as code reviewers to review changes and ensure that the experience for these widgets is as expected. 


## Reference information 
* **CERNER TEST USERS**: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-cerner.md
* Oracle Health cutover information is publicized in DSVA slack: #vagov-oracle-launch-coordination
* [CMS source of truth documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/healthcare-widget-support/cms-source-of-truth) (github) - is used to determine which healthcare records management system is used by a VA medical center system 
* [Healthcare system cutover to Cerner (now Oracle health): runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/healthcare-widget-support/how_to_set_up_vamc_cerner_within_va_health_care_portals.md)
