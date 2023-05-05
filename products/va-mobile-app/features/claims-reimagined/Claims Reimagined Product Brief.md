<!-----
<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 1.23 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Fri May 05 2023 07:04:20 GMT-0700 (PDT)
* Source doc: Claims Product Brief- Final_March2023
* This is a partial selection. Check to make sure intra-doc links work.
* Tables are currently converted to HTML tables.
----->



# Claims Product Brief 


### Problem Statement

Veterans can file a Disability Claim if they believe they have an injury or medical condition that's a result of their time in service. Once they file that claim, VA will process it, decide whether they think the claimed condition(s) is (are) indeed service-connected, and if so will give the Veteran a disability rating. This rating dictates what monthly award (i.e. payment) the Veteran may get, as well as what other benefits they might have access to.

Once the Veteran submits their claim to VA, they need a way to understand where it is in VA's processing/rating journey and whether VA needs something from them at any given time so that they can keep the claims process moving. Claim Status is a tool that allows them to track this progress. Having a claim approved can mean receiving a life-changing amount of money, so Veterans are highly invested in the outcome.  \
(See [VA.gov - Claims Status readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal))

The claims feature in the VA Mobile app is intended to give Veterans the ability to **quickly access and track the status **(and provide related file requests) for their submitted claims—from initiation to decisioning—providing them with **peace of mind **and **empowering them to** **keep things moving along** as quickly as possible, **wherever they are**. Veterans can check claims, higher-level reviews, supplemental claims and Board Appeals statuses for both active and closed cases. They can also **get support with their claim** when needed.

We have the opportunity to examine the current state of the claims status tool on both the website and mobile application with the goal of reimaging a future state and additional benefits for the claims feature that focus on trust, transparency and timeliness.

**_See Roadmapping below for phased solutioning goals._**


### **Current Experience:**


#### Steps

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



#### Events/Actions

**Existing Events/Actions:**



* Ability to **View **a Claim
* Ability to **Upload **Claim evidence documents
* Ability to** Download** Digital Decision Letters on VA.org and Mobile (**Planned- Q2 2023**) 

**New Events/Actions: **TBD


#### Pain Points

