# Security checklist

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

