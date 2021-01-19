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

We currently have some "components" implemented in HTML/CSS (and sometimes JS) in the `formation` npm package. These can be used anywhere where `formation` is loaded. We also have `component-library`, which is a package with some of those patterns implemented as React components. These can only be used in React apps. Lastly, in `vets-website` we have some Liquid templates which implement some of the components/patterns of the design system, and these are only used for content builds.

Maintaining multiple sources of truth is a burden for all teams involved and leads to wasted time.

### High Level Design

The goal is to establish a single codebase and documentation for the implementation of design system components. This will allow the components to be used in React apps, static HTML, or any other web framework.

The Web Component library will live in its own repo and will be added to `vets-website` as a dependency, where the components will be loaded and defined for the browser to use. As more components are added to the Web Component version of the library, the older React-specific components will be phased out.


## Specifics

### Detailed Design

In the `component-library` repo, we will start a fresh orphan branch for the Web Component version of the library to live. If we reach a point where the React version of the library is no longer in use, we will rebase the orphan Web Component branch off of master (in order to cleanly preserve the history) and that will become the new default branch going forward.

Until we reach that point, the WC branch will be developed in the `component-library` repo alongside the main branch containing the React components. The WC branch will not be published to npm, and the `vets-website` dependency will instead use a Git url with a tag.

This WC-specific branch will use [Stencil](https://stenciljs.com/) as a tool to help build the Components, and it will also have [Storybook](https://storybook.js.org/) integration. Updates to this branch will follow the typical development flow using PRs. Anytime a new WC is developed or a significant change is made, a new release will be tagged.

One of the additional benefits of Web Components is how they can be styled. Each Component can have its own styles scoped to its [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) (this means that if a Component renders a `<div>`, the CSS can broadly style the `div` node without worrying about it affecting all the other `<div>`s on the page). As a result, each component will have it's own CSS file which also makes use of global [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

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
Jan 24, 2020 | Added approvers, status, and privacy concerns. | Andrew Gunsch
Jan 19, 2016 | Initial Draft based off [Arvados's template](https://dev.arvados.org/projects/arvados/wiki/Design_Doc_Template) which is reminiscent of Google's | Albert J. Wong
