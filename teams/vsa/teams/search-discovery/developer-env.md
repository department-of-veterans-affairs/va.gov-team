# Search & Discovery Development
This describes setting up the environment to work on the Search & Discovery products on a MacBook Pro. The [technical outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/VSA%20Technical%20Orientation.md) for VSA developers, which contains information on our stack, Slack, and lots of helpful links, should be read prior to this document.

## Software Used
- [VS Code](https://code.visualstudio.com/download)
  - Extensions
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
- [iTerm2](https://iterm2.com/downloads.html)
- [Core Tunnel](https://apps.apple.com/us/app/core-tunnel/id1354318707?mt=12)
- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)
- NODE

## Setup
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
  5. In the menu bar, click the Core Tunnel logo, then click the `VA` connection. The connection is indicated as follows: 
     - 🔴 : Not connected
     - 🟡 : Connecting...
     - 🟢 : Connected 

## Repositories
### Content Build

### Vets Website
