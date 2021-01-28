# Web Component library

**Author(s):** Brooks Johnson  
**Last Updated:** January 13, 2021  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Chris Valarida_ \[ \], _Michael Fleet_ \[ \]


## Overview

### Objective

The goal is to establish a component library using the [Web Components standard](https://developer.mozilla.org/en-US/docs/Web/Web_Components). This will eventually supercede the current `component-library` code and some of the liquid HTML templates currently in `vets-website`. A non-goal is creating an entirely new visual experience as part of the component library.

The intended audience for this document is frontend engineers.

### Background

Currently, the design system has various implementations of "components" scattered in various places to serve various tools/libraries:

- The `formation` npm package
    - This contains static HTML, CSS, and vanilla JavaScript
    - Used by copy-pasting markup onto static pages
-  The `component-library` package
    - This is the rebranded `formation-react`, containing React implementations of some patterns defined in `formation`
    - Can only be used inside React apps
- [Liquid templates in `vets-website`](https://github.com/department-of-veterans-affairs/vets-website/tree/958d89f18db29a1f3e1f1cbe4e304299eb387de7/src/site)
    - This is similar to the static markup found in `formation`
    - These templates of components are only used in the content build for va.gov

Maintaining multiple codebases and sources of documentation for design system components is a burden for all teams involved and leads to an inconsistent user experience and wasted engineering time.

### High Level Design

The goal is to establish a single codebase and documentation for the implementation of design system components. This will allow the components to be used in React apps, static HTML, or any other web framework.

The Web Component library will live in its own repo and will be added to `vets-website` as a dependency, where the components will be loaded and defined for the browser to use. As more components are added to the Web Component version of the library, the older React-specific components will be phased out.


## Specifics

### Detailed Design

#### Web Component development

In the `component-library` repo, we will start a fresh orphan branch in a clean directory for the Web Component version of the library to live. When we reach a point where the React version of the library is no longer in use (since it has been replaced with Web Components), we will rebase the orphan Web Component branch off of `master` (in order to cleanly preserve the history) and that will become the new default branch going forward.

Until we reach that point, the WC branch will be developed in the `component-library` repo alongside the main branch containing the React components. The WC branch will not be published to npm, and the `vets-website` dependency will instead [use a Git url with a tag](https://classic.yarnpkg.com/en/docs/cli/add/).

> `yarn add <git remote url>#<branch/commit/tag>` installs a package from a remote git repository at specific git branch, git commit or git tag.

We will use a [Github Release](https://github.com/department-of-veterans-affairs/component-library/releases/new) to create a new tag for the branch we want. The tags will follow [semantic versioning](https://semver.org/), and will be created after enough new development has landed in the branch (i.e. A new component, bugfix, etc. Documentation typo fixes won't get a release). A tag will have the pattern `wc-vX.Y.Z`, where `X`, `Y`, and `Z` represent major, minor, and patch versions respectively.

#### Tooling

This WC-specific branch will use [Stencil](https://stenciljs.com/) as a tool to help build the Components, and it will also have [Storybook](https://storybook.js.org/) integration. Updates to this branch will follow the typical development flow using PRs.

With Stencil, the source for each Component and any helper functions will be written in [TypeScript](https://www.typescriptlang.org/). This will bring all of the benefits of static typing to our component library, and the output bundle will be transipled to JS.

React has some problems with Web Components [in certain situations](https://custom-elements-everywhere.com/#react) which are avoidable. However, Stencil makes it _even easier_ to avoid these problems. From Stencil's [FAQ](https://stenciljs.com/docs/faq):

  > One misconception that falsely claims only strings can be passed to custom elements comes from React’s version of VDom. Out of the box, React can only pass strings and numbers to components and it cannot listen to custom events. With Stencil, the components appear as though they are React components and all properties get passed correctly including functions, objects, and arrays. The bindings also account for custom events by creating a prop called “on”. These allow React developers to interact with the Web Components as though they are React components.

#### Styling

One of the additional benefits of Web Components is how they can be styled. Each Component can have its own styles scoped to its [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) (this means that if a Component renders a `<div>`, the Component's CSS can broadly style the `div` node without worrying about it affecting all the other `<div>`s on the page). As a result, each component will have its own CSS file which also makes use of global [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). These variables will be modeled after `formation`/`uswds`.

For now each Component will have its own styles _implicitly_ based off of USWDS, which resemble what is currently available in the Design System. Potential future work would involve explicitly importing USWDS component stylesheets into each Component's CSS file. See [USWDS styles](#uswds-styles) for ideas on explicitly using USWDS 2.0 styles, and some obstacles that were discovered during an experiment.

#### Loading Web Components on va.gov

The setup code for the WC library will be in its own `vets-website` entry file that is loaded on each page. This code will be responsible for [applying polyfills](https://stenciljs.com/docs/faq#what-polyfills-does-stencil-provide) for older browsers as well as [defining the Web Components](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define).

In addition, this script will be one of the first loaded in order to ensure that the Components will be defined in the browser before they are rendered on the page. This will be done by adding a `<script>` entry towards the top of [the `<head>` tag that gets loaded on every page](https://github.com/department-of-veterans-affairs/vets-website/blob/dc5018065eccf073d172097a19922755126c98a3/src/site/includes/header.html#L16)

For further optimization, the Components will be lazy-loaded. Even if our Web Component library ends up having hundreds of Components, lazy-loading will will reduce the risk of a significant negative performance impact. Here is a summary of the process:

1. each Component is initially defined as a wrapper
1. one of many Components appears in the DOM
1. wrapper Component lazy-loads the _actual_ definition
1. properly defined Component is rendered in the browser

[Stencil has a useful article that talks about their lazy loading approach](https://stenciljs.com/blog/how-lazy-loading-web-components-work).

> It doesn’t matter how the element came to be rendered in the DOM, either way, Stencil knows how to lazy-load itself using web-standards and native browser APIs. And by deferring most of the logic to the browser, rather than generating more JavaScript runtime, the components themselves have an optimal file size.

#### Migration to Web Components

Once a new release is made for the Web Component library, we will [configure a linting rule](https://github.com/AlexMost/eslint-plugin-deprecate/blob/master/docs/rules/import.md) as part of the `lint:js:changed` script in `vets-website` to throw an error if a React component is imported that has a released Web Component replacement. This will prevent the older React component from appearing in more places as we are actively making efforts to remove it.

Next, the Design System team will reach out to a VFS team that we believe will get the greatest value by adopting the Component. We will briefly describe the new Component and how it can be used in place of the older components currently used in their codebase, and we will offer to set up a meeting to synchronously go over the Component and begin the migration. The focus will be on making the migration as smooth as possible for the team as well as bringing awareness to the new Component.

When we have finished helping the team transition all of their code to use the new Component, we will announce this publicly in Slack, and move on to help a new team with the migration, repeating the steps. After the new Web Component has replaced all instances of its React/`formation`/liquid conterparts, the React component will be removed from `component-library` and a new version will be published. The associated styles will also be removed from `formation` if we are certain that this will not affect other styles on va.gov.

Additionally, the Storybook stories for the React component will be replaced by a simple document that points the user to a different Storybook host that is exclusively for Web Components. See [Chromatic hosting](#chromatic-hosting) for possible future work to improve on this.

This process will repeat for each Component that has React/`formation`/liquid counterparts to replace.

### Code Location

The code will live in the `component-library` repo on a dedicated orphan branch named `web-components`. This code will be used in `vets-website` via a dependency in `package.json`

### Testing Plan

Each Component will have:

- Unit and E2E tests written using Jest ([provided by Stencil](https://stenciljs.com/docs/testing-overview))
- One or more stories in Storybook to validate appearance/behavior

As of mid-January 2021, Stencil provides an experimental screenshot visual diff testing functionality. If this becomes stable, we will consider adopting it.

### Logging

N/A

### Debugging

Storybook will be a useful tool for debugging and development. Stencil also comes with its own development server which can be used.

There will be no special provisions for debugging provided for consumers of the WC library. Right now there is no plan to implement Sentry logging in the components.

### Caveats

To be determined.

### Security Concerns

N/A

### Privacy Concerns

N/A

### Open Questions and Risks

How will we ensure that each Component meets accessibility standards?

How will we measure performance of Web Components, lazy-loading, etc?

#### Risks

Even though Web Components are already a feature provided by the browser, this is a feature that the VA Design System hasn't yet taken advantage of. By introducing this "new" technology, there is a possibility of this just turning into technical debt if it exists alongside the current `component-library`, `formation` component styles, and Liquid templates for components. In order to avoid this, we want to be agressive about this migration and get out of the transitionary period as quickly and feasibly as we can.

A Web Component library will be most effective and easiest to maintain if it is the _only_ component library.

Despite polyfills, there is some risk of certain Web Component features not working properly in all browsers (IE 11, older versions of Edge). Due to existing polyfill support combined with the trend of users switching to more modern browsers over time, this is a low risk. To mitigate this risk, we will only use Web Component features which are supported with or without pollyfills on all [supported browsers](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/documented-decisions/browser-support/).

### Work Estimates

Note: These estimates do not account for time spent on other team duties such as support requests.

#### Stencil Project setup with Storybook integration

**Estimate:** ~4 days

This has already been done as a PoC - some additional work should be done to make sure that the built version of storybook can use the Web Components

#### Create new Webpack entry for Web Component loader

**Estimate:** ~3 days

`vets-website` should create a `wc-loader.entry.js` file that will get loaded in the `<head>` of each page. Webpack builds in `vets-website` [append a hash and timestamp to the entry files](https://github.com/department-of-veterans-affairs/vets-website/blob/d110ea9f899b1c2711b970e0df7010a82a8b90d4/config/webpack.config.js#L133-L138), so this will enable cache busting.

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

#### USWDS styles

We could further investigate the possibility of importing component stylesheets from USWDS into  the stylesheets for the equivalent Web Components. Some potential obstacles that would have to be considered are:

- dealing with composable Components
- excessive CSS in each Component's stylesheet
- greater build complexity

#### Templating

The library could be extended to include Components focused on overall site layout in addition to the more granular Components. This could allow us to use Web Components as a replacement for the Liquid templates in `vets-website`. The content build could then be modified to include these templates. Stencil provides [additional tooling for static site generation](https://stenciljs.com/docs/static-site-generation) which may be helpful with this as well.

This is only an _option_, not something that is definitely planned.

#### Chromatic hosting

Storybook [allows for composition](https://storybook.js.org/docs/react/workflows/storybook-composition), meaning that a single Storybook instance can host stories from other Storybook instances. This currently faces some limitations regarding add-on functionality, so it isn't clear if it would be a good fit for us. There are [additional technical requirements](https://storybook.js.org/docs/react/workflows/package-composition#chp-level-1) that must be met in order to enable this kind of composition, and this would require VA approval in order to even begin experimenting. However, there would be additional benefits from using a service like [Chromatic](https://www.chromatic.com/), such as hosted Storybook instances as part of the PR review process.

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Jan XX, 2021 | Design doc approved. | Brooks Johnson
Jan 13, 2021 | Initial draft begins. | Brooks Johnson
