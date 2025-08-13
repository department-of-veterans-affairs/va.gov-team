# Find a Representative - Product Documentation

This directory contains comprehensive product documentation for the Find a Representative feature of the Accredited Representation Management (ARM) system. This feature enables Veterans to search for and locate accredited representatives, VSOs, attorneys, and claims agents through VA.gov and relies on data from the primary vets-api PostgreSQL database.

## Overview

The Find a Representative tool allows Veterans to:
- Search for accredited representatives by location and type
- Filter results by representative category (VSO representatives, attorneys, claims agents)
- View representative contact information and associated organizations
- Access representative definitions and guidance
- Use location-based search with distance filtering

All representative data is sourced from OGC databases and stored in the vets-api PostgreSQL database with automated daily updates.

## Getting Started

For instructions on setting up the Find a Representative feature in your local development environment, see the [`vets-website` Find README](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/representative-search/README.md).

## Product Information

### Core Documentation

- **[product-outline-find-a-representative.md](../product-outline-find-a-representative.md)** - Comprehensive product outline including business goals, success metrics, release history, and roadmap
- **[decision-change-log-find-a-representative.md](../decision-change-log-find-a-representative.md)** - Complete chronological log of all product decisions and changes from inception to present
- **[service-map.md](../service-map.md)** - Service dependency map showing integrations with Mapbox, Lighthouse, and OGC systems
- **[how-to-update-representative-contact-information.md](../how-to-update-representative-contact-information.md)** - Process guide for handling representative contact information update requests

### Release Documentation

- **[release-plan-find-a-representative-1.0.md](../release-plan-find-a-representative-1.0.md)** - Original MVP release plan (ultimately resulted in "No Go" due to data accuracy concerns)
- **[release-plan-find-a-representative-2.0.md](../release-plan-find-a-representative-2.0.md)** - Successful v2.0 release plan that launched to 100% of users in March 2024

### Contact Center Support

The `contact-center/` directory contains comprehensive guides for customer support teams:

- **[product-guide-find-a-representative-1.0.docx](../contact-center/product-guide-find-a-representative-1.0.docx)** - Initial contact center guidance
- **[product-guide-find-a-representative-2.0.docx](../contact-center/product-guide-find-a-representative-2.0.docx)** - Updated for v2.0 launch
- **[product-guide-find-a-representative-2.1.docx](../contact-center/product-guide-find-a-representative-2.1.docx)** - Version 2.1 updates
- **[product-guide-find-a-representative-2.2.docx](../contact-center/product-guide-find-a-representative-2.2.docx)** - Version 2.2 updates
- **[product-guide-find-a-representative-2.3.docx](../contact-center/product-guide-find-a-representative-2.3.docx)** - Version 2.3 updates
- **[product-guide-find-a-representative-2.4.docx](../contact-center/product-guide-find-a-representative-2.4.docx)** - Version 2.4 updates
- **[product-guide-find-a-representative-2.5.docx](../contact-center/product-guide-find-a-representative-2.5.docx)** - Latest contact center guidance

### Technical Documentation

This directory contains technical specifications and operational guides:

- **[arm-data-flow.md](./arm-data-flow.md)** - Detailed data flow documentation covering OGC data ingestion, database storage patterns, and PostgreSQL table structures
- **[product-playbook-incident-response-plan.md](./product-playbook-incident-response-plan.md)** - Complete incident response playbook including team contacts, troubleshooting procedures, and monitoring protocols
- **[arm-architecture-diagrams.pdf](./arm-architecture-diagrams.pdf)** - Architecture diagrams showing system components and data flow
- **[far-service-map.png](./far-service-map.png)** - Service dependency diagram showing Find A Rep (FAR) system's integration with three external services: Mapbox (for mapping functionality), Lighthouse (for address validation), and OGC (for representative data source)

## Database Integration

This system integrates with the **primary vets-api PostgreSQL database** for:

- **Representative Data**: Daily automated updates to `veteran_representatives` table from OGC sources
- **Organization Data**: Daily automated updates to `veteran_organizations` table from OGC sources  
- **Address Validation**: Integration with Lighthouse Address Validation API for geocoding
- **Search Indexing**: Optimized database queries for location-based searches

## Data Sources and Processing

- **OGC Daily Feeds**: Automated daily ingestion from `attorneyexcellist.asp`, `caexcellist.asp`, and `orgsexcellist.asp`
- **Manual Excel Updates**: Periodic updates via sanitized Excel files from OGC GCLAWS system
- **Address Validation**: Geocoding via Lighthouse Address Validation API
- **Hard-coded Organization Names**: Curated list of approved VSO organizations

## Key Features

### Current Implementation (v2.0)
- Location-based search with distance filtering (5-200+ miles)
- Representative type filtering (VSO Representatives, Attorneys, Claims Agents)
- Sort by distance or name
- Representative contact information display
- Associated organization information for VSO representatives
- Data accuracy transparency messaging

### Planned Features (v3.0)
- Advanced filtering by VSO association and contact methods
- Individual representative detail pages
- Enhanced search result cognitive load reduction
- Improved scalability for representative information

## Release History

- **v1.0 (MVP)**: "No Go" decision in December 2023 due to ~50% data accuracy concerns
- **v2.0**: Successfully launched to 100% of users on March 13, 2024
- **v3.0**: In planning phase with completed Figma designs ready for user testing

## Team Contacts

- **DSVA Product Lead**: Jennifer Bertsch (jennifer.bertsch@va.gov)

**Team Slack**: [#benefits-representation-management](https://dsva.slack.com/archives/C05L6HSJLHM)

## Monitoring and Analytics

- **Performance Monitoring**: [Datadog Dashboard - ARM: Find a Representative](https://vagov.ddog-gov.com/dashboard/55d-sc2-bxi/arm-find-a-representative)
- **User Analytics**: [Domo Dashboard - Accredited Representation Management](https://va-gov.domo.com/page/1897070864)
- **Error Tracking**: Datadog integration for runtime error monitoring
- **Feature Flags**: Flipper-based feature toggles for controlled rollouts

## Security and Compliance

- **Public Data**: No PII/PHI involved - all representative data is intended for public use
- **Data Sanitization**: Removal of sensitive accreditation details from source files
- **Secure Transfer**: HTTPS encryption for all data transfers
- **Audit Trails**: Git commit history for file changes and database access logging

## Known Issues and Future Improvements

### Known Bugs
- [View current bugs in GitHub project board](https://github.com/orgs/department-of-veterans-affairs/projects/1180/views/41)

### Redirect Goals
Planned redirects from legacy systems once Appoint a Representative exits pilot:
- eBenefits VSO search pages
- OGC Accreditation search pages (pending stakeholder approval)

### Next Steps - v3.0 Development
1. [ARM Research: Find a Representative 3.0](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97783) - User testing validation
2. [ARM Design: Find a Representative 3.0](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98591) - Design finalization
3. [ARM Development: Find a Representative 3.0](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80758) - Implementation

### Future Ideas
Longer term ideas are stored in the [ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf=1&web=1&e=7iFIw0) document.

For detailed technical procedures, security protocols, and incident response information, see the technical documentation files in this directory and the [product playbook](./product-playbook-incident-response-plan.md).