Three intersecting governance systems for the basis of content governance in VA.gov CMS. Each user in the CMS has a mix of the following assignments.

- [Content creation roles](content-creator-roles/) determine what type of content each user can create.
- [Content moderation roles](content-moderation-roles/) (Content Editor, Content Reviewer, Content Publisher) determine to which point each user can move content in the editorial workflow, from Draft -> In Review -> Approved -> Published -> Archived.
- [Sections](sections/) determine what content each user can edit, and where they can “put” content that they create.

All CMS editors are assigned a mix of these three things (with the exception of Content admins, to whom none of these rules apply).

## Plain Language Overview Of Permissions, Roles, and Sections in the CMS
The complexity of the Drupal CMS and Workbench Access Module can make it difficult to understand how our current-state functions. This overview provides a plain language version of configuration of Drupal CMS Content Governance.

### Permissions

This is the most granular piece of the puzzle. There are currently over 1500 individual permissions that enable the CMS to provide all of its functionality. Permissions are added to the CMS through Modules and each permission is tied to a specific module that was installed. Permissions are NOT the same thing as roles, although they are closely related.

**Analogy: Stars**

Think of permissions as all of the stars in the sky that make up the Drupal Universe. When you look up at the sky, each star is an individual permission that is one part of the bigger picture.

### Roles

In the simplest terms, Roles are groupings of Permissions that are created by an Administrator. Each role contains a set of permissions based on the different needs of the user groups that can access CMS. While some roles have access to more permissions than other roles, all roles must be assigned to each user by an Administrator based on the needs of that individual user.

In the CMS, we have 16 different roles that can be assigned to a user.

1. Content API Consumer: Used by GraphQL to access content via Content API. Should not be given to humans.
2. Content creator - Benefits hubs: Can create benefits hub content (hub landing pages and detail pages).
Users with this role should also be editors, reviewers, or publishers.
3. Content creator - Resources and support: Can create content types related to resources and support products
4. Content creator - Outreach Hub: Can create content types related to Outreach Hub
5. Content creator - VAMC: Can create content types related to VAMC (except for the parent "VAMC" and "VAMC Operating Status" content types, which are created by content admins). Users with this role should also be editors, reviewers, or publishers.
6. Content creator - VBA: Can create VBA Facility Services.
7. Content creator - Vet Center: Can create Vet Center Health Services and CAPs.
8. Content editor: Can create and edit content, but can't review or publish it.
9. Content reviewer: Can approve content changes for publishing, but can't publish it.
10. Content publisher: Can publish content.
11. Content admin: For members of the Global UX team, and other content users who have permissions beyond those of Content Publisher.
12. Redirect admin: Can create and edit redirects.
13. CMS account admin: Can create and manage users, roles, and access to sections of content.
14. Administrator: Has all permissions.
15. Homepage Manager: Can create home page related components (news and benefit promo blocks; news spotlight and hero entityqueues).
16. Translation manager

**Analogy: Constellations**

Think of Roles as constellations in the night sky. While admins can look at each star individually, it makes more sense to create groupings based on the unique needs of each of the user groups that have access to the CMS. Drupal users that have the Administrator role are like the gods of the Drupal universe and can create new groupings as new needs arise.

### Sections

While assigning a user a set of permissions in the form of a role is an additive process, (meaning that assigning users to roles allows them a certain set of permissions or functionality within the CMS), assigning users to sections is a subtractive process. This means that assigning a user to a section limits that user to only make edits within the section of the CMS that they have been assigned to.

For user groups that work at a facility such as a VAMC or a Vet Center (which make up the vast majority of our editor base), the section that they are assigned to is most likely their particular facility so that those editors can only make edits for the facility that they work at. While the majority of sections within the CMS align to the facility structure, there are also user groups that do not work at VA facilities that are assigned to sections within the CMS. For example, the Sitewide Content Team is a user group made up of contractors that work on behalf of the VA that make edits to VA.gov.

Sections are set up in a hierarchical structure. If an admin assigns a user to a top level section, that user will also have access to edit all of the individual sections that are a part of the top level section. If a user is assigned a bottom level section (for example an individual VAMC Facility, Vet Center, or Benefit Office) that user will only have access to edit their individual section and no other sections that are higher in the hierarchy.

**Analogy: Telescope**

With the current analogy, think of assigning a user a section as providing them with a telescope. While there are lots of different constellations and parts of the sky that a user can look at, they can only point their telescope at one constellation based on their role.

In the current implementation of the CMS, if we have a user assigned to multiple sections, they are currently only able to have the same roles assigned to both sections. Users need to be able have different roles for each of their sections.

For this use case, we will have a user with two telescopes, but they are currently only able to point both of their telescopes at one constellation because all roles assigned apply to all sections assigned. Users need each telescope to be able to look at a different constellation.

The structure of sections is as follows:

#### VACO

**Veterans Experience Office**
- Outreach Hub
- VEO Campaign Landing Pages

**Office of Public and Intergovernmental Affairs**
- OPIA Alerts and Promo banners
- OPIA Campaign Landing Pages
- OPIA Home Page

#### NCA
- NCA facilities
- NCA Resources and support
- Burials and memorials benefits hub

#### VBA
- VBA Campaign Landing Pages
- VBA facilities (58 Total Facilities)
- Continental (12 Individual Facilities)
- Northeast (20 Individual Facilities)
- Pacific (13 Individual Facilities)
- Southeast (13 Individual Facilities)
- VBA Facility Services
- Service Regions
- VBA Resources and support
- VBA Benefits Hubs
- Decision reviews
- Disability benefits hub
- Pension benefits hub
- Life insurance benefits hub
- Housing assistance benefits hub
- Education benefits hub
- Careers and employment benefits hub

#### VHA
**Health care benefits hub**
**VHA Campaign Landing Pages**
**VHA Resources and support**
**Centralized content: VAMC**
**VAMC facilities (139 Total Facilities)**
- VISN 1 (8 Individual Facilities)
- VISN 2 (9 Individual Facilities)
- VISN 4 (9 Individual Facilities)
- VISN 5 (6 Individual Facilities)
- VISN 6 (7 Individual Facilities)
- VISN 7 (8 Individual Facilities)
- VISN 8 (7 Individual Facilities)
- VISN 9 (5 Individual Facilities)
- VISN 10 (11 Individual Facilities)
- VISN 12 (8 Individual Facilities)
- VISN 15 (7 Individual Facilities)
- VISN 16 (8 Individual Facilities)
- VISN 17 (7 Individual Facilities)
- VISN 19 (8 Individual Facilities)
- VISN 20 (8 Individual Facilities)
- VISN 21 (7 Individual Facilities)
- VISN 22 (8 Individual Facilities)
- VISN 23 (8 Individual Facilities)

**Vet Centers (303 Total Facilities)**
- District 1 (81 Individual Facilities)
- District 2 (49 Individual Facilities)
- District 3 (55 Individual Facilities)
- District 4 (47 Individual Facilities)
- District 5 (71 Individual Facilities)

#### OCTO
**Services taxonomy**

**Sitewide content team**
- Campaign Landing Pages
- Header and footer
- Resources and support
- Root pages
- Forms
- Records benefits hub

#### VA.gov CMS Knowledge Base


## See also

[User administration](../user-administration/)
