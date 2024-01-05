
# Appointments on MHV on VA.gov UAT Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Appointments, Appointments FE**

Date: 12/28/2023

Peter Russo - peter.russo@adhocteam.us

_Once you've presented your research readout to your team, if you have a deck, insert a link to it here_ [Research readout](link here)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
Veterans may interact with the Appointments tool at different stages across the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

Starting up

-   MTM: Attending to health needs

Taking care of myself

-   MTM: Recognizing and addressing mental health needs
-   MTM: Managing health issues

Putting down roots

-   Maintaining my emotional health
-   Engaging VA to access benefits and services

Retiring

-   MTM: Taking care of my health
-   MTM: Managing my declining health

This test helped us achieve two goals:
1. Verify via UAT that logged in Veterans are able to utilize recently added features and data is populating as expected.
2. Understand Veteran's expectations as they choose a facility or provider when scheduling an appointment. 

## Research Questions

**UAT:**
1. Are participants able to navigate between to the appointments feature from My VA and MHV on VA.gov?
1. Are participants able to navigate their appointments lists?
1. Can participants easily print their appointments lists?
1. Are users at Cerner facilities able to navigate to My VA Health?

**Mental Model Inquiry**
1. Does the process of selecting a clinic (VistA) or provider (community care) meet participant expectations?
1. What other information would be helpful when scheduling with a provider or clinic?

## Methodology 

We asked 12 participants to log in to their VA.gov account and complete a series of tasks. 2 of the participants were registered at facilities that use Oracle Health/Cerner. 

## Hypotheses and Conclusions


_**Participants will be able to easily navigate to the appointments tool from all entry points.**_

_Definitely False_

Participants struggled with logging in and navigating to the Appointments tool from the My HealtheVet National Health portal. Participants at Oracle Health facilities struggled to navigate to the tool, though this is working as intended; most paths redirect them to the Oracle Health portal.

The easiest to use entry point was through My VA, followed by the MHV on VA.gov portal home.


_**Participants will be able to easily print a list of their appointments.**_

_Definitely True_

No participant had any trouble finding and using the print button.

_**Participants at Cerner facilities will be able to easily navigate to My VA Health.**_

_Likely True, Not enough information_

We only spoke to two participants who were registered at Cerner facilities, so we don't have enough information to draw a conclusion. However, those participants were redirected to the Oracle Health portal at multiple points.

_**The process of selecting a facility, clinic, or provider during scheduling will meet participant expectations.**_

_Likely False, not enough information_

We were unable to consistently ask participants the same questions because different clinic configurations create different scheduling experiences. We also were unable to find a path to community care with any participant, so were unable to view provider selection. However, we did find that many aspects of scheduling didn't meet participant expectations, especially around the facilities we show for each type of care.

## Key Findings

5. Finding five

6. Finding six

7. Finding seven


## Details of Findings 


### Most participants complained that logging in can be frustrating.

Labels: login

<abbr title="5 out of 12">About half</abbr> of our participants had some trouble logging in. <abbr title="9 out of 12">Most</abbr> reported that they generally find login to be frustrating.

The two that did not complain or have trouble were both mobile users.

Participants found 2-factor authentication to be the most frustrating issue, followed by the requirement to login multiple times to different portals, and confusion around the multiple methods for logging in.

> I had a problem with this the other day where it asked me to log on again. That made no sense to me 'cause it already knew I was logged on, because up at the top right screen it says, "log out" and on the left side of the top screen it has my name, and my military service, and when I last accessed my account. So I have a go to My VA appointments, where it says 'Manage Appointments at...' And then it says, "Go to My Appointments" - where it asked me to log in again. And I never got to where I wanted to go. So you can see that the very next page is "Sign in to view/schedule/cancel your appointments online." This sucks. Why? Why do I have to sign in again? - P12

