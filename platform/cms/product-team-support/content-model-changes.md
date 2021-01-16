
# Content model changes

**This is a WIP, goal to complete this in Sprint 24, ending January 29.**


## Non-breaking changes

**100% additive**. New fields or bundles are added to CMS. Examples:

  * New product is added to CMS, typically one or several content types and fields, such as Vet Center in Q1 2021.  
  * Appointments intro field (Q1 2021). 

For epics like this, we must document 

[What about Required fields vs not required fields?]


During epic refinement, a decision is made concerning whether the field should be visible to editors or not. 

* Keep it hidden from editors if 
  * CMS team is not ready to provide training or change management
  * Migration work is planned to add this data before launching it
  * The field is never
 * new field can be made public
  
 
### FE implications

 *  

## Breaking change (potentially)

### Content model refactoring within a content type

An existing field is replaced with another field or fields. Examples:

* Facility Health services content model hardening (Q3/Q4 2020)
* VHA health service “Type of care” field (Q1 2021)
* Time zone (Q3 2021)
* Intro text for Rich text field in Benefits Hubs (Q3 2020 - Q1 2021)

### Content model refactoring _across_ content types.

New content type is added, replacing functionality currently fulfilled by a different content type

* Top task page (Q1 2021)
* Content listing pages (Q1 2020)

