# Cypress CI/CD test-selection: Proof of Concept

Cypress tests can be selected programmatically in CI/CD pipelines, so that a
subset of test-suites (specs) can be auto-run for frequent [PR-triggered]
deployments, and all can be auto-run for daily deployments / releases.

## Spec-files management

To enable programmatic-selection of specs, we have several options to
re-organize our Cypress spec-files:

- rename always-run spec-files -- e.g., `...cypress.always.spec.js`
- move always-run spec-files to a subfolder -- e.g.,
  `.../tests/e2e/always/*.cypress.spec.js`
- rename nightly-run spec-files -- e.g., `...cypress.nightly.spec.js`
- move nightly-run spec-files to a subfolder -- e.g.,
  `.../tests/e2e/nightly/*.cypress.spec.js`

## CI/CD Triggers

Once spec-files are organized to support programmatic-selection, we can
update/create **Github-Actions workflow**(s) to add a separate schedule or
release trigger for running all specs, leveraging
[Cypress GitHub Action](https://github.com/cypress-io/github-action)'s `spec`
property:

- For PR-triggered runs [some specs]:

  ```yaml
  ...
  on:
    pull_request:
      branches:
        - main  # just in case we have PRs into other branches
  jobs:
    ...
    cypress-run:
      name: Cypress run
      runs-on: ubuntu-20.04
      steps:
        ...
        - name: Cypress run
          uses: cypress-io/github-action@v2
          with:
            ...
            spec: **/*.cypress.always.spec.js
  ...
  ```

- For nightly, scheduled runs [ALL specs]:

  ```yaml
  ...
  on:
    schedule:
      - cron: '0 0 * * *'  # every day at midnight [only runs on default (main) branch]
    ...
    cypress-run:
      name: Cypress run
      runs-on: ubuntu-20.04
      steps:
        ...
        - name: Cypress run
          uses: cypress-io/github-action@v2
          with:
            ...
            spec: [**/*.cypress.always.spec.js, **/*.cypress.spec.js]
  ...
  ```

- For release-triggered runs [ALL specs]:

  ```yaml
  ...
  on:
    release: # releases are always on default (main) branch
      types: [created]
    ...
    cypress-run:
      name: Cypress run
      runs-on: ubuntu-20.04
      steps:
        ...
        - name: Cypress run
          uses: cypress-io/github-action@v2
          with:
            ...
            spec: [**/*.cypress.always.spec.js, **/*.cypress.spec.js]
  ...
  ```