Related finding: [Logging in was the biggest navigation challenge for participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-02-appt-list-usability-screenreader/research-findings.md#logging-in-was-the-biggest-navigation-challenge-for-participants), Appointment list screenreader usability study, 05/2023

### Most participants were confused when navigating across multiple portals to find the Appointments tool.

Labels: IA, navigation

We started off by asking participants to go to VA.gov and find their appointments. Later, we asked them to find other health tools, then navigate back to appointments. This required that they navigate across 2-3 health portals:
- My HealtheVet on VA.gov 
- My HealtheVet National Portal
- My VA Health - the Oracle Health portal (participants who are registered at Oracle Health facilities.)

In general, participants struggled when navigating across these portals, but some paths to the Appointments tool were more challenging than others.

**Oracle Health portal (My VA Health)**  
The 2 participants at Oracle Health facilities easily navigated to the Oracle Health portal. Once they were in that portal, they could not easily navigate back to VA.gov. This is by design, as the Oracle Health portal opens in a new tab from VA.gov, and has no links back to VA.gov.

**My HealtheVet National Portal**  
5 participants complained of information overload in this portal, both on the "Manage your VA Appointments" page and My HealtheVet NP appointments list. Both pages required a lot of scrolling to get to the tool or call to action.

3 participants struggled to use the "Manage appointments at" page, which directs users to either VA.gov or Cerner. They noted that it wasn't clear where the buttons would lead, or if the different choices would create different outcomes. It was also confusing to see facilities they never attend in the list.

![Page that moves users to VAOS. List of five facilities, where each   is followed by a Go to your VA appointments button. These buttons all functionally navigate to the same URL.](./images/MHV%20Manage%20appts%20screen.png)  
_Page that moves users to VAOS. List of five facilities, where each is followed by a Go to your VA appointments button. These buttons all functionally navigate to the same URL._

**VA.gov "Schedule and Manage Appointments" page** 
<abbr title="9 out of 12">Most participants</abbr> navigated to the Appointments tool through this page. 5 complained about information overload. Another 5 said that it was frustrating to land on this page after logging in, instead of opening the Appointments tool. 4 were frustrated that they had to click the same button twice to access the Appointments tool after they logged in. One said they would have abandoned the process at this page if they had to deal with it outside of the test.

**MHV on VA.gov portal home page.**
All but one participant were able to easily navigate to the MHV on VA.gov home page from the Appointments tool without prompting:
- 9 used the My HealtheVet button on the navbar.
- 7 used the breadcrumb.
- 2 used the dropdown in the Profile menu.

The one who couldn't find a path to the page was using a mobile device.

When navigating back to the Appointments tool from this page:
- 6 participants clicked the "Schedule and Manage Appointments" link.
- 1 clicked the "Upcoming appointments" link.
- 5 went into the MHV National Portal to review other health tools, and never returned to this page.

3 participants said that they had expected to go directly to the appointments tool when they clicked the link to "Schedule and manage appointments" and were confused when they landed on this page.

**My VA**
We tested this path with 11 participants. 10 were able to navigate easily from My VA to the Appointments tool. 

The one who struggled was a Cerner user who didn't have a direct path to the appointments tool from My VA.

### All participants easily navigated appointment details pages.

Labels: IA, list view, details view

All participants quickly understood how to open details pages. 

Most participants used the descriptive back link. Of the 2 who didn't use the link:
- One was on a mobile device, and favored using the browser back button at the bottom of their screen instead. 
- The other was on desktop and also used the browser back button.  

Neither showed any sign of being confused about navigating back to the list view.

### Most participants easily found their past appointments

Labels: IA, subnav

Of those that had trouble: 
- 2 left the appointments tool to look for their past appointments in their health history.
- 1 didn't see the navigation links.

### Some participants struggled to understand their pending appointments.

Labels: Content, requests, pending appointments

- 2 participants expected that the number next to Pending (0) should refer to their upcoming appointments.
- 1 associated pending appointments with those requested through secure messages.
- 2 had to think for a moment before selecting the Pending link


### All participants were able to easily use the print feature.

Labels: Print, tertiary button

Participants were able to easily find and use the print button.


## Scheduling Insights


### Participants wanted a more personalized experience for selecting facilities.

Labels: Scheduling, personalization

3 participants saw unfamiliar or unexpected facilities in the list, such as those that were very far away. 3 wanted to see the facility they currently go to listed first. And 2 were confused that the facility where they currently receive Primary Care wasn't the first or only one listed when they selected Primary Care. 

1 mentioned they'd like to have availability as the first option to choose from. Another participant said that their provider changes much more often than location, so they would prefer to choose from providers based on their availability. 

2 said that it was easy to find the distance to the facility, and 2 others called out that they easily found their desired facility.

## Participants were confused about the request calendar.

Labels: Scheduling, request, date picker

4 participants thought the request calendar was showing the clinic's availability for scheduling an appointment. 1 said they didn't trust that scheduling in this way would lead to an actual appointment.

## Participants were confused by the alert that told them Community Care was unavailable for podiatry.

Labels: Scheduling, community care, alerts

2 participants said that they currently receive community care for podiatry, and were frustrated at this message.

![Alert that displays when community care is not available for a given type of care](./images/CC%20alert.png)


## Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Recommendation 1
    * _Supporting evidence_
* Recommendation 2
    * _Supporting evidence_


## Next Steps

_Next steps here. Include owners if appropriate._


## Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


## Appendix

[Research plan](research-plan.md)

[Conversation guide](conversation-guide.md)

[Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/health-care/appointments/research/research-transcripts/2023-11-mhv-on-va-gov-phase-2b-vaos-uat)


## Tools used for Synthesis

[Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689954776087/f9c46f95011f1ba2bbe090a71496336e8cf98718?sender=ufbf7b24834e1195c028f5337)

Task tracker spreadsheet TBD




## Who we talked to 

**Recruitment criteria**

**Primary criteria**

- All participants must have upcoming appointments at the time of the study.
- All participants must be willing to log into their account and share information about their appointments with the research team.
- At least 2 participants must have upcoming appointments at facilities that use the Cerner EHR.

**Secondary criteria:**

- At least 4 participants who attend sessions on a mobile device.
- At least 4 participants with a cognitive disabilty
- At least 2 Screenreader users
- At least 2 screen magnification users
- At least 1 LGBTQ+ Veteran
- At least 1 Native Veteran
- At least 1 who lives in a rural area

We talked to **12 participants.**

Audience segment:
* Veterans: 12 
* Caregivers: 0 
* Family members of a Veteran: 0  


Gender:
* Male: 8 
* Female: 4 


LGBTQ+:
* Part of the LGBTQ+ community: 1
* Transgender: Unknown
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: Unknown
* Gay, lesbian, or bisexual: Unknown



Devices used during study: 
* Desktop/laptop: 10 
* Tablet: 0 
* Smart phone: 2 
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 8
* 45-54: 1
* 55-64: 0
* 65+: 3


Education:
* High school degree or equivalent: 0
* Some college (no degree): 0
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 4
* Master's degree: 6
* Doctorate degree: 1


Geographic location:
* Urban: 7
* Rural: 5


Race:
* White: 9
* Black: 1
* Hispanic: 3
* Biracial: 2
* Asian: 1
* Native: 1


Disability and Assistive Technology (AT): 
* Cognitive: 2
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to 
This research does not include the perspectives of the following marginalized Veteran groups:

* Assistive tech
* No degree
* Other than honorable
* Immigrant origin
* Expat

[Recruitment checker results](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=379060411)

![Screenshot of recruitment checker](<Screenshot 2024-01-05 at 1.59.12 PM.png>)