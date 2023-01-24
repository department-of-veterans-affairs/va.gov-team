# Local testing of @tlei123/vagov-cy-tr-reporter

## Who should read this?

Mainly **TestRail Users** who perform code reviews for vets-website pull requests &mdash; and have already set up Cypress-TestRail integration.

## Why do this?

The custom-reporter package will be updated periodically, either with bug-fixes or with refactors to stay compatible with Cypress. Whenever a vets-website pull request is opened for an update, code reviewers are advised to perform local testing.

## Instructions

**NOTE**: You must already have your Cypress-TestRail integration set up.

The procedure below is the same as before [using cypress-testrail-reporter or cy-tr-reporter package].

1. In your local vets-website project, checkout the PR&rsquo;s feature-branch: `git checkout origin/[feature branch]`
2. Install the updated custom-reporter package: `yarn install`
3. Start vets-website: `yarn watch`
4. In a separate terminal/shell [at your project-root], set the common environment variables for your TestRail credentials and your TestRail project & suite: `export TR_USER=[username] TR_API_KEY=[api key] TR_PROJECTID=[project id] TR_SUITEID=[suite id] TR_INCLUDE_ALL=false TR_FILTER=""`
5. Set specific environment variables for the Cypress spec you&rsquo;ll be running [see subsection below for examples]: `export TR_GROUPID=[group id for spec] TR_RUN_NAME=[run name (no spaces)]`
6. Start the Cypress-TestRail run: `yarn cy:testrail-run --spec "**/[your spec filename]"` [If there&rsquo;re 2 or more spec files with the same name, specify more path-segments to your specific spec-file.]
7. If everything goes well, you should see a link to your TestRail run in your terminal output when the Node processes finish. Navigate there to verify your posted TestRail run & results. [If you're using your editor's integrated terminal, it may also have made this link ctrl- or cmd-clickable]

### Example spec-specific commands for PTEMS-Acct-Exp project

**If you have access to PTEMS-Acct-Exp project** in TestRail [`export TR_PROJECTID=4 TR_SUITEID=5`], then you can run any of the following already-integrated Cypress specs:

- **src/applications/personalization/dashboard/e2e/appointments.cypress.spec.js**:

  ```shell
  export TR_GROUPID=4033 TR_RUN_NAME=MyVA-e2e-Appts-vctr
  yarn cy:testrail-run --spec "**/appointments.cypress.spec.js"
  ```

- **src/applications/personalization/dashboard/e2e/appointments-error.cypress.spec.js**:

  ```shell
  export TR_GROUPID=4034 TR_RUN_NAME=MyVA-e2e-ApptsError-vctr
  yarn cy:testrail-run --spec "**/e2e/appointments-error.cypress.spec.js"
  ```

- **src/applications/personalization/dashboard/e2e/benefit-payments-and-debt.cypress.spec.js**:

  ```shell
  export TR_GROUPID=3376 TR_RUN_NAME=MyVA-e2e-PmtsDebts-vctr
  yarn cy:testrail-run --spec "**/benefit-payments-and-debt.cypress.spec.js"
  ```

- **src/applications/personalization/dashboard/e2e/benefits-of-interest.cypress.spec.js**:

  ```shell
  export TR_GROUPID=4072 TR_RUN_NAME=MyVA-e2e-Benefits-vctr
  yarn cy:testrail-run --spec "**/benefits-of-interest.cypress.spec.js"
  ```

## Questions?

If you have any questions, contact Tze Lei, Sr. QA Engineer (VA Applications Shared Support team):

- In Ad Hoc Slack workspace: Tze Lei
- In DSVA Slack workspace: Tze-chiu Lei
- Via email: tze@adhocteam.us
