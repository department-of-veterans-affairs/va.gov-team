# (In Progress) Complex Claims Save In Progress Investigation and Analysis

## Problem Statement
The current Save-in-Progress (SIP) functionality in the forms library only uses a combination of `user_uuid` and `form_id` to identify saved forms. This enforces uniqueness with a database index, meaning each user can only have one in-progress form of a given type at a time.

In our scenario, we need to support multiple instances of the same form type for a single user. For example, a user may need to start and save multiple claims or expense forms concurrently. Under the current design, the system would block saving the second form.

If we can overcome this limitation, we could leverage the forms library and VA platform SIP as intended—avoiding custom solutions such as building list loops or managing multiple endpoint calls for every user action.

## Open Question:
Can the forms library SIP be updated to allow uniqueness to be defined by `user_uuid` + `claim_id` + `form_id` (instead of just `user_uuid` + `form_id`), so that multiple in-progress instances of the same form type can be supported?

## Investigation into the current Save-in-Progress (SIP) functionality
After looking into the [VA Forms Documenation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview) and looking at [vets-website](https://github.com/department-of-veterans-affairs/vets-website) and [vets-api](https://github.com/department-of-veterans-affairs/vets-api) code I have determined that we can’t use the existing SIP table [in_progress_forms](https://github.com/department-of-veterans-affairs/vets-api/blob/2112eca0fb0afeceabea33aa53b5ba5b0a022afd/db/schema.rb#L1207C17-L1207C34) for our scenario because of how it enforces uniqueness. The current schema has a unique index on `user_uuid` + `form_id`, which means each user can only have one in-progress version of a given form type at a time. Because of that uniqueness enforcement, the SIP feature doesn’t align with our needs. 

To add the SIP feature we will need a different approach. After investigating I think these would be our options...

1. Using a separate table to keep track of SIP complex claims forms
     - *Not sure if anyone else has done this yet but hoping to talk to my forms guys today so ill find out how feasible this option is!*
3. Adjusting the schema for in_progress_forms able to allow multiple saves per form type
     - *I dont think platoform will let us do this since so many other forms use this table and rely on that index with `user_uuid` + `form_id`*
4. Keep our original thought process of using the BTSSS API as the source of truth and not using the forms library.
