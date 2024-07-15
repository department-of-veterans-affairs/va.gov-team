## Paragraphs without headers initiative
Q2 2023

Within the VA Benefits taxonomy, we need a way to manage setting content hierarchy without setting explicit header levels, for accessibility purposes. 

Codename: "Magichead" or "Magic header"


### User story
**AS A** Content Editor
**I WANT** to be able to add heading-type formatting to limited RT content (e.g., VA Benefit Taxonomy's Eligibility summary) without adding specific heading levels
**SO THAT** presentation layers can apply heading styles/hierarchy while also ensuring that heading hierarchies make sense in a given product.


### Background / Implementation
In spring 2023, the beta build of "magic header" was built in the VA Benefits taxonomy. While viewing a VA Benefits taxonomy term, in the Eligibility overview > Eligibility overview sections, you can see this proof of concept. 

Users may add an overview section, specify a Section heading + Section description, and rearrange the hierarchy of each Overview section by drag/ drop. Users may also select "Show row weights" on the entire Eligibility overview sections area, and manually specify order and depth of sections. 

Example taxonomy term: https://prod.cms.va.gov/taxonomy/term/1135/edit?destination=/admin/structure/taxonomy/manage/va_benefits_taxonomy/overview

### Design proposal
https://app.mural.co/t/departmentofveteransaffairs9999/m/vagov6717/1660845137501/6eadf59a3f4d8dcd29da572a68115a22d6114fe4?wid=0-1681487526574&sender=u252e7152800e3981889d1910


### Current status
As of March 2024, Sitewide Content team has entered VA Benefits content and provided feedback on the beta content, for iteration by Public Websites team. 

### Tickets
* Proof of concept ticket: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13143
* Parent epic where much of the initial build work was completed: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9628
* "magic header" issue list: https://github.com/department-of-veterans-affairs/va.gov-cms/issues?q=is%3Aissue+magic+header+

