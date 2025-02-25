# Using experimental branches of the Component Library with vets-website on GitHub Codespaces

Description:

As an engineer, you may want to evaluate an experimental component of the Component Library repository within VA.gov (vets-website). There are [directions for doing this in a local environment](https://github.com/department-of-veterans-affairs/component-library?tab=readme-ov-file#local-testing-in-vets-website-with-verdaccio), but that doesn't allow anyone else to see the
changes on their browser or for that experimental UI to be shared out to anyone on the team to look at. Codespaces can allow for sharing out a live link, but some steps have to be followed to replicate a similar setup to the local environment. Documented below are the steps that have been worked out to allow a Codespace to pull
in the Component Library repo and publish a temporary package version to Verdaccio, and subsequently use this new package version in vets-website to build the frontend with.

## Using Verdaccio in a GitHub Codespace

The global install of Verdaccio was not working in the Codespace, so a different approach was taken. This involves running the Verdaccio server from it's own folder.

### Setting up a Verdaccio npm registry server

- `cd /workspaces && mkdir local-verdaccio && cd local-verdaccio` creates a folder at the /workspaces location and changes to this directory
- `npm init -y ` creates a basic package.json file with default values
- `nvm use 14` sets the nvm version to 14 so that it works with node 14
- `yarn add verdaccio@5.5.0` add verdaccio as a local dependency
- `nano package.json` opens the nano text editor with package.json as the file being edited.
	- add `"verdaccio": "verdaccio` to the scripts section of the package.json file. This allows a user to easily run the verdaccio server from this folder
- `yarn verdacccio` starts the verdaccio server. You should see some server debug output in the terminal, indicating that the server is up and running. Do no close this terminal session, but instead start a new terminal session/tab for any future terminal needs so the server stays running.
- `npm adduser --registry http://localhost:4873/` add an npm user so that packages maybe be plublished to the private verdaccio package server

### Setting up the component-library to be used alongside vets-website in a Codespace

-  `cd /workspaces && git clone https://github.com/department-of-veterans-affairs/component-library` clones the component-library repo adjacent to vets-website, so that it can be used as a dependency via verdaccio
-  `git checkout your-branch-with-experimental-changes` make sure you have checked out you WIP branch so you can use the newest changes to the compoenent library
- run the common `yarn install` and `yarn build` commands for web-components, and core packages like normal.
- you should now be able to publish temporary packages to verdaccio by following the readme section here https://github.com/department-of-veterans-affairs/component-library?tab=readme-ov-file#publish-your-component-library-changes-to-verdaccio along with following the "Link vets-website to local Verdaccio registry" section of the readme.
- If you get a connection refused error, make use nvm has been set to node 14 (just for the publish command) as that seems to affect whether you can publish a package after building it with node 18.
- Run `yarn watch`, `yarn mock-api` or whatever commands that you need to start up your vets-website prototype environment. Form more instructions on how to run vets-website on a Codespace, you may view the [developer docs page on Codespaces](https://depo-platform-documentation.scrollhelp.site/developer-docs/using-github-codespaces)

### Troubleshooting within Codespaces:

- NVM versions of Node should be checked to make sure you are building the component-library with node 18 or 20, but to publish to Verdaccio, Node 14 will need to be used.
- Node 14 is needed to install and run vets-website
- If you need to re-install the node modules in vets-website, a clean slate may help clear up issues.
	- While in the vets-website folder running `rm -rf node_modules && rm yarn.lock && yarn cache clean` will remove the node_modules, yarn lock file, and clean the yarn cache.
	- `yarn install --production=false --prefer-offline` will install the node_modules in dev mode, and will try and use cached versions of modules when possible
- You _may_ need to remove the 'postinstall' script from the package.json file of vets-website if it gives you trouble in a Codespace. This usually resulted from `husky` being missing or the postinstall script failing to run after node_modules were installed.
