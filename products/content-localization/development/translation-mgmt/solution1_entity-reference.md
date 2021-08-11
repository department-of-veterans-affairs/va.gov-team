# Solution 1: Localization Support Using Entity Reference Fields Combined with Language Fields

* Field Type: Entity Reference
* Field Label: Translated Pages
* Reference Type: Benefits Detail Page (needs to eventually expand to other content types / universally applied to all)
* Type of item to reference: Content
* Allow number of values: Unlimited, or based on the total supported languages present in the Language Dropdown field
* The [Language Dropdown](dependency_language-dropdown-field.md) field is a dependency of this solution
* Various 'Entity Reference' modules could be potentially used depending on our final requirements
  * A backwards reference that ties / binds a 'main' translated page to other language pages for that page will need to be maintained. This kind of functionality is beyond the core entity reference module.

### Description

Since each translated page will need to be its own node, the relationship between these nodes needs to be maintained. An 'Entity Reference' field type has the capability to search for nodes by title or other criteria and attach those nodes as references. These node references can then be queried via GraphQL and return their correlating language codes, urls, and other data as needed by the front end.

Usually a Translations Management System (TMS) will maintain a different content relationship paradigm, and will instead store different 'versions' of one node and each version would represent a translated language's content. In this traditional approach, the node count stays the same, but there is not just more data within each node pertaining to the TMS.

### Considerations

* Migration complexity will most likely be high. If the number of translations is relatively low during this initial implementation (50-100 pages), then migration may be manageable, but will likely still be painful.
* Usability is a concern, and would need to be considered on the Editor side.
* Data integrity could be flaky if not implemented correctly. We don't want to have orphaned translations that are no longer attached to the main english page, and tracking them down in such cases will turn into a maintenance concern long term.
