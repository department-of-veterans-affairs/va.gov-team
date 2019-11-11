
# Documentation Site Product Outline
### Points of Contact
- GitHub Label: none
- Slack channel: #vsp-content-ia

|Name|Role|Slack|
|----|----|-----|
|Patrick Bateman | DSVA Lead| @Patrick |
|Leah Bannon | DSVA lead| @Leah|
|Megan Kelley | VSP Content & IA Product Manager| @Megan Kelley|
|Matt Johnson | VSP Content & IA Information Architect | @Matt Johnson|
|Mikki Northuis | VSP Content & IA Information Architect |@Mikki|

### Product Key Words
- Documentation
- Documentation site
- Repository 

### How to Access
- MVP of documentation site is va.gov-team repository: https://github.com/department-of-veterans-affairs/va.gov-team

### Overview
The documentation site is the single source of truth for team, product, and platform information required by teams building veteran-facing services on the platform. 

### User Problem Statement 
_“As a team member building on VA.gov or the VA.gov platform, I need to be able to find on my own and access crucial information about the platform and the product I’m building, so that I can efficiently build and support great veteran-facing services.”_

Currently, documentation for building on and with the VA.gov platform is spread across multiple GitHub repositories and other locations, each with its own admin and permissions. This causes many problems: 
- Teams do not know how to work on the VA.gov platform, and are unable to find that information on their own. 
- Teams often do not have access to legacy GitHub repositories where crucial documentation is stored.
- It is difficult to search for documents unless you know the title.
- Due to pain points with the current system (such as no convenient shared large file storage), teams are using their own external tools for documentation of their product. This means that crucial documentation must be transferred into GitHub when the team offboards, which is often left incomplete.

### User Goals
VFS and VSP team members can easily find and access crucial information they need to do their jobs in one central location. 

### The Plan
- Migrate/copy all crucial, non-sensitive documentation to the VA.gov-team GitHub repository
- Explore options for creating a documentation site with better UI than a GitHub repo: GitHub Pages, Gatsby, or building something custom
- Implement solution for shared large file storage
- TBD

### Solution Narrative and Decisions

May 2019 — Decision to move documentation to a public repository.

July/Aug 2019 — Decision to consolidate documentation into a single public (va.gov-team) and a single private (va.gov-team-sensitive) repository, dissolving va.gov-vfs.teams (per Mikki’s recommendation).

Regarding migrating/copying content into new repositories, it was decided that content would be copied over, leaving historical content in legacy repositories in place as an intact artifact for reference. 

October 2019 — Discussion of large file storage (Matt, Mikki, Megan, Andrew, Leah). Determined that for now, mid-sized files (such as Sketch files, PowerPoints, etc) will be stored in GitHub with [explicit instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/repo-guidelines.md#file-storage-and-large-files) about uploading those to Git LFS. There is no interim solution for shared storage of larger files. Per instructions from Lauren, team members are no longer saving video clips of research sessions, even scrubbed of PII.

### Current Status 
_Last updated November 1, 2019_
- Crucial, nonsensitive documentation content from vets.gov-team and va.gov-vfs-teams is being copied over to va.gov-team (lead: Matt)

### Possible KPIs 
- Time spent finding documentation/clicks to documentation (need to implement)
- Broken documentation links (need to define scope)
- User satisfaction survey results (need to implement)
