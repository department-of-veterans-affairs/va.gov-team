<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 1.747 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Thu Mar 16 2023 09:50:25 GMT-0700 (PDT)
* Source doc: Claims Product Brief- Final_March2023
* Tables are currently converted to HTML tables.
----->


<h1>Claims Product Brief </h1>


<h3>Problem Statement</h3>

Veterans can file a Disability Claim if they believe they have an injury or medical condition that's a result of their time in service. Once they file that claim, VA will process it, decide whether they think the claimed condition(s) is (are) indeed service-connected, and if so will give the Veteran a disability rating. This rating dictates what monthly award (i.e. payment) the Veteran may get, as well as what other benefits they might have access to.

Once the Veteran submits their claim to VA, they need a way to understand where it is in VA's processing/rating journey and whether VA needs something from them at any given time so that they can keep the claims process moving. Claim Status is a tool that allows them to track this progress. Having a claim approved can mean receiving a life-changing amount of money, so Veterans are highly invested in the outcome.  \
(See [VA.gov - Claims Status readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal))

The claims feature in the VA Mobile app is intended to give Veterans the ability to **quickly access and track the status** (and provide related file requests) for their submitted claims, from initiation to decisioning, providing them with **peace of mind** and the ability to **keep things moving along** as quickly as possible—wherever they are. Veterans can check claims, higher-level reviews, supplemental claims and Board Appeals statuses for both active and closed cases.

_We have the opportunity to examine the current state of the claims status tool on both the website and mobile application with the goal of reimaging a future state and additional benefits for the claims feature that focus on trust, transparency and timeliness._

**_See Roadmapping below for phased solutioning goals._**

**Current Experience:**


**High level steps in the Claims process:**



1. Claim received
2. Initial review
3. Evidence gathering, review, and decision
4. Preparation for notification
5. Complete

**The Claims Experience:**


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
   <td><strong>File claim </strong> \
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
   <td><strong><em>View claim file information (File requests, Description of files)</em></strong>
<p>
<strong><em>View current Claim Status (Where the claim is in the steps at left)</em></strong>
   </td>
   <td><strong><em>View claim file information (File requests, Description of files)</em></strong>
<p>
<strong><em>View current Claim Status (Where the claim is in the steps at left)</em></strong>
   </td>
  </tr>
  <tr>
   <td><strong>Evidence gathering </strong>
   </td>
   <td><strong><em>Upload/Add files to a claim/s via VA.gov (desktop or mobile website)</em></strong>
   </td>
   <td><strong><em>Upload/Add requested files to a claim/s via app quickly & easily using their smartphone’s camera</em></strong>
   </td>
  </tr>
  <tr>
   <td><strong>Decision</strong>
   </td>
   <td><em>Claim Decision packet is packet is mailed via US mail OR <strong>user can view digital decision letter on VA.gov </strong></em>
   </td>
   <td><em>Claim Decision packet is packet is mailed via US mail OR<strong> user to can view digital decision letter in mobile app (Planned release-2023)</strong></em>
   </td>
  </tr>
  <tr>
   <td><strong>Appeal</strong>
   </td>
   <td><strong><em>View appeals details and information on VA.gov (desktop or mobile website) (need to confirm)</em></strong>
   </td>
   <td><strong><em>View appeals details and information (desktop or mobile website) (need to confirm)</em></strong>
   </td>
  </tr>
</table>


**Existing Events/Actions:**



* Ability to **View **a Claim
* Ability to **Upload **Claim evidence documents
* Ability to** Download** Digital Decision Letters on VA.org and Mobile (**Planned- Q2 2023**) 

**New Events/Actions: **TBD

**Pain Points -**

**Overall Claims Process: \
**Veterans are frustrated by and lack confidence in the claims process because…** **



