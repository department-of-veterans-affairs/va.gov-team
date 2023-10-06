<h2>Pre-Needs Burial Claims </h2>


<h2>Product Management Product Brief</h2>


Sprint 0 

July 2023

<h3>**Problem Definition**</h3>


Currently eligible Veterans engaging with the VA form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) do not have a way to find, track and get statuses in the VA Flagship App. 

This means the Veterans can only go through Va.gov to access this information.  

<h3>**Background & History**</h3>


In June 2017, VA launched VA form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) on Vets.gov.  Vets.gov later transitioned to Va.Gov which currently enables Veterans to discover, apply for, track and manage this claim. 

As of today, current focus has only been on maintaining this feature. No planned work is currently scheduled. However all Burial products are expected to be shifted to a new team that is being stood up which will likely change current focus and future work. 

Pre-need decision letter is not needed for a service member that is on active duty. 

Pre-Needs Burial Claims are not currently in the claims status tool, only burial claims are in the claims too. 

<h3>**Solution & Value**</h3>


Enable Veterans to see the status of their Pre-Needs Burial Claim  VA form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) in the VA Flagship app. 

<h3>**Opportunity and Impact**</h3>


[Based on Pre-Need Form Analytics March 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/discovery/Pre-Need_Analytics_Mar2023.pdf)



* Burials and Memorials rank #28 out of all other Va.gov content for 375k pageviews in Jan 2023 - 75k were specifically for pre-needs 
* 30% Submission Success Rate between 2020 - 2022 (falls in the middle compared to other Va.Gov benefit forms). 
* ~52% of traffic for Pre-need comes from organic search on VA.gov 
* Age demographics 79.4% are between 35 years + ; ~42% are 55 years +
* Jan 2023 pageview by device
    * 76% - Desktop
    * 21% - Mobile
    * 3% table 

<h3>**Who Will Use the Product**</h3>


