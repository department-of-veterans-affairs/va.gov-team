# (In Progress) Complex Claims Save In Progress Investigation and Analysis

## Problem Statement
The current Save-in-Progress (SIP) functionality in the forms library only uses a combination of `user_uuid` and `form_id` to identify saved forms. This enforces uniqueness with a database index, meaning each user can only have one in-progress form of a given type at a time.

In our scenario, we need to support multiple instances of the same form type for a single user. For example, a user may need to start and save multiple claims or expense forms concurrently. Under the current design, the system would block saving the second form.

If we can overcome this limitation, we could leverage the forms library and VA platform SIP as intended—avoiding custom solutions such as building list loops or managing multiple endpoint calls for every user action.

> NOTE: In [this previous ADR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/adrs/adr6_standalone_form_components_sync_save_as_you_go.md) we decided to use the BTSSS API as a SIP instead of the VA forms SIP. Since its been some time since the previous investigation, I have been asked to dig into this issue again to re-evaluate the code base and see if its possible to use the VA forms SIP.

## Open Question:
Can the forms library SIP be updated to allow uniqueness to be defined by `user_uuid` + `claim_id` + `form_id` (instead of just `user_uuid` + `form_id`), so that multiple in-progress instances of the same form type can be supported?

## Investigation into the current Save-in-Progress (SIP) functionality

### Initial Investigation of the Code Base
After looking into the [VA Forms Documenation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview) and looking at [vets-website](https://github.com/department-of-veterans-affairs/vets-website) and [vets-api](https://github.com/department-of-veterans-affairs/vets-api) code I have determined that we can’t use the existing SIP table [in_progress_forms](https://github.com/department-of-veterans-affairs/vets-api/blob/2112eca0fb0afeceabea33aa53b5ba5b0a022afd/db/schema.rb#L1207C17-L1207C34) for our scenario because of how it enforces uniqueness. The current schema has a unique index on `user_uuid` + `form_id`, which means each user can only have one in-progress version of a given form type at a time. Because of that uniqueness enforcement, the SIP feature doesn’t align with our needs. 

To add a SIP feature we will need a different approach. After investigating I think these would be our options...

1. Use a separate table to keep track of SIP complex claims forms
     - *Not sure if anyone else has done this yet but hoping to talk to the forms teams today so ill find out how feasible this option is!*
2. Adjusting the schema index for `in_progress_forms` table to allow multiple saves per form type
     - *I dont think the platform team will let us do this since so many other forms use this table and rely on that index with `user_uuid` + `form_id`*
3. Keep our original thought process of using the BTSSS API as the source of truth and not using the forms library.

### Further Investigation into using VA forms SIP 
I talked with the VA Forms team [here](https://dsva.slack.com/archives/C044AGZFG2W/p1758907377218389) and learned that there is a possible way to continue to use the VA Forms SIP functionality. We would create our own controller in `vets-api` that overrides the `form_id` method in the controller and instead of making it a static value, based off of the given `form_id` we would change that method to make it the `form_id + claim_id`. This would make it so that the unique index on the `user_uuid + form_id` would work for our scenario and we could have multiple forms of the same type for a given user.

Unfortunetly, VA Forms SIP has some additional limitations that we hadn't considered that would make using this option a bad idea; more details below.

### Reasons we should not use VA Forms SIP

1. Portal Limitations
     - If a Veteran adds a claim on the web (va.gov) the user -> A claim would be created in BTSSS API
     - Then if a Veteran begins to fill out an expense and/or document -> We would use the VA Forms SIP to save this information (BTSSS API would not be aware that these had been added)
     - If the Veteran leaves the claim on the web and then goes to Portal -> The user would see the pending claim since it was created using the BTSSS API but they would not see any information regarding the expense and/or document since that information is in the VA Forms SIP.
     - **We would have discrepancies between what a user sees for a claim on the web vs Portal**
2. Mobile App Limitations
     - Currently the Mobile App does not support the VA Forms SIP using these on web **would require a lot of customization on the Mobile App to match what occurs on the web**
     - If we do not build a customized form and attempt to do what the web does on the Mobile App, then **we will have discrepancies as described above with the Portal limitations**
