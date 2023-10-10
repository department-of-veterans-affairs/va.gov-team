# Claims Status Tool - Elevating Claims Status - Product Brief
We have the opportunity to examine the current state of the Veteran’s experience when viewing   their individual claims status on the VA mobile application with the goal of reimaging a future state that helps to alleviate both user frustration and Veterans uninstalling the application.


## Problem Statement
**The VA Health & Benefits app claims feature is not meeting its intended primary purposes** of helping Veterans easily and quickly 1) track progress of claims and appeals and 2) know when they need to take action in order to keep things moving along. As a result, Veterans using the claims status tool may experience dissatisfaction with the app and with VA.

## Evidence of the Problem
Current app design places the burden of staying informed about claims on Veterans. A Veteran must navigate unprompted into each claim’s detail in order to know a given claim’s status, if the status has changed since they last looked, or if there is an action they need to take. This results in lost time & unnecessary effort that product changes could alleviate.

Some Veterans report spending significant time returning to their claim frequently to stay up-to-date with any changes. According to app analytics, Veterans view the same claim in the same stage over 6 times on average. Even when Veterans do this repeated checking, they may miss important updates to their claim status in the app. Preliminary analysis shows that Veterans miss viewing a step change in the app on 84% of claims. On average, Veterans do not view a claim in the app until 4 days after a change in step occurred and 10% of claims are not viewed until 11 days after the change.


### Desired Outcome - Hypothesis
We believe that surfacing information about claims status beyond the claims detail screen will reduce the burden placed on Veterans to stay informed in regards to their claim and will improve user satisfaction and right-sized engagement with the VA mobile app.
We will know we’re right when we see:
* **Leading indicators:**
  * **Increase** in the amount of Veterans who are seeing claims at each step relative to the overall increase in Claims users.
  * **Decrease** in the amount of views of claims with an unchanged status.
  * **Decrease** in the amount of time between the status change and when the Veteran sees it.
* **Lagging indicator:**
  * User satisfaction with ability to keep up with claim progress.

While we will not be able to measure this directly, the increased speed and ease of staying informed will likely also decrease delay in the claims processing process due to Veteran inaction when evidence is required.

## Current State of Claims Application 

The claims feature in the VA Mobile app is intended to give Veterans the ability to quickly access and track the status (and provide related file requests) for their submitted claims—from initiation to decisioning—providing them with peace of mind and empowering them to keep things moving along as quickly as possible, wherever they are. Veterans can check claims, higher-level reviews, supplemental claims and Board Appeals statuses for both active and closed cases.        They can also get support with their claim when needed.

### Current Experience:
#### High level steps in the Claims process:
1. Claim received
2. Initial review
3. Evidence gathering, review, and decision
4. Preparation for notification
5. Complete

#### The Claims process:


<table>
  <tr>
   <td><strong>Claims process step</strong>
   </td>
   <td><strong>VA.gov (Desktop)</strong>
   </td>
   <td><strong>Mobile app</strong>
   </td>
  </tr>
  <tr>
   <td><strong>File claim: </strong> 

<em>Other options: through VSOs/Lawyers, by dropping off a VA Regional Office, or by US mail</em>
   </td>
   <td><em>Submit a claim to VA.gov (QuickSubmit tool, likely on desktop) </em>
   </td>
   <td><strong>Not supported</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Track Claims process steps:</strong>
<ul>

<li>Claim received

<li>Initial review

<li>Evidence gathering, review, and decision

<li>Preparation for notification

<li>Complete
</li>
</ul>
   </td>
   <td><strong><em>View</strong> claim file information (File requests, Description of files)</em>
<p>
<strong><em>View</strong> current Claim Status (Where the claim is in the steps at left)</em>
   </td>
   <td><em><strong>View</strong> claim file <strong>information</strong> (File requests, Description of files)</em>
