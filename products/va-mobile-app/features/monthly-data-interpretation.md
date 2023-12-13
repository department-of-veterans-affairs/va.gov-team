
# Quant-qual monthly interpretation


## An MVP framework & example


# Purpose

The purpose of the quant-qual monthly interpretation process is **informing the Mobile team’s feature prioritization with data** so that the team focuses on what most directly and significantly impacts the Veteran experience, avoids prioritizing proven outliers, and knows when gathering more information is necessary. This interpretation alone will not dictate the team’s work, but will surface data which should influence prioritization alongside other considerations. 


## Goal outcomes

The Mobile team wants to make data-informed decisions about the substance and prioritization of its work, but no single data source can comprehensively capture Veteran experience. The goals of monthly collaborative data interpretation, across quantitative and qualitative sources, is to:

1. Validate findings in one data set with other data in order to provide a more robust picture.
2. Inform and scope follow-up actions based on validated findings.
3. Surface factors for prioritization of the team’s overall work and, in particular, follow up actions from validated findings.
4. Maintain a comprehensive perspective on the health of the app across the new sub-teams, including identifying opportunities for cross-team comparisons.


## Background

App analytics does not capture the full scope of human behavior or experience in using this product. However, it does provide a comprehensive view across all users for the things it can track. App store reviews and other qualitative reporting sources, like Reddit, allow us to learn about Veterans’ experience with the app directly from them. However, these reports lack essential metadata points for being able to understand them. Additionally, even when there is a strong theme in app store reviews, that doesn’t necessarily reflect how prevalent the experience is across all users.

Sometimes, there are low-hanging fruit explanations to be found by looking at the alternative data source. A collaborative review across data sources is one way to bridge the gap. Over time we want to build in more sources of qualitative data to help us group and size experiences.

The team is also moving to a new structure where there will be fewer people taking a wide-angle view of the app on a regular basis as teams become more specialized. This creates a need to find methods that ensure cross-team opportunities are still identified and surfaced.


# MVP framework



1. Complete the app store reviews monthly analysis, including identifying outliers from the last month and trending/persisting topics.
2. Complete the monthly analytics review, including identifying outliers in the last month compared to the quarter and year.
3. Together, review the last month. Identify:
    1. Explanations for the outliers in app analytics. Note if no explanation can be determined without additional resources.
    2. Indicators of the size of issues reported qualitatively through app store reviews. Note if the issues cannot be measured in analytics directly or by proxy and track over time.
    3. Identify potential improvements in measurements currently used.
4. Surface factors for prioritization exercises. 
    4. Veteran experience impact: How much evidence do we have about the outlier causing a negative user experience for Veterans?
    5. Scope of Veterans affected: How many users are affected?


## Expansion on the MVP

This will be an iterative process that evolves with repetition. While the most robust data picture possible of the Veterans experience and success with this app is a ways off, we can start with what we have to make a more complete picture than when considering either data source alone. Some expected additions/improvements to this framework include:



* Determining how Product is involved in the monthly review.
* Determining how the outputs of this process are shared with the wider team.
* Determining how to align this process with team planning ceremonies so that the findings can be used in a timely fashion.
* Adding in additional qualitative sources, such as a review of Reddit and recent research findings (both from the Mobile team but also other teams)
* Adding in additional quantitative sources, such as comparisons to web analytics


# Example: October 2023

Greta (Data) and Liz (Research) did our existing monthly tasks for updating and reviewing app analytics and app store reviews, respectively. For app analytics, Greta reviewed the monthly dashboard looking for outliers in October vs. the past year and what the overall trends are in authentication, feature views, events, etc. These were also split by Android vs. iOS users to see if any OS-specific trends or outliers were occurring. Meanwhile, Liz performed the monthly app store analysis and identified key topics from the last month as well as longer-term trends.

Then, we came together and discussed what we had found and how the other area could potentially explain or enrich our understanding of what’s happening for Veterans with the app. Below are some examples of the findings we uncovered, how those findings were improved by this joint review. We also describe the implied next actions based on these data sources and considerations for prioritizing those actions–both in terms of Veteran experience impact and number of Veterans affected.


## Example #1: Understanding a utilization anomaly 


