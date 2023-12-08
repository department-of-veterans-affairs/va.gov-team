# Research on Common Services API Level of Effort




### Background:
Janet asked us to investigate if we need to work on Common Services API as part of the EVSS to Lighthouse migration: https://dsva.slack.com/archives/C02CQP3RFFX/p1676574262007819

---

Common Services API apparently refers to a service or collection of APIs within EVSS. I hear different names for these things from different people, so I'm not sure if everyone is on the same page as to which endpoitns are included in this service/catogorization.

Either way, there is one class/service in `vets-api` called `EVSS::CommonService` that seems to hold Common Services API endpoints within it. `EVSS:CommonService` includes the 2 of the 3 URLs (as hardcoded strings) that Janet calls out in her message: "/getCurrentInfo" and "/findRatingInfoPID". The third url referenced in Janet's message is "/ratedDisabilities".


**get_current_info**: 
- EVSS::CommonService uses the "/getCurrentInfo" URL in the [get_current_info](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/common_service.rb#L16) method.
	- The URL is separately used in a similar class/method with the same/similar name under the [VSO Search](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/vso_search/service.rb#L23) namespace. But I don't think that changes anything for 526. Just noting it here for comprehensiveness.
- I see the `get_current_info` method used only for [Power of Attorney](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/user.rb#L412) and/or STEM Scholarship stuff which Matt said he'd shift to another team.


**get_rating_info**:
- EVSS::CommonService uses the "/findRatingInfoPID" URL in the [get_rating_info](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/common_service.rb#L20) method.
- I see `get_rating_info` used only in one place that could be 526 related. It's called by a [method](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/disability_compensation_forms_controller.rb#L67) within the `DisabilityCompensationFormsController`. This method is exposed via Rails routes. To do: See if `vets-website` is calling this endpoint.
- I see `get_rating_info` used in other parts of the codebase (e.g.: `HealthCareApplication` and `Mobile::V0::DisabilityRating::Proxy`), but those seem outside of our realm of influence and responsibility.
- Note "wss-common-services-web-11.6/rest/ratingInfoService/11.6/findRatingInfoPID = 31,680,780" suggests this URL is hit millions of times within 90 days. [Original Slack message](https://dsva.slack.com/archives/C02CQP3RFFX/p1678393631109879).
- The HealthCare Application code will be covered by a different team. Matt Self said the 1010 Team will take care of it.


**/ratedDisabilities**
- This is Seth and Aurora's work, right?
- I can't find a single clearly defined use of the endpoint that Janet identified here - not sure if it's because of a typo, a difference of camelcase/snakecase syntax, the URL has already been removed, or what.
- The codebase uses the terms "rated disability" and "disability rating" all over the place at least 100 times and I'm not certain what either one of these terms means in this context. So there's a chance that I'm missing something because I failed to comprehensively account for all the different combinations of these words, their related endpoints, and their differing functions within the codebase. But, since Seth and Aurora are all over this work from the "rated_disabilities" perspective, I would want them to weigh in on whether it's wise to invest more resources in exploring these terms.
- I wonder if Seth and Aurora's "rated_disabilities" is part of Common Services API and we just never called it that before. Or Janet's including it in Common Services API not realizing that we already started working on it. Either way, it means we wouldn't have to do anything.
- **Conclusion: I don't think we have to do anything with this (other than what Seth and Aurora are already doing)**


**EVSS::CommonService.breaker_service**
	- If we have to migrate any method in `EVSS::CommonService`, then we also need to migrate the Breaker. There's a pattern for this:
		- https://dsva.slack.com/archives/C04KW0B46N5/p1680708487487839
		- https://github.com/department-of-veterans-affairs/vets-api/pull/10728/files#diff-48fc1aa54962dc31879d48a1d801a91794846c4c3b535d22b8e822f8db27651aR27-R58

### Extra Credit:
I also looked around the code and VA's documentation base more for "common services" in general and didn't see a sign of anything we'd need to do there. I want to acknowledge there could still be something I don't know about this part of EVSS, so if other people see a lead or reason to be suspicious, let me know. But otherwise I think we can close this chapter.


# LOE Research Round 2 - `vets-website` review
**disability-benefits**
526ez form functionality appears to be contained within `src/applications/disability-benefits`. Nothing within that directory makes any reference to "rating_info", "ratingInfo", or any other deriviative of the `vets-api` route that would trigger `vets-api`'s Common Services API call.

**familiar URLS**
There are a handful of URLs that I know `vets-website` is sending to `vets-api`, so I surveyed those for a pattern of where/how these external APIs are established, but I didn't find much of a pattern.
- I found where the `submit_all_claims` ULR is [defined](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/config/form.js#L136) in the aforementioned `/disability-benefits/` directory which makes a lot of sense. 
- `intent_to_file` URL is also [defined](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/actions/index.js#L17) in the `/disability-benefits/` directory.
- I have some clues as to where `in_progress_forms` URL(s) are [defined](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/constants.js#L49) (or maybe [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/helpers.js#L5)) in a `/platform/` directory which I guess implies it is used by multiple apps/services across the repository. There are many forms using that functionality so I cannot be certain if I found the one or more used by 526ez. Based on this discovery, I also checked the `/platform/` directory for more references to "rating_info" (or "ratingInfo"), in case it's another URL that's used across different apps, but found none in there.

**hca**
Ther are many references to "rating_info" within hca directory. Many of them arise from tests and stuff, but seems like [this reference](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/hca/utils/actions.js#L35) in an actions.js file is where the Redux Action Types give a hint as to what HCA is using the endpoint for. 

**personalization**
I see references to "[ratingInfo](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/common/constants.js#L20)" and "[rating_info]()" in this `/personalization/common/` directory and in a [`Dashboard` component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/Dashboard.jsx) but I couldn't discern which app/product uses that code. The "common" name in the personalization stuff might suggest its a shared service/utility like the things in the `/platform/` directory. _But I do not see these constants or utilities imported into `/disability-benefits/`_.

There is a [mock file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/mocks/server.js#L52) which presents "GET /v0/disability_compensation_form/rating_info" as one of the mocked endpoints for testing affirming that this Dashboard may use rating_info, but not sure what product/app that is for.

**Manual Testing**
While this isn't dispositive by itself, it seems informative to me that I placed breakpoints in the [`rating_info` method](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/disability_compensation_forms_controller.rb#L67) where I presume execution would pause if we called that method and I stepped through the form front to back a few times. It never caught the breakpoint. I don't fully understand what `rating_info` would provide to the frontend and how to pinpoint where in the form that would be used, but this adds a little more confidence for me that 526ez is no longer using it. It probably used it at one point (latest commit on that method is 4 years ago), so someone built that method, but then 526 stopped using it and it was never removed.