<p>
<strong><em>View</strong> current Claim <strong>Status</strong> (Where the claim is in the steps at left)</em></strong>
   </td>
  </tr>
  <tr>
   <td><strong>Evidence gathering </strong>
   </td>
   <td><strong><em>Upload/Add</strong> files to a claim/s via VA.gov (desktop or mobile website)</em>
   </td>
   <td><strong><em>Upload/Add</strong> requested files to a claim/s via app <strong>quickly & easily using their smartphone’s camera</strong></em>
   </td>
  </tr>
  <tr>
   <td><strong>Decision</strong>
   </td>
   <td><em>Claim Decision packet is mailed via US mail OR <strong>user can view digital decision letter on VA.gov </strong></em>
   </td>
   <td><em>Claim Decision packet is mailed via US mail OR<strong> user to can view digital decision letter in mobile app</strong></em>
   </td>
  </tr>
  <tr>
   <td><strong>Appeal</strong>
   </td>
   <td><strong><em>View</strong> appeals <strong>details</strong> and information on VA.gov (desktop or mobile website) (need to confirm)</em>
   </td>
   <td><strong><em>View</strong> appeals <strong>details</strong> and information (desktop or mobile website) (need to confirm)</em>
   </td>
  </tr>
</table>



#### Existing Events/Actions
- Ability to **View** a Claim
- Ability to **Upload** Claim evidence documents
- Ability to **Download** Digital Decision Letters on VA.org and Mobile 

New Events/Actions: TBD

### Pain Points
- **Veterans don’t necessarily know in a timely manner when something has changed or is needed with their claim or appeal.** <sub>1</sub>
  - Veterans don’t have a way in the app to **quickly see** whether a claim has **changed status** (without tapping down into the Claim details each time). <sub>1</sub>
  - Because there are long gaps between signals from VA about the progress of the claim, **some Veterans check in frequently** to ensure things are moving along. <sub>1</sub>

* **Veterans are not sure if a claim is truly being worked on.** <sub>1</sub>
  - Some Veterans have anxiety about the claims process and **check their claim in the app multiple times a day to see if their claim status has changed.** <sub>1</sub>
  - Veterans **check the status of their claims frequently** and through multiple channels in the hope that they can find better or **more up-to-date information.** <sub>1</sub>
* ** Veterans are not always **able to tell what a claim is about** based on the information displayed at list level. <sub>2</sub>

1. See [Review of User Research: VA Mobile App Claims](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/claims/research%20review%20-%20claims%20status%20tool.md) for details on the specific studies supporting each bullet point.
2. [2022-07 VA Health and Benefits mobile app: current experience discovery research part II](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/161)

## Assumptions and Level of Confidence
- That we will be able to surface information about claims status earlier/in a different place than the claims detail screen.
- That surfacing information about claims status earlier/in a different place than the claims detail screen will positively impact right-sized engagement
- We can’t change the claims process—but we can change how the app communicates and facilitates interactions with it.
- That increasing the timeliness/transparency of information during the claims process will positively impact the Veteran experience.
- That increasing the timeliness/transparency of information during the claims process will increase trust in the app & VA.

## Risks
1. Ensuring that any new event we add does not have any downstream technical impacts on the overall app (example: dips in app performance due to additional API calls).
2. Mechanisms we introduce intended to surface information about claims status beyond the claims detail screen don’t change anything in terms of engagement.
3. Mechanisms we introduce intended to surface information about claims status beyond the claims detail screen inadvertently cause some other user experience issue.

## Business Goals (Assumptions)

#### Relates to OCTO-DE goals:
- Logged-in users can easily track applications, claims, or appeals online
- Logged-in users have a personalized experience, with relevant and time-saving features
- Veterans and their families can find a single, authoritative source of information
- Veterans and their families trust the security, accuracy and relevancy of VA.gov
#### Claims specific:
- Reduce need for Claims-related calls to the Call Centers and other support channels (Better data).
- Quicker turn around time: (new evidence submitted to tool within a week of request)
#### App specific:
- Increase # of users of the VA mobile app
- Improve Veteran confidence in the VA mobile app as a reliable source of accurate information.


## Roadmap
- Overall Product Brief (**Q3**)
- Solutioning and UI improvements based on the problem statement noted above (**Step 2- Q4- Timing-TBD**)
- Implementation  (**Q4-Timing TBD**)
- Identify additional advantages & features that are specific to the va mobile app that would benefit the Veteran in the Claims experience (**Future Roadmap-Beyond Q4**)

