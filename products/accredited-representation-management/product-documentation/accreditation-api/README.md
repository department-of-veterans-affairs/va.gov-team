# Accreditation API - Integration Documentation

This directory contains documentation for the Accreditation API integration within the Accredited Representation Management (ARM) system. This integration enables direct data synchronization from the OGC GCLAWS (General Counsel Legal Administrative Workstation System) API to the vets-api PostgreSQL database, replacing manual file-based processes.

## Overview

The Accreditation API integration provides:
- Automated daily synchronization of accredited representative data from OGC GCLAWS
- Data processing for attorneys, claims agents, representatives, and organizations
- Address validation through Lighthouse Address Validation API integration
- Modernized data pipeline replacing manual Excel file processing
- Enhanced data accuracy and consistency for Find a Representative and Appoint a Representative features

This integration utilizes the vets-api PostgreSQL database to store processed and validated representative information.

## Project Status

**Current State**: Integration development complete, pending production deployment

**Feature Flag**: `find_a_representative_use_accredited_models` - Currently disabled in production, enabled in staging for testing

## Technical Architecture

### Architecture Diagrams

#### System Architecture
- **[technical-documentation/images/architecture_diagram.png](./technical-documentation/images/architecture_diagram.png)** - System architecture showing vets-API server with Sidekiq workers, daily job scheduling, and integration points with Accreditation API, Slack notifications, Lighthouse Address API, and PostgreSQL database

#### Data Flow Process
- **[technical-documentation/images/data_flow_diagram.png](./technical-documentation/images/data_flow_diagram.png)** - Data flow showing daily job execution, API data fetching for all representative types, PostgreSQL record updates, and monitoring alerts for significant data changes

#### Address Validation Workflow  
- **[technical-documentation/images/accredited_individuals_update_diagram.png](./technical-documentation/images/accredited_individuals_update_diagram.png)** - Address validation workflow showing AccreditedIndividualsUpdate job, Lighthouse Address API integration, and PostgreSQL record updates

#### Detailed Sequence Flow
- **[technical-documentation/images/sequence_diagram.png](./technical-documentation/images/sequence_diagram.png)** - Complete sequence diagram showing the full daily processing cycle from scheduler trigger through API data processing, record comparison, address validation, and database updates

## Database Integration

This system integrates with the **primary vets-api PostgreSQL database** through:

- **AccreditedIndividual Records**: Storage of attorneys, claims agents, and VSO representatives with complete contact and accreditation details
- **AccreditedOrganization Records**: VSO organization information with headquarters and contact data
- **Address Validation**: Integration with Lighthouse Address Validation API for geocoding and address standardization
- **Automated Processing**: Daily Sidekiq background jobs for data synchronization and validation
- **Data Integrity**: Stale data cleanup and record counting with monitoring alerts

## Documentation Files

### Core Documentation

- **[accreditation_api_work_remaining.md](./accreditation_api_work_remaining.md)** - Comprehensive task list detailing remaining work before and after integration, including address validation fixes, staging testing requirements, production deployment steps, and future enhancement opportunities
- **[decision-change-log-accreditation-api.md](./decision-change-log-accreditation-api.md)** - Change log documenting API connectivity issues and data availability challenges encountered during development and testing phases
- **[release-plan-accreditation-api.md](./release-plan-accreditation-api.md)** - Staged rollout plan with feature flag configuration, testing requirements, Go/No-Go criteria, and rollback procedures

### Supporting Documentation

- **[Privacy.Security.Infrastructure.Readiness.Review.for.Accreditation.API.docx](./Privacy.Security.Infrastructure.Readiness.Review.for.Accreditation.API.docx)** - Official privacy and security review documentation for the API integration
- **[Notes from Architecture Intent](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/pull/2300)** - Sensitive architecture planning and design decisions (requires team access)

## Key Benefits

- **Data Accuracy**: Real-time synchronization reduces data staleness and inconsistencies
- **Operational Efficiency**: Eliminates manual Excel file processing and email transfers
- **System Reliability**: Automated validation and monitoring reduce human error
- **Scalability**: API-based architecture supports future enhancements and integrations
- **Security**: Removes manual file handling and improves data security practices

## Team Contacts

**Team**: Accredited Representation Management  
**GitHub Label**: `accredited-representation-management-team`  
**Slack Channel**: `#benefits-representation-management`

For detailed technical implementation, testing procedures, and deployment guidelines, see the [work remaining documentation](./accreditation_api_work_remaining.md) and [release plan](./release-plan-accreditation-api.md).
