# Web Component library

**Author(s):** Brooks Johnson  
**Last Updated:** January 13, 2021  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Chris Valarida_ \[ \], _Michael Fleet_ \[ \]


## Overview

### Objective

The goal is to establish a component library based on Web Components, which are a browser standard. This will supercede the current `component-library` code and some of the liquid HTML templates currently in `vets-website`. A non-goal is creating an entirely new visual experience as part of the component library.

The intended audience for this document is frontend engineers.

### Background

Currently, the design system has various implementations of "components" scattered in various places to serve various tools/libraries:

- The `formation` npm package
  - This contains static HTML/CSS (and sometimes JS), and is used by copy-pasting markup onto static pages
-  The `component-library` package
  - This is the rebranded `formation-react`, containing React implementations of some patterns defined in `formation`. Can only be used inside React apps
- Liquid templates in `vets-website`
  - This is similar to the static found in `formation`. These templates of components are only used in the content build for va.gov

Maintaining multiple sources of truth is a burden for all teams involved and leads to wasted time.

### High Level Design

The goal is to establish a single codebase and documentation for the implementation of design system components. This will allow the components to be used in React apps, static HTML, or any other web framework.

The Web Component library will live in its own repo and will be added to `vets-website` as a dependency, where the components will be loaded and defined for the browser to use. As more components are added to the Web Component version of the library, the older React-specific components will be phased out.


## Specifics

### Detailed Design

#### Migration to Web Components

In the `component-library` repo, we will start a fresh orphan branch for the Web Component version of the library to live. If we reach a point where the React version of the library is no longer in use, we will rebase the orphan Web Component branch off of master (in order to cleanly preserve the history) and that will become the new default branch going forward.

Until we reach that point, the WC branch will be developed in the `component-library` repo alongside the main branch containing the React components. The WC branch will not be published to npm, and the `vets-website` dependency will instead [use a Git url with a tag](https://classic.yarnpkg.com/en/docs/cli/add/).

> `yarn add <git remote url>#<branch/commit/tag>` installs a package from a remote git repository at specific git branch, git commit or git tag.

We will use a [Github Release](https://github.com/department-of-veterans-affairs/component-library/releases/new) to create a new tag for the branch we want. The tags will follow [semantic versioning](https://semver.org/), and will be created after enough new development has landed in the branch (i.e. a new component, bugfix, etc. Documentation typo fixes won't get a release). A tag will have the pattern `wc-vX.Y.Z`, where `X`, `Y`, and `Z` represent major, minor, and patch versions respectively.

If a new Web Component is created that replaces an existing React component, the Web Component dependency in `vets-website` will be updated to the new tag and VFS teams will be able to use this component in their code according the the associated documentation for how to use the component. After a sprint, the React component will be removed from `component-library` and a new npm version will be published. This means that any teams that haven't updated their code will cause the build to break on the newest `component-library` version. **It will be the VFS teams' responsibility to update their app code to use the appropriate components**. It will be the job of the Design System engineers to provide Web Components which achieve parity with their React counterparts.

#### Tooling

This WC-specific branch will use [Stencil](https://stenciljs.com/) as a tool to help build the Components, and it will also have [Storybook](https://storybook.js.org/) integration. Updates to this branch will follow the typical development flow using PRs. Anytime a new WC is developed or a significant change is made, a new release will be tagged.

With Stencil, the source for each Component and any helper functions will be written in [TypeSCript](https://www.typescriptlang.org/). This will bring all of the benefits of static typing to our component library, and the output bundle will be transipled to JS.

#### Styling

One of the additional benefits of Web Components is how they can be styled. Each Component can have its own styles scoped to its [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) (this means that if a Component renders a `<div>`, the CSS can broadly style the `div` node without worrying about it affecting all the other `<div>`s on the page). As a result, each component will have it's own CSS file which also makes use of global [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

#### Loading Web Components on va.gov

Once in `vets-website`, the setup code for the WC library will be in its own entry file that is loaded on each page. In addition, this script will be one of the first loaded in order to ensure that the Components will be defined in the browser before they are rendered on the page.

### Code Location

The code will live in the `component-library` repo on a dedicated orphan branch named `web-components`. This code will be used in `vets-website` via a dependency in `package.json`

### Testing Plan

Each Component will have:

- Unit and E2E tests written using Jest
- One or more stories in Storybook to validate appearance/behavior

As of mid-January 2021, Stencil provides an experimental screenshot visual diff testing functionality. If this becomes stable, we will consider adopting it.

### Logging

N/A

### Debugging

Storybook will be a useful tool for debugging and development. Stencil also comes with its own development server which can be used.

There will be no special provisions for debugging provided for consumers of the WC library.

### Caveats

To be determined.

### Security Concerns

N/A

### Privacy Concerns

N/A

### Open Questions and Risks

Accessibility and performance are two things that should receive lots of attention.

Do we want to remove the explicit dependency on [USWDS](https://designsystem.digital.gov/)? Rather than explicitly relying on `uswds`, the Component library could be an abstraction for `vets-website` that implements the appropriate styles from `uswds`. A Component library complete with global styling defaults might be able to accomplish everything that `uswds` is providing.

#### Risks

Despite polyfills, there is some risk of certain Web Component features not working properly in all browsers (IE 11, older versions of Edge). Due to existing polyfill support combined with the trend of users switching to more modern browsers over time, this is a low risk. To mitigate this risk, we will only use Web Component features which are supported with or without pollyfills on all [supported browsers](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/documented-decisions/browser-support/).

### Work Estimates

Note: These estimates do not account for time spent on other team duties such as support requests.

#### Stencil Project setup with Storybook integration

**Estimate:** ~3 days

This has already been done as a PoC - some additional work should be done to make sure that the built version of storybook can use the Web Components

#### Create new Webpack entry for Web Component loader

**Estimate:** ~2 days

`vets-website` should create a `wc-loader.entry.js` file that will get loaded in the `<head>` of each page.

#### Develop an Accordion Web Component

**Estimate**: ~4 days

This will be the first WC to go live on va.gov.

### Alternatives

There isn't another way of achieving a proper (i.e., not copy-pasted HTML) component library that isn't specific to a single framework like React. However, there are other tools/frameworks besides Stencil that we could use to build Web Components.

There are [dozens of tools/frameworks](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) that can be used to build Web Components, with [LitElement](https://lit-element.polymer-project.org/) being one of the bigger ones. Here are some reasons that Stencil was chosen over all of these alternatives:

- JSX support
  - Stencil is one of the few tools for building Web Components that lets the developer use JSX  syntax, as opposed to a template string or direct DOM manipulation in order to create the HTML  nodes. This will be very familiar for React developers.
- Typescript
  - The Component source will be written in TypeScript, and static typing can help eliminate bugs in code as well as allow developers to gain a clearer understanding.
- Auto-generated component docs
  - Stencil is able to automatically generate a README for each component with documentation on its props, events, CSS variables, and more. This can be combined with Storybook.

### Future Work

Continue adding Components until the React version of `component-library` is completely replaced. Web Components can co-exist fine with React components, but it will be easier if we only have to maintain a single library.

#### Templating

The library could be extended to include Components focused on overall site layout in addition to the more granular Components. This could allow us to use Web Components as a replacement for the Liquid templates in `vets-website`.

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Jan XX, 2021 | Design doc approved. | Brooks Johnson
Jan 13, 2021 | Initial draft begins. | Brooks Johnson
