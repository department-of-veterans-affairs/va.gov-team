# Node.js Best Practices Guide

**Author:** Robbie Holmes  
**Last Updated:** May 5, 2016  
**node.js version:** 4.4.3  
**npm version:** 3.8.8 

## Overview
This is an initial pass on the best practices that all Node.js Development within the DSVA team should follow.

### Objective
To provide a set of best practices to make sure that all projects within DSVA have a consistency in approach and patterns.

### Background
When arriving here at the VA, I was looking at my first project and asked if there was a style guide / best practices document.
I was told there wasn't so I created one.

### High Level Design
Overall this is the best practices that have been distilled down from the Node.js community to meet the needs of the DSVA team.
- We should be taking advantage of all the ES2015 features that are supported in the current version of Node.js.
- There should be no lint errors in a pull request that is going to be merged.
- There should be code coverage that is checked on each pull request.
- We should be using the most current long term support(LTS) version of Node.js on every project (hopefully we will get to a base image that all projects can inherit from).

## Specifics

### Project Structure
/src/ ## _Application Code_

/specs/ ## _Tests_

### Code Location
/src/server.js # _entry point_ npm start: node src/server.js
/src/controllers/redis-ctrl.js
/specs/controllers/redis-ctrl.spec.js

### Testing Plan
- There should be a single command that validates linting rules (shared lint config file needed) and runs all tests. 
- There should be 100% unit coverage.
- There should be a pragmatic amount of integration and end-to-end tests.

### Logging
Logger module decision needs to be talked about.  Also where does the logging go?

### Debugging
You should be able to debug every project and will document as we go forward.

### Caveats
TBD.

### Security Concerns
- Everyone should subscribe to the [Node Security Newsletter](https://nodesecurity.io/newsletter)
- We should upgrade to the newest LTS every release.

### Open Questions and Risks
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

Date | Revisions Made | Author | Reviewed By
-----|----------------|--------|--------------
May 5, 2016 | Initial Draft based off Albert's Design Document template | Robbie Holmes
