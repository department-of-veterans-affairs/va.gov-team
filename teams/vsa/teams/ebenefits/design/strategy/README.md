# Design Strategy for Feature Migration

**WIP:** Please let @steve-gov know of major edits!

## Goal

The goal of this doc is to create a framework for adding Design and Design Reseach issues to the issue tracker. It is a loose outline and not meant to be overly proscriptive. ("People over process!")

The framework implies that design sketches are ready for iterative development starting immediately after the first design crit. This may not be applicable or necessary in all cases, eg. a simple list-view page might get scaffolded by engineering just using the design system, with an understanding that updates may be necessary later.

## Approach

1. Analyze existing feature
2. Conduct research on existing feature
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
- [ ] Create customer journey or workflow diagram of existing application
- [ ] Create a markdown document with initial impressions, design hypotheses, and simple field research/ competitive analysis

### Design Research | Conduct research on "[feature name]"

_Create and execute a research plan to understand how Veterans use the feature, what its pain points and pain relievers are, and how it might be improved._

- [ ] Create research plan
  - [ ] Write conversation guide `TODO: Link to guide template`
  - [ ] Coordinate sessions with user research partner, asking them to take notes `TODO: Link to research engagement guide`
- [ ] Run research sessions
- [ ] Create synthesis document with recommendations `TODO: Link to document template`
- [ ] Schedule time for synthesis readout at demo

### Design | Create lo-fi sketches and flows for "[feature name]"

_Work with the team to create design artifacts that engineering might use to start building._

- [ ] Based on research findings and existing product documentation, create lo-fi product sketches for _happy path_ flows
- [ ] Coordinate with BE/ FE engineering to create lo-fi product sketches for _error state_ flows

**NB:** These steps may require multiple issues to capture the individual fields flows/ features/ expectations

### Design | Run and synthesize design crit on "[feature name]" sketches

_Present findings and sketches to the Design Practice, and update lo-fi sketches with critical feedback._

- [ ] Schedule a time for a design practice critique of the lo-fi setches and flows
- [ ] Incorporate rough feedback from the session
- [ ] Schedule a time to walk PM/BE/FE engineering through the updated sketches

### Design | Improve fidelity of sketches for "[feature name]"

_Move lo-fi sketches to product designs based on the reaserch, crit, and design system._

- [ ] Create product designs per screen/ flow/ error state
  - `Break into individual issues per major task`

### Design Research | Conduct usability study on mockups for "[feature name]"

_Put the product designs in front of real users and ask them how the designs help them achieve specific goals._

- [ ] Create usability research plan
  - [ ] Write conversation guide
  - [ ] Coordinate sessions with user research partner, asking them to take notes
- [ ] Run usability sessions
- [ ] Create synthesis document with recommendations
- [ ] Schedule time for synthesis readout at demo
- [ ] Incorporate critical user feedback into product designs
  - `Break into individual issues per task`

### Design | Present "[feature name]" product designs for launch crit

_Present launch-ready product designs to the Design Practice and update with any critical feedback._

- [ ] Schedule a time for a design practice critique of the product designs
- [ ] Incorporate critical feedback from the session
- [ ] Schedule a time to walk PM/BE/FE engineering through the updates if necessary
