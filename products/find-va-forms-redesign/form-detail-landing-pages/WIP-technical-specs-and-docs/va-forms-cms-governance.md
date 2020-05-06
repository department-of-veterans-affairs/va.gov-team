# VA Forms - CMS Governance


## Stage 1

- The VA Forms DB is the source of truth for general form information (form name, form number, form owner/ID, etc.). 

- The CMS is the source of truth for the additional form information used on the form detail pages (related to, online tool, when to use this form, and related forms/instructions, etc.).

- The CMS is updated by nightly migrations from the VA Forms DB.

- A new form automatically generates a form detail landing page in the CMS in **draft** state. A PW content publisher will need to validate before publishing it. 

- If the form is "Not a VA form," the PW content publisher will check that value and delete the form detail landing page. Non-VA forms will not get a VA form detail landing page (but per business agreement, we will not exclude it from search).  
[@beth - would like your Drupal advice here: what are the current options to essentially suppress the form detail landing page when a form is not a VA form: keep it in "draft" state; archive it; delete it? EX: can we delete the form detail landing page without affecting it appearing in search results? I imagine since the form is still in the DB, it can still come up in search results, even if it doesn't get a form detail page but want to confirm./ jen] 


### Governance in Stage 1

### Ownership
- The VSA Public Websites team will 'own' all of the VA forms content that originate in the CMS. Ownerwhip will be assigned during migration. Only Public Websites CMS users will be able to edit this content.

- Forms data that originate in the VA Forms DB (e.g., form number, form owner/ID, form PDF URL) will continue to be owned by the forms managers and managed in the source VA Forms DB.

### Editorial workflow within CMS
Form pages will be governed by the same workflow as other content ('Draft', 'In review' 'Published').

### CMS permissions

- CMS users will not have the ability to add or delete the forms themselves or change the basic form data (like form number, form PDF URL, form owner/ID).

- PW content editors will have permission to edit the customizable fields in the form detail landing pages, but will not be able to publish. 

- PW content publishers can edit the customizable fields, and delete or publish form detail landing pages.  [@beth - Is this change correct based on convo?/ jen]


## Stage 2
- The VA Forms DB is retired and all public facing VA forms are managed in the CMS. VA forms managers get training and permission setting to manage forms in the CMS (ex: upload/delete forms). 

- The CMS is the source of truth for all form data for public facing VA forms. 

- Note: This is a blue sky post-1.0 goal, therefore TBD.

### Governance in Stage 2
We anticipate that various parts of VA will manage the basic form content in Phase 2, while the Public Websites team will retain ownership of additional fields. (Possible example: VHA form managers could upload new forms or updated versions of forms directly into the CMS; or directly remove retired/expired forms from the CMS.) However Phase 2 governance plans have not yet been finalized. Rather than risk over-engineering, the initial content model will only reflect Phase 1 governance requirements.

