# UX Discovery: Pre-Need Burial Claims in Mobile App


## Contacts & Slack channels

* [#benefits-management-tools](https://dsva.slack.com/archives/C04KHCT3ZMY) - Mentioned in Sprint 0 Discovery
* [#va-gov-mbs](https://dsva.slack.com/archives/C03QC459M0C) ([thread referencing contacts](https://dsva.slack.com/archives/C03QC459M0C/p1710782217038289))
    * Catherine Hughes, PM
    * Kenny Santiago, tech lead
    * Sathish Kadiersan OIT (gov side lead)
    * Rhonda Jones BTRS
    * Bill Barnes NCA
* Ryan Thurwell, OCTO Design Lead


## Resources

### Flagship mobile

* [Flagship Mobile Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)
* [Flagship Team UX ticket](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/6836)
* [Sprint 0 Discovery Epic](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/6116)


### VA.gov

* [VA.gov Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/discovery/discoveryprojectbrief.md)
* [VA.gov Pre-Need Burial Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/pre-need/research)
* [VA.gov Figma for Pre-Need Integration](https://www.figma.com/design/3aSSS4Exs7kFn17lN9wIM4/Pre-Need---Integration-Prototype?node-id=0-1&t=K1uC6UxGNB3qG4g2-1)
* [Mural with pre-need burial screenshots for VA.gov](https://app.mural.co/t/bahdigitalexperience6902/m/bahdigitalexperience6902/1674680396503/7020ee7494584418ae4fd09eb378770b63585b0a)
* [Pre-need README-2023.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/README-2023.md)


### Public resources

* [Burials and Memorials | ChooseVA](https://www.choose.va.gov/burials-memorials)
* [Pre-Need Eligibility For Burial In A VA Cemetery | Veterans Affairs](https://www.va.gov/burials-memorials/pre-need-eligibility/)
    * From the link above - “**Note:** We’ve received a large number of pre-need eligibility applications, and it’s slowing down our approval process. We’ll let you know when we’ve received your application and how long we think it’ll take to make a decision. We’re sorry for the delay.”
* [After You Apply For An Eligibility Determination | Veterans Affairs](https://www.va.gov/burials-memorials/pre-need-eligibility/after-you-apply/)


## Review of Research

* Assumption: [from Product Brief] *Veterans want and find value in just finding, tracking and getting their status of already submitted Form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) in the VA flagship app.*
    * Is there research supporting this?
    * Can we validate this?
* Questions
    * What information is a Veteran looking for?
    * What are they doing with this information?
    * How do they need to access information?
    * Was PDF uploading issue solved?
    * Has form been tested with users of assistive technology? (assuming mobile form will be similar to web form)
    * Will address validation be used? (was research project done on this?)
* Assumption: [from Product Brief] *No new notifications will be built, as of 2017, all notifications from pre-needs go to the Veteran via paper mail*
    * Why is this only being sent via paper mail? Is it a legal reason?
    * What if they lose the letter? Is it available to download from their VA.gov account?
    * Given the feedback we’ve seen about wanting to be notified about claims statuses, are Veterans going to be okay with only finding out about this in the mail?
    * **Answers:** Pre-need burial letters are only sent via paper mail due to technical limitations. If they lose the letter, they would need to reach out to NCA at this point. They are not able to access it on their VA.gov account because NCA does not currently integrate with VA.gov.
* Opportunity and impact: [from Product Brief] *30% Submission Success Rate between 2020 - 2022 (falls in the middle compared to other Va.Gov benefit forms).*
    * If users start a pre-need burial claim on VA.gov, does it show as started somewhere within the UI with a way for them to finish it? – Assuming yes, but need to test this
    * Could we surface if a pre-need burial claim has been *started* but has not yet been submitted? Thinking we could link to VA.gov if we’re not building this process in the app
* User goal [from Pre need README-2023.md]: Received an eligibility determination within 45 days.
    * What is the current eligibility determination timeframe?
 * Consideration of adding application form into app (via Slack thread by Ryan)
    * there are def other pseudo-forms that will live in the app (eg requesting travel pay reimbursement is technically a form as it has an OMB number, but also things like the check-in flow for health care appointments which is not a "form" proper, but has many form elements). Some already do (profile things are form-like).
   * users shouldn't (and I hypothesis don't) have to care if its really a form or not—they should just be able to complete the task and we help guide them
   * because there are other experiences in the app that do have form elements, we should be thinking about reusability, consistency, documentation, etc
   * one of the rubrics we have for deciding on what tasks should or should not be in the app is repeatability. if this is a one-off form, that might sway our decision



### Current process for Veterans 

[Pulled from Mobile Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)


#### Requesting a pre-need decision letter

1. Find out if you are eligible.
2. Choose the VA national cemetery where you’d prefer to be buried.
3. Gather the supporting documents and information you’ll need to fill out the application.
4. Be sure to fill out an application for each person requesting a pre-need eligibility determination.
5. Submit application
    * [Per Figma for VA.gov](https://www.figma.com/design/3aSSS4Exs7kFn17lN9wIM4/Pre-Need---Integration-Prototype?node-id=0-54342&t=DrKc326WdVsCG9Rh-1), there’s a success message design for submission that may differ from what’s currently built (need to verify). 
        1. **“You’ve submitted your application** \
You’ll receive a confirmation email shortly. We’ll let you know by mail or phone if we need more details.”
    * Does the email confirmation contain how long they can expect it to take to get a decision? **Answer: No, it does not**
    * <img width="1050" alt="pre-needs-burial-email-confirmation" src="https://github.com/user-attachments/assets/f81b4cca-8d0b-4201-b693-b0b4fc794429">

6. Claim reviewed by VA
7. Claim closed
    * **If they qualify:** Veteran will receive a pre-need decision letter, benefits information sheet, brochure, and copy of supporting documents submitted
    * **If they do not qualify:** Veteran will receive a denial letter with an explanation and information on their rights to appeal or request another review and how to proceed [Form 20-0998](https://www.va.gov/find-forms/about-form-20-0998/)


#### Once Veteran has qualified for pre-need burial eligibility

* Keep the letter in a safe place and use information when coordinating their burial wishes
* They also qualify for burial benefits
    * Opening / closing of the grave
    * Burial liner provided by the government
    * Headstone / market provided by the government
    * Ongoing care of the gravesite
    * Veteran, surviving spouse, or other family members may also qualify for survivor benefits
* Talk with family members or authorized representatives about burial wishes and provide this documentation
* Time of need - Veteran has passed and burial is needed (not Veteran facing)
    * Person arranging burial to call the pre-planned funeral director or the National Cemetery Scheduling office to request burial - pre-need decision letter will be needed at that time
        * If they do not have pre-need decision letter then work with funeral director to complete [steps](https://www.va.gov/burials-memorials/schedule-a-burial/)

### Research projects

* [2024-04 Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/research/address-validation-research-april24/address-validation-research-plan-april24.md) [research plan; no results]
* ~~[2024-01 Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/research/address-validation-research-jan24/address-validation-research-plan-jan24.md)~~ [appears to be an earlier version of plan]
   * This research project was not done, and instead was rolled into a later project ([VA-Form 40-1330M Medallions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/medallions/research/2024-10-Apply%20for%20a%20medallion%20in%20a%20private%20cemetery%20to%20products/VA-Form-40-1330M-Medallions-Research-Findings.md))
   * Address validation was familiar and easily understood by most participants
* [2023-08 Integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/pre-need/research/integration-research-aug23)
   * Usability testing for form showed it was mostly easy to use (better than v1)
   * “Relationship to servicemember” may need clarification
   * Uploading documents can be challenging, especially converting to PDF
* [2023-05 Pre-integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/pre-need/research/pre-integration-research-may23)
   * Usability testing for form showed it was mostly easy to use
       * Uploading PDFs could be an issue
       * Choosing location and method of burial could cause pause or confusion
* [2020 Mobile team SME research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/research/ux/SME-research)
   *  This research from 2020 captures key learnings from SME conversations and user research conducted, focusing on VA tools and features. Not all of it is applicable to pre-need burials but still good background to know.
   *  **Claims & Appeals**
      *  **Claims Process**: Veterans feel disconnected and seek more control and transparency in the claims process. An evidence upload feature could expedite the process.
      *  **Appeals**: Include supplemental reviews, higher-level reviews, and board appeals. Combining claims and appeals in the app would simplify user experience.
      *  **Access & Updates**: Veterans need timely notifications and clear insights into claims status to reduce anxiety and frustration.
   *  **Direct Deposit**
      *  Veterans want features for setting up, editing, and tracking direct deposit status. Push notifications for upcoming payments could enhance user satisfaction.
   *  **Appointments**
      *  **Scheduling**: Self-scheduling is currently limited, but there's potential for broader use in the future. Veterans prefer scheduling appointments in advance.
      *  **Technology**: Scattered appointment data and non-centralized systems hinder consistent notifications and updates.
      *  **Notifications**: Issues include insufficiently informative and mistimed appointment notifications. Centralizing data into a unified system (e.g., Cerner) could improve this.
   *  **Facility Locator**
      *  **Usage**: Veterans often use this tool to explore unfamiliar facilities or services. Distance is the primary criterion for searches.
      *  **Challenges**: Users face confusion due to unclear facility types and services, especially in rural areas. The mobile map is less useful compared to desktop versions.
      *  **Recommendations**: Focus the MVP on a single use case, such as finding urgent care or pharmacies for flu shots.
   *  **Profile Features**
      *  Veterans view direct deposit and dependent management as critical profile functionalities. Exploring API options for dependents could streamline this process.
   *  **Next Steps**
      *  Integrate findings into feature development for claims, direct deposit, facility locator, and profile tools.
      *  Collaborate with other teams on notifications, APIs, and data centralization for improved functionality.      
* [2023-05 Mobile team claim status tool research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/ux/claims/research%20review%20-%20claims%20status%20tool.md)
   * The research reviews veterans' behaviors, motivations, and pain points in tracking claims using VA systems, focusing on improving the mobile app's Claims Status Tool.
   * Key goals include helping veterans stay informed, fostering trust in the system, and improving communication channels.
   * Key insights
      * **Veteran needs**
         * Veterans seek clarity on the claims process, including timelines, VA actions, and any required steps from them.
         * They want secure and efficient tools to reduce the frustration of navigating the complex VA system.
      * **Common pain points**
         * **Lack of trust**: Information across VA platforms is inconsistent, leading to confusion and mistrust.
         * **Poor transparency**: Claims progress is unclear, with no proactive notifications about status changes.
         * **Ineffective communication**: Veterans struggle to get detailed case information and rely heavily on one-on-one support or word-of-mouth guidance.
      * **Veteran behaviors**
         * Frequent status checks via multiple platforms due to uncertainty.
         * Dependence on in-person visits or calls for detailed help due to insufficient app features.
   * Recommendations for the mobile app
     * Improve transparency by providing clear and updated claims timelines and detailed status information.
     * Add features for real-time notifications of status changes and actionable items.
     * Enhance communication through integrated chat support and better error handling.   


## Questions

* [For benefits management team (#benefits-management-team)](https://dsva.slack.com/archives/C04KHCT3ZMY/p1732562128787849) - posted 11/25
* [For mobile team (#va-mobile-app)](https://dsva.slack.com/archives/C018V2JCWRJ/p1732562246477259) - posted 11/25
* [For benefits management team (#va-gov-mbs)](https://dsva.slack.com/archives/C03QC459M0C/p1732639077882339) - posted 11/26


## Research Objectives

* Objectives
   * What are the goals of veterans for pre-need burial within the app?
      * What is most useful?
      * How are these items most useful?
   * How do veterans want to find and access relevant items for pre-need burial within the app?
* Scope
   * It's not yet decided if we're building the full pre-need application into the app, so the research plan will be written for that being a possibility. (e.g. potentially adding testing on functionality of application process)
   * Possible options of items to add in app
        * Application (40-10007)
        * Claim status
        * pre-need decision letter, benefits information sheet, brochure, and copy of supporting documents submitted
        * denial letter with an explanation and information on their rights to appeal or request another review and how to proceed Form 20-0998
        * [Next steps](https://www.va.gov/burials-memorials/pre-need-eligibility/after-you-apply/)

