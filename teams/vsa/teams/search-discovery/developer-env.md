# Search & Discovery Development
This describes setting up the environment to work on the Search & Discovery products on a MacBook Pro.

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

## Repositories
### Content Build

### Vets Website
