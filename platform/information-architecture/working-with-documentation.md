# Working with Documentation - Rules of Engagement

This document will help all teams working in the VA.gov GitHub ecosystem understand when you should engage Documentation resources for support. All teams building on the Veteran Services Platform should follow the [va.gov-team repository Documentation best practices and guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md) and work with a Documentation resource as needed to help ensure the most complete, current, and relevant documentation is readily available to all teams (both present and future) who rely on it.

- [What does Documentation do?](#what-does-documentation-do)
- [Best practices for Documentation](#best-practices-for-documentation)
- [When and how to request support](#when-and-how-to-request-support)

## <a id="#what-does-documentation-do"></a>What does Documentation do?

- Part of VSP orientation introduces teams to documentation site best practices, prepares folders for new VFS team use, and provides support as requested
- Keeps best practices documentation up to date
- Provides opportunities for VFS and VSP team members to ask questions, gain expert knowledge, or access more informal and collaborative reviews
- Proposes and builds out folder structures and navigation within documentation site, based on team needs
- Reviews proposed folder structures and provides recommended changes based on documentation site best practices
- Audits proposed migration content lists and provides recommended changes based on documentation site best practices
- Proactively identifies organizational issues and overlaps/gaps in documentary coverage
- Proactively identifies documentation site areas that need increased governance
- Collaborates with DSVA on evaluations and audits of documentation in GitHub repositories used by VFS and VSP teams and provides recommendations for changes
- Collaborates with VFS teams responsible for documentation activities outside of GitHub repositories used by VFS and VSP teams
- Refers teams to engineering resources for development support relating to migration or large file storage
- As part of VFS team offboarding, works with VSP/DSVA team members to identify product and team documentation requiring preservation, relocating and relabeling documents as needed

### What Documentation doesn’t do:

- Provision repo access
- Manage documentation outside of VA.gov GitHub ecosystem
- Author original documentation on behalf of VFS teams

## <a id="#best-practices-for-documentation"></a>Best Practices for Documentation

### [Follow file naming conventions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md#naming-conventions)

Adhering to the naming conventions outlined in the repo best practices document promotes a consistent experience, URL readability, and improved alphabetization within folders. It also ensures that documentation can be cloned easily or copied to other repos without errors.

### [Keep organizational structures as flat as possible](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md#create-folders)

A flat directory structure, or hierarchy, makes documentation easier to discover by reducing the number of clicks needed to access documentation. See guidance on when it’s appropriate to create child folders here. 

### [Don’t upload large files via the web](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md#large-files)

GitHub is optimized for creation and management of Markdown files; uploading other types of files via the web interface quickly consumes valuable storage space and degrades repo performance. VSP requires that large files be uploaded to the va.gov-team repository only via the Git Large File Storage extension. See more detail on how we define “large files” and how to use Git LFS here.

### [Be mindful of sensitive information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md#public-vs-private)

The va.gov-team repository is exposed to the public web. In accordance with information security best practices, VSP requires that content be scrubbed of personally identifiable information (PII) before being shared on this repo.  In some cases, content containing PII may be stored in the private va.gov-team-sensitive repo. Learn more about what constitutes PII and when to use the sensitive repo here.

## <a id="#when-and-how-to-request-support"></a>When and how to request support

There are four required touchpoints between VFS teams and Documentation:

__Orientation__: As part of VSP orientation, Documentation will support VFS teams with an overview of the va.gov-team repo and documentation best practices, as well as provisioning product and team folders.

__Migration__: Documentation will work with VFS and VSP team members to identify and migrate select documentation from legacy GitHub repos to va.gov-team.

__Periodic reviews__: To ensure the repo provides current, authoritative, and readily findable documentation, Documentation resources may conduct occasional reviews of VFS as well as VSP team content and engage with teams around making updates as needed.

__Offboarding__: As part of VFS team offboarding, Documentation will support VFS teams with identifying product and team documentation requiring preservation and assist in relocating/relabeling documents as needed to support this aim.

Outside of these touchpoints, Documentation support can be requested any time a team thinks they could benefit from collaboration or review.

To request support, please reach out via Slack in #vsp-content-ia, tagging @megan.kelley and @thatmattjohnson.  Depending on the extent of your request, we may create a Zenhub issue to support it. Please be sure to make more requests ideally a sprint ahead of time so we can account for it in our planning.

