# VA Platform Documentation
> Comprehensive documentation for VA contractors working on the VA.gov Platform.  This documentation helps teams build quality, stable, and reliable digital experiences for Veterans. 

## Getting Started

### Welcome
- [Platform Overview](https://depo-platform-documentation.scrollhelp.site/getting-started/welcome): Introduction to the VA.gov Platform and its mission
- [Platform Crew Principles](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-crew-principles): Guide for creating appropriate policies, process, and procedures for teams working on the Veteran-facing Services Platform.
- [Platform Content](https://depo-platform-documentation.scrollhelp.site/getting-started/what-we-can-help-with-platform-content): Outlines what the Platform Content Team can and cannot assist VFS Teams with

### Platform Orientation
- [Platform Orientation](https://depo-platform-documentation.scrollhelp.site/getting-started/guidance-for-new-teams-and-team-members): Complete onboarding guide for new team members
- [Platform Educational Tasks](https://depo-platform-documentation.scrollhelp.site/getting-started/educational-tasks): Educational tasks required for new team members to complete Platform Orientation
- [Platform Orientation Sessions](https://depo-platform-documentation.scrollhelp.site/getting-started/orientation-sessions): Contains recordings of the various Platform Orientation sessions for on-demand viewing. 

### Team of Teams
- [Team of Teams](https://depo-platform-documentation.scrollhelp.site/getting-started/team-of-teams): Team of Teams (ToT) meetings provide announcements from Platform and general awareness across all VA.gov teams needed to support each other, collaborate, learn, and apply to successful initiatives.

### Modernized VA.gov Accessibility Strategy
- [Accessibility Strategy](https://depo-platform-documentation.scrollhelp.site/getting-started/modernized-va-gov-accessibility-strategy): A single, cross-discipline, cross-contract, VA-wide accessibility strategy document we can point to as a north star to define accessibility for VA.gov, and measure and keep track of our progress.

### Platform Tools
- [Platform Tools](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-tools): Overview of tools Platform provides to help build quality, stable, reliable digital experiences for Veterans.
- [Prerequisites for Access Requests](https://depo-platform-documentation.scrollhelp.site/getting-started/prerequisites-for-access-requests): Find information on the required documentation and eligibility criteria that must be obtained before access to specific tools, systems, apps, and data can be granted.
- [Request access to tools](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools): Outlines how to get access to the tools needed to work on and collaborate with others on the Platform.
- [Slack profile](https://depo-platform-documentation.scrollhelp.site/getting-started/slack-profile): How to setup a Slack profile.
- [Adding files to GitHub](https://depo-platform-documentation.scrollhelp.site/getting-started/adding-files-to-the-github-repository): Guidance for properly adding compatible files and folder names to the GitHub repositories.
- [Credential Sharing Guidelines](https://depo-platform-documentation.scrollhelp.site/getting-started/credential-sharing-guidelines): Provides mandatory guidelines for securely sharing credentials and sensitive information.

### Set up encrypted email
- [Set up encrypted email](https://depo-platform-documentation.scrollhelp.site/getting-started/set-up-encrypted-email): Instructions to set up encrypted email for a VA email address.

### Setting up VA.gov locally
- [Setting up VA.gov locally](https://depo-platform-documentation.scrollhelp.site/getting-started/setting-up-va-gov-locally): Introduction to set up frontend, backend and full stack development environment.

### Offboarding
- [Offboarding](https://depo-platform-documentation.scrollhelp.site/getting-started/offboarding): Guide for when an individual or team is leaving the platform and will no longer have ownership of their VA products.

### VFS Product Directory Guides
- [VFS Product Directory User Guide](https://depo-platform-documentation.scrollhelp.site/getting-started/vfs-product-directory-user-guide): Guide for VFS team members who need to review and update their product directory entry during the Collaboration Cycle.
- [VFS Product Directory Term Glossary](https://depo-platform-documentation.scrollhelp.site/getting-started/vfs-product-directory-term-glossary): Table that covers what each field means in the product directory, what the associated data type is for the field, and what each entry in the field represents.
- [Product operations terms and definition](https://depo-platform-documentation.scrollhelp.site/getting-started/product-operations-terms-and-definition): Lists definitions related to products, features, and initiatives in the product directory.

### VFS Product Directory
- [VFS Product Directory](https://depo-platform-documentation.scrollhelp.site/getting-started/vfs-product-directory): Provides a list of all VFS products currently in use on va.gov, as well as key information about them, such as data currently associated with VFS products, therefore it serves as a reference for identifying what data needs to be updated.

### Platform Security and Authority to Operate (ATO)
- [Platform Security and Authority to Operate (ATO)](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-security-and-authority-to-operate-ato): Provides an overview of Platform security and the ATO process.

## Developer Docs

### Infrastructure
- [GitHub repos](https://depo-platform-documentation.scrollhelp.site/developer-docs/github-repos): Overview of repositories that contain the code, content, and information used to build VA.gov. The primary applications are included in the table.
- [Store a secret in Parameter Store](https://depo-platform-documentation.scrollhelp.site/developer-docs/store-a-secret-in-parameter-store): Provides details and best practices for storing and managing Platform secrets.
- [Sidekiq jobs](https://depo-platform-documentation.scrollhelp.site/developer-docs/sidekiq-jobs): Outlines how you can monitor the activities of queued jobs in vets-api. The background jobs are processed via the Sidekiq gem.
- [Feature Toggles Guide](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide): Describes how to use feature toggles to test out new functionality (applications, features, VA.gov content pages, Metalsmith) in the development, staging, or production environments for a set of users.
- [Environments](https://depo-platform-documentation.scrollhelp.site/developer-docs/environments): Describes both the production and non-production environments used during the development and deployment cycle for VA.gov.
- [S3 bucket locations](https://depo-platform-documentation.scrollhelp.site/developer-docs/s3-bucket-locations): Describes how VA applications use their own S3 bucket to host CSS and JS for all apps and forms.

#### Review Instances
- [Review instances](https://depo-platform-documentation.scrollhelp.site/developer-docs/review-instances): Explains how review instances allow testing against live pre-production backends.
- [Using review instances to preview changes](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-review-instances-to-preview-changes): Explains how to use review instances to preview frontend and backend changes.
- [Deployment process to production](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process): Outlines rationale for release process to ensure code stability and quality--code goes through several steps to get to production.

#### Redirect Implementation Strategies
- [Redirect Implementation Strategies](https://depo-platform-documentation.scrollhelp.site/developer-docs/redirect-implementation-strategies): Provides an overview of the most common types of redirects you’ll encounter at VA.gov, and a detailed workflow on how to select the correct redirect and file requests for approval.
- [VA.gov to VA.gov Redirect](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-gov-to-va-gov-redirect): Understand the process of a VA.gov to VA.gov redirect.
- [VA.gov to Subdomain Redirect](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-gov-to-subdomain-redirect): Understand the process of a VA.gov to Subdomain redirect. This is a page-level cross-domain redirect.
- [Page-level cross-domain redirect for a subdomain that loads proxy-rewrite JS](https://depo-platform-documentation.scrollhelp.site/developer-docs/page-level-cross-domain-redirect-for-a-subdomain-t): Understand redirecting a singleSubdomain page to VA.gov. This is a page-level cross-domain redirect using the proxy-rewrite JavaScript (JS) app.
- [Page-level cross-domain redirects for a subdomain that does NOT load proxy-rewrite JS](https://depo-platform-documentation.scrollhelp.site/developer-docs/page-level-cross-domain-redirects-for-a-subdomain-): Understand aSubdomain to VA.gov redirect that does NOT load proxy-rewrite Java Script (JS). This is a page-level cross-domain redirect.
- [Page-level cross-domain redirect](https://depo-platform-documentation.scrollhelp.site/developer-docs/page-level-cross-domain-redirect): Understand aSubdomain to Subdomain page-level redirect.
- [Full site redirect from Subdomain to VA.gov](https://depo-platform-documentation.scrollhelp.site/developer-docs/full-site-redirect-from-subdomain-to-va-gov): Understand a full site redirect from a Subdomain to VA.gov.
- [Vets.gov cross-domain redirect: Page-level redirect from Vets.gov to VA.gov](https://depo-platform-documentation.scrollhelp.site/developer-docs/vets-gov-cross-domain-redirect-page-level-redirect): Understand page-level redirect from Vets.gov to VA.gov.
- [Other types of redirects](https://depo-platform-documentation.scrollhelp.site/developer-docs/other-types-of-redirects): Understand additional redirect procedures for edge cases that may come fall outside the main redirect types.

### Frontend developer documentation
- [Frontend developer documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/frontend-developer-documentation): Overview of four major components to VA.gov frontend

#### Run and build VA.gov locally
- [Setting up your local frontend environment](https://depo-platform-documentation.scrollhelp.site/developer-docs/setting-up-your-local-frontend-environment): A step-by-step guide to setting up the VA.gov frontend environment locally.
- [Running VA.gov locally - Before you begin](https://depo-platform-documentation.scrollhelp.site/developer-docs/running-va-gov-locally): Explains further steps to set up the yarn watch task locally, and to run VA.gov locally for specific environments.
- [Using GitHub Codespaces](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-github-codespaces): Overview for setting up an Integrated Development Environment (IDE) that is accessible entirely in a web browser from Github.
- [Set up Codespaces for development](https://depo-platform-documentation.scrollhelp.site/developer-docs/set-up-codespaces-for-development): Process of setting up GitHub Codespaces for development.
- [Set up Codespaces for user research](https://depo-platform-documentation.scrollhelp.site/developer-docs/set-up-codespaces-for-user-research): Process of setting up a testing environment for user research sessions using GitHub Codespaces.
- [Troubleshooting Codespaces](https://depo-platform-documentation.scrollhelp.site/developer-docs/troubleshooting-codespaces): Provides guidance on troubleshooting GitHub Codespaces.
- [Codespaces and screen readers](https://depo-platform-documentation.scrollhelp.site/developer-docs/codespaces-and-screen-readers): Provides guidance when using Codespaces with screen readers.
- [Automatic public Codespace creation](https://depo-platform-documentation.scrollhelp.site/developer-docs/automatic-public-codespace-creation): Overview of automatic public Codespace creation. Steps to set up your GitHub account to allow Codespaces to do several steps for you, and to get a public URL that can be viewed automatically with minimal extra steps.

#### Frontend workflow
- [Frontend workflow](https://depo-platform-documentation.scrollhelp.site/developer-docs/frontend-workflow): Describes the process a Frontend developer will go through from deciding what ticket to work on, all the way through to deploying their code. 
- [Frontend workflow: Write](https://depo-platform-documentation.scrollhelp.site/developer-docs/frontend-workflow-write): Step by step guide for Frontend workflow: write
- [Frontend workflow: Review](https://depo-platform-documentation.scrollhelp.site/developer-docs/frontend-workflow-review): Documentation on pull requests specific to front end developers
- [Staged Rollouts](https://depo-platform-documentation.scrollhelp.site/developer-docs/staged-rollouts): Describes phased rollouts at a high level and then links out to other documents with deep-dives on how these phased rollouts are achieved from an engineering perspective.
- [Resolving critical issues](https://depo-platform-documentation.scrollhelp.site/developer-docs/resolving-critical-issues): Describes the VA.gov Platform policy for handling critical issues in main branches, regardless of whether that issue has reached production.

#### Frontend architecture
- [Frontend architecture](https://depo-platform-documentation.scrollhelp.site/developer-docs/frontend-architecture): Provides a high-level overview of VA.gov frontend architecture to get you oriented with the `vets-website` and content-build repositories.
- [Site build process](https://depo-platform-documentation.scrollhelp.site/developer-docs/site-build-process): The main build process for VA.gov is controlled with Metalsmith, which is a simple, plugin-based static site generator.
- [How URLs are created](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-urls-are-created): Understanding how content URLs are generated by Metalsmith helps prevent build errors.
- [How templates work](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-templates-work): Overview of templates used for frontend architecture. Templates use tinyliquid, a JavaScript implementation of Liquid.
- [Adding a collection of related links for markdown pages](https://depo-platform-documentation.scrollhelp.site/developer-docs/adding-a-collection-of-related-links-for-markdown-): The current publishing system, Metalsmith, provides a way to group related content using what it calls collections. Using collections requires the metalsmith-collections plugin.
- [VA.gov content management system overview](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-gov-content-management-system-overview): Overview of the content managment system, and the on-going process of moving content from several other systems into one primary content management system (CMS) powered by Drupal.
- [TeamSite overview](https://depo-platform-documentation.scrollhelp.site/developer-docs/teamsite-overview): Illustrates the content flow from VA systems to VA.gov users.
- [Page and application JavaScript structure](https://depo-platform-documentation.scrollhelp.site/developer-docs/page-and-application-javascript-structure): Overiew of how a page on VA.gov is related to the application code located in `vets-website`.
- [Styling](https://depo-platform-documentation.scrollhelp.site/developer-docs/styling): Overview of how frontend styles are written. Styling is written in Sass using the SCSS syntax.
- [Bundles and Code Organization](https://depo-platform-documentation.scrollhelp.site/developer-docs/bundles-and-code-organization): Overview of Application Bundling with Webpack. Webpack is a modular asset bundler used to build VA.gov client applications.
- [Environment URLs](https://depo-platform-documentation.scrollhelp.site/developer-docs/environment-urls): Overview of the four environments and their Site and API URLs for VA.gov; localhost, development, staging, and production.
- [Routing](https://depo-platform-documentation.scrollhelp.site/developer-docs/routing): Provides details about the reverse proxy config and React Router.

#### Best Practices
- [Best practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/best-practices): This document is an attempt to begin collecting best practices that the team has and continues to lean toward when architecting and developing front-end applications.
- [Redux Action Guidelines](https://depo-platform-documentation.scrollhelp.site/developer-docs/redux-action-guidelines): Guidelines for Redux Actions in order to make usage of Redux consistent and maintainable across applications.
- [React Router Guidelines](https://depo-platform-documentation.scrollhelp.site/developer-docs/react-router-guidelines): These guidelines are aimed at realizing consistent, optimal router usage across all VFS apps. They’re also useful when upgrading an app from a previous version of react-router.
- [Guidelines for good SCSS / CSS](https://depo-platform-documentation.scrollhelp.site/developer-docs/guidelines-for-good-scss-css): Overview for DO's and DON'T's for using SCSS and CSS.
- [Cross app imports](https://depo-platform-documentation.scrollhelp.site/developer-docs/cross-app-imports): Importing code from other apps is discouraged, as it creates unclear dependencies and hinders app isolation. This page contains guidance on how to find and address cross app imports.
- [Component Testing Guidelines](https://depo-platform-documentation.scrollhelp.site/developer-docs/component-testing-guidelines): Provides guidelines for a method of component testing that incorporates many benefits of E2E tests, but with lower overhead. React Testing Library provides the framework for this type of integration test.
- [Checking if an uploaded PDF is encrypted](https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted): Instructions on how to add a password field to the va-file-input web component to an uploaded encrypted PDF.

#### Standards
- [Content security policy](https://depo-platform-documentation.scrollhelp.site/developer-docs/content-security-policy): Overview of how VA.gov implements, uses, and manages a content security policy. This document assumes you have an understanding of CSP, CSP directives and a high level understanding of VA.gov's infrastructure (specifically where the reverse proxy sits in the content delivery flow).

#### Adding applications and features
- [Adding applications and features](https://depo-platform-documentation.scrollhelp.site/developer-docs/adding-applications-and-features): Almost everyone working on VA.gov at some point will need to build a new feature, something that doesn't fit into the existing applications or widgets we have currently. This article will help guide you to the right way to implement that new feature.
- [Creating a new content page](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-content-page): Outlines how to create a new content page on VA.gov.
- [Creating a new React widget](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-react-widget): This document shows how to write widgets in React and add them to a static page.
- [Creating a new application](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-application): This document provides information about the application generator and the manual app creation process.
- [VA.gov application generator](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-gov-application-generator): We have a Yeoman generator for starting up new React applications in vets-website. This page guides you through setting up the generator and explains the questions that are asked as part of the setup process.

#### Isolated application builds
- [Isolated application builds](https://depo-platform-documentation.scrollhelp.site/developer-docs/isolated-application-builds): Applications that are isolated in the `vets-website` repository can take advantage of a faster continuous integration workflow in GitHub Actions. This faster workflow builds only the app(s) that the changed files in a branch belong to, in addition to only running their unit tests.
- [Functionality of building isolated applications](https://depo-platform-documentation.scrollhelp.site/developer-docs/functionality-of-building-isolated-applications): The process of building isolated applications begins with the allow-list. The allow-list is a collection of applications that are eligible to take advantage of a faster CI pipeline.
- [How to add your application to the allow-list](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-add-your-application-to-the-allow-list): For applications to be added to the allow-list, they must meet a few requirements. This page explains the steps to verify an application can be added to the allow-list.
- [Addressing common cross app imports](https://depo-platform-documentation.scrollhelp.site/developer-docs/addressing-common-cross-app-imports): Importing code from other apps is discouraged, as it creates unclear dependencies and hinders app isolation. This page contains guidance on how to find and address cross app imports.
- [Build and deploy process flow](https://depo-platform-documentation.scrollhelp.site/developer-docs/build-and-deploy-process-flow): The diagram on this page illustrates the build and deploy process flow for isolated applications in the main branch CI/CD workflow.

#### Frontend testing
- [Frontend testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/frontend-testing): OVerview for frontend testing for Front end apps on `vets-website`; includes Unit Tests, End-to-End tests, and Accessibility Tests.

##### Unit tests
- [Unit tests](https://depo-platform-documentation.scrollhelp.site/developer-docs/unit-tests): Overview for unit tests for all new code added to `vets-website`.
- [Unit tests for forms pages](https://depo-platform-documentation.scrollhelp.site/developer-docs/unit-tests-for-forms-pages): Guidelines when writing a unit test for forms pages.
- [Example unit tests - React Testing Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/example-unit-tests-react-testing-library): Examples of unit tests from React Testing Library for all unit/integration testing needs.
- [Example unit test - Enzyme](https://depo-platform-documentation.scrollhelp.site/developer-docs/example-unit-test-enzyme): Enzyme is no longer being updated by its creators. Users should migrate all uses of Enzyme-specific code, such as the mount() function, over to RTL for stability and security purposes.
- [Debugging unit tests](https://depo-platform-documentation.scrollhelp.site/developer-docs/debugging-unit-tests): Guide for if you encounter any issues with unit tests, this page contains techniques you can use to help you troubleshoot.
- [Guide for VFS teams to update tests for Node 22](https://depo-platform-documentation.scrollhelp.site/developer-docs/guide-for-vfs-teams-to-update-tests-for-node-22): This guide is designed to help VFS teams migrate tests to run under Node 22. Many tests will not need updating; but some tests will fail under Node 22 due to changes in Node or other dependencies that have been updated.
- [Summary of application unit test results under Node 22](https://depo-platform-documentation.scrollhelp.site/developer-docs/summary-of-application-unit-test-results-under-nod): This page provides a summary of unit test results per app when run under Node 22. The purpose of the data is to give VFS teams an idea of how many tests they will need to update before `vets-website` switches from Node 14 to Node 22.

##### Platform Best Practices - Unit and e2e Tests
- [Platform Best Practices - Unit and e2e Tests](https://depo-platform-documentation.scrollhelp.site/developer-docs/platform-best-practices-unit-and-e2e-tests): The Platform’s test suites form the backbone of our continuous integration (CI) pipeline. By following the guidance in this page, VFS teams can ensure that the tests for their applications/forms are running both efficiently and effectively.

#### Automated code quality
- [Automated code quality](https://depo-platform-documentation.scrollhelp.site/developer-docs/automated-code-quality): Provide automated tooling to automate to improve code quality with explicit and enforced standards to help reduce the burden of code reviews felt by both VFS and Platform Teams.
- [ESLint new rule release notes](https://depo-platform-documentation.scrollhelp.site/developer-docs/eslint-new-rule-release-notes): Overview of ESLint and SonarJS deployed and release rules.
- [ESLint rule changes and testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/eslint-rule-changes-and-testing): Overview for an initial process to test and deploy new rules for ESLint in the `vets-website` repo.
- [Triggering a manual review](https://depo-platform-documentation.scrollhelp.site/developer-docs/triggering-a-manual-review): Each PR on `vets-website` will run through an automated process which looks for code additions/modifications which could be considered bad for the platform. If a potential issue is found, a bot will leave an automated comment and request a review from the **frontend-review-group**.

#### Dev Tools
- [Dependabot](https://depo-platform-documentation.scrollhelp.site/developer-docs/dependabot): Dependabot is an automated dependency management tool. It uses a configuration file, `dependabot.yml`, that lives at the root of each repository to handle the dependencies for that repo.
- [Charles Proxy setup for TeamSite](https://depo-platform-documentation.scrollhelp.site/developer-docs/charles-proxy-setup-for-teamsite): Guide to get TeamSite working, using setup a proxy that directs your browser to load `/health` and `va_files` from VA.gov, and all other files from `localhost:3001`. This lets you edit css, javascript etc, and load from webpack, without having to set up TeamSite locally.
- [Staggering features to anonymous users](https://depo-platform-documentation.scrollhelp.site/developer-docs/staggering-features-to-anonymous-users): Overview for setting feature flags to roll out to a percent of authenticated users, but anonymous visitors will need a client-side treatment for rollout which is not part of the server-side feature flags stack.

##### Yarn Workspaces
- [Yarn Workspaces](https://depo-platform-documentation.scrollhelp.site/developer-docs/yarn-workspaces): This document is meant to serve as a rudimentary introduction to the set up and use of Yarn Workspaces in `vets-website`.
- [Workspace Maintenance: Overview](https://depo-platform-documentation.scrollhelp.site/developer-docs/guide-for-maintainers-overview): This document is a guide for engineers maintaining a yarn workspace—after it has been set up.
- [Workspace Maintainence: A Deeper Dive](https://depo-platform-documentation.scrollhelp.site/developer-docs/guide-for-maintainers-a-deeper-dive): The following is a deeper dive into the technical nuances of maintaining your team’s workspace within `vets-website/src/platform`.
- [Yarn Workspace Utility Scripts](https://depo-platform-documentation.scrollhelp.site/developer-docs/yarn-workspace-utility-scripts): The following is a list of default scripts that have been set up in the worktree make maintaining your workspace easier.
- [Worktree and Workspace Setup Guide](https://depo-platform-documentation.scrollhelp.site/developer-docs/guide-for-engineers): This document is a guide for VFS engineers who are tasked with adding Yarn Workspaces to vets-website `src/platform/*` and `src/applications/*`
- [Worktree and Workspace Trouble shooting](https://depo-platform-documentation.scrollhelp.site/developer-docs/trouble-shooting): A quick reference log of issues and resolutions.

##### Downtime notifications
- [Downtime notifications](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications): Downtime notifications allow VFS applications to display user-facing messaging when dependent external services are unavailable.

##### Third-party libraries
- [Third-party libraries](https://depo-platform-documentation.scrollhelp.site/developer-docs/third-party-libraries): Overview for how the Platform has established a detailed process for evaluating and approving third-party libraries, ensuring that any new additions are thoroughly vetted and properly maintained.

#### GitHub Actions usage for VA.gov frontend engineers
- [GitHub Actions usage for VA.gov frontend engineers](https://depo-platform-documentation.scrollhelp.site/developer-docs/github-actions-usage-for-va-gov-frontend-engineers): Overview for creating workflows, which are pipelines or automated processes that can be triggered by a variety of events.
- [Cypress Integration Test Workflow - for CI failures](https://depo-platform-documentation.scrollhelp.site/developer-docs/cypress-integration-test-workflow-for-ci-failures): Overview for Engineers working with vets-website need to be able to quickly iterate on integration test specifications when there are e2e failures in the Continuous Integration workflow.

#### VA Forms Library Overview
- [VA Forms Library Overview](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview): Technical documentation meant to serve as a reference for software engineers working on the platform who will be creating VA Forms. The VA Forms Library is a comprehensive system that provides an easy to use and consistent way of creating complex forms for Veterans.
- [VA Forms Library - Getting Started with the Forms Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-getting-started-with-the-forms-li): This guide contains a considerable amount of out of date information. Several sections are marked as “deprecated” or have text advising against using, but not everything is labeled. The Forms team is aware and is actively updating all forms documentation to be more in line with the current form digitization guidance. While this guide still has useful information, it may be more fruitful to reference and practice development with the already existing Simple Forms Patterns mock form (view in staging) or the Patterns Demonstrations mock form (view in staging).
- [VA Forms Library - Using Forms in Production](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-using-forms-in-production): Overview of how to move a form to production and update the schema in the Vets-Json-Schema Repo after the appliccation has been thoroughly tested.
- [VA Forms Library - Form Config Options](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-form-config-options): Overview of how to setup the configuration for a form or application using the Forms Library.
- [VA Forms Library - About schema and uiSchema](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-about-schema-and-uischema): Overview of how the VA.gov Forms Library lets you build web-based forms using the JSON Schema standard for form data and React for the form UI. The form data and UI are represented by schemaand ui:schema, respectively, which are included in the form configuration file.

#### VA Forms Library - Web Component Fields and Patterns
- [VA Forms Library - Web Component Fields and Patterns](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-web-component-fields-and-patterns): Overview about how the Forms Library aligns with the VA.gov Design System, establishing and using a versatile shared resource in `vets-website`, forms introduced web component based fields and patterns. These web component based fields and patterns in the forms library utilize U.S. Web Design System v3, which is the latest version supported by the VA Design System. These fields and patterns replace the widgets and definitions, but share very similar implementation methods.
- [How to use web component patterns](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-use-web-component-patterns): This guide explains how to use and adopt web component patterns for your VA form application.
- [How to use web component fields](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-use-web-component-fields): This guide goes over how to use `'ui:webComponentField'`. The property 'ui:webComponentField' can be used in an RJSF form page uiSchema to tell it to use web components instead of the default widget behavior.

##### VA Forms Library - Sub Tasks
- [VA Forms Library - Sub Tasks](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-sub-tasks): Overview of what and when to use, and how to create a sub-task in a Form.

#### VA Forms Library - How Tos
- [VA Forms Library - How routing is generated](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-routing-is-generated): This document provides a high level overview of how routing is handled by the Forms Library. The intent isn’t to go terribly in depth, but to give engineers a general understanding of what happens under the hood when pages are created in a `formConfig`.
- [VA Forms Library - How to bypass Schema Form](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-bypass-schema-form): Bypassing the `SchemaForm` component means you can render a form page using plain React components. Minimal `schema`, and `uiSchema` should include any required fields and validations.
- [VA Forms Library - How to set up Save In Progress (SiP)](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si): Overview of how to set up Save in Progress (SiP) for Forms on VA.gov.
- [VA Forms Library - How to work with Pre-Fill](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-pre-fill): Overview explaing that Pre-fill is a simple API call to Vets-API that allows the form user to have their information pre filled in the form without having to type anything. This guide will show you how to setup pre-fill inside Vets-website and how to submit a Pull Request (PR) into Vets-API Pull Requests.
- [VA Forms Library - How to hide pages and chapters in a form](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-hide-pages-and-chapters-in): Overview expplaining when it is appropriate to hide certain pages and chapters that will not be relevant to certain users.  This is when hiding and showing pages based on automatic criteria can be used to help.
- [VA Forms Library - How to use updateSchema and replaceSchema](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-updateschema-and-repla): Overview explaining when to use updateSchema and replaceSchema when there may be a need to modify a form schema from the frontend instead of directly in `vets-json-schema`.
- [VA Forms Library - How to use the Save in Progress menu for faster development](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-save-in-progress-m): Overview of how to use the Save in Progress (SiP) menu for faster development in Forms.
- [VA Forms Library - How to validate a field based on values from another field](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-validate-a-field-based-on-): Overview of how to validate a field based on values from another field in Forms.
- [VA Forms Library - How to work with Array Data (aka List Loops)](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-array-data-aka-l): Overiew of how to work with Array Data (aka List Loops) in Forms.
- [VA Forms Library - How to conditionally make fields required](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-conditionally-make-fields-): Overview of how to conditionally make fields required in Forms.
- [VA Forms Library - How to make a required form field optional](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-make-a-required-form-field): Overview of how to make a required form field optional in Forms.
- [VA Forms Library - How to include view-only data](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-include-view-only-data): Overview of how to include view-only data in Forms.
- [VA Forms Library - How to implement a personal information component populated with read-only data](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-implement-a-personal-infor): This page provides guidance on implementing the personal information component within form applications, covering installation, usage, customization through configuration, and implementation examples.
- [VA Forms Library - How to work with transformForSubmit](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-transformforsubm): Overview of How to work with transformForSubmit in Forms.
- [VA Forms Library - How to use the ReviewCardField](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-reviewcardfield): Overview of how to use the ReviewCardField in Forms.
- [VA Forms Library - How to create the contact info Array Data (aka Hub and Spoke)](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar): Overview of how to create the contact info Array Data (aka Hub and Spoke) in Forms.
- [VA Forms Library - How to use "Add item" link in Array Data (aka List Loop)](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-add-item-link-in-array): Overview of how to use "Add item" link in Array Data (aka List Loop) in Forms.
- [VA Forms Library - How to replace a form page using a feature toggle](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-replace-a-form-page-using-): Overview of how to replace a form page using a feature toggle in Forms.

##### VA Forms Library - Web components in RJSF
- [VA Forms Library - Web components in RJSF](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-web-components-in-rjsf): This page documents information related to web component adoption by forms teams, using `ui:webComponentField` in RJSF, including status, how to adopt, decisions, and defects.

##### (Legacy) VA Forms Library - Form Widgets
- [(Legacy) VA Forms Library - Form Widgets](https://depo-platform-documentation.scrollhelp.site/developer-docs/legacy-va-forms-library-form-widgets): Using widgets in the forms library is deprecated. Instead, developers should use web component based patterns and fields, which provide all the features of widgets and are actively supported.

##### How to opt-in to Drupal as the source of truth for Oracle Health-related apps and widgets
- [How to opt-in to Drupal as the source of truth for Oracle Health-related apps and widgets](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for): Overview of how to opt-in to Drupal as the source of truth for Oracle Health-related apps and widgets in Forms.
 
### Deployments
- [Deployments](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployments): This page details the automated build and deployment process for `vets-website`, `content-build`, `vets-api`, `forward proxy (HaProxy)` and `reverse proxy (OpenResty)`. It also outlines the deployment schedule, rollback procedures, and continuous deployment details.
- [Creating releases](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-releases): Overview of guides to create a a `vets-website` Release or a `content-build` Release, and Hotfixes.

#### Manual deployments
- [Manual deployments](https://depo-platform-documentation.scrollhelp.site/developer-docs/manual-deployments): This document elaborates on the standard practices for preforming a manual deploy on `vets-website` and `content-build` repositories.
- [Deployment Policies](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-policies): Describes the typical deployment schedule, but that deployments from the primary branch may occur at any time. VA.gov does not use release branches; instead, it maintains a focus on keeping the primary branch healthy.

##### Handling flaky unit tests
- [Handling flaky unit tests](https://depo-platform-documentation.scrollhelp.site/developer-docs/handling-flaky-unit-tests): This is a guide for handling unit tests that fail intermittently.

##### Handling failed isolated application pipelines
- [Handling failed isolated application pipelines](https://depo-platform-documentation.scrollhelp.site/developer-docs/handling-failed-single-grouped-application-pipelin): Overview for escalating and resolving the failed pipelines to ensure code can be deployed on a consistent basis.

##### Build and deploy process flows
- [Build and deploy process flows](https://depo-platform-documentation.scrollhelp.site/developer-docs/build-and-deploy-process-flows): This pages contains diagrams that illustrate the different build and deploy process flows for CI/CD in vets-website and content-build.

##### Staged Continuous Deployment
- [Staged Continuous Deployment](https://depo-platform-documentation.scrollhelp.site/developer-docs/continuous-deployment): This page outlines the process that apps can use to deploy applications on their cadence, called staged continuous deployment. 

### Code and build

## Design and User Experience
- [VA. gov Design System](https://design.va.gov): Design standards, components, and patterns
- [Component Library](https://design.va.gov/components): React components following VA design standards
- [Accessibility Guidelines](https://depo-platform-documentation.scrollhelp.site/...): Meeting 508 compliance requirements
- [Research Guidelines](https://depo-platform-documentation.scrollhelp.site/...): Conducting user research with Veterans
- [Content Style Guide](https://depo-platform-documentation.scrollhelp.site/...): Writing content for VA.gov

## Testing and Quality Assurance
- [Testing Overview](https://depo-platform-documentation.scrollhelp.site/...): Testing strategy and requirements
- [End-to-End Testing with Cypress](https://depo-platform-documentation.scrollhelp. site/...): Writing and running E2E tests
- [Accessibility Testing](https://depo-platform-documentation.scrollhelp.site/...): Using axe DevTools and other a11y testing tools
- [Test User Dashboard](https://depo-platform-documentation.scrollhelp.site/...): Finding and using test accounts
- [Review Instances](https://depo-platform-documentation.scrollhelp. site/...): Previewing changes before production deployment

## Deployment and CI/CD
- [Deployment Process](https://depo-platform-documentation.scrollhelp.site/...): How deployments work on VA.gov
- [GitHub Actions Workflows](https://depo-platform-documentation.scrollhelp.site/...): Continuous integration setup
- [Environment Overview](https://depo-platform-documentation.scrollhelp.site/...): Dev, Staging, and Production environments
- [Release Management](https://depo-platform-documentation.scrollhelp.site/...): Planning and executing releases

## Monitoring and Observability
- [Monitoring Overview](https://depo-platform-documentation.scrollhelp.site/...): Platform monitoring tools and dashboards
- [Grafana and Loki](https://depo-platform-documentation.scrollhelp.site/... ): Log aggregation and analysis
- [Sentry Error Tracking](https://depo-platform-documentation.scrollhelp. site/...): Monitoring and debugging errors
- [DataDog Dashboards](https://depo-platform-documentation.scrollhelp.site/...): Application performance monitoring
- [PagerDuty Integration](https://depo-platform-documentation.scrollhelp.site/...): Incident management and on-call procedures

## APIs and Integrations
- [API Documentation](https://depo-platform-documentation.scrollhelp.site/... ): vets-api endpoints and usage
- [Authentication Guide](https://depo-platform-documentation.scrollhelp.site/...): User authentication and authorization
- [External Integrations](https://depo-platform-documentation.scrollhelp.site/... ): Integrating with VA backend services
- [Contract Testing with Pact](https://depo-platform-documentation.scrollhelp.site/...): Ensuring API compatibility

## Content Management
- [Drupal CMS Overview](https://depo-platform-documentation.scrollhelp.site/...): Using the VA. gov Content Management System
- [Content API](https://depo-platform-documentation.scrollhelp.site/...): Consuming content from Drupal
- [Content Publishing Workflow](https://depo-platform-documentation.scrollhelp.site/...): How content gets published to VA.gov

## Collaboration and Communication
- [GitHub Organization](https://github.com/department-of-veterans-affairs): Department of Veterans Affairs on GitHub
- [DSVA Slack Workspace](https://depo-platform-documentation.scrollhelp.site/...): Requesting access to Slack
- [ZenHub Project Management](https://depo-platform-documentation.scrollhelp.site/...): Using ZenHub for agile planning
- [Team Norms and Practices](https://depo-platform-documentation.scrollhelp.site/...): Communication guidelines

## Analytics and Insights
- [Google Analytics Setup](https://depo-platform-documentation.scrollhelp.site/...): Tracking user behavior and metrics
- [Domo Dashboards](https://depo-platform-documentation.scrollhelp. site/...): KPI reporting and data visualization
- [Medallia Feedback](https://depo-platform-documentation.scrollhelp.site/... ): Collecting and analyzing user feedback

## Support and Troubleshooting
- [Common Issues](https://depo-platform-documentation.scrollhelp.site/...): Frequently encountered problems and solutions
- [Platform Support Channels](https://depo-platform-documentation.scrollhelp.site/...): How to get help
- [Incident Response](https://depo-platform-documentation.scrollhelp.site/...): What to do when things go wrong
- [FAQs](https://depo-platform-documentation.scrollhelp. site/...): Frequently asked questions

## Policies and Compliance
- [Security Guidelines](https://depo-platform-documentation.scrollhelp.site/...): Security best practices and requirements
- [ATO and Compliance](https://depo-platform-documentation.scrollhelp. site/...): Authority to Operate documentation
- [Privacy Requirements](https://depo-platform-documentation.scrollhelp.site/...): Protecting Veteran data
- [Accessibility Standards](https://depo-platform-documentation.scrollhelp.site/...): Section 508 compliance requirements