## Technical Approach 
May apply to the scope of this project:
- **Q3:** Tech spike on push notifications (VA.gov Notifications discovery went as far as understanding whether feasible, when found out no, discovery stopped (2020)) to determine technical or business limitations
- **Q4:** Push Notification Strategy (Timing TBD)

## Measuring success<sub>1</sub> 
**Right-sizing interaction** with Claims reflects that two opposing types of engagement patterns are currently appearing in app analytics: 

1. **Repeated checking:** Some Veterans repeatedly check the same claim when it is in the same step. 

2. **Missed or delayed updates**: Some Veterans don’t see a claim when it has moved into a new step or do not view it until several days after the step change occurred.

How these two areas can be measured is elaborated on in the sections below.  User satisfaction with their ability to keep up with claim progress will be assessed via app store reviews and potential future qualitative research or in-app surveying.
Engagement pattern 1: Repeated checking
A repeat check is defined as a claim being viewed multiple times when no change in step has occurred. Repeat check rates vary depending on what specific step it is in as displayed in the table below. The final measure of success and comparison metric will account for step-specific variations and user tenure with the app.


<table>
  <tr>
   <td colspan="10" ><strong>Claim checking <span style="text-decoration:underline;">instances</span></strong>
<p>
Unique event count per claim per step (Aug. 1-Sept. 22, 2023)
   </td>
  </tr>
  <tr>
   <td><strong>In-app step</strong>
   </td>
   <td><strong>Claims</strong>
   </td>
   <td><strong>Avg.</strong>
   </td>
   <td><strong>Min.</strong>
   </td>
   <td><strong>25th percentile</strong>
   </td>
   <td><strong>Median</strong>
   </td>
   <td><strong>75th percentile</strong>
   </td>
   <td><strong>90th percentile</strong>
   </td>
   <td><strong>99th percentile</strong>
   </td>
   <td><strong>Max</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Step 1</strong>
   </td>
   <td>18.4K
   </td>
   <td>5.7
   </td>
   <td>1
   </td>
   <td>1
   </td>
   <td>3
   </td>
   <td>6
   </td>
   <td>13
   </td>
   <td>45
   </td>
   <td>475
   </td>
  </tr>
  <tr>
   <td><strong>Step 2</strong>
   </td>
   <td>84.0K
   </td>
   <td>6.3
   </td>
   <td>1
   </td>
   <td>1
   </td>
   <td>3
   </td>
   <td>7
   </td>
   <td>14
   </td>
   <td>50
   </td>
   <td>610
   </td>
  </tr>
  <tr>
   <td><strong>Step 3</strong>
   </td>
   <td>213.9K
   </td>
   <td>9.0
   </td>
   <td>1
   </td>
   <td>2
   </td>
   <td>4
   </td>
   <td>9
   </td>
   <td>21
   </td>
   <td>79
   </td>
   <td>1,610<sub>2</sub>
   </td>
  </tr>
  <tr>
   <td><strong>Step 4</strong>
   </td>
   <td>17.6K
   </td>
   <td>4.8
   </td>
   <td>1
   </td>
   <td>1
   </td>
   <td>3
   </td>
   <td>5
   </td>
   <td>10
   </td>
   <td>33
   </td>
   <td>308
   </td>
  </tr>
  <tr>
   <td><strong>Step 5</strong>
   </td>
   <td>196.4K
   </td>
   <td>1.9
   </td>
   <td>1
   </td>
   <td>1
   </td>
   <td>1
   </td>
   <td>2
   </td>
   <td>3
   </td>
   <td>12
   </td>
   <td>257
   </td>
  </tr>
</table>

<sub>2 An outlier likely caused by a one-off analytics bug.</sub>



#### Engagement pattern 2: Some Veterans don’t see a claim when it has moved into a new step or do not view it until several days after the step change occurred.
Current analytics cannot tell us overall how many times a Veteran is not viewing an app when it is in a particular stage as the analytics can only gather this metadata about the claims that are viewed. However, we can analyze those claims that are viewed across multiple steps if the user did not view an intermediate step. For example, we can tell when a user viewed a claim in step 1 and step 3 but did not view it in step 2. **This is a proxy for how difficult users find using the app to keep up with their claim status as it evolves.**

