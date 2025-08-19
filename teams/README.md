# Teams

This space is for all teams currently working on and with the VA.gov platform and the VA Health and Benefits mobile application. Teams should utilize this space for team info. However, project-specific documentation should go into /products.

- If you are looking for documentation on VA.gov user-facing products, please see [/products](../products/README.md).
- If you are looking for documentation on the tools and services provided by the platform, please see [VA Platform documentation](https://depo-platform-documentation.scrollhelp.site/).

## Required documentation

- **Team README.md file.** Teams must have a team README.md file. This file is used to produce the new Team and Product Directory and will be enforced upon entry into the Collaboration Cycle. Use the provided [template](team-readme-template.md).
- **Team charter.** Teams may also created a team charter using the provided [team charter template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/team-charter-template.md).

## Current team manifest

Current list of [crews and pods](crews-and-pods.md).

### Digital Experience

#### Veteran-Facing Platforms

- [Design System & Forms Library](teams/digital-experience/design-forms-systems/README.md)

#### To Be Determined (Digital Experience)

- [Analytics and Insights](teams/digital-experience/analytics-and-insights/README.md)
- [Authenticated Experience](teams/digital-experience/authenticated-experience/README.md)
- [Content Management System](teams/digital-experience/cms/README.md)
- [Content and Information Architecture](teams/digital-experience/content-and-information-architecture/README.md)
- [Digital Notifications](teams/digital-experience/digital-notifications/README.md)
- [Financial Management](teams/digital-experience/financial-management/README.md)
- [Governance](teams/digital-experience/governance/README.md)
- [Identity](teams/digital-experience/identity/README.md)
- [Iterate, Innovate, and Run](teams/digital-experience/iterate-innovate-and-run/README.md)
- [Mobile App and Platform](teams/digital-experience/mobile-app-and-platform/README.md)
- [Platform Infrastructure Services](teams/digital-experience/platform-infrastructure-services/README.md)
- [Platform Security](teams/digital-experience/platform-security/README.md)
- [Platform Site Reliability Engineering](teams/digital-experience/platform-sre/README.md)
- [Platform Support](teams/digital-experience/platform-support/README.md)
- [Veteran Support](teams/digital-experience/veteran-support/README.md)

### Benefits Portfolio

#### Accredited Reps Crew

- [Accredited Representation Management](teams/benefits-portfolio/accredited-representation-management/README.md)
- [Accredited Representative Facing 1](teams/benefits-portfolio/accredited-representatitive-facing-1/README.md)
- [Accredited Representative Facing 2](teams/benefits-portfolio/accredited-representatitive-facing-2/README.md)

#### Cross-Benefits Crew

- [Benefits Management Tools 1](teams/benefits-portfolio/benefits-management-tools-1/README.md)
- [Benefits Management Tools 3](teams/benefits-portfolio/benefits-management-tools-3/README.md)
- [Decision Reviews](teams/benefits-portfolio/decision-reviews/README.md)
- [Dependents Management](teams/benefits-portfolio/dependents-management/README.md)
- [Employee Experience](teams/benefits-portfolio/employee-experience/README.md)

#### Disability Benefits Crew

- [Conditions](teams/benefits-portfolio/conditions/README.md)
- [Disability Benefits 1](teams/benefits-portfolio/disability-benefits-1/README.md)
- [Disability Benefits 2](teams/benefits-portfolio/disability-benefits-2/README.md)

#### Lifestage Benefits Crew

- [Pension Benefits 1](teams/benefits-portfolio/pension-benefits-1/README.md)
- [Pension Benefits 2](teams/benefits-portfolio/pension-benefits-2/README.md)

#### To Be Determined (Benefits Portfolio)

- [Education Benefits Tools](teams/benefits-portfolio/education-benefits-tools/README.md)
- [Memorials Self-Service](teams/benefits-portfolio/memorials-self-service/README.md)

### Health Portfolio

#### MHV on VA.gov Patient Portal

- [Horizon](teams/health-portfolio/horizon/README.md)
- [Medical Records](teams/health-portfolio/medical-records/README.md)
- [Medications, Medical Devices and Supplies](teams/health-portfolio/medications-medical-devices-supplies/README.md)
- [Messaging](teams/health-portfolio/messaging/README.md)

#### Unified Appointment Experience

- [Hydra](teams/health-portfolio/hydra/README.md)
- [Orion](teams/health-portfolio/orion/README.md)
- [Ursa Minor](teams/health-portfolio/ursa-minor/README.md)

#### Unknown Crew

- [1010 Health Apps](teams/health-portfolio/1010-health-apps/README.md)

## About this manifest

Manifest is a new series of scripts and files that aims to replace the VFS Product Directory and augment parts of Atlas. You can follow along in this [initiative](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59141).

### Problem to be solved

Currently, there are multiple lists of teams:

- [Atlas](https://www.va.gov/atlas/)
- [VFS Product Directory](https://depo-platform-documentation.scrollhelp.site/getting-started/vfs-product-directory)

Unfortunately, neither is complete nor up-to-date. The Platform Services & Governance crew in Digital Experience is working towards a new solution that will use the README.md files for each team in the following portfolio directories:

1. teams/benefits-portfolio
2. teams/digital-experience
3. teams/health-portfolio

Those readme files will be linted upon update to retain the formatting of key sections such as "Team Information". Those files will also point to YAML files for each product that the team owns in [products](../products/). This will in turn allow us to aggregate a list of both teams and products. The goal is to provide a simple way for teams to maintain their own information while still providing the Platform with a source of truth for the teams operating on the platform. Watch this space.

