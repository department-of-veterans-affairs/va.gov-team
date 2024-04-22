# VA Forms - CMS Governance

## Stages

### Stage 1
- The Forms DB is the source of truth for general form information (name, location, etc.). The CMS is updated by nightly migrations from the Forms DB.
- The CMS is the source of truth for additional information (description, online tool, etc.) used on the form detail pages.

### Stage 2
- The Forms DB is retired
- The CMS is the source of truth for all form data.

## Governance in Stage 1
### Ownership 
The VSA Public Websites team will own the all of the VA Forms content. Ownerwhip will be assigned during migration. Only CMS users with Public Websites team membership will be able to edit this content.

### Editorial workflow within CMS
Form pages will be governed by the same workflow as other content ('Draft', 'In review' 'Published').

### Permissions

- Because basic form data will be maintained in the Forms DB, non-admin users will not have permission to create or delete Form content in the CMS.
- Users with appropriate roles and administration membership will have permission to edit Forms pages, but will not be able to edit fields that come from Forms DB.

## Governance in Stage 2
We anticipate that various parts of VA will manage the basic form content in Phase 2, while the VSA Public Websites team will retain ownership of additional fields. However Phase 2 governance plans have not yet been finalized. Rather than risk over-engineering, the initial content model will only reflect Phase 1 governance requirements.

