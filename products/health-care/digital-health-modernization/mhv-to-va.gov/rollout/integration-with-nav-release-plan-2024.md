# Release Plan - 3-tool integration on VA.gov, 2024

## Introduction

It was decided on 4/11/2024 that the Phase 1 release of Medications would coincide with relase of a cohesive MHV-on-VA.gov portal experience. This will include the MHV-on-VA.gov landing page plus all three tools that will then be in Phase 1:
- Appointments
- Secure messages
- Medications

Medical records will continue to be available on MHV National Portal.

MHV-on-VA.gov UX will include:
- Secondary nav bar with 5 links (Home/landing page plus 4 tools)
- MHV-on-VA.gov Landing page links directly to VA.gov versions of tools
- Tool breadcrumbs will link back to MHV-on-VA.gov landing page
- The MHV-on-VA.gov landing page will include information about the new functionality on VA.gov

Primary artifacts:
- [IA (info architecture) Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713450017254/6daf1f320cba1054fdfd840e4a7c881dda87120c?wid=0-1713461062826) covering changes for the integration
- Cartographers epic: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80402)
- Main UX design ticket for this release: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74454)
- Implementation ticket for this release: [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80401)

### Changes required within VA.gov tool applications
- Secure messaging app has a bespoke secondary nav that will probably need to change or be removed
- Tool landing pages should add breadcrumbs that connect `< Back to My HealtheVet home` with that specific language
- Any link within a tool that cross-links directly to another tool in Phase 1 should point to VA.gov build (remove links to tools on the National Portal)
- MyHealtheVet secondary navigation component should display on the tools on VA.gov (SM, Appts, Meds) and their child pages
- All three tools on VA.gov need to provide an alert to patients with Oracle Health/Cerner facilities in their profiles that they may need to navigate over to My VA Health to manage that care. (SM and Appts already have it as of 4/17/24)
- Tool "About" pages will get content updates
- "Try me" banners on MHV classic will get content updates

### Questions log
- Is any new handling required for Veterans with Oracle facilities?
- Should we suppress functionality on any tools for patients who ONLY have Cerner/OH facilities in their profile?
  * No, Kaitlin communicated on 4/22 [via Slack](https://dsva.slack.com/archives/C04DRS3L9NV/p1713455728629549) that some facilities migrating to new EHR systems may have historic data on VistA and those patients need to be able to access both systems to retrieve their records. 

### Decisions log
| Date | Decider | Decision |
|-|-|-|
| 4/17/24 | Lauren & Kaitlin | unauth benefit hub pages will not be updated to direct users to MHV-on-VAgov for Phase 1; will revisit for Ph 2 |
| 4/17/24 | Lauren & Kaitlin | MyVA links to My HealtheVet National Portal will not be updated at this point, we will revisit after the initial integration and work with those teams more closely |
| 4/19/24 | Kaitlin | Leave link to "manage folders" under Messages box on landing page until we are able to do a redesign of landing page |
| 4/19/24 | Kaitlin + Mikki | Breadcrumbs on tool landing pages will link `< Back to My HealtheVet home` on VA.gov landing page, regardless of whether the user bypassed that page (i.e. cross-link or the secondary nav component); we want to drive more people to the landing page to discover additional tools and pages whenever possible). May use dynamic `< Back` link on subtasks and deeper pages of tools |
| 4/22/24 | Kaitlin | Do not suppress any functionality within tools for patients with ONLY Cerner/OH facilities in their profile, let alerts do their job if there is no data for certain patients |
| 4/22/24 | Laura, Kaitlin | Link text on MHV landing page for "Compose message" should be updated to "Start a new message"; "Medications and allergies" should be updated to "Review medications" (remove reference to "Allergies" until this is available on VA.gov, and then it should live under Medical Records) |
| 4/22/24| Kaitlin | Need to have a return link on My HealtheVet "home" page that sends users back to the National Portal landing page if they want to opt out|
| 4/22/24| Kaitlin | Focus on implementing secondary navigation on the "big four" tools, with a fast-follow to make decisions around implementation on other apps (i.e. 10-10EZR)|

## Technical notes on integration and release

### Secondary Nav Bar

The MHV-on-VA.gov secondary navigation will be implemented by adding a shared component to each app that requries it. Placed within the code at a particular location in the code, it will visually appear to be just below the primary navigation without any visible gap.

We considered implementing secondary navigation within the VA.gov sitewide header component. However, we decided against this option to avoid the risk of broader performance or user experience impacts.

The addition of the secondary nav component will require a single line of code in each location where it is added.

### Feature Toggles

The MHV-on-VA.gov tools and landing page all have [feature toggles](https://github.com/department-of-veterans-affairs/vets-website/blob/cd3c891ea9fd80fb0023048dc24e3de3265b05d7/src/platform/utilities/feature-toggles/featureFlagNames.json#L105-L120) that affect whether different parts of MHV-on-VA.gov appear, or what features are available. 

#### Rolling out using feature toggles and/or deploys

1. Medications Ph1 enabled for 100% of users.
   - Toggle: `mhvMedicationsToVaGovRelease`
2. SM, Meds and Appts incorporate integration UX changes outlined in this document (above)
   - Toggle(s): _TBD_
3. Secondary nav enabled by its own feature toggle on Appointments, Medications, Secure messages, and the MHV-on-VA.gov landing page
   - Toggle: _NEED toggle name_
4. MHV-on-VA.gov Landing page incorporates UX changes for integration (links to the tools on VA.gov (SM, Meds), content about Ph1 integration, etc.)
   - Toggle: `mhvLandingPageEnableVaGovHealthToolsLinks` 
5. MHV Classic deploys try-me changes

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

### QA approach

Testrail will be used to document the test cases and results from testing. There are two sections that will be used, one for the secondary nav component and another for the link changes. Once development is complete, QA will begin verifying and informing the team of any bugs that may arise from testing. 

Each team will QA their own implementation, including secondary nav component and link changes. 

### Smoke test


### Canary release










