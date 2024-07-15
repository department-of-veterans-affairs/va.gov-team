# Problem Brief: Ask for your Claim Decision

## Problem Space Summary
### Problem Statement
*Expressed as a pain point*: As a veteran, I am confused about what the 'Ask VA to Decide My Claim' Feature actually does and how it supports my goal to receive a favorable claims decision in a timely manner; furthermore,I may falsely assume taking this action positively affects the claim decision process in ways it does not.

*Expressed as inquiry*: How might we create an experience that presents the option to “ask the VA to decide my claim” when it is beneficial for the veteran to take that action and avoid confusing them or causing unintended, detrimental consequences, such as receiving a less favorable decision or having their decision delayed?

### Evidence
Veterans on the VA Benefits subreddit have put together a [Wiki](https://www.reddit.com/r/VeteransBenefits/wiki/button/) in an attempt to build a shared understanding of what the “Ask for Your Claim Decision” Button actually does and does not do. In addition, there are numerous threads containing confused discussions related to this feature. It is clear from these conversations that many veterans do not feel that VA.gov adequately makes clear the relevant use cases for this feature.

### Opportunities

Update content to make clear the value proposition to the veteran and when it is/isn’t beneficial to click the button that submits the waiver, so that veterans who could benefit from submitting the waiver submit it.
Update content to make clear what the button DOESN’T do, so that veterans don’t expect submitting the waiver to overcome obstacles the waiver doesn’t actually help them overcome.
Don’t provide the option to submit the waiver when there is no benefit to the veteran to do so; narrow the feature presentation to only those veterans it applies to.

### Open Questions
 If a veteran submits a 5103 waiver, are they unable to submit evidence after that point? Some veterans might delay exercising the option to submit the 5103 because they are concerned that they may not be able to submit any additional evidence if they needed to.
 If a veteran submits a 5103 waiver, does this prevent the VA from obtaining additional evidence? This is a common query that seems to come up.

## How it currently works
### Steps to Reproduce
Login Required: true
- Navigate to: **/track-claims/your-claims**
- Select a claim from the list and click the View Details link
  - Claim MUST be in phase 3 (claim phase)
  - Claims must have attribute waiverSubmitted set to false
- This will navigate you to: **/track-claims/your-claims/{claimId}/status**
  - {claimId} is the id of the claim

![On the claim details page, select the Files tab](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/claim.png)

On the claim details page, select the Files tab

![Select files tab](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/claim%20received.png)

This will navigate you to: ***/track-claims/your-claims/{claimId}/files***
Above the **Documents filed** section, there should be a blue box, like the one below

![Ask for your claim decision](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/submit%20files.png)

Click the ‘View Details’ button

![Click view details button](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/ask%20for%20claim%20decision.png)

This will navigate you to: **/track-claims/your-claims/{claimId}/ask-va-to-decide**

![Ask for your claim decision](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/ask%20for%20claim%20decision.png)

Clicking the **‘Not yet - I still have more evidence to submit'** button will navigate you back to: **/track-claims/your-claims/{claimId}/status**
Checking the checkbox and clicking the ‘Submit' button will make a call to: **v0/evss_claims/phase3/request_decision (vets-api endpoint)**

## Show Conditions
- Claim attributes:
  - phase: 3
  - waiverSubmitted: false
Phase 3 refers to the status we get from EVSS (Lighthouse someday soon). These are the statuses:
1. 'CLAIM RECEIVED’
2. ‘UNDER REVIEW’
3. ‘GATHERING OF EVIDENCE’
4. ‘REVIEW OF EVIDENCE’
5. ‘PREPARATION FOR DECISION’
6. ‘PENDING DECISION APPROVAL’
7. ‘PREPARATION FOR NOTIFICATION’
8. ‘COMPLETE’

On VA.gov, these statuses are mapped to the timeline (shown below):
![timeline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/timeline.png)

The mapping from EVSS/Lighthouse statues to the 5 phases shown in the timeline are as such:
1. ‘CLAIM RECEIVED’
2. ‘UNDER REVIEW’
3. ‘GATHERING OF EVIDENCE’, ‘REVIEW OF EVIDENCE’, ‘PREPARATION FOR DECISION’, ‘PENDING DECISION APPROVAL’
4. ‘PREPARATION FOR NOTIFICATION’
5. ‘COMPLETE’

Phases 3, 4, 5, and 6 from EVSS/Lighthouse get consolidated to the phase 3 that is displayed on the timeline on VA.gov. The claim MUST be in ‘GATHERING OF EVIDENCE’ for the waiver page to be accessible; if it is in any of the other states, it will not be accessible.

### Vets API call stack
- Route:[config/routes.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/4481ee70/config/routes.rb#L127)
- Controller:[app/controllers/v0/evss_claims_controller.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/4481ee70/app/controllers/v0/evss_claims_controller.rb#L29-L39)
- Service: [app/services/evss_claim_service.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/4481ee70/app/services/evss_claim_service.rb#L41-L43)
- Worker: [app/workers/evss/request_decision.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/4481ee70/app/workers/evss/request_decision.rb#L3-L10)
- Library Service:[lib/evss/claims_service.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/4481ee70/lib/evss/claims_service.rb#L36-L41)
