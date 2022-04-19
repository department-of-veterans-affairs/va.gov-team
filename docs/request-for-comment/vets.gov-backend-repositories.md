# Backend Repositories

| | | | |
| --- | --- | --- | --- |
|**Last Decision Made:**|Yes| **Decision Date:** | 08/04/2016 |
|**Revisit Decision:**| Yes | **Revisit Date:** | 03/2017 |

**Revisit Criteria:** The global nature of having all backend code in one repository continually causes big errors, inhibits scaling and deployment, developers have trouble learning where things code, or new code changes take a prohibitively long time to contribute.

**July 2017 Update:** Having a single backend repository is working well for the team at this point and is allowing consistency in common code and practices. This should be revisited in one year (July 2018) to determine if this is still the case. 

**Decision Makers:** Vets.gov Engineering Team

## Summary

All Vets.gov backend code goes into the [vets.gov-api](https://github.com/department-of-veterans-affairs/vets-api) monolithic repository. This includes Vets.gov APIs, connectors to VA legacy APIs, queuing mechanisms, and queue task runners.

## Why a Monolithic Repo?

- Best practices codified in one place
- Easier code sharing and collaboration across projects
- Lower maintenance burden for DevOps (less to deploy)
- Regular CI builds ensure Linting and security scans on dependencies (i.e. things don't sit stale)
- Discourages "bit rot"
- Unified version for the app and for dependencies

## What were arguments against this? (Microservice repos)

- Easier to update dependencies
- Easier to use multiple technology stacks
- More flexible team structure (due to enablement of multiple tech stacks)

Things that went against the microservice approach are reason for a monolithic repo, but especially:

- Microservices require more management overhead for versioning, deployment, and keeping in sync with each other
  - We don't have enough people to manage this
- New project churn. For each new project, folks have to start fresh and re-learn getting started lessons.

While monolithic and microservice repos are not exact opposites, many of the pro's/con's can be seen as two sides of the same coin. Stated more clearly: some folks may view one approach's pro's as a con, and vice versa. This especially makes this decision ripe for re-evaluation in the future should the revisit criteria be met.
