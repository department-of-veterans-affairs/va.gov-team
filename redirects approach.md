# Redirects approach
This document captures the various types of redirects we need to account for, in order for users to always land on the appropriate new VA.gov page if they try and access any "old" URLs.

## Scenario 1
After launch, I go directly to a URL that I've saved for a pre Nov-2018 VA.gov page, but it has been replaced with a new VA.gov page hosted on the new Platform.

**Experience:** I'm redirected seamlessly to the correct new VA.gov page. `*`

`*`For a defined subset of pages

**Implementation**: 
- [Prepare stakeholders for all VA.Gov redirects (all - www., cem., and benefits.)](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/13948)
- As a subset of ^ [Get approval for TeamSite subdomains to redirect to new non-EWIS pages](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/13915)
- [Redirect specific Teamsite-hosted pages to the new corresponding VA.gov page](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/13635)
- [Plan for updating Teamsite header scripts for www.va.gov Go Live](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/14699)

## Scenario 2
After launch, I go directly to a URL that I've saved for a Vets.gov page, and there is a corresponding page for it on VA.gov.

**Experience:** I'm redirected seamlessly to the specific VA.gov page, and when it loads I see a message alerting me to the fact that Vets.gov has been merged into VA.gov. 

**Implementation:**
- [Build Vets.gov to VA.gov page redirects with onboarding modal](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12060)
- [Set Vets.gov to VA.gov redirect onboarding modal to happen every time, until we disable](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/14556)
- [Redirect Specific Vets.Gov Pages to corresponding new VA.gov pages](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/13928)

## Scenario 3
After launch, I go directly to a URL that I've saved for a Vets.gov page, and there is NO corresponding page for it on VA.gov.

**Experience:** I'm redirected seamlessly to the VA.gov home page, and when it loads I see a message alerting me to the fact that Vets.gov has been merged into VA.gov.

**Implementation:**
- [Build Vets.gov to VA.gov page redirects with onboarding modal](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12060)
- [Set Vets.gov to VA.gov redirect onboarding modal to happen every time, until we disable](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/14556)
- [Create fallback redirect to VA.gov homepage for Vets.gov pages that don't have specific redirect destination](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/14698)


## Scenario 4
After launch, I go to a preview.va.gov page that I've saved.

**Experience:** I land on the corresponding www.VA.gov page.

**Implementation:**
- ?
