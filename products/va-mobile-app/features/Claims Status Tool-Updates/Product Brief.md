## Claims Status Tool-Informing on Claims Status- Product Brief

We have the opportunity to examine the current state of the Veteran’s experience when viewing   their individual claims status on the VA mobile application with the goal of reimaging a future state that helps to alleviate both user frustration and Veterans uninstalling the application.

## Problem Statement
The claims status tool in the VA mobile app was designed with the intent to help Veterans who have filed claims and/or appeals to track that claim’s progress and inform them when VA needs something in order to keep things moving along.

In its current form, the VA mobile app claims tool places the burden of staying informed on Veterans, requiring them to organically tap down into each claim detail to understand what step the claim is in, whether the step has changed, and whether something is needed from them to keep things moving in the right direction. 

We have observed that some Veterans report spending time returning to their claim frequently (On average, Veterans view the same claim in the same stage over 6 times), resulting in lost time & requiring unnecessary effort. Other Veterans who do not do this repeated checking (and even those who do) often miss updates to their claim status in the app. Preliminary analysis shows that Veterans miss viewing a step in the app on 16% of claims.

As a result, Veterans using the claims status tool may experience dissatisfaction with the VA mobile app and with VA, and potentially seek other tools or methods to keep up with their claim. 

## Desired Outcome - Hypothesis

We believe that surfacing information about claims status beyond the claims detail screen will reduce the burden placed on Veterans to stay informed in regards to their claim and will improve user satisfaction and right-sized engagement with the VA mobile app.
We will know we’re right when we see:
Leading indicators: 
Increase in the amount of Veterans who are seeing claims at each step relative to the overall increase in Claims users.

Decrease in the amount of views of claims with an unchanged status.
Decrease in the amount of time between the status change and when the Veteran sees it.
Lagging indicator: 
User satisfaction with ability to keep up with claim progress.

While we will not be able to measure this directly, the increased speed and ease of staying informed will likely also decrease delay in the claims processing process due to Veteran inaction when evidence is required.

### Current State of Claims Application 

The claims feature in the VA Mobile app is intended to give Veterans the ability to quickly access and track the status (and provide related file requests) for their submitted claims—from initiation to decisioning—providing them with peace of mind and empowering them to keep things moving along as quickly as possible, wherever they are. Veterans can check claims, higher-level reviews, supplemental claims and Board Appeals statuses for both active and closed cases.        They can also get support with their claim when needed.

**Current Experience:**
Steps
High level steps in the Claims process:
1. Claim received
2. Initial review
3. Evidence gathering, review, and decision
4. Preparation for notification
5. Complete

**See PDF Version for Full Chart/Action Steps**

### Events/Actions
Existing Events/Actions:
-Ability to View a Claim
-Ability to Upload Claim evidence documents
-Ability to Download Digital Decision Letters on VA.org and Mobile 

### Pain Points
See the Review of User Research: VA Mobile App Claims for details on the specific studies supporting each bullet point.

**Veterans don’t necessarily know in a timely manner when something has changed or is needed with their claim or appeal.**
      Veterans don’t have a way in the app to quickly see whether a claim has changed status (without tapping down into the Claim details each time).
Because there are long gaps between signals from VA about the progress of the claim, some Veterans check in frequently to ensure things are moving along.

***Veterans are not sure if a claim is truly being worked on.**
 Some Veterans have anxiety about the claims process and check their claim in the app multiple times a day to see if their claim status has changed 
Veterans check the status of their claims frequently and through multiple channels in the hope that they can find better or more up-to-date information.

### Assumptions and Level of Confidence
That we will be able to surface information about claims status earlier/in a different place than the claims detail screen.
That surfacing information about claims status earlier/in a different place than the claims detail screen will positively impact right-sized engagement
We can’t change the claims process—but we can change how the app communicates and facilitates interactions with it.
That increasing the timeliness/transparency of information during the claims process will positively impact the Veteran experience.
That increasing the timeliness/transparency of information during the claims process will increase trust in the app & VA.

### Risks
1. Ensuring that any new event we add does not have any downstream technical impacts on the overall app (example: dips in app performance due to additional API calls).
2. Mechanisms we introduce intended to surface information about claims status beyond the claims detail screen don’t change anything in terms of engagement.
3. Mechanisms we introduce intended to surface information about claims status beyond the claims detail screen inadvertently cause some other user experience issue.