VA Flagship App Veterans who meet the [eligibility ](https://www.va.gov/burials-memorials/eligibility/)for burial in a VA national cemetery (135 national cemeteries in 40 states)  and have submitted the form. Users may include the spouse / dependent children of a service member or Veteran or the adult dependent child of a Veteran. 

<h3>**Veteran Experience**</h3>


**Overview of the Veteran experience requesting pre-need decision letter  **



* Step 1: Find out if you are eligible. 
* Step 2: Choose the VA national cemetery where you’d prefer to be buried.
* Step 3: Gather the supporting documents and information you’ll need to fill out the application.
* Step 4: Be sure to fill out an application for each person requesting a pre-need eligibility determination.
* Step 5: Submit application
* Step 6: Claim reviewed by VA 
* Step 7: Claim closed 
    * If they qualify 
        * Veteran will receive a pre-need decision letter, benefits information sheet, brochure, and copy of supporting documents submitted 
    * If they do not qualify 
        * Veteran will receive a denial letter with an explanation and information on their rights to appeal or request another review and how to proceed [Form 20-0998](https://www.va.gov/find-forms/about-form-20-0998/)

**Overview of the Veteran experience **once Veteran has qualified for pre-need burial eligibility



* Keep the letter in a safe place and use information when coordinating their burial wishes 
* They also qualify for burial benefits 
    * Opening / closing of the grave
    * Burial liner provided by the government
    * Headstone / market provided by the government
    * Ongoing care of the gravesite 
    * Veteran, surviving spouse, or other family members may also qualify for survivor benefits 
* Talk with family members or authorized representatives about burial wishes and provide this documentation 
* Time of need - Veteran has passed and burial is needed(not Veteran facing)
    * Person arranging burial to call the pre-planned funeral director or the National Cemetery Scheduling office to request burial - pre-need decision letter will be needed at that time 
        * If they do not have pre-need decision letter then work with funeral director to complete [steps ](https://www.va.gov/burials-memorials/schedule-a-burial/)

<h3>**Possible Product Feature(s) and Attributes**</h3>


Product features for form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) may include: :



* Discovery - ability to find their Pre-need claim in the flagship app 
* Get Claim Updates - ability to tap their pre-need claim in the mobile app to get an update on their claim  status 
* View and download letter - ability to save a digital copy for storage and share it with necessary parties like family member, pre-planning funeral home director 
* [Provide next steps after applying for eligibilit](https://www.va.gov/burials-memorials/pre-need-eligibility/after-you-apply/)y - guide and educate Veteran on what they can do next  
* Provide next steps if their pre-needs burial was denied 

<h3>**Product Risks **</h3>


This section should detail any risks that were identified during product discovery and how those risks will be mitigated during product development and/or testing phases.



* A new team is being stood up and taking on all burial products - thus suspect some changes from their team that could impact integration / prioritization 
* Pre-need API is owned by Benefits team but it is moving to another team (not sure which team this is at this time) 
* Pre-need burial claims are not part of the claim status tool ; suspect new integration will be needed
* Non-Veterans unable to access claim  information in the mobile app 

<h3>**Assumptions**</h3>




* Mobile app is only going to display information provided by the Benefit APIs to the Veteran as it will not perform any calculations or perform eligibility review 
* Mobile app will not enable the submission of form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery)
* No new notifications will be built, as of 2017 all notifications from pre-needs go to the Veteran via paper mail 
* Only focused on Pre-Burial Form-40-10007 claim
* Veterans want and find value in just finding, tracking and getting their status of already submitted Form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) in the VA flagship app. 

<h3>**Closed questions**</h3>




* Are pre-need burial claims currently in the claim status tool?
    *  They are not 
* Integration difficulty - [BE Discovery](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6323)
    *  completed given not part of existing claim tool integration means new integration is required and deemed straightforward

<h3>**Open questions**</h3>




* When is the new VA team handling burial related work being set up? 
* What is the priority of the VA new team handling burial related work ?
* Does the new team plan to move this to the claims tool?
* What is the mobile strategy with claims? Require claims tool integration or okay with one-off integrations for individual claim inclusion? 
* How to handle non-Veteran users' needs on this claim type? 

<h3>**Success Metrics**</h3>


Align with how other claims are measured and tracked today and do something similar. Other metrics may be added depending on functionality of this feature in the flagship app. 



* How many times a Veteran views Pre-Burial Needs Active Claim
* How many times a Veteran views Pre-Burial Needs Closed Claim
* Total amount of time Veteran viewed the details of Pre-Nurial Needs Claim 
* Total amount of time that passes between a change in step and a Veteran viewing that change

<h3>**Documentation:**</h3>




* [Va.gov Pre-Need Burial Webpage](https://www.va.gov/burials-memorials/pre-need-eligibility/)
    * Not an automatic search option 
* [Burials Memorial Github Page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials)
* [Form-40-10007](https://www.va.gov/find-forms/about-form-40-10007/#:~:text=Use%20VA%20Form%2040%2D10007,a%20Veteran%20or%20service%20member.)
* [Explore VA Memorial Benefits Video](https://www.youtube.com/watch?v=c3hsIEj6Hpo)
* [Pre-Need Analytics March 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/discovery/Pre-Need_Analytics_Mar2023.pdf)

<h3>**Author Recommendation 9/14:**</h3>




* At this time, mobile should not pursue 

<h3>**Rationale**:</h3>




* Pre-needs burial claims are not part of the claims tool
    * We would have to see what new integration is needed just to display this claim
        * Not sure if its best practice to do new integrations for 1 offs
* They were in the progress of setting up a new team to focus on this and other work
    * Historically this was only being sustained 
    * Not sure the focus / priorities for the new team but suspect that would murky things up on our side
        * Team may not yet be up to speed
* Users of this claim expand into spouse / dependent children when the Veteran passes - mobile app doesn't support non Veteran users

<h3>**Other considerations:**</h3>




* VA sends a pre-need decision letter - maybe we can include this in the existing Letters feature
    * Also sends a denial letter regarding why and includes appeal process
* Could work with the new team to get Claims added to the Claims tool
    * Maybe this is something mobile can push - we will display what is already in the claims tool vs one off integrations
    * Maybe we do exploratory work as to what is in the Claims Tool now but not yet supported by mobile
* Could have POs meet with the new team to discuss future options to see if they want to add mobile to their future roadmap

<h3>**Presentation 9/14 takeaways:**</h3>




* What does simple implementation looks like (Adam)
    * Adam to check in with Andrew Herzbery to get an estimate
* Reach out to existing contacts to learn about the new team (Adam and Rachel)
    * Rachel to follow-up with her contacts
    * Adam to reach out to Jacob Worrell
