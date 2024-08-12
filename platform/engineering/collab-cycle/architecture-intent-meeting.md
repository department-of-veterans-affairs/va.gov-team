# Architecture Intent Meeting

__*** DRAFT *** DRAFT *** DRAFT ***__

The Architecture Intent meeting helps your team build a solution that meets Veteran-facing Service Platform (VSP) engineering and security standards and lowers the potential for launch-blocking issues later in the development cycle.

## What is the purpose of Architecture Intent meeting?

The Architecture Intent meeting is less a formal presentation and more of a discussion.  It not only provides OCTO-DE and Platform with an early understanding of the product/feature your team wants to build, but is also an opportunity to collaborate and provide feedback on the intended implementation and surface any adjustments needed to meet VSP engineering and security standards. The focus is on making sure your code meets user needs within the constraints of the platform you're building on.

TODO: emphasize that this is a low stakes, collaborative conversation to help connect eng teams with the information and resources they need to build great things

## When to schedule an Architecture Intent meeting?

You should schedule an Architecture Intent meeting if any of these apply:

- You have questions about one or more points on the template below.
- You're having trouble locating or getting technical info from other stakeholders or system owners.
- You're launching a new service or major new feature.
- You're using an architecture pattern not currently found on the VA.gov platform.
- You plan to use a new technology, library or dependency.
- You're integrating with a new system or API, inside or outside of the VA.
- Your change requires complex coordination across teams or you need support to coordinate across teams.
- You're gathering new Personally Identifiable Information ([PII]) and/or Protected Health Information ([PHI]) or saving PII/PHI in a new place.
- There are cost, performance or security implications to your change.

## Preparing for the Architecture Intent meeting

You should write up your Architecture Intent using the template below.  The Governance Team will need at least **2 business days** to review your materials.

In addition, you should review the security checklist below the template and make note of any items you have questions about so we can discuss them at the Architecture Intent meeting.

## Architecture Intent meeting template

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

TODO: specify format for these docs and where they should live

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come ready to ask questions.

- Product description
    + Brief overview of motivation for the change
    + Link to product document or GitHub issue
- UX design description
    + For user-facing changes, link to UX prototype or wireframes if available
    + Call out any engineering challenges; UX is reviewed in the Design Intent meeting
- Frontend changes
    + Identify any significant code changes
    + Identify any new design system components needed or changes to current components
    + Describe any product analytics being gathered
- Internal API changes
    + List new or modified APIs in `vets-api`
    + Describe expected call patterns
- External API changes
    + List new or modified APIs for upstream or external systems
    + Describe expected call patterns
    + What PII or PHI will be transmitted to/from the external systems?
- Background jobs
    + List any required background processing
    + Describe error and dead letter handling
- Data storage
    + Describe new or modified databases, tables or columns
    + Describe indexes and constraints
    + Identify PII and PHI and where and how it will be stored and processed
- Libraries and dependencies
    + List new or updated dependences
- Metrics, logging, observability, alerting
    + Identify key areas to monitor
- Infrastructure and network changes
    + List any changes or additions
- Test strategy
    + Describe automated, manual and user acceptance test strategy
    + Describe required test data and test user accounts
- Rollout plan
    + List scope of any feature flags
    + Identify other teams to coordinate with
    + Describe rollback plan
- Internal administration tasks
    + What maintenance or administration tasks do you anticipate will need to be performed periodically?
    + Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
- Security
    + What questions do you have regarding items on the security checklist?
    + What [threat modeling][threats] have you done, and how did the results influence your planned architecture?

TODO: provide this checklist as a document template in a separate file

## Security checklist

This checklist provides a high-level overview of key security requirements expected to be met by all new functionality implemented on the VA.gov platform. If any of the items on this checklist are unclear to you or you're unsure whether your intended architecture will comply with them, they should be brought up and discussed at the Architecture Intent meeting.

This checklist is by no means a comprehensive list of all applicable security principles! Engineers building new functionality for VA.gov are expected to have experience with secure web application development principles and techniques and to apply them consistently in their work.

