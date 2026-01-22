# QA Standards
[See 2680 qa-standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/21-2680/collaboration-cycle/qa-standards.md) (collab cycle is for both)

## Endpoint Monitoring

See [Form 21-4192 Endpoint Monitoring documentation](./endpoint-monitoring.md) for complete details.

**Summary:** Form 21-4192 uses asynchronous submission via the shared `Lighthouse::SubmitBenefitsIntakeClaim` Sidekiq job. Comprehensive monitoring includes:
- 3 form-specific monitors (traffic, PDF failures, 5xx errors)
- 3 shared infrastructure monitors (high error rate, silent failures, queue depth)
- Unified Datadog dashboard with all Aquia forms

**QA7 Status:** QA7 applies to Form 21-4192. See [QA7 Silent Failures Analysis](./qa7-silent-failures.md) for complete analysis.

## Logging Silent Failures

See [QA7 Silent Failures Analysis](./qa7-silent-failures.md) for complete details.

**Summary:** Form 21-4192 uses asynchronous submission and is subject to QA7. The shared Sidekiq job used by ~22 forms currently lacks ZSF monitoring (systemic platform issue). Strong mitigation in place via QA6 monitoring (10-minute alert), FormSubmissionAttempt tracking, and documented incident response. Team commits to post-launch platform-wide fix.
