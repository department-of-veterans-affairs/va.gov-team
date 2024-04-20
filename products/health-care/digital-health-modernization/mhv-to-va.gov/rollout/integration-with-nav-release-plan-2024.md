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

### Decisions log
| Date | Decider | Decision |
|-|-|-|
| 4/17/24 | Lauren & Kaitlin | unauth benefit hub pages will not be updated to direct users to MHV-on-VAgov for Phase 1; will revisit for Ph 2 |

## Technical notes on integration and release

### Secondary Nav Bar

The secondary navigation could be implemented multiple ways in code to achieve the same user experience, but with different implications. We plan to integrate a shared component, but we should briefly discuss the sitewide header as an option.

We could implement secondary navigation in the sitewide header, near where primary navigation lives. This implies that code in the sitewide header component would need to control when the secondary nav appears based on feature flags and URL paths (some `/my-health` pages, such as certain form-flows, should _not_ display secondary navigation).

However, we chose the shared component path. The shared component will need to be added to each app that requries it, and placed within the code at a particular location in the code in order to visually appear to be just below the primary navigation without any visible gap.

### Feature Toggles

The MHV tools and landing page all have [feature toggles](https://github.com/department-of-veterans-affairs/vets-website/blob/cd3c891ea9fd80fb0023048dc24e3de3265b05d7/src/platform/utilities/feature-toggles/featureFlagNames.json#L105-L120) that affect whether different parts of MHV-on-VA.gov appear, or what features are available. 

#### Existing feature toggles (as seen on frontend on 19 April)

The Appoinments tool has [27 `vaOnlineScheduling*` feature toggles](https://github.com/department-of-veterans-affairs/vets-website/blob/cd3c891ea9fd80fb0023048dc24e3de3265b05d7/src/platform/utilities/feature-toggles/featureFlagNames.json#L204-L231), but is already live on VA.gov and so shouldn't need to add or flip on any feature toggles.

| Feature Toggle | Enable on release? | Comments |
| - | - | - | 
| "mhvLandingPageEnabled" | Yes | Landing page should be enabled in Phase 1 launch and not disabled after. Remove toggle after Phase 1? |
| "mhvLandingPagePersonalization" |  | Personalization not tied to phase 1 |
| "mhvLandingPageEnableVaGovHealthToolsLinks" | Yes | Controls landing page links on landing page, per department-of-veterans-affairs/vets-website/pull/29259 |
| "mhvSecureMessagingToVaGovRelease" | Yes? |  |
| "mhvSecureMessagingToPhase1" | Yes? |  |
| "mhvSecureMessagingCernerPilot" |  |  |
| "mhvMedicalRecordsAllowTxtDownloads" |  |  |
| "mhvMedicalRecordsDisplayConditions" |  |  |
| "mhvMedicalRecordsDisplayDomains" |  |  |
| "mhvMedicalRecordsDisplayLabsAndTests" |  |  |
| "mhvMedicalRecordsDisplayNotes" |  |  |
| "mhvMedicalRecordsDisplaySidenav" |  |  |
| "mhvMedicalRecordsDisplayVaccines" |  |  |
| "mhvMedicalRecordsDisplayVitals" |  |  |
| "mhvMedicalRecordsToVaGovRelease" | No |  |
| "mhvMedicationsToVaGovRelease" | Yes |  |
| "mhvMedicationsDisplayRefillContent" | ? |  |

## Release strategy

### Smoke test


### Canary release










