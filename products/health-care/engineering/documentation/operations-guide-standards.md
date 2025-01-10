# [WIP] Detailed Specifications for Operation Guides

## Feature Release Process Guide

This guide outlines the complete workflow for releasing new features, ensuring consistency, reliability, and minimal downtime. The following detailed steps are minimally what should be included:

- Ticket Creation:
  - Specify the ticketing system to be used (e.g., Jira).
  - Define ticket types, required fields, and labeling conventions.
  - Provide guidelines on linking tickets to PRs and deployment tasks.
  - Define how tickets get groomed and refined to have acceptance criteria.

- Code Development
  - Best practices for writing code and tests.
  - Definition of Done (DoD) criteria, including unit/integration test coverage.

- Pull Request (PR) Creation and Review:
  - Standards for PR descriptions (including ticket ID, purpose, changes made, and testing notes).
  - Code review process and approval requirements (e.g., minimum number of reviewers).

- Staging Deployment:
  - Steps for deploying the feature into each lower environment
  - Verification checklist for staging (e.g., functionality testing, regression checks).

- Production Deployment:
  - Steps for deploying a feature into production
  - Approval and communication process before production release.
  - Define common smoke tests run on production to validate deployment

- Rollout:
  - Guidelines for feature flag usage(if applicable).
  - Monitoring the initial phase of the rollout for issues.

- Monitoring:
  - Tools and metrics to monitor post-release (e.g., error rates, performance, user feedback).
  - Escalation process for rollback or hotfix deployment in case of issues.

## Developer Environment Setup Guide

This guide provides detailed instructions to ensure developers can set up and run the application with minimal external dependencies. The specifications include:

- Local Development Environment Setup:
  - List of required tools and versions (e.g., IDE, SDKs, libraries).
  - Configuration steps for the local environment (e.g., environment variables, database setup).
  - Common issues during setup and their resolutions.

- Running the Application Locally:
  - Step-by-step instructions for starting the application (e.g., starting backend services, connecting to a local database).
  - How to get local data set up.
  - Steps to verify that the environment is running correctly.

- Containerized Development Setup:
  - Instructions for running the application in a containerized environment using Docker.
  - Dockerfile and docker-compose configuration details.
  - Steps to verify that the containerized environment is running correctly.

## Production Troubleshooting Guide

This guide helps developers and operators quickly diagnose and resolve issues in the application. The following detailed sections are included:

- Monitoring Tools Overview:
  - List of monitoring tools in use (e.g., Datadog, New Relic, ELK stack).
  - Instructions on how to access and interpret key metrics.

- Common Triage Tasks:
  - Checklist for initial triage (e.g., checking system health, verifying network connectivity).
  - Common issues and their typical causes (e.g., high memory usage, database latency).

- Accessing Logs and Stack Traces:
  - Locations and formats of logs.
  - Steps for retrieving and analyzing stack traces.

- System Health Checks:
  - Procedures for performing health checks on critical services.
  - Steps for verifying API availability and correctness.

- Escalation Process:
  - Contact information for teams responsible for external dependencies.
  - Guidelines on when and how to escalate issues.

## Disaster Recovery Documentation

This guide provides a step-by-step procedure for setting up a new production environment for the MHV API ecosystem from scratch. The specifications include:

- Pre-Requisites:
  - List of required infrastructure components (e.g., cloud provider accounts, VPC, load balancers).
  - Required credentials and permissions.

- Environment Setup Steps:
  - Detailed steps for provisioning infrastructure (e.g., using Terraform, CloudFormation).
  - Configuration of key services (e.g., databases, caching layers).
  - Steps for restoring databases and other production data from backups

- Application Deployment:
  - Steps for deploying the application, including necessary configurations.
  - Verification of successful deployment (e.g., smoke tests).

- Post-Setup Verification:
  - Checklist for verifying the health of the environment (e.g., API endpoints, database connectivity).
  - Steps for load testing to ensure the environment can handle expected traffic.
