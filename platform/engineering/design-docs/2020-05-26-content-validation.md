# Content Validation

**Author(s):** Bill Fienberg
**Last Updated:** May 26 2020  
**Status:** **Draft** | In Review | Approved
**Approvers:** Dror Matalon [], Andrew Gunsch [], Rian Fowler []

## Table of Contents

- [Content Validation](#content-validation)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Objective](#objective)
    - [Background](#background)
      - [Pain points](#pain-points)
    - [High Level Design](#high-level-design)
  - [Specifics](#specifics)
    - [Detailed Design](#detailed-design)
    - [Code Location](#code-location)
    - [Testing Plan](#testing-plan)
    - [Logging](#logging)
    - [Debugging](#debugging)
    - [Caveats](#caveats)
    - [Security Concerns](#security-concerns)
    - [Privacy Concerns](#privacy-concerns)
    - [Open Questions and Risks](#open-questions-and-risks)
    - [Work Estimates](#work-estimates)
    - [Alternatives](#alternatives)
    - [Future Work](#future-work)
    - [Revision History](#revision-history)

## Overview

### Objective

The objective here is to define an approach to validate the CMS content. Specifically, this design doc focuses on validating that CMS content has no accessibility errors and/or broken links.

This design document is intended for front end and DevOps engineers on the Veteran-facing Services Platform (VSP) and Veteran-Facing Services (VFS) teams.

### Background

The `vets-website` repo currently contains [one script that builds both the content and the applications](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/index.js). Chris V. wrote a [design doc to disentangle the content build from the application build](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-04-09-separate-content-build.md). That work is currently in progress.

#### Pain points

- COMING SOON

### High Level Design

COMING SOON

## Specifics

### Detailed Design

COMING SOON

### Code Location

COMING SOON

### Testing Plan

COMING SOON

### Logging

COMING SOON

### Debugging

COMING SOON

### Caveats

COMING SOON

### Security Concerns

There are no new security concerns with a separated build process.

### Privacy Concerns

There are no new privacy concerns with a separated build process.

### Open Questions and Risks

COMING SOON

### Work Estimates

COMING SOON

### Alternatives

COMING SOON

### Future Work

### Revision History

| Date         | Revisions Made | Author        |
| ------------ | -------------- | ------------- |
| May 26, 2020 | Initial draft  | Bill Fienberg |

**Approvers:** Dror Matalon [], Andrew Gunsch [], Rian Fowler []
