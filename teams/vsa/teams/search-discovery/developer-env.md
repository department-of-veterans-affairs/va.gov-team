# Search & Discovery Development
This describes setting up the environment to work on the Search & Discovery products on a MacBook Pro. The [technical outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/VSA%20Technical%20Orientation.md) for VSA developers, which contains information on our stack, Slack, and lots of helpful links, should be read prior to this document.[^1]

<hr>

## Table of Contents
[Software Used](#software-used)

[Software Setup](#software-setup)

[Repositories](#repositories)

[S&D Products](#products)

[Starting Environment](#starting-environment-for-search-development1)

[Debug Help](#debug-help)

[Helpful Links](#helpful-links)

<hr>

## Software Used
- [VS Code](https://code.visualstudio.com/download)
- [iTerm2](https://iterm2.com/downloads.html)
- [Core Tunnel](https://apps.apple.com/us/app/core-tunnel/id1354318707?mt=12)
- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)
- [Postman](https://www.postman.com/downloads/)
- [GitKraken](https://www.gitkraken.com/download)

<hr>

## Software Setup
### *VS Code*
Extensions Used:
- Prettier
- ESLint
- Docker
- Path Intellisense
- JS JSX Snippets
- GitLens
- Code Spell Checker
- Bracket Pair Colorizer
- Auto Rename Tag
- Better Comments

### *iTerm2*
By default, the terminal defaults to ZShell. Use `chsh -s /bin/bash` to change from ZShell to Bash.

If you would like to colorize your terminal with Git colorization, create a `.bash_profile` file in your root directory and populate it with the contents of
[bash_profile.txt](https://github.com/department-of-veterans-affairs/va.gov-team/files/8352080/bash_profile.txt). Restart your terminal or run `source ~/.bash_profile` for it to take effect.

### *NVM/NPM/Node*
Node `v14.15.0` is used for all the repositories for the VSA project. It should be installed with `NVM`, as Home Brew can cause various issues. NVM is a Node Version Manager that allows installing multiple versions of Node and provides a method to quickly and easily switch between versions.

To install, run the curl command noted in the repository linked above. As of 3/25/2022, the command is `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`. Once the command has finished, restart the terminal and run `nvm -v` to verify installation of NVM `v0.39.1`.

Once NVM has been installed, install Node `v14.15.0` using the command `nvm install 14.15.0`.

### *SOCKS*
SOCKS, which stands for *Socket Secure*, is a network protocol that facilitates communication with servers through a firewall by routing network traffic to the actual server on behalf of the client. It is required for building the `content-build` repository locally, among other things. 

Access needs to be requested for SOCKS via [SOCKS Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2C+operations%2C+ops-access-request&template=socks-access-request.yml&title=Access+for+%5Bindividual%5D). Access also needs requested for the [devops](https://github.com/department-of-veterans-affairs/devops) repository. 

Once access has been granted, it can be setup using [`vtk`](https://github.com/department-of-veterans-affairs/vtk) or can be connected to via [Core Tunnel](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/vsa/teams/search-discovery/developer-env.md#core-tunnel). 


### *Core Tunnel*
For Core Tunnel, you can use the [setup script](https://github.com/department-of-veterans-affairs/vtk/blob/master/lib/vtk/commands/socks/setup.rb) as reference and follow the subcommand routine: 
  1. Download the recommended [`.ssh/config`](https://github.com/department-of-veterans-affairs/devops/blob/master/ssh/config) if missing.
  2. Generate a VA SSH key by running `ssh-keygen -f .`.
  3. In Core Tunnel > Preferences:
     1. In *General*, set *Show as:* to *Menu bar icon*, which gives quick access to Core Tunnel in the menu bar. 
     2. In *Identity*, add your VA SSH key.
     3. In *Advanced*, under *Configuration*, browse for the `.ssh/config`.
  4. In Core Tunnel: 
     1. On the sidebar, create a new tunnel by clicking the plus in the bottom right or right click > "New Tunnel"
     2. Set the name to `VA`.
     3. Set the host to `socks`.
     4. Set the port to `22`.
     5. Under *Forwarding*, set `Local` to `Dynamic`. Set the port to 2001.
     6. Click *Create*.
     7. Close Core Tunnel.
  5. In the menu bar, click the Core Tunnel logo, then click the `VA` connection to begin connecting. The connection status is indicated as follows: 
     - 🔴 : Not connected
     - 🟡 : Connecting...
     - 🟢 : Connected 

<hr>

## Products
| Name | GitHub | VA.gov URL | Description | 
| :--- | :--- | :--- | :--- |
| [Global Search](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/search-discovery/search-products/global-search.md) | [GitHub](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/search) | [Search](https://www.va.gov/search/) | This handles the global search for the VA.gov. It acts as the entry point for the VA search engine, which utilizes [Search.gov](https://www.search.gov), which allows veterans to search for anything they may need on the VA website. |
| [Find VA Forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/search-discovery/search-products/find-forms.md) | [GitHub](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/find-forms) | [Find Forms](https://www.va.gov/find-forms/)| This allows veterans to search for, fill out, and download any forms available in the VA.gov database. | 
| [Resources & Support](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/search-discovery/search-products/resources-support.md) | [GitHub](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/resources-and-support) | [R&S](https://www.va.gov/resources/) | This lets veterans search for resources and support articles or search all of VA.gov. This page also displays commonly used and searched links to various resources. |

<hr>

## Repositories
### Frontend
| Name | Description |
| :--- | :--- |
| [Vets-Website](https://github.com/department-of-veterans-affairs/vets-website) | Core frontend platform and application code.
| [VA Gov Content](https://github.com/department-of-veterans-affairs/vagov-content) | Markdown content used to generate static pages. | 
| [Content Build](https://github.com/department-of-veterans-affairs/content-build) | Liquid templates and content build for static pages. |
| [Veteran Facing Services (VFS) Tools](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools) | Shared front end components (including non VA.gov users) and frontend documentation site. |

### Backend
| Name | Description |
| :--- | :--- |
| [Vets Api](https://github.com/department-of-veterans-affairs/vets-api) | Core Ruby on Rails API server application code. |
| [Vets Api Mock Data](https://github.com/department-of-veterans-affairs/vets-api-mockdata) | Mock data used when running locally and on dev for the backend |

### Shared
| Name | Description |
| :--- | :--- |
| [Vets Json Schema](https://github.com/department-of-veterans-affairs/vets-api) | Shared JSON Schema definitions used by form applications and the APIs that they consume. |

<hr>

## Starting Environment for Search Development[^1]
1. Clone all repositories above into the same directory. 
2. Setup the Content Build
   1. Navigate to `content-build` in a terminal window.
   2. Fetch the origin: `git fetch origin`
   3. Pull down main changes: `git pull main`
   4. Install node modules: `yarn install`
   5. Build `content-build`, if needed.
      1. Copy environment file: `cp .env.example .env`
      2. Connect to SOCKS
      3. Run the build: `yarn build --pull-drupal`
         - NOTE: This will will pull content from the CMS and can take upwards of 3 hours. If you need to do it, definitely start first thing in the morning so you can get on with your day.
   6. Run `content-build`: `yarn watch`
      - NOTE: This can sometimes take 5-10 minutes.
      - NOTE: This runs the `content-build` on `http://localhost:3002`
3. Setup the Vets Website
   1. Navigate to `vets-website` in a terminal window.
   2. Fetch the origin: `git fetch origin`
   3. Pull down main changes: `git pull main`
   4. Install node modules: `yarn install`
   5. If you would like connect to the API without running the `vets-api` locally:
      1. Open `vets-website` in VS Code: `code .`
      2. Open the [platform environment file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/environment/index.js) located at `src/platform/utilities/environment/index.js` 
      3. On line 59, change `API_URL: environment.API_URL` to `API_URL: 'https://staging-api.va.gov'`
         - This connects the `vets-website` to the staging API.
   7. Run `vets-website`: `yarn watch`
      - NOTE: This runs the `content-build` on `http://localhost:3001`
4. In a browser, navigate to `localhost:3002`

The environment should now be set up and running. Once code changes have been made, save the file. The terminal window running the `vets-webite` will show the code re-building. Once complete, refresh the browser window to reflect the code changes. 

<hr>

## Debug Help
There are two subdomains for [VA.gov](https://staging.va.gov/) that can be utilized for debugging:

| Name | URL |
| :--- | :--- |
| Staging | [https://staging.va.gov/](https://staging.va.gov/) |
| Dev | [https://dev.va.gov/](https://dev.va.gov/) |

For each of these, a Metalsmith template object is output from content to the console on each page of the VA site. It contains various information about the page.

<details>
  <summary><strong>Example from <a target="_blank" href="https://staging.va.gov/find-forms/">https://staging.va.gov/find-forms/</a></strong> (Click to expand)</summary>
  
  <img src="https://user-images.githubusercontent.com/17163973/161295617-e9af2d31-3cbe-41c3-a559-428f7cfb5b6d.png"/>
</details>

<hr>

## Helpful Links
- [Citrix Access for Checking VA Email](https://citrixaccess.va.gov/vpn/index_citrix_splash.html)
- [OKTA Sign In](https://salientcrgt.okta.com/)
- [Old SOCKS Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools-old.md)
- [Review Instance Documentation](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Review%20Instances.md#what-is-it)
- [VA Build/Deploy Status](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/)
- [Production Feature Flippers](https://api.va.gov/flipper/features)
- [Staging Feature Flippers](https://staging-api.va.gov/flipper/features)
- [Frontend Styling References](https://design.va.gov/utilities/)
- [Google Analytics Tag Manager](https://tagassistant.google.com/#/!#source=TAG_MANAGER&id=GTM-WFJWBD&gtm_auth=3nsmBjX8YS8-fwR0o3ntKg&gtm_preview=327)
   - Needed to debug event logging
- [Public Websites - How to Redirect](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsa/teams/public-websites/redirects.md)
- [GraphQL Explorer](https://prod.cms.va.gov/graphql/explorer)
   - Username: `api`
   - Password: `drupal8`
- [TugBoat](https://tugboat.vfs.va.gov/projects)
- [Search.gov Admin Portal](https://search.usa.gov/login)
- [Domo Portal](https://va-gov.domo.com/page/-100000)
- [Forms Library Docs](https://react-jsonschema-form.readthedocs.io/en/latest/)

[^1]: This is as of 3/25/2022 as per [Tyler Simoni](https://github.com/TSimmz)
