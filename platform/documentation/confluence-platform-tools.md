
# VA.gov Platform Tools

The VA.gov Platform provides several tools to help you build quality, stable, reliable digital experiences for Veterans. Some of the tools the Platform provides are "home-grown" at the VA to meet our specific needs. Others are 3rd party tools selected by the Platform.

We’re continually iterating to make it easier for you to build better, faster. In the future, we plan to eliminate the need for you to access some of these tools directly. Until then, this is the full list of Platform tools.

- Requires access to our SOCKS proxy server. To learn how to access tools using the SOCKS proxy, see Internal tools access via SOCKS proxy.
- Managed by the VA CTO office. The Platform may have processes and guidelines for the use of the tools, but we do not own them and can’t provide full support without VA involvement. For example, getting access to the DSVA Slack workspace requires assigning a ticket to a VA employee.

## Analytics and Insights Tools

| Tool              | Description                                      | Links                                      |
|-------------------|--------------------------------------------------|--------------------------------------------|
| Google Analytics  | Web analytics service offered by Google that tracks and reports website traffic. | [Google.com](https://www.google.com) \| [Google Analytics documentation](https://support.google.com/analytics) \| [Platform Google Analytics support overview](https://analytics.google.com) |
| Domo              | KPI dashboard tool that pulls in data from various sources. | [DOMO.com Help Center](https://www.domo.com) \| [Platform Domo access request documentation](https://domo.com) |
| Medallia          | VA.gov survey data. Replaced Foresee.            | [Medallia website](https://www.medallia.com) |

## Communication and Collaboration Tools

| Tool              | Description                                      | Links                                      |
|-------------------|--------------------------------------------------|--------------------------------------------|
| ZenHub            | Project management tool used by the Platform.    | [ZenHub.com](https://www.zenhub.com) \| [Platform ZenHub board](https://zenhub.com) |
| Slack             | Messaging app used by everyone who works on VA.gov. | [Slack.com](https://slack.com) \| [DSVA Slack workspace](https://slack.com) \| [Request access to Slack](https://slack.com) |
| Chrome Extension: ZenHub | Helps you make use of integrated ZenHub options and extensions. | [ZenHub for GitHub extension in the Chrome webstore](https://chrome.google.com/webstore) |
| GitHub            | Used for VA.gov product documentation.           | [Department of Veteran Affairs GitHub Organization](https://github.com/department-of-veteran-affairs) \| [Request access to GitHub](https://github.com) |

## Design and Research Tools

| Tool              | Description                                      | Links                                      |
|-------------------|--------------------------------------------------|--------------------------------------------|
| Design System     | Guidance, standards, and tools to help teams build a consistent, intuitive, and Veteran-centered experience across VA.gov. | [VA.gov Design System](https://design.va.gov) |
| Sketch            | Digital design tool used for UX and UI design. VA.gov design system library is Sketch-compatible. | [Sketch.com](https://www.sketch.com) \| [Sketch for Teams at VA](https://sketch.com) |
| GitHub            | Used for documenting research.                   | [GitHub.com](https://github.com) \| [VA.gov Research Hub](https://github.com/department-of-veteran-affairs) |
| OptimalWorkshop   | Optimal Workshop provides research methods you need to test your user experiences. | [OptimalWorkshop.com](https://www.optimalworkshop.com) |

## Development Tools

### Platform-built Tools

| Tool              | Description                                      | Links                                      |
|-------------------|--------------------------------------------------|--------------------------------------------|
| vets-api repo     | Backend for VA.gov.                              | [vets-api](https://github.com/department-of-veteran-affairs/vets-api) |
| vets-website repo | Frontend for VA.gov.                             | [vets-website](https://github.com/department-of-veteran-affairs/vets-website) |
| VFS Toolkit (VTK) | Ruby gem that helps engineers to quickly start developing on VA.gov. Provides a command line interface that allows the use of simple commands and parameters to do everything from setting up a development environment to building out a directory structure and creating necessary files for separating code into its own module. | [VTK repo](https://github.com/department-of-veteran-affairs/vtk) |
| Forms Library     | VA.gov Forms Library provides a simple way to create a consistent experience for complex forms for Veterans. | [VA.gov Forms Library](https://github.com/department-of-veteran-affairs/forms-library) |
| React Component Library | Documentation and examples of VA.gov UI design system components. | [VA.gov Design System](https://design.va.gov) \| [Component Library](https://design.va.gov/components) |
| Feature Toggles   | Can be used in both vets-api and vets-website to manage unreleased features in a continuous integration environment. | [Platform Feature Toggles documentation](https://github.com/department-of-veteran-affairs/feature-toggles) |

### Third-party Tools

| Tool              | Description                                      | Links                                      |
|-------------------|--------------------------------------------------|--------------------------------------------|
| AWS console       | AWS cloud access management.                     | [AWS console website](https://aws.amazon.com/console) |
| Drupal            | The VA.gov Content Management System (CMS) Drupal 8. It acts as a Content API for the WEB application, and a CMS for VA.gov Content Team. | [Drupal.org](https://www.drupal.org) \| [VA.gov Drupal](https://github.com/department-of-veteran-affairs/va.gov-cms) |
| GitHub Actions    | CI/CD. Developer workflow automation. Allows you to build, test, and deploy your code right from GitHub. | [GitHub Actions product documentation](https://docs.github.com/en/actions) \| [Platform GitHub Actions Usage documentation for Frontend Engineers](https://github.com/department-of-veteran-affairs/github-actions) |
| GitHub Desktop    | Desktop Git client that allows us to work with the GitHub-hosted VA repositories. In addition to a UI, it also installs the Git command-line client. | [Desktop.GitHub.com](https://desktop.github.com) |
| Jenkins           | Automation and deployment. ℹ **Note:** Will be replaced by GitHub actions for CI purposes and with ArgoCD for CD purposes.   | [Jenkins.io](https://www.jenkins.io) \| [Platform Jenkins tool](http://jenkins.vfs.va.gov/)
| Visual Studio Code | IDE to modify and debug code, especially front-end React, but also back-end Ruby/Rails. Sticking to this popular IDE makes it easier to recommend and standardize code-assist/quality extensions (plug-ins). | [VisualStudio.com](https://code.visualstudio.com) \| [VisualStudio.com docs](https://code.visualstudio.com/docs) |
| Docker            | App containerization tool. Needed to run Ruby, Postgres and all the necessary tools to execute the VA APIs. | [Docker.com](https://www.docker.com) |
| PGAdmin           | PostgreSQL database management tool.             | [PGAdmin.org](https://www.pgadmin.org) |
| Postgres          | Open-source relational database management system. | [Postgresql.org](https://www.postgresql.org) |
| Postman           | API development environment.                     | [Postman.com](https://www.postman.com) |

| Tool              | Description                                      | Links                                      |
|-------------------|--------------------------------------------------|--------------------------------------------|
| Visual Studio Code | IDE to modify and debug code, especially front-end React, but also back-end Ruby/Rails. Sticking to this popular IDE makes it easier to recommend and standardize code-assist/quality extensions (plug-ins). | [VisualStudio.com](https://visualstudio.com) \| [VisualStudio.com docs](https://visualstudio.com/docs) |
| Docker            | App containerization tool. Needed to run Ruby, Postgres, and all the necessary tools to execute the VA APIs. | [Docker.com](https://www.docker.com) |
| PGAdmin           | PostgreSQL database management tool.             | [PGAdmin.org](https://www.pgadmin.org) |
| Postgres          | Open-source relational database.                 | [Postgresql.org](https://www.postgresql.org) |
| Postman           | API development environment.                     | [Postman.com](https://www.postman.com) |
| Sidekiq           | Background job processing for Ruby.              | [Sidekiq.org](https://sidekiq.org) |

## Monitoring Tools

| Tool              | Description                                      | Links                                      |
|-------------------|--------------------------------------------------|--------------------------------------------|
| AWS Cloudwatch    | Monitoring and observability service.            | [AWS Cloudwatch](https://aws.amazon.com/cloudwatch) |
| Grafana Loki      | Log aggregation system.                          | [Grafana Loki](https://grafana.com/oss/loki) |
| PagerDuty         | Incident management platform.                    | [PagerDuty.com](https://www.pagerduty.com) |
| Prometheus        | Monitoring and alerting toolkit.                 | [Prometheus.io](https://prometheus.io) |
| DataDog           | Monitoring and analytics platform.               | [DataDog.com](https://www.datadoghq.com) |
| Sentry            | Error tracking and performance monitoring.       | [Sentry.io](https://sentry.io) |
| Speedcurve        | Front-end performance monitoring.                | [Speedcurve.com](https://www.speedcurve.com) |

## Testing Tools

| Tool              | Description                                      | Links                                      |
|-------------------|--------------------------------------------------|--------------------------------------------|
| Chrome Extension: redux devtools | Debugging tool for Redux applications. | [Redux DevTools](https://chrome.google.com/webstore) |
| Cypress           | End-to-end testing framework.                    | [Cypress.io](https://www.cypress.io) |
| Locust            | Open-source load testing tool.                   | [Locust.io](https://locust.io) |
| Pact              | Contract testing tool. Test integration points with vets-api in a non-production environment. Catch issues with integrations before they reach production. | [Pact.io](https://pact.io) \| [Platform Pact user guide](https://pact.io/docs) |
| Review Instances  | Use review instances to preview and demo changes before deploying to production. | [Platform review instances user guide](https://platform.va.gov) |
| Test User Dashboard | Allows you to search for test user accounts that you can use to log in to VA.gov applications and features for testing purposes. | [Test User Dashboard](https://platform.va.gov) |
| TestRail          | Test case management tool. Requires an account in the Platform TestRail instance. | [gurock.com/TestRail](https://www.gurock.com/testrail) \| [Platform TestRail documentation](https://platform.va.gov) |
| Chrome Extension: axe DevTools | 508 accessibility scanning. | [axe DevTools](https://chrome.google.com/webstore) |
| Lighthouse        | Open-source, automated tool for improving the quality of web pages. | [Lighthouse](https://developers.google.com/web/tools/lighthouse) |