We identified several themes that are present in both the VA mobile app and in the overall Claims process. See the [[DRAFT] Review of User Research: VA Mobile App Claims](https://docs.google.com/document/d/11VprREEHFY27LTErBrDb-XcYp8T0eacCczuxTd22zv0/edit#) for details on the specific studies supporting each bullet point.



* **Overall Claims process pain points: \
**Veterans are frustrated by and lack confidence in the claims process because…** **
    * **DISTRUST & LACK OF TRANSPARENCY:  **
        * Veterans are <span style="text-decoration:underline;">not sure if a claim is being worked on</span>. 
        * Veterans <span style="text-decoration:underline;">do not trust the accuracy</span> of the Claim information displayed.
        * Veterans <span style="text-decoration:underline;">don’t trust that the future communication</span> with VA representatives <span style="text-decoration:underline;">will remain consistent</span> with information they have already received, so they create a paper trail on their own. 
        * A <span style="text-decoration:underline;">perceived lack of transparency and poor communicatio</span>n results in a mismatch of Veteran expectations of the process and their actual experiences. 
    * **DISEMPOWERMENT:**
        * Veterans are <span style="text-decoration:underline;">not sure when/what VA needs from them</span> to keep the claims process moving along. 
        * Veterans <span style="text-decoration:underline;">don’t necessarily know in a timely manner when something has changed or is needed </span>with their claim or appeal.
* **Mobile app Claims feature pain points: **
    * **DISTRUST & LACK OF TRANSPARENCY:  **
        * Veterans <span style="text-decoration:underline;">don’t trust the accuracy</span> of the Claim information displayed because it differs from other sources. 
        * The VA mobile app <span style="text-decoration:underline;">displays one-size fits all error messages that are sometimes inaccurate</span> when it can’t display claims information due to the profile failing or low connectivity.
    * **DISEMPOWERMENT:**
        * VA sometimes <span style="text-decoration:underline;">shows information that’s more of a dead-end than helpful </span>(ex: showing name of representative for VA claims but offering now way to contact them).
        * Veterans<span style="text-decoration:underline;"> don’t have a way to quickly see whether a claim has changed status</span> (without tapping down into the Claim details).
        * Veterans <span style="text-decoration:underline;">don’t necessarily know in a timely manner when something has changed or is needed</span> with their claim or appeal. \



### **Assumptions and Level of Confidence**



* We can’t change the claims process—but we can change how the app communicates and facilitates interactions with it.
* We can’t easily conduct surveys in the app due to PRA.
* That increasing the timeliness/transparency of information during the claims process will positively impact the Veteran experience.
* That increasing the timeliness/transparency of information during the claims process will increase trust in the app & VA.


### Risks



1. Ensuring that any new event we add does not have any downstream impacts on the overall app.


###  \
**Business Goals** (Assumptions)



* **Relates to[ OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):**
    * Logged-in users can **easily track** applications, claims, or appeals online
    * Logged-in users have a personalized experience, with relevant and **time-saving features**
    * Veterans and their families can find a single, **authoritative** **source of information**
    * Veterans and their families trust the security, **accuracy** and relevancy of VA.gov
* **[Claims specific9](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status#okrs-and-kpis):**
    * **[Reduce need for Claims-related calls to the Call Centers and other support channels (Better data).](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status#okrs-and-kpis)**
    * [Quicker turn around time](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status#okrs-and-kpis): (new evidence submitted to tool within a week of request)
    * [No errors](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status#okrs-and-kpis)
    * [Comp services didn't want to emphasize appealing a claim within claim status, they didn't want Veterans to be encouraged to appeal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#context)<sub>1</sub>
* **App specific:**
    * Increase # of users of the VA mobile app
    * Improve Veteran confidence in the VA mobile app as a reliable source of accurate information.


### **Roadmap**



* Map out new recommendations for new metrics and possible new events to add (Step 4)
* Map out new recommendations for UI improvements and solutioning
* Implement changes

** \
As part of our research, we would like discover the following:**

**V1: **



* Identify current state of claims within VA.gov and the mobile app within the larger  [disability compensation user journey](https://drive.google.com/file/d/1ZX2CqVHD6p7kGzZvoIqzHEstoLt1n0Yf/view)
    * **Deliverable: **Research Review of existing VA research on Claims for applicable insights.
* Identify new metrics for measuring success for the app’s Claims feature
    * **Deliverable: **Facilitate and document a defined motivation statement for the VA mobile app’s Claims feature and all of its current functions with VA partners.
* Identify possible new events that can be added for the app’s Claims feature
    * **Deliverable: **Data collection plan for additional data needed to answer motivation & a dashboard with Claims measures available to stakeholders in Looker.

**V2:** (Possibly Q3- NOT CONFIRMED)



* Identify UX & UI improvements that can be made to app’s existing Claims feature (ex: interactions, styling, font, wording, etc)
* Identify additional advantages & features that are specific to the va mobile app that would benefit the Veteran in the Claims experience (ex: push notifications of claim status)


### **Technical Approach**



* **Q2:** Tech spike to confirm/determine whether the VA mobile app is actually getting Claim data/updating statuses later than other digital products (ex: VA.gov, eBenefits).
* **Q3:** Tech spike on push notifications ([VA.gov Notifications discovery went as far as understanding whether feasible, when found out no, discovery stopped (2020)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal)) to determine technical or business limitations
* **TBD:** Data spike to determine if/how it’s possible to track user engagement with digital tools at ecosystem level. \



### **Measuring success **

We want to measure the correlation of the <span style="text-decoration:underline;">quality</span>, <span style="text-decoration:underline;">accuracy</span>, <span style="text-decoration:underline;">timeliness</span>, and <span style="text-decoration:underline;">usability</span> of the app <span style="text-decoration:underline;">Claims feature</span> and the <span style="text-decoration:underline;">confidence</span> in the feature from <span style="text-decoration:underline;">Veteran app users who file claims.</span>

**Reference:** [Draft: Claims Data Project Plan [Internal]](https://docs.google.com/document/d/1vWybJ6zYnGLfj6CEWmkYJ_rX9IyRW1BJq2TFksDAu44/edit#) 

**We want to monitor success metrics around the following:**



1. Usefulness: (Is the thing we built **useful** to Veterans?)
    1. Confidence/Trust  (ex: Implementing and Monitoring responses to push notifications for mobile to alert on claims status)
2. Usability: (Is the thing we built **usable** by Veterans?)
    2. Ease of Use
    3. Speed in which user can access claims information

**Other thoughts: **



* **Problem Resolution Rate**-how effective our internal  team is at identifying the root cause of customer complaints, minimizing the frequency (number of problems identified and fixed in a period, divided by the total number of issues that came up during that period_.)_

**Notes on current metrics in place: (Notes from Web team)**

1. Claims Details Page  \
2. Unique Page Views  \
3. Time on the Page  \
4. Nav Pathway  \
4. Call Center monitoring/influx._ _


### **Stakeholders**



* Rachel Han
* Chris Johnston
* Ryan Thurwell
* Jacob Worrell- VA.gov Claims team
* Matthew Self
* VBA - Veterans Business Administration

               -Paul Shute

               -Alejandro Mendiola-Flores


### Important Links


#### Internal team docs



* [[DRAFT] VA Mobile app - Claims - Discovery & Success metrics (UX digging) ](https://docs.google.com/spreadsheets/d/1df20jI1sMyC4un-99vyIBDr1BThzgbzjJbUY9l9MQRE/edit#gid=1263698368)
* [[DRAFT] Review of User Research: VA Mobile App Claims](https://docs.google.com/document/d/11VprREEHFY27LTErBrDb-XcYp8T0eacCczuxTd22zv0/edit#)
* [[DRAFT} Claims Product Brief (github)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/claims-reimagined/Claims%20Reimagined%20Product%20Brief.md) 


#### VA.gov team docs



* [VA.gov Claims Status Tool documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status) 
    * [Claim and Appeal Status Tool Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Product%20Outline.md)
    * [VA.gov Claims and Status Tool OKRs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status#okrs[%E2%80%A6]kpis)


#### Existing User Research on Claims



    * **VA.gov**
        * [VA.gov claims status tool research folder (va.gov-team/products/claim-appeal-status/research/)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/research)
    * **Virtual Regional Office and Benefits Portfolio work (cuts across products)**
        * [Research Plan for OCTO Benefits Portfolio Support Team (April 2023)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-04-site-visit/veteran-claims-exp-research-plan.md) \
[2022-06 PACT Act / presumptive claims discovery research with veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2022-06-PACT-Act-presumptive-veterans/PACT-Act-research-report.md) (Jul 2022)
    * **Mobile app**
        * [Synthesis of Discovery research](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1602260690816/5c852613430ef83a077029a4915974194b18a2c3?sender=u28718b63c8993f515e0b2240) (May 2020)
    * **Veterans Experience Office (VEO) work**
        * [DisabilityCompensation_JourneyMap_V16_20130119.pdf](https://drive.google.com/file/d/1ZX2CqVHD6p7kGzZvoIqzHEstoLt1n0Yf/view?usp=share_link) (2023)
        * [Disability Compensation_ServiceBlueprint_V9 with Exec Summary.pdf](https://drive.google.com/file/d/1uiP5DHjyB72wY6YEsCE2h70j4o_zodej/view?usp=share_link) (2023)
        * [Disability Compensation Final Presentation 20230120.pdf](https://drive.google.com/file/d/15WTxuwWOxGTgvvGhzV2EOIUgwrQ4QU2x/view?usp=share_link) (Jan 2023)
    * **Lighthouse team work**
        * [526EZ Process Flow Diagram (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1663868736153/1040f1c6df6230104917bdff6e5e157264ef9153?fromVisitorModal=true&sender=339ec70a-d6de-4d85-95a2-a5cfaf5a0a1e) (Jun 2022) 
        * [Supplemental Claim Decision Review Discovery - Administrators](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2021-09-Supplemental-Claims-Discovery-Administrators/SC_VAAdmin_FinalReport.md) (2022)
        * [Supplemental Claim Decision Review Discovery - VSOs](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2021-11-Supplemental-Claims-Discovery-VSOs/SC_VSOs_FinalReport.md) (2022)
        * [Supplemental Claim Decision Review Discovery - Veterans](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2022-01-Supplemental-Claims-Discovery-Veterans/SC_Veterans_FinalReport.md) (2022)
