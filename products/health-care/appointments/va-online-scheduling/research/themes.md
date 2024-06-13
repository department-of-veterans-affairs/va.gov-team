# Themes [DRAFT]

A meta-analysis of past research to identify recurring themes. Improvements in these areas would likely have greater impact than others.

Draft date: 01/22/2024 

## Overview

Findings from VAOS and other appointment teams' past studies, grouped into common themes. 

| Theme | Code | Description |
|-------|------|-------------|
| [Login stories](#login-stories) | `login` | Veterans want their health care information to be safe and secure, and as easy for them to access as possible. |
| [Finding the appointments tool](#finding-the-appointments-tool) | `find-appts` | Veterans need to be able to easily find the appointments tool from their notifications, through My VA, My HealtheVet, and everywhere else they start the scheduling journey. |
| [Navigating the appointments tool](#navigating-the-appointments-tool) | `appts-nav` | Veterans want to be able to easily find their upcoming, past, and pending appointments. |
| [Managing appointments](#managing-appointments) | `manage-appts`     |  |
| [Data needs](#data-needs) | `data`                       | Veterans need to understand what an appointment is for, who it's with, and where it is. Often this information is missing from the appointment. |
| [Scheduling stories](#scheduling-stories) | `sched`              |  |
| [Pending appointment stories](#pending-appointment-stories) | `pending-story` | Veterans want to easily find the status of appointments that have been requested but not scheduled yet. And they want them scheduled as soon as possible. |
| [Notifications](#notifications) | `notify` | Findings related to notifications and status updates |
| [Accessibility stories](#accessibility-stories) | `a11y`| Findings related to accessibility | 
| [Dead ends and errors](#dead-ends-and-errors) | `error` | Findings related to system errors or dead end states | 

Requests for specific features from past studies.

Code format: `fr-[feature-code]`

| Feature request                  | Code      | User story | 
|----------------------------------| ------|-------------|
| [Rescheduling](#rescheduling) | `fr-reschedule` | As a Veteran, i can easily change a scheduled appointment's time and date. |


## Relevant findings

### Data needs

> Missing, confusing appointment information makes the lists difficult to use.
> 
> [Appointment List Screenreader Usability Study](./2023-02-appt-list-usability-screenreader/research-findings.md#missing-confusing-appointment-information-makes-the-lists-difficult-to-use), 2023-02

> Participants wanted to be able to easily differentiate between appointments. The most helpful data for this:  
> * 7/9 Type of care
> * 4/9 Clinic name - as it is called at the VA facility.
> * 2/9 Whether the appointment was for, or connected to, labs.
> 
> [MHV and VAOS Appointments List Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/52460de0c1639959c8b933ae75a8a931a36aa0d2/products/health-care/appointments/va-online-scheduling/research/2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#participants-wanted-to-be-able-to-easily-differentiate-appointments-in-vaos), 2022-01

> * The Check-in Experience team's [MVP study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/mvp-usability/research-findings.md#the-appointment-information-shown-was-sufficient-for-participants-to-understand-what-appointment-they-were-checking-in-for)

> Appointments list top data requests:
> * Type of care - 5/8
> * Whether appointment was for labs - 4/8
> * Clinic name - 3/8
> * Clinic location - 3/8
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#appointment-list-and-details-pages-data), 2021-11

> Participants need specific information to identify and prepare for their appointments.
> 
> [Community Care Provider Selection Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/4698f0f19f26bd512cf8dd1cff578c712d7da3eb/products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability/research-findings.md#participants-need-specific-information-to-identify-and-prepare-for-their-appointments), 2020-10

> "...include additional details about each appointment, to include: date, provider, location, type of care, status, type of appointment."  
> 
> [VAOS MVP and Express Care User Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/c9aa60340a018268e81f679627e6dd4ea2513e22/products/health-care/appointments/va-online-scheduling/research/2020-07-vaos-mvp-and-express-care-user-research/research-findings.md#L67), 2020-07

> Clinic names confused participants.
> 
> [MHV and VAOS Appointments List Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/52460de0c1639959c8b933ae75a8a931a36aa0d2/products/health-care/appointments/va-online-scheduling/research/2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#clinic-names-confused-participants), 2022-01

> Participants wanted to easily understand how and where they would attend their appointments.
> 
> [MHV and VAOS Appointments List Discovery](./2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#participants-wanted-to-easily-understand-how-and-where-they-would-attend-their-appointments), 2022-01

> We saw similar findings in these studies:
> * [2021 requests discovery](../2021-11-request-clarification-research/research-findings.md#appointment-list-and-details-pages-data)
> * The Check-in Experience team's [October 2021 Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/phase2-usability/research-findings.md#seeing-a-list-of-all-the-days-appointments-is-valuable-to-veterans)

> Related appointments section. Most participants were pleased to see their related appointments in this context.
> 
> Along with wanting to see instruction for labs and x-rays, participants said it would be helpful to see:
> 
> * 3/8 - appointment type
> * 3/8 - time
> * 3/8 - clinic location
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#related-appointments-section), 2021-11

> Participants expected that all VA clinics should be able to easily access their VA medical information
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#participants-expected-that-all-va-clinics-should-be-able-to-easily-access-their-va-medical-information), 2021-05

### Finding the appointments tool

> Most participants were confused when navigating across multiple portals to find the appointments list.
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#most-participants-were-confused-when-navigating-across-multiple-portals-to-find-the-appointments-list), 2023-11

> Login and navigation pose the biggest challenges to helping veterans schedule online. 
> 
> [MHV Coordinator Feedback Session](./2023-10-coordinator-feedback/research-report.md#login-and-navigation-pose-the-biggest-challenges-to-helping-veterans-schedule-online), 2023-10. Participants were MHV Coordinators.

> Participants were most confused that two different sites list their appointments.
> 
> [MHV and VAOS Appointments List Discovery](./2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#participants-were-most-confused-that-two-different-sites-list-their-appointments), 2022-01

> Some participants were confused to see unfamiliar facilities when navigating from MHV to VAOS
> 
> [MHV and VAOS Appointments List Discovery](./2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#some-participants-were-confused-to-see-unfamiliar-facilities-when-navigating-from-mhv-to-vaos), 2022-01

> Participants easily completed most tasks in the prototype, but it was not intuitive that they needed to go between VAOS and profile to do so. 
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#participants-easily-completed-most-tasks-but-it-was-not-intuitive-that-they-needed-to-go-between-vaos-and-profile-to-do-so), 2021-05

> When navigating the prototype, no participant was able to find the list of facilities in the profile when starting from the VA.gov homepage without guidance. 
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#no-participant-was-able-to-find-the-list-of-facilities-in-the-profile-when-starting-from-the-vagov-homepage-without-guidance), 2021-05

### Managing appointments

> All participants were able to easily use the print feature.
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#all-participants-were-able-to-easily-use-the-print-feature), 2023-11

> Participants easily navigated to and understood the upcoming and past appointment lists.
> 
> [Appointments list Screenreader Usability Test](./2023-02-appt-list-usability-screenreader/research-findings.md#participants-easily-navigated-to-and-understood-the-upcoming-and-past-appointment-lists) 2023-02

> The appointment list was easy for participants to scan for information.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#1-the-appointment-list-was-easy-for-participants-to-scan-for-information), 2022-09

> Some participants did not understand modality.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#2-some-participants-did-not-understand-modality), 2022-09

> The majority of participants would not print their appointment list.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#3-the-majority-of-participants-would-not-print-their-appointment-list), 2022-09

> The order of past appointment list is confusing.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#4-the-order-of-past-appointment-list-is-confusing), 2022-09

> Need a way to search or sort through past appointments. 
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#2-need-a-way-to-search-or-sort-through-past-appointments), 2022-09

> Participants want access to secure messaging when scheduling or managing appointments.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#3-access-to-secure-messaging), 2022-09

> Almost all participants responded positively to the proposed concept for updating the appointment list.
> 
> [MHV and VAOS Appointments List Discovery](./2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#almost-all-participants-responded-positively-to-the-proposed-concept), 2022-01

> Participants wanted tools to help them contact their provider.
> 
> [MHV and VAOS Appointments List Discovery](./2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#participants-wanted-tools-to-help-them-contact-their-provider), 2022-01

> 5/9 participants said they don't use the appointment list in MHV often - talks about how they use the appointment list:
> * 5/9: Verify that their upcoming appointments are properly scheduled by VA
> * 3/9: Check if they have upcoming appointments
> * 2/9: Check against their personal calendar to make sure they're not double-booked
> * 2/9: Use past appointments information to plan for annual appointments
> 
> [MHV and VAOS Appointments List Discovery](./2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#59-participants-said-they-dont-use-the-appointment-list-in-mhv-often), 2022-01

### Navigating the appointments tool

> All participants easily navigated appointment details pages.
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#all-participants-easily-navigated-appointment-details-pages), 2023-11

> Most participants easily found their past appointments
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#most-participants-easily-found-their-past-appointments), 2023-11

> Some participants struggled to understand their pending appointments.
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#some-participants-struggled-to-understand-their-pending-appointments), 2023-11

> Participants easily navigated to and understood the upcoming and past appointment lists.
> 
> [Appointment List Screenreader Usability Study](./2023-02-appt-list-usability-screenreader/research-findings.md#participants-easily-navigated-to-and-understood-the-upcoming-and-past-appointment-lists), 2023-02 

> Participants easily navigated to and understood the upcoming and past appointment lists.
> 
> [Appointments list Screenreader Usability Test](./2023-02-appt-list-usability-screenreader/research-findings.md#participants-easily-navigated-to-and-understood-the-upcoming-and-past-appointment-lists) 2023-02

> Details pages were easy to navigate.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#5-details-pages-were-easy-to-navigate), 2022-09

> The back link was easy to find and use.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#6-the-back-link-was-easy-to-find-and-use), 2022-09

> In the prototype, most participants found their requested appointments in the status dropdown
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#most-participants-found-their-requested-appointments-in-the-status-dropdown), 2021-11

> Appointment list and details pages navigation findings:
> 
> Requested appointment detail page:  
> * 6/8 clicked the "back" link  
> * 2/8 used the back button on their browser 
> 
> Upcoming appointment detail page:  
> * 4/8 clicked the "back" link  
> * 2/8 used the back button on their browser 
> * 1 skipped this step
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#appointment-list-and-details-pages-navigation), 2021-11

### Pending appointment stories

> Some participants struggled to understand their pending appointments.
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#some-participants-struggled-to-understand-their-pending-appointments), 2023-11

> Participants struggled to navigate to and understand appointment requests.
> 
> [Appointment List Screenreader Usability Study](./2023-02-appt-list-usability-screenreader/research-findings.md#participants-struggled-to-navigate-to-and-understand-appointment-requests), 2023-02

> Some participants found the word “Pending” confusing in the concept.
> 
> [MHV and VAOS Appointments List Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/52460de0c1639959c8b933ae75a8a931a36aa0d2/products/health-care/appointments/va-online-scheduling/research/2022-01-mhv-and-vaos-appts-list-discovery/research-findings.md#some-participants-found-the-word-pending-confusing-in-the-concept), 01-2022

> Participants need feedback that their request was received, and expect a call back within 1-2 days.
> 
> [Request Clarification Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/c9aa60340a018268e81f679627e6dd4ea2513e22/products/health-care/appointments/va-online-scheduling/research/2021-11-request-clarification-research/research-findings.md#participants-need-feedback-that-their-request-was-received-and-expect-a-call-back-within-1-2-days), 11-2021

> Appointment requests continue to create confusion.
> 
> [Appointments List Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/4698f0f19f26bd512cf8dd1cff578c712d7da3eb/products/health-care/appointments/va-online-scheduling/research/2021-01-appts-list-test/research-findings.md#appointment-requests-continue-to-create-confusion), 01-2021

> “...**some participants did not understand they were requesting an appointment** until close to the end of the prototype. When they did realize this, they were frustrated, indicating that they would prefer to schedule over the phone because it’s faster. 
> 
> [Community Care Provider Selection Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/4698f0f19f26bd512cf8dd1cff578c712d7da3eb/products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability/research-findings.md#L82), 10-2020

> Veterans stated a significant frustration upon initiating scheduling a request in VAOSR, only to learn and/or realize after interacting with VAOSR that the tool does not *actually* complete the scheduling request.
> 
> [VAOS MVP and Express Care User Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/c9aa60340a018268e81f679627e6dd4ea2513e22/products/health-care/appointments/va-online-scheduling/research/2020-07-vaos-mvp-and-express-care-user-research/research-findings.md#L67), 07-2020

> The term “pending” was confusing for some participants.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#1-the-term-pending-was-confusing-for-some-participants), 2022-09

### Login stories

> Most participants struggled with login.
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#most-participants-struggled-with-login), 2023-11

> Login and navigation pose the biggest challenges to helping veterans schedule online. 
> 
> [MHV Coordinator Feedback Session](./2023-10-coordinator-feedback/research-report.md#login-and-navigation-pose-the-biggest-challenges-to-helping-veterans-schedule-online), 2023-10. Participants were MHV Coordinators.

> Logging in was the biggest navigation challenge for participants.
> 
> [Appointments list Screenreader Usability Test](./2023-02-appt-list-usability-screenreader/research-findings.md#logging-in-was-the-biggest-navigation-challenge-for-participants) 2023-02

## Scheduling stories

> When choosing care, participants wanted to know what was nearby, more than where they were registered.
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#when-choosing-care-participants-wanted-to-know-what-was-nearby-more-than-where-they-were-registered), 2021-05

> Health care decisions start and end with their primary care provider (PCP).
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#health-care-decisions-start-and-end-with-their-primary-care-provider-pcp), 2021-05

> Once they've established care, participants reported clear preferences for how they choose facilities.
> 
> * Ease of access - distance to facility
> * How urgent their need is
> * Whether they believe they can receive quality care at the facility
> * Familiarity with the provider
> 
> Participants would make trade-offs depending on the options available. Some may drive further for higher quality care, or a familiar provider, for example.
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#once-theyve-established-care-participants-reported-clear-preferences-for-how-they-choose-facilities), 2021-05

> Geographic location is a primary factor for participants when looking for care.
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#geographic-location-is-a-primary-factor-for-participants-when-looking-for-care), 2021-05

> Participants saw registration as a step in the process to receiving care; not a tool for finding facilities.
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#participants-saw-registration-as-a-step-in-the-process-to-receiving-care-not-a-tool-for-finding-facilities), 2021-05

> Half of the participants preferred to schedule appointments through a combination of secure messenger and in person.
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#half-of-the-participants-preferred-to-schedule-appointments-through-a-combination-of-secure-messenger-and-in-person), 2021-05

> How the process of choosing or changing a provider works.
> 
> [MHV Coordinator Feedback Session](./2023-10-coordinator-feedback/research-report.md#the-process-of-choosing-or-changing-a-provider), 2023-10. Participants were MHV Coordinators.

> It's unclear what types of care can be scheduled online 
> 
> [MHV Coordinator Feedback Session](./2023-10-coordinator-feedback/research-report.md#its-unclear-what-types-of-care-can-be-scheduled-online), 2023-10. Participants were MHV Coordinators.

> It's easier to help Veterans schedule with other tools.
> 
> [MHV Coordinator Feedback Session](./2023-10-coordinator-feedback/research-report.md#its-easier-to-help-veterans-schedule-with-other-tools), 2023-10. Participants were MHV Coordinators.

> Participants expected a more personalized experience for selecting facilities
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#participants-expected-a-more-personalized-experience-for-selecting-facilities), 2023-11

> Participants were confused by the alert that told them Community Care was unavailable for podiatry.
> 
> [MHV on VA.gov Phase 2b UAT](./2023-11-mhv-on-va-gov-phase-2b-vaos-uat/research-findings.md#participants-were-confused-by-the-alert-that-told-them-community-care-was-unavailable-for-podiatry), 2023-11

> During the prototype test, 7/8 participants understood that they were requesting an appointment. 4/8 participants indicated frustration when they saw that the facility "doesn't allow self-scheduling online."
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#78-participants-understood-that-they-were-requesting-an-appointment), 2021-11

> 4/8 participants indicated frustration when they saw that the facility "doesn't allow self-scheduling online." After reading further, all realized they could still complete the process online. This reduced frustration for 3 of them - the other participant (P2) previously had a bad experience requesting appointments through VAOS and hadn't used the tool since then.
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#78-participants-understood-that-they-were-requesting-an-appointment), 2021-11

> During the prototype test, Most participants chose "have the facility call me back" as their preferred option.
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#most-participants-chose-have-the-facility-call-me-back-as-their-preferred-option), 2021-11

> During the prototype test, no other participant indicated a preference for calling the facility to schedule. Participants reported the same pain points around wait times and navigating the phone tree that we've heard in other studies.
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#most-participants-chose-have-the-facility-call-me-back-as-their-preferred-option), 2021-11

> When we presented an option to send a secure message instead of a request, 3/8 said they had used secure messaging before but had to send multiple messages before they received a response, if they received one at all. None of these chose secure message as their preference.
> 
> 3/8 expected to be able to send a message directly after selecting the option.
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#most-participants-chose-have-the-facility-call-me-back-as-their-preferred-option), 2021-11

> 3/8 participants indicated they would have preferred the option to self-schedule over all of the other options presented.
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#most-participants-chose-have-the-facility-call-me-back-as-their-preferred-option), 2021-11

> Contact and best times to call pages
> 
> * 7/8 participants easily understood and completed the best times to call page.
>   * One thought they were indicating best times to call on the request calendar, so found the page to be redundant.
> * 8/8 participants reviewed the contact info page 
>   * 4/8 expected their info would be updated across all VA systems if updated here.
>   * 1 said he would prefer the option to do both.
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#contact-and-best-times-to-call-pages), 2021-11

> Review and submit page
> 
> [Request Clarification Study](./2021-11-request-clarification-research/research-findings.md#review-and-submit-page), 2021-11

> 7 of 8 participants shared a negative perception of calling the VA
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#7-of-8-participants-shared-a-negative-perception-of-calling-the-va), 2021-05

> When navigating the prototype, in the VAOS facility list view, the content and functionality for the “How do I remove a facility from my list” additional info component didn't align with participant expectations. 
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#in-the-vaos-facility-list-view-the-content-and-functionality-for-the-how-do-i-remove-a-facility-from-my-list-additional-info-component-didnt-align-with-participant-expectations), 2021-05

> When navigating the prototype, participants clearly understood that they couldn't schedule online at every facility, but they weren't confident as to why. 
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#participants-clearly-understood-that-they-couldnt-schedule-online-at-every-facility-but-they-werent-confident-as-to-why), 2021-05

> Most participants saw value in being able to save facilities to refine scheduling options, send secure messages to their provider, or for travel purposes.
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#most-participants-saw-value-in-being-able-to-save-facilities-to-refine-scheduling-options-send-secure-messages-to-their-provider-or-for-travel-purposes), 2021-05

> Some participants explained it would be better if the process for managing facilities required less work for the Veteran.  
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#some-participants-explained-it-would-be-better-if-the-process-required-less-work-for-the-veteran), 2021-05

> Seeing recently visited facilities was useful for recognizing the facilities, not for speeding up the scheduling process.
> 
> [Facility Personalization Research](./2021-05-facilities-personalization-research/research-findings.md#seeing-recently-visited-facilities-was-useful-for-recognizing-the-facilities-not-for-speeding-up-the-scheduling-process), 2021-05

## Accessibility stories

> Recruiting and technical challenges made it difficult to test with screen reader users.
> 
> [Appointments list Screenreader Usability Test](./2023-02-appt-list-usability-screenreader/research-findings.md#recruiting-and-technical-challenges-made-it-difficult-to-test-with-screen-reader-users) 2023-02

> Small text is a challenge.
> 
> [Appointment List Usability Test](./2022-09-appts-list-usability/research-findings.md#4-small-text), 2022-09

## Notifications


## Feature requests


### Rescheduling


## Dead ends and errors


## Unthemed

> Overview of how participants manage appointments.
>
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#how-participants-manage-appointments), 2021-02


> Overview of how participants schedule COVID-19 vaccination appts.
>
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#covid-19-vaccine-scheduling-experience), 2021-02

> Overview of participants' scheduling preferences and expectations.
>
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#covid-19-vaccine-scheduling-experience), 2021-02


> VAOS static landing/login page - prototype feedback
>
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#vaos-static-landinglogin-page-slp)


> Home page and "Schedule your appointment" starter page - prototype feedback
> 
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#home-page-and-schedule-your-appointment-starter-page)


> Alternate paths when Veteran is unable to schedule online - prototype feedback
> 
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#alternate-paths-when-veteran-is-unable-to-schedule-online)


> Vaccine screener page - prototype feedback
> 
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#screener)


> Vaccine calendar instructions - prototype feedback
>
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#calendar)


> Vaccine - plan your second dose - prototype feedback
>
> [VAOS Vaccine Flow Usability](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-02-vaos-vaccine-concept-test/research-report.md#plan-your-second-dose)




























Pick up at vaccine scheduling study