To do this, we examined the claims that were viewed over at least three steps and measured how often a user did not see one or more of the middle steps between the first and last step viewed. **Only 16% of users saw each step in the app that we know they could have** based on the ones they did view. This means among these claims **84% changed two or three steps before the user viewed them again. **Step 2 was the most frequently missed at 93% followed by Step 4 at 80% and Step 3 at 72%

Meanwhile, a significant portion of claim views come multiple days after the update in step occurs indicating room for improvement in the feature facilitating time-saving for Veterans. The table below demonstrates this finding for each step. **The 90th percentile of claims in Step 3, when a Veteran may have additional actions to take to complete their claim, is taking 12 days or longer to view after the step change occurred.**

<table>
  <tr>
   <td colspan="10" ><strong>Days between step change and first subsequent view in app</strong>
<p>
Claims viewed & step change occurring (Aug. 1-Sept. 22, 2023)
   </td>
  </tr>
  <tr>
   <td><strong>In-app step</strong>
   </td>
   <td><strong>Claims</strong>
   </td>
   <td><strong>Avg.</strong>
   </td>
   <td><strong>Min.</strong>
   </td>
   <td><strong>25th percentile</strong>
   </td>
   <td><strong>Median</strong>
   </td>
   <td><strong>75th percentile</strong>
   </td>
   <td><strong>90th percentile</strong>
   </td>
   <td><strong>99th percentile</strong>
   </td>
   <td><strong>Max</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Step 1</strong>
   </td>
   <td>9.0K
   </td>
   <td>5.3
   </td>
   <td>0
   </td>
   <td>0
   </td>
   <td>2
   </td>
   <td>6
   </td>
   <td>16
   </td>
   <td>39
   </td>
   <td>51
   </td>
  </tr>
  <tr>
   <td><strong>Step 2</strong>
   </td>
   <td>66.3K
   </td>
   <td>3.9
   </td>
   <td>0
   </td>
   <td>0
   </td>
   <td>2
   </td>
   <td>5
   </td>
   <td>10
   </td>
   <td>29
   </td>
   <td>52
   </td>
  </tr>
  <tr>
   <td><strong>Step 3</strong>
   </td>
   <td>147.6K
   </td>
   <td>3.9
   </td>
   <td>0
   </td>
   <td>0
   </td>
   <td>1
   </td>
   <td>4
   </td>
   <td>12
   </td>
   <td>34
   </td>
   <td>52
   </td>
  </tr>
  <tr>
   <td><strong>Step 4</strong>
   </td>
   <td>17.5K
   </td>
   <td>0.3
   </td>
   <td>0
   </td>
   <td>0
   </td>
   <td>0
   </td>
   <td>0
   </td>
   <td>1
   </td>
   <td>4
   </td>
   <td>17
   </td>
  </tr>
  <tr>
   <td><strong>Step 5</strong>
   </td>
   <td>61.8K
   </td>
   <td>4.5
   </td>
   <td>0
   </td>
   <td>0
   </td>
   <td>1
   </td>
   <td>5
   </td>
   <td>13
   </td>
   <td>37
   </td>
   <td>52
   </td>
  </tr>
</table>



## Stakeholders
- **POs**
  - Rachel Han
  - Ryan Thurwell
  - Chris Johnston
- Jacob Worrell- VA.gov Claims team

- **Cross Benefits (Benefits Management)- Works with Vets after they are eligible**
   - Cory Sohrakoff (Product)
   - July Strothman (ENG)

- **Disability Benefits Crew - Advices Veteran Benefits Administration business owners on what   to include in an application and evidence upload, which includes EVSS migration.**
  - Emily Theis ( Product Lead)
  - Shannon Ford (Design)
  - Steve Albers (Engineering)

- **VBA - Veterans Business Administration**
  - Paul Shute
  - Alejandro Mendiola-Flores


