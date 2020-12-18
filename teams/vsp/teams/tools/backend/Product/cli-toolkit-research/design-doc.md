# VSP Toolkit/Command-Line Interface (CLI) Design Doc

> This document is in draft status and subject to change or removal.

- **Author(s):** Keifer Furzland, Philip Becker
- **Last Updated:** June 25, 2020
- **Status:** **Draft** | In Review | Approved
- **Approvers:** Michael Fleet \[ \], Alex Pappas \[ \],

## Overview
### Objective

We want to answer the following questions:

    Why do we want a command-line interface (CLI)?
    How do we build & deploy features into a CLI?
    What infrastructure resources do we use?
    How is the CLI installed & configured?
    How could VFS users use the CLI to make development easier?

The intended audience is VSP software engineers, particularly those on the Operations, FE Tools, and BE Tools teams.

- Build a cohesive set of command line tools used by VFS teams to make development easier.
- Solving and preventing problems with self-service,
- Primary product user is VFS engineer, though VSP team(s) will dogfood while building


### Background

VSP engineers utilize a wide variety of tools, processes, concepts, and utilities that are scattered about various documents, brains, and machines.

For as much as we can, we should aim to build a single source of truth. This will be best for managing/updating code, reducing "works on my machine" problems, and provide automatic configuration/support.

### High Level Design - WIP

These are mostly ideas until the first research spike is complete.

- VSP can use to do internal tasks (to dogfood) but goal is to improve VFS teams productivity
- Configuration file to manage local user configuration
- Configuration management (write to ~/.vsp/config.yml) for portability and extensibility
- Single binary install, package management, install from source (make it *easy* and *fool-proof* to install & update &
    use)
- Built-in tools for portability (`pkg`, `nodejs`) can reduce headache for cross-platform users, and "just work," though
- Adds value by allowing us to codify important business practices (running reports, updating config, etc).
- Integrates w/ other tools across the VSP world
- Provides a modular design (VFS teams can modify it)
- Future-proof and scale-friendly - the shell isn't going away, React might, SOCKS config may change (instead of
    everyone updating `/etc/*` or equiv, they can run `vsp upgrade` and `vsp socks` and be done w/ it)
- Could provide a webservice for the VFS team to use to query status/outages (is this just /v0/backend_status?)
- Test user data may be accessible here too, like `vsp service mvi --users --out=mvi-test-users.json`
- `vsp product:config forms --all --hide-sensitive` would show global VSP and api/site (product) specific configuration
- `vsp config` - should this be showing config for a specific thing? like "aws configuration" or "vets-api settings.yml"
- Indicate somehow that a command is a native plugin or an "extension" i.e. not supported directly by VSP?
- We can build a process around adding/publishing modules for inclusion in the supported code, maybe
- We envision this can be leveraged into a web UI by wrapping a common API pattern
- The RPCs between commands should be consistent schema so we can do standard extensions


## Specifics

### Detailed Design - WIP

#### Prototype Plan

- Use [`TTY`](https://ttytoolkit.org/) to rapidly generate CLI framework
- The first use will be to call new rails generators to help teams start modularizing their work.

### Code Location

- We will host the `vsp-toolkit` as the core/main library and package it as a rubygem

### Testing Plan

- `rspec` can be used to test `TTY`.  As the tool developes we'll get a better understanding of the testing needs.
- commands will often be their own scripts, so they should be tested in their own development cycle

### Logging

- N/a

### Debugging

- Including a utility command `--debug` for debug output include system architecture, dependencies versions, etc.

### Caveats

- TBD

### Security Concerns

- Ensure we are properly handling files, permissions, data, memory, performance details

### Privacy Concerns

- This tool shouldn't allow anyone to do anything they inherently wouldn't be able to otherwise. In order to maintain this state, we should consider how platform-wide privacy concerns are addressed. I.e. authorization, authentication, audit-trail. Does the user have least privilege?

### Open Questions and Risks

- Will the majority of our audience be comfortable with this tool?
- We have basically millions of NPM scripts, can we improve discoverability w/o rewriting them all?
- Wrapping over porting - investigate how we can leverage existing scripts

### Work Estimates
- Q4 2020 have a ruby-based CLI that can tap into rails generators in vets-api


### Future Work
- expand the CLI to meet various support needs

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
June 25, 2020 | Added initial draft of design document. | Keifer Furzland
December 18, 2020 | Rewrote to align with new plans | Philip Becker
