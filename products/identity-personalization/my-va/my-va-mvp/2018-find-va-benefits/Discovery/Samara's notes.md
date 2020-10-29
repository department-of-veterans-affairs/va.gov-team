# Initial MVP thoughts

## Functionality

### MVP

At it's most basic, I think an MVP is a block/notification that recommends *one* benefit.

* Explains *what* the veteran might be eligible for.
* Explains *why* they are eligible for it (eg. "we see you are a veteran with X discharge").
* Has expiration information (if applicable).
* Links to more information on the benefit or eligibility.
* Links to an application.
* Has an option to hide/remove the recommendation.

### V2

The next improvements (V2) would be:

* An option to receive a reminder about this recommendation later.
  * Further improvement: choosing *when* you want to receive that reminder.
* Having a widget on the corresponding eligibility page (eg. the disability eligibility page) that shows the criteria the user meets.
* Email notifification that you may be eligle(?).

### V3

The next improvements (V3) would be:

* Multiple benefits.
* A dedicated section for benefit recommendations.
* **A plan for how to keep benefits and eligibility criteria up-to-date over time**.
* Email notifification that there are more benefits for which you may be eligle(?).

## Which benefit for MVP?

Based partially on technical discovery ([#11462](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11462#issuecomment-405635425)) and on the [logic outlined by ExploreVA](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials/LogicForAllBenefits.docx).

Finalists for the MVP use case were **disability benefits, education benefits, healthcare, or life insurance**. Given what we learned from the [2010 survey](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11049#issuecomment-403920950), all of these benefits could use greater amplification given that a significant percentage of veterans aren't aware of at least one of them.  

Given all of that, I think we should go with one of the three following cases:

### Disability

- [x] We know 2/3 criteria to determine eligibility:
  - Person is a veteran
  - Discharge status
- [x] To account for only knowing 2/3  criteria, we can pose eligibility as a question: "Were you injured during your time in the service?" This allows us to account for the final criteria we need without having to ask for/store any information.
- [x] Provides us an opportunity to ask "has your disability gotten worse?" and to offer info on upgrading compensation. This is especially compelling once claim for increase launches. It also allows us to speak to multiple audiences without creating more work programatically.

### Healthcare

- [x] For the following healthcare use case, we **can detect all qualifying criteria on the backend**:
  - Veteran served in the U.S. military or I am a Veteran **and**
  - Veteran received one of the following types of discharge: Honorable; General; Under honorable conditions; Other than honorable (OTH) **and**
  - Veteran entered active duty after Sept. 7, 1980 **and**
  - Veteran served 24 continuous months or the full period for which they were called to active duty.
- [x] For the rest of the healthcare use cases, we know 2/3 or 3/4 criteria to determine eligibility.

Design wise, this could be slightly more complicated since there are more permutations for eligibility.

### Life Insurance

- [x] We know 2/3 criteria to determine eligibility:
  - Person is a veteran
  - The date range since a veteran retired or separated
- [x] To account for only knowing 2/3  criteria, we can pose eligibility as a question: "Did you have SGLI when you left the military?" This allows us to account for the final criteria we need without having to ask for/store any information.

**Why not education?**

We're actually in just about as great shape for education benefits as we are for the use cases outlined above. However, education benefits apply for more user groups (service members, reserves, guardsmen, and Veterans), and there are more permutations for how benefit eligibility can be determined. I think this is just ever-so-slightly more complicated than the other use cases, so I pulled it out of the running.

That being said, if someone felt strongly about this, we could revisit this thinking.

## Users

### MVP:

* Veterans only.
* Must be signed in to Vets.gov.
* (LOA – need to look into whether information we know about veterans changes based on LOA)
* (Still need to figure out if there are metrics we have about most users regardless of user type)

### V2 or V3

* For logged out users, potentially have a prompt that says "log in to see what you might be eligible for."

### V4 and beyond

* As we are able to support other user types on VA.gov (since this will be long after we've merged into the site), we will add functionality for service members, reservists, and dependents/spouses/families.

## Proposed KPIs

* X "Learn More" clicks in the first three months.
* X "Apply Now" clicks in the first three months.

## Next Steps

### MVP:

* Confirm MVP eligibility criteria with stakeholders.
* Define KPIs.


# 7/18/18

## MVP thoughts

### Use case

* I think the easiest cases to start with would be disability or life insurance. OR, we could try to cater to the one healthcare use case for which we have all the criteria, but that does miss out on the other healthcare use cases, which means we're not reaching as many people as we could.
  * Disability could be an especially valuable use case after claim for increase launches (do we know when that's happening?).
  
### Functionality

At it's most basic, I think an MVP:

* Is a block/notification on the dashboard. 
* Recommends *one* benefit.

This block:

* Explains what they might be eligible for.
* Explains *why* they are eligible for it (eg. we see you are a veteran with X discharge).
* Links to more information on the benefit or eligibility.
* Links to an application.
* Has an option to hide/remove the recommendation.

The next improvements (V2) would be:

* An option to receive a reminder about this recommendation later.
  * Further improvement: choosing *when* you want to receive that reminder.
* Having a widget on the eligibility page that shows the criteria the user meets.
* Email notifification that you may be eligle (?)

The next improvements (V3) would be:

* Multiple benefits.
* A dedicated section for benefit recommendations.
* A plan for how to keep benefits and eligibility criteria up-to-date over time.
* Email notifification that there are more benefits for which you may be eligle (?)

### Users

For MVP:

* Veterans only.
* Must be signed in to Vets.gov.
* (LOA – need to look into whether information we know about veterans changes based on LOA)

V2 or V3

* For logged out users, potentially have a prompt that says "log in to see what you might be eligible for."

## Potential MVP use cases

**Disability**

* Techwise, could be an easy use case to start with since we know that someone is a veteran and their discharge status. Can ask "Were you injured during duty?" without having to store that information.
* Could be a good way to reach out to people who aren't aware of this benefit, or people who assume that their disability is not severe enough.
* Options: Learn More, Apply, I'm not interested.
* Could also have some sort of "has your disability gotten worse?" and info on upgrading compensation.

**Education**

* Techwise, a little harder because there are more and/or statements you could write. Also a little harder design wise because there are more use cases we have to account for where we don't know information about someone and they depend on logic we do know (which means we'd potentially have to design multiple prompts). Still, I think this is doable should we want to go this route.
* Challenge: Depending on when they left the service, Post-GI bill benefits may have expired.
* Opportunity: Let people who discharged after 2013 (I think) know that their Post-9/11 GI Bill benefits do not expire.

**Healthcare**

* For the following use case, we have **all of the criteria on the backend**:
  * Person is a veteran
  * Discharge status
  * Entered active duty after 9/7/80
  * Served 24 continuous months of active duty
* And for the other 3 use cases, we have 3/4 criteria we need to determine likelihood of eligibility.
* This could be a great use case since a lot of people don't know VA healthcare is available.

**Life Insurance**

* Just as easy as disability — we could position it as "Did you have SGLI when you left the service?"
* Big win for people who don't know it's an option.
* Time sensitive, which narrows the audience to people that may be more likely to actually be interested.
  * How many people do we have on Vets.gov that discharged less than 1 year, 120 days ago? Do we know?
* Time sensitive, which means hopefully we could get to people who may otherwise find out about this too late.
* Small hesitation: though this seems like the primary life insurance, it might be nice to have wait to put this on the site until we can offer comparison to other more specific life insurances.

<h2>6/24/18</h2>

**Questions we needed to answer through internal research review**

- How do Veterans currently find out about benefits?
  * From [internal research synthesis](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Internal%20research%20synthesis.md):
    * Learn about benefits primarily by word of mouth, via VSOs or other Veterans.
  * Also from internal research, veterans want:
    * A clearer picture of what's available and relevant to them personally through VA
    * More support from the VA when transitioning from service
    * The VA to meet them where they are, not the other way around
    * To feel confident working with VA
    * Reassurance they're doing everything right and are on the right track
    * A personal touch that feels catered to their unique situation
    * Want to find and manage everything in one place
    * Want help finding NEW opportunities (e.g., jobs)
  * Both the 526 disabiity research and the [disability claim research](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Disability/Disability%20526EZ/discovery/2017-discovery-sprint/output/journey-map/Veteran%20Journey%20-%20Disability%20Claim%20-%2011x17%20-%20Anonymous%209.4.17.pdf) heard from veterans that they depend on other veterans, either friends or on the internet, for information. The information that they get through the VA isn't helpful or easy to understand, it doesn't seem useful to their specific situation and it doesn't guide them through the process. 
- Which benefits do Veterans often not know about or not take advantage of, and why?
  * From the [2010 National Survey of Veterans](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Findings%20from%20VA%20Statistics%20Reports.md):
    * Many more Veterans are unaware of life insurance than any other benefit
- What barriers exist to **discovering** benefits?
  * From [internal research synthesis](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Internal%20research%20synthesis.md):
    * Don't absorb much information from TAP when transitioning from the military.
    * Don't feel like they have much support transitioning from service, don't know where to start, and feel intimidated applying for benefits alone.
    * Assume they already have all the benefits they're eligible for and that there's nothing else for them.
    * Assume benefits are for people other than them — if they're young, VA is for older Veterans. If they're older, VA is for those just getting out of service. If they're healthy, VA is for those with service-connected disabilities.
    * Don't know where to start when it comes to VA, information is overwhelming and difficult to understand, hard to know what's relevant to them.
- What barriers and sensitivities exist to **applying** for benefits?
  * The [2010 National Survey of Veterans](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Findings%20from%20VA%20Statistics%20Reports.md) revealed that the top five reasons people do not apply for benefits are because they:
    * Are not aware of the benefit
    * Don't need the benefit
    * Never thought about it / never considered applying
    * Don't know how to apply
    * Don't think I'm entitled/eligible
  * Also in the 2010 survey:
    * Disability benefits and VR&E: "don't need the benefit" is closely tied to "don't think I'm entitled", "don't think disability is severe enough", and "dont need or want assistance from VA"
    * Health care & burial benefits are the most common where Veterans are likely to get the service somewhere else
    * Core reasons against applying for home loans and burial benefits were due to inconvenience of the home loan program and distance of VA cemeteries, respectively.
    * Expiration of education benefits and lapse of life insurance benefits are common
  * From [internal research synthesis](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Internal%20research%20synthesis.md). Veterans:
    * Feel they need one-on-one assistance to get what they need from the VA
    * Worry whether they’re doing things the exact "right way” in the VA’s eyes
    * Worry they’re wasting their time on benefits they can’t get
    * Worry they may be missing out on certain opportunities
    * Feel there's a learning curve, that they need to build up experience dealing with VA
    * Are unaware of important information that doesn’t surface until there is a REAL, BIG problem or until it’s too late.
    * Don’t know why they can’t receive certain benefits (want more insight into why)
  * Both the 526 disabiity research and the [disability claim research](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Disability/Disability%20526EZ/discovery/2017-discovery-sprint/output/journey-map/Veteran%20Journey%20-%20Disability%20Claim%20-%2011x17%20-%20Anonymous%209.4.17.pdf) found that veterans don't know what they are eligible for, and it's hard to tell from the information out there. The 526 research also found that veterans didn't know all the stuff they could claim, they didn't know all of the associated things they could claim, and/or they didn't understand the process of applying for claims.
- Which benefits suffer most from a low discovery-to-need ratio?
- What does the "full scope" of benefits and services include?
  * [This 80-page document](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials/LogicForAllBenefits.docx) lists all of the benefits and their eligibility criteria. 
    * We should work with stakeholders throughout the VA to make sure these are up to date and accurate. 
- What are good UX models for personalized recommendations?
- Which benefits and services will benefit the most from targeted recommendations?

<h2>6/13/18</h2>

**2015 Explore VA analytics**

* The ExploreVA home page received the largest volume of pageviews (627,101). 
* Benefit subpages receiving the largest volume of pageviews included **Disability Compensation (187,721)**, **Education and Training (170,274)**, and **Health Care (163,014)**. 
* There were 386,216 total applies from the ExploreVA website, with **Education and Training** receiving the most applies (69,295) followed by **Disability Compensation** (49,177). 
* Visitors accessing the website directly resulted in the most applies (52,882), followed by referrals from VA.gov (44,746) and Paid Keyword Search (37,266).  
* The ExploreVA home page resulted in the most applies (170,599) compared to all other landing pages. 
*	There were 50,178 starts and 30,564 completions of the Benefit Navigator tool.

**Other ExploreVA matierals**

* [This spreadsheet](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials/ExploreVA-QuestionAndAnswerCodes.xlsx) shows their navigator has just under 200 questions. 
* How questions connect is kind of covered in [this decision tree](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials/ExploreVA-DecisionTree.pdf).
* [This doc](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials/LogicForAllBenefits.docx) shows each benefit type and which of the questions comprise its decision tree.

**Done**

- [x] Reviewed everything in the [ExploreVA materials](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA%20Materials) folder.
- [x] Reviewed everything in the [ExploreVA materials-analysis](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Recommendations/Discovery/ExploreVA-Materials-Analysis) folder.


<h2>6/12/18</h2>

**Thoughts**

* Read through all materials and then figure out which of the discovery questions outlined in the epic we've answered, if any. From there, figure out what we need to answer questions.
* The [2010 survey](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Findings%20from%20VA%20Statistics%20Reports.md) has some interesting stats that give insight into what people do/don't know about and why they don't apply:
  * Life Insurance was the top benefit people were unaware of.
  * People assume they are ineligible for disability and burial.
* Key finding from internal research – "Veterans either didn't know they were eligible for disability claims, they didn't know all the stuff they could claim, they didn't know all of the associated things they could claim, and/or they didn't understand the process of applying for claims."

**User Questions**

* When do people go looking for benefits?

**Technical Questions**

* Can we leverage the ExploreVA backend? Do we want to?
* How often do benefit eligibility requirements change? What is the best way to track and update this?
* What is the best strategy — do we want to create a library of all the existing eligibility requirements, or build this library little by little?
* Do we need to do any additional sense-making/organization of this [80 page doc](https://github.com/department-of-veterans-affairs/vets.gov-team/files/1890876/LogicForAllBenefits.docx) before we start working on the backend, or can we do that little by little? And what is most helpful to make sense of this for the backend?
* Do we know who manages the different benefit eligibiity requirements? What is the best way to get these people to keep some sort of library updated with the latest requirements?

**Other Questions**

* How can we leverage ExploreVA's videos and other assets as we move towards the merger?

We need to
* Define our audience
* Figure out what we can leverage of ExploreVA's backend, if anything

**Done**

- [x] Reviewed everything in the [main folder](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Recommendations/Discovery)
  * [Discovery epic](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/9590)
  * [Analytics findings summary](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Analytics%20findings.md)
  * [ExploreVA overview](https://github.com/department-of-veteteamrans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Explore%20VA%20background%20info.md)
  * [2010 national survey of Veterans](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Findings%20from%20VA%20Statistics%20Reports.md)
  * [Internal research synthesis](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Internal%20research%20synthesis.md)
