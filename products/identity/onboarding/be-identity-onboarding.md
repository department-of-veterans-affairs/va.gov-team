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
6. Download a local version of all of the commonly used repositories - see below
7. Follow the instructions within the `vets-api`, `vets-api-mockdata`, and `vets-website` repositories to get your local VA.gov instance up and running

## Requesting Access to SOCKS/AWS

1. To request SOCKS, create a [new issue using this link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=socks-access-request.yml&title=Access+for+%5Bindividual%5D) and follow the steps.
  a. An SSH key is required for SOCKS. If you don't have a SSH Key or know how to find it [click here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key) for instructions.
2. Use the [AWS access template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=Access+for+%5Bindividual%5D) to request access.

## Commonly Used Repositories

- [`vets-api`](https://github.com/department-of-veterans-affairs/vets-api) - the backend where you will be doing most of your work. Follow the [base setup](https://github.com/department-of-veterans-affairs/vets-api#base-setup) instructions, then the [native setup](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/running_natively.md) instructions.
- [`vets-api-mockdata`](https://github.com/department-of-veterans-affairs/vets-api-mockdata) - mocked data to be used in conjunction with local vets-api. The mockdata README has instructions on how to create or update mocked data.
- [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website) - the React frontend that consumes vets-api endpoints.
- [`devops`](https://github.com/department-of-veterans-affairs/devops) - sensitive repository that holds configs & settings for the different VA.gov environments.
- [`va.gov-team`](https://github.com/department-of-veterans-affairs/va.gov-team) - the primary documentation repository where you can locate and add to [Identity team documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity).

## `vets-api` Identity-Owned Systems
### [Single Sign On - External (SSOe)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/sso)
- SSOe is the legacy authentication system within `vets-api`. It leverages SAML communications with the IBM Security Access Manager (ISAM) identity broker system. This system, managed by the Identity and Access Management (IAM) team, is separate from VA.gov and acts as a middle partner between the client (`vets-api`, including other VA systems that use VA.gov as an intermediary authentication parter) and the credential provider that the user is authenticating with.
- SSOe is run through the `app/controllers/v1/sessions_controller` controller
- SAML creation & interpretation code that it depends on can be found in `lib/saml`

### [Sign in Service (SiS)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Sign-In%20Service)
- SiS is the Identity team-developed OAuth authentication system that is currently partially live. With SiS `vets-api` communicates directly with the relevant credential provider for authentication, then implements a token-based authentication schema with the end client: `vets-website`, the VA mobile app, or another VA system that consumes the SiS API.
- SiS is run through the `app/controllers/v0/sign_in_controller` controller
- SiS also leverages `app/services/sign_in` to manage communications with external systems & `lib/sign_in` for miscellaneous dependencies

## Common `vets-api` console commands
- `bundle exec rake parallel:spec` - this command allows you to run the thousands of vets-api unit tests in parallel, greatly reducing the total time needed to run the test suite
### Accessing dev/staging/prod `vets-api` console
Once you have (and depending on your level of) AWS access you can use EC2 to connect to an instance of `vets-api` in dev, review, staging, or production and execute the above commands.
1. Connect to AWS EC2.
2. Once on AWS EC2, go to `Instances` & search for `staging-vets-api`, then select an instance and connect to it via Session Manager.
3. To connect to the vets-api environment enter the following commands:
    ```
    > sudo su
    > docker exec -u root -it `docker ps | grep 'vets-api' | cut -d' ' -f1` bash
    ```
4. You should now be within the vets-api root directory. Run `rails c` to start a Rails console session.

## Digital Identity Guidelines - NIST
VA.gov follows the [latest NIST publications](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-3.pdf) in managing its users' digital identities. While the entire document is informative, reading just the Executive Summary (pages 6-9 in the linked PDF) will familiarize you with the basic terminology and concepts. The [Identity LoA Readme section](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#understanding-loa) is also important to understand how VA.gov translates different authentication & authorization standards into VA.gov's concept of LoA.

## Identity Organization & Monitoring Resources
* [Zenhub Identity Board](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/board?filterLogic=any&labels=identity,sso,sso%20launch,sso-login,sso-login-swarm,sso-post&repos=133843125,194202180,246683655&useDefaultFilterLogic=false) - The primary tracker of past, current, and future Identity Team work
* [Datadog](https://vagov.ddog-gov.com/) - The Identity team uses Datadog to keep track of authentication-related metrics and logs generated by vets-api. You can access Datadog through the [VA Okta catalogue](https://dots-va.okta.com/) once you have your PIV card.
* [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues) - In addition to Datadog the Identity Team also uses Sentry to track and monitor exceptions. Sentry can be accessed once you have SOCKS & are a member of the `department-of-veterans-affairs` & `vsp-identity` Github organizations.

## Slack Channels
Slack is the main form of communication used internally within the VA.gov organization. The following channels are of particular importance for backend Identity engineers:
* `vsp-identity-team` - the primary internal communication channel for the Identity Team
* `vsp-identity-internal` - tracks changes to `va.gov-team` issue tickets via a Github integration
* `vsp-identity` - the external channel for the Identity team to field support requests and make announcements
* `vfs-platform-support` - the VA.gov internal support channel. Type `/support` to open a ticket for your issue.
* `vfs-change-announcements` - channel for major sitewide announcements
* `va-login-partners` - for specific questions about login integrations between VA.gov and its client systems 

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
- app/controllers/v1/sessions_controller.rb
- spec/controllers/v1/sessions_controller_spec.rb
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
