# Documentation audit Scope of Work

The primary objective is to produce standard documentation for the following APIs:

    Medical Records
    Secure Messaging
    Medications

These diagrams should include Oracle Health integrations. Even if they are still in development.

## The Tickets Needed for this PI

- [SPIKE] Audit the current documentation and move to a centralized location
- [DOCUMENTATION] Create what is missing
- [DOCUMENTATION] Update if any documents are out of date

## Required Documentation

- Technical Diagrams and Documentation:
  - **Architecture Diagrams:** Preferably in C4 model style, or another clear format, illustrating system design, tech stack (with versions), and external dependencies.
  - **Database Diagrams:** Visual representation of database architecture and relationships.
  - **Sequence Diagrams:** Diagrams for core features, detailing both happy path and failure points in the process.
  - **Network Diagram:** Comprehensive diagram of the production environment's network architecture.
  - **OpenAPI (Swagger) Documentation:** Detailed API documentation for all APIs consumed by VA.gov.
  - **CI/CD Pipeline Documentation:**
        Overview of the CI/CD pipeline process.
        Step-by-step guide for deploying code to production with and without CD automation.

- Operation Guides:
  - **Feature Release Process Guide:**
        End-to-end workflow for releasing new features, including ticket creation, PR, staging, production deployment, rollout, and monitoring.
  - **Developer Environment Setup Guide:**
        Instructions for setting up a development environment that is as independent of specific individuals as possible.
        Bonus: Include instructions for running the application in a container (e.g., Docker) and locally.
  - **Troubleshooting Guide:**
        A detailed process for diagnosing and resolving issues, including:
            Overview of monitoring tools and their use for common triage tasks.
            Guidance on accessing logs, stack traces, and system health checks.
            Contact information for external system dependency issues.
    **Disaster Recovery Documentation:**
        Steps for setting up a new MHV API *production* environment from scratch.

## Quality and Compliance Standards

All documentation should follow the guidelines established by the Office of the CTO Engineering team and be structured in accordance with the standards set for VA.gov documentation. The final deliverables must be uploaded to the MHV Developer Documentation repository.
