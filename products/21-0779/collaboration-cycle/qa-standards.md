# QA Standards
[See 530a qa-standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/21P-530a/collaboration-cycle/qa-standards.md) (collab cycle is for both)

## Endpoint Monitoring

See [Form 21-0779 Endpoint Monitoring documentation](./endpoint-monitoring.md) for complete details.

**Summary:** Form 21-0779 uses asynchronous submission via the shared `Lighthouse::SubmitBenefitsIntakeClaim` Sidekiq job. Comprehensive monitoring includes:
- 3 form-specific monitors (traffic, PDF failures, 5xx errors)
- 3 shared infrastructure monitors (high error rate, silent failures, queue depth)
- Unified Datadog dashboard with all Aquia forms

**QA7 Status:** QA7 applies to Form 21-0779. See [QA7 Silent Failures Analysis](./qa7-silent-failures.md) for form-specific details, and [530a qa-standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/21P-530a/collaboration-cycle/qa-standards.md) for comprehensive analysis covering both 530a and 0779.

## Logging Silent Failures

See [QA7 Silent Failures Analysis](./qa7-silent-failures.md) for details.

**Summary:** Form 21-0779 shares infrastructure with Form 21P-530a. Both use the shared Sidekiq job with ~22 forms. See [Forms 21P-530a & 21-0779 QA7 Analysis](../21P-530a/collaboration-cycle/qa7-silent-failures.md) for complete analysis.
