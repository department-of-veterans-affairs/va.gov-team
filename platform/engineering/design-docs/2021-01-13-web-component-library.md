# Web Component library

**Author(s):** Brooks Johnson
**Last Updated:** January 13, 2021
**Status:** **Draft** | In Review | Approved
**Approvers:** _Chris Valarida_ \[ \], _Michael Fleet_ \[ \]

_For the rest of the document, replace all the italicized text. The document is designed to guide your thinking through a general design process. Not all sections are always applicable. If a section is not applicable, just say so._

_You should complete the Overview section first. If your design is elaborate, you may want to pause after this section to wait for review comments before investing time into planning details that may get changed in the review._

_Remember, a design document introduces a system or component to a fellow engineer. It should be written before implementing the system to aid in planning and to facilitate discussions about design decisions. After implementation, the design doc will serve as a reference for users, maintainers, and anyone else interested in the system (and for that reason it is still useful to write design docs for systems that have already been written)._

_A design document is not a press release, a vision statement, a research report, or a business plan._

_The intended audience for this document is software engineers, but it should make sense to anyone familiar with software development._


## Overview

### Objective

The goal is to establish a component library based on Web Components, which are a browser standard. This will supercede the current `formation-react` library and some of the liquid HTML template currently in `vets-website`. A non-goal is creating an entirely new visual experience as part of the component library.

The intended audience for this document is frontend engineers.

### Background

We currently have some "components" implemented in HTML/CSS (and sometimes JS) in the `formation` npm package. These can be used anywhere where `formation` is loaded. We also have `formation-react`, which is a package with some of those patterns implemented as React components. These canonly be used in React apps. Lastly, in `vets-website` we have some Liquid templates which implement some of the components/patterns of the design system, and these are only used for content builds.

_The background section should contain information the reader needs to know to understand the problem being solved. This can be a combination of text and links to other documents._

_Do **NOT** describe the solution here. That goes in High Level Design._

### High Level Design

The goal is to establish a single codebase and documentation for the implementation of design system components. This will allow the components to be used in React apps, static HTML, or any other web framework.

The Web Component library will live in its own repo and will be added to `vets-website` as a dependency, where the components will be loaded and defined for the browser to use. As more components are added to the Web Component version of the library, the older React-specific components will be phased out.

_A high-level description of the system. This is the most valuable section of the document and will probably receive the most attention. You should explain, at a high level, how your system will work. Don't get bogged down with details; those belong later in the document._

_A diagram showing how the major components communicate is very useful and a great way to start this section. If this system is intended to be a component in a larger system, a diagram showing how it fits in to the larger system will also be appreciated by your readers._

_Most diagrams will need to be updated over time as the design evolves, so please create your diagrams with a program that is easily (and freely) available and attach the diagram source to the document to make it easy for a future maintainer (who could be you) to update the diagrams along with the document._

## Specifics

### Detailed Design

In the `component-library` repo, we will start a fresh orphan branch for the Web Component version of the library to live. If we reach a point where the React version of the library is no longer in use, we will rebase the orphan Web Component branch off of master (in order to cleanly preserve the history) and that will become the new default branch going forward.

Until we reach that point, the WC branch will be developed in the `component-library` repo alongside the main branch containing the React components. The WC branch will not be published to npm, and the `vets-website` dependency will instead use a Git url with a tag.

This WC-specific branch will use [Stencil](https://stenciljs.com/) as a tool to help build the Components, and it will also have [Storybook](https://storybook.js.org/) integration. Updates to this branch will follow the typical development flow using PRs. Anytime a new WC is developed or a significant change is made, a new release will be tagged.

Once in `vets-website`, the setup code for the WC library will be in its own entry file that is loaded on each page. In addition, this script will be one of the first loaded in order to ensure that the Components will be defined in the browser before they are rendered on the page.

_Here's an easy rule of thumb for deciding what to write here: Think of anything that would be a pain to change if you were requested to do so in a code review. If you put that implementation detail in here, you'll be less likely to be asked to change it once you've written all the code._

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

_This section should describe design questions that have not been decided yet, research that needs to be done and potential risks that could make make this system less effective or more difficult to implement._

_Some examples are: Should we communicate using TCP or UDP? How often do we expect our users to interrupt running jobs? This relies on an undocumented third-party API which may be turned off at any point._

_For each question you should include any relevant information you know. For risks you should include estimates of likelihood, cost if they occur and ideas for possible workarounds._

### Work Estimates
_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives
_This section contains alternative solutions to the stated objective, as well as explanations for why they weren't used. In the planning stage, this section is useful for understanding the value added by the proposed solution and why particular solutions were discarded. Once the system has been implemented, this section will inform readers of alternative solutions so they can find the best system to address their needs._

### Future Work
_Features you'd like to (or will need to) add but aren't required for the current release. This is a great place to speculate on potential features and performance improvements._

### Revision History
_The table below should record the major changes to this document. You don't need to add an entry for typo fixes, other small changes or changes before finishing the initial draft._

Date | Revisions Made | Author
-----|----------------|--------
Jan 24, 2020 | Added approvers, status, and privacy concerns. | Andrew Gunsch
Jan 19, 2016 | Initial Draft based off [Arvados's template](https://dev.arvados.org/projects/arvados/wiki/Design_Doc_Template) which is reminiscent of Google's | Albert J. Wong

