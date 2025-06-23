# Architecture Intent Meeting

The Architecture Intent meeting helps your team build a solution that meets VA.gov platform engineering and security standards and lowers the potential for launch-blocking issues later in the development cycle.

## What is the purpose of Architecture Intent meeting?

The Architecture Intent meeting is an informal technical discussion about engineering and security, not a formal presentation.  It provides the OCTO-DE and Platform crews with an early understanding of the product/feature your team wants to build.  It's an opportunity to collaborate and provide feedback on the intended implementation and discover any adjustments needed to meet Platform engineering and security standards.  It helps make sure your code meets user needs within the constraints of the platform you're building on, and it helps connect teams with the information and resources they need to build great things.

## When to schedule an Architecture Intent meeting?

You should schedule an Architecture Intent meeting if any of these apply:

- You have questions about one or more points on the template below.
- You're having trouble locating or getting technical info from other stakeholders or system owners.
- You're launching a new service or major new feature.
- You're using an architecture pattern not currently found on the VA.gov Platform.
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

A [template document in markdown](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/template.md) has been provided with instructions on where to commit your completed checklist.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come ready to ask questions.

- Product description
    + Brief overview of motivation for the change from an engineering & security point of view
    + Link to Collaboration Cycle Request issue
- UX design description
    + For user-facing changes, link to UX prototype or wireframes if available
    + Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
- Frontend changes
    + Identify any significant code changes
    + Identify any new design system components needed or changes to current components
    + Describe any product analytics being gathered
- Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies?
    + Do you need to poll any APIs for status?
    + Are you handling all failure and error cases while in custody of your users's data?
- Internal API changes
    + List new or modified APIs in `vets-api`
    + Are you deprecating or removing any APIs?
    + Do you have API documentation?
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
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted
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
    + Are there any other security concerns about your project that you want to discuss?
    + What [threat modeling][threats] have you done, and how did the results influence your planned architecture?


## Security checklist

This checklist provides a high-level overview of key security requirements expected to be met by all new functionality implemented on the VA.gov Platform. If any of the items on this checklist are unclear to you or you're unsure whether your intended architecture will comply with them, they should be brought up and discussed at the Architecture Intent meeting.

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
        * Note that the [Forms Library][forms] includes support for these data-retention rules.
    + PII and PHI should never be hard-coded in source code or checked into GitHub.
    + Data encryption
        * PII and PHI fields in the database [must be encrypted][API-encryption]. Note that the Forms Library encrypts form data automatically.
        * PII and PHI must be encrypted in transit. This means, primarily, that any network streams, e.g., API calls, over which we exchange PII or PHI must use TLS.
- Authentication and authorization
    + `vets-api` endpoints should use the [authentication][authn] and [authorization][authz] functionality provided by `vets-api`. Please don't roll your own.
    + Static API keys are not allowed for new inbound or outbound system-to-system authenticated integrations. Instead, they must utilize a pattern that complies with OAuth 2.0 JWT authorization standards. See, for example, the Identity team's [Service Account Auth (STS) documentation][sts].
        * New integrations that are not compliant with this requirement require an exemption with an approved justification.
        * For assistance with satisfying this requirement, please consult with the Identity team in [#identity-support](https://dsva.slack.com/archives/CSFV4QTKN).
    + Integration endpoints that use static API key authentication (with an exemption as described above), should support key rotation without downtime. This typically means the endpoint allows multiple keys to be active at the same time, so that the key can be rotated by first adding the new key to the endpoint, then changing the caller to use the new key, then finally removing the old key from the endpoint.
- Secrets should be stored in the AWS SSM Parameter Store as [described in the developer documentation][secrets]. Secrets should _never_ be hard-coded in source code or checked into GitHub.
- TODO: Do we want to talk about internal administration / maintenance pages here? Do any such pages already exist within VA.gov, and are there documented patterns for how they should be implemented, protected from public access, etc.?

## How to schedule the Architecture Intent meeting

Use [Calendly](https://calendly.com/collaboration-cycle/architecture-intent?month=2024-09) to schedule an Architecture Intent touch point.

<!----------------------------------------------------------------------------->

[PII]: https://en.wikipedia.org/wiki/Personal_data
[PHI]: https://en.wikipedia.org/wiki/Protected_health_information
[threats]: https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
[PIL]: https://depo-platform-documentation.scrollhelp.site/developer-docs/personal-identifiable-information-pii-guidelines#PersonalIdentifiableInformation(PII)guidelines-PIIwiththePersonalInformationLog
[ICN]: https://depo-platform-documentation.scrollhelp.site/developer-docs/personal-identifiable-information-pii-guidelines#PersonalIdentifiableInformation(PII)guidelines-NotesandpoliciesregardingICNs
[forms]: https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview
[API-encryption]: https://depo-platform-documentation.scrollhelp.site/developer-docs/data-encryption-in-vets-api
[authn]: https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication
[authz]: https://depo-platform-documentation.scrollhelp.site/developer-docs/authorization
[sts]: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Service%20Account%20Auth%20(STS)
[secrets]: https://depo-platform-documentation.scrollhelp.site/developer-docs/store-a-secret-in-parameter-store
[DI]: https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/design-intent
