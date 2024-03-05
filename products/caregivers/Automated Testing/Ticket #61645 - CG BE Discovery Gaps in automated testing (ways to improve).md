# Issue #61645: Discovery For Gaps in Automated Testing/Ways to Improve

## lib/pdf_fill/forms/va1010cg.rb
- **Current coverage** - We have test cases that cover the `merge_primary_caregiver_has_health_insurance_helper` method for when `value` is `true`, but not when it’s `false` or something other than `true` or `false`.

- **Potential improvement** - We could write unit tests for the `merge_fields` method that expect the `hasHealthInsurance` key to have the correct value for the `@form_data` instance variable.
## app/services/form1010cg/service.rb
- **Current coverage** - We cover all of the conditionals inside of the `icn_for` method, but we don’t cover when the response includes an error. This in turn prevents us from being able to test the last line of code which sets the `@cache[:icns][form_subject]` hash key to `"NOT FOUND"`.

- **Potential improvement** - We could write a unit test inside of `spec/services/form1010cg/service_spec.rb` and arrange it in a way that injects an error into the `response` value.
## app/controllers/v0/caregivers_assistance_claims_controller.rb
- **Current coverage** - We cover most of the private methods via integration tests, but there are a couple we’re not covering. Specifically `backend_service_outage` and `record_submission_success`.

- **Potential improvement** - We could write a request/controller tests for the `backend_service_outage` method. We could try to stub a request that includes `Form1010cg::Service::InvalidVeteranStatus`, which will subsequently trigger the `rescue_from` method on line `14`. Regarding `record_submission_success`, I couldn’t find any usages for it. Perhaps it can be removed.
