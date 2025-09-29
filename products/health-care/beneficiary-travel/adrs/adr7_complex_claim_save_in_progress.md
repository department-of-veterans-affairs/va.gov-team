# Complex Claims Save In Progress Investigation and Analysis

> **Recommendation: The VA Forms Save-in-Progress is not suitable for our scenario and we should use the BTSSS API as our source of truth and Save-in-Progress system.**

## Problem Statement
The current Save-in-Progress (SIP) functionality in the forms library only uses a combination of `user_uuid` and `form_id` to identify saved forms. This enforces uniqueness with a database index, meaning each user can only have one in-progress form of a given type at a time.

In our scenario, we need to support multiple instances of the same form type for a single user. For example, a user may need to start and save multiple claims or expense forms concurrently. Under the current design, the system would block saving the second form.

If we can overcome this limitation, we could leverage the forms library and VA platform SIP as intended—avoiding custom solutions such as building list loops or managing multiple endpoint calls for every user action.

> NOTE: In [this previous ADR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/adrs/adr6_standalone_form_components_sync_save_as_you_go.md) we decided to use the BTSSS API as a SIP instead of the VA forms SIP. Since its been some time since the previous investigation, I have been asked to dig into this issue again to re-evaluate the code base and see if its possible to use the VA forms SIP.

### Open Question
Can the forms library SIP be updated to allow uniqueness to be defined by `user_uuid` + `claim_id` + `form_id` (instead of just `user_uuid` + `form_id`), so that multiple in-progress instances of the same form type can be supported?

## Investigation into the current Save-in-Progress (SIP) functionality

