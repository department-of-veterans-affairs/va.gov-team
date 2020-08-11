# Learning Center Topics and Audience Taxonomies [exploratory sessions]

_The goal of this document is to review and understand the purpose / structure / usage of [Topics and Audience taxonomies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#topic-tags) in the context of the Learning Center, but also review opportunities for reusability in other VA products._

## Why do we need Topics and Audience taxonomy?

* Content management; Classification (labeling)
* Identify buckets of content - group content with similar meaning/purpose
* Define content relations, dependencies (e.g. related content)
* Search filters/facets (global and more localized within certain products)
* Support navigational structures

## What are we trying to avoid when formulating Topics and Audience taxonomies?

* Tags that can be easily misinterpreted by veterans OR content editors
* Overly granular or too vague taxonomy terms
* Mistaking taxonomy for navigation
* Faulty tag application to new and legacy content by editors due to tag misinterpretation
* Inability to use established taxonomy in public search facets due to faulty tagging of content

## Topics taxonomy - concerns

_NOTE: minimum of 1 topic tag is required for LC content._

Benefit Hub categories are mixed with other categories
VBA, VHA, NCA were originally placed in the Audience non-beneficiaries tree, now moved to topics
Need to understand the usage of VBA, VHA, NCA tags
Is it to tag IRIS Q&A content, so that content owners can easily find it OR to display VBA, VHA, NCA as Topics on the front end?

## Audience taxonomy - concerns

_NOTE: constraints for application of audience terms to content are [described here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#audience-tags)_

* Taxonomy splits into two vocabularies: beneficiaries and non-beneficiaries.
   * Constraint: Values for content tagging can be picked from only one bucket or the other, not both at the same time: only Beneficiaries OR only non-Beneficiaries
   * Need to confirm constraints around tags selection and whether non-beneficiary tag labels are final
   * Discuss how label length may affect upcoming Search UI
   * Should beneficiaries and non-beneficiaries terms live in separate vocabularies or in one hierarchical vocabulary? - this depends on desired authoring experience.

---

## Notes [8/6, 8/10]

**Attendees**: Meg Peters, Mikki Northuis, Beth Potts, Liz Lantz, John Hashimoto

### Goals:

* Gather enough information around the Topic and Audience taxonomy usage in order to structure sensible taxonomy vocabularies in the CMS that are: 
   * clear / unambiguous for both Veterans (consume content) and Editors ( contribute content)
   * reusable in other VA products
   * can be converted into effective search facets, both Veteran-facing and Editor-facing
* Identify upcoming VA products that may use and/or inform the composition of Topics and Audience taxonomy.


### Summary: 

The group was not able to compile an extensive list of clear examples of content that will be tagged by Topics in question (General, VBA, VHA, NCA) within the allocated time (2 hrs), since the scope of the Learning Center is still largely unclear. Additional effort is happening in [12329](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12329). 

**The group was able to compile feedback and recommendations that may help in refining Topics and Audience taxonomies.**

### Notes:

* The scope of the Learning Center / content boundaries is still largely unclear. Our path should be to create a robust taxonomy that can satisfy many different use cases.
* Topic Taxonomy:
   * “General” topic is too generic and will likely need to be broken down into several other terms with higher specificity
   * Veteran and non-Veteran facing tags are combined in one list, which may be an issue
      * Example: VBA,VHA,NCA topics - indicate an owner / organization, not a topic. Consider other label options that cannot be misinterpreted by veterans.
      * Search by the owner is more beneficial to Content Editors than to veterans. We can manage content search by the owner using other means. E.g. Owner/Administration taxonomy in the CMS.
* Audience Taxonomy
   * Non-beneficiary terms are likely too lengthy
   * Terms that include commas may appear as overly complex / granular. Such terms may also break the application layout on mobile devices.
   * Consider hierarchical taxonomy and/or concise labels without punctuation 
   * Consider additional Veteran groups (see bottom of page)

### Initiatives that may inform the composition of VA-wide Topics and Audience taxonomy:

* Learning Center [POC - Jen Lee]
  * Card sort exercise is planned for both Topics and Audience tags (POCs: Jen Lee, Danielle Thierry)
  * Audiences for the card sort:  1) veterans 2) VA business offices - content authors
* Search [POC - John Hashimoto]
  * Search by topic/audience is currently blocked by availability of Collections API for decoupled clients like va.gov front-end - https://search.gov/manual/collections.html . There is a desire to implement topic and audience facets in Search once Collections API becomes available for decoupled consumers.
* Migration of the lower level content  (offices, etc) into va.gov. [POCs: Meg Peters, Mikki Northuis]
  * The effort is in early stages. Some of the content may overlap with the Learning Center.


### Examples of topic tag collisions:

* “Veterans Benefits Administration” topic tags was misinterpreted by one of the users during research as a pathway to “view all benefits”, while it was intended as a way to list all VBA related articles in the context of the Learning Center. Prototype screen with VBA topic.
   * VBA, VHA, NCA tags are organization-focused. They are referencing groups inside the VA. Topics related to those groups should be more descriptive / “topical” and less “organizational”.

### Proposal to re-structure Topics taxonomy into several buckets:

* Benefits
  * Burials and memorials
  * Careers and employment
  * Disability
  * Education and training
  * Health care
  * Housing assistance
  * Life insurance
  * Pension
* Tools / Account (label TBD)  - benefit management
  * Decision reviews {added 7/20}
  * Records
  * Claims
  * VA account and profile
* Support / Help (label TBD - to replace “General” topic)  - _A category that's agnostic of benefits and not about your account/profile/tools. These are more general customer issues and sitewide things. Examples: User is having problems opening a PDF link on our site; someone is just looking for the general 'contact us' phone number or email. We know that [card sort exercise](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/card-sort-research-plan.md) will have an effect on how “General” topic is structured._


### Additional Audience groups

_Audience taxonomy may be missing some groups. Some were identified in research sessions:_
* Veterans with mental issues
* Veterans in risk for suicide
* Disabled veterans
etc.