* **TRUST:  **
    * **Veterans are not sure if a claim is truly being worked on. <sub>1</sub>**
        * Some Veterans have anxiety about the claims process moving forward, and are checking their claim in the app multiple times a day to see if their claim status has changed—[there is no current method for notifying Veterans of changes to their status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal)<sub>.1,8</sub> 
        * The claims process isn’t linear, so it’s difficult to communicate progress via a tracker (and [seeing a status go “backwards” caused anger for users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#dominos-pizza-trackerwhy-not)). <sub>1</sub>
    * **Veterans do not trust the accuracy of the Claim information displayed. <sub>2, 3 ,7 </sub>**
        * Veterans who located the claims status tool on VA.gov were frustrated by what they thought were **inaccurate / unchanging statuses**. <sub>2, 3 </sub> 
        * The various sources of information at VA sometimes have different statuses for the same claim, creating confusion for the Veteran. <sub>2,7</sub> 
    * **Veterans don’t trust that the future communication with VA representatives will remain consistent with information they have already received, so they create a paper trail on their own. <sub>7</sub>**
        * Because of this, Veterans often **hold on to prior notifications** sent by VA. <sub>7</sub>
    * **VA sometimes shows information that’s more of a dead-end than helpful (ex: VA representation)**
        * “Why are you going to show me information but I can’t act on it?”
* **TRANSPARENCY & TIMELINESS:**
    * **A perceived lack of transparency and poor communication results in a mismatch of Veteran expectations of the process and their actual experiences. <sub>7</sub>**
        * This leaves Veterans feeling frustrated and lost during the process and ultimately disappointed when receiving their rating decision. **Veterans often feel that the lack of transparency is intentional on the part of VA**. <sub>7</sub>
    * **Veterans are not sure when/what VA needs from them to keep the claims process moving along. <sub>7, 8</sub>**
        * Veterans sometimes submit the wrong and/or excessive documentation, which further slows down the claims process. <sub>7</sub>
    * **Veterans don’t necessarily know in a timely manner when something has changed or is needed with their claim or appeal.<sub>8</sub>**
        * Because there are long real signals from VA about the progress of the claim, Veterans check in frequently to ensure things are moving along.

**Claims feature in the mobile app: **



* **TRUST**
    * **Veterans don’t trust the accuracy of the Claim information displayed because it differs from other sources. <sub>4, 5 </sub>**
        * Users complain in app store ratings and in Reddit forums about the app being broken after seeing error messages when trying to check their claim status, and in some cases have created folk model explanations as to what’s happening (“[It’s off on the weekends](https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf),”<sub><a href="https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf">4</a></sub> “[Does the VA update their systems during the weekend?](https://www.reddit.com/r/VeteransBenefits/comments/11c1tnr/does_the_va_update_their_systems_during_the/)“<sub>5</sub>) 
        * The VA mobile app is sometimes displaying **different status information** than other VA digital resources.<sub>7</sub>
    * **The VA mobile app displays one-size fits all error messages that are sometimes inaccurate when it can’t display claims information due to the profile failing or low connectivity.<sub>6</sub>**
        * Claims: “The app can’t be loaded,”<sub> </sub>Disability rating “You do not have a combined disability on record”<sub>6</sub>
* **TRANSPARENCY & TIMELINESS:**
    * **Veterans don’t have a way to quickly see whether a claim has changed status (without tapping down into the Claim details).**
    * **Veterans don’t necessarily know in a timely manner when something has changed or is needed with their claim or appeal.<sub>8</sub>**
        * Because there are long real signals from VA about the progress of the claim, Veterans check the app frequently for changes.<sub>8</sub>

**Sources:**



1. [VA.gov - Claims Status readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal)
2. [Supplemental Claim Decision Review Discovery - Veterans](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2022-01-Supplemental-Claims-Discovery-Veterans/SC_Veterans_FinalReport.md#key-findings) 
3. [Looks like the VA removed the est completion date from the app? : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/10sy1z8/looks_like_the_va_removed_the_est_completion_date/)
4. [It’s off on the weekends : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)
5. [Does the VA update their systems during the weekend? : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/11c1tnr/does_the_va_update_their_systems_during_the/)
6. [Profile fail error handling #4491](https://docs.google.com/document/d/1PhQSuW_cwyVbf-LVO7syg8q7EazKtcOhR-LHXnWkZ4Y/edit) 
7. [VEO: Compensation Final Presentation 20230120](https://drive.google.com/file/d/15WTxuwWOxGTgvvGhzV2EOIUgwrQ4QU2x/view?usp=share_link) pp 12, 16, 18, 20
8. [May 2020 Synthesis of Discovery research](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1602260690816/5c852613430ef83a077029a4915974194b18a2c3?sender=u28718b63c8993f515e0b2240)

<h3>**Assumptions and Level of Confidence**</h3>




* We can’t change the claims process—but we can change how the app communicates and facilitates interactions with it.
* That increasing trust and the timeliness/transparency of information during the claims process will positively impact the Veteran experience.

<h3>Risks</h3>




1. Ensuring that any new event we add does not have an downstream impacts on the overall app

<h3> \
**Business Goals**</h3>




* N/A
* Relates to[ OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):
    * Logged-in users can **easily track** applications, claims, or appeals online
    * Logged-in users have a personalized experience, with relevant and **time-saving features**
    * Veterans and their families can find a single, **authoritative** **source of information**
    * Veterans and their families trust the security, **accuracy** and relevancy of VA.gov
* Claims specific:
    * [Comp services didn't want to emphasize appealing a claim within claim status, they didn't want Veterans to be encouraged to appeal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#context)<sub>1</sub>
    * Improve Veteran **confidence** in the claims & appeals system.  
    * **Reduce number of Claims-related calls **to the Call Centers and other support channels.

<h3>**Roadmap**</h3>




* Map out new recommendations for new metrics and possible new events to add (Step 4)
* Map out new recommendations for UI improvements and solutioning
* Implement changes

**As part of our research, we would like discover the following:**

**V1: **



* Identify current state of claims with VA.gov and the mobile app including the user journey
* Identify new metrics for measuring success for claims
* Identify possible new events that can be added for the claims feature

**V2:**



* Identify UI improvements that can be made to the current state of the tool (ex: styling, font, wording etc)
* Identify additional mobile advantages & features that would benefit the veteran in the claim experience (ex: push notifications of claim status)
* 

<h3>**Technical Approach**</h3>


NA

<h3>**Measuring success **</h3>


**We want to monitor success metrics around the following:**



1. Confidence/Trust  (ex: Implementing and Monitoring responses to push notifications for mobile to alert on claims status)
2. Ease of Use
3. Speed in which user can access claims information

We want to determine what metrics we can put in place that surround these 3 key points. The overall goal is to improve how veterans view the product today (see notation on pain points).

Part of point 1 (Confidence/Trust) is continuing to understand why the consumer may have a lack of confidence in the claims process today. We can look to implement surveying/focus groups as part of overall analytics.

**Other thoughts: **



* **Problem Resolution Rate**-how effective our internal  team is at identifying the root cause of customer complaints, minimizing the frequency (number of problems identified and fixed in a period, divided by the total number of issues that came up during that period_.)_

**Notes on current metrics in place: (Notes from Web team)**

1. Claims Details Page 2. Unique Page Views 3.Time on the Page 4. Nav Pathway 4. Call Center monitoring/influx._ _

<h3>**Stakeholders**</h3>




* Chris Johnston
* Ryan Thurwell
* Jacob Worrell- VA.gov Claims team
* Matthew Self
* VBA- Veterans Business Administration

               -Paul Shute

               -Alejandro Mendiola-Flores

<h3>Important Links</h3>




* N/A
