<!-----

You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see useful information and inline alerts.
* ERRORs: 2
* WARNINGs: 0
* ALERTS: 3

Conversion time: 0.846 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β44
* Tue Feb 18 2025 10:47:55 GMT-0800 (PST)
* Source doc: Untitled document
* Tables are currently converted to HTML tables.

ERROR:
undefined internal link to this URL: "https://docs.google.com/document/d/18aNfTYvRFwODubAR2QfiP3FGJ8Hmnj2-9e92ISy8m1M/edit#heading=h.i3v65itiwpyp".link text: 202411XX Pre-Needs Burial Levelset Meeting
?Did you generate a TOC with blue links?


ERROR:
undefined internal link to this URL: "https://docs.google.com/document/d/1hNr1CvN9s9Huh836F7PpMTqmCDa8uXxNpMrSuSGknas/edit#heading=h.hcip15lfb3xn".link text: Lessons Learned: Pre-Need Burial Claims
?Did you generate a TOC with blue links?

* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 2; WARNINGs: 0; ALERTS: 3.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# Pre-Need Burial Product Brief


## Executive Summary

The MFS team needs to finalize the work of implementing a pre-need burial claim application on the Flagship Mobile app. The goal is to streamline this claim application for Veterans into an intuitive and easy-to-use section of the current Flagship Mobile App. Some of the information below,has been appended from the Flagship Mobile team’s brief, [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md). The purpose of this document is to define roles, scope of work, and milestones to implement the pre-need burial on the VA Mobile App. 


## Background and Rationale

_Taken from [VA.gov Implementation Brief:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/discovery/discoveryprojectbrief.md)_ 



1. Allow veterans to apply online for pre-need burial enrollment instead of mailing or faxing their applications.
2. Provide some basic validation to avoid simple mistakes (like missing digit on SSN) to speed up processing for veterans.
3. Automatically submit application data into EOAS (Eligibility Office Automation System) instead of that office manually inputting data.

_Taken from the [Flagship Mobile Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md):_



1. As of July, 2023, current focus has only been on maintaining the VA form-40-10007, which was implemented in June, 2017 and enables Veterans to discover, apply for, track and manage this claim. 

_From Spike ticket [#82](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/82)/Engineering:_



* No Front End Work was completed as a part of the effort.
* The API has an implementation that essentially mirrors what goes on in the standard pre- need burial controllers for va.gov.
    * [Mobile Controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/mobile/app/controllers/mobile/v0/pre_need_burial_controller.rb)
    * [va.gov Controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/preneeds/burial_forms_controller.rb)
* It’s worth noting that the mobile controller doesn't really do anything with confirmation emails or anything like that, so there are some slight differences.
* Per conversation between Kenny Santiago (from one of the main vets-api teams) and Andrew Herzberg (a dev from the flagship team) that happened in slack: Santiago says they had just picked up the API as part of their portfolio and they needed to do some research to see if there were additional options that we were currently exposing via the API.



   [conversation screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/mobile/images/pre-need_background_conversation.png)




* We should follow up with whatever team currently owns that API and figure out if that research was ever done and/or if it could be. Looking at the code for the va.gov controller, it doesn't look like much has changed significantly since then, so the answers could be: "We haven't done that research", or "We did it and there isn't a downstream API to support status checks".


## Goals and Objectives


The goal of this work is to plan and fully implement the Pre-Need Burial Claim VA form-40-10007 so that Veterans can see the status of their claim on the current Mobile platform before the burial is needed.  


## Scope

Preliminary design sketches for the Pre-Need Burial Service on VA.gov are [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/pre-need/design).

Pre-Need Process flow diagrams can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/discovery/Pre-need-Process-Flow-021023.png).