### Initial Investigation of the Code Base
After looking into the [VA Forms Documenation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview) and looking at [vets-website](https://github.com/department-of-veterans-affairs/vets-website) and [vets-api](https://github.com/department-of-veterans-affairs/vets-api) code I have determined that we can’t use the existing SIP table [in_progress_forms](https://github.com/department-of-veterans-affairs/vets-api/blob/2112eca0fb0afeceabea33aa53b5ba5b0a022afd/db/schema.rb#L1207C17-L1207C34) for our scenario because of how it enforces uniqueness. The current schema has a unique index on `user_uuid` + `form_id`, which means each user can only have one in-progress version of a given form type at a time. Because of that uniqueness enforcement, the SIP feature doesn’t align with our needs. 

To add a SIP feature we will need a different approach. After investigating I think these would be our options...

1. Use a separate table to keep track of SIP complex claims forms
   > Not sure if anyone else has done this yet but hoping to talk to the forms teams today so ill find out how feasible this option is!
   - Pros:
         - Decouples us from the constraints of the VA Forms SIP table.
         - We can design the db schema to fit our exact use case (user_uuid + claim_id + form_id).
         - Avoids the risk of breaking or conflicting with other teams’ reliance on the existing in_progress_forms table.
         - Future-proof: we’d own and control the schema evolution for complex claims.
   - Cons:
         - Additional maintenance burden (new table = new migrations, monitoring, added backend code, ect.).
         - Duplicates some functionality already handled by the VA Forms SIP, which means "reinventing parts of the wheel".
         - Might introduce inconsistencies if VA platform SIP evolves and we’re out of sync.
         - Requires extra developer time for initial implementation + ongoing support.
2. Adjusting the schema index for `in_progress_forms` table to allow multiple saves per form type
   > I dont think the platform team will let us do this since so many other forms use this table and rely on that index with `user_uuid` + `form_id`
   - Pros:
         - Keeps everything under the single SIP system (no duplicate logic).
         - Developers can reuse existing forms library SIP code and features without building custom infrastructure.
         - If allowed, it would align with the “platform way” of handling SIP.
   - Cons:
         - Very unlikely to be approved — the unique index (user_uuid + form_id) is core to how all forms across VA.gov rely on SIP.
         - Risk of unintended side effects for other form flows that assume uniqueness.
         - Requires coordination with the platform team, schema changes, and regression testing across many products.
         - Could create migration/compatibility challenges if downstream consumers aren’t ready for the change.
3. Keep our original thought process of using the BTSSS API as the source of truth and not using the forms library.
     - Pros:
         - Aligns with the previous ADR decision.
         - No additional backend code changes needed.
         - Supports multiple in-progress forms per user, meeting our core requirement.
         - Avoids discrepancies across platforms (web, Portal, Mobile).
         - Eliminates the need for risky schema changes or custom SIP overrides.
         - No dependency on VA Forms SIP or its constraints.
         - Leverages a system (BTSSS) that’s already "battle-tested" for travel claims.
     - Cons:
         - Doesn’t align with the VA-wide "preferred" SIP approach.
         - Requires extra effort for list loops and handling multiple API calls per user action.
         - May require more front-end complexity since we’re not leveraging the built-in SIP utilities in the forms library.

### Further Investigation into using VA forms SIP 
I talked with the VA Forms team [here](https://dsva.slack.com/archives/C044AGZFG2W/p1758907377218389) and learned that there is a possible way to continue to use the VA Forms SIP functionality. We would create our own controller in `vets-api` that overrides the `form_id` method in the controller and instead of making it a static value, based off of the given `form_id` we would change that method to make it the `form_id + claim_id`. This would make it so that the unique index on the `user_uuid + form_id` would work for our scenario and we could have multiple forms of the same type for a given user.

Unfortunetly, VA Forms SIP has some additional limitations that we hadn't considered that would make using this option a bad idea; more details below.

### Reasons we should not use VA Forms SIP

1. Portal Limitations
     > NOTE: These limitations will only exist while the Portal App is still in use. Eventually this will be depricated and Veterans will only use the web (va.gov) for complex travel claims
     - If a Veteran adds a claim on the web (va.gov), the claim would be created in `BTSSS API`
     - If the Veteran then begins to add an expense or document, that information would be saved using the VA Forms SIP. The BTSSS API would not be aware of these additions.
     - If the Veteran later leaves the web and opens the claim in the Portal, they would see the pending claim (from BTSSS) but not the associated expenses or documents (stored only in SIP).
     - **Result: Discrepancies in what the Veteran sees between the web and the Portal.**
3. Mobile App Limitations
     - The Mobile App does not support VA Forms, and therefore does not support VA Forms SIP.
     - If we decide to use VA Forms + SIP on the web, we would need to build significant customizations in the Mobile App to replicate that behavior.
          - This means custom-building both the frontend form experience and a backend solution that connects to SIP database tables, so the data a user sees on the web matches what they see on mobile.
     - If we choose not to build that custom integration, the same type of discrepancy described in the Portal example would occur:
          - A Veteran could create a claim on the web (saved in BTSSS) and begin filling expenses or documents (saved in SIP).
          - When they open the Mobile App, they would see the pending claim (from BTSSS) but not the expenses/documents (since the Mobile App doesn’t use SIP).
     - **Result: Discrepancies in what the Veteran sees between the web and the Mobile App.**
  
## Recommendation
After investigating the VA Forms SIP system and exploring possible workarounds, we have determined that it is not a good fit for Complex Claims. While overriding the `form_id` logic could technically allow multiple in-progress forms per user, SIP introduces significant limitations:

- It creates data discrepancies between the web, Portal, and Mobile App experiences.
- It requires custom backend and frontend work to bridge gaps, increasing complexity and maintenance.
- It does not align cleanly with how Complex Claims integrates with the BTSSS API, which remains our system of record.

Given these constraints, we recommend continuing to use the BTSSS API as the source of truth for Save-in-Progress functionality. This approach:

**Pros:**
   - Aligns with the previous ADR decision.
   - No additional backend code changes needed.
   - Supports multiple in-progress forms per user, meeting our core requirement.
   - Avoids discrepancies across platforms (web, Portal, Mobile).
   - Eliminates the need for risky schema changes or custom SIP overrides.
   - No dependency on VA Forms SIP or its constraints.
   - Leverages a system (BTSSS) that’s already "battle-tested" for travel claims.

**Cons:**
   - Doesn’t align with the VA-wide "preferred" SIP approach.
   - Requires extra effort for list loops and handling multiple API calls per user action.
   - May require more front-end complexity since we’re not leveraging the built-in SIP utilities in the forms library.

> If VA Forms SIP adds support for multiple forms for a given user and Mobile use, we can revisit. For now, BTSSS is the most stable solution.
