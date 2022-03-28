# Search & Discovery Development
This describes setting up the environment to work on the Search & Discovery products on a MacBook Pro. The [technical outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/VSA%20Technical%20Orientation.md) for VSA developers, which contains information on our stack, Slack, and lots of helpful links, should be read prior to this document.

***Note for developers updating this document***: Everyone does things differently. If you make a change to this, it is recorded in the git history; however, people don't tend to check that for ReadMe files. So I suggest using footnotes and strikethrough. To add a footnote to lines that change, add `[^#]` to the end of the line, as well as adding `[^#]: <Footnote text>` at the bottom of the document.[^1]. If removing information, add a strikethrough by surrounding the text in a double tilde `~~`.

## Software Used
- [VS Code](https://code.visualstudio.com/download)
- [iTerm2](https://iterm2.com/downloads.html)
- [Core Tunnel](https://apps.apple.com/us/app/core-tunnel/id1354318707?mt=12)
- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)
- [Postman](https://www.postman.com/downloads/)
- [GitKraken](https://www.gitkraken.com/download)

## Software Setup
### VS Code
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

### iTerm2
By default, the terminal defaults to ZShell. Use `chsh -s /bin/bash` to change from ZShell to Bash.

If you would like to colorize your terminal with Git colorization, create a `.bash_profile` file in your root directory and populate it with the contents of
[bash_profile.txt](https://github.com/department-of-veterans-affairs/va.gov-team/files/8352080/bash_profile.txt). Restart your terminal or run `source ~/.bash_profile` for it to take effect.

### NVM/NPM/Node
Node `v14.15.0` is used for all the repositories for the VSA project. It should be installed with `NVM`, as Home Brew can cause various issues. NVM is a Node Version Manager that allows installing multiple versions of Node and provides a method to quickly and easily switch between versions.

To install, run the curl command noted in the repository linked above. As of 3/25/2022, the command is `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`. Once the command has finished, restart the terminal and run `nvm -v` to verify installation of NVM `v0.39.1`.

Once NVM has been installed, install Node `v14.15.0` using the command `nvm install 14.15.0`.

### SOCKS
SOCKS, which stands for *Socket Secure*, is a network protocol that facilitates communication with servers through a firewall by routing network traffic to the actual server on behalf of the client. It is required for building the `content-build` repository locally, among other things. 

Access needs to be requested for SOCKS via [SOCKS Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2C+operations%2C+ops-access-request&template=socks-access-request.yml&title=Access+for+%5Bindividual%5D). Access also needs requested for the [devops](https://github.com/department-of-veterans-affairs/devops) repository. 

Once access has been granted, it can be setup using [`vtk`](https://github.com/department-of-veterans-affairs/vtk) or can be connected to via [Core Tunnel](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/vsa/teams/search-discovery/developer-env.md#core-tunnel). 

### Core Tunnel
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

## Repositories
- Frontend
  - [Vets Website](https://github.com/department-of-veterans-affairs/vets-website): Core frontend platform and application code.
  - [VA Gov Content](https://github.com/department-of-veterans-affairs/vagov-content): Markdown content used to generate static pages.
  - [Content Build](https://github.com/department-of-veterans-affairs/content-build): Liquid templates and content build for static pages.
  - [Veteran Facing Services Tools](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools): Shared front end components (including non VA.gov users) and frontend documentation site.
 
- Backend: 
  - [Vets Api](https://github.com/department-of-veterans-affairs/vets-api): Core Ruby on Rails API server application code.
  - [Vets Api Mock Data](https://github.com/department-of-veterans-affairs/vets-api-mockdata): Mock data used when running locally and on dev for the backend

- Shared: 
  - [Vets Json Schema](https://github.com/department-of-veterans-affairs/vets-api): Shared JSON Schema definitions used by form applications and the APIs that they consume.

## Starting Environment for Search Development[^1]
1. Clone all repositories above into the same directory. 
2. Setup the Content Build
   1. Navigate to `content-build` in a terminal window.
   2. Fetch the origin: `git fetch origin`
   3. Pull down master changes: `git pull master`
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
   3. Pull down master changes: `git pull master`
   4. Install node modules: `yarn install`
   5. If you would like connect to the API without running the `vets-api` locally:
      1. Open `vets-website` in VS Code: `code .`
      2. Open the [platform environment file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/environment/index.js) located at `src/platform/utilities/environment/index.js` 
      3. On line 59, change `API_URL: environment.API_URL` to `API_URL: 'https://staging-api.va.gov'`
         - This connects the `vets-website` to the staging API.
   7. Run `vets-website`: `yarn watch`
      - NOTE: This runs the `content-build` on `http://localhost:3001`
4. In a browser, navigate to `localhost:3002`

The environment should now be set up and running. Once code changes have been made, save the file. The terminal window running the `vets-webite` will show the code re-building. Once complete, refresh the browser window to reflect the code changes. 

[^1]: This is as of 3/25/2022 as per [Tyler Simoni](https://github.com/TSimmz)
