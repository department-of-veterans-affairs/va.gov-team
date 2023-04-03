# Research on Common Services API Level of Effort

##### TL:DR: I don't think there's any work we have to do on Common Services API

### Background:
Janet asked us to investigate if we need to work on Common Services API as part of the EVSS to Lighthouse migration: https://dsva.slack.com/archives/C02CQP3RFFX/p1676574262007819

---

Common Services API apparently referes to a service or collection of APIs within EVSS. I hear different names for these things from different people, so I'm not sure if everyone is on the same page as to which endpoitns are included in this service/catogorization.

Either way, there is one class/service in `vets-api` called `EVSS::CommonService` that seems to hold Common Services API endpoints within it. `EVSS:CommonService` includes the 2 of the 3 URLs (as hardcoded strings) that Janet calls out in her message: "/getCurrentInfo" and "/findRatingInfoPID". The third url referenced in Janet's message is "/ratedDisabilities".

**get_current_info**: 
- EVSS::CommonService uses the "/getCurrentInfo" URL in the [get_current_info](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/common_service.rb#L16) method.
	- The URL is separately used in a similar class/method with the same/similar name under the [VSO Search](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/vso_search/service.rb#L23) namespace. But I don't think that changes anything for 526. Just noting it here for comprehensiveness.
- **I do not see this method/url used in 526ez**
- I see the `get_current_info` method used only for [Power of Attorney](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/user.rb#L412) and/or STEM Scholarship stuff which Matt said he'd shift to another team.
**- Conclusion: I don't think we have to do anything with this**

**get_rating_info**:
- EVSS::CommonService uses the "/findRatingInfoPID" URL in the [get_rating_info](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/common_service.rb#L20) method.
- I see `get_rating_info` used only in one place that could be 526 related. It's called by a [method](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/disability_compensation_forms_controller.rb#L67) within the `DisabilityCompensationFormsController`. However, I don't see that controller method used anywhere. It seems this functionality was removed from 526 but the controller method was not cleaned up/removed in that process.
- I see `get_rating_info` used in other parts of the codebase (e.g.: `HealthCareApplication` and `Mobile::V0::DisabilityRating::Proxy`), but those seem outside of our realm of influence and responsibility.
- **Conclusion: I don't think we have to do anything with this**

**/ratedDisabilities**
- This is Seth and Aurora's work, right?
- I can't find a single clearly defined use of the endpoint that Janet identified here - not sure if it's because of a typo, a difference of camelcase/snakecase syntax, the URL has already been removed, or what.
- The codebase uses the terms "rated disability" and "disability rating" all over the place at least 100 times and I'm not certain what either one of these terms means. So there's a chance that I'm missing something because I failed to comprehensively account for all the different combinations of these words, their related endpoints, and their differing functions within the codebase. But, since Seth and Aurora are all over this work from the "rated_disabilities" perspective, I would want them to weigh in on whether it's wise to invest more resources in exploring these terms.
- I wonder if Seth and Aurora's "rated_disabilities" is part of Common Services API and we just never called it that before. Or Janet's including it in Common Services API not realizing that we already started working on it. Either way, it means we wouldn't have to do anything.
- **Conclusion: I don't think we have to do anything with this (other than what Seth and Aurora are already doing)**

### Extra Credit:
I also looked around the code and VA's documentation base more for "common services" in general and didn't see a sign of anything we'd need to do there. I want to acknowledge there could still be something I don't know about this part of EVSS, so if other people see a lead or reason to be suspicious, let me know. But otherwise I think we can close this chapter.