Claims remains the most utilized feature by total unique viewers in the month as well as average daily viewers. Appointments is second in total unique viewers in the month, but Disability rating is the second for average daily viewers. In discussion, we found that there was no theme identified in app store reviews for the month or over time that would explain this. There is, however, more that could be explored with analytics: How many of the users are viewing both? What types of claims are they viewing? What, if anything, are viewers of Disability rating interacting with on that screen?


### What additional value did we find in reviewing this finding together?



* **Determined if app store data could explain analytics behavior:** There were no clear trends or indicators from app store reviews to explain this pattern. This lack suggests that this behavior is not related to a major user pain point.
* **Scoped further analytics based on lack of app store data:** Given the lack of insight we have around this behavior from both data sources, it justifies taking a broader scope to app analytics further exploration.


### What potential actions did this process indicate the team should consider?



* **Perform ad hoc analysis:** Analyze the cross-over between these user groups (Claims & Disability rating) to see what more specific hypotheses can be formulated about this behavior pattern. 


### What did this process provide to help prioritize these potential actions?



* **Is this a priority because of user experience?** No, there are no clear indicators that there is a negative user experience or task blocked by the current analytics. 
* **Is this a priority because of scope?** Yes, as these are our top two most frequented features by avg. daily viewers.


## Example 2: Reviewing a recently launched feature with Veteran Status

Greta considered what new features had recently launched and what analytics are showing us about them so far. For Veteran Status, we had planned limited measures of success and they had not been added to a dashboard, yet. In discussion, Liz noted qualitative data has highlighted there are other ways Veterans were proving their status with the app before this feature existed, such as Reddit conversations that showed screenshots of Veteran Status Letter in the app as one way to prove status.


### What additional value did we find in reviewing this finding together?



* **Identified process improvement opportunity:** Research had qualitative context (not only from app store reviews) about Veterans prior utilization of the app to prove Veteran Status, but these hadn’t come up in our initial metrics conversations.
* **Identified additional analytics hypotheses to test for a new feature:** This conversation gave us clues about where else in app analytics we might see changes in behavior and potential other indicators for validating the success and limitations of this new feature.


### What potential actions did this process indicate the team should consider?



* **Process improvement for defining success:** The team should consider how to incorporate Research’s long lens on Veteran experiences when defining success, particularly when adding features to better support things Veterans are already doing with the app without it being intentionally designed to do so.
* **Improve the surfacing of existing app analytics:** Further leverage existing analytics to see if there are changes in the amount of utilization of the Benefits Summary letter for users with the Veteran Status feature. Surfacing screen views into the monthly board would be a low-lift step to increase access to these kinds of insights.
* **Perform ad hoc analysis:** The team could do deeper cross analysis around this new feature.


### What did this process provide to help prioritize these potential actions?



* **Is this a priority because of user experience?** No, there was no key indicator of a negative user experience in either data source. 
* **Is this a priority because of scope?** Yes, this is connected to a feature that should be of benefit to all Veterans and it is also relatively new so enriching our understanding now would be valuable.


## Example 3: Sizing qualitative reports of a critical issue & opportunities for prioritization process improvements

Android login problems were an issue that had come to light to the team during the month and work had been done to address it. There was a big uptick in login issues reported in October app store reviews. Nearly half of all October reviews (43%) were made up of login issues, and the majority of those mentioning login issues were Android users–but average daily Android users actually grew according to analytics and there were no outlier days in the month for authentication. In both September and October, 66.1% of all Android users were able to authenticate at least once and the rate for daily average users was actually higher in October. In September, the average daily authenticated users were only 61% of the daily average user for Android. In October, this rate improved to 63%. This validated that this critical error did not affect most Android users.


### What additional value did we find in reviewing this finding together?

* **Sizing qualitative feedback:** In isolation, the app store reviews would make it appear that this problem was affecting a significant portion of Android users. App analytics was able to validate that it was not impacting most users.
* **Identified process improvement opportunity:** In reflecting on this example, we considered what the team could have done differently in addressing this issue.


### What potential actions did this process indicate the team should consider?

* **Process improvement for sizing critical errors:** The team should consider performing a retro on the login problem and determine a systematic approach to sizing critical errors for prioritization.** **


### What did this process provide to help prioritize these potential actions?

* **Is this a priority because of user experience?** Yes, this pertains to how the team responds to some of the least desirable user experiences.
* **Is this a priority because of scope?** Unclear. The team should consider how many similar situations we’ve faced. Based on the frequency of these issues and the disruption they’ve caused to planned work in the past, prioritize how critical it is to have this process sooner than later.


