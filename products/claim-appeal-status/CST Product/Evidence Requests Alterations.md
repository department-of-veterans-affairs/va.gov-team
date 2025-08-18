## BMT2 Evidence Request Changes

BMT2 spent a slice of its time working on various ways to alter Evidence Requests in various ways. These generally fell into a few categories:

1. Suppressing some requests so that they are not displayed to the user.
2. Reclassifying some requests so that they have different statuses.
3. Altering some requests' names or other attributes to be more human-readable.

I will discuss these in turn.

### General Note
For much of this work, the code itself lives in two places: The [Lighthouse Benefits Claims Service](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/service.rb) and the [Lighthouse Benefits Claims Constants](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/constants.rb). If you are looking to change any of this behavior, start there.

### Request Suppression
We are currently controlling which Requests are suppressed [in this constant here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/service.rb#L21).

Whether the request is suppressed depends on the environment and is controlled by two feature flippers -- `cst_suppress_evidence_requests_website` and `cst_suppress_evidence_requests_mobile`. As of this writing (August 14th, 2025) the Website flipper is enabled and the Mobile flipper is disabled on production.

These have self-explanatory behavior, but the actual suppression lives [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L212) for website, [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/mobile/app/services/mobile/v0/lighthouse_claims/proxy.rb#L81) for mobile, and [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/chatbot/claim_status_controller.rb#L86) for the chatbot.

These flippers **should** be consolidated, and the [PR to do so is here](https://github.com/department-of-veterans-affairs/vets-api/pull/20827).

The reason the environments are bifurcated like this is because, at the time of implementation, the mobile team did not have capacity to test. That should no longer be true. Work in coordination with them to enable the appropriate flippers, confirm everything works, and then streamline back to one single flipper that ensures all environments exhibit the same behavior.

### Request Reclassification
We also receive some Evidence Requests from Lighthouse and then re-classify them. Generally these are either requests that are marked as First-Party (i.e., the action is required of the Veteran) and we change them to Third-Party (the action is required of someone else); or vice-versa.

The code that manages this behavior [lives here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/service.rb#L48). For this use, there is one single feature flag -- `cst_override_pmr_pending_tracked_items`. Reading this now, the flipper is misnamed and should be made more general, as it does not reclassify only PMR Pending items.

The list of items we override [is held here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/service.rb#L300), which can easily be moved over to the Constants file.

### Human-Readable Attributes

This initiative is covered [in its own documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Evidence%20Request%20%22Friendly%20Language%22%20Initiative.md).

## Lessons

If I were tasked with doing this again, I would do two things differently:

1. I would push harder to have these changes made upstream of us in the actual services that track the items to begin with. From the beginning, this work was understood to be a stopgap measure, something we could do immediately while working towards the more-correct goal of having BEP et. al change the data on their end. It has been about nine months and that has not happened. I was not privy to these conversations but I should have pushed harder for them.
2. Given that this work eventually included frontend changes alongside, it strikes me that it did not need a backend component. Or, put another way, I'd have worked more on keeping all changes within either the front- or back-end of the website/api dichotomy.
