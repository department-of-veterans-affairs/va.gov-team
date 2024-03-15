# VSP Identity Frontend Engineers
__Current Team__ 
- Alex Garcia

> Open links in a new tab to avoid frustration

## Getting Started

1. Focus on finishing company/program onboarding before starting here
2. Start on the [new team member to-do list](https://vfs.atlassian.net/wiki/spaces/VI/pages/1943044100)
3. Get added to the [department-of-veterans-affairs](https://github.com/department-of-veterans-affairs) organization on Github. Your program manager can help get this started
4. Make sure you are added to the vsp-identity team on Github.  can help with this
5. Get SOCKS/AWS Access - see below
6. Get Google analytics Access - see below

## Commonly used repositories

- [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website) - the core frontend repository for VSP Identity. It is comprised of a collection of React applications that are stitched together at build
- [`vets-api`](https://github.com/department-of-veterans-affairs/vets-api) - the backend that provides vets-website endpoints
- [`content-build`](https://github.com/department-of-veterans-affairs/content-build) - where the bulk of content is provided to vets-website, content is populated via Drupal
- [`vets-api-mock-data`](https://github.com/department-of-veterans-affairs/vets-api-mock-data) - mocked data to be used in conjunction with local vets-api

## vets-website Identity owned files
- `src/applications/auth/*`
- `src/platform/user/authentication/*`
- `src/platform/user/tests/authentication/*`
- `src/platform/site-wide/user-nav/containers/AutoSSO`
- `src/platform/site-wide/user-nav/tests/containers/*`
- `src/platform/site-wide/ebenefits/*`
- `src/applications/login/*`
- `src/platform/utilities/sso/*`

> This list is not comprehensive as the nature of the application is always changing. As frontend devs on this team, we should take onus on attempting to update this as often as possible.

A useful VSCode extension, [favorites](https://marketplace.visualstudio.com/items?itemName=howardzuo.vscode-favorites), will allow you to favorite these files and display them in a “favorite” tab to allow quick navigation. Thanks  

## Requesting Access to SOCKS/AWS

1. To request SOCKS, create a [new issue using this link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=socks-access-request.yml&title=Access+for+%5Bindividual%5D) and follow the steps.
  a. SSH key is required for SOCKS. If you don't have a SSH Key or know how to find it [click here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key) for instructions.
2. AWS is optional and should be requested when needed. Use the [AWS access template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=Access+for+%5Bindividual%5D) to request access.

## Requesting Access to Google Analytics

1. Create a [new issue using this link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request%2C+access-request&template=analytics-request-google-analytics-domo-access.md&title=Request+access+to+Google+Analytics+and%2For+Domo) and follow the steps. You can see an [example here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32439)
2. Wait for confirmation via the slack thread created in the issue

## Setting up `vets-website` on Apple Silicon (M1 Chipset)

> `vets-website` has a dependency on `node-sass` which will not compile on Apple devices with this chipset.

Luckily, they provide emulation via Rosetta which will allow us to work around this.

1. Make a copy of the `terminal` application and name it something like `terminal x86`
2. `Right click -> Get Info` On this newly created application in finder, and check the box `Open using Rosetta`
3. Ensure you are on the [proper version of Node](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.nvmrc) & NPM.
4. If you use NVM, installing that version will come packaged with the correct version of NPM
5. `cd path/to/vets-website` and run `arch -x86_64 zsh`
  a. Make sure you are running this in the newly created terminal
6. Run the `vets-website` [setup](https://github.com/department-of-veterans-affairs/vets-website) as usual

> If you terminate the terminal, or open a new one, you will have to re-execute `arch -x86_64 zsh` when opening a new instance

## [More FE Useful Information for VSP Identity](https://vfs.atlassian.net/wiki/spaces/VI/pages/1998422084/Frontend+Identity+General#Standard-Work-Flow)

