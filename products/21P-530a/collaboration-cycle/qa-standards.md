# QA Standards

For artifacts demonstrationg QA Standards have been met.

View platform docs [QA Standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards) for guidance on how to complete

Don't forget to update the [collab cycle tikcet](https://github.com/department-of-veterans-affairs/va.gov-team/issues/121310)

## Regression test plan
The forms we are introducing are brand new to va.gov

## Test plan

## Tracability reports

## E2E test participation

## Unit test coverage
### 530a
<img width="4958" height="2596" alt="530a-unit-test-coverage" src="https://github.com/user-attachments/assets/8e545345-1ae7-412f-b9fa-3696e657c04e" />

### 0779
<img width="1391" height="1293" alt="image" src="https://github.com/user-attachments/assets/5af7e361-7867-4a6f-8f26-8e20526b2943" />
<img width="1379" height="576" alt="image" src="https://github.com/user-attachments/assets/9f3ee30a-8415-4aac-b0db-3c1f8d286319" />

## Endpoint monitoring 

### Form 21P-530a

See [Form 21P-530a Endpoint Monitoring documentation](./endpoint-monitoring.md) for complete details.

**Summary:** Form 21P-530a uses asynchronous submission via the shared `Lighthouse::SubmitBenefitsIntakeClaim` Sidekiq job. Comprehensive monitoring includes:
- 3 form-specific monitors (traffic, PDF failures, 5xx errors)
- 3 shared infrastructure monitors (high error rate, silent failures, queue depth)
- Unified Datadog dashboard with all Aquia forms

### Form 21-0779

See [Form 21-0779 Endpoint Monitoring documentation](../21-0779/collaboration-cycle/endpoint-monitoring.md) for complete details.

**Summary:** Form 21-0779 uses asynchronous submission via the shared `Lighthouse::SubmitBenefitsIntakeClaim` Sidekiq job. Monitoring is identical to Form 21P-530a, as both forms share the same infrastructure.

## Logging silent failures

### Both Forms (21P-530a & 21-0779)

See [QA7 Silent Failures Analysis](./qa7-silent-failures.md) for complete details covering both forms.

**Summary:** QA7 applies to both forms as they use asynchronous submission processing.

**Key Points:**
- Forms use shared Sidekiq job (`Lighthouse::SubmitBenefitsIntakeClaim`) with ~22 VA.gov forms
- Shared job currently lacks ZeroSilentFailures monitoring (systemic platform issue)
- **Strong mitigation in place:**
  - ✅ QA6 monitoring alerts team within 10 minutes
  - ✅ FormSubmissionAttempt tracking for manual remediation
  - ✅ Lighthouse API >99.5% reliable
  - ✅ Documented incident response procedures
- **Post-Launch Plan:** Team commits to platform-wide fix benefiting all 22 forms

**Individual Form Details:**
- [Form 21P-530a QA7 Analysis](./qa7-silent-failures.md)
- [Form 21-0779 QA7 Analysis](../21-0779/collaboration-cycle/qa7-silent-failures.md)

## PDF form version validation
