Stable URL: https://department-of-veterans-affairs.github.io/design-system

## Getting started with Fractal

These instructions assume you're using Terminal, and that you're starting from scratch as far as a development environment is concerned. If you've already got dependencies installed, move on to **Install Fractal**.

> Please note: If you're on a VA laptop, and don't have Administrator access, you may not be able to install & run Formation locally. Please visit the [stable URL](https://department-of-veterans-affairs.github.io/design-system) to use the system as a reference.

**Start here:**

- You need Homebrew. To install Homebrew, [follow these instructions](https://www.howtogeek.com/211541/homebrew-for-os-x-easily-installs-desktop-apps-and-terminal-utilities/)
- You also need Yarn. To install Yarn, you'll use Homebrew. In Terminal, run `brew install yarn`

**Clone the design-system repo:**

If you're familiar with cloning repos from Github using Terminal, skip ahead to **Install Fractal**.

You can put the repo anywhere on your computer, but as a suggestion:
- In Terminal, navigate to your desktop: `cd ~/desktop`
- Clone the Github repo by running: `git clone https://github.com/department-of-veterans-affairs/design-system.git`
- Then: `cd design-system`

**Install Fractal**

Still in Terminal, run `yarn install`. This will download and install all the dependencies that Fractal needs to run on your local machine. It might take a minute to complete the process.

**Start up Fractal**

* Run `npm run start` and navigate to `localhost:3000` in your favorite browser. You should be all set!

If the `fractal watch` task fails, remove the `dist` directory and try running `npm run start` again.

### Publishing Module

> This assumes you have already merged your PR to master.

1. Build the components

* Run `npm run export-components`

> Builds all JSX files in `src/components` and all js files in `src/helpers` and add them to the `dist/formation` folder.

> `dist/formation` is the root directory of the npm module.

2. Test the components

[yalc](https://github.com/whitecolor/yalc) is recommended for testing module publication- see installation instructions.

* Install Yalc globally if you don't have it.
      $ yarn global add yalc

* With yalc installed, run `npm run test-publish`

> Copies `package.json` to the `dist/formation` directory and publishes the exported components to the local yalc directory as a `@department-of-veterans-affairs/formation` module.

* In the `vets-website` project, run `yalc link @department-of-veterans-affairs/formation` and subsequently `yalc update`

> Installs `formation` to `node_modules` making it available for importing and testing locally.

> See yalc documentation for advanced usage such as automatic updating on publish

3. Update version and merge PR

> Preprequsite: you must be [registered](https://docs.npmjs.com/getting-started/publishing-npm-packages) with npm to publish or update the module. Verify that you are logged in correctly by running `npm whoami`.

> Follow these [instructions](https://docs.npmjs.com/getting-started/publishing-npm-packages#how-to-update-the-version-number) for updating a package (summarized below).

* Update package version number:

- `npm version patch` - for bug fixes and minor changes
- `npm version minor` - for new features that don't break current features
- `npm version major` - for backwards breaking changes

> If you are unsure of which to use, do a major version update.

* Update [npm module readme](module-readme.md)

4. Pull master and publish

* Switch to master and pull. Run preblish: `npm run pre-publish`
* Change directory to `dist/formation` and verify that you have the new version number locally in `package.json`
* Publish: changes `npm publish`

## Deployment

Jenkins automatically publishes the content to GitHub Pages (the `gh-pages` branch on this repository) on pushes to master.

To make changes:

- create a branch off master
- make changes
- create a PR
- ensure PR is approved and Jenkins tests pass (GitHub will not let you merge without these two)
- merge to master and Jenkins will automatically deploy.

## Choosing a design system for Vets.gov

This has been migrated to [another file](research.md) in order to keep the README instructional.
