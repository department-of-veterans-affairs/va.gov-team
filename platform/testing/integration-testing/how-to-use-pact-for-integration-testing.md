
# How to use Pact for integration testing

#### Table of contents
- [Introduction](#introduction)
  * [Terminology](#terminology)
  * [Requirements](#requirements)
  * [Process](#process)
  * [Implementation details](#implementation-details)
- [Configuring the `vets-website` consumer codebase](#configuring-the--vets-website--consumer-codebase)
  * [1. Run contract tests](#1-run-contract-tests)
  * [2. Write a contract test](#2-write-a-contract-test)
      - [example-app.contract.spec.js](#example-appcontractspecjs)
  * [3. Set up interactions](#3-set-up-interactions)
    + [Provider states](#provider-states)
    + [Matching](#matching)
    + [Optional attributes](#optional-attributes)
    + [Optional arrays](#optional-arrays)
      - [Empty arrays](#empty-arrays)
      - [Non-empty arrays](#non-empty-arrays)
      - [Specific arrays](#specific-arrays)
- [Configuring the `vets-api` provider codebase](#configuring-the--vets-api--provider-codebase)
  * [1. Set up a provider state](#1-set-up-a-provider-state)
    + [Using a local file if blocked by frontend](#using-a-local-file-if-blocked-by-frontend)
    + [Expected responses](#expected-responses)
    + [Naming Guidelines](#naming-guidelines)
    + [Authorization](#authorization)
    + [VCR](#vcr)
  * [2. Adjust developer configurations](#2-adjust-developer-configurations)
    + [Configure the `pact_uri/broker_url`](#configure-the--pact-uri-broker-url-)
  * [3. Run the verification task](#3-run-the-verification-task)
    + [Important: Docker workflow settings](#important--docker-workflow-settings)
  * [4. Verify your results](#4-verify-your-results)
  * [5. Remove developer configurations](#5-remove-developer-configurations)
  *  [Broker matrix and tagging](#broker-matrix-and-tagging)

        
## Introduction

Pact is a tool that enables consumer driven contract testing (CDCT) by defining a contract between service consumers and providers (e.g.  `vets-website`  and  `vets-api`).

Pact is most valuable for designing and testing integrations where your organization controls the development of both the consumer (`vets-website`) and the provider (`vets-api`), and the requirements of the consumer are going to be used to drive the features of the provider.

Pact satisfies the need for end-to-end integration tests between  `vets-website`  and  `vets-api`  as part of va.gov's automated testing processes as well as providing performance metrics in relation to automated end-to-end browser testing for the  [QASP report](https://docs.google.com/spreadsheets/d/1LC-n93-8ZB5SKmXW_VO7tymQ42nNx4C9y2animvAvhg/edit#gid=1144545755).

[Learn more about Pact](https://docs.pact.io/)

### Terminology

* **Consumer** -- The consumer `vets-website` generates pacts.
* **Provider** -- The provider `vets-api` verifies pacts.
* **Pact** -- A contract between a consumer and provider is called a _pact_. Each pact is a collection of _interactions_.
* **Interaction** -- A request and response pair.
* **Broker** -- Central location where pacts are hosted. The Pact broker is currently hosted on [Heroku](https://vagov-pact-broker.herokuapp.com/). You can view the interactions per endpoint and the verification matrix from the broker index.

### Requirements

For integration test coverage, Pact is required for new endpoints or changes to endpoints. PRs related to Pacts will go through the standard [code review process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md). 

### Process

1. `vets-website`  runs unit tests to validate its request and response interactions with `vets-api` endpoints.
2. `vets-website` generates contracts (referred to as **pacts** in the Pact framework) 
3. Pacts publish to a central location/broker ([Heroku](https://vagov-pact-broker.herokuapp.com/)) to be versioned and shared with the provider (`vets-api`).
4. The provider (`vets-api`) runs a rake task to verify the pacts. This verification task replays the requests defined in the pacts against the provider (`vets-api`) and validates that the actual response matches the expected response.
5. Results of the verification are published back to the broker.

Builds depend on successful verification results to deploy.

*Note: In future iterations of the VSP Pact Process, we plan to integrate the rake verification task into CircleCI as part of the build step.* 


![](https://i.imgur.com/zQMyDS0.png)

### Implementation details
Pact is language agnostic and has packages for both Node.js and Ruby, so both `vets-website` and `vets-api` have access to their language-specific implementations of the Pact spec.
- `vets-website` will install the `@pact-foundation/pact` package.
- `vets-api` will install the `pact` gem.

**Provider states** -- Allows the consumer to define a state in which the provider should be in when making making a request for response codes, data, etc. Provider states define the state of the provider and how it will handle a response given it's current state and the data that should exist.


**Pact helper** - Pacts verified by the `pact:verify` task and configured in the `pact_helper.rb` file in your provider codebase. Currently, the `pact_helper` implements rspec and pact configurations as well as `git_sh`a and `git_branch tagging` for the consumer and provider in the broker. 

## Configuring the `vets-website` consumer codebase 

### 1. Run contract tests

To run all contract tests locally:

```
yarn test:contract
```

### 2. Write a contract test

1. Create a test file with the suffix `.contract.spec.js`.

1. Use the `contractTest` helper function from `src/platform/testing/contract`
    ```
    contractTest('Example App', 'VA.gov API', mockApi => { ... });
    ```
  - `Example App` is the name of your app. This must match the app name that the API uses to set up provider states during pact verification for this app.
   - `VA.gov API`  is the name of the provider.
   - `mockApi => { ... }`  is a callback function that has the Pact mock provider as its argument. In the callback function, write your tests in a unit test format with `describe()` and `it()` blocks and such.
  3. For any relevant endpoints, set up the mock API by adding the expected interactions.

    See the next section on interactions for an example of defining an interaction.

    ```
    mockApi.addInteraction(interaction);
    ```

    - The easiest place to do this is within the `it()` blocks, which are meant to focus on specific interactions or endpoints.
    - **The test will fail if that interaction is not fulfilled in the scope where it's declared**. So ensure that the request made in the test matches the request defined in the interaction.

The following code is an example of how you might structure your test.

##### example-app.contract.spec.js

```
import contractTest from 'platform/testing/contract';

import { getStuff, sendThings } from  '../actions';

contractTest('Example App', 'VA.gov API', mockApi => {
  describe('GET /example_endpoint', () => {
    context('when user is authenticated', () => {
      it('responds with status 200', async () => {
        mockApi.addInteraction({
          // code 200 interaction for GET /example_endpoint
        });
        await getStuff();
      });

      it('responds with status 500', async () => {
         mockApi.addInteraction({
          // code 500 interaction for GET /example_endpoint
         });
         await getStuff();
      });
    });
  });

  describe('POST /example_endpoint', () => {
    it('responds with status 200', async () => {
      mockApi.addInteraction({
        // code 200 interaction for POST /example_endpoint
      });
      await sendThings();
    });
  });
});
```

### 3. Set up interactions

An interaction describes the request you expect to send to the API and the expected response for that request. It's formatted as an object.

```
const interaction = {
  state: 'user is authenticated',
  uponReceiving: 'a request to get stuff',
  withRequest: {
    method: 'POST',
    path: '/v0/example_endpoint',
    headers: {
      'Content-Type': 'application/json',
      'X-Key-Inflection': 'camel',
    },
    body: {
      foo: 12345,
      bar: 'request data',
    },
  },
  willRespondWith: {
    status: 200,
    body: {
      data: {
        baz: string('response data'),
        quux: boolean(false),
      },
    },
  },
}
```

#### Provider states

The `state` key in an interaction specifies the state of the backend, or the *provider state*, for that interaction. Use provider states to test different responses to the same request.

The state provides a hook for the backend to do any set up before running the verification on its end. The backend often depends on an external services, so provider states are helpful indicators to stub out such services accordingly.

Examples:
- `state: 'external service is up'`
 - `state: 'user is authenticated'`

The same state can be used across multiple interactions.
- Avoid naming collisions (within your app) if there are any differences in the setup on the backend.
- Describe the states appropriately if there are any minor differences.
- Don't bloat the contract with a bunch of edge cases if it's not valuable to test or could be tested elsewhere.

The backend needs to handle all states in a pact in order for the verification to fully proceed.

#### Matching

[Use matchers](https://github.com/pact-foundation/pact-js#matching) in your interactions to prevent brittle tests. They allow tests to match the types or formats of values in the requests or responses instead of expecting the exact values.

- "As a rule of thumb, [you generally want to use exact matching when you're setting up the expectations for a request](https://docs.pact.io/getting_started/matching/#request-matching) because you're under control of the data at this stage, and according to Postel's Law, we want to be "strict" with what we send out."
- "[You want to be as loose as possible with the matching for the response though](https://docs.pact.io/getting_started/matching/#response-matching). This stops the tests being brittle on the provider side."

#### Optional attributes

[Pact does not support optional attributes](https://docs.pact.io/faq/#why-is-there-no-support-for-specifying-optional-attributes).

This also means there is no matcher that is flexible enough to allow arrays that could either be empty or contain elements.

#### Optional arrays

If you want to vary the data within an array for your test case, but that array could be empty in a valid response, [best practice dictates the following approach](https://stackoverflow.com/a/61786715/1070621):

1. Decide on what is valuable to test - empty arrays, non-empty or both.
2. Use provider states to specify any variations on the response (consumer test).
3. Implement the state for the provider test to be able to control the response.

Following that convention, there could potentially be multiple interactions, with the responses resembling these examples:

##### Empty arrays

```
willRespondWith: {
  status: 200,
  body: {
    facilities: [],
    services: [],
  }
}
```

##### Non-empty arrays

```
willRespondWith: {
  status: 200,
  body: {
    facilities: eachLike({
      id: string('12345'),
      name: string('Central VA Office'),
    }),
    services: eachLike('user-profile'),
  }
}
```

##### Specific arrays

If you need the generated array to contain specific elements, you would set the value to the **exact array** you want and use a provider state to test this particular interaction.

This generated response is useful if you wanted to use the generated pact as a source of mock data, such as for a stub server in local development or end-to-end tests.

*Warning: Do not bloat the pact with interactions like this if they are not going to be used in any meaningful way.*

```
const interaction = {
  state: 'mock data',
  ...
  willRespondWith: {
    status: 200,
    body: {
      facilities: [
        {
          id: string('12345'),
          name: string('Central VA Office')
        },
        {
          id: string('67890'),
          name: string('Department of Veterans Services'),
        },
      ],
      services: ['user-profile', 'edu-benefits'],
    },
  },
};
```

In this case, using a matcher, like `eachLike`, would not be appropriate.
- You can't do `eachLike(['user-profile', 'edu-benefits'])` because the matcher doesn't work that way.  [However, there is some discussion for adding this feature to v4](https://github.com/pact-foundation/pact-js/issues/402) (as of now, we are on the v2 spec).
- If you passed the option to increase the minimum length of the array, like `eachLike('user-profile', { min: 2 })`, the generated array would only repeat the given element, like `['user-profile', 'user-profile']`. This wouldn't be useful if you're trying to vary the data.
- You could still use matchers if you don't care about the exact values of certain attributes, like how `string()` is used in the above example.

## Configuring the `vets-api` provider codebase


### 1. Set up a provider state
Once frontend has pushed a pact to the broker, a corresponding provider state will need to be defined (even if not necessary) on the backend.

*Important: If a provider state is not necessary, please define no_op inside of a wrapping provider state block.*

Please see the [provider state documentation](https://github.com/pact-foundation/pact-ruby/wiki/Provider-states#provider-codebase) for provider state instructions. Additionally, see the [search example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L3).

#### Using a local file if blocked by frontend 
If you're waiting on frontend to generate the contract and push to the broker, you can use a temporary (local) contract. You can verify a pact at any arbitrary local or remote URL using the `pact:verify:at` task. 

Example local file path:

```
rake pact:verify:at[tmp/hca-va.gov_api.json]
```

#### Expected responses

To determine an endpoints expected response, look at the defined response in the broker. If you're having trouble identifying expected responses, look at `vets-api` request specs to determine provider state implementation details and expected responses.

#### Naming Guidelines
* Provider states -- Provider states are defined in the `service_consumers/provider_states_for/*.rb` directory. Provider States must follow a strict naming protocol and are categorized by consumer name per pact. (Example: Search, Users, HCA, etc.) See the [Consumer column of the Heroku Pact broker](https://vagov-pact-broker.herokuapp.com/) for examples. 

* Consumer name -- The consumer name in your defined `provider_state_for` block must match the name of the consumer configured in your consumer project for the verification task to correctly find the provider states. See [Search Example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L3)

* Provider state block -- The [provider state block](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L4) must match the corresponding definition defined in the pact as well. In the [search example](https://vagov-pact-broker.herokuapp.com/pacts/provider/VA.gov%20API/consumer/Search/latest) a "multiple matching results exist" interaction is defined and a provider state matching this defintion will need to be defined on the [backend](https://github.com/department-of-veterans-affairs/vets-api/pull/4612/files#diff-102a9104474b45510528e3e28a8071c0R4). 

#### Authorization
If an authorized `vets-api` user is needed for a request to an endpoint, a helper method can be used to stub the session. Call the `build_user_and_stub_session`  [method](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/support/stub_session.rb#L3) if your endpoint requires an authorized (signed in) user. See this [forms example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/hca.rb). 

#### VCR
Many of the `vets-api` endpoints call out to external services. To mock external service calls, the pact helper has VCR configured for usage. VCR cassettes can be used to mock external service responses for many of the `vets-api` third party service calls. The defined provider state in the [search example](https://vagov-pact-broker.herokuapp.com/pacts/provider/VA.gov%20API/consumer/Search/latest) makes use of a VCR cassette.

### 2. Adjust developer configurations
#### Configure the `pact_uri/broker_url`

To work with only one pact in the broker, you can verify a pact at any remote URL using the `pact:verify:at task`. Otherwise, the rake task will run all the pacts pushed to the [heroku broker](https://vagov-pact-broker.herokuapp.com/).
```
rake pact:verify:at[https://vagov-pact-broker.herokuapp.com/pacts/provider/VA.gov%20API/consumer/Search/latest]
  
```
*Note: If you are blocked by the frontend, you can [point to a local file path](#using-a-local-file-if%20blocked-by-frontend)*

### 3. Run the verification task

By running the pact rake task (`bundle exec rake pact:verify or make pact`), dynamic rspec tests will spin up to validate expected responses defined per pact.

Run:
```
bundle exec rake pact:verify 

OR

make pact
```

#### Important: Docker workflow settings
If following the docker workflow, make the following additions/changes to ```config/test.yml```  (Do not commit these changes). 
```
test_database_url: postgis://postgres:password@postgres:5432/vets_api_test?pool=4
```
*If following the native flow, remove this setting from test.yml.*

The verification task can be run at any point in development, but it may be helpful to run frequently to point out failures during development iterations. 

### 4. Verify your results
When the verification task completes, passing (green) and failing (red) interactions will display in the console. See example console output below. Verification status can also be viewed on the broker index page and in the verification matrix after commiting a change and CI runs the build workflow. (see [broker matrix section](#broker-matrix-and-tagging) below).

![](https://i.imgur.com/7scCEhi.png)


### 5. Remove developer configurations
When your verification status is all green, please reconfigure your changes from step 2 in the by doing the following:
1. Reconfigure the `pact_broker_base_url`
2. Remove the temporary `pact_uri` definition. 

### Broker matrix and tagging
The verification matrix acts as a success metric for verification status (green or red).  See the [search example](https://vagov-pact-broker.herokuapp.com/matrix/provider/VA.gov%20API/consumer/Search) in the pact broker for a provider verification matrix. 

Additionally, each verification run is tagged with the Git branch name and Git SHA in the provider verification column to track provider version details. See details in the [pact_helper](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/pact_helper.rb#L50-L51).

