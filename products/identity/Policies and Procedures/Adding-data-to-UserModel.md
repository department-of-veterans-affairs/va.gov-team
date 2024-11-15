# Policy: Separation of Concerns for User Data

## Purpose
To maintain a scalable, efficient, and maintainable architecture, this policy outlines guidelines for handling user data. Specifically, it aims to prevent unnecessary additions to the UserModel by promoting the creation of new endpoints and tables.

## Scope
This policy applies to all current and future solutions working in the UserModel of vets-api

## Principles

1. Separation of Concerns: Each endpoint/table should have a single, well-defined responsibility.
2. Data Minimization: Only store and retrieve necessary data.
3. Scalability: Design for future growth.

## Guidelines

Before adding new data to the UserModel the following criteria must be met:
- App Teams must provide a clear reason for the addition of new data to the UserModel, specifically why can't this be handled in a different model
- App Teams must have considered all available alternatives
- App Teams must have consulted with OCTO Identity for review and approval

### Recommended alternatives
- Create new endpoints and/or new tables

## Exceptions
Exceptions will be made on a case-by-case basis by OCTO Identity team that meets the following criteria:

- The feature MUST be time-sensitive OR business-critical
- The feature MUST be a temporary accomodation

## Consequences of Non-Adherence
The consequences of not adhering to the following policy has the potential to increase maintenance complexity (technical debt), increase attack surface (reduced security posture), and/or reduce system efficiency (performance).

## Review and Revision
This policy will be reviewed and revised annually or as needed by an OCTO Identity Team.

## Approval:
Approved by Thomas Black, OCTO Identity Product Owner, Nov 2024

## Version History:
1.0, 11/15/2024, UserModel policy creation