Pre-Need Figma designs for VA.gov can be found [here](https://www.figma.com/design/3aSSS4Exs7kFn17lN9wIM4/Pre-Need---Integration-Prototype?node-id=0-1&t=K1uC6UxGNB3qG4g2-1).

Work has been done on this objective, including significant design, against this effort. [This work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/jun-2017-mvp/vets.gov-pre-need-burial-charter-6.23.17.pdf#:~:text=readme.MD-,discovery,-jun%2D2017%2Dmvp) needs to be revisited with the Office of the Chief Technology Officer (OCTO) Product Owners (POs) to determine compliance with current needs of the POs and the end users. 

The scope of work will be defined in part by research


## Key Deliverables


_Outline the major deliverables, such as new features or enhancements._


## Resource Requirements


<table>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Resource</strong>
   </td>
  </tr>
  <tr>
   <td>VA OCTO PO
   </td>
   <td>Jeff Barnes
   </td>
  </tr>
  <tr>
   <td>VA OCTO Technical Lead
   </td>
   <td>Don McCaughey
   </td>
  </tr>
  <tr>
   <td>VA OCTO UX Lead
   </td>
   <td>Ryan Thurlwell
   </td>
  </tr>
  <tr>
   <td>Oddball Program Manager
   </td>
   <td>Parker Baranowski
   </td>
  </tr>
  <tr>
   <td>Oddball Product Lead
   </td>
   <td>Pete Egan
   </td>
  </tr>
  <tr>
   <td>Oddball Product Manager
   </td>
   <td>Natalie Davied
   </td>
  </tr>
  <tr>
   <td>Oddball Technical Lead
   </td>
   <td>Alex Teal
   </td>
  </tr>
  <tr>
   <td>Oddball UX Lead
   </td>
   <td>Natasha Huckleberry
   </td>
  </tr>
  <tr>
   <td>Oddball Research Lead
   </td>
   <td>Emily DeWan
   </td>
  </tr>
  <tr>
   <td>Oddball Delivery Manager 
   </td>
   <td>Jason DeHaan
   </td>
  </tr>
  <tr>
   <td>Oddball Senior Mobile Engineer
   </td>
   <td>Dave Formanek
   </td>
  </tr>
  <tr>
   <td>Oddball Mobile Engineer
   </td>
   <td>Kim McCaskill
   </td>
  </tr>
  <tr>
   <td>Wilcore Mobile Engineer
   </td>
   <td>Matt Guest
   </td>
  </tr>
  <tr>
   <td>Wilcore Backend Engineer
   </td>
   <td>Michael Harmer
   </td>
  </tr>
</table>



## Dependencies and Assumptions



* (Dependency) The MFS team is dependent on getting any context that is available from the Flagship Mobile team, outside of documentation. 
* (Assumption) Pre-need decision letter is not needed for a service member that is on active duty.
* (Assumption) Pre-Need Burial Claims are not currently in the claims status tool, only burial claims are in the claims too.
* (Assumption) Non-Veterans currently unable to access claim information in the mobile app
* (Assumption, from [Flagship Mobile Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)): Mobile app is only going to display information provided by the Benefit API’s to the Veteran as it will not perform any calculations or perform eligibility review.
* (Assumption, from [Flagship Mobile Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)): Mobile app will not enable the submission of form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery)
* (Assumption, from [Flagship Mobile Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)): No new notifications will be built. As of 2017, all notifications from pre-need go to the Veteran via paper mail.
* (Assumption, from [Flagship Mobile Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)): Only focused on Pre-Burial Form-40-10007 claim.
* (Assumption, from [Flagship Mobile Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)): Veterans want and find value in just finding, tracking and getting their status of already submitted Form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) in the VA flagship app.


## Risks and Mitigation Strategies



* Because there is a new team (Mobile Feature Support - MFS) taking over this work from Flagship Mobile, there may be some changes that could impact integration / prioritization.
* Pre-need API is owned by the Benefits team but it is moving to another team (new team unknown).
* Pre-need burial claims are not part of the claim status tool. We suspect new integration will be needed.
* The MFS team needs to understand the EOAS notification process.


## Key Stakeholders

_Taken from [Flagship Mobile Brief:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)_ 



* VA business owner: Jeff Barnes
* Stakeholders to be involved or interviewed: Include a representative from the contact center and an individual responsible for manually entering forms into EOAS.
* 


## Communication Plan


## All information will be communicated via the OCTO Slack channel [mobile-feature-support-private](https://dsva.slack.com/archives/C07S7TJRK0B).



* Stand-Ups (oddball resources): Held Monday, Tuesday, Wednesday from 1:00 - 1:30 am eastern and Thursdays at 1:30pm eastern. 
* Weekly Engineering sync: Held weekly on Thursdays from 11:30-11:55am eastern.
* Weekly UX sync: Held weekly on Thursdays from 3:30-3:55am eastern.


## Launch Plan


## _Outline the strategy for launching the initiative, including: target launch date and any phased releases, marketing and promotion strategies, user training or onboarding plans, customer support readiness, monitoring and gathering user feedback post-launch._


