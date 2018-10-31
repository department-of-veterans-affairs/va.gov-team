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

## Scenario 5 (solution to be implemented in the weeks + months post-launch)
After launch, when I sign in on a team-site hosted page, once the login flow is over, I need to stay on the page I was on when I clicked Sign In / Sign Up (instead of getting redirected to VA.gov home).

#### Reason we can't have a solution for ^ in place at launch:

With the way the authentication/verification API is set up right now, as a VA.gov user, if I log in and navigate to a compromised sub-domain Teamsite page, through that compromised page a hacker could get all my PII and take actions on my behalf. (This is especially risky on sub-domains since we don't control the Content Security Policy there. Anything on www.va.gov, even if Teamsite hosted, we control the Content Security Policy, so if a hacker gains control there, the CSP will prevent the person from doing anything w/that info. Kind of like a firewall, they can get in, but they can't get any data out).

We need to adjust the API to provide less data, so we minimize the amount of actions that could be taken, and the amount of data that's available to a hacker. This gets more complicated when we introduce more data-intensive features in the shared header/footer like User Notifications.

### Choices:

A. Taken back to www.va.gov domain for sign in, and then teamsite page makes a binary request: are you logged in or not?

Problem: once the user is back on the subdomain that site still has to make a request back to the API to determine whether the user is logged in. Need granularity, but don't have a system for doing that right now.

LOE: discuss w/Patrick, but may make sense to migrate APIs to services and utilize the system in place there. Provide consumer keys for cem. and benefits. and allow those to be requests that go through Kong. Alternatively, do it within Rails.

B. Set up a proxy for cem. and benefits.

Problem: solves it for those 2 instances ^ but isn't a system/holistic/scalable solution.

LOE: 

C. Some solution that enables us to know if someone is logged in or not, w/o making an API call? So we could display something different for Sign In if they're signed in at least (w/o having to display name etc).

D. Some UX solution getting at the concept of: "go back to VA.gov if you want to log in and do stuff"

LOE: desgining the experience, FE work, and removing Sign In / Sign Up from teamsite

Problem: different experience across page....
