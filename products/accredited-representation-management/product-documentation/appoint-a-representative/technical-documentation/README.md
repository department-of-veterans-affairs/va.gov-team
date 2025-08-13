# Appoint a Representative - Technical Documentation

This directory contains technical documentation for the Appoint a Representative feature of the Accredited Representation Management (ARM) system. This feature enables Veterans to appoint accredited representatives through VA.gov and stores data in the primary vets-api PostgreSQL database.

## Overview

The Appoint a Representative feature allows Veterans to:
- Search for and select accredited representatives or organizations
- Complete forms 21-22 and 21-22a digitally
- Generate PDFs of their completed forms
- Submit Power of Attorney requests

All data is securely stored in the vets-api PostgreSQL database with proper encryption and access controls.

## Getting Started

For instructions on setting up the Appoint a Representative feature in your local development environment, see the [`vets-website` Appoint README](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/representative-appoint/README.md).

## Documentation Files

### Core Documentation

- **[all-diagrams.md](./all-diagrams.md)** - Central index of all visual diagrams for the Appoint a Representative feature
- **[data-flow.md](./data-flow.md)** - Detailed data flow documentation including database access patterns, audit trails, and security considerations for the PostgreSQL database
- **[product-playbook-incident-response-plan.md](./product-playbook-incident-response-plan.md)** - Comprehensive incident response playbook including team contacts, troubleshooting steps, monitoring tools, and security protocols

### Architecture Diagrams

#### Current Implementation (V2)
- **[images/v2/architecture.png](./images/v2/architecture.png)** - Current system architecture diagram
- **[images/v2/data-flow.png](./images/v2/data-flow.png)** - Current data flow visualization
- **[images/v2/sequence.png](./images/v2/sequence.png)** - Current sequence diagram showing user interactions

#### Legacy Implementation
- **[images/appoint-a-rep-architecture.png](./images/appoint-a-rep-architecture.png)** - Legacy architecture diagram
- **[images/appoint-a-rep-data-flow.png](./images/appoint-a-rep-data-flow.png)** - Legacy data flow diagram
- **[images/appoint-a-rep-sequence.png](./images/appoint-a-rep-sequence.png)** - Legacy sequence diagram

### Original Design Documentation

The `original-recommendation/` directory contains early design proposals and technical specifications:

- **[original-recommendation/poa_request_proposal.md](./original-recommendation/poa_request_proposal.md)** - Original technical proposal for Power of Attorney request storage, including database schema design, encryption strategies, and data retention policies
- **[original-recommendation/data-flow.png](./original-recommendation/data-flow.png)** - Original data flow visualization
- **[original-recommendation/features.png](./original-recommendation/features.png)** - Feature support matrix
- **[original-recommendation/sample-ui.png](./original-recommendation/sample-ui.png)** - Sample user interface mockups

## Database Integration

This system integrates with the **primary vets-api PostgreSQL database** for:

- **Save-in-Progress Forms**: Temporary storage in the `in_progress_forms` table with automatic 60-day purge
- **Power of Attorney Requests**: Secure storage with column-level encryption using KMS
- **Representative Data**: Read-only access to accredited individual and organization data
- **Audit Logging**: Comprehensive audit trails through AWS and Datadog

## Key Technical Features

- **Secure Data Handling**: PII/PHI encrypted in transit and at rest
- **Save-in-Progress**: Form data temporarily stored and automatically purged
- **PDF Generation**: On-demand generation of forms 21-22/21-22a
- **Feature Flags**: Controlled rollout using Flipper features
- **Monitoring**: Full observability through Datadog

## Team Contacts

- **DSVA Product Lead**: Jennifer Bertsch (jennifer.bertsch@va.gov)

**Team Slack**: [#benefits-representation-management](https://dsva.slack.com/archives/C05L6HSJLHM)

## Monitoring and Observability

- **Performance Monitoring**: [Datadog Service - representation-management](https://vagov.ddog-gov.com/apm/services/representation-management/)
- **Custom Dashboard**: [Appoint a Representative Dashboard](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative)

## Security Considerations

- All PII/PHI is encrypted using KMS encryption
- Data is transmitted via HTTPS
- Temporary data storage with automatic purging
- Column-level encryption for searchable fields using blind indexing
- No persistent storage of generated PDFs
- Restricted database access with role-based permissions

For detailed security protocols and incident response procedures, see the [product playbook](./product-playbook-incident-response-plan.md).
