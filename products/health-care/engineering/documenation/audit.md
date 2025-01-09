# Documentation audit Scope of Work

The primary objective is to produce standard, long-living documentation for all APIs that power MVH on va.gov, including the following APIs:

  Medical Records
  Secure Messaging
  Medications
  Account Activity Log
  Session API

These documents should all exist in the same spot to be easily searched and shared.

This should reflect what is currently being developed and how the team operates. This is not an exercise in iterating on the current process but a documentation of where we are today. We accept that some of these documents need to be created and/or updated. There is also a real chance that a bunch of these exist, but they are not easily findable. This will be a cross-team effort to create and align the documentation.

## The Tickets Needed for this PI

- [SPIKE] Audit the current documentation, including seeing what is already created and what needs to be updated and then move to a centralized location
- [DOCUMENTATION] Create what is missing
- [DOCUMENTATION] Update if any documents are out of date

## Required Documentation

- Technical Diagrams and Documentation:
  - **Code Owners**: Who owns it;
  - **Architecture Diagrams:** Preferably in C4 model style or another clear format, illustrating system design, tech stack (with versions), and external dependencies.
  - **Database Diagrams:** Visual representation of database architecture and relationships.
  - **Sequence Diagrams:** for core features, detailing both happy path and failure points.
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

All documentation should follow the guidelines established by the Office of the CTO Engineering team and be structured following the standards set for VA.gov documentation. The final deliverables must be uploaded to the MHV Developer Documentation repository. An OCTO engineer should approve and review all documents early and often.

## Where and how to store

- All documents should live in the developer docs repo: <https://github.com/department-of-veterans-affairs/mhv-developer-docs>. We will create a subfolder per API under a `documentation` folder. The artifacts created should live in:
  - `/technical-documentation/secure-messaging`
  - `/technical-documentation/medical-records`
  - `/technical-documentation/medications`
  - etc...
- Beyond being in the API folder, the structure is up to the team. This main goal to get all things together in one place and create was missing
- All documents should be Github flavor markdown.
  - diagrams should be embedded images or using [mermaid](https://mermaid.js.org/)
