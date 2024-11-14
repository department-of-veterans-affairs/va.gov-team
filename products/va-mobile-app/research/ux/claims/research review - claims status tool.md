# Review of Related User Research: VA Mobile App - Claims Status Tool
Office of the CTO - Digital Experience (OCTO-DE), VA Mobile App

Date: 05/22/2023

[Holly Collier]( holly.collier@adhocteam.us), [Liz Straghalis](mailto:liz.straghalis@adhocteam.us)

## Executive Summary

This work supports [Claims Feature Discovery - Review existing VA research #5563](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5563) and is part of [Claims Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/features/claims-discovery). 
We reviewed existing VA research (2016-present) for insights related to the Claims process and Claims Status Tool that could potentially be addressed by the VA mobile app. The review focuses on the period during the Claims process after Veterans have filed their claim or appeal and are tracking the status, and identifies Veteran motivations, behaviors and pain points within the Claims tracking process and VA mobile app.  

This research lays the groundwork for examining the Claims feature in the mobile app and defining success metrics for claims in the mobile app. We’ll use this information to create recommendations.


<table>
    <tr>
     <td><b>Veteran Need</b></td>
      <td><b>Behaviors & Pain Points</b></td>
    </tr>
    <tr>
        <td><b>Navigating the system & staying informed:</b><br>  
Veterans want to understand their Claim, what VA is doing with it, and what VA needs from them so they can keep the process moving. </td>
        <td>

* Veterans check the status of their claims frequently and through multiple channels to get the most up to date information.
* Once a claim is filed and a decision is given, Veterans may stop needing claims features as urgently, depending on the nature of their claim. 
* Veterans don’t necessarily know in a timely manner when something has changed or is needed from them with their claim or appeal
* Veterans are not sure what VA needs from them to keep the claims process moving along.
* Veterans find information in the CST to be vague and lacking specificity leading them to feel uncertain.
* The VA mobile app sometimes shows information that’s more of a dead-end than helpful.
* The VA mobile app displays one-size fits all error messages that are sometimes inaccurate when it can’t display Claims information due to the profile failing or low connectivity.
        </td>
    </tr>
    <tr>
        <td><b>Seeking a sense of security:</b><br>
Veterans are the glue holding together disparate pieces of a large and confusing system that they can’t always rely on to deliver the benefits they’ve earned. </td>
        <td>

* Veterans check multiple sources for information because they do not trust the accuracy of the Claim information displayed [across digital tools].    
   * The various sources of information at VA sometimes have different statuses for the same claim, creating confusion for the Veteran.  
   * Veterans don’t trust the accuracy of the Claim information displayed in the mobile app specifically because it differs from other sources.  
* Veterans often call VA or VSO staff or visit in person to get the detail they want, as typically the call-center representatives can't access that information.
* Veterans are not sure if a claim is truly being worked on.
* Keeping track of relevant claims is difficult for Veterans who have more claims with greater claim complexity.
* A perceived lack of transparency and poor communication results in a mismatch of Veteran expectations of the process and their actual experiences.
        </td>
    </tr>
    
<tr>
        <td><b>Communication & connecting:</b><br>
Veterans trust and want to connect one-on-one with individuals who know the details of their specific case to help them. </td>
        <td>

* Veterans want to talk with VSOs, Claims Staff, and other VA service providers when they have questions or need help.
* They seek out in-person discussions about their case to get questions answered (more quickly and thoroughly than online).
* Veterans also rely on their peers, friends and family for guidance in navigating the benefits process.
* Tracking info from VA on the phone takes time—participants said claims support chat in an app would save time and bring more transparency to a frustrating process.
* Call center representatives can't access the information needed to answer questions, so Veterans often call VA or VSO staff or visit in person to get the detail they want.
* Word-of-mouth information from other Veterans can be a source of misinformation, including bad advice, and conspiracy theories.
        </td>
    </tr>
</table>


## Detailed Summary of Insight themes related to Claims (potentially addressable in the mobile app)


### Veteran behaviors & motivations (general - user context)


* ##### THEME: UNDERSTANDING & STAYING INFORMED

  * **Insight:** Veterans **want to understand their Claim, what VA is doing with it, and what VA needs from them** so they can keep the process moving.<sub>12,13</sub>
  * **Motivation:** Veterans **care about anything they have in flight**, whether that is education or other benefits (like Claims). They want to know **what’s going on now**, **how long it will take**, what they **need to do**, and what **happens next**.<sub>12,13</sub>
  * **Behaviors:** 
      * Veterans **check the status of their benefits claims frequently** and through multiple channels in the **hope that they can find better or more up-to-date information**.<sub>12</sub>
      * **Once a claim is filed and a decision is given, Veterans may stop needing claims features as urgently**, depending on the nature of their claim. <sub>12</sub>


* ##### THEME: SEEKING A SENSE OF SECURITY

  * **Insight: Veterans are the glue** holding together disparate pieces of a large and confusing system that they **can’t always rely on** to deliver the benefits they’ve earned.<sub>12</sub>
  * **Motivation: Veterans want to feel like they’re in control** [of any process], but the VA **benefits process is siloed** and makes Veterans **feel like they’re not in control**.<sub>12</sub>
  * **Behaviors:**
      * **Veterans check multiple sources** for the most up to date Claims status information **because they don’t trust the accuracy of the claim status** they see on VA digital tools. <sub>12</sub>
      * Veterans often **call VA or VSO staff or visit in person** **to get the detail they want**, as typically the call-center representatives can't access that information.<sub>12,13</sub>


* ##### THEME: CONNECTING & COMMUNICATION

  * **Insight:** Veterans value empathy and **communication** (especially **one-on-one connections**).<sub>12,13</sub>
  * **Motivation:** Veterans **trust** **and want to connect one-on-one** with individuals who **know the details of their specific case** to help them.<sub>12,13</sub>
  * **Behaviors:**
      * They want to talk with VSOs, Claims Staff, and other VA service providers when they have **questions or need help**.<sub>12,13</sub>
      * They **seek out in-person discussions** about their case **to get questions answered** (more quickly and thoroughly than online).<sub>12,13</sub>
      * Veterans also rely on their peers, friends and family for **guidance in navigating the benefits process**.<sub>12,13</sub>


### Veteran pain points


#### Mobile Claims Status Tool, web Claims Status Tool and the Claims process


* ##### THEME: DISTRUST & LACK OF TRANSPARENCY:  
    * **Veterans are not sure if a claim is truly being worked on.**<sub>2,5,10</sub>
        * Some Veterans **have anxiety about the claims process** and **check their claim in the app multiple times a day** to see if their claim status has changed <sub>1,2,5,7</sub> 
        * Veterans **check the status of their claims frequently** and through multiple channels in the **hope that they can find better or more up-to-date information**.<sub>9</sub>
        * Veterans **do not know where they are in the claims process**—Timeline for benefits decision not explained, back & forth status is confusing.<sub>9,13</sub>
        * The claims process isn’t linear (and **[seeing a status go “backwards” caused anger for users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#dominos-pizza-trackerwhy-not)**).<sub>5</sub>
    * Veterans **feel ‘in the dark’** during their benefits journey.<sub>12</sub>
        * They don't know what VA is doing, what VA needs from them, or how to get help.<sub>12</sub>
        * From application to decision, they don't understand the claim timeline, their progress, or what decisions mean.<sub>12</sub>
    * Veterans find **information in the CST [on VA.gov] to be vague and lacking specificity leading them to feel uncertain**.<sub>4</sub>
    * **A perceived lack of transparency and poor communication results in a mismatch of Veteran expectations of the process and their actual experiences.** <sub>7,13</sub>
        * This leaves Veterans feeling frustrated and lost during the process and ultimately disappointed when receiving their rating decision. **Veterans often feel that the lack of transparency is intentional on the part of VA**. <sub>7</sub>
* ##### THEME: INACCURATE INFORMATION:  
    * **Veterans do not trust the accuracy of the Claim information displayed [across digital tools].**<sub>7,8,12</sub>
        * The various **sources of information at VA sometimes have different statuses** for the same claim, creating confusion for the Veteran. <sub>7,8</sub>
        * Veterans who located the claims status tool on **VA.gov** were frustrated by what they thought were **inaccurate / unchanging statuses**.<sub>8</sub>
        * Veterans **don’t trust the accuracy of the Claim information displayed in the mobile app specifically** because it differs from other sources.<sub>7,11</sub> 
            * Users complain in app store ratings and in Reddit forums about the app being broken after seeing error messages when trying to check their claim status, and in some cases have created folk model explanations as to what’s happening (“[It’s off on the weekends](https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf),” “[Does the VA update their systems during the weekend?](https://www.reddit.com/r/VeteransBenefits/comments/11c1tnr/does_the_va_update_their_systems_during_the/)“)<sub>10</sub> 
    * **The VA mobile app displays one-size fits all error messages that are sometimes inaccurate when it can’t display claims information due to the profile failing or low connectivity.**
        * Claims: “The app can’t be loaded,”<sub> </sub>Disability rating “You do not have a combined disability on record”<sub>3,10</sub>
* ##### THEME: DISEMPOWERMENT:
    * Veterans don’t necessarily know in a timely manner **_<span style="text-decoration:underline;">when something has changed or is needed </span>_** from them with their claim or appeal**.<sub>2,7</sub>
        * Because there are long gaps between signals from VA about the progress of the claim, Veterans check in frequently to ensure things are moving along.<sub>2</sub>
        * Veterans **don’t have a way to quickly see whether an active claim has changed status** (without tapping down into the Claim details each time).
            * **[There is no current method [on VA.gov or in the app] for proactively notifying Veterans of changes to their status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal)**.<sub>2,5</sub>
        * Veterans expressed strong support for **getting notified of decisions as they're made** for each condition on a multi-issue claim -- _including_ for denials.<sub>6</sub>
    * Veterans are not sure **_<span style="text-decoration:underline;">what VA needs from them</span>_** to keep the claims process moving along. <sub>7</sub>
        * Veterans felt that **if they found out about a denial sooner, they could begin working on what they might need to do** to reverse that decision or make other plans.<sub>6</sub>
        * **[Veterans think about claim status in terms of what’s currently being done to the claim, the outcome of the claim, and the items and actions standing in the way of gaining a favorable determination.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md#3-veterans-think-about-claim-status-in-terms-of-whats-currently-being-done-to-the-claim-the-outcome-of-the-claim-and-the-items-and-actions-standing-in-the-way-of-gaining-a-favorable-determination)**<sub> 4</sub>
            * They want to **see** **actionable items and blockers.**
        * The Claims Detail view is most valuable when it shows a **comprehensive view of all actions that need to be taken** if there is anything a Veteran needs to do in order for their claim status to move forward.<sub>1</sub>
        * Veterans sometimes submit the wrong and/or excessive documentation, which further slows down the claims process.<sub>7</sub>
    * **[Keeping track of relevant claims is difficult for Veterans who have more claims with greater claim complexity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md#2-keeping-track-of-relevant-claims-is-difficult-for-veterans-who-have-more-claims-with-greater-claim-complexity)**.<sub>4</sub>
    * * It's **difficult for Veterans to identify what's active or relevant in long lists** of claims and appeals.<sub>4</sub>
    * **Veterans don’t know how to get help:** When Veterans have questions throughout the claims process, there is no guidance from VA as to where they can receive help beyond the 1-800 number. **Finding the right person at the VA can be complicated and confusing**.<sub>12</sub>
    * **The VA mobile app sometimes shows information that’s more of a dead-end than helpful.**
        * “...there is very little information you can actually view.”<sub>11</sub>
        * Example: Showing name of their representative for VA claims but offering no way to contact them. “Why are you going to show me information but I can’t act on it?”
    * **Uploading a file to a claim was… not cited as a top priority by any participants in co-design**.
        * [Uploading a file to a claim in the mobile app was perceived as somewhat useful and most useful to send in a few files only, not a lot of files](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#uploading-a-file-to-a-claim-is-somewhat-useful-and-its-most-useful-to-send-in-a-few-files-only-not-a-lot-of-files).<sub>1</sub>
        * Although this feature did not rise to the top in co-design, **it… was seen as a time saver**, especially a time saver **that** **might save additional trips** to a VA facility for document.
    * Participants said **claims support chat in an app** is useful because it would save time from having to track information from VA via phone and bring more transparency to a frustrating process.<sub>1</sub>


##### Sources:



1. [VA Mobile App Prototype Testing + Co-design Research Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#claims-features-are-highly-useful-checking-a-claims-status-and-direct-access-to-claims-support-through-an-app-are-highly-useful) (2020)
2. [VA Mobile app - Synthesis of Discovery research](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1602260690816/5c852613430ef83a077029a4915974194b18a2c3?sender=u28718b63c8993f515e0b2240) (2020)
3. [VA Mobile app - Sprint 0: Profile fail error handling #4491](https://docs.google.com/document/d/1PhQSuW_cwyVbf-LVO7syg8q7EazKtcOhR-LHXnWkZ4Y/edit) (2023)
4. [VA.gov - CST Initial Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md)</span> (Apr 2023)
5. [VA.gov - Claims Status readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal)
6. [PACT Act / presumptive claims discovery research with veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2022-06-PACT-Act-presumptive-veterans/PACT-Act-research-report.md) (Jul 2022)
7. [VEO: Compensation Final Presentation ](https://drive.google.com/file/d/15WTxuwWOxGTgvvGhzV2EOIUgwrQ4QU2x/view?usp=share_link)pp 12, 16, 18, 20 (2023)
8. [Supplemental Claim Decision Review Discovery - Veterans](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2022-01-Supplemental-Claims-Discovery-Veterans/SC_Veterans_FinalReport.md#key-findings) (2022)
9. [Benefit planning, applications, and claims research - VCRD D5 Research Readout  (Frog)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016) (March 2016)
10. Reddit (2022-present) 
    1. [Looks like the VA removed the est completion date from the app? : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/10sy1z8/looks_like_the_va_removed_the_est_completion_date/)
    2. [It’s off on the weekends : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)
    3. [Does the VA update their systems during the weekend? : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/11c1tnr/does_the_va_update_their_systems_during_the/)
11. [Q1 2023 VA App Store Reviews Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/reporting/App-Stores-Reviews/Q1-2023/Summary.md) (2023)
12. [Review of User Research: VA Mobile App Personalization](https://docs.google.com/presentation/d/1J10VcE7PGN9emVT1vtqO4-5XRYc3Jycm5zJ4QJnc19g/edit#slide=id.p1) (Jul 2022)
13. [Veteran Unmet Needs](https://github.com/department-of-veterans-affairs/VES/tree/master/research/Unmet%20Needs) (May 2023)



## Full findings, by Sources & Studies Reviewed


### Internal sources


### Mobile app team

([va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team)/[products](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products)/va-mobile-app/;  [department-of-veterans-affairs](https://github.com/department-of-veterans-affairs)/[va-mobile-app](https://github.com/department-of-veterans-affairs/va-mobile-app))



#### [**VA Mobile App - Prototype Testing + Co-design Research Summary**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#claims-features-are-highly-useful-checking-a-claims-status-and-direct-access-to-claims-support-through-an-app-are-highly-useful) (2020)
   * [Claims features are highly useful. Checking a claim's status and direct access to claims support through an app are highly useful.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#claims-features-are-highly-useful-checking-a-claims-status-and-direct-access-to-claims-support-through-an-app-are-highly-useful)
      * Participants said keeping tabs on a claim's status in an app is useful because **they frequently check** and would value being able to do it **faster and more easily.**
      * The claims detail view is most valuable when it shows a **comprehensive view of all actions that need to be taken** if there is anything a Veteran needs to do in order for their claim status to move forward
   * **Chatting** with a VA representative in claims
      * Participants said claims **support chat in an app is useful** because it would save time from having to track information from VA via phone and **bring more transparency** to a frustrating process.
   * [Uploading a file to a claim is somewhat useful and it's most useful to send in a few files only, not a lot of files](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#uploading-a-file-to-a-claim-is-somewhat-useful-and-its-most-useful-to-send-in-a-few-files-only-not-a-lot-of-files)
      * **Uploading a file to a claim was… not cited as a top priority by any participants in co-design**. Although this feature did not rise to the top in co-design, **it… was seen as a time saver**, especially a time saver **that** **might save additional trips** to a VA facility for document.
   * **[There’s a desire to see as much transparency as possible with every aspect of the claims features](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#aside-from-these-findings-there-are-two-more-points-worth-mentioning-about-claims)**. The app may want to lean into transparency as much as possible with claims, with things like:
      * Time stamp of the **last time** a claim **status was updated**
      * Time stamp for when a claim detail screen was **last refreshed**
      * **Encouraging** message (e.g. 'You are all caught up, we will notify you as soon as something changes') if the user refreshes the page multiple times in one visit
     * Pending state for any documents uploaded through the app to **clarify that an uploaded file has been received and is being processed**
     * As many **notifications about changes to a claim** that we can provide
   * **[Claims and health features are both useful, but have different usage patterns](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#claims-and-health-features-are-both-useful-but-have-different-usage-patterns)**
      * **Once a claim is filed and a decision is given, Veterans may stop needing claims features as urgently**, depending on the nature of their claim. 
     * For people who were in the midst of a long or frustrating claims process, claims features were highly useful.

#### [**VA Mobile app - Synthesis of Discovery research**](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1602260690816/5c852613430ef83a077029a4915974194b18a2c3?sender=u28718b63c8993f515e0b2240) (May 2020) 
* **Veterans are not sure if a claim is truly being worked on.**
    * Some Veterans have anxiety about the claims process moving forward, and are checking their claim in the mobile app multiple times a day to see if their claim status has changed—[there is no current method for proactively notifying Veterans of changes to their status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal)<sub>.</sub>
* **Veterans don’t necessarily know in a timely manner when something has changed or is needed with their claim or appeal.**
    * Because there are long real signals from VA about the progress of the claim, **Veterans check the Mobile app frequently for changes**.

#### [**VA Mobile app - Sprint 0: Profile fail error handling #4491**](https://docs.google.com/document/d/1PhQSuW_cwyVbf-LVO7syg8q7EazKtcOhR-LHXnWkZ4Y/edit)
   * **The VA mobile app displays one-size fits all error messages that are sometimes inaccurate when it can’t display claims information due to the profile failing or low connectivity.**
      * Claims: “The app can’t be loaded,”<sub> </sub>Disability rating “You do not have a combined disability on record”

#### [**Review of User Research: VA Mobile App Personalization**](https://docs.google.com/presentation/d/1J10VcE7PGN9emVT1vtqO4-5XRYc3Jycm5zJ4QJnc19g/edit#slide=id.p1) (Jul 2022)
* **Insight:** Veterans **want to understand their benefits and how to access them, what VA is doing & needs from them.**
   * **Motivations & Behaviors**
       * Veterans **care about anything they have in flight**, whether that is education or other benefits. 
           * They **want to know where they are in the claims process** —Timeline for benefits decision not explained, back & forth status is confusing.
           * They want to know **what’s going on now**, how long it will take, and what happens next.
           * Veterans **check the status of their benefits claims frequently** and through multiple channels in the **hope that they can find better or more up-to-date information**.
           * Veterans **often call VA or VSO staff or visit in person to get the detail they want**, as typically the call-center representatives can't access that information.
   * **Pain points**
      * **Veterans** **feel ‘in the dark’ during their benefits journey.**
          * They don't know **what VA is doing**, **what VA needs from them**, or **how to get help.**
          * From application to decision, **they don't understand the claim timeline**, **their progress,** or what decisions mean.
          * **Veterans don’t know how to get help:** When Veterans have questions throughout the claims process, there is **no guidance from VA as to where they can receive help beyond the 1-800 number. Finding the right person** at the VA can be **complicated and confusing.**

* **Insight:** **Veterans are the glue** holding together disparate pieces of a large and confusing system that they can’t always rely on to deliver the benefits they’ve earned.
   * **Motivations**
       * **Veterans want to feel like they’re in control**[of any process], but the VA benefits process makes Veterans feel like they’re not in control.
   * **Pain points & Behaviors**
       * Because of the **the fragmented experience** across VA (and between MHV, eBenefits, and VA.gov), Veterans have to **connect the dots between pieces** of the **system on their own**.
       * **Veterans** **don’t trust the accuracy of the claim status** they see on eBenefits.


* **Insight:** Veterans **value empathy and communication**. 
   * **Motivations & Behaviors**
       * Veterans **trust and want to connect one-on-one with individuals** who know the **details of their specific case** to help them.
           * They **want to talk with VSOs, Claims Staff,** and other **VA service providers** when they have questions or need help.
           * They seek out **in-person discussions** about their case **to get questions answered** (more quickly and thoroughly than online).
           * Veterans also **rely on their peers, friends and family for guidance** in navigating the benefits process. 
           * Veterans use **social media and online communities** to keep in touch with others going through the process, to **learn about shortcuts** or alternative ways of getting things done, and to receive **updates**.
   * **Pain points**
     * Veterans **often call VA or VSO staff or visit in person to get the detail they want**, as typically the call-center representatives can't access that information. 


### VA.gov team ([va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5)/[products](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products)/[claim-appeal-status](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status)/[claims-status](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status)/)



* [VA.gov Claim and Appeal Status Tool readme](https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status) (2022) 
* [va.gov-team/products/claim-appeal-status/research/](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/research)
#### [VA.gov - CST Initial Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md) (Apr 2023)
   * **[Keeping track of relevant claims is difficult for Veterans who have more claims with greater claim complexity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md#2-keeping-track-of-relevant-claims-is-difficult-for-veterans-who-have-more-claims-with-greater-claim-complexity)**.
     * It's **difficult to identify what's active or relevant in long lists** of claims and appeals.
   * **[Veterans think about claim status in terms of what’s currently being done to the claim, the outcome of the claim, and the items and actions standing in the way of gaining a favorable determination.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-03-Initial-Decisions-CST/research-findings.md#3-veterans-think-about-claim-status-in-terms-of-whats-currently-being-done-to-the-claim-the-outcome-of-the-claim-and-the-items-and-actions-standing-in-the-way-of-gaining-a-favorable-determination)**
     * They want to **see** **actionable items and blockers**
   * Veterans find **information in the CST [on VA.gov] to be vague and lacking specificity leading them to feel uncertain**. Veterans wish to know
     * **What is being requested**
     * **Who** the request pertains to
     * **What information has been provided**
     * Whether or not the request has **been accepted**
#### [VA.gov - Claims Status readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#claims-status) (2020)

* **Veterans are not sure if a claim is truly being worked on.**
    * Some Veterans **have anxiety about the claims process** moving forward, and are **checking their claim in the app multiple times a day** to see if their claim status has changed—[there is no current method for proactively notifying Veterans of changes to their status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#has-there-been-any-past-user-research-about-sending-notifications-to-users-when-there-is-a-change-to-the-status-of-a-claim-or-appeal)<sub>.</sub> 
    * The claims process isn’t linear, so it’s difficult to communicate progress via a tracker (and [seeing a status go “backwards” caused anger for users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/claim-appeal-status/claims-status/readme.md#dominos-pizza-trackerwhy-not)). 


### Virtual Regional Office and Benefits Portfolio team (cuts across products) ([va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team)/[products](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products)/[disability](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability)/[abd-vro](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/abd-vro)/)



#### [PACT Act / presumptive claims discovery research with Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2022-06-PACT-Act-presumptive-veterans/PACT-Act-research-report.md) (Jul 2022)
   * Veterans expressed strong support for **getting notified of decisions as they're made** for each condition on a multi-issue claim -- _including_ for denials. Veterans felt that **if they found out about a denial sooner, they could begin working on what they might need to do** to reverse that decision or make other plans.


### Veterans Experience Office (VEO) work ([va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team)/?)

[VEO: Disability Compensation - Journey Map](https://drive.google.com/file/d/1ZX2CqVHD6p7kGzZvoIqzHEstoLt1n0Yf/view?usp=share_link) (2023)

[VEO: Disability Compensation - Service Blueprint with Exec Summary](https://drive.google.com/file/d/1uiP5DHjyB72wY6YEsCE2h70j4o_zodej/view?usp=share_link) (2023)



#### [VEO: Compensation - Final Presentation](https://drive.google.com/file/d/15WTxuwWOxGTgvvGhzV2EOIUgwrQ4QU2x/view?usp=share_link) pp 12, 16, 18, 20 (Jan 2023)
* **Veterans do not trust the accuracy of the Claim information displayed.**
    * The various **sources of information at VA sometimes have different statuses** for the same claim, creating confusion for the Veteran.
    * **A perceived lack of transparency and poor communication results in a mismatch of Veteran expectations of the process and their actual experiences.**
        * This leaves Veterans feeling frustrated and lost during the process and ultimately disappointed when receiving their rating decision. **Veterans often feel that the lack of transparency is intentional on the part of VA**.
    * **Veterans are not sure when/what VA needs from them to keep the claims process moving along.**
        * Veterans sometimes submit the wrong and/or excessive documentation, which further slows down the claims process.
    * **Veterans don’t trust the accuracy of the Claim information displayed because it differs from other sources.**
    * The VA mobile app is sometimes displaying **different status information** than other VA digital resources.

### Veterans Experience Office (VES) work [(department-of-veterans-affairs/VES/)](https://github.com/department-of-veterans-affairs/VES/)
#### [Veteran Unmet Needs](https://github.com/department-of-veterans-affairs/VES/tree/master/research/Unmet%20Needs) (May 2023)
* [Apply for Benefits](https://github.com/department-of-veterans-affairs/VES/blob/master/research/Unmet%20Needs/Apply%20for%20benefits/Apply%20for%20Benefits-%20Full%20Report.md)
   * 110 days - Average time for VA to process disability claims *“Respondent Burden” is the OMB’s estimate for the time it takes to complete a form.
   * **Pain points:**
     * **Incomplete information and lack of communication**: The average wait time to receive an initial disability claim decision is 110 days. During that time, Veterans are **unaware of the status of their application, what additional steps they need to take, and the timeline for receiving a decision**.
       >“Tell me: what's happening, what's next, what's needed — no jargon.” - Veteran. 
     * Veterans say the **onus is on them** to develop an understanding of the VA process and be persistent in seeking out this information. This might mean **repeatedly calling VA and VSOs until VA has information to share**, or navigating through phone trees and websites to **find the right place to go to **understand the status of their application**.
* [Dispute Benefits Decisions](https://github.com/department-of-veterans-affairs/VES/blob/master/research/Unmet%20Needs/Dispute%20benefits%20decisions/Dispute%20benefits%20decisions%20-%20Full%20Report.md)
   * **Pain points:**
     * Difficulty choosing a decision review lane: Veterans are not experts on the process and **expect VA to guide them to the best outcome**. Because the options are difficult to understand, Veterans often look to experts like attorneys, VSOs, and other Veterans for **one-on-one information and guidance about their specific case**. Unfortunately, word-of-mouth information from other Veterans can be a source of misinformation, including bad advice, and conspiracy theories.
       >“Person-to-person interactions give me answers.” - Veteran.  
       >“The appeals submission process after I got my [initial] decision was unclear. I had to ask a friend what my options were.” - Veteran. 

### Lighthouse team work  ([department-of-veterans-affairs](https://github.com/department-of-veterans-affairs)/[lighthouse-ux](https://github.com/department-of-veterans-affairs/lighthouse-ux))



#### [Supplemental Claim Decision Review Discovery - Veterans](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2022-01-Supplemental-Claims-Discovery-Veterans/SC_Veterans_FinalReport.md) (2022)
* **Veterans do not trust the accuracy of the Claim information displayed.**
    * Veterans who located the claims status tool on VA.gov were frustrated by what they thought were **inaccurate / unchanging statuses**. 
    * The various **sources of information at VA sometimes have different statuses** for the same claim, creating confusion for the Veteran.


[Supplemental Claim Decision Review Discovery - Administrators](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2021-09-Supplemental-Claims-Discovery-Administrators/SC_VAAdmin_FinalReport.md)(2022)

[Supplemental Claim Decision Review Discovery - VSOs](https://github.com/department-of-veterans-affairs/lighthouse-ux/blob/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2021-11-Supplemental-Claims-Discovery-VSOs/SC_VSOs_FinalReport.md) (2022)


### Frog team work


#### [Benefit planning, applications, and claims research - VCRD D5 Research Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016) [ (Frog)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016) (March 2016)

   ##### Recommendations related to Claims in the mobile app:

   1. **Tailored content:** **Serve up** benefits **information** that is **personal and relevant to the Veteran** based on what is known about **each individual.** (p92)
      1. Veterans **don't have time to search around** online for what they might need to know. Often Veterans don't know the right terminology or questions to ask.
      2. **Notify Veterans of important updates** like upcoming appointments, job opportunities, pending payments and claims status changes.
      3. **Show the information** that is **most relevant** or **used the most** by them.
   2. **Snappy tasks:** Enable Veterans to get **snapshot views** and **take common actions quickly.** (p93)
      1. Veterans want to **quickly check on**, download, **update** and schedule any VA service in **one digital place**– often before running out the door.
      2. **see a quick overview, including status,** of all benefits, **claims and appeals they are actively engaged in**

##### Generative Research & Co-creation Finding (Build your dashboard activity) 

1. **Veterans** (p85):  
First and foremost, Veterans value a system that allows them to **manage their claims and documents** to the best of their ability. This management includes **timely notifications**, **shortcuts to streamline frequent tasks**, and **secure messaging** to receive answers on demand. 
2. **Staff** (p86):    
From a **self-service perspective**, staff members felt that Veterans would like profile information, service history, payment information, **an actionable to-do list**, and a flexible method to search the site.
3. **VSO reps** (p87):
Claims dashboard should include useful information like relevant profile information, service history, and **timely notifications**, it would also be beneficial for Veterans to have access to My HealtheVet features like secure messaging, payments, and prescription info.

##### Foundational Research & Findings

1. From application to decision, **Veterans feel in the dark**. They don't understand the claim **timeline**, their **progress**, or **what decisions mean.**(p58)  
   *  Veterans **do not know where they are in the claims process** —Timeline for benefits decision not explained, back & forth status is confusing.
   *  VE Research Finding 2 (p58, 61): Veterans want three primary things no matter their claim type, separation date, personal story, personal disability etc: 
      *  They want to know **what’s going on now**, how long it will take, and what happens next.
2. Veterans **don't know what VA is doing** or **what VA needs from them** (p61).
   *  Veterans **check the status of their claims frequently** and through multiple channels in the **hope that they can find better or more up-to-date information**.
   *  Users **don’t trust the accuracy of the claim status** they see on eBenefits.


### External sources


### Reddit 
#### r/VeteransBenefits (2022-present):

* [Looks like the VA removed the est completion date from the app? : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/10sy1z8/looks_like_the_va_removed_the_est_completion_date/)
* [It’s off on the weekends : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)
* [Does the VA update their systems during the weekend? : r/VeteransBenefits/VA.gov/VA App](https://www.reddit.com/r/VeteransBenefits/comments/11c1tnr/does_the_va_update_their_systems_during_the/)
    * **Veterans do not trust the accuracy of the Claim information displayed.**
        * Veterans who located the claims status tool on VA.gov were frustrated by what they thought were **inaccurate / unchanging statuses**.
    * **Veterans don’t trust the accuracy of the Claim information displayed because it differs from other sources.**
        * Users complain in app store ratings and in Reddit forums about the app being broken after seeing error messages when trying to check their claim  status, and in some cases have created folk model explanations as to what’s happening (“[It’s off on the weekends](https://www.reddit.com/r/VeteransBenefits/comments/zpazpp/va_mobile_app/?utm_source=share&utm_medium=ios_app&utm_name=iossmf),” “[Does the VA update their systems during the weekend?](https://www.reddit.com/r/VeteransBenefits/comments/11c1tnr/does_the_va_update_their_systems_during_the/)“).


### App & Play Store Reviews
#### [Q1 2023 VA App Store Reviews Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/reporting/App-Stores-Reviews/Q1-2023/Summary.md)

* 5% of reviews (26) mention Claims directly, and are mixed:
    * "Great App to keep you up to date with your claims."
    * "This app is useless. The **information about claims doesn't match what's on the actual website**. Not only that, but there is **very little information you can actually view**. HORRIBLE. Absolutely horrible. Matches the rest of the VA."
