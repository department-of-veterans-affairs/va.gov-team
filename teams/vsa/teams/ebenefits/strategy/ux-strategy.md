# UX Strategy for Feature Migration

**WIP:** Please let @steve-gov know of major edits!

## Goal

The goal of this doc is to create a framework for adding Design and Design Research issues to the issue tracker. It is a loose outline and not meant to be overly proscriptive. ("People over process!")

The framework implies that design sketches are ready for iterative development starting immediately after the first design review. This may not be applicable or necessary in all cases, e.g., a simple list-view page might get scaffolded by engineering just using the design system, with an understanding that updates may be necessary later.

The framework implies three design practice meetings:
- A design intent review after initial feature analysis
- A platform design review after lo-fi sketches and flows are complete
- A launch-oriented design review after product designs are complete

> :file_folder: = Artifact committed to the repo

## Approach

1. Analyze existing feature and perform design intent review
2. Conduct user research on existing feature
3. Synthesize analysis and research into lo-fi sketches and flows
4. Take synthesis to design crit (development should be able to start working with the sketches here)
5. Improve fidelity of sketches
6. Conduct usability
7. Present designs for launch crit

`Steps 5-7 might be squashed into a single process, but it is good practice to document all the necessary tasks so that Design effort receives a true accounting.`

## Issue Templates

`Use these templates as a starting place to make issues for Product Design and Research.`

### Design Research | Analyze "[feature name]" and create initial design artifacts

_Document our understanding of the feature as it currently exists and how it fits into the VA online ecosystem._

- [ ] **Product**: Write user stories for existing application features
- [ ] **Product**: Write product documentation as a README file in the feature repo root, with known metrics and stakeholders
- [ ] :file_folder: Create customer journey or workflow diagram of existing application
- [ ] :file_folder: Create a markdown document with initial impressions, design hypotheses, and simple field research/ competitive analysis 
- [ ] Schedule and run an initial **design intent review** with the Design Practice to review the user stories for existing patterns and strategies

### Design Research | Conduct user research on "[feature name]"

_Create and execute a research plan to understand how Veterans use the feature as is, what its pain points and pain relievers are, and how it might be improved._

- [ ] :file_folder: Create research plan
  - [ ] :file_folder: Write conversation guide `TODO: Link to guide template`
  - [ ] Coordinate sessions with user research partner, asking them to take notes `TODO: Link to research engagement guide`
- [ ] Run research sessions
- [ ] :file_folder: Create synthesis document with recommendations `TODO: Link to document template/ "Rules of Engagement"`
- [ ] Schedule time for synthesis readout at demo

### Design | Create lo-fi sketches and flows for "[feature name]"

_Work with the team to create design artifacts that engineering might use to start building._

- [ ] Based on research findings and existing product documentation, create lo-fi product sketches for _happy path_ flows
- [ ] Coordinate with BE/ FE engineering to create lo-fi product sketches for _error state_ flows
- [ ] Review proposed information architecture with vfs-platform-support IA Team ([Formal review request procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/working-with-ia.md))

**NB:** These steps may require multiple issues to capture the individual fields flows/ features/ expectations

### Design | Run and synthesize a platform design review on "[feature name]" sketches

_Present findings and sketches to the Design Practice and update lo-fi sketches with critical feedback._

- [ ] Schedule a time for a design practice critique of the lo-fi sketches and flows
- [ ] Incorporate rough feedback from the session
- [ ] Schedule a time to walk PM/BE/FE engineering through the updated sketches

### Design | Improve fidelity of sketches for "[feature name]"

_Move lo-fi sketches to product designs based on the design review and design system application feedback._

- [ ] :file_folder: Create product designs per screen/ flow/ error state
  - `Break into individual issues per major task`
- [ ] Request content review with vfs-platform-support Content Team ([Formal review request procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md#how-to-request-content-review))

### Design Research | Conduct usability study on mockups for "[feature name]"

_Put the product designs in front of real users and ask them how the designs help them achieve specific goals._

- [ ] :file_folder: Create usability research plan
  - [ ] :file_folder: Write conversation guide
  - [ ] Coordinate sessions with user research partner, asking them to take notes
- [ ] Run usability sessions
- [ ] :file_folder: Create synthesis document with recommendations
- [ ] Schedule time for synthesis readout at demo
- [ ] Incorporate critical user feedback into product designs
  - `Break into individual issues per task`

### Design | Present "[feature name]" product designs for launch- oriented design review

_Present launch-ready product designs to the Design Practice and update with any critical feedback._

- [ ] Schedule a time for a design practice critique of the product designs
- [ ] Incorporate critical feedback from the session
- [ ] Schedule a time to walk PM/BE/FE engineering through the updates if necessary
