# Bundling the forms library as a Node package

**Author(s):** Brooks Johnson 
**Last Updated:** September 24, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Chris Valarida_ \[ \], _Michael Fleet_ \[ \], ...  

## Overview

### Objective

The goal of this project is to define clear boundaries around the collection of code, markup, and styling that is referred to as "the forms library".

Some non-goals are:

- Bug fixes to the forms library
- Adding new features to the forms library
- Refactoring the forms library beyond what is required to group the existing code together in the same package
- Establishing a separate build & publish pipeline for the forms library (yet)

The intended audience for this document is VSP and VFS frontend engineers.

### Background

The forms library is a collection of React components, CSS, and JS that allows an app team to build a form application for `vets-website` using a combination of JSON schemas.

Right now in `vets-website` we have the following folders containing code for the forms library:

- `src/platform/forms`
- `src/platform/forms-system`

We also have forms-adjacent code in the form of other dependencies

- `@department-of-veterans-affairs/react-jsonschema-form` (See [Tighter dependencies](#tighter-dependencies))
- `vets-json-schema`


At the moment, the forms library code is entangled with other platform code, but also some app code.

#### Application entanglement

[This definition file](https://github.com/department-of-veterans-affairs/vets-website/blob/720a867817f5b83bd1d713bd51202863b41739b1/src/platform/forms/definitions/nonMilitaryJobs.js#L1) in the forms library imports some app code, yet the file itself is _only_ used in other app code.

There is a [helper file](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/applications/personalization/dashboard/helpers.jsx) in `src/applications/personalization` which exports a number of consts which are used in the following files within the forms library:

- [`ApplicationStatus.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/platform/forms/save-in-progress/ApplicationStatus.jsx#L6-L10)
- [`SaveInProgressIntro.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/platform/forms/save-in-progress/SaveInProgressIntro.jsx#L12-L15)
- [`FormSaved.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/platform/forms/save-in-progress/FormSaved.jsx#L10)
- [`AuthorizationComponent.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/platform/forms/components/AuthorizationComponent.jsx#L12)

Finally, there are some testing helpers that live in the `src/applications/hca` directory and are used in forms library tests:

- [`01-sip-autosave.e2e.spec.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/platform/forms/tests/save-in-progress/01-sip-autosave.e2e.spec.js#L4)
- [`01-sip-fail-load.e2e.spec.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/platform/forms/tests/save-in-progress/01-sip-load-fail.e2e.spec.js#L3)
- [`01-sip-finish-later.e2e.spec.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/platform/forms/tests/save-in-progress/01-sip-finish-later.e2e.spec.js#L4)
- [`01-sip-review.e2e.spec.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4a3172edc242bf60c93aec5b170c734dc57985/src/platform/forms/tests/save-in-progress/01-sip-review.e2e.spec.js#L3)


#### Platform entanglement

In addition to the forms library, the platform provides other code that is used both in the forms library and in applications. 

- `utilities`
- `monitoring`
- `site-wide`
- `user`
- `static-data`

These aren't strictly part of the forms library, but since the forms library makes use of its parent platform code, it becomes more difficult to place clear boundaries around the forms library.

### High Level Design
_A high-level description of the system. This is the most valuable section of the document and will probably receive the most attention. You should explain, at a high level, how your system will work. Don't get bogged down with details; those belong later in the document._

The forms library will be consolidated into a single place and bundled as a Node package.
This will allow VFS teams to import it as if it were any other Node module.

This change should not have a noticeable functional impact on individual app teams.
Towards the end the only change that should be made on the app side of things is changing where forms library code/styles are imported from.

<!-- The source for this diagram is the `*.odg` file in the same directory, a LibreOffice Draw doc-->
![Forms library bundling](images/forms-library-package/forms-library-package.svg)

## Specifics

### Detailed Design

_Here's an easy rule of thumb for deciding what to write here: Think of anything that would be a pain to change if you were requested to do so in a code review. If you put that implementation detail in here, you'll be less likely to be asked to change it once you've written all the code._

- Use the `no-unresolved-modules` ESLint plugin to [find & remove unused code](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8763) in the `forms` and `forms-library` directories
- Copy what remains from `forms` into `forms-system`
- [Add an alias to the `babelrc` file](https://github.com/department-of-veterans-affairs/vets-website/blob/055d96c54e1df54138b9efc589b98e55962333b3/.babelrc#L50-L55) that redirects imports from `platform/forms` to `platform/forms-system`
- Configure the `no-restricted-imports` ESLint rule to [restrict imports of `src/platform/packages` directly](https://eslint.org/docs/rules/no-restricted-imports)
- Edit the webpack config & use a custom `sass-loader` importer to rewrite imports from `forms` to `forms-system`
- Add a `package.json` file to `src/platform/packages/forms-library`, complete with all of the forms library dependencies

Once the forms library is actually a package, app code can be updated to import from it directly instead of relying on the  aliases.

- Each app team will update their code to use forms library JSS & SCSS from the package instead of by direct path
- Remove the alias & custom SASS importer

### Code Location

The forms library package will live in `src/platform/packages/forms-library`.
Since it will be a Node package, it will be added to the `package.json` file and apps will import it as a regular Node package instead of by its direct path.

### Testing Plan

We have ESLint rules in place which can verify that the right JS is imported as it relates to the forms library.
Additionally, many of the end-to-end tests will fail if the forms library is not imported properly, so they will help with awareness.

We don't have any automation in place to validate that the right SASS files are imported, so testing that forms styling is working properly will be a manual process using the browser dev tools.

### Logging

N/A

### Debugging

Since this project isn't about changing functionality of the forms library, we don't need to add any debugging tools. Validating that the app code can still access the forms library in its new location will be enough.

### Caveats

Though we will be creating a package for the forms library, we will not be following semantic versioning since it is _just_ a package and not a published module.
The additional overhead of updating the forms-library's `package.json` file and updating the `yarn.lock` file in `vets-website` to target the newest (but unpublished) version seems like a burden without much benefit.

### Security Concerns

N/A

### Privacy Concerns

N/A

### Open Questions and Risks
_This section should describe design questions that have not been decided yet, research that needs to be done and potential risks that could make make this system less effective or more difficult to implement._

_Some examples are: Should we communicate using TCP or UDP? How often do we expect our users to interrupt running jobs? This relies on an undocumented third-party API which may be turned off at any point._

_For each question you should include any relevant information you know. For risks you should include estimates of likelihood, cost if they occur and ideas for possible workarounds._

Do we want to separate the forms library build & testing stages from the main `vets-website` build? By easing the load of what webpack and mocha are doing, we could speed things up. The downside is that since we wouldn't be running the forms library tests with every merge into master, we would have to have some other automation in place to make sure that any changes to `src/platform/packages/forms-library` passes the forms library tests.

### Work Estimates
_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives

See the section [Separate repo](#separate-repo) in Future Work. We are avoiding turning the forms library into its own node module with a separate repo because of the additional overhead involved in publishing, setting up CI pipelines, and general additional repo management. This _may_ be a path for the future.
Another reason why we don't want to do this right now is that we would lost the advantage of the ESLint configuration that is part of `vets-website`.
Once this configuration is published we will be able to import it into any repo, and at that point it may make sense to move the forms library out of `vets-website`.

### Future Work

#### Separate repo

One possible option would be to take the package out of `vets-website` and give it its own repo.
With this, we could publish it to npm, and we could completely remove the forms build & test process from `vets-website`, possibly speeding things up since we could avoid running forms tests on every build.

#### Tighter dependencies

Having a `package.json` specific to the forms library will allow us to treat it more like a product that we provide to VFS teams. It will be separate from the rest of the code in `vets-website`, so we could eliminate lodash from the forms library, or replace `moment` with something more appropriate without affecting the rest of the frontend.

Additionally, it might make more sense if we bundled `react-jsonschema-form` in with the forms library. This would help make the forms library feel more cohesive.

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Sep 24, 2020 | Began initial draft | Brooks Johnson
