# My HealtheVet on VA.gov Transition Hub 

Last Update: March 12, 2025

## Summary

This document serves as a resource for future work, ensuring that our team and future contract teams can easily access critical information. 

## Table of Contents

* [Background of the My HealtheVet transition](#background)
* [Directory of teams](#directoryofteams)
* [Where are we now? - Existing features](#existingfeatures)
* [Where are we going? - 2025 goals/key milestones](#2025goals)
* [High-level performance and adoption metrics for the health portal](#metrics)
* [Design and research resources](#design)
* [Engineering resources](#engineering) 
* [Quality Assurance](#qa)

## <a name="background"></a>Background of the My HealtheVet Transition<be>

**Overview**

The My HealtheVet (MHV) project is part of the Health Modernization Initiative at the VA, operating within the Office of the CTO (OCTO). 

The My HealtheVet on VA.gov team’s mission is to simplify Veterans’ health experience on the web by consolidating all health things into a single health “home” on VA.gov, migrating from [My HealtheVet classic](https://www.myhealth.va.gov/mhv-portal-web/home). 

Research from 2018, repeated in late 2020, shows that Veterans find it difficult to navigate commonplace interactions with VA health care. The VA ecosystem is so complex that veterans feel discouraged from applying for, managing, and maximizing their benefits.

While the team’s core responsibility focuses on the MHV landing page and Secondary Navigation, close collaboration with other teams ensures that Veterans have a seamless experience managing their healthcare in a single place. 

[See the full product brief here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/product/product-brief.md)

## <a name="directoryofteams"></a>Directory of Teams<be>

The MHV to VA.gov initiative consists of several different products, each with its discrete product outlines and teams:

  - [MHV on VA.gov landing page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page)  
  - [Secure Messaging](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product)
  - [Medical Records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/README.md)
  - [Medications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/README.md)
  - [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling)

## <a name="existingfeatures"></a>Existing Features<be>

### Product Overview
- [MHV CTA Widget](/products/health-care/digital-health-modernization/product/mhv-cta-widget--product-overview--cartography--mhv-on-vagov.md)
- [insert link]
- [insert link]

### My HealtheVet on VA.gov Landing page

In September 2023, the My HealtheVet on VA.gov landing page was launched ([see more about the landing page here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page)). 

### Four main health tools 

Using a phased approach, teams have systematically integrated the four major health tools — [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling),  [Medications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/README.md), [Secure Messaging](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product), and [Medical Records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/README.md) — into My HealtheVet on VA.gov. An "opt-in" experience in production allowed Veterans to access these tools on VA.gov while enabling VA teams to monitor usage, validate performance, and refine the experience. 

### Secondary Navigation

On June 2024, the [Secondary Navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/README.md) was launched to enhance Veterans' awareness and navigation of health tools available within My HealtheVet on VA.gov. This improvement aims to reduce the likelihood of Veterans searching for healthcare-related tools in unauthenticated areas of VA.gov, such as the megamenu.

**As of December 2024, all four of the essential health tools are now fully available on VA.gov.** 

## <a name="2025goals"></a>Key Milestones<be>

**Account Creation API Implementation (12/24)**
- [Add details for Milestone 2]

**Milestone 1 (3/17/25)**

- Appointments no longer available on MHV. MHV Classic link redirects to appointments on VA.gov.
- All health care links on VA.gov (facility pages, tools pages, My VA, etc.) will direct to the portal
on VA.gov for a consistent experience. Users will be able to “Go back to the previous version of
MHV” via links in the portal, but the user interface will not encourage users to go to MHV Classic.
- No changes to secure message, medications, or medical records on the new or classic MHV
experiences. Users who directly go to MHV Classic will continue to have the same experience.
- Update MHV Classic “Try Me” banners to let users know that coming soon (June 1), users will be re-
directed to VA.gov for secure messaging, medications, and medical records.
- MyVA Health users can still get to MyVA Health from both portals.

**Milestone 2 (6/25)**
- [Add details for Milestone 2] 

## <a name="metrics"></a>High-level performance and adoption metrics for the health portal<be>

Folder containing metrics for the health portal can be seen in Sharepoint: [Monitoring, Reporting, and Feedback](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=QGJNSi&CID=5667b80d%2D4ee2%2D46b6%2Da293%2Df55fbab8b5e1&FolderCTID=0x012000E6CB91B251F8F14F832E520FAF90885D&id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FGeneral%2FMonitoring%2C%20Reporting%2C%20and%20Feedback&viewid=9384f3a8%2De3e8%2D4abb%2Db2ab%2D24cf305ccdac) (Sharepoint)

This folder contains metrics on the following: 

  - [Medallia feedback](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/General/Monitoring,%20Reporting,%20and%20Feedback/Medallia%20feedback?csf=1&web=1&e=h9cZ0u) (Sharepoint)
 - [Product metrics and feedback reports](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/General/Monitoring,%20Reporting,%20and%20Feedback/Monthly%20Product%20Metrics%20%26%20Feedback%20Reports?csf=1&web=1&e=qmWxPb) (Sharepoint)
 - [Monthly transition evaluation reports](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/General/Monitoring,%20Reporting,%20and%20Feedback/Monthly%20Transition%20Evaluation%20reports?csf=1&web=1&e=1Ekyyg) (Sharepoint)

## <a name="design"></a>Design and research resources<be>

### Design system 

The VA.gov Design System is the front-end framework for VA.gov. Utilizing it in the design process will help create consistent experiences on VA.gov. 

Specific information on the VA design system can be found on the [Getting started with design.va.gov](https://design.va.gov/about/). You can also check out the [VA design system Figma](https://www.figma.com/files/team/1278375444205744118/project/105082786/VA-Design-System?fuid=1094287939207433857). 

### Figma 

VA design teams use Figma to view, share, and collaborate on our work. Here are some helpful Figma links. 

Here's the Figma link for the [My HealtheVet - Portal](https://www.figma.com/files/team/1278375444205744118/project/176500480/MHV---Portal?fuid=1094287939207433857) room. This space contains the design files for the team's responsibilities, including My HealtheVet landing page and Secondary navigation. 

### Additional health specific Figma files 

- [My HealtheVet - Unified Appointments](https://www.figma.com/files/team/1278375444205744118/project/175332858/MHV---Unified-Appointments?fuid=1094287939207433857) 
- [My HealtheVet - Medical Records](https://www.figma.com/files/team/1278375444205744118/project/176500754/MHV---Medical-Records?fuid=1094287939207433857)
- [My HealtheVet - Meds & Devices](https://www.figma.com/files/team/1278375444205744118/project/176500922/MHV---Meds-%26-Devices?fuid=1094287939207433857)
- [My HealtheVet - Messages](https://www.figma.com/files/team/1278375444205744118/project/198497820/MHV---Messages?fuid=1094287939207433857)'

### Landing page products' helpful links

#### My HealtheVet landing page specific helpful links 

- [Landing page design decision tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/design/decisions-tracker.md) 
- [Landing page Figma file](https://www.figma.com/design/CAChU51fWYMZsgDR5RXeSc/MHV-Landing-Page?node-id=11-1274&t=0dq4hNUoyUU06DuN-1) 
- MHV on VA.gov: Landing page research [See the research plan here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/research/2023-03-Landing-Page-User-Research/2023-03-research-plan.md)
  - The purpose of this research was to assess users' reactions to and expectations of the updated landing page for MHV on VA.gov, whether the current wayfinding tactics are effective at guiding users through the page, how users expect to be able to update health-related preferences, and how users expect timely statuses and notifications to be communicated to them. 
    - [Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/research/2023-03-Landing-Page-User-Research/2023-04-landing-page-readout.md)
- Relevant Murals: [Landing page iterations](https://app.mural.co/invitation/room/1698186759596?code=02f984b27ce94456b25ea2a67987e582&sender=u24af215c7d9bf806b8545488) 

#### Secondary navigation helpful links

- [Secondary navigation Figma file](https://www.figma.com/design/6nWnlJUjSK91V9hjc3p0LN/MHV-Secondary-Nav?node-id=0-1&t=azNbSaD6b43w3149-1)
- Secondary nav comparison study: [See the plan here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/2nd-comparison-study/research-plan.md)
  - The purpose of this research is to assess and compare participants' ability to navigate the health portal using two distinct navigation concepts, both on mobile and desktop (total of 4 designs in all).
    - [Secondary nav comparison study findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/Comparison-study/research-findings.md)
- Relevant Murals: [Comparative analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1694530015144/bb1ff2600f6e417f2c58abe793f158119aaac44a?sender=uebde62ceb342c6477fb09406)


### Additional relevant Mural rooms 

- [Cartographers - MHV on VA.gov portal](https://app.mural.co/invitation/room/1698186759596?code=02f984b27ce94456b25ea2a67987e582&sender=u24af215c7d9bf806b8545488)
- [MHV on VA.gov](https://app.mural.co/t/departmentofveteransaffairs9999/r/1646265288521) 

### Portal related research links

_The following are some helpful health portal related research links._

- [Portal level research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/research)
- [Landing page research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/research)
- [Secondary navigation research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav)

_Tool specific research_

- [Medical records](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research)
- [Medications](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research)
- [Messaging](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research)
- [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/research) 

You can learn more about getting started with research at VA here: [Research at VA](https://depo-platform-documentation.scrollhelp.site/research-design/research-at-va).


## <a name="engineering"></a>Engineering resources<be>

This section provides key resources and documentation for engineers working on the My HealtheVet (MHV) to VA.gov transition. It includes links to developer documents, repositories, onboarding, and other documentation for the applications and shared functions our team is responsible for.

### Platform Developer Resources

- [Developer documentation home](https://depo-platform-documentation.scrollhelp.site/developer-docs/)
- [Frontend developer documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/frontend-developer-documentation)
- [Backend developer documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/backend-developer-documentation)
- [Onboarding guide](https://depo-platform-documentation.scrollhelp.site/developer-docs/onboarding)

### GitHub Repositories

- [vets-website (frontend)](https://github.com/department-of-veterans-affairs/vets-website)
- [vets-api (backend)](https://github.com/department-of-veterans-affairs/vets-api)

### Murals Diagram of MHV Backend Logic

- [My HealtheVet on VA.gov - API logic diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717177396025/367057c4a9219404c3b7080e71210082b3c65771?sender=u24af215c7d9bf806b8545488)

### Engineering Documentation

This directory contains engineering information that applies to the entire [MHV to VA.gov project](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/engineering).

Within this directory, you will find:

- **MHV landing page flowchart:**  
  [landingpage-flowchart-2025-6-3.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/engineering/landingpage-flowchart-2025-6-3.pdf)  
  Diagram of the My HealtheVet landing page logic.

- **Authorization and Access Control:**  
  [mhv-authorization.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/engineering/mhv-authorization.md)  
  Details on how user permissions and access are managed across MHV features.

- **Home Page Alerts:**  
  [mhv-home-alerts.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/engineering/mhv-home-alerts.md)  
  Documentation on alert messages that are surfaced to users on the My HealtheVet landing page.

- **Access and Visibility Graphs:**  
  [mhv-access-visibility-graphs.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/engineering/mhv-access-visibility-graphs.md)  
  Visualizations and logic for determining what features are visible to which users.

- **Improvement Recommendations:**  
  [improvement-recommendations-2025-05.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/engineering/improvement-recommendations-2025-05.md)  
  Recommended technical improvements for MHV applications to enhance performance and maintainability, based on findings from evaluating a unified My HealtheVet Single Page Application (SPA) approach.

### Application and Shared Function Documentation

Below are the primary applications and shared functions our team is responsible for, with links to their code and documentation:

#### My HealtheVet Landing Page

- **Path:** [vets-website/src/applications/mhv-landing-page](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/mhv-landing-page)
- **Description:** Main entry point for the My HealtheVet experience on VA.gov. Provides Veterans with access to health tools, personalized content, and navigation to health-related features.
- **Key Documentation:** [README](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/mhv-landing-page/README.md)

#### MHV Downtime Shared Function

- **Path:** [vets-website/src/platform/mhv/downtime](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/mhv/downtime)
- **Description:** Shared logic and components for displaying downtime notifications and handling service outages across MHV-related applications.
- **Key Documentation:** [README](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/mhv/downtime/README.md)

#### MHV Secondary Navigation Shared Function

- **Path:** [vets-website/src/platform/mhv/secondary-nav](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/mhv/secondary-nav)
- **Description:** Reusable navigation component for health tools, providing consistent secondary navigation across MHV applications on VA.gov.
- **Key Documentation:** [README](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/mhv/secondary-nav/README.md)

#### MHV Page Not Found Component

- **Path:** [vets-website/src/platform/mhv/components/MhvPageNotFound.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/mhv/components/MhvPageNotFound.jsx)
- **Description:** Reusable component that displays a user-friendly "Page Not Found" message for invalid or unavailable routes within MHV-related applications on VA.gov.
- **Notes:** Ensures consistent error handling and user experience across all MHV applications.

#### MHV Registered User Guard Component

- **Path:** [vets-website/src/platform/mhv/components/MhvRegisteredUserGuard.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/mhv/components/MhvRegisteredUserGuard.jsx)
- **Description:** Higher-order component that restricts access to certain MHV applications, ensuring only identity-verified and registered My HealtheVet users can view protected health tools content.
- **Notes:** Implements route guard logic to ensure users meet a base level of authorization—specifically, that their account is identity-verified and they are a registered patient—before granting access to health tools. This includes checking the MHV account state for tools that require this level of access.

#### MHV Supply Reordering Application

- **Path:** [vets-website/src/applications/mhv-supply-reordering](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/mhv-supply-reordering)
- **Description:** Application for Veterans to reorder medical supplies through the My HealtheVet portal on VA.gov. When completed, it will replace the classic Health Care Supply Reordering Application and support integration with future supply ordering enhancements.
- **Key Documentation:** [README](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/mhv-supply-reordering/README.md), [ROES/DALC/MDOT API](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/health-care/mdot-roes-dalc-supply-reordering)

#### Classic Health Care Supply Reordering Application

- **Path:** [vets-website/src/applications/health-care-supply-reordering](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/health-care-supply-reordering)
- **Description:** Application for ordering health care supplies, supporting workflows for Veterans outside of the MHV context. It will be replaced by the above MHV Supply Reordering Application.
- **Key Documentation:** [README](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/health-care-supply-reordering/README.md)

### Analytics

- [DataDog MHV on VA.gov Dashboard](https://vagov.ddog-gov.com/dashboard/e4a-257-6wa/mhv-on-vagov?fromUser=false&refresh_mode=sliding&from_ts=1748301300955&to_ts=1748906100955&live=true)
- [DataDog MHV-on-VA.gov RUM Dashboard](https://vagov.ddog-gov.com/dashboard/hzz-d8e-79j/mhv-on-vagov-integration-rum?fromUser=false&refresh_mode=sliding&from_ts=1748902543797&to_ts=1748906143797&live=true)
- [DataDog Medical supply reordering Dashboard](https://vagov.ddog-gov.com/dashboard/nfr-cy2-8vq/medical-supply-reordering?fromUser=false&refresh_mode=sliding&from_ts=1748301126073&to_ts=1748905926073&live=true)
- [GA4 Dashboards](https://analytics.google.com/analytics/web/#/p419143770/reports/intelligenthome)

## <a name="qa"></a>Quality Assurance<be>

You will want to verify and validate your product in one of the standard Platform environments.

Please see [developer docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) to learn more about quality assurance. 

The staging environment (https://staging.va.gov/) is an essential tool to review work by teams. You can see a [list of staging credentials in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/15c8f93da2a19bbe38705cfbde1179a6c36e25a8/Administrative/vagov-users/mvi-staging-users.csv#L18) that allows you to sign in to https://staging.va.gov to review work. 

### Health related staging users

* [Secure Messages](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/sm/test-accounts.md)
* [Medications](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/medications/test-accounts.md)
* [Medical records](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/mr/test-accounts.md)
* [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)
