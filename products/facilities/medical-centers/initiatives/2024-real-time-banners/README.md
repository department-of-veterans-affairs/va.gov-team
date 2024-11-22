# VAMC real-time banners

## Background
https://dsva.slack.com/archives/C0FQSS30V/p1727108182414679

VA would urgently like to pursue methods for getting critical content out to production faster, for things that should not / cannot wait for content-build when it's having problems.

This was introduced at the end of Q3 2024, and will be a Q4 priority.

## Scope
MVP: VAMC banners, not including situation updates

Additional phases can be scoped when we arrive at a methodology to achieve MVP.

MVP is _not_ for full-width banners first, but for VAMC banners _without_ situation updates. They are similar, but different. 

* Live VAMC banner with situation update: https://prod.cms.va.gov/va-north-floridasouth-georgia-health-care/vamc-banner-alert/2024-10-08/hurricane-milton-operational-status-update-for-nfsgvhs
* Example where it appears on the FE: https://www.va.gov/north-florida-health-care/ - by default, the situation update appears on any VAMC system page, for the System checked on the VAMCBwSU (?) node

These ride along with the header: 

![Image](https://github.com/user-attachments/assets/9428ae26-bed3-42bb-97fd-110aa1f20fd2)

## Basic architecture

* vets-api endpoint (banners)
* sidekiq job that runs and pulls Drupal data via graphQL, and pipes it into the API data store, every 10 mins
* vets-website application that harnesses the API to show banner updates in real-ish time

We will move the existing content-build of VAMC banners with Situation updates behind a CMS feature toggle, and deprecate that code after real-time banner launch.

## Collab cycle
https://github.com/department-of-veterans-affairs/va.gov-team/issues/96762
