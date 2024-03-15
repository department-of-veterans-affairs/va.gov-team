# Identity Dashboard - Stacks

Initial proposal of the stacks for the Identity Dashboard and how we will leverage them for testing.

## Stack Description

- `Production`
    - Deploy will happen once a day
    - Sign in Service Client Config
        - Can edit Client Config on Sign in Service Production
        - Can edit Client Config on Sign in Service Staging
- `Staging`
    - Comms with external services is enabled (on their respective staging stacks)
    - Sign in Service Client Config
        - Can edit Client Config on Sign in Service Staging
- `Development`
    - Comms with external services is enabled (on their respective development stacks)
    - Sign in Service Client Config
        - Can edit Client Config on Sign in Service Development
- `Test-Integration`
    - Subset of tests marked as ‘integration’
    - Comms with external Services is enabled
    - Continuous Integration uses this stack for integration tests
- `Test`
    - No comms with external services, all is mocked
    - Continuous Integration uses this stack for unit tests
- `Localhost`
    - No comms with external services, all is mocked
    - Developer PRs based off work from this stack
- **NOTE**
    - Sign in Service Staging is currently a weird stack
        - Once Sign in Service is moved out of `vets-api`
            - Clients setting a ‘production’ config will edit a Sign in Service production `ClientConfig`
            - Clients setting a ‘sandbox’ config will edit a Sign in Service production-sandbox `ClientConfig`
            - Clients setting a config in the Identity Dashboard `Staging` stack will edit a Sign in Service staging `ClientConfig`

## **Git Flows**

- `production`
    - tracks the `main` branch
    - deploys the latest `main` when daily deploy occurs
- `staging`
    - tracks the `main` branch
    - deploys the latest `main` every time `main` changes
    - `test-integration`
        - tracks the specific branch of the PR for the continuous integration run this is part of
- `development`
    - tracks the `development` branch
    - deploys the latest `development` every time `development` changes
- `test`
    - tracks the specific branch of the PR for the continuous integration run this is part of
- `localhost`
    - developers create a branch based off of `main`

## **Development Process**

- Developer checks out `main` on `localhost` stack
- Developer creates a branch for their feature, `branch-a`
- Developer creates a PR tracking their feature branch, `branch-a`
- Unit tests, Integration tests are run as Continuous Integration based off feature branch, `branch-a`
- PR passes checks
    - At least one other developer approves PR
    - Continuous Integration tests pass
- `branch-a` is merged into `development` branch
- `Development` stack deploys
- Developer tests changes on `Development` stack, confirms changes
- `branch-a` is merged into `main` branch
- `Staging` stack deploys
- Developer tests changes on `Staging` stack, confirms changes
- At specific time of day, `Production` stack deploy
- Developer confirms changes on `Production` stack

## Questions:

1. Is `development` branch regularly rebased with `main` to keep any discrepancies that come up smoothed out?
    1. Yeah, that’s a downside to this setup 4 sure, someone would have to be responsible for the ongoing maintenance of `development` and making sure it doesn’t diverge from `main` too much. Of course, the alternate is the ‘preview environment’ setup that `vets-api` is working towards but that has it’s own downsides
2. Can we deploy to prod the moment the second merge is complete?
    1. We likely could do this
    2. Deploy to staging, if tests pass then it goes to prod
3. Why staging?
    1. To ensure merge conflicts didn’t occur during the process and final testing
4. Does this introduce too much overhead?
    1. We will monitor

Notes:

- Github has a new feature called environments
    - this may allow for a branch to be deployed to dev then an additional approval to go to prod
    - Need to look into merging queues
- This approach would allow for us to get rid of preview environments. Dev would act as this now.
- Someone has to be in charge of testing the feature which then allows for merging to main which goes to prod
    - A QA team would normally be in charge of doing this
- The PR must be approved before its deployed into the dev stack
- New feature testing is done in staging
