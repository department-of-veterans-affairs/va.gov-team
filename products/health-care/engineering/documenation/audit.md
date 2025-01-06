# Audit, Create, Make Discoverable

The core ask:

Audit, create if missing and make discoverable standard documentation.

For the main APIs that support MHV on va.gov

- Medical Records
- Secure Messaging
- Medications

Technical Diagrams and Docs:

- Architecture Diagrams. Preferably C4 style, but a diagram to map out how the system is designed
  - with tech stacks (with versions) and external dependencies
- Database Diagrams
- Sequence diagrams of core features with happy path and failure points through the process
- Full network diagram of the production environment
- OpenAPI Swagger Docs for all APIs va.gov is consuming
- CI/CD pipeline process and guide
  - How to get code in production with CD
  - How to get code in production without CD

Operations guides for:

- Process guide for releasing a new feature. From idea to ticket to PR to staging to production to rollout to monitoring, what is the workflow of a feature
- How to get a developer environment set up.  This should be more as independent from being dependant on specific people as possible.
  - BONUS: These steps should include running the application is a container (such as docker) and locally
- Troubleshooting; How do figure whats going wrong, when things are going wrong. This should include, but not limited to
  - Monitoring tools and how to navigate them to for common triage of problems
  - Where to find logs and stack traces
  - how to check the system health
  - Contacts for external system dependencies issues
- How to set up a brand new MHV API environment (Disaster recovery)

These all should follow standards set by the Office of CTO engineering team and be located in the <https://github.com/department-of-veterans-affairs/mhv-developer-docs> repository

## TODOs

- {OCTO} Establish standards for each doc in the ask
- {OCTO} Determine storage location (github vs confluence)
