Using this doc to track insights documented in [issue #11049](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11049) so they don't get lost with time.

# Summary

7.9.18

Based on the rest of the notes in this doc, these are my top contenders for a potential MVP:

- **Disability compensation**: Veterans know about these, but often incorrectly assume they are ineligible, that their disability isn't severe enough, or that they'd be taking away this benefit from someone else by claiming it.  Challenges include: 
  - Convincing people that none of this is true and they should apply. 
  - I don't know if we have enough information on the backend to determine that someone might have an injury/illness sustained from serving (isn't that what the whole application process determines?). This may need to involve some self-reported information.
- **Education benefits**: Veterans don't know which of these to apply for. Also, some have time limits. An MVP would be picking on education benefit — likely post-9/11 GI bill — and recommending that to people. Challenges include:
  - Determining people want this. This is a bit of an artificial challenge — we can always allow people to remove the recommendation. BUT pretty much every veteran is eligible, so that means our metric for success here shouldn't necessarily be that a bunch of people apply immediately.
- **Life insurance benefits**: Veterans have a very limited time window to apply for this right after they leave the service, which means many people miss it or don't even know about it until after the window is over. Challenges include:
  - Reaching new veterans within the eligibility period. 
- **Healthcare**: High-Value benefit. According to the 2010 survey a significant amount of veterans don't know about the benefit or never thought about applying. Could be a good option since we can determine most of the eligibility criteria on the backend without asking users any questions. Challenges include:
  - Like education, not everyone will want this. Some people will have private insurance.
  
---------  

## Takeaways from creating a spreadsheet of all benefits

Posted 7.2.18

My first step for sense-making was to take the massive [80-page document](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials/LogicForAllBenefits.docx) we got from ExploreVA and to create a more digestible [spreadsheet of all benefits](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Benefits%20List_2018.xlsx). 
A few takeaways from this exercise:

* There are 43 benefits the VA offers. Some overlap with DoD. 
* These benefits may be for veterans, families, service members and reservists, or more than one of these groups.
  * Obviously, we don't have log-in capabilities for spouses/families/dependents right now, but we should remember that when we do, there are benefits recommendations that apply to this group, too.
  * Do we have any way to determine whether someone is a service member? Some of the benefits are only applicable to them.
* Benefits fall into 9 categories: Disability Compensation; Education & Training; Employment Services; Healthcare; Home Loans and Housing-Related Assistance; Life Insurance; Memorial benefits; Pension; and Spouses, Dependents, and Survivors.
  *  I'm not sure why there is a separate "spouses, dependents, and survivors" category, since families are eligible for benefits in the other categories, but this is how ExploreVA organized things. I'm not sure if this is a meaningful distinction or if we can consolidate those benefits into other categories.
* There are 14 benefits that have some sort of time restriction on them. They fall into different categories and apply to different audiences.
  * One that particularly stuck out — life insurance. I noted above that the 2010 survey found this was the benefit fewest people knew about. It's also one veterans must apply for within a certain time frame after leaving the service or they become ineligible.
  * A lot of these benefits seemed more obscure to me. The big ones — general healthcare and disability — aren't time limited.
  * Benefits for dependents occasionally depend on their age. I don't know that the VA tracks dependents' ages, so this may be a use case for us needing to ask for more information about someone before we can give them accurate eligibility information.
  * For service members, at least one of the time-limited benefits depends on their expected date of discharge. I'm not sure if this is tracked anywhere.

## Most popular benefits

7.5.18

Based on [analytics from Feb 2018](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/analytics-reports):

* On [VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/analytics-reports/02_2018_LandingPages.pdf), disability benefits are the most popular benefit landing page (~131K views for a compensation resources page, with abother ~76K for the main /compensation page) with education benefits coming in second (~130K views). Home loans were also a popular landing page (~66K views) with /health coming in after that (~46K views).
* For [next page after landing on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/analytics-reports/02_2018_TopTasks_Entrance.pdf), eBenefits comes in at about 2.2 million views and MyHealtheVet comes in at 1.6 million views. Given that eBenefits covers more benefits than disability, it's hard to say what percentage of these people want to manage disabiilty claims. Mostly, I'm  mentioning this to show that healthcare is (perhaps obviously) still very popular despite healthcare not being as popular of a landing page on VA.gov.
* For "next page after landing", disability benefits are the most accessed on [eBenefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/analytics-reports/02_2018_TopTasks_EBN.pdf) (~78K for claim status, ~43K for disability compensation) and [ExploreVA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/analytics-reports/02_2018_TopTasks_Explore.pdf) (~6K views).
* On [Vets.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/analytics-reports/02_2018_TopTasks_Vetsgov.pdf), education pages were more popular than disability pages (~19K views > ~11K views) for "next page after landing", but this may be because you can't actually apply for disability on Vets.gov and external resources are likely not as readily pointing to our site as a result. Healthcare falls below both of these, with about ~7K views.

Some other thoughts on this, in no particular order:

* I think disability or education could be strong MVP use cases, with the former being the more obvious choice.
* For disability benefits, the issue is not that people don't know that disability benefits exist at the VA but that people assume they are ineligible (incorrectly), that their disability isn't severe enough, or that claiming this benefit will take away benefits from someone else who needs it more than they do. Should we pursue elevating disability benefit recommendations, we should target answering some of these questions so veterans feel they can trust our recommendations and feel confident in applying.
* For education benefits, the [2010 veteran survey](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Findings%20from%20VA%20Statistics%20Reports.md) shows that knowledge of the benefit/never considering applying is more of an issue than people not thinking they are eligible. I don't think we'd need to do as much convincing that they are eligible for education benefits as we would for disability benefits, which may make this an easier use case to start with.
* There are a few education benefits that have some sort of time limitation. However, we'd likely start with the Post-911 GI Bill, which has no time limit on it for people who left the service after Jan 1, 2013 (15 year time limit for those who left before).
* Like education, people not applying for Healthcare seems to be more an issue of lack of knowledge or need for the benefit.

## Takeaways from call with Bronwyn

7.5.18

* She's not sure of when the [80-page document](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials/LogicForAllBenefits.docx) I used to make the [spreadsheet of all benefits](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Benefits%20List_2018.xlsx) was created, so I need to follow up with her to confirm. She thinks it was 2014 but will let me know. If this is the case, we should make sure we figure out how to get the latest information.
* When I asked her about how she keeps benefit and eligibility information up to date, it sounds like a lot of this is happening by word of mouth right now. Bronwyn is on lots of calls with VHA, VBA, and others and has relationships with tons of people, so she's been able to keep tabs on what needs updating that way.
  * Obviously, this isn't going to work for our team since we don't have these relationships and we can't rely on one person to be here forever to manage all of this. I'm not sure how we're going to do this, but we need a better way to track benefits and eligibility data that other stakeholders in the VA will willingly keep up to date. I think this is one of our bigger challenges going forward.
* From her experience, it sounds like people not knowing certain benefits exist, or not knowing the difference between benefits, are the biggest barriers initially:
  * One especially interesting anecdote was about life insurance — because the eligibility window is so small and happens to overlap with the period when veterans have just left the service (and have a bunch of other things on their minds), many people don't even realize this was an option for them until it's too late.
  * She told a story about how some veterans she'd heard about were applying to other education benefits over the Post-9/11 GI Bill benefits even though the latter are much more comprehensive.
* She said they have a lot of success with email click-through rates for emails that are educating veterans about benefits and eligibility. She said their click through rate could be anywhere from 30 – 50% depending on the audience and benefit.
