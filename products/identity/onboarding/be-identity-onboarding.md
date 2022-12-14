# VSP Identity Backend Engineers
__Current Team__ 
- Trevor Bosaw
- John Bramley

> Open links in a new tab to avoid frustration

## Getting Started

1. Focus on finishing company/program onboarding before starting here
2. Start on the ["all team members" onboarding list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/New%20Team%20Member%20Onboarding.md#onboarding-items-all-team-members)
3. Get added to the [department-of-veterans-affairs](https://github.com/department-of-veterans-affairs) organization on Github. Your program manager can help get this started
4. Make sure you are added to the vsp-identity team on Github.
5. Get SOCKS/AWS Access - see below

## Commonly Used Repositories

- [`vets-api`](https://github.com/department-of-veterans-affairs/vets-api) - the backend where you will be doing most of your work. Follow the [base setup](https://github.com/department-of-veterans-affairs/vets-api#base-setup) instructions, then the [native setup](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/running_natively.md) instructions.
- [`vets-api-mockdata`](https://github.com/department-of-veterans-affairs/vets-api-mockdata) - mocked data to be used in conjunction with local vets-api. The mockdata README has instructions on how to create or update mocked data.
- [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website) - the React frontend that consumes vets-api endpoints.
- [`devops`](https://github.com/department-of-veterans-affairs/devops) - sensitive repository that holds configs & settings for the different VA.gov environments.

## `vets-api` Identity-Owned Files
### General Authentication
- lib/mpi/ 
- spec/lib/mpi/ 
- app/models/account.rb 
- spec/models/account_spec.rb 
- app/models/user_account.rb 
- spec/models/user_account_spec.rb 
- app/models/user_verification.rb 
- spec/models/user_verification_spec.rb 
- app/models/deprecated_user_account.rb 
- spec/models/deprecated_user_account_spec.rb 
- app/models/user.rb 
- spec/models/user_spec.rb 
- app/models/user_identity.rb 

### SSOe
- app/controllers/*/sessions_controller.rb
- spec/controllers/*/sessions_controller_spec.rb
- lib/saml/ 
- spec/lib/saml/ 
- app/models/saml_request_tracker.rb 
- spec/models/saml_request_tracker_spec.rb 
- app/models/user_session_form.rb 
- spec/models/user_session_form_spec.rb 

### Sign in Service
- lib/sign_in/ 
- spec/lib/sign_in/ 
- app/services/sign_in/ 
- spec/services/sign_in/ 
- app/controllers/v0/sign_in_controller.rb 
- spec/controllers/v0/sign_in_controller_spec.rb 

### Test User Dashboard
- modules/test_user_dashboard

> A useful VSCode extension, [favorites](https://marketplace.visualstudio.com/items?itemName=howardzuo.vscode-favorites), will allow you to favorite these files and display them in a “favorite” tab to allow quick navigation.

## Requesting Access to SOCKS/AWS

1. To request SOCKS, create a [new issue using this link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=socks-access-request.yml&title=Access+for+%5Bindividual%5D) and follow the steps.
  a. An SSH key is required for SOCKS. If you don't have a SSH Key or know how to find it [click here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key) for instructions.
2. Use the [AWS access template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=Access+for+%5Bindividual%5D) to request access.

