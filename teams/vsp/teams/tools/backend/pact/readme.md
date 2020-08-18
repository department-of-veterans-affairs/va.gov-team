# PACT configuration docs

## Background
PACT is a tool that enables consumer driven contract testing (CDCT) by defining a contract between service consumers and providers (e.g. `vets-website` and `vets-api`).

Pact is most valuable for designing and testing integrations where your organization controls the development of both the consumer (`vets-website`) and the provider (`vets-api`), and the requirements of the consumer are going to be used to drive the features of the provider.

PACT satisfies the need for end-to-end integration tests between `vets-website` and `vets-api` as part of va.gov's automated testing processes as well as providing performance metrics in relation to automated end-to-end browser testing for the [QASP report](https://docs.google.com/spreadsheets/d/1LC-n93-8ZB5SKmXW_VO7tymQ42nNx4C9y2animvAvhg/edit#gid=1144545755).


### Definitions
- **Pact** - Another term for 'contract'
- **Consumer** - the consumer `vets-website` generates the pact
- **Provider** - the provider `vets-api` verifies the pact
- **Broker** - pacts are published to a central location e.g. a broker

### Process
The PACT process can be broken into multiple steps:
1. vets-website will run unit tests to validate its request and response interactions with vets-api endpoints.
2. Contracts, also referred to as **pacts** in the Pact framework, are generated from vets-website tests.
3. The pacts are published to a central location or a broker to be versioned and shared with the provider (vets-api).
4. The provider (vets-api) runs a rake task to verify the pacts. This verification task replays the requests defined in the pacts against the provider (vets-api) and validates that the actual response matches the expected response.
5. Results of the verification are published back to the broker.
6. Builds will depend on successful verification results to deploy.
7. Future todo: The idea is to integrate the rake verification task into CircleCI as part of the build step 

