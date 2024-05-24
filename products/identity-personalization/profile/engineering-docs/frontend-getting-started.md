# Profile Application - General Overview Getting Started Guide

Update: May 22, 2024

- [Purpose](#purpose)
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Useful Terminal Scripts](#useful-terminal-scripts)
- [Other tips and resources](#other-tips-and-resources-for-working-on-the-va-profile-front-end-application)
- [Code Structure and Organization](#code-structure)

## Purpose

The purpose of this document is to help a new software engineer understand how to get started writing code for the Profile application and to give a general overview on how the application works.


## Overview

The Profile is an application that lives at va.gov/profile and serves user specific information like addresses, phone numbers, preferred name, direct deposit banking and more.

From a technical standpoint it is a Single Page Application that utilizes features and libraries like the VA form system, Redux, Feature Toggles, and Lodash.

Each section or page of the profile has its own respective documentation which aims at giving a brief overview of how each page works, what api calls are made, and where in the files certain things like analytics events, error handling, and unique UI components can be found.



## Getting Started

If you are new engineer that is just starting to work on the Profile application FE, there are a few things that can hopefully get you moving quickly.

### [General Setup Docs for the VA.gov frontend](https://depo-platform-documentation.scrollhelp.site/developer-docs/setting-up-your-local-frontend-environment) 
- making sure your general environment is set up with repos cloned in appropriate places.
- Getting familiar with NVM or other Node version management solutions is helpful since the FE runs best on a particular version of Node. If you are switching Node versions frequently you might find it helpful to automatically detect the required version and switch versions automatically within your terminal when navigating to project folders. [Instructions on how to set up auto-switching node versions (stack overflow)](https://stackoverflow.com/questions/23556330/run-nvm-use-automatically-every-time-theres-a-nvmrc-file-on-the-directory)

### [Vets-Website Readme.md](https://github.com/department-of-veterans-affairs/vets-website/blob/main/README.md)
The readme lists all the script commands that can be run through `yarn`, this includes running the site locally, spooling up a mock server, and running tests.


## Useful Terminal Scripts

The commands listed out in the main readme are lifesavers when you are looking to run tests, set up a mock server, or run the FE in 'watch' mode locally. Definitely familiarize yourself with the readme. Below are several commands that can help specifically within the Profile:

---

### Compile and watch the Profile code locally via webpack.

``` bash
yarn watch --env entry=profile
```

Just watching the Profile application entry is much faster than running `yarn watch` because not specifying an `entry` results in all applications getting rebuilt can take quite a while to recompile. Please note that only routes starting in `localhost:3001/profile/*` will load because the Profile application is the only application that is being built, and therefore no other app's entry files are available.

---

### Start a mock server that will create responses for various endpoints that are needed to display the Profile.

``` bash
yarn mock-api --responses src/applications/personalization/profile/mocks/server.js
```

- The mock api uses [mocker-api](https://github.com/jaywcjlove/mocker-api#usage) which is a thin wrapper around the Express server framework


---

### Open Cypress with the interactive UI application to run individual e2e tests visually.

``` bash
yarn cy:open
``` 

This can be useful to run particular tests, but can also be buggy and lag depending on your setup. For ANY cypress tests (ui or headless) the vets website watch command needs to be running locally in some variation so that the UI loads, but the mock api SHOULD NOT be running when executing e2e tests.

---

### Run all e2e tests for Profile in 'headless' mode.

``` bash
yarn cy:run --spec "src/applications/personalization/profile/tests/e2e/**/*"
```

This is faster than using the UI mode, and instead of passing a glob pattern, you could also just pass a path to a single test to run instead. (see vets-website readme for more cypress command examples)

---

### Run all unit tests within the profile.

``` bash
yarn test:unit src/applications/personalization/profile/tests/**/*.unit.spec.js* --log-level trace
```
A glob pattern can be substituted for single test file path as well, for when you are doing TDD on a test. The `--log-level trace` will add detailed trace logs when a tests fails. This can be a lot of noise added to terminal outputs, but can be very useful when trying to figure out exactly why a test fails.

---

### Generate test coverage for a specific app folder.

``` bash
yarn test:coverage --app-folder personalization --coverage-html
```

The app name passed in needs to be relatice to the root src/applications/ folder, so profile or dashboard are not valid names, so personalization will run coverage for those apps and all other apps in the folder.

Then open the `coverage/index.html` file in your browser to view the coverage report application.


## Other tips and resources for working on the VA Profile front end application
	
Simulating the logged in status on FE:

When running a mock-api you will need to set a local storage value. Running `localStorage.setItem('hasSession', true)` in your browser devtools console and then refreshing any `/profile` route, you should see the profile load as a logged in user with the mock api data reflected in the UI.

Using an alias for common commands

Some engineers may want to set up a .bashrc or .zshrc alias for commands so that they can be run quickly from any path in the terminal. 

An example for a .zshrc alias:

``` bash
alias va-mock="cd /Users/username/repo/folder/va-gov/vets-website && yarn mock-api --responses /Users/username/repo/folder/va-gov/vets-website/src/applications/personalization/profile/mocks/server.js"
``` 

A similar alias can be created for the `watch` command and is helpful when working locally and not having to remember all the commands.

---

### [VA.gov | Design System](https://design.va.gov/)

The design system contains tons of useful information about the various ways of building UI for the Profile.

- [Foundation utility classes](https://design.va.gov/foundation/utilities/) - single property classes that can be added to elements to provide specific styling. This is similar to other libraries like [Tailwind](https://tailwindcss.com/) or [Tachyons](https://tachyons.io/)
	- The [responsive prefixes](https://design.va.gov/foundation/utilities/margins#responsive-prefixes) can be particularly helpful when needing to add styling for specific breakpoints like margin or padding.
- [Components](https://design.va.gov/components/) - used throughout the Profile and the [storybook for the components](https://design.va.gov/storybook/?path=/story/about-introduction--page) is particularly useful for exploring the available props for components.
	- [Familiarizing yourself with web components and the VA's usage of web components](https://design.va.gov/about/developers#using-web-components) can help identify how each component behaves and how to hook into the appropriate events when needed.
		- When testing web components, the shadow dom needs to be considered. When writing e2e tests, there are [ways to drill into this shadow dom](https://docs.cypress.io/api/commands/shadow) to do assertions.


[Accessibility!](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-testing) - Keeping accessibility top of mind at all times. 

[Tools and resources for QA testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/tools-and-resources-for-qa-testing) - This section of the platform docs has guides for testing accessibility, cross browser testing and more. [This video on Unit Testing Best Practices for the VA is also great](https://www.youtube.com/watch?v=8Y0cuMUoWAw)

- [React Testing Library for Unit tests (RTL)]([https://testing-library.com/](https://testing-library.com/docs/react-testing-library/intro/))
- [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for unit tests.
- Enzyme has also been used within unit tests in the past, but is not supported anymore, so it should be removed in unit tests and switched to RTL
- [Cypress E2E tests](https://www.cypress.io/)
- [RTL adapter for use in Cypress](https://testing-library.com/docs/cypress-testing-library/intro)

[Platform Crew Youtube Videos](https://www.youtube.com/@platformcrew4065/videos) - Overviews, Accessibility, KPI Dashboards and more

[Old VA Developer Docs](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/) - this is the older documentation site, and eventually it will be deprecated and taken down, but some engineers find this site useful.

- The [Frontend Support Dashboard](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard) will show a summary of the most recent commits to the vets-website and what their deployment status is. This is hugely useful for finding out when your commit is deployed to an environment so that it can be tested and validated. It also has a section that outlines the unit test coverage for each app.

# Code Structure

The code for the Profile application lives in two places. 

### [personalization/profile](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/profile) 
This application folder holds the majority of the FE code, especially when it comes to the individual pages for the application.

Some of the folders present in this application:

- `actions` - redux actions for things like payment information, personal information, and async actions that manage redux application state
- `components` - nested folders named for page level components, shared components, and other React UI components that are needed for Profile.
- `ducks` - an 'experimental' folder that was at one time adopted to hold redux action creators, selectors, reducers and other state logic in one place on a file by file basis instead of seperate folders. Currently the only redux logic that is housed here is the `communicationPreferences`, and may be moved or consolidated at a later point.
- `hooks` - reusable hooks can be stored here. An experimental hook `useProfileTransaction` is located here, but is currently not in use in production, as the work had to be put on hold.
- `mocks` - mock server files used for providing a local server for development
- `models` - a series of class based files that relate to communication preferences
- `reducers` - redux reducers and initial state data that is used when Profile app is started within the main entry file.
- `sass` - sass based styling. Some of this is legacy styling, and when possible it is prefered to use the design system styling utilities over adding custom styling in this folder.
- `tests` - unit and e2e tests
- `util` - shared utilities for things like analytics, error detection, and form field value derivation.

Note: there are also few shared code files in the root `personalization` folder that get used on the profile along with sibling applications like My VA.


### [platform/user/profile](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/user/profile) 

This folder holds more generalized code that is used to access the 'VA Profile Service'. The reason that this section of the platform exists separately is to provide a decoupled solution that can be imported into other applications to allow a user to update some profile information.

An example of this type of pattern being used is the [Appeals/10182 application](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/appeals/10182). This application allows a user to update their address and other contact-information while in the process of filling out the application and provides the best user experience possible.

### [Page specific documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile#frontend) - useful for an overview of each page and the FE features that are unique to them.

