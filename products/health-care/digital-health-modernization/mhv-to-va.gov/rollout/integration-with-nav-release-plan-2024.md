# Release Plan - 3-tool integration on VA.gov, 2024

## Introduction

It was decided on 4/11/2024 that the Phase 1 release of Medications would coincide with relase of a cohesive portal experience on VA.gov. This will include the MHV landing page plus all three tools that will then be in Phase 1:
- Appointments
- Secure messages
- Medications

Medical records will continue to be available on MHV Classic.

UX will include:
- Secondary nav bar with 5 links (Home/landing page plus 4 tools)
- Landing page links directly to VA.gov versions of tools
- Tool breadcrumbs will link back to landing page
- The MHV landing page will include information about the new functionality on VA.gov

Primary Github artifacts:
- Cartographers epic: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80402)
- Main UX design ticket for this release: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74454)
- Implementation ticket for this release: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80401)

### Changes required within tool applications
- Secure messaging app has a bespoke secondary nav that will probably need to change or be removed
- Bread crumbs within tools should point back to the MHV landing page on VA.gov instead of MHV Classic
- Any link within a tool that cross-links directly to another tool should point to the tool on VA.gov
- MHV secondary navigation component should show on all tools and child and their child pages
- All three tools on VA.gov need to provide an alert to Oracle patients that they may need My VA Health. (SM and Appts already have it as of 4/17/24)

### Questions log
- Is any new handling required for Veterans with Oracle facilities?

## Technical notes on integration and release

### Secondary Nav Bar

The secondary navigation could be implemented multiple ways in code to achieve the same user experience, but with different implications. We plan to integrate a shared component, but we should briefly discuss the sitewide header as an option.

We could implement secondary navigation in the sitewide header, near where primary navigation lives. This implies that code in the sitewide header component would need to control when the secondary nav appears based on feature flags and URL paths (some `/my-health` pages, such as certain form-flows, should _not_ display secondary navigation).

However, we chose the shared component path. The shared component will need to be added to each app that requries it, and placed within the code at a particular location in the code in order to visually appear to be just below the primary navigation without any visible gap.

## Release strategy

### Smoke test


### Canary release