![](https://i.imgur.com/zQMyDS0.png)

------

## Broker
The PACT broker is currently hosted on [Heroku](https://vagov-pact-broker.herokuapp.com/). A local broker can also be configured for development purposes (see [example setup instructions](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw#PACT-example) below)


## Implementation details
Pact is language agnostic and has packages for both Node.js and Ruby, so both `vets-website` and `vets-api` have access to their language-specific implementations of the Pact spec.
- `vets-website` will install the `@pact-foundation/pact` package.
- `vets-api` will install the `pact` gem.

Contract testing process workflow details: [Workflow details](https://github.com/department-of-veterans-affairs/va.gov-team/pull/8073/files#diff-f2abf33f91ea32d2168228610ba56d37R78)


## PACT example

Follow the setup instructions [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/3a8f4953b5e77edcbd39fd3db073232cdaca0ea0/teams/vsp/teams/tools/frontend/2019-11-13-consumer-driven-contract-testing-with-pact.md#steps-to-run-example)

#### Additional Backend changes:

Make the following additions/changes to ```config/test.yml``` if following the docker workflow. (Do not commit these changes). **If following the native flow, remove this setting from test.yml.**

```
test_database_url: postgis://postgres:password@postgres:5432/vets_api_test?pool=4
```

### Makefile Shortcut
A pact makefile shortcut `make pact` can be run as an alternative to the docker-compose or native pact rake task flow by using docker-compose under the hood. Again, remember to configure the above settings in test.yml if following the docker workflow.

### Local json Files

To speed up development workflow on the backend, the pact helper can be configured to point to a local file, however, on a real project with a continuous integration  box, you would use a [Pact Broker](https://github.com/pact-foundation/pact_broker). See [details](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw#How-to-use-a-local-file-if-blocked-by-frontend)

### More on Provider States
Provider states allow the consumer to define a state in which the provider should be in when making making a request. (eg. response codes, data, etc). Provider states define the state of the provider and how it will handle a response given it's current state and the data that should exist.

------

## PACT Setup

## Naming Conventions (TODO)
TODO: 

## How to Setup the Consumer Codebase (vets-website)
TODO: Add piece for avoiding provider state naming collisions or something generic like, “service is up”.

1. Writing a contract test
2. Mocking requests
    2a. Populating arrays in mock data

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
4. For any relevant endpoints, set up the mock API with `mockApi.addInteraction()`.
    - The easiest place to do this is within `it()` blocks, which are meant to focus on specific interactions.
    - Alternatively, you can set them all up in one place within a `before()` hook.

The following code is an example of how you might structure your test.

#### Example

##### example-app.contract.spec.js

```
import contractTest from 'platform/testing/contract';

import doStuff from  '../actions';

contractTest('Example App', 'VA.gov API', mockApi => {
  describe('GET /example_endpoint', () => {
    context('when user is authenticated', () => {
      it('responds with status 200', async () => {
        mockApi.addInteraction({
          state: 'user is authenticated',
          uponReceiving: 'a request to do stuff',
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
        });

        await doStuff();
      })
    });
  });
});
```

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
If waiting on frontend to generate the contract and push to the broker, a temporary (local) contract can be used. Point the `pact_uri` to the local file as seen [here](https://github.com/department-of-veterans-affairs/vets-api/pull/4612/files#diff-79dfb3765c26716457a005b9d343a160R29)

Example temp contract definition:
```
  honours_pact_with 'HCA Post' do
    pact_uri 'tmp/hca-va.gov_api.json' #temp local contract
  end
```


### How to Set Up a Provider State

#### What are Provider States?
[Why provider states are necesary](https://hackmd.io/2KMv4yM5TwOqWE3do7iBUw#More-on-provider-states)

"Provider states" (similar to fixtures) can allow the same request to be made with a different expected response. e.g. response codes, data, etc

A corresponding provider state will need to be defined (even if not necessary) on the backend. Provider states define code that should run before/after each interaction for a given consumer. **If a provider state is not necessary, please define no_op inside of a wrapping provider state block.** Please see the [provider state documentation](https://github.com/pact-foundation/pact-ruby/wiki/Provider-states#provider-codebase) for provider state instructions. Additionally, see the [search example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L3).

#### Idenfity Expected Responses

In order to determine an endpoints expected response, take a look at the defined response in the broker. A helpful tip if you're having issues is to look at vets-api request specs to determine provider state implementation details and expected responses.

#### Naming Guidelines
Provider states are currently defined in the service_consumers/provider_states_for/*.rb directory. Provider States will need to **follow a strict naming protocol** and are to be categorized by consumer name per pact. e.g. Search, Users, HCA, etc. See consumer column [here](https://vagov-pact-broker.herokuapp.com/) for examples. The consumer name in your defined `provider_state_for` block **must** match the name of the consumer configured in your consumer project for the verification task to correctly find the provider states. See [Search Example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L3)

The [provider state block](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/search.rb#L4) will need to match the corresponding definition defined in the pact as well. In the [search example](https://vagov-pact-broker.herokuapp.com/pacts/provider/VA.gov%20API/consumer/Search/latest) a "multiple matching results exist" interaction is defined and a provider state matching this defintion will need to be defined on the [backend](https://github.com/department-of-veterans-affairs/vets-api/pull/4612/files#diff-102a9104474b45510528e3e28a8071c0R4). 

#### Authorization
If an authorized vets-api user is needed for a request to an endpoint, a helper method can be used to stub the session. Call the `build_user_and_stub_session`  [method](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/support/stub_session.rb#L3) if your endpoint requires an authorized (signed in) user. See this [forms example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/provider_states_for/hca.rb). 

#### VCR
Many of the vets-api endpoints call out to external services. To mock external service calls, the pact helper has VCR configured for usage. VCR cassettes can be used to mock external service responses for many of the vets-api third party service calls. The defined provider state in the search example from above makes use of a VCR cassette.

### Configure the pact_uri/broker_url

To work with one pact in the broker vs all pacts, point the `pact_uri` in the `pact_helper.rb` file to a specific contract in the broker (see [here](https://github.com/department-of-veterans-affairs/vets-api/pull/4612/files#diff-79dfb3765c26716457a005b9d343a160R38)), otherwise the rake task will run all the pacts pushed to the [heroku broker](https://vagov-pact-broker.herokuapp.com/).

After configuring your `pact_uri`, comment out the `honours_pacts_from_pact_broker` block and nested `pact_broker_base_url`. Again, if you are blocked by the frontend, your pact_uri will point to a local file.

```
  # honours_pacts_from_pact_broker do
  #  pact_broker_base_url 'https://vagov-pact-broker.herokuapp.com'
  # end
  
  # temporarily define a specific broker uri to run one pact
  honours_pact_with 'Search' do
    pact_uri 'https://vagov-pact-broker.herokuapp.com/pacts/provider/VA.gov%20API/consumer/Search/latest'
  end
  
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

Once all pacts are passing, please open a new PR to introduce your new changes.

### Broker Matrix and Tagging
A provider verification matrix can be found in the pact broker. See [search example](https://vagov-pact-broker.herokuapp.com/matrix/provider/VA.gov%20API/consumer/Search). The verification matrix acts as a success metric for verification status (green or red). Additionally, each verification run is tagged with the git branch name and git sha in the provider verification column to track provider version details. See details in the [pact_helper](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/service_consumers/pact_helper.rb#L50-L51).

## CircleCI integration (todo)


------


## Design Doc
Additional information detailed in the [design doc](https://github.com/department-of-veterans-affairs/va.gov-team/pull/8073/files#diff-f2abf33f91ea32d2168228610ba56d37R209)


# TODO 
CircleCI

