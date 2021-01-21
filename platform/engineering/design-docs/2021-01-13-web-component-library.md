# Web Component library

**Author(s):** Brooks Johnson  
**Last Updated:** January 13, 2021  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Chris Valarida_ \[ \], _Michael Fleet_ \[ \]


## Overview

### Objective

The goal is to establish a component library based on [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), which are a browser standard. This will eventually supercede the current `component-library` code and some of the liquid HTML templates currently in `vets-website`. A non-goal is creating an entirely new visual experience as part of the component library.

The intended audience for this document is frontend engineers.

### Background

Currently, the design system has various implementations of "components" scattered in various places to serve various tools/libraries:

- The `formation` npm package
    - This contains static HTML/CSS (and sometimes JS), and is used by copy-pasting markup onto static pages
-  The `component-library` package
    - This is the rebranded `formation-react`, containing React implementations of some patterns defined in `formation`. Can only be used inside React apps
- [Liquid templates in `vets-website`](https://github.com/department-of-veterans-affairs/vets-website/tree/958d89f18db29a1f3e1f1cbe4e304299eb387de7/src/site)
    - This is similar to the static markup found in `formation`. These templates of components are only used in the content build for va.gov

Maintaining multiple sources of truth is a burden for all teams involved and leads to wasted time.

### High Level Design

The goal is to establish a single codebase and documentation for the implementation of design system components. This will allow the components to be used in React apps, static HTML, or any other web framework.

The Web Component library will live in its own repo and will be added to `vets-website` as a dependency, where the components will be loaded and defined for the browser to use. As more components are added to the Web Component version of the library, the older React-specific components will be phased out.


## Specifics

### Detailed Design

#### Migration to Web Components

In the `component-library` repo, we will start a fresh orphan branch in a clean directory for the Web Component version of the library to live. When we reach a point where the React version of the library is no longer in use (since it has been replaced with Web Components), we will rebase the orphan Web Component branch off of `master` (in order to cleanly preserve the history) and that will become the new default branch going forward.

Until we reach that point, the WC branch will be developed in the `component-library` repo alongside the main branch containing the React components. The WC branch will not be published to npm, and the `vets-website` dependency will instead [use a Git url with a tag](https://classic.yarnpkg.com/en/docs/cli/add/).

> `yarn add <git remote url>#<branch/commit/tag>` installs a package from a remote git repository at specific git branch, git commit or git tag.

We will use a [Github Release](https://github.com/department-of-veterans-affairs/component-library/releases/new) to create a new tag for the branch we want. The tags will follow [semantic versioning](https://semver.org/), and will be created after enough new development has landed in the branch (i.e. a new component, bugfix, etc. Documentation typo fixes won't get a release). A tag will have the pattern `wc-vX.Y.Z`, where `X`, `Y`, and `Z` represent major, minor, and patch versions respectively.

If a new Web Component is created that replaces an existing React component, the Web Component dependency in `vets-website` will be updated to the new tag and VFS teams will be able to use this component in their code according the the associated documentation for how to use the component. After a sprint, the React component will be removed from `component-library` and a new npm version will be published _with a major version increment_. This means that any teams that haven't updated their code will cause the build to break on the newest `component-library` version. **It will be the VFS teams' responsibility to update their app code to use the appropriate components**. It will be the job of the Design System engineers to provide Web Components which achieve parity with their React counterparts.

#### Tooling

This WC-specific branch will use [Stencil](https://stenciljs.com/) as a tool to help build the Components, and it will also have [Storybook](https://storybook.js.org/) integration. Updates to this branch will follow the typical development flow using PRs.

With Stencil, the source for each Component and any helper functions will be written in [TypeScript](https://www.typescriptlang.org/). This will bring all of the benefits of static typing to our component library, and the output bundle will be transipled to JS.

React has some problems with Web Components [in certain situations](https://custom-elements-everywhere.com/#react) which are avoidable. However, Stencil makes it _even easier_ to avoid these problems. From Stencil's [FAQ](https://stenciljs.com/docs/faq):

> One misconception that falsely claims only strings can be passed to custom elements comes from React’s version of VDom. Out of the box, React can only pass strings and numbers to components and it cannot listen to custom events. With Stencil, the components appear as though they are React components and all properties get passed correctly including functions, objects, and arrays. The bindings also account for custom events by creating a prop called “on”. These allow React developers to interact with the Web Components as though they are React components.

#### Styling

One of the additional benefits of Web Components is how they can be styled. Each Component can have its own styles scoped to its [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) (this means that if a Component renders a `<div>`, the Component's CSS can broadly style the `div` node without worrying about it affecting all the other `<div>`s on the page). As a result, each component will have it's own CSS file which also makes use of global [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). These variables will be modeled after `formation`/`uswds`.

#### Loading Web Components on va.gov

Once in `vets-website`, the setup code for the WC library will be in its own entry file that is loaded on each page. This code will be responsible for applying polyfills for older browsers as well as defining the Web Components.

In addition, this script will be one of the first loaded in order to ensure that the Components will be defined in the browser before they are rendered on the page. This will be done by adding a `<script>` entry towards the top of [the `<head>` tag that gets loaded on every page](https://github.com/department-of-veterans-affairs/vets-website/blob/dc5018065eccf073d172097a19922755126c98a3/src/site/includes/header.html#L16)

For further optimization, the Components will be lazy-loaded. If our Web Component library ends up having hundreds of Components, this could cause a significant performance impact if we defined these every time a new user landed on a va.gov page. Instead, the Components will only _actually_ be defined if they appear on the page. [Stencil has a useful article that talks about their lazy loading approach](https://stenciljs.com/blog/how-lazy-loading-web-components-work).

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

Even though Web Components are already a feature provided by the browser, this is a feature that the VA Design System hasn't yet taken advantage of. By introducing this "new" technology, there is a possibility of this just turning into technical debt if it exists alongside the current `component-library`, `formation` component styles, and Liquid templates for components. In order to avoid this, we want to be agressive about this migration and get out of the transitionary period as quickly and feasibly as we can.

A Web Component library will be most effective and easiest to maintain if it is the _only_ component library.

### Security Concerns

N/A

### Privacy Concerns

N/A

### Open Questions and Risks

How will we ensure that each Component meets accessibility standards?

How will we measure performance of Web Components, lazy-loading, etc?

Do we want to remove the explicit dependency on [USWDS](https://designsystem.digital.gov/)? Rather than explicitly relying on `uswds`, the Component library could be an abstraction for `vets-website` that implements the appropriate styles from `uswds`. A Component library complete with global styling defaults might be able to accomplish everything that `uswds` is providing.

#### Risks

Despite polyfills, there is some risk of certain Web Component features not working properly in all browsers (IE 11, older versions of Edge). Due to existing polyfill support combined with the trend of users switching to more modern browsers over time, this is a low risk. To mitigate this risk, we will only use Web Component features which are supported with or without pollyfills on all [supported browsers](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/documented-decisions/browser-support/).

### Work Estimates

Note: These estimates do not account for time spent on other team duties such as support requests.

#### Stencil Project setup with Storybook integration

**Estimate:** ~4 days

This has already been done as a PoC - some additional work should be done to make sure that the built version of storybook can use the Web Components

#### Create new Webpack entry for Web Component loader

**Estimate:** ~3 days

`vets-website` should create a `wc-loader.entry.js` file that will get loaded in the `<head>` of each page.

#### Develop an Accordion Web Component

**Estimate**: ~5 days

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

We could also significantly improve performance by using Web Components to replace React on pages that aren't React apps. Right now in `vets-website`, the "MegaMenu" is a React component and it is loaded in the header on each page. Having all of the React code necessary for that in the `static-pages` bundle bloats the bundle size and reduces performance. If this were a Web Component instead, less JS would have to be shipped in the bundle since the browser already knows what to do with Web Components and it doesn't need to load additional framework code.

In a direct comparison, the bundle size of React is [significantly bigger](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/#bundle-size-1) than it is for Stencil.

**Bundle size comparisons for a single component**

|         | Component | Library  | Total    |
|---------|-----------|----------|----------|
| React   | 788B      | 131,948B | 129.63kB |
| Stencil | 878B      | 12,011B  | 12.59kB  |

#### Templating

The library could be extended to include Components focused on overall site layout in addition to the more granular Components. This could allow us to use Web Components as a replacement for the Liquid templates in `vets-website`. The content build could then be modified to include these templates. Stencil provides [additional tooling for static site generation](https://stenciljs.com/docs/static-site-generation) which may be helpful with this as well.

This is only an _option_, not something that is definitely planned.

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Jan XX, 2021 | Design doc approved. | Brooks Johnson
Jan 13, 2021 | Initial draft begins. | Brooks Johnson
