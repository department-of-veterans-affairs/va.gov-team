# Consumer-driven Contract Testing with Pact

## Problem

We have a gap in integration test coverage between the front-end (FE, or website) and back-end (BE, or API) on VA.gov. There's nothing preventing the FE or BE from independently deploying changes that create bugs due to breaking the integration.

The closest we get to testing the interaction between FE and BE right now is through our existing end-to-end (E2E) tests. While it's important to retain those tests for representing typical UI flows in various VA.gov apps, they merely mock out expected responses from the BE to requests made by the FE. Those mocked responses are not validated against any real responses that the API might produce, so the tests don't really instill confidence in the accuracy of the interaction between FE and BE. The validity of the integration ends up being determined entirely by the test maintainers' own expectations, and the mock responses can be tweaked just to get the tests to pass.

**TL;DR**
1. We don't currently *truly* test the integration between FE and BE.
2. Our E2E tests are not substitutes for integration tests because they mock the API responses.

## Proposed Solution

Having tests that are truly representative of the request-response interaction between the website and API would give us the confidence that we're testing scenarios as realistically as possible.

This is where consumer-driven contract testing (CDCT) comes in. It's a process that codifies the interactions between a consumer (like an app) and provider (like an API) into a contract, or a file that is formatted to represent those interactions. The format for each interaction typically consists of a request and the expected response to it, and as the name suggests, it's the consumer that initially proposes this interaction. In return, the provider verifies this interaction by actually running its own code with the request that is sent, and the result of this verification step determines whether the consumer is good to deploy. The process is designed to facilitate a tighter communication loop between the consumer and provider and to explicitly describe how the consumer interacts with the provider.

The particular CDCT framework that we are experimenting with is [Pact](https://docs.pact.io/). In addition to the process outlined above, it also offers a broker as an intermediary service to handle the communication of publishing a pact (the framework's term for a contract) and publishing the results of the verification.

The following steps are an example to demonstrate the use of Pact. Here, we test the integration of HCA with the `/health_care_application` API endpoint. The next steps would be to try to integrate the process into CI, updating any scripts and configuring settings as necessary.

These PRs can be referenced for any specific notes on running the example:
- [FE changes to generate a pact.](https://github.com/department-of-veterans-affairs/vets-website/pull/10970)
- [BE changes to verify the pact.](https://github.com/department-of-veterans-affairs/vets-api/pull/3244)

### Steps To Run Example

0. Set up the Pact broker and run it locally.

   ```
   git clone git@github.com:pact-foundation/pact-broker-docker.git
   ```
   Add `DISPOSABLE_PSQL: "true"` to the environment variables under `pact_broker` in the `docker-compose.yml`:
   
   ```
   ### docker-compose.yml

   environment:
     DISPOSABLE_PSQL: "true"
     PACT_BROKER_DATABASE_USERNAME: postgres
     PACT_BROKER_DATABASE_PASSWORD: password
     PACT_BROKER_DATABASE_HOST: postgres
     PACT_BROKER_DATABASE_NAME: postgres
     PACT_BROKER_PORT: "9292"
   ```
   
   ```
   docker-compose up
   ```

1. Generate a pact from the FE.

   Check out branch `pact-hca` from `vets-website`.

   ```
   yarn install
   yarn build-webpack
   BUILDTYPE=localhost yarn test:unit src/applications/hca/tests/hca.contract.spec.js --timeout 10000
   yarn pact:publish
   ```
   
   The last command should publish the pact to the broker. You can verify at http://localhost:9292.

2. Verify the pact from the BE.

   Check out `pact` from `vets-api`.
   
   The following steps assume a setup with the Docker configuration. Pointers about differences in setup are mentioned in the PR.

   ```
   docker-compose build
   docker-compose run vets-api rake pact:verify
   ```
   
   The last command should publish the verification the broker. You can verify at http://localhost:9292.

3. Confirm from FE that it is good to deploy.

   ```
   yarn pact:can-i-deploy
   ```
