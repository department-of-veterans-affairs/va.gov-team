
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
-   `Redux` / `Vuex` / `MobX`
-   `Axios` / `Fetch`
-   `Styled-components` / `Sass`
-   `D3.js` / `Chart.js`

### State Management  
Outline the state management approach or libraries used in the application.

-   **State Management**:
-   `Redux`
-   `Vuex`
-   `Context API`

### Styling  
Document how styling and layouts are handled in the project.

-   **Styling Frameworks & Preprocessors**:
-   `SCSS` / `SASS`
-   `Styled Components`
-   `Tailwind CSS` / `Bootstrap`

### Build Tools & Package Managers  
List the tools used to build and package the front-end code.

-   **Build Tools**:
-   `Webpack`
-   `Parcel`
-   `Vite`

-   **Package Managers**:
-   `npm`
-   `yarn`

### Testing  
Outline the testing framework and libraries used to ensure front-end functionality.

-   **Testing Frameworks**:
-   `Jest`
-   `Cypress`
-   `Testing Library`
-   `Mocha` / `Chai`

### Development Tools  
Provide details on the development tools or IDE extensions used.

-   **Code Editor**: `VSCode`, `WebStorm`
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
-   SQL: `Postgr[eSQL`,](http://asp.net/) `MySQL`, `SQL Server`
-   NoSQL: `MongoDB`, `Cassandra`, `Firebase`
-   ORM: `Sequelize`, `Prisma`, `SQLAlchemy`

### APIs  
List any APIs that the back-end exposes or consumes.

-   **API Specification**:
-   `REST`: All debts APIs we maintain are REST APIs 
-   `GraphQL`

-   **Documentation Tools**:
-   `Swagger`
-   `Postman`

### Authentication & Authorization  
Outline the authentication and authorization methods used in the application.

-   **Authentication**:
-   `JWT (JSON Web Tokens)`
-   `OAuth 2.0`
-   `Session-Based Authentication`

-   **Authorization**:
-   `Role-Based Access Control (RBAC)`
-   `Access Control Lists (ACL)`

### Testing  
Outline the testing tools and strategies used to ensure back-end quality.

-   **Testing Frameworks**:
-   `Jest`
-   `Mocha` / `Chai`
-   `Supertest`
-   `JUnit`

### Development Tools  
Provide details on the development tools or IDE extensions used for back-end development.

-   **Code Editor**: `VSCode` and/or `IntelliJ`
-   **Linting Tools**: `Rubocop`
-   **Debugging Tools**: This depends on the code editor. For VSCode, Ruby LSP is used.

## CI/CD & Deployment
### Continuous Integration  
Describe the tools and workflows used for continuous integration.

-   **CI Tools**:
-   `GitHub Actions`: Used for CI checks during PR validation
-   `Jenkins`: Used for daily deployment jobs

### Continuous Deployment  
Outline how the deployment process works and the tools used.

-   **Deployment Tools**:
-   `Docker`: a docker image is built for vets-api for deployment
-   `Kubernetes`: composition of vets-api docker image and services such as Ingress
-   `AWS`: vets-api production is run on EKS

## Third-Party Services
List any third-party services, libraries, or APIs integrated into the application.

-   **Payment Services**: `Stripe`, `PayPal`
-   **Email Services**: `SendGrid`, `Mailgun`
-   **Notification Services**: `Twilio`, `Firebase`
-   **Cloud Services**: `AWS S3`, `Google Cloud Storage`

## Additional Notes
Include any additional notes or resources that may be relevant for developers or system administrators working on the project.

### Example Diagram 
Add any architecture diagrams or flow charts to give more visual clarity to the setup.
