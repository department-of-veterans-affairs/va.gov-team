## Sitewide Repositories
Our team contributes to building the Drupal CMS, many portions of the unauthenticated VA.gov experience, and we own several small APIs that power some of our products. We do not own any Devops or CI/CD infrastructure for builds, deployments, or running automated tests, but partner with VA Platform teams who own and support the infrastructure we rely on.

## Tech stack
Our technical stack spans several different repositories. Each repository includes READMEs to help explain its nuances. 
- [vets-api](https://github.com/department-of-veterans-affairs/vets-api) is a Ruby on Rails API layer. Any integrations with systems outside of VA.gov route through vets-api, with the exception of CMS data migrations.
- [va.gov-cms](https://github.com/department-of-veterans-affairs/va.gov-cms) powers the Drupal CMS, including data migrations from other systems. This repo is also where our team’s ticketing and sprint boards live.
- [content-build](https://github.com/department-of-veterans-affairs/content-build) is the templating layer of the front-end, and uses Node.js, Metalsmith, and liquid.js templates.
- [next-build](https://github.com/department-of-veterans-affairs/next-build/tree/main) is a newer templating layer of the front-end built in NextJS, that will eventually replace content-build. We are slowly migrating templates from content-build to next-build.
- [vets-website](https://github.com/department-of-veterans-affairs/vets-website) houses frontend Node.js / React apps. Many teams in the VA ecosystem code exclusively in vets-website and vets-api.
- [vsp-platform-revproxy](https://github.com/department-of-veterans-affairs/vsp-platform-revproxy) Primarily owned by Platform team. Our main contribution to this repo is adding content redirects to [redirects.yml](https://github.com/department-of-veterans-affairs/vsp-platform-revproxy/blob/main/template-rendering/revproxy-vagov/vars/redirects.yml)

### Front-end environment setup 
- Read Platform Developer Docs: Run and build VA.gov locally for steps to configure your environment and run locally.
- Read the content-build README for context 

### Drupal CMS environment setup 

- [CMS README](https://github.com/department-of-veterans-affairs/va.gov-cms/tree/main) for context on available documentation 
- [CMS Getting Started README](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/getting-started.md)
- [CMS](https://github.com/department-of-veterans-affairs/va.gov-cms)
- [Next build](https://github.com/department-of-veterans-affairs/next-build) 

### Build systems / Staging environment information
- [Repo relationship & Envs map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723134921510/3622bf7305d3e10698094aa13525f36617c472d7) which spells out the connections between the various repositories
- [Front-end deployment dashboard](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/) displays the deployment status of commits in content-build and vets-website, through Dev > Staging > Prod. This will help you understand when your features are live.
- [Drupal environments](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/environments.md) - explains the CMS > content build process and data source / snapshot timing for all lower environments
- [Platform Developer Docs: Deployments](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployments) has information on build times for each repository
-[CMS & Front-end Repos & Build jobs - cheatsheet](https://docs.google.com/spreadsheets/d/164H07n4FChg-JxJZu964nfg2wAX0kPD0SjTfZMhzj_I/edit#gid=0) is a team-maintained unofficial document to help navigate build system timings & channels for notifications

### [VA Platform documentation]
- [VA Platform team documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/) - Platform centrally supports all product development teams, including infrastructure, DevOps, and developer tooling
- [VA.gov tools overview](https://depo-platform-documentation.scrollhelp.site/getting-started/Request-access-to-tools.969605215.html) has information on other available tools.
- [VA Technical Architecture Overview](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/TechnicalArchitectureOverview.md) describes the technical architecture of va.gov and api.va.gov
- [VA's Office of the CTO (OCTO) engineering excellence guiding principles](https://dsva.slack.com/archives/C04KXPXL4/p1674065912579799)
- [Quick and dirty Topic Dive to learn about how we use Feature Toggles / flippers](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/sitewide/topic-dives#61724---flippers--feature-toggles)
- [Steps to Request Flipper access](https://depo-platform-documentation.scrollhelp.site/developer-docs/flipper-ui-access)
- [GraphQL Explorer](https://prod.cms.va.gov/graphql/explorer) acts as the Drupal content API, for building queries that can be used in FE templates. The Explorer (on Prod, or locally)  will allow you to test those queries.

### See also
- [Sitewide contract transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/sitewide-2022-2025/2025-contract-transition.md#monitoring) 
- [Topic dives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/sitewide-2022-2025/topic-dives)