### Business Goals (Assumptions)

**Relates to OCTO-DE goals:**
Logged-in users can easily track applications, claims, or appeals online
Logged-in users have a personalized experience, with relevant and time-saving features
Veterans and their families can find a single, authoritative source of information
Veterans and their families trust the security, accuracy and relevancy of VA.gov
**Claims specific:**
Reduce need for Claims-related calls to the Call Centers and other support channels (Better data).
Quicker turn around time: (new evidence submitted to tool within a week of request)
**App specific:**
Increase # of users of the VA mobile app
Improve Veteran confidence in the VA mobile app as a reliable source of accurate information.


### Roadmap
-Overall Product Brief (Q3)
-Solutioning and UI improvements based on the problem statement noted above (Step 2- Q4- Timing-TBD)
-Implementation  (Q4-Timing TBD)
-Identify additional advantages & features that are specific to the va mobile app that would benefit the Veteran in the Claims experience (Future Roadmap-Beyond Q4)

### Technical Approach 
May apply to the scope of this project:
Q3: Tech spike on push notifications (VA.gov Notifications discovery went as far as understanding whether feasible, when found out no, discovery stopped (2020)) to determine technical or business limitations
Q4: Push Notification Strategy (Timing TBD)

### Measuring success 
Right-sizing interaction with Claims reflects that two opposing types of engagement are currently appearing in app analytics: 1) Some Veterans repeatedly check the same claim when it is in the same step, and 2) Some Veterans don’t see a claim when it has moved into a new step or do not view it until several days after the step change occurred. How these two areas can be measured is elaborated on in the sections below.  User satisfaction with their ability to keep up with claim progress will be assessed via app store reviews and potential future qualitative research or in-app surveying.

Engagement pattern 1: Some Veterans repeatedly check the same claim when it is in the same step.

When a claim is in progress (Steps 1-4), app users view the same claim in the same step at varying rates depending on what specific step it is in as displayed in the table below. This is a proxy for the level of manual, active effort Veterans must exert to know when the status of their claim has changed via the app. While the median values range from 3-4, the average and distribution 

**See PDF Version for additonal metrics version charted information **

Engagement pattern 2: Some Veterans don’t see a claim when it has moved into a new step or do not view it until several days after the step change occurred.
Current analytics cannot tell us overall how many times a Veteran is not viewing an app when it is in a particular stage as the analytics can only gather this metadata about the claims that are viewed. However, we can analyze those claims that are viewed across multiple steps if the user did not view an intermediate step. For example, we can tell when a user viewed a claim in step 1 and step 3 but did not view it in step 2. This is a proxy for how difficult users find using the app to keep up with their claim status as it evolves.


To do this, we examined the claims that were viewed over at least three steps and measured how often a user did not see one or more of the middle steps between the first and last step viewed. Only 16% of users saw each step in the app that we know they could have based on the ones they did view. This means among these claims 84% changed two or three steps before the user viewed them again. Step 2 was the most frequently missed at 93% followed by Step 4 at 80% and Step 3 at 72%


Meanwhile, a significant portion of claim views come multiple days after the update in step occurs indicating room for improvement in the feature facilitating time-saving for Veterans. The table below demonstrates this finding for each step. The 90th percentile of claims in Step 3, when a Veteran may have additional actions to take to complete their claim, is taking 12 days or longer to view after the step change occurred.

**See PDF Version for additional metrics charted information**

### Stakeholders
**POs**
Rachel Han
Ryan Thurwell
Chris Johnston
Jacob Worrell- VA.gov Claims team

**Cross Benefits (Benefits Management)- Works with Vets after they are eligible**
    -Cory Sohrakoff (Product)
    -July Strothman (ENG)

**Disability Benefits Crew -Advices Veteran Benefits Administration business** 
           owners on what   to include in an application and evidence upload, which includes 
           EVSS migration.
                -Emily Theis ( Product Lead)
                -Shannon Ford (Design)
                -Steve Albers (Engineering)
**VBA - Veterans Business Administration**
               -Paul Shute
               -Alejandro Mendiola-Flores


