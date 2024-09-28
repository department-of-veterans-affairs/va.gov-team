# VA.gov Identity Solution Code Review Policy

## Purpose and Scope

This policy requires that all teams interacting with any code belonging to the OCTO Identity Team, labeled via CODEOWNERS file inside a respective `.github` folder as [`@department-of-veterans-affairs/octo-identity`](https://github.com/orgs/department-of-veterans-affairs/teams/octo-identity), in any VA GitHub repo must have approval from the octo-identity team before merging the code to the main branch. This policy applies to all repositories that publish code to the production version of VA.gov. The purpose of the policy is to minimize the risk of a VA.gov authentication related outage.

## Policy

- All teams that interact with any code labeled via the CODEOWNERS file in the `.github` folder within each VA GitHub repository as belonging to the GitHub team [`@department-of-veterans-affairs/octo-identity`](https://github.com/orgs/department-of-veterans-affairs/teams/octo-identity) must have an approval on any PR from the octo-identity team prior to merging the code to the main branch.
- Exceptions to this policy may be made only when it is determined that Veterans and users of VA.gov are being negatively impacted by the current state of VA.gov. This impact must exceed 1% of users on VA.gov. This approval can only be granted explicitly by the VA.gov System Owner, Chris Johnston, or his official delegate assigned for such purposes of policy exception approval.
- Any official request to review code which falls under this policy must be reviewed by the VA.gov Identity team within one business day (24 hours) unless otherwise explicitly justified as to why this delay must occur. This delay must be approved by the policy approver, Thomas Black.
    - An official must be made via the public [`identity`](https://dsva.slack.com/archives/CSFV4QTKN) slack channel or an email sent to the projects lead engineer, Joe Niquette, joe.niquette at oddball.io.

## Applicability

This policy applies to the following GitHub repositories:

- https://github.com/department-of-veterans-affairs/datadog-fraud-script
- https://github.com/department-of-veterans-affairs/devops
- https://github.com/department-of-veterans-affairs/fwa-dashboard
- https://github.com/department-of-veterans-affairs/identity-dashboard-fe
- https://github.com/department-of-veterans-affairs/identity-datadog
- https://github.com/department-of-veterans-affairs/identity-helm-library
- https://github.com/department-of-veterans-affairs/identity-sdk
- https://github.com/department-of-veterans-affairs/sign-in-service
- https://github.com/department-of-veterans-affairs/sign-in-service-client-sinatra
- https://github.com/department-of-veterans-affairs/sign-in-service-infra
- https://github.com/department-of-veterans-affairs/sign-in-service-rb
- https://github.com/department-of-veterans-affairs/sis-api-helm-charts
- https://github.com/department-of-veterans-affairs/va-identity-dashboard
- https://github.com/department-of-veterans-affairs/vets-api
- https://github.com/department-of-veterans-affairs/vets-website
- https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests

## Approvers

- Thomas Black, VA.gov Identity Product Owner
    - Email: Thomas.black2 at VA.gov
    - Digital Service @ VA Slack: Tom Black

## Policy Contact

- Joe Niquette, VA.gov Identity Lead Engineer, Contractor
    - Email: joe.niquette at oddball.io
    - Digital Service @ VA Slack: Joe Niquette

## Definitions

- CODEOWNERS: A file in a GitHub repository that specifies the individuals or team that are responsible for code in that repository.
- PR: Pull Request, a feature in GitHub that allows developers to collaborate on code changes.
