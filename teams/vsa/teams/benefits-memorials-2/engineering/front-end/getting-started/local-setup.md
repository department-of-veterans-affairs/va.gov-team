# Local (CMS) Front-end Setup

## `vets-website`

### Configuration

The configuration needs to be updated so Mapbox will run properly.

- Request a mapbox token from the team
- Create a `.env` file in the root directory
  - Double-check that it is included under `.gitignore` and won’t be accidentally committed to the repo
- Add the below line to the `.env` file

```
MAPBOX_TOKEN=<TOKEN_HERE>
```

### Commands

First, make sure the most recent version of Node is being used and dependencies have been updates.

* `nvm use` to check the Node version. See this page for using `homebrew` to install `nvm`.
* `yarn install` or `yarn update` to install or update dependencies.
* `yarn build` for the initia build of the application and pages.
* `yarn watch --env api=https://dev-api.va.gov` to run the webpack dev server.
  * To compile specific sections, use the `entry` parameter. For example, `entry=facilities,static-pages`
* To run our apps, use this command: `yarn watch --env entry=auth,login-page,profile,static-pages,terms-of-use,verify,virtual-agent,combined-debt-portal,request-debt-help-form-5655,dispute-debt,va-profile` 

### Checking Tests

To run specific Cypress tests, run `yarn cy:run --spec "<TEST_FILE_PATH>"`.

## `content-build`

If you need to check how `vets-website` handles custom CMS content, then you will need to run `content-build` locally so that data is used on the front-end.

### Commands

First run `yarn build` to build the static files locally. It should be run as-is the first time, but it will take a while due to the long asset compilation.

On consecutive local runs, you can run `yarn build --use-cached-assets` to avoid unneeded asset compilation locally. If this does not work, you can comment out `src/site/stages/build/index.js#247-252` (see below) to prevent asset downloading directly.

```js
smith.use(rewriteDrupalPages(BUILD_OPTIONS), 'Rewrite Drupal pages');
smith.use(createDrupalDebugPage(BUILD_OPTIONS), 'Create Drupal debug page');
smith.use(downloadDrupalAssets(BUILD_OPTIONS), 'Download Drupal assets');
smith.use(downloadAssets(BUILD_OPTIONS), 'Download application assets');
smith.use(createSitemaps(BUILD_OPTIONS), 'Create sitemap');
smith.use(updateRobots(BUILD_OPTIONS), 'Update robots.txt');
```

Then, run `yarn-serve` for `content-build` locally on port 3002. You will then need to run `yarn watch` for `vets-website` without the `api` argument.

#### Using a Tugboat CMS Instance

If you have a tugboat instance of the CMS running with specific data you need to test against, it needs to be included in the `yarn build` command. See the below example, where `https://cms-xptmfsnjoodldn85nzgkrgljqtfbz24b.demo.cms.va.gov/` is an example tugboat CMS URL.

```
yarn build --pull-drupal --drupal-address=https://cms-xptmfsnjoodldn85nzgkrgljqtfbz24b.demo.cms.va.gov/ username=<TUGBOAT_EMAIL> password=<TUGBOAT_PASSWORD>
```
