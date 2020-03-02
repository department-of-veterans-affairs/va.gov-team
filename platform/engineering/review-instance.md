## Objective
The goal is to reduce our dependency on an external services to provide us with test accounts, particularly when many edge cases exist.

## User Stories
- As a **Vets.gov developer**, I want a way to mock out a response from an external service, so that I can test all scenarios without needing said an external team to create a test user for me.
- As a **contact center training person**, I want a way that I can demonstrate possible error scenarios, so that contact center staff is better trained at responding to calls from users.
- As a **product owner**, I want a way to demo features and their scenarios to stakeholders without the need of an engineer or test accounts, so that the product adequately matches the expectations of the stakeholder.

## Background
When integrating with an external service, Vets.gov needs a way to test/exercise all possible scenarios. The problem is that access to test accounts can range from limited to non-existent.  As a result, features with external dependencies:
- lack proper testing before release
- are difficult to bug fix since reproducing a bug is difficult or impossible

## Overview
### High Level Design
We'd like to have dedicated Jenkins build & deploy cycle for `vets-api` where most/many external depenedencies are mocked.  It will be called a `sandbox` instance.  They will have their own url: `sandbox-api.vets.gov` & `sandbox.vets.gov`.  Mocking will occur by way of the [`betamocks` gem](https://github.com/department-of-veterans-affairs/betamocks); a middleware to intercept our external requests and return a set of predefined data.  As part of the build, the mock data will be copied to the file system of deployed instance.

### Detailed Design
Mock data takes the form of a [VCR-cassette](https://github.com/vcr/vcr) style YAML file specific to the response type of the external service in question.  For examples of this data, see the [`vet-api-mockdata` repository](https://github.com/department-of-veterans-affairs/vets-api-mockdata).  This repository will be git cloned onto the backend `vets-api` instance.  This data needs to be easily and quickly editable.

The `sandbox` Jenkins build will be the same as `dev` and `staging`, in that the `master` branch from both `vets-api` & `vets-website` are deployed each time a new commit to `master` is made.  Each time a commit to [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata), an automated process must update the mock data on the `vets-api` instance file system.  This could be via:

1. A full re-deploy of `sandbox-api.vets.gov`
2. Some automated process clones or copies the latest [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata) onto the `sandbox-api.vets.gov` instance

#### Services to be Mocked
- EVSS
  - Letters API
  - GI Bill Status API
- MVI
- eMIS

#### Services that Will Not Be Mocked
- ID.me

## Workflows
#### For Developers
1. Clone `vets-api-mockdata` locally
2. Run `vets-api` locally
3. Manually edit the contents of `~/Github/vets-api-mockdata`  

In case some cases, it may be appropriate to SSH into the `sandbox` `vets-api` instance and editing the mock data directly on the file system.

#### For Product Owners
1. Clone the `vets-api-mockdata` repo locally 
2. Editing raw YAML files
3. Start a pull request to `master`
4. Get developer approval
5. Merge to `master`

As mentioned earlier, the merge to `master` will automatically kick off the deploy process for a new `sandbox` instance.  Ideally for most cases, mock data will already exist and no action will be required at all.

#### For Contact Center Trainers
1. Contact the relevant engineering scrum team with desired use-case(s)
2. Engineering team updates [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata)
3. An automatic Jenkins re-deploy occurs
4. Trainer navigates to `sandbox.vets.gov` and begins training

## Alternatives
Rather than have a dedicated `sandbox` Jenkins build, we could create an HTTP header flag named [`x-betamock-enabled` : `true`] that `vets-api` receives and uses as a flag to turn mock data on and off.  This flag would only be available in the `dev` & `staging`, not `production`.  For this to work, the front-end JS code would need to append this header to every one of their XHR requests to `vets-api`.  This has the added bonus of not requiring additional cloud resources the way a brand new `traning` instance would.
