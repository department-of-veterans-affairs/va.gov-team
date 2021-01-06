# VSP Toolkit/Command-Line Interface (CLI) Design Doc

> This document is in draft status and subject to change or removal.

- **Author(s):** Keifer Furzland, Philip Becker, Lindsey Hattamer
- **Last Updated:** January 4, 2020
- **Last Updated By:** Lindsey Hattamer
- **Status:** **Draft** | In Review | Approved
- **Approvers:** Michael Fleet \[ \], Alex Pappas \[ \],

## Overview
### Objective

- Build a cohesive set of command line tools used by VFS teams to make development easier.
- Solving and preventing problems with self-service,
- Primary product user is VFS engineer, though VSP team(s) will dogfood while building


### Background

VSP engineers utilize a wide variety of tools, processes, concepts, and utilities that are scattered about various documents, brains, and machines.

For as much as we can, we should aim to build a single source of truth. This will be best for managing/updating code, reducing "works on my machine" problems, and provide automatic configuration/support.

### High Level Design

- VSP can use to do internal tasks (to dogfood) but goal is to improve VFS teams productivity
- Adds value by allowing us to codify important business practices (running reports, updating config, etc).
- Integrates w/ other tools across the VSP world
- Provides a modular design (VFS teams can modify it)
- Future-proof and scale-friendly - the shell isn't going away, React might, SOCKS config may change (instead of everyone updating `/etc/*` or equiv, they can run `vsp upgrade` and `vsp socks` and be done w/ it)

#### Prototype Plan
- [Mural Board](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1604947756984/d77c41459435b8336a7b7b01b7d5a4ee015f022f) draft ideas for toolkit features 
- Use [`TTY`](https://ttytoolkit.org/) to [bootstrap](https://github.com/piotrmurach/tty#2-bootstrapping) the CLI framework
- The first use will be to call new rails generators to help new teams start modularizing their work.
    - This adds a "module" command and an "add" subcommand following the recommendations for working with the teletype executable in the [tty documentation](https://github.com/piotrmurach/tty#28-working-with-subcommands)
    - (Background information on the existing vets-api module generator)[https://vfs.atlassian.net/wiki/spaces/VI/pages/807174195/New+Module+Generator]

### Code Location

- We will host the code and package it as a rubygem, `vtk`
- We are hosting the respository (here)[https://github.com/department-of-veterans-affairs/vtk]
- The [vtk gem](https://rubygems.org/gems/vtk) was published to RubyGems on 1/5/2020

### Testing Plan

- `rspec` can be used to test `TTY`.  As the tool develops we'll get a better understanding of the testing needs.
- commands will often be their own scripts, so they should be tested in their own development cycle
- Github Actions runs an automated build job (rake, rubocop) for building, testing and code review purposes.

### Logging

- We've implemented a (CHANGELOG)[https://github.com/department-of-veterans-affairs/vtk/blob/master/CHANGELOG.md] to track changes

### Debugging

- Including a utility command `--debug` for debug output include system architecture, dependencies versions, etc.

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
- rename vsp-toolkit repo to match command name
- Configuration file to manage local user configuration
- Configuration management (write to ~/.vsp/config.yml) for portability and extensibility
- Single binary install, package management, install from source (make it *easy* and *fool-proof* to install & update & use)
- Tools for portability ("Traveling Ruby" or "Ruby Packer") can reduce headache for cross-platform users and "just work"
- Could provide a webservice for the VFS team to use to query status/outages (is this just /v0/backend_status?)
- Test user data may be accessible here too, like `vsp service mvi --users --out=mvi-test-users.json`
- `vsp product:config forms --all --hide-sensitive` would show global VSP and api/site (product) specific configuration
- `vsp config` - should this be showing config for a specific thing? like "aws configuration" or "vets-api settings.yml"
- Indicate somehow that a command is a native plugin or an "extension" i.e. not supported directly by VSP?
- We can build a process around adding/publishing modules for inclusion in the supported code, maybe


### Revision History

Date | Revisions Made | Author
-----|----------------|--------
June 25, 2020     | Added initial draft of design document. | Keifer Furzland
December 18, 2020 | Rewrote to align with new plans         | Philip Becker
January 4, 2021   | Updated draft of design document.       | Lindsey Hattamer
