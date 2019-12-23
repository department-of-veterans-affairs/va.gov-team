__Please note: some links in this document point to the vets.gov-team repo.__

# Backend 
Hello! In this folder, you'll find information specific to how Backend Engineering works on VA.gov. 

### Communication channels
- Slack channels: #vsp-backend (VSP team members) #vfs-platform-support (everyone else)
- Github labels: [backend](https://github.com/department-of-veterans-affairs/va.gov-team/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abackend)

### Points of contact
The Backend points of contact are:  
- [Andrew Gunsch](mailto:andrew.gunsch@adhocteam.us), @gunsch on Slack, [@gunsch](https://github.com/gunsch) on Github
- [Anna Carey](mailto:anna@adhocteam.us), @Anna Carey on Slack, [@annaswims](https://github.com/annaswims) on Github

### Table of contents
The following list is a set of resources compiled by the people in your practice area to help you do your work and answer questions you might have. Some of the links may take you to other sites and resources outside this repo. If you need a hand with anything, don't hesitate to ping the Slack channels and people listed above.
- Getting started
    - [Background/FAQ](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/EngineeringOnboarding.md#backgroundfaq) 
- Environment setup
    - [Native setup instructions](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/native.md)
    - [Docker setup instructions](https://github.com/department-of-veterans-affairs/vets-api#base-setup)
    - [Optional application configuration](https://github.com/department-of-veterans-affairs/vets-api#optional-application-configuration)
    - [Front End getting Started Guide](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/)
- Common tasks
    - Clone & Build
        - [Base Setup](https://github.com/department-of-veterans-affairs/vets-api#base-setup)
    - Run the app
        - [Running the app](https://github.com/department-of-veterans-affairs/vets-api#running-the-app)
   - Logging in 
        -   [DS Logon usernames and passwords](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/reference_documents/ds%20logon/ds-logon-lower-env-test-accounts.md)
        - [MyHealtheVet usernames and passwords](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/reference_documents/MHV/mhv-lower-env-test-accounts.md)
        - [id.me usernames and passwords](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv)
    - Run tests
        - [Running test suite](https://github.com/department-of-veterans-affairs/vets-api#running-tests)
        - [Load testing process](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Backend/Load%20Testing.md)
        - [Accessing Staging](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md)
        - [Accessing Internal Resources](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Internal%20Tools.md) (Jenkins, Sentry, Grafana, Prometheus)
    -  API Reference
        - [vets-api Swagger/OpenAPI Docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/) 
    - Database Migrations
        - [Database Migration Practices](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Database%20Migrations.md)
    - Mocking data
        - [Mocking an external service](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/betamocks.md#mocking-a-service)
        - [Mocking error responses](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/betamocks.md#mocking-error-responses)
        - [Caching multiple responses](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/betamocks.md#caching-mulitple-responses)
- Code organization
    - We enforce a consistent code style with [Rubocop](https://github.com/department-of-veterans-affairs/vets-api/blob/master/.rubocop.yml) code linting
    - We run commit hooks with [overcommit](https://github.com/department-of-veterans-affairs/vets-api/tree/master/.git-hooks/pre_commit)
    - Standards and conventions
        - Team [engineering practices directory](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering)
        - for reference: [18F API standards](https://github.com/18F/api-standards) (some good advice here)
        - [New API endpoint punchlist](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/vets-api-endpoint-punch-list.md)
        - [Vets-API Endpoint Punch List Presentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Presentations/vets-api-endpoint-punch-list-presentation.md)
        - [Service classes](https://github.com/department-of-veterans-affairs/vets-api#how-to-contribute)
        - [API Style Guide(outdated?)](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Style%20Guides/API/README.md)
        - Rate limiting?
- Development workflow
    - [Workflow](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Administrative/how-to-track-specific-work-items.md)
    - [How to Contribute](https://github.com/department-of-veterans-affairs/vets-api#how-to-contribute)
    - [Communication norms](https://github.com/department-of-veterans-affairs/vets-external-teams/blob/master/Norms/norms-communication.md)
    - [Continuous Integration Process](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Continuous%20Integration%20Process.md)
    - [Engineering Key mgmt](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Key%20Management.md)
    - [How to File Bugs, Tasks, and Questions](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Administrative/How%20to%20File%20Bugs%20Tasks%20and%20Questions.md)
- Code review
    - [Code Review Norms](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Code%20Review%20Norms.md)
    - Release process
        - [Deployment process](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Deployment%20Process.md)
- Triage Processes
	- [Incident Response Playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md)
	- [Incident Triage Process](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/triage)
	- [Support Tiers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/triage/support-tiers.md)
	- [On-Call Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/triage/on-call-process.md)
- Architecture
    - Frontend is a collection of React apps [vets-website](https://github.com/department-of-veterans-affairs/vets-website)
    - vets-api syndicates data between various data sources and external service integrations to provide the various front-end [products](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products#products) with their requisite data
    - Authentication/Identification w/ [ID.me](http://id.me/)
        - Login [flow](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/login/reference-documents/auth)
        - [ID.me integration doc](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/ID.me.md)
- External Service Partners (fka APIs)
	- [List of Upstream Services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/triage/upstream-services.md)
    - [Data Services Master Index](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering/Data) - vets-api integrates with many external services, listed here with integration details
    - MVI - Master Veteran Index
        - [MVI README](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering/Data/Data-Services/MVI)
        - [MVI Integration](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/MVI%20Integration)
    - EVSS - Enterprise Veterans Self Service
        - [EVSS Integration](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Platform/EVSS%20Integration/README.md). 
        - [EVSS Services breakdown](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering/Data/Data-Services/EVSS)
    - MHV - My HealtheVet
    - eMIS - Enterprise Military Information Systems
        - [eMIS Integration](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Global/SiP-Prefill/Prefill/eMIS_Integration)
    - Vet360
        - [Vet360 Master Index](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering/Data/Data-Services/Vet360)
        - [Vet360 Swagger docs](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Data/Data-Services/Vet360/Swagger/README.md)
    - [Search.gov](http://search.gov/)
        - [Search.gov API docs](https://search.usa.gov/sites/7378) (requires account)
        - [Search.gov product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/search)
    - VIERS - Veteran Information/Eligibility Record Services
    - iHub - Integration Hub
    - Facilities Locator - A single consolidated place where veterans and beneficiaries can easily find and understand high-level information about facilities offering priority VA benefits and services 
		- [Facility Locator](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/product)
    - HCA - Health Care Applications
    - BB - Blue Button
    - GIBFT - GI Bill Feedback Tool
- Datasources
    - [VA Databases and Data Systems](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering/Data/Databases)
    - This list is incomplete as of writing ^
