# PACT configuration docs

## Background
PACT is a tool that enables consumer driven contract testing by defining a contract between service consumers and providers (e.g. vets-website and vets-api)

Pact is most valuable for designing and testing integrations where your organization controls the development of both the consumer (vets-website) and the provider (vets-api), and the requirements of the consumer are going to be used to drive the features of the provider.

PACT satisfies the need for e2e integration tests between `vets-website` and `vets-api` as part of va.gov's automated testing processes as well as providing performance metrics in relation to automated end-to-end browser testing for the [QASP report](https://docs.google.com/spreadsheets/d/1LC-n93-8ZB5SKmXW_VO7tymQ42nNx4C9y2animvAvhg/edit#gid=1144545755) 


### Definitions
- **Consumer** - the consumer (vets-website) generates the contract
- **Provider** - the provider (vets-api) verifies the contract
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

------

## Broker
The PACT broker is currently hosted on [heroku](https://vagov-pact-broker.herokuapp.com/). A local broker can also be configured for development purposes (see example setup instructions below)


## Implementation details
Pact is language agnostic and has packages for both Node.js and Ruby, so both `vets-website` and `vets-api` both have access to their language-specific implementations of the Pact spec.
- `vets-website` will install the `@pact-foundation/pact` package.
- `vets-api` will install the `pact` gem.

Contract testing process workflow details: [Workflow details](https://github.com/department-of-veterans-affairs/va.gov-team/pull/8073/files#diff-f2abf33f91ea32d2168228610ba56d37R78)


## PACT example

Follow the setup instructions [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/3a8f4953b5e77edcbd39fd3db073232cdaca0ea0/teams/vsp/teams/tools/frontend/2019-11-13-consumer-driven-contract-testing-with-pact.md#steps-to-run-example)

#### Additional Backend changes:

Make following additions/changes to ```config/settings.local.yml``` if following the docker workflow

```
redis:
  host: redis
  port: 6379

database_url: postgis://postgres:password@postgres:5432/vets_api_development?pool=4
```

Additionally, A temp json file can be used in place of the broker/pact_uri in the pact_helper for development purposes 
```
  # honours_pact_with 'HCA Post' do
  #   pact_uri 'tmp/hca-va.gov_api.json'
  # end
```

### makefile shortcut
A pact makefile shortcut `make pact` can be run as an alternative to the docker-compose or native pact rake task flow by using docker-compose under the hood

### local json files

To speed up development workflow on the backend, the pact helper can be configured to point to a local file, however, on a real project with a continuous integration  box, you would use a [Pact Broker](https://github.com/pact-foundation/pact_broker)

### More on provider states
Provider states allow the consumer to define a state in which the provider should be in when making making a request. (eg. response codes, data, etc). Provider states define the state of the provider and how it will handle a response given it's current state and the data that should exist.


### CircleCI integration (todo)

------

## PACT Configuration
TODO


------

## Design Doc
Additional information detailed in the [design doc](https://github.com/department-of-veterans-affairs/va.gov-team/pull/8073/files#diff-f2abf33f91ea32d2168228610ba56d37R209)


# TODO 
CircleCI

Add piece for avoiding provider state naming collisions or something generic like, “service is up”.

