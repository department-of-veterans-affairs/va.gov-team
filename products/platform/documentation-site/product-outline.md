
# Documentation Site Product Outline
## Product Info
### Points of Contact
- GitHub Label: none
- Slack channel: #vsp-content-ia

|Name|Role|Slack|
|----|----|-----|
|Patrick Bateman | DEPO Lead| @Patrick |
|Leah Bannon | DEPO lead| @Leah|
|Megan Kelley | VSP Content & IA Product Manager| @Megan Kelley|
|Matt Johnson | VSP Content & IA Information Architect | @Matt Johnson|
|Mikki Northuis | VSP Content & IA Information Architect |@Mikki|
|Bill Fienberg | VSP Content & IA Frontend Engineer | @Bill Fienberg|

### Product Key Words
- Documentation
- Documentation site
- Repository 

### How to Access
- MVP of documentation site is va.gov-team repository: https://github.com/department-of-veterans-affairs/va.gov-team

### Overview
The documentation site is the single source of truth for team, product, and platform information required by teams building veteran-facing services on VA.gov. 

### Problem Statement 

We created a myriad of documentation that was designed to help our customers (i.e. VFS teams building things on VA.gov) find what they need to work seamlessly and iteratively, and build great products on VA.gov. We have observed that the resources as they exist today aren’t effectively enabling that, which is causing a large support burden for VSP, is frustrating our customers, and is potentially resulting in products on VA.gov that don't meet VSP standards. _How might we improve our documentation resources so that our customers are more successful?_

#### Key Pain Points: 
- Source of truth often unknown
- Documentation is out of date and/or conflicting
- [Process] Creating and updating process-based documentation requires lots of reviews and approval
- Publishing documentation isn't (technically) easy (some areas such as frontend eng docs require an engineer to deploy changes; everything is in Markdown)
- [Process/culture] Updating documentation isn't a priority
- A lot of "how" and "why" documents are missing/nonexistent today
- Broken links within documentation
- Users don't know what documentation exists, don't have a high level "map of the world"
- Hard to search
- No feedback loop, so Platform team never knows what's wrong/missing/not being used
- Teams don't know what product-specific documentation they're responsible for creating and/or maintaining 

### User Goals

_“As a team member building on VA.gov or the VA.gov platform, I need to be able to find on my own and access crucial information about the platform and the product I’m building, so that I can efficiently build and support great veteran-facing services.”_

- People can find what they need without having to ask
- Documentation is always up to date and canonical (and thus is trusted)
- People can start working quickly on their VA.gov products without huge ramp-up time

### Business Goals 

- VA.gov products meet VSP standards

### Hypotheses

We believe that **creating a single, searchable, public documentation site that is easy and understandable for VFS and VSP team members to use and maintain** will result in **a single source of truth for building on VA.gov that is robust and well maintained.** We will know we are successful when **we see contributions and traffic to the new documentation site rise, and documentation support requests decrease.**

### Assumptions
- VA/VSP should dictate standard tooling and workflow for project management across VFS teams.
- VA/VSP should be responsible for all documentation for building on VA.gov, except product-specific documentation which should be generated and maintained by product teams.
- VFS teams will want to find answers on their own (people will use self-service options when available).
- VFS teams will adopt our solution even if their company typically uses a different documentation solution.
- VFS teams need to be able to collaborate as a team and access usage documentation in the same space.
- Technical documentation should be kept near the code its describing, even if it is rendered elsewhere.
- Cultural differences between teams make it hard to adopt one standard documentation tool, process, and style.

### Questions
- What VA-specific access issues will we need to overcome?
- How different are the needs for team spaces and product spaces?
- Do product teams (VFS teams led by DEPO members) know that they are responsible for creating and maintaining product-specific documentation?

### Possible KPIs 
- Documentation support requests (need to implement)
- Time spent finding documentation? Clicks to documentation (need to implement)
- Broken documentation links (need to define scope)
- User satisfaction survey results (need to implement)

---

## Implementation Info
### The Plan
- Migrate/copy all crucial, non-sensitive documentation to the VA.gov-team GitHub repository
- Discovery sprint (in progress)

### Solution Narrative and Decisions

May 2019 — Decision to move documentation to a public repository.

July/Aug 2019 — Decision to consolidate documentation into a single public (va.gov-team) and a single private (va.gov-team-sensitive) repository, dissolving va.gov-vfs.teams (per Mikki’s recommendation).

Regarding migrating/copying content into new repositories, it was decided that content would be copied over, leaving historical content in legacy repositories in place as an intact artifact for reference. 

October 2019 — Discussion of large file storage (Matt, Mikki, Megan, Andrew, Leah). Determined that for now, mid-sized files (such as Sketch files, PowerPoints, etc) will be stored in GitHub with [explicit instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md#file-storage-and-large-files) about uploading those to Git LFS. There is no interim solution for shared storage of larger files. Per instructions from Lauren, team members are no longer saving video clips of research sessions, even scrubbed of PII.

December 16 - 20, 2019 — [Documentation site discovery sprint](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/documentation-site/research/discovery-sprint-12-2019)

### Current Status 
_Last updated December 19, 2019_
- Crucial, nonsensitive documentation content from vets.gov-team and va.gov-vfs-teams is being copied over to va.gov-team and links in va.gov-team are being fixed (lead: Matt)
- Discovery sprint in progress

### Screenshots

#### Before
