# Representative Status - Product Documentation

This directory contains comprehensive product documentation for the Representative Status feature of the Accredited Representation Management (ARM) system. This feature provides Veterans with visibility into their current representative status through widgets and dedicated pages on VA.gov, utilizing data from the primary vets-api PostgreSQL database and external APIs.

## Overview

The Representative Status feature allows Veterans to:
- View their current Power of Attorney (POA) status across multiple pages on VA.gov
- Understand if they have existing representation before appointing new representatives
- Access detailed representative information including contact details and organization affiliations
- See their status through lightweight widgets or dedicated Profile subpages

The feature integrates with the Lighthouse Benefits Claims API and vets-api PostgreSQL database to provide real-time representative status information.

## Getting Started

For instructions on setting up the Representative Status feature in your local development environment, see the widget code locations in the [`vets-website` accredited-representative README](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/accredited-representative/README.md).

## Where Representative Status Appears

The Representative Status widget and dedicated pages are available on:

1. **[Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)** - Widget display
2. **[Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/)** - Widget display  
3. **[Profile Subpage: Accredited Representative](https://www.va.gov/profile/accredited-representative)** - Dedicated page
4. **[MyVA Dashboard](https://www.va.gov/my-va)** - Link in "Claims and Appeals" section

## Product Information

### Core Documentation

- **[product-outline-representative-status.md](../product-outline-representative-status.md)** - Comprehensive product outline including business goals, user outcomes, success metrics, and complete release history with demo videos
- **[decision-change-log-representative-status.md](../decision-change-log-representative-status.md)** - Chronological log of all product decisions and changes from March 2024 through April 2025, including technical implementations and design updates
- **[service-map.md](../service-map.md)** - Service dependency information and contact details for integrated systems

### Release Documentation

- **[release-plan-representative-status-1.0.md](../release-plan-representative-status-1.0.md)** - Widget MVP release plan that launched to 100% of users on May 20, 2024
- **[release-plan-representative-status-2.0.md](../release-plan-representative-status-2.0.md)** - Profile and MyVA integration release plan that launched to 100% of LOA3 users on June 2, 2025

### Contact Center Support

The `contact-center/` directory contains comprehensive guides for customer support teams:

- **[product-guide-representative-status-1.0.docx](../contact-center/product-guide-representative-status-1.0.docx)** - Initial contact center guidance for v1.0 widget launch
- **[product-guide-representative-status-1.1.docx](../contact-center/product-guide-representative-status-1.1.docx)** - Updated guidance for v1.1 improvements
- **[product-guide-representative-status-2.0.docx](../contact-center/product-guide-representative-status-2.0.docx)** - Guidance covering Profile and MyVA integration features

### Technical Documentation

This directory contains technical specifications and operational guides:

- **[arm-data-flow.md](./arm-data-flow.md)** - Detailed data flow documentation covering Lighthouse Benefits Claims API integration, PostgreSQL database access patterns, and real-time data processing workflows
- **[product-playbook-incident-response-plan.md](./product-playbook-incident-response-plan.md)** - Complete incident response playbook including team contacts, troubleshooting procedures, monitoring protocols, and code repository locations
- **[architecture_diagrams.pdf](./architecture_diagrams.pdf)** - System architecture diagrams showing component relationships and data flow
- **[poa-service-map.png](./poa-service-map.png)** - Service dependency diagram showing POA Widget's integration with four external systems: Lighthouse (for POA data), BGS (Benefits Gateway Service), and CorpDB (Corporate Database) for comprehensive representative information

## Database Integration

This system integrates with the **primary vets-api PostgreSQL database** for:

- **Representative Data**: Read-only access to `veteran_representatives` table for individual representative details
- **Organization Data**: Read-only access to `veteran_organizations` table for VSO information
- **Session Management**: Real-time data retrieval without persistent storage beyond session scope
- **Address Information**: Complete address details including international addresses and contact information
- **Authentication Context**: Integration with user authentication for personalized POA status display

## Key Features

### Widget States (v1.0 & v2.0)
- **Unauthenticated**: Prompt to sign in for personalized status
- **Authenticated, no representative**: Clear indication of no current representation
- **Authenticated, represented by VSO**: VSO name and details display
- **Authenticated, represented by individual**: Individual representative information
- **Error handling**: Graceful error states for API failures (401, 404, 500, 502, 503, 504)

### Technical Improvements
- **Error Rate Reduction**: Frontend helper and Pundit gem implementation to validate user eligibility upfront
- **Enhanced Validation**: Additional checks for ICN and Participant ID (PID) to reduce Lighthouse API errors
- **Consistent UX**: Maintained consistent linking patterns across widget and Profile implementations

## Data Sources and Processing

- **Lighthouse Benefits Claims API**: Primary source for veteran POA status via `/veterans/{veteranId}/power-of-attorney` endpoint
- **PostgreSQL Tables**: Additional representative contact and organization information from `veteran_representatives` and `veteran_organizations`
- **Real-time Processing**: No persistent storage of retrieved data beyond session scope
- **HTTPS Encryption**: All data transmissions secured with HTTPS encryption
- **OAuth 2.0 Security**: API access secured through OAuth 2.0/OpenID Connect with client credentials grant

## Release History

- **v1.0 (Widget MVP)**: Launched May 20, 2024 to 100% of users on Find a Representative and landing pages
- **v2.0 (Profile & MyVA)**: Launched June 2, 2025 to 100% of LOA3 users with dedicated Profile subpage and MyVA integration
- **v2.1 (Planned)**: Focus on reducing error rate below 1%, improving UX for pending requests and error states, addressing known bugs

## Team Contacts

- **DEPO Lead**: Jennifer Bertsch (jennifer.bertsch@va.gov)

**Team Slack**: [#benefits-representation-management](https://dsva.slack.com/archives/C05L6HSJLHM)  
**Error Notifications**: [#benefits-representation-management-notifications](https://dsva.slack.com/archives/C06QG3C318D)

## Monitoring and Analytics

- **Performance Monitoring**: [Datadog Dashboard - ARM: Representative Status (Sitewide)](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh)
- **Profile Integration**: [Datadog Dashboard - Authenticated Experience: Profile](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile)
- **User Analytics**: [Domo Dashboard - Accredited Representation Management](https://va-gov.domo.com/page/1897070864)
- **Error Tracking**: Datadog integration with automated alerts for error rate monitoring
- **API Monitoring**: Lighthouse Benefits Claims API performance and availability tracking

## Security and Compliance

- **Data Security**: Real-time data retrieval with no persistent storage beyond session scope
- **API Security**: OAuth 2.0/OpenID Connect authentication for Lighthouse API access
- **Production Access**: Restricted to VA employees or users with specific VA agreements
- **Audit Trails**: Comprehensive logging through AWS, and Datadog for compliance monitoring
- **Access Controls**: Role-based database access with read-only permissions for widget endpoints
- **HTTPS Encryption**: All data transmissions secured during transit

## Known Issues and Future Improvements

### Current Challenges
- **API Error Rate**: Current error rate above 1% due to Lighthouse Benefits Claims API maintenance and outages
- **UX Improvements**: Need better messaging around pending requests and error states
- **Known Bugs**: [View current bugs in GitHub project board](https://github.com/orgs/department-of-veterans-affairs/projects/1180/views/41)

### Next Steps - v2.1 Development
1. **[ARM Design: Representative Status 2.1](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106743)** - Explore UX improvements for Representative Status
2. **[ARM Development: Representative Status 2.1](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115970)** - Reduce error rate below 1%, address known bugs, implement design updates

### Future Ideas
Longer term ideas are stored in the [ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf1&web=1&e=7iFIw0) document.

## Related Documentation

- **[Representative Status in Profile documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/accredited-representative-status)** - Detailed Profile integration documentation

For detailed technical procedures, security protocols, and incident response information, see the technical documentation files in this directory and the [product playbook](./product-playbook-incident-response-plan.md).