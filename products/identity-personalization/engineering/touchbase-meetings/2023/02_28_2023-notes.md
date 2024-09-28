# Weekly meeting notes around engineering on the Authenticated Experience team

## 2/28/2023

- PR for review: https://github.com/department-of-veterans-affairs/vets-website/pull/23475
- Datadog Read Only access
	- Hopefully getting email soon.
	 - [ ] Derrick
	 - [ ] Allison
	 - [ ] Tom
	 - [ ] Adam
- Feature toggle maintenance ideas
	- With the addition of the toggler component, things should be easier to maintain on the FE, but adding and removing feature toggles for minor feature work could probably be optimized.
	- 'code only' toggles - circumvent feature toggle data check and instead use environments to gate features. 
		- would only affect FE code and not require review from platform to approve PRs around it.
		- Less functionality overall, but viable for low lift features
	- a more universal toggle `experimentalFeatures`  that is used for guarding some pending work, and can be toggled on 'only' through vertain emails on prod.
		- Reuse the feature toggle name, and be able to not cycle through toggles as much.
		- Possibly pair with env check to do compound guarding as a somewhat 'hybrid' approach.
		- could then be used in toggler tests as a constant toggle that will always be present in some way.
- Async requests on the FE
  - Thoughts on Redux patterns in current codebase?
  - Action creators, actions, state for request lifecycle (VAP_SERVICE_TRANSACTION_REQUESTED, VAP_SERVICE_TRANSACTION_REQUEST_SUCCEEDED, VAP_SERVICE_TRANSACTION_REQUEST_FAILED, etc)
  - https://tanstack.com/query/latest
  - https://swr.vercel.app
  - Other ways to streamline data fetching and state management?
  - VAProfile transaction request pain, and could this be made a single async call

- Tom has created an epic around API improvements that we can add to
https://github.com/department-of-veterans-affairs/va.gov-team/issues/54241 	
      
