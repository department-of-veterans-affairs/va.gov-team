# Cypress CI/CD test-selection: Problem statement

Currently, not all Cypress automated E2E test-suites in
[vets-website](https://github.com/department-of-veterans-affairs/vets-website)
are being auto-run in CI/CD pipelines:

- There's **no configuration at the CI/CD level to programmatically select
  Cypress specs** for auto-running. To accelerate dev/staging deployments,
  Engineers have been **hard-coding `.skip` into the spec-files** that they want
  bypassed in CI/CD.
- Out of 140+ spec-files in vets-website, about **16% are skipped**. They're
  **never auto-run in CI/CD** since hard-coded skips can't be overridden via
  configuration/script.
- These skipped specs are also **difficult to run manually** in local
  development environments. Engineers have to delete `.skip` before manually
  running the spec, but remember not to commit the deletion in order to keep the
  spec bypassed in CI/CD.