- PII and PHI handling
    + Query parameters in URLs may never contain PII or PHI.
    + Logging
        * Neither PII nor PHI may be logged, except in small quantities for debugging purposes as [described in the developer documentation][PIL].
        * Care must be taken to ensure that no PII or PHI is logged in exceptions.
        * Note that ICNs are considered PII and therefore should not be logged. For more about this, see the [developer documentation][ICN].
        * The contents of free-form text fields filled in by users should not be logged, because there is no way to ensure they do not contain PII or PHI.
        * You should log all significant user actions, including both successful and failed actions, and both read and write operations.
    + Data retention
        * PII and PHI should only be stored persistently when there is a business justification for doing so. Don't retain data you don't need to.
        * PII and PHI can be retained for a maximum of 60 days.
        * However, for forms that are in process (i.e., that a user has started working on but not yet submitted), PII may be retained for as long as the form is still eligible to be completed and submitted. Once the form expires and can no longer be worked on, the 60-day clock starts ticking, though again, ideally we would get rid of the PII sooner than that if there is no longer a business justification to retain it.
        * Once a form has been completed and submitted, the 60-day clock starts when we have received confirmation from the remote system that the submission was successful, though again, getting rid of the PII sooner than that is preferred when possible.
        * Note that the forms system includes support for these data-retention rules.
    + PII and PHI should never be hard-coded in source code or checked into GitHub.
    + Data encryption
        * PII and PHI fields in the database [must be encrypted][API-encryption]. Note that the forms system encrypts form data automatically.
        * PII and PHI must be encrypted in transit. This means, primarily, that any network streams, e.g., API calls, over which we exchange PII or PHI must use TLS.
- Authentication and authorization
    + `vets-api` endpoints should use the [authentication][authn] and [authorization][authz] functionality provided by `vets-api`. Please don't roll your own.
    + TODO: What about endpoints intended to be called by outside systems, e.g., form submission callbacks? What pattern do we expect teams to use for authenticating callers to these endpoints?
    + If you are calling an API endpoint in another system, and it uses a key for authentication, then if at all possible the endpoint should support key rotation without downtime. This typically means the endpoint should allow multiple keys to be active at the same time, so that the key can be rotated by first adding the new key to the endpoint, then changing the key on VA.gov to the new key, and then removing the old key from the endpoint.
    + TODO: If we are going to allow static keys to be used for authenticating `vets-api` endpoints called by other systems (i.e., the TODO above), which is TBD, then the key rotation enjoinder above should apply to those as well.
- Secrets should be stored in the AWS SSM Parameter Store as [described in the developer documentation][secrets]. Secrets should _never_ be hard-coded in source code or checked into GitHub.
- TODO: Do we want to talk about internal administration / maintenance pages here? Do any such pages already exist within VA.gov, and are there documented patterns for how they should be implemented, protected from public access, etc.?

## How to schedule the Architecture Intent meeting

TODO: use [Design Intent][DI] as a template

<!----------------------------------------------------------------------------->

[PII]: https://en.wikipedia.org/wiki/Personal_data
[PHI]: https://en.wikipedia.org/wiki/Protected_health_information
[threats]: https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
[PIL]: https://depo-platform-documentation.scrollhelp.site/developer-docs/personal-identifiable-information-pii-guidelines#PersonalIdentifiableInformation(PII)guidelines-PIIwiththePersonalInformationLog
[ICN]: https://depo-platform-documentation.scrollhelp.site/developer-docs/personal-identifiable-information-pii-guidelines#PersonalIdentifiableInformation(PII)guidelines-NotesandpoliciesregardingICNs
[API-encryption]: https://depo-platform-documentation.scrollhelp.site/developer-docs/data-encryption-in-vets-api
[authn]: https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication
[authz]: https://depo-platform-documentation.scrollhelp.site/developer-docs/authorization
[secrets]: https://depo-platform-documentation.scrollhelp.site/developer-docs/store-a-secret-in-parameter-store
[DI]: https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/design-intent
