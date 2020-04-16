# Integration Testing with Consumer-Driven Contract Tests

**Author:** Eugene Doan  
**Last Updated:** April 16, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Dror Matalon [], Andrew Gunsch [], Rian Fowler [], John Paul Ashenfelter []


## Overview

### Objective

- To identify the need for integration testing as part of VA.gov's automated testing processes.
- To propose consumer-driven contract testing as a solution that meets that need as well as the following metric from the Quality Assurance Surveillance Plan (QASP).

  > Number of top ten VA.gov user experiences, based on unique transactions per month, that have a corresponding **automated end-to-end browser test that exercises multiple pieces of functionality including both FE and BE**.
  > Target: 1.

  *The QASP is a report that measures the performance of the Veteran-Facing Services Platform (VSP) in fulfilling contractual obligations.*
- Goals of this proposal do not include defining or replacing any documentation tools or schema specifications.
- The intended audience are front-end, back-end, and DevOps engineers of the Veteran-Facing Services Platform (VSP) and Veteran-Facing Services (VFS) teams

### Background

For the purposes of this document, integration testing will be defined as **the validation of interactions between front-end (FE) applications and the back-end (BE) API**.

Applications currently lack true integration test coverage.
- The closest we get to integrated testing is with our **existing end-to-end (E2E) tests**. The E2E tests run in [Nightwatch](https://nightwatchjs.org), a Node.js E2E testing framework. They are browser-based tests that simulate user flows in the application being tested.
- **No BE developers or systems have any role in these tests.** Any API responses expected in the course of a test are stubbed in the tests themselves by the FE developer writing the test. Response stubs are managed with a simple stub server that was developed in-house.

There are some problems with relying only on the current set of E2E tests as integration tests.
- **The E2E tests don't actually incorporate the API.** The stubbed responses are not validated and don't necessarily reflect reality, so the tests don't give us confidence that we're testing the right thing.
- FE developers are entirely responsible for coming up with stubbed API responses, but aren't accountable for *validating those responses*.
- Without involving the BE developers maintaining the endpoints, FE developers are **prone to making invalid assumptions** about systems that they don't work on themselves.

There has been at least one incident that revealed the ineffectiveness of the current test strategy in detecting breaking changes from the API. In this case, an API endpoint was modified independently of the form that invoked it, causing the form to break. Tests did not catch this as they were assuming an outdated expected response.

To address the gap in integration testing, the VSP FE Tools team has done some discovery on **consumer-driven contract testing (CDCT)** as a method of integration testing and [evaluated Pact as a CDCT solution](https://github.com/department-of-veterans-affairs/va.gov-team/blob/3a8f4953b5e77edcbd39fd3db073232cdaca0ea0/teams/vsp/teams/tools/frontend/2019-11-13-consumer-driven-contract-testing-with-pact.md).

We also conducted a [testing tools audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/fa7b02be2d7a71821a893a55e61a26ba53f0b770/teams/vsp/teams/tools/frontend/2020-03-31-testing-tools-audit.md#integration-testing) that reiterated the lack of integration testing in our current processes. As part of that audit, Pact is still under consideration as our preferred CDCT solution.

### High Level Design

The design of the integration testing solution will be described in terms of using [Pact, a consumer-driven contract testing framework](https://docs.pact.io/).

This [animated diagram from Pactflow (starting at slide 3)](https://pactflow.io/how-pact-works/#slide-3) illustrates how Pact works.

#### [What Is Contract Testing?](https://docs.pact.io/#what-is-contract-testing)

> **Contract testing is a technique for testing an integration point by checking each application in isolation to ensure the messages it sends or receives conform to a shared understanding that is documented in a "contract".**

> For applications that communicate via HTTP, these "messages" would be the HTTP request and response, and for an application that used queues, this would be the message that goes on the queue.

The contract involves two parties, the **consumer** and **provider**. For our purposes, the FE application is the consumer consuming an endpoint from the provider, which is the API.

In a consumer-driven context, the consumer generates the contract and the provider verifies it.

The process of using Pact can be broken into multiple steps:
1. Consumers run unit tests that test their request and response interactions with the provider's endpoints.
2. The tests generate contracts, also referred to as **pacts** in the Pact framework.
3. The pacts are published to a central location or a broker to be versioned and shared with the provider.
4. The provider verifies the pacts against an actual running instance of itself and validates that the actual response matches the expected response.
5. Results of the verification can be published back to the broker if there is a broker involved.
6. Builds will depend on successful verification results to pass.

## Specifics

### Detailed Design

Pact is language agnostic and has packages for both Node.js and Ruby, so both `vets-website` and `vets-api` both have access to their language-specific implementations of the Pact spec.
- `vets-website` will install the `@pact-foundation/pact` package.
- `vets-api` will install the `pact` gem.

In the context of VA.gov, the contract testing process looks like this:
1. **Contract tests are written for a FE application.** They are written like unit tests with `describe` and `it` blocks and will follow these steps:
   - Start up the mock server from the Pact library. This requires naming the consumer and provider and assigning a port for the server to run.
     ```
     const mockApi = new Pact({
       port: 3000,
       consumer,
       provider,
       spec: 2,
     });

     ```
   - Test each request in its own `describe` block. Further wrap in `context` blocks if necessary to test the same request when there are different BE states.
   - In each `it` block, define the request and response interaction being tested and add them to the mock server (`mockApi.addInteraction({ ... })`).
     This sets up the mock server to accept the specified requests and return the specified expected responses.
     Interactions are defined in objects formatted like so:

     ```
     const interaction = {
       state: 'a single matching result exists',
       uponReceiving: 'a search query',
       withRequest: {
         method: 'GET',
         path: '/v0/search',
         query: { query: 'testing' },
         headers: {
           'X-Key-Inflection': 'camel',
         },
       },
       willRespondWith: {
         status: 200,
         headers: {
           'Content-Type': 'application/json; charset=utf-8',
         },
         body: {
           // The minimum expected response body.
           data: { ... },
           meta: { ... },
         },
       },
     };
     ```
     - **The `state` attribute will be used as a key for the API to set up the corresponding state when verifying the contract.** For example, this might entail spinning up a mock third-party service, seeding the database, or simulating a logged in session.
     - **The body does not need to be comprehensive.** At a minimum, the expected response only needs to define the attributes that are relevant to the test. This means that any extra, unused, or unexpected properties of the response will not break the verification later.
   - Invoke the relevant methods that make the request being tested.
   - Make assertions on the expected response.

   **To reiterate, the tests should focus on the components or functions that make requests to the API.** It's not meaningful to simply test a fetch call to an endpoint.

   There is some boilerplate in declaring the mock server and some `before`/`after`/`afterEach` hooks that perform some Pact-specific ceremony. We could simplify all of that boilerplate by writing a reusable helper function (`contractTest()`) that can be invoked like this:
   ```
   contractTest('VA.gov Search', 'VA.gov API', mockApi => {
     describe('GET /search', () => {
       context('with no results', () => {
         it('responds with success', async () => {
           await mockApi.addInteraction(INTERACTIONS.searchWithNoResults);
           ...
         })
       })
     })
   });
   ```
2. The contract tests will run in CI when FE changes are pushed.
   - **If they pass, they generate pacts in the form of JSON files in the `pacts` directory.** JSON files are generated for each pairing of consumer (the FE application) and provider (`vets-api`).
   - If they fail, it's possible the request wasn't picked up by the mock server because request defined in the interaction didn't match the request that was actually made. It's also possible the component or function that made the request failed an assertion.
3. **The CI job invokes a script to publish the pacts to a broker.** The command to publish should require a version to label the consumer and optionally accept tags. The published pacts should be versioned to the current commit hash of `vets-website`. For builds to be deployed, the pacts should also be tagged with the appropriate environment. *Tagging is important to ensure that we verify only the pact associated with the build that is getting deployed and not pacts generated from other branches.*

   This assumes that the broker is accessible from CI. There may be some work involved in configuring the the broker to allow access depending on where it's hosted.
4. Publishing the pacts should trigger a webhook in the broker that invokes a Rake task in `vets-api`:
   ```
   bundle exec rake pact:verify
   ```
   This task pulls all relevant pacts from the broker and verifies that the expected responses match the actual responses when running the requests through a running instance of the API.
5. **The verification results are published back to the broker** with the version of the API that verified the pacts. Again, we can use the commit hash to version, but this time it's from `vets-api`.
   The broker maintains a matrix matching the consumer version and provider version.
6. **If verification is successful, the CI pipeline will proceed. If it failed, the pipeline will stop.**

   The assumption here is that the CI pipeline can wait for this asynchronous verification task to run and conditionally handle the output of that task.

The above steps apply to changes made from the FE. Assuming the pacts are already in place, the relevant CI pipeline step for BE is running the verification Rake task to ensure that the changes don't break existing contracts in the appropriate environments.

### Code Location
In `vets-website`:
- Contract tests will be specific to each application and located within that application's `tests` directory: `src/applications/**/tests/contract/*.contract.spec.js`.
- Interactions can exist in a sibling file to be imported into the tests: `src/applications/**/tests/contract/interactions.js`
- Helper functions for writing contract tests will be at `src/platform/testing/contract`.
- Pacts will be generated in the `pacts` directory, but this is not intended to be committed to version control.

In `vets-api`:
- Configuration for the provider verification will be at `spec/service_consumers/pact_helper.rb`.
- Provider states will be at `spec/service_consumers/provider_states.rb`.

### Testing Plan
We can start with a trial run of using Pact to contract teste a VA.gov application. This will demonstrate the viability of incorporating contract testing into our process and reveal any unforeseen work that needs to be done.

### Logging
The continuous integration job that runs the contract tests will contain the output of running the tests and store the generated pacts as build artifacts. The mechanism for passing pacts from consumer to provider will also need to store the pacts, whether it's a central repository or a Pact broker.

### Debugging
The output from the tests that create the pacts and from the provider verification of the pacts should be sufficient to figure out where issues occurred. If the failure is due to a breakdown in the expected request and response interaction, FE and BE developers involved should discuss to clear up assumptions and misunderstandings.

### Caveats
To be determined.

### Security Concerns
There are no security concerns with contract testing.

### Privacy Concerns
There are no privacy concerns with contract testing.

### Open Questions and Risks

#### [Question] In using a broker, how will the asynchronicity of the publishing and verification steps be handled when it comes to reporting build status (GitHub PRs, CI jobs)?

When `vets-api` pushes changes, it should be able to just grab the latest contract generated by a master build of the website and verify it. If we version by commit hash, we can tag contracts as `master` when they get published.

When `vets-website` pushes changes, it runs the tests to generate the pacts and then publishes them to the broker. And then it waits for the pacts to be verified. The question is how the verification results will report back and appropriately update the build status.

The Pact Broker has some webhooks we might be able to use in conjunction with GitHub checks.

#### [Question] Should we host Pact broker internally? What work would be involved?

There is a [Docker image available](https://github.com/pact-foundation/pact-broker-docker) of the official open-source Pact Broker.

If we don't want to self-host, there is also a [commercial solution](https://pactflow.io/?utm_source=github&utm_campaign=pact_broker_intro) that's a fork of that broker with improved UI and federated login. 

#### [Risk] Contract testing could introduce a non-trivial increase to build times for `vets-website`

There will be additional tests to run, but they run similarly to unit tests, so the performance cost of running the tests themselves is likely to be low.

However, the provider verification step requires running a Rake task with a build of the API. There is also a question of where we can point to that build in order to run that task. If we have to build it when the verification is triggered, it will add to the total build time. If the build occurs in Circle, we could probably leverage some caching mechanisms from Circle orbs to improve the build time. If BE Tools team has configured their own `vets-api` build job and optimized for performance, we might be able to reference that. There might also be an option where we could just pull an pre-built master image of the API and run the verification task in that.

### Work Estimates
*Rough estimates relative to a sprint (2 weeks) with expected outcomes listed after.*

1. Define the Pact workflow in `vets-website` and `vets-api` separately (0.25 - 0.5 sprint)
   - Set up Pact in `vets-website`  
     Scripts and helpers related to writing Pact tests and generating and publishing pacts
   - Set up Pact in `vets-api`  
     Tasks and spec helpers to facilitate Pact verification, including approach for stubbing external services to set up provider states

2. Explore integrating Pact with E2E tests (0.25 - 1 sprint)
   - Scripts and helpers for setting up E2E tests to use Pact, with assumption that the pacts will pass verification
   - Test the integration with a specific application

3. Coordinate between FE and BE to define the full Pact workflow (0.5 - 1 sprint)
   - Using Pact to test a specific application as a demo (not necessarily fully implemented in CI)

4. Discovery on brokers (0.5 - 1 sprint)
   - Agreement on what tool to use (Pactflow, Pact Broker, etc.)
   - Agreement on how we want to version and tag pacts
   - Defined approach for handling the publishing and verification loop in CI

5. Configure the broker (0.5 - 1 sprint)
   - If we're internally hosting the Docker instance of Pact Broker, we will need to coordinate with DevOps to set that up
   - If we're going with a commercial solution, we'll have to figure out how it integrates with our CI.

6. Roll out Pact workflow with CI integration (1-2 sprints)
   - Previous demo'd application with full Pact test flow running in CI

### Alternatives

#### Running `vets-website` and `vets-api` simultaneously in E2E tests

Our current testing strategy comprises of unit tests and E2E tests. Each method has its benefits and shortcomings that can be summarized like so:

|                                    | Unit | E2E |
|------------------------------------|------|-----|
| Fast                               | Yes  | No  |
| Reliable                           | Yes  | No  |
| Isolates Failures                  | Yes  | No  |
| Trustworthy (Simulates Real Users) | No   | Yes |

* [Source: Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

The disadvantages are certainly true of our E2E tests even before including a running instance of the API. Running the website and API at the same time would most closely replicate the full experience of using an application, so theoretically, the results should be trustworthy and instill confidence. However, in doing so, the disadvantages become much more pronounced in every category.
- The total run time of the CI pipeline increases since there is another dependency to build, so the tests will be even slower.
- Setting up the API creates another potential point of failure that isn't relevant to the tests being run. Failures related to environment or configuration while building `vets-api` doesn't add value to the actual tests but does add time invested in maintenance.
- Introducing `vets-api` to the pipeline adds a dependency that is unfamiliar to the developers writing the tests. FE developers are responsible for maintaining these tests since they are UI-based, and having to manage building and running `vets-api` adds to the maintenance burden.
- We also need to consider the dependency on Betamocks, since we would want to stub out external services to keep the scope of the tests focused on VA.gov. Modifying the `vets-api-mockdata` repo is unintuitive to most FE engineers because it requires understanding what responses the API should expect from external services. That knowledge is out of scope for FE engineers who will inevitably have to tweak the mocks to accommodate their tests. Alternatively, BE developers could be requested to make the necessary changes to the mocks, but they are not the maintainers of the tests, so they would need to take the time to understand the needs of the FE tests instead of focusing on their own work. In either case, developers are forced to overextend beyond their domain.

With Pact, we get the benefits of both types of testing.
- The contract tests that generate the pacts are unit-like, so they run quickly and reliably, and failures are easy to isolate because the tests are written against specific endpoints.
- The pact publishing and verification loop does still require building `vets-api`. However, the same problems with building the API from the full E2E approach are mitigated with the contract testing approach. The workflow cleanly isolates and delineates the responsibilities of FE and BE engineers, so any issues within either FE or BE pipeline can be handled by the respective party. Furthermore, there is no reliance on Betamocks, and the needs of the tests are formalized in the Pact DSL.
- When run alone, contract tests don't simulate real users. However, we can use the generated pacts to create stubbed responses in the E2E tests. This would also address the existing issue of unvalidated and untrustworthy stubbed responses in those tests. There is already an official stub server that Pact has documented. Alternatively, in the spirit of consolidating dependencies, it might be simpler to leverage the stubbing capabilities of the E2E testing framework. Either way, using the the pacts grants the advantage of having stubbed responses that have gone through validation with the actual running API. The validation may occur in separate steps, but those steps come together to make the contract-supplemented E2E tests as trustworthy as full E2E tests.

#### Supplementing the E2E tests with existing JSON schemas

The JSON schemas we currently have are only applicable to forms. While a majority of our applications are forms, they don't account for all VA.gov apps.

Furthermore, this implies using specifications like JSON schemas to generate values, since tests will inevitably have to send requests with an actual payload. This means the tests will usually generate data that is not very helpful or does not provide meaningful or readable documentation.

[Why doesn't Pact use JSON Schema?](https://github.com/pact-foundation/pact-ruby/wiki/FAQ#why-doesnt-pact-use-json-schema)

### Future Work
Enforcing integration test coverage would be difficult since there's no real way to measure coverage in that context. Still, we could consider what we can enforce and how we can encourage the practice by improving the workflow or creating guidelines for using the tools.

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Apr 16, 2020 | Initial draft | Eugene Doan
