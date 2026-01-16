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
