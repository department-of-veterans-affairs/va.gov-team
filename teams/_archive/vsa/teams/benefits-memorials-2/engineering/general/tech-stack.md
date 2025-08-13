
# Debt Portal Application Tech Stack Documentation

This document outlines the technologies and tools used in both the **front-end** and **back-end** of the Debt Portal application, including relevant frameworks, libraries, databases, and deployment infrastructure.


## Table of Contents  

1.  [Overview](#overview)
2.  [Front-End](#front-end)
	-   [Languages](#languages)
	-   [Frameworks & Libraries](#frameworks--libraries)
	-   [State Management](#state-management)
	-   [Styling](#styling)
	-   [Build Tools & Package Managers](#build-tools--package-managers)
	-   [Testing](#testing)
	-   [Development Tools](#development-tools)

3.  [Back-End](#back-end)
	-   [Languages](#languages-1)
	-   [Frameworks](#frameworks)
	-   [Database](#database)
	-   [APIs](#apis)
	-   [Authentication & Authorization](#authentication--authorization)
	-   [Testing](#testing-1)
	-   [Development Tools](#development-tools-1)

4.  [CI/CD & Deployment](#ci-cd--deployment)
5.  [Third-Party Services](#third-party-services)
6.  [Additional Notes](#additional-notes)

## Overview
Provide a high-level summary of the overall architecture of the application, including which platforms (e.g., web, mobile, desktop) the debt portal application supports and what the major components are.

-   **Application Name**: `Debt and bills`
-   **Platform**: `Web`
-   **Overview Diagram**: *(Add architecture diagram here)*

## Front-End
### Languages  
List all the programming languages used for the front-end development.

-   **Languages**:
-   `JavaScript`
-   `HTML`
-   `CSS`

### Frameworks & Libraries  
Specify the frameworks and libraries that the front-end relies on.

-   **Frameworks**:
-   `React`

-   **Libraries**:
-   `Redux` 
-   `Sass`

### State Management  
Outline the state management approach or libraries used in the application.

-   **State Management**:
-   `Redux`

### Styling  
Document how styling and layouts are handled in the project.

-   **Styling Frameworks & Preprocessors**:
-   `SCSS` / `SASS`
-   `Styled Components`

### Build Tools & Package Managers  
List the tools used to build and package the front-end code.

-   **Build Tools**:
-   `Webpack`

-   **Package Managers**:
-   `npm`
-   `yarn`

### Testing  
Outline the testing framework and libraries used to ensure front-end functionality.

-   **Testing Frameworks**:
-   `Cypress`: We use this for e2e tests
-   `Testing Library`: We use this for testing React components
-   `Mocha` / `Chai`: Mocha is our unit test runner and Chai is the assertion library

### Development Tools  
Provide details on the development tools or IDE extensions used.

-   **Code Editor**: `VSCode`,
-   **Linting Tools**: `ESLint`, `Prettier`
-   **Debugging Tools**: `React Developer Tools`, `Redux DevTools`

  
## Back-End
### Languages  
List the programming languages used for back-end development.

-   **Languages**:
-   `Ruby`

### Frameworks  
Document the frameworks used to build and manage back-end services.

-   **Frameworks**:
-   `Ruby on Rails`

### Database  
Include details of databases used (SQL/NoSQL) and related tools.

-   **Database**:
-   SQL: PostGIS (PostgreSQL) - we use the `form5655_submissions` table in the vets-api DB
-   ORM: ActiveRecord - we use this Ruby-on-Rails ORM when interfacing with the vets-api DB 
-   We also use Redis stores for caching purposes (debatable if Redis should be considered a DB)

### APIs  
List any APIs that the back-end exposes or consumes.

-   **API Specification**:
-   `REST`: All debts APIs we maintain are REST APIs 

-   **Documentation Tools**:
-   `Swagger`: We maintain swagger documentation for debts, debt letters, FSR and medical copays endpoints/APIs.

### Authentication & Authorization  
Outline the authentication and authorization methods used in the application.

-   **Authentication**:
-   We use the same authentication process described [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication) as other apps in vets-api.
-   We use token based authentication when interacting with the Sharepoint endpoint [here](https://github.com/department-of-veterans-affairs/vets-api/blob/4ed913ed8b4d7795922c29c65c814f01fdd433f0/lib/debt_management_center/sharepoint/request.rb#L62-L71).

-   **Authorization**:
-   `Policy` classes: We use the default vets-api authorization management described in this [documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/authorization).

### Testing  
Outline the testing tools and strategies used to ensure back-end quality.

-   **Testing Frameworks**:
-   `RSpec`: This is the testing framework for Ruby-on-Rails that's used by vets-api

### Development Tools  
Provide details on the development tools or IDE extensions used for back-end development.

-   **Code Editor**: `VSCode` and/or `IntelliJ`
-   **Linting Tools**: `Rubocop` and `reek`
-   **Debugging Tools**: This depends on the code editor. For VSCode, Ruby LSP is used.

## CI/CD & Deployment
### Continuous Integration  
Describe the tools and workflows used for continuous integration.

-   **CI Tools**:
-   We use the same CI tools provided by the platform team as everyone else in vets-api and vets-website, which includes:
-   `GitHub Actions`: Used for CI checks during PR validation
-   `Jenkins`: Used for daily deployment jobs

### Continuous Deployment  
Outline how the deployment process works and the tools used.

-   **Deployment Tools**:
-   We use the same deploytment tools provided by the platform team as everyone else in vets-api and vets-website, which includes:
-   `Docker`: a docker image is built for vets-api for deployment
-   `Kubernetes`: composition of vets-api docker image and services such as Ingress
-   `AWS`: vets-api production is run on EKS

## Third-Party Services
List any third-party services, libraries, or APIs integrated into the application.

-   **Email Services**: We use VaNotify::Service to send emails [here](https://github.com/department-of-veterans-affairs/vets-api/blob/6a50ca0d454cefb58198f3d19b9aaa4861bd4824/lib/debt_management_center/sidekiq/va_notify_email_job.rb#L22-L23).
-   **Notification Services**: See above, we send notifications via email.
-   **Cloud Services**: We upload documents to Sharepoint [here](https://github.com/department-of-veterans-affairs/vets-api/blob/99eab7ef9d18216eceef9606e69e87d6e4f2efec/modules/debts_api/app/workers/debts_api/v0/form5655/vha/sharepoint_submission_job.rb). I believe we used to use Veteran Facing eFolder for debt letters but that has since been switched to VBMS instead.
-   **Other Services**: We also interact with VBS, VBA, VBMS, MPI endpoints.

## Additional Notes
Include any additional notes or resources that may be relevant for developers or system administrators working on the project.

### Example Diagram 
Below you will find links to diagrams so that in case we need to update the diagram(s), we can just update in the one place.
* High level FSR graph: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/engineering/back-end/kevin-exit-docs/high-level-fsr-submission-graph.png
* FSR dependency graph: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/engineering/back-end/kevin-exit-docs/fsr-submission-dependency-graph.png

