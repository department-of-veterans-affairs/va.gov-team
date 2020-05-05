# VA Forms - CMS Governance


## Stage 1
- The VA Forms DB is the source of truth for general form information (form name, form number, form owner/ID, etc.). 
- The CMS is updated by nightly migrations from the VA Forms DB.
- The CMS is the source of truth for the additional forms information (related to, online tool, related forms/instructions, etc.) used on the form detail pages.

### Governance in Stage 1

### Ownership
- The VSA Public Websites team will 'own' all of the VA forms content that originate in the CMS. Ownerwhip will be assigned during migration. Only Public Websites CMS users will be able to edit this content.
- Forms data that originate in the VA Forms DB (e.g., form number, form owner/ID, form PDF URL) will continue to be owned by the forms managers and managed in the source VA Forms DB.

### Editorial workflow within CMS
Form pages will be governed by the same workflow as other content ('Draft', 'In review' 'Published').

### CMS permissions

- Because basic form data will be maintained in the VA Forms DB, CMS users will not have the ability to create or delete form detail landing pages in the CMS. [@beth - not sure if I understood what this means, so I took a stab based on what I think I understand and what I would expect./jen] 
- Users with appropriate roles and administration membership will have permission to edit form detail pages, but will not be able to edit fields that come from Forms DB. [Not sure about this. In stage 1, only PW content team with CMS access will have be able to edit or publish form detail pages; so "administration membership" doesn't apply, if I think this is what it means. For example: if a stakeholder or form manager tells us that a form should have different 'related to' labels, they'll have to get in touch with the PW team to have that updated for them./ jen]


## Stage 2
- The VA Forms DB is retired and all public facing VA forms are managed in the CMS.
- The CMS is the source of truth for all form data for public facing VA forms. 
- Note: This is a blue sky post-1.0 goal, therefore TBD.

### Governance in Stage 2
We anticipate that various parts of VA will manage the basic form content in Phase 2, while the Public Websites team will retain ownership of additional fields. (Possible example: VHA form managers could upload new forms or updated versions of forms directly into the CMS; or directly remove retired/expired forms from the CMS.) However Phase 2 governance plans have not yet been finalized. Rather than risk over-engineering, the initial content model will only reflect Phase 1 governance requirements.

