TL:DR: I don't think there's any work we have to do on Common Services API

Background: Janet asked us to investigate if we need to work on Common Services API as part of the EVSS to Lighthouse migration: https://dsva.slack.com/archives/C02CQP3RFFX/p1676574262007819

My findings:
Common Services API apparently referes to a service or collection of APIs within EVSS. I hear different names for these things from different people, so I'm not sure if everyone is on the same page as to which endpoitns are included in this service/catogorization.

Either way, there is one class/service called **EVSS::CommonService** that seems to hold Common Services API endpoints within it. `EVSS:CommonService` includes the 2 of the 3 URLs (as hardcoded strings) that Janet calls out in her message: "/getCurrentInfo" and "/findRatingInfoPID". The third url is "/ratedDisabilities".

**get_current_info**: 
- EVSS::CommonService uses it in the [get_current_info](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/common_service.rb#L16) method.
	- The URL is separately used in a similar class/method with the same/similar name under the [VSO Search](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/vso_search/service.rb#L23) namespace. But I don't think that changes anything for 526. Just noting it here for completeness.
- **I do not see this method/url used in 526ez**
- I see the endpoint used only for [Power of Attorney](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/user.rb#L412) and/or STEM Scholarship stuff which Matt said he'd shift to another team.
- Conclusion: I don't think we have to do anything with this

**get_rating_info**:
- EVSS::CommonService uses the "/findRatingInfoPID" it in the [get_rating_info](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/common_service.rb#L20) method.
- **I do not see this method/url used in 526ez**
- I see this method used only in one place that is 526 related. It's called by a [method](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/disability_compensation_forms_controller.rb#L67) within the `DisabilityCompensationFormsController`. However, I don't see that method used anywhere.
- I see this `get_rating_info` used in other parts of the codebase (e.g.: `HealthCareApplication` and `Mobile::V0::DisabilityRating::Proxy`), but those seem safely outside of our realm of influence and responsibility.
- Conclusion: I don't think we have to do anything with this

**/ratedDisabilities**
- This is Seth and Aurora's work, right?
- I can't find a single clearly defined use of the endpoint that Janet identified here.
- The codebase uses the terms "rated disability" and "disability rating" all over the place at least 100 times and I don't totally understand what either one of these terms means. So there's a chance that I'm missing something because I failed to comprehensively account for all the different combinations of these words, their related endpoints, and their differing functions within the codebase. But, since Seth and Aurora are all over this work from the "rated_disabilities" perspective, I don't think we should spend much more time on this general area beyond supporting Seth and Aurora's work.
- Conclusion: I don't think we have to do anything with this (other than what Seth and Aurora are already doing)
 
