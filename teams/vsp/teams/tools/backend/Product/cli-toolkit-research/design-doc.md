# VSP Toolkit/Command-Line Interface (CLI) Design Doc

> This document is in draft status and subject to change or removal.

- **Author(s):** Keifer Furzland
- **Last Updated:** January 4, 2020
- **Last Updated By:** Lindsey Hattamer
- **Status:** **Draft** | In Review | Approved
- **Approvers:** Philip Becker \[ ], Michael Fleet \[ \], Alex Pappas \[ \],

## Overview
### Objective

We want to answer the following questions:

    Why do we want a command-line interface (CLI)?
    How do we build & deploy features into a CLI?
    What infrastructure resources do we use?
    How is the CLI installed & configured?
    How could VFS users use the CLI to make development easier?

Only VSP engineers should be releasing "officially supported" code, though it can be an open source tool, of course

The intended audience is VSP software engineers, particularly those on the Operations, FE Tools, and BE Tools teams.

- Build a cohesive set of command line tools used by VFS teams to make development easier.
- Solving and preventing problems with self-service,
- Primary product user is VFS engineer, though VSP team(s) will dogfood while building


### Background

VSP engineers utilize a wide variety of tools, processes, concepts, and utilities that are scattered about various documents, brains, and
machines.

For as much as we can, we should aim to build a single source of truth. This will be best for managing/updating code,
reducing "works on my machine" problems, and provide automatic configuration/support.

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
- `vsp toolkit:plugin {init, config, install} PLUGIN_NAME` - for building, configuring, installing a new toolkit plugin (with oclif)
- Indicate somehow that a command is a native plugin or an "extension" i.e. not supported directly by VSP?
- We can build a process around adding/publishing modules for inclusion in the supported code, maybe
- We envision this can be leveraged into a web UI by wrapping a common API pattern
- The RPCs between commands should be consistent schema so we can do standard extensions


## Specifics

### Detailed Design - WIP

#### Prototype Plan

- Use [`tty toolkit`](https://github.com/piotrmurach/tty) to rapidly generate CLI framework
- One pattern would be to to map the CLI commands to the command pattern in code architecture
- Prototyping first 'thin layer' MVP proving out the tooling:
  - `vtk module add <name>`              # Bootstrap a new module in vets-api which wraps the vets-api module generator

After the spike we'll have a prototype usable in further user testing.

### Code Location

- We are hosting the respository (here)[https://github.com/department-of-veterans-affairs/vtk]
- Currently waiting a content review to change the repository from private to public. Email was sent to ossoft@va.gov on 1/4/2021

### Testing Plan

- Todo: Rspec, Rubocop 
- Github Actions runs an automated build job (rake, rubocop) for building, testing and code review purposes. 

### Logging

- We've implemented a (CHANGELOG)[https://github.com/department-of-veterans-affairs/vtk/blob/master/CHANGELOG.md] to track changes

### Debugging

- Include a utility command `--debug` for debug output include system architecture, dependencies versions, etc.

### Caveats

- TBD

### Security Concerns

- Ensure we are properly handling files, permissions, data, memory, performance details

### Privacy Concerns

- This tool shouldn't allow anyone to do anything they inherently wouldn't be able to otherwise. In order to maintain
    this state, we should consider how platform-wide privacy concerns are addressed. I.e. authorization, authentication,
    audit-trail. Does the user have least privilege?

### Open Questions and Risks

- Will the majority of our audience be comfortable with this tool?
- Should we use OCLIF? Or Thor?
- How can we build a web UI on top of it? SDK-style
- Allow for multiple languages driving the CLI? Is this possible?
- Can we wrap application generators/wizards/form builders?
- We have basically millions of NPM scripts, can we improve discoverability w/o rewriting them all?
- Wrapping over porting - investigate how we can leverage existing scripts
- Shelling out (safely) is a not-necessarily bad idea
- Structure a script folder with endpoints as folders/script filenames?

### Work Estimates
- June 25 2020: Product Outline & Design Document drafted and out for review
- June 26 2020: Spike on prototype to explore potential painpoints and flesh out outline/doc
- July ? : Plan & start work pending stakeholder approval
- July- Aug: Dogfood and build out uses for internal, existing tools (doctor, utils, metadata, logs, aws connections,
    etc). (Wrap existing scripts, update where necesessary)
- August : Have 3-5 useful tools prototyped and ready for a design sprint w/ VFS & VSP engineers
- December-January : Create an MVP of the module generator 

### Alternatives - WIP
_This section contains alternative solutions to the stated objective, as well as explanations for why they weren't used. In the planning stage, this section is useful for understanding the value added by the proposed solution and why particular solutions were discarded. Once the system has been implemented, this section will inform readers of alternative solutions so they can find the best system to address their needs._

### Future Work - WIP
_Features you'd like to (or will need to) add but aren't required for the current release. This is a great place to speculate on potential features and performance improvements._

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
June 25, 2020   | Added initial draft of design document. | Keifer Furzland
January 4, 2021 | Updated draft of design document.       | Lindsey Hattamer
