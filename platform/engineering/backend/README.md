# Backend 
Hello! In this folder, you'll find information specific to how Backend Engineering works on VA.gov. 

### Communication channels
- Slack channels: #kraken-api-team
- Github labels: [backend](https://github.com/department-of-veterans-affairs/vets.gov-team/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abackend)

### Points of contact
The Backend points of contact are:  
- [Alastair Dawson](mailto:alastair@adhocteam.us), @alastair on Slack, [@kreek](https://github.com/kreek) on Github
- [Andrew Gunsch](mailto:andrew.gunsch@adhocteam.us), @gunsch on Slack, [@gunsch](https://github.com/gunsch) on Github

### Table of contents
The following list is a set of resources compiled by the people in your practice area to help you do your work and answer questions you might have. Some of the links may take you to other sites and resources outside this repo. If you need a hand with anything, don't hesitate to ping the Slack channels and people listed above.
- Getting started
    - [Background/FAQ](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/EngineeringOnboarding.md#backgroundfaq)
- Environment setup
    - [Native setup instructions](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/native.md)
    - [Docker setup instructions](https://github.com/department-of-veterans-affairs/vets-api#base-setup)
    - [Optional application configuration](https://github.com/department-of-veterans-affairs/vets-api#optional-application-configuration)
- Common tasks
    - Clone & Build
        - [Base Setup](https://github.com/department-of-veterans-affairs/vets-api#base-setup)
    - Run the app
        - [Running the app](https://github.com/department-of-veterans-affairs/vets-api#running-the-app)
    - Run tests
        - [Running test suite](https://github.com/department-of-veterans-affairs/vets-api#running-tests)
        - [Load testing process](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Load%20Testing.md)
        - [Accessing Staging](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Accessing-Staging.md)
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
        - Team [engineering practices directory](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Practice%20Areas/Engineering)
        - for reference: [18F API standards](https://github.com/18F/api-standards) (some good advice here)
        - [New API endpoint punchlist](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/vets-api-endpoint-punch-list.md)
        - [Vets-API Endpoint Punch List Presentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Presentations/vets-api-endpoint-punch-list-presentation.md)
        - [Service classes](https://github.com/department-of-veterans-affairs/vets-api#how-to-contribute)
        - [API Style Guide(outdated?)](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Style%20Guides/API/README.md)
        - Rate limiting?
- Development workflow
    - [Workflow](https://github.com/department-of-veterans-affairs/vets.gov-team#workflow)
    - [How to Contribute](https://github.com/department-of-veterans-affairs/vets-api#how-to-contribute)
    - [Communication norms](https://github.com/department-of-veterans-affairs/vets-external-teams/blob/master/Norms/norms-communication.md)
    - [Continuous Integration Process](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Continuous%20Integration%20Process.md)
    - [Engineering Key mgmt](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Key%20Management.md)
    - [How to File Bugs, Tasks, and Questions](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/How%20to%20File%20Bugs%20Tasks%20and%20Questions.md)
- Code review
    - [PR punchlist](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/PR-Checklist.md)
    - [Code Review Norms](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Code%20Review%20Norms.md)
    - Release process
        - [Deployment process](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Deployment%20Process.md)
- Architecture
    - Frontend is a collection of React apps [vets-website](https://github.com/department-of-veterans-affairs/vets-website)
    - vets-api syndicates data between various data sources and external service integrations to provide the various front-end [products](https://github.com/department-of-veterans-affairs/vets.gov-team#labeling) with their requisite data
    - Authentication/Identification w/ [ID.me](http://id.me/)
        - Login [flow](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/reference_documents/Auth/authentication_and_authorization.md)
        - [ID.me integration doc](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/ID.me.md)
- External Service Partners (fka APIs)
    - [Data Services Master Index](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Data/Data-Services) - vets-api integrates with many external services, listed here with integration details
    - MVI - Master Veteran Index
        - [MVI README](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Data/Data-Services/MVI/README.md)
        - [MVI Integration](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/MVIIntegration/README.md)
    - EVSS - Enterprise Veterans Self Service
        - [EVSS Integration](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Platform/EVSS%20Integration/README.md)
        - [EVSS Services breakdown](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Data/Data-Services/EVSS)
    - MHV - My HealtheVet
    - eMIS - Enterprise Military Information Systems
        - [eMIS Integration](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Global/SiP-Prefill/Prefill/eMIS_Integration)
    - Vet360
        - [Vet360 Master Index](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Data/Data-Services/Vet360)
        - [Vet360 Swagger docs](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Data/Data-Services/Vet360/Swagger/README.md)
        - [Vet360 Integration](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Data/Data-Services/Vet360/)
    - [Search.gov](http://search.gov/)
        - [Search.gov API docs](https://search.usa.gov/sites/7378) (requires account)
        - [Search.gov product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Products/Global/Search/ProductOutline.md)
    - VIERS - Veteran Information/Eligibility Record Services
    - iHub -
    - Facilities Locator? -
    - HCA? -
    - BB -
    - GIBFT - GI Bill Feedback Tool
- Datasources
    - [VA Databases and Data Systems](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Data/Databases)
    - This list is incomplete as of writing ^
