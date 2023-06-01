# Measuring Claims in the VA Mobile App: Recommendations
Office of the CTO - Digital Experience (OCTO-DE), VA Mobile App

Date: 05/24/2023

[Greta Optz](mailto:greta.opzt@adhocteam), [Holly Collier](mailto:holly.collier@adhocteam.us), [Liz Straghalis](mailto:liz.straghalis@adhocteam.us), [Stacy Blackwood](mailto:stacy.blackwood@adhocteam.us)

## Executive Summary

This work supports [Claims Metrics / PACT Act #4078](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4078). The passing of the [PACT act](https://www.va.gov/resources/the-pact-act-and-your-va-benefits/) in 2022 has increased enrollments in VA health care and benefits. As of April 2023, Veterans and survivors have [filed more than 500,000 toxic exposure-related benefits claims](https://news.va.gov/press-room/veterans-and-survivors-have-filed-more-than-500000-toxic-exposure-related-benefits-claims-under-the-pact-act/), and we expect that to continue.

In preparation for the anticipated increase in traffic in the mobile app, we want to make data-informed improvements to Claims. To do that, we need to refine success metrics (beyond event counts and API calls) and set baselines prior to making changes so we can track the impact of intended improvements.  

The recommendations below are informed by a synthesis of existing [qualitative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/claims/research%20review%20-%20claims%20status%20tool.md) and [quantitative](https://lookerstudio.google.com/u/0/reporting/dea3ede1-2d2e-4401-abd7-a44beada8a35/page/p_2j3o3kvy4c) data.


### **Priority 1:** Improve app event tracking of Veteran claim-monitoring behaviors, surface improved success metrics, and evaluate future design improvements based on these metrics.

**Level of effort:** Low

##### Steps:
1. Add additional event tracking to calculate monthly averages for:
    1. How many times a Veteran views a claim when no change in step has occurred
    2. How many claims Veterans view that have had a change in step
    3. Total amount of time a Veteran viewed the details of an active claim
    4. Total amount of time that passes between a change in step and a Veteran viewing that change 
2. Once tracking is in place and at least 30 days of data is available, analyze results against our hypothesis (see detailed summary for more information).
3. Use improved metrics to recommend:   
    1. Any immediate design change bets we can make and test.  
    2. If necessary, qualitative research to clarify any other design change bets where the metrics and existing research do not provide sufficient information on.


### **Priority 2:** Understand app-specific value in empowering and personalizing Veterans’ claim monitoring experience.

**Level of effort:** High

##### Steps:
1. Add additional event tracking around call center phone number interactions in Claims feature.
2. Seek additional contextual data around the calls currently received regarding Claims that include the app. 
3. Plan and perform user research regarding what types of empowerment and personalization the app could provide in Claims. 
4. Make recommendation(s) for feature improvements based on research.


---


## Full Recommendation


### **Priority 1:** Improve app event tracking of Veteran claim-monitoring behaviors to inform qualitative research and to evaluate future design improvements.

#### **Why are we making this recommendation?**

Prior **qualitative research** suggests that the biggest value Veterans find in the app having Claims information is **being able to monitor their claims and knowing when they need to take action** in order to keep the Claims process moving along.

* Veterans want to know **what’s going on** with their claim, **how long it will take**, what they **need to do**, and what **VA needs from them** so that they can keep the Claims process moving.
    * They **check the status of their claims frequently and through multiple channels** (including the mobile app) in the hope that they can **find better or more up-to-date information.**
    * They also check multiple sources for the most up to date Claims status information **because they don’t trust the accuracy of the claim status** they see on VA digital tools (in part because the various **sources of information at VA sometimes have different statuses** for the same claim).
* Veterans think about claim status in terms of **what’s currently being done to the claim,** the **outcome** of the claim, and the **items and actions** standing in the way of gaining a favorable determination. 
  * They want to **see actionable items and  blockers.**
  * Uploading a file to a claim was not cited as a top priority by any participants in co-design and was perceived as **somewhat useful** and most useful to send in a few files only, not a lot of files.

**Quantitative data** supports this (April 11-May 22) as well:
* Current use indicates the evidence upload function is not a key driver among the users where we could identify it being an option for them.
    * 34% of Claims authorized users viewed the specific details of at least one claim.
    * Only 3% of Claims authorized users viewed the specific details of a claim with an open evidence request (18.3K out of 155.2K).
        * **13% of those users started an API call to upload evidence**–but there are likely even more users with open evidence claims not attempting uploads that we can’t identify.
            * Gaps in our tracking mean that currently, we only know if a user had an open evidence request _if_ they interact with the details of that specific claim.
        * Less than 10% of users who started an upload API call received a fail at least once. **All users who attempted uploads succeeded at least once.**
* **Current app event tracking is insufficient to understand behavior on a per claim and by claim status basis.** Without improved tracking, we will not be able to better define which behaviors correlate to useful claims monitoring (as opposed to not monitoring at all or hyper-vigilant monitoring.)


#### **What do we recommend?**

As soon as possible, improve app tracking to enable the following metrics. All of these metrics would be looked at overall and sliced by claim stage.

1. **Unchanged claim <span style="text-decoration:underline;">views</span> per month:** How many times a Veteran views a claim when no change in step has occurred?
    * **Ideal**: As close to 1:1 as possible
        * Hypothesis: We believe that we are far away from this because the app does not sufficiently enable the Veteran to know when there has been a change.
    * **_Numerator_**: Total number of days each unique active claim was viewed while in the same step
    * **_Denominator_**: Total number of unique active claims viewed in month
2. **Changed <span style="text-decoration:underline;">claims</span> monitored per month:** How many claims Veterans view that have had a change in step?
    * **_Ideal:_** As close to 100% as possible.
        * Hypothesis: We believe that we have room to improve here with just 65% of current claims users interacting with Claims Details at least once.
    * **_Numerator_**: Total number of unique active claims with a step change viewed after that change
    * **_Denominator_**: Total number of active claims with a step change among users who navigated to the Claims feature
3. **Average <span style="text-decoration:underline;">time</span> per claim monitored:** How much time does a Veteran spend viewing the details of an active claim?
    * **_Ideal:_** Unknown, but would be used as a point of reference for any changes to determine if those changes are increasing or decreasing the ease of monitoring.
        * Hypothesis: We believe that we will be able to _decrease_ this measure over time as we decrease repeat page views and surface information in more user-friendly ways.
        * This metric would be viewed overall and sliced by which step the active claim was in at the time of viewing the Claim Details screen.
    * **_Numerator_**: Total time spent on Claims Details screen for active claims
    * **_Denominator_**: Total number of active claims with Claim Details viewed
4. **Average <span style="text-decoration:underline;">time</span> to monitor change:** How much time passes between a change in step and a Veteran viewing that change?
    * **_Ideal:_** Unknown, but would be used as a point of reference for any changes to determine if those changes are increasing or decreasing the ease of monitoring.
        * Hypothesis: We believe that we will be able to _decrease_ this measure over time as we make it easier for Veterans to know when a step change has happened.
        * This metric would be viewed overall and sliced by which step the active claim was in at the time of viewing the Claim Details screen.
    * **_Numerator_**: Days between when the step changed and the Claim Details page is viewed in app
    * **_Denominator_**: Total number of active claims with a step change among users who navigated to the Claims feature


### **Priority 2 (Longer-term):** Understand app-specific value in empowering and personalizing Veterans’ claim monitoring experience.

### **Why are we making this recommendation?**

Prior **qualitative data** suggests that **Veterans want help navigating the Claims process, and seek support** using channels that smartphones directly access.

* Veterans **trust** **and want to connect one-on-one** with individuals who **know the details of their specific case** to help them.
    * Veterans **call VA or VSO staff** or visit in person when they have **questions, need help,** or to **get the details they want**.
    * Veterans use **social media and online communities** to keep in touch with others going through the process, to learn about shortcuts or alternative ways of getting things done, and to receive updates.
    * In the original mobile app discovery research, participants said **Claims support chat in an app** would be useful because it would **save time** from having to track information down from VA via phone and bring more transparency to a frustrating process.


#### **What do we recommend?**

As soon as possible, **improve our app tracking to measure the level of engagement with the call center number** provided in the app currently. We would use the improved tracking to make the following metrics:



1. **Average number of calls made from Claims using the VA benefits hotline number link:**
    * **_Ideal_:** Unknown. We would need more contextual research to ascertain the pros/cons of utilization of this function for both Veterans and VA call centers.
        * Hypothesis: We believe that this is the main feature empowering the Veteran in their efforts to monitor their claim beyond what the app provides.
    * **_Numerator:_** Number of unique claims with calls made from the Claim Details page
    * **_Denominator:_** Number of unique claims with Claim Details page viewed


#### **Next steps would include:**

* Seek additional contextual data around the calls currently received regarding Claims that include the app. 
* (Potentially) Plan and perform user research regarding what types of empowerment and personalization the app could provide in Claims. 
    * (Potentially) Make recommendation(s) for feature improvements based on research.