## Success Criteria

Align with how other claims are measured and tracked today and do something similar. Other metrics may be added depending on functionality of this feature in the flagship app.



* How many times a Veteran views Pre-Burial Needs Active Claim
* How many times a Veteran views Pre-Burial Needs Closed Claim
* Total amount of time Veteran viewed the details of Pre-Burial Need Claim
* Total amount of time that passes between a change in a step and a Veteran viewing that change


## Conclusion


_Summarize the key points and emphasize the initiative's strategic significance._



* Outstanding questions: 
    * Is login required to use this service? (See [original charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/jun-2017-mvp/vets.gov-pre-need-burial-charter-6.23.17.pdf), section 1, bullet #4)
* Lessons learned (about the discovery process)
* Links to key documents (discovery readout, charter, etc.)
    * 

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: undefined internal link (link text: "202411XX Pre-Needs Burial Levelset Meeting"). Did you generate a TOC with blue links? </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

[202411XX Pre-Needs Burial Levelset Meeting](https://docs.google.com/document/d/18aNfTYvRFwODubAR2QfiP3FGJ8Hmnj2-9e92ISy8m1M/edit#heading=h.i3v65itiwpyp)
    * 

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: undefined internal link (link text: "Lessons Learned: Pre-Need Burial Claims"). Did you generate a TOC with blue links? </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

[Lessons Learned: Pre-Need Burial Claims](https://docs.google.com/document/d/1hNr1CvN9s9Huh836F7PpMTqmCDa8uXxNpMrSuSGknas/edit#heading=h.hcip15lfb3xn)
    * [Pre-Need Burial research](https://docs.google.com/document/d/1rJZEgiwS4DG0UbN4D5uWO1kJlz0di7nPveSB3jOu-r4/edit) - Natasha & Emily’s document that contains current process with notes and other questions some have been moved here


## Outstanding Questions



* What is the mobile strategy with claims? Require claims tool integration or okay with one-off integrations for individual claim inclusion?
* How to handle non-Veteran users' needs on this claim type?
* Why are pre-need burial letters only sent via paper mail? 
    * Is it a legal reason?
    * What if they lose the letter? Is it available to download from their VA.gov account?
    * Are Veterans going to be okay with only finding out about this in the mail?
    * Could we show it in the app under Benefits > VA letters and documents?
    * __Answers: __Pre-need burial letters are only sent via paper mail due to technical limitations. If they lose the letter, they would need to reach out to NCA at this point. They are not able to access it on their VA.gov account because NCA does not currently integrate with VA.gov.
* How long does it typically take for the VA to make a decision on a pre-need burial claim?
    * From [Pre-Need Eligibility For Burial In A VA Cemetery | Veterans Affairs](https://www.va.gov/burials-memorials/pre-need-eligibility/), “Note: We’ve received a large number of pre-need eligibility applications, and it’s slowing down our approval process. We’ll let you know when we’ve received your application and how long we think it’ll take to make a decision. We’re sorry for the delay.”
* What notifications do users receive for the pre-need burial form on VA.gov?
    * Per [Figma for VA.gov](https://www.figma.com/design/3aSSS4Exs7kFn17lN9wIM4/Pre-Need---Integration-Prototype?node-id=0-54342&t=DrKc326WdVsCG9Rh-1), there’s a success message design for submission that may differ from what’s currently built (need to verify). It says they’ll receive a confirmation email and will be notified by mail or phone if they need more details.
    * Is an email currently being fired upon submission and does it contain an expected timeframe/what to expect?
        * __Answers:__ VA.gov sends notifications for the following for pre-need burial: __Submitted__,__ in progress__, __approved__, __error__ (first three through IBM automation, latter through VANotify). Submission emails do not currently have an estimated timeframe for a decision.
* If users start a pre-need burial claim on VA.gov, does it show as started somewhere within the UI with a way for them to finish it?
    * __Answers: __Yes, draft applications can be finished within 60 days of starting them
    * Could we surface if a pre-need burial claim has been started but has not yet been submitted? Thinking we could link to VA.gov if we’re not building this process in the app.


## Glossary

EOAS: Eligibility Office Automation System

NCA: National Cemetery Administration

OCTO: Office of the Chief Technology Officer

QA: Quality Assurance

VA: Veteran’s Administration

UX: User Experience
