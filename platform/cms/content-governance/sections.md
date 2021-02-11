*This is a WIP, February 11 2021.*

## About Sections

Sections are the means by which access is granted to specific content (nodes, media, reusable blocks, taxonomy terms, etc). 

All content on the site is associated with one section. A required field forces editors to make this assocation. For editors who have access to only one section, such as most VAMC editors, this field is automatically populated. 

@todo ![insert-screenshot-of-governancefield]

Sections are organized hierarchically, which allows permissions to cascade from top to bottom. For example, an editor who has access to the VHA section has access to all sections nested underneath, including the Health Care Benefits Hub, all Vet Centers, and all VAMC facilities. But CMS users with access to VAMC facilities will not be able to access 

@todo ![insert-screenshot-of-vha-hierachy]

Editors can edit content associated to a specific section under three circumstances

1. Their CMS user account is associated to that section.
1. Their CMS user account is associated to a parent section (or grand-parent, or great-grandparent, etc).
1. They are a user with the "Content admin" or "Administrator" role (which bypass all Section settings)


## Managing access to sections

When new users are created, they are added to specific sections based on criteria outlined and agreed to by the product owner. For example, an editor of a VAMC system will be added to their VAMC section. A VISN web master would typically have access to a parent section. 

 @todo ![insert screenshot of interface]



## Adding new sections

Sections are managed by CMS users with the "user admin" or "administrator" role, here: 
https://prod.cms.va.gov/admin/structure/taxonomy/manage/administration/overview



## Limitations of Sections architecture

@todo Explain that a user's editorial workflow role is CMS-wide, and not section-specific. For example, a Content reviewer of one VAMC system cannot be a Content publisher of another VAMC system, etc. 
