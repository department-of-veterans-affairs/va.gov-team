# [WIP] Documentation Standards

A place to store requirements (not the actual documents). For all health related APIs and apps on va.gov. If the app on MHV on va.gov, this documentation should be created.

Yes, documentation can get stale, but as part of promoting `software as a craft`, documentation should be treated a first class citizen

## Required Documentation

- Technical Diagrams and Documentation:
  - **README**: A detailed README with who owns the code, relevant links and information to give engineers a place to get started.
  - **Architecture Diagrams:** Preferably in C4 model style or another clear format, illustrating system design, tech stack (with versions), and external dependencies.
  - **Database Diagrams:** Visual representation of database architecture and relationships.
  - **Sequence Diagrams:** for core features, detailing how data and/or users navigate both happy path and failure points.
  - **Network Diagram:** Comprehensive diagram of the production environment's network architecture.
  - **OpenAPI (Swagger) Documentation:** Detailed API documentation for all APIs consumed by VA.gov.
  - **CI/CD Pipeline Documentation:**
        Overview of the CI/CD pipeline process.
        Step-by-step guide for deploying code to production with and without CD automation.

- Operation Guides:
  - **Feature Release Process Guide:**
        End-to-end workflow for releasing new features, including ticket creation, PR, staging, production deployment, rollout, and monitoring.
  - **Developer Environment Setup Guide:**
        Instructions for setting up a development environment as independent of specific individuals as possible.
        Bonus: Include instructions for running the application in a container (e.g., Docker) and locally.
  - **Troubleshooting Guide:**
        A detailed process for diagnosing and resolving issues, including:
            Overview of monitoring tools and their use for everyday triage tasks.
            Guidance on accessing logs, stack traces, and system health checks.
            Contact information for external system dependency issues.
    **Disaster Recovery Documentation:**
        Steps for setting up a new MHV API *production* environment from scratch.

## Quality and Compliance Standards

All documentation should follow the guidelines established by the Office of the CTO Engineering team and be structured following the standards set for VA.gov documentation. The final deliverables must be uploaded to the MHV Developer Documentation repository (see "Where and how to store" section below for URL). An OCTO engineer should approve and review all documents early and often.

For Diagrams, look at the [diagram standards](./document-standards.md).

For operation guide, look at the [operations standards](./operations-guide-standards.md).

## Food for thought

- Share early and often. Involve as many teammates as possible
- Some documentation is better than no documentation, as long as its accurate. Don't let perfect be the enemy of done
- Documentation should be used to help fuel discussions and aid in creating a shared understanding. The only good documentation are ones that can and are be referrenced
- Unless noted, in general, documentation is not launch blocking. We are here to deliver working, tested software first and foremost. Documentation is just a main supporting pillar

## Good Samples

... will fill in as we create them