## Example 4: Forming additional hypotheses for app analytics trends 

Liz identified a theme in app reviews mentioning not being able to find Evidence Upload. The Claims dashboard is under a revamp, but the prior version included a funnel analysis of users who had open evidence requests. It showed that people aren’t making it through the funnel to get their claims evidence uploaded. When the team had previously looked at this drop off, our main hypothesis was that many Veterans may not want to use their phones to upload evidence. By reviewing this drop off with the qualitative context of these app reviews, it is clear there is an alternative hypothesis: many Veterans who want to upload evidence from their phone can’t find how to. App analytics can’t measure how many aren’t even making it to the start of the funnel but who want to use the tool. 

Of users who view claims with open evidence requests, 8% do not proceed from viewing Claims Details to viewing the File Request overview screen. An additional 18% do not view the details of any of their individual file requests.  An additional 45% do not proceed from the individual file request details to the Select a file or photo screen. Current app analytics cannot track how many users with open evidence requests never viewed the Claims Details (the start of this funnel), but future analytics being put in place for the personalized home screen will be able to. 


### What additional value did we find in reviewing this finding together?



* **Discovering alternative hypotheses:** In isolation, the drop off around evidence upload with app analytics led us to emphasize an explanation that this drop off was partly due to user desires that we don’t expect to influence or change. The app store reviews, however, show a persistent theme around these kinds of comments. Now, we have two hypotheses, and our new one is something that the team could attempt to address.
* **Pinpointing areas for exploration:** The analytics show us which parts of the funnel are having the highest drop off. These areas can be prioritized for exploration through design spikes with the File Requests Details screen being the top one to explore.
* **Clarifying needs for feature dashboards:** This discussion demonstrated the value of keeping a funnel view as part of the new Claims dashboard. It also indicates that funnel views for similar multi-step tasks could be useful across all features.


### What potential actions did this process indicate the team should consider?

* **Gather more information:** Design discovery and hypothesis building can be done around each of the drop offs found in the evidence upload funnel. This work could lead to product experimentation or could clarify the requirements of research to better understand the challenges Veterans face with the current upload process in the app.
* **Improve the surfacing of existing app analytics:** Screen funnels in particular multi-step areas could provide significant insight into gaps in Veteran experience, as well as explanation for the success rates of associated tasks.


### What did this process provide to help prioritize these potential actions?

* **Is this a priority because of user experience?** Yes, this is a problem focused on Veteran’s ability to complete tasks in the app and is focused on things that the app itself may be able to improve upon.
* **Is this a priority because of scope?** Only 5% of viewers of the Claims feature viewed a claim with an open evidence request. However, since the reported experience problem emphasizes difficulty finding the upload place, it could be that even more Veterans were looking for it but never made it to the start of our clear funnel. The scope here could be small, but it could also have significant consequences for Veterans without laptop/other computer access and limited resourcing to be able to submit evidence physically.


## Example 5: Finding the limits of app analytics and determining alternative methods of gathering insights

App store reviewers report discrepancies in what they see in the app versus web for claims and decision letters. This isn’t something that app analytics can measure as it is about an underlying difference in either the data pulled in from APIs or design differences between web and mobile that are causing Veteran confusion.


### What additional value did we find in reviewing this finding together?

* **Confirmed app analytics unable to corroborate:** We were able to quickly identify that this is a problem area that app analytics can’t provide more clarity on so that we can move on to other approaches. 


### What potential actions did this process indicate the team should consider?

* **Gather more information from other sources:** BE and/or Product could work to confirm parity between the data points used across web and mobile applications for Claims and Decision Letters. If the above has already been reviewed or once it has been if no differences are found, design parity across the two platforms could be considered for what impacts the differences may have on Veterans interpreting the same data as different data. If the above areas do not provide a clear indication or hypothesis to test, Research may be required to better understand the Veteran experience.


### What did this process provide to help prioritize these potential actions?

* **Is this a priority because of user experience?** Yes, this issue demonstrates an impact on trust in VA when Veterans receive or think they receive conflicting information from different VA tools on the same subject.
* **Is this a priority because of scope?** The scope is unclear as app analytics cannot scope this app store feedback. However, we have seen this issue persist in app reviews since February of this year.
