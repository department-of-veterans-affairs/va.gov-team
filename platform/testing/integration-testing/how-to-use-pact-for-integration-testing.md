# How to use Pact for integration testing

## Table of Contents
- [Introduction](#introduction)
    - [Definitions](#definitions)
    - [Process](#process)
    - [Requirements](#requirements)
 - [Broker](#broker)
 - [Implementation details](#implementation-details)
 - [Pact example](#pact-example)
    - [Additional backend changes](#additional-backend-changes)
    - [Makefile shortcut](#makefile-shortcut)
    - [Local json files](#local-json-files)
    - [More on provider states](#more-on-provider-states)
 - [Pact setup](#pact-setup)
    - [How to set up the consumer codebase (vets-website)](#how-to-set-up-the-consumer-codebase-vets-website)
        - [Running contract tests](#running-contract-tests)
        - [Writing a contract test](#writing-a-contract-test)
            - [Example](#example)
                - [example-app.contract.spec.js](#example-app.contract.spec.js)
        - [Interactions](#interactions)
            - [Example]()
            - [Provider states](#provider-states)
            - [Matching](#matching)
            - [Optional attributes](#optional-attributes)
            - [Optional arrays](#optional-arrays)
                - [Empty arrays](#empty-arrays)
                - [Non-empty arrays](#non-empty-arrays)
                - [Specific arrays](#specific-arrays)
    - [How to configure the provider codebase (vets-api)](#how-to-configure-the-provider-codebase-vets-api)
        - [Quick reference checklist](#quick-reference-checklist)
        - [Live pacts](#live-pacts)
        - [How to use a local file if blocked by frontend](#how-to-use-a-local-file-if-blocked-by-frontend)
        - [How to setup a provider state](#how-to-setup-a-provider-state)
            - [What are provider states?](#what-are-provider-states)
            - [Identify expected responses](#identify-expected-responses)
            - [Naming guidelines](#naming-guidelines)
            - [Authorization](#authorization)
            - [VCR](#vcr)
        - [Configure the pact_uri/broker_url](#configure-the-pact_uri/broker_url)
        - [Optionally Comment Out Publish Flag](#optionally-comment-out-publish-flag)
        - [How to run the verification task](#how-to-run-the-verification-task)
            - [Important: Docker Workflow Settings](#important-docker-workflow-settings)
        - [How to verify your results](#how-to-verify-your-results)
        - [Final steps](#final-steps)
        - [Broker Matrix and Tagging](#broker-matrix-and-tagging)
    - [Additional info](#additional-info)
        - [Design doc](#design-doc)
        - [To do](#to-do)
        
    
        
        

## Introduction
Pact is a tool that enables consumer driven contract testing (CDCT) by defining a contract between service consumers and providers (e.g. `vets-website` and `vets-api`).

Pact is most valuable for designing and testing integrations where your organization controls the development of both the consumer (`vets-website`) and the provider (`vets-api`), and the requirements of the consumer are going to be used to drive the features of the provider.

Pact satisfies the need for end-to-end integration tests between `vets-website` and `vets-api` as part of va.gov's automated testing processes as well as providing performance metrics in relation to automated end-to-end browser testing for the [QASP report](https://docs.google.com/spreadsheets/d/1LC-n93-8ZB5SKmXW_VO7tymQ42nNx4C9y2animvAvhg/edit#gid=1144545755).

### Definitions
- **Pact** - Another term for 'contract'
- **Consumer** - the consumer `vets-website` generates the pact
- **Provider** - the provider `vets-api` verifies the pact
- **Broker** - pacts are published to a central location e.g. a broker

### Process
The Pact process can be broken into multiple steps:
1. vets-website will run unit tests to validate its request and response interactions with vets-api endpoints.
2. Contracts, also referred to as **pacts** in the Pact framework, are generated from vets-website tests.
3. The pacts are published to a central location or a broker to be versioned and shared with the provider (vets-api).
4. The provider (vets-api) runs a rake task to verify the pacts. This verification task replays the requests defined in the pacts against the provider (vets-api) and validates that the actual response matches the expected response.
5. Results of the verification are published back to the broker.
6. Builds will depend on successful verification results to deploy.
7. Future todo: The idea is to integrate the rake verification task into CircleCI as part of the build step 

### Requirements
For purposes related to integration test coverage for VSP, pacts are currently only required for new endpoints or changes to endpoints. They are relatively similar to rspec tests and the effort to set up provider states on the backend is minimal. PRs related to Pact will go through the standard code review process. Pacts will address the gap in end-to-end integration test coverage.

![](https://i.imgur.com/zQMyDS0.png)

------

## Broker
The Pact broker is currently hosted on [Heroku](https://vagov-pact-broker.herokuapp.com/).


## Implementation details
Pact is language agnostic and has packages for both Node.js and Ruby, so both `vets-website` and `vets-api` have access to their language-specific implementations of the Pact spec.
- `vets-website` will install the `@pact-foundation/pact` package.
- `vets-api` will install the `pact` gem.

Contract testing process workflow details: [Workflow details](https://github.com/department-of-veterans-affairs/va.gov-team/pull/8073/files#diff-f2abf33f91ea32d2168228610ba56d37R78)


### Provider States
Provider states allow the consumer to define a state in which the provider should be in when making making a request. (eg. response codes, data, etc). Provider states define the state of the provider and how it will handle a response given it's current state and the data that should exist.

### Pact Helper
The pacts that will be verified by the pact:verify task are configured in the `pact_helper.rb` file in your provider codebase. Currently, the pact_helper implements rspec and pact configurations as well as git_sha and git_branch tagging for the consumer and provider in the broker. 

------

## Pact Setup

## How to Setup the Consumer Codebase (vets-website)

1. Running contract tests
2. Writing a contract test
3. Interactions

### Running contract tests

To run all contract tests locally:

```
yarn test:contract
```

### Writing a contract test

1. Create a test file with the suffix `.contract.spec.js`.

2. Use the `contractTest` helper function from `src/platform/testing/contract`:

    ```
    contractTest('Example App', 'VA.gov API', mockApi => { ... });
    ```

    1. The first argument is the name of your app.
        - This must match the app name that the API uses to set up provider states during pact verification for this app.
    2. The second argument is the name of the provider.
        - For our purposes, it's basically always going to be `'VA.gov API'`.
    3. The third argument is a callback function that has the Pact mock provider as its argument (`mockApi` in this example).

3. In the callback function, write your tests in a unit test format with `describe()` and `it()` blocks and such.

4. For any relevant endpoints, set up the mock API by adding the expected interactions.

    See the next section on interactions for an example of defining an interaction.

    ```
    mockApi.addInteraction(interaction);
    ```

    - The easiest place to do this is within the `it()` blocks, which are meant to focus on specific interactions or endpoints.
    - **The test will fail if that interaction is not fulfilled in the scope where it's declared**. So ensure that the request made in the test matches the request defined in the interaction.

The following code is an example of how you might structure your test.

#### Example

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

### Interactions

An interaction describes the request you expect to send to the API and the expected response for that request. It's formatted as an object.

#### Example

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

The `state` key in an interaction specifies the state of the backend, or the **provider state**, for that interaction.
- Use provider states to test different responses to the same request.
- The state provides a hook for the backend to do any set up before running the verification on its end.
    - The backend often depends on an external services, so provider states are helpful indicators to stub out such services accordingly.
    - Examples:
        - `state: 'external service is up'`
        - `state: 'user is authenticated'`
- The same state can be used across multiple interactions.
    - However, avoid naming collisions (within your app) if there are any differences in the setup on the backend.
    - Describe the states appropriately if there are any minor differences.
    - But do not bloat the contract with a bunch of edge cases if it's not valuable to test or could be tested elsewhere.
- The backend needs to handle all states in a pact in order for the verification to fully proceed.

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

**If you need the generated array to contain specific elements**, you would set the value to the **exact array** you want and use a **provider state** to test this particular interaction.
- This generated response would be **useful if you wanted to use the generated pact as a source of mock data**, e.g. for a stub server in local development or end-to-end tests.
- On the other hand, **do not bloat the pact with interactions like this if they are not going to be used in any meaningful way**.

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
- You couldn't simply do `eachLike(['user-profile', 'edu-benefits'])` because the matcher doesn't work that way.  [However, there is some discussion for adding this feature to v4](https://github.com/pact-foundation/pact-js/issues/402) (as of now, we are on the v2 spec).
- If you passed the option to increase the minimum length of the array, like `eachLike('user-profile', { min: 2 })`, the generated array would only repeat the given element, like `['user-profile', 'user-profile']`. This wouldn't be useful if you're trying to vary the data.
- You could still use matchers if you don't care about the exact values of certain attributes, like how `string()` is used in the above example.

## How to Configure the Provider Codebase (vets-api)

### Quick Reference Checklist:

0. Have frontend push pact to broker. If blocked, [use a local json file](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#How-to-use-a-local-file-if-blocked-by-frontend). See live pacts [here](https://vagov-pact-broker.herokuapp.com/).
1. [How to Set Up a Provider State](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#How-to-Set-Up-a-Provider-State) 
    1a. [Naming Guidelines](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Naming-Guidelines)
    1b. [Idenfity Expected Responses](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Idenfity-Expected-Responses)
    1c. [Authorization](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Authorization)
    1d. [VCR](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#VCR)
2. Development Configurations
    2a. [Configure the pact_uri](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Configure-the-pact_uribroker_url)
    2b. [Optionally comment out the publish flag](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Optionally-Comment-Out-Publish-Flag)
5. [Run the Verification Task](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#How-to-Run-the-Verification-Task) & Iterate 
6. [Verify Your Results](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#How-to-verify-your-results)
7. [Final Steps](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Final-Steps)
    6a. Configure broker_uri
    6b. Configure the publish flag
    6c. Open PR to introduce the new changes
7. [Additional Broker Matrix and Tagging Details](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Broker-Matrix-and-Tagging)

----

### Live Pacts
The live pacts live on our [heroku broker](https://vagov-pact-broker.herokuapp.com/). You can view the interactions per endpoint and the verification matrix from the broker index.

### How to use a local file if blocked by frontend
If waiting on frontend to generate the contract and push to the broker, a temporary (local) contract can be used. You can verify a pact at any arbitrary local or remote URL using the pact:verify:at task. 

Example local file path:
```
rake pact:verify:at[tmp/hca-va.gov_api.json]
```


### How to Set Up a Provider State

#### What are Provider States?
[Why provider states are necesary](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw#More-on-provider-states)

"Provider states" (similar to fixtures) can allow the same request to be made with a different expected response. e.g. response codes, data, etc

A corresponding provider state will need to be defined (even if not necessary) on the backend. Provider states define code that should run before/after each interaction for a given consumer. **If a provider state is not necessary, please define no_op inside of a wrapping provider state block.** Please see the [provider state documentation](https://github.com/pact-foundation/pact-ruby/wiki/Provider-states#provider-codebase) for provider state instructions. Additionally, see the [search example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L3).

#### Identify Expected Responses

In order to determine an endpoints expected response, take a look at the defined response in the broker. A helpful tip if you're having issues is to look at vets-api request specs to determine provider state implementation details and expected responses.

#### Naming Guidelines
Provider states are currently defined in the service_consumers/provider_states_for/*.rb directory. Provider States will need to **follow a strict naming protocol** and are to be categorized by consumer name per pact. e.g. Search, Users, HCA, etc. See consumer column [here](https://vagov-pact-broker.herokuapp.com/) for examples. The consumer name in your defined `provider_state_for` block **must** match the name of the consumer configured in your consumer project for the verification task to correctly find the provider states. See [Search Example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L3)

The [provider state block](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L4) will need to match the corresponding definition defined in the pact as well. In the [search example](https://vagov-pact-broker.herokuapp.com/pacts/provider/VA.gov%20API/consumer/Search/latest) a "multiple matching results exist" interaction is defined and a provider state matching this defintion will need to be defined on the [backend](https://github.com/department-of-veterans-affairs/vets-api/pull/4612/files#diff-102a9104474b45510528e3e28a8071c0R4). 

#### Authorization
If an authorized vets-api user is needed for a request to an endpoint, a helper method can be used to stub the session. Call the `build_user_and_stub_session`  [method](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/support/stub_session.rb#L3) if your endpoint requires an authorized (signed in) user. See this [forms example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/hca.rb). 

#### VCR
Many of the vets-api endpoints call out to external services. To mock external service calls, the pact helper has VCR configured for usage. VCR cassettes can be used to mock external service responses for many of the vets-api third party service calls. The defined provider state in the search example from above makes use of a VCR cassette.

### Configure the pact_uri/broker_url

To work with one pact in the broker vs all pacts, you can verify a pact at any remote URL using the pact:verify:at task, otherwise the rake task will run all the pacts pushed to the [heroku broker](https://vagov-pact-broker.herokuapp.com/).

Again, if you are blocked by the frontend, you can point to a local file path.

```
rake pact:verify:at[https://vagov-pact-broker.herokuapp.com/pacts/provider/VA.gov%20API/consumer/Search/latest]
  
```

### Optionally Comment Out Publish Flag

During development, if you don't want to publish the results to the broker, the [publication flag](https://github.com/department-of-veterans-affairs/vets-api/pull/4612/files#diff-79dfb3765c26716457a005b9d343a160R34) can be commented out temporarily. Please make sure to uncomment the publication flag once work is complete.

### How to Run the Verification Task

By running the pact rake task (`bundle exec rake pact:verify or make pact`), dynamic rspec tests will spin up to validate expected responses defined per pact.

Simply run:
```
bundle exec rake pact:verify 

OR

make pact
```

#### Important: Docker Workflow Settings
Make the following additions/changes to ```config/test.yml``` if following the docker workflow. (Do not commit these changes). **If following the native flow, remove this setting from test.yml.**

```
test_database_url: postgis://postgres:password@postgres:5432/vets_api_test?pool=4
```

The verification task can be run at any point in development, but it may be helpful to run frequently to point out failures during development iterations. 

### How to verify your results
When the verification task completes, passing (green) and failing (red) interactions will display in the console. See example console output below. Verification status can also be viewed on the broker index page and in the verification matrix (see [broker matrix section](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Broker-Matrix-and-Tagging) below).

![](https://i.imgur.com/7scCEhi.png)


### Final Steps
When your verification status is all green, please reconfigure your changes from step 2 in the [checklist](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw?both#Quick-Reference-Checklist) by doing the following. 
1. Reconfigure the `pact_broker_base_url`
2. Remove the temporary `pact_uri` definition. 
3. Revise/uncomment the publication flag.   


### Broker Matrix and Tagging
A provider verification matrix can be found in the pact broker. See [search example](https://vagov-pact-broker.herokuapp.com/matrix/provider/VA.gov%20API/consumer/Search). The verification matrix acts as a success metric for verification status (green or red). Additionally, each verification run is tagged with the git branch name and git sha in the provider verification column to track provider version details. See details in the [pact_helper](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/pact_helper.rb#L50-L51).

## Additional Info

### Design Doc
Additional information detailed in the [design doc](https://github.com/department-of-veterans-affairs/va.gov-team/pull/8073/files#diff-f2abf33f91ea32d2168228610ba56d37R209)


### TO DO 
CircleCI

