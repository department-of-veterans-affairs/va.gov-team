# Research Plan for Facilities, Progressive Disclosure and Autosuggest, September 2025

## **Background**

The Sitewide team is updating the appearance and usability of the service type field on the [VA.gov facility locator tool](https://www.va.gov/find-locations/). The new experience includes two new features:

1. **Progressive disclosure:** Where the Service type field only displays when a linked Facility type is selected, e.g. Urgent care;  
2. **Autosuggest:** Where users who select a VA Health Facility can use the Service type field to begin to type a service and receive a list of suggested queries, e.g. Allergy & Immunology.

The facility locator is an unauthenticated experience that Veterans and their families use as a source of truth to discover where they can access VA health care, services, and benefits. The team wants to perform usability testing to ensure the new service type field experience improves user satisfaction.

**Related Research & Guidance**  
The autosuggest component is not frequently used in VA tools, however, research was conducted on this component in 2023 for the [Form 526 conditions list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/406) and most participants found the component easy to use. A limitation of this study is that no assistive technology users were included. The USDWS has a similar component called combo box which [passed 13 out of 15 accessibility tests](https://designsystem.digital.gov/components/combo-box/accessibility-tests/) with 2 conditional results. A potential usability issue was identified for keyboard users who do not expect the tab key to make a selection. [Guidance for use of this component was published in July 2025\.](https://design.va.gov/components/search-input#choosing-the-right-component-for-the-task)

We learned in [(limited) prior research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2023-2025-search-improvements/research/mobile-map/2025-03-interim-findings.md) on Facility Locator map feature that Veterans prefer to pick a very specific service when searching. Users are comfortable navigating drop down lists, but then length of lists can make navigation slower, and we expect that the autosuggest component will make navigating these lists easier.  

 **Goals of these design changes:** 

* Veterans and their families can successfully find their desired services results using the autosuggest feature for VA Health facilities.   
  * Assistive technology users can successfully use the autosuggest feature to find what they’re looking for.   
  * Veterans and their families can successfully perform different facility searches using the progressive disclosure function. 

* [Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)  
* Link to card in research repo 


## **OCTO Priorities**

This research aligns with the following [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md):

* VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

### Veteran Journey

There are many potential touchpoints between the Veteran and this application throughout the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

* Getting out (Engaging VA to access benefits and services)  
* Starting up (Finding something to do, Attending to health needs)  
* Taking care of myself (Recognizing and addressing mental health needs, Managing primary care and chronic health issues, Seeking support for an acute health event, Maintaining my health)  
* Reinventing myself (Finding the right job, Acquiring the appropriate education, new skills, and credentials)  
* Putting down roots (Maintaining my financial, social, and emotional health, Engaging VA to access benefits and services)  
* Retiring (Taking care of my health, Finding additional sources of income, Participating in meaningful activities)  
* Aging (Managing my declining health, Planning for long term care)  
* Dying (Scheduling and planning a funeral service)

## **Research Goals**

* Confirm that Veterans and their families (incl. assistive tech users) are able to find VA Health services using the AutoSuggest feature and measure ease of use (SEQ) for desktop and mobile.   
* Confirm that the progressive disclosure pattern does not interfere with finding the right facility  
* Identify barriers Veterans might face when using the facility locator services search to find a particular service at VA Health facilities nearest to them including confusing language, interaction patterns, or instructional content.  
* Goals we are **excluding** from this research:   
  * testing the difference in ease of use between community provider search (uses typeahead pattern, not autosuggest)   
  * Establish robust recommendations for guidelines for use of the combo box/autosuggest pattern across VA and underlying data structure (e.g. typeahead vs. thematic search).   
  * Identifying issues related to the map/results display on mobile vs. desktop.

### 

### Outcome

Learning will provide better understanding of how Veterans interact with the facility locator tool and its autosuggest and progressive disclosure features. We will also better understand the mental models of users who need to search for specific services near them.

### Research Questions

1. Do Veterans and their families understand how to use the autosuggest feature to find VA Health facilities?  
2. Do Veterans and their families know intuitively what terms to use when typing in the autosuggest feature?  
3. Do Veterans and their families understand the service types that populate when typing in the autosuggest field?  
4. Do Veterans and their families understand that the service type field narrows their search results?  
5. Do Veterans and their families understand why the service type field is conditionally revealed?

### Hypotheses

* The service type field for VA Health facilities is intuitive, allowing Veterans and their families to find desired services by navigating a drop-down or using the autosuggest feature.    
* Assistive technology users are able to use the autosuggest feature with no issues.   
* Progressive disclosure functionality reduces visual complexity without confusing users.

## **Methodology**

We will conduct remote moderated usability testing to observe research participants using a coded prototype on desktop and mobile devices. This will allow us to use the autosuggest feature. 

### Location

Sessions will be conducted over Zoom, and we would like Zoom transcripts.

### Research materials (TBD)

* Link to conversation guide  
* Link to prototype  
* Link to Research Notetaking Mural

### Recruitment criteria

9 Veterans and 3 family members who meet the below criteria in order to get 12 completed sessions. This will include 4 assistive tech sessions.

**Primary criteria**

* At least 5 have previously used the facility locator  
* At least 5 have NOT previously used the facility locator  
* At least 5 people with a cognitive disability (e.g., TBI)  
* At least 6 have a smartphone to use for the session and...  
  * Have Zoom downloaded to their smartphone prior to the session and know how to share their screen  
  * Be willing to share over Zoom a web browser window on their smartphone  
  * Have a working microphone on their smartphone

**Primary criteria for AT (Assistive tech) sessions**

* ALL must use a screen reader or screen magnifier every time they access the Internet  
* At least 4 have a computer or smartphone and are willing to use it for the session  
  * 2 mobile, 2 desktop

**Secondary criteria (listed in priority order)**

* At least 5 people who are age 55 or older  
* At least 4 people who are LGBTQ+  
* At least 2 people 35 or under  
* At least 3 people of color  
* At least 2 women  
* At least 3 people who don't have any degree or vocational training after high school  
* At least 3 people who live in a rural or remote area

### Screening Questions

1. Have you searched for a VA location using the VA facility locator?  
   1. No (RECRUIT 6\)  
   2. Yes (RECRUIT 6\)  
2. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.  
   1. No  
   2. Yes (RECRUIT 5 and RECORD as having a cognitive disability)  
3. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.  
   1. No  
   2. Yes (RECRUIT 4\)  
4. Have you downloaded the Zoom app to your smartphone, do you know how to screen share, and do you have a working microphone on your phone?  
   1. No  
   2. Yes (RECRUIT 7\)  
5. What time zone are you located in? (RECORD)

### Screening Questions for AT

1. Do you use a screen reader or screen magnifier every time you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies.  
   * No (DISQUALIFY)  
   * Yes (ask next question)  
2. Are you willing to join the Zoom session using your screen reader or screen magnifier  
   * No (DISQUALIFY)  
   * Yes (ask next question)  
3. How long have you been using this screen reader or screen magnifier?  
   * Less than 2 years (DISQUALIFY)  
   * 2-5 years (ask next question)  
   * More than 5 years (ask next question)  
4. What is the name of the screen reader or screen magnifier technology that you will use during the Zoom session? (open text field--RECORD what they say AND ask rest of questions)  
   * DISQUALIFY if they say something non-digital like "magnifying glass"  
   * Acceptable responses include "ZoomText", "increase font size", "zoom in the browser, "JAWS", "VoiceOver", "Talkback"  
   * If unsure whether someone qualifies, please ask Jordan  
5. For this meeting, you'll need a device with Zoom installed that can screen share and has a working microphone. What kind of device will you be using? (RECORD)  
   * Smartphone  
   * Computer  
   * Tablet

## **Timeline**

Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.

### Prepare

Before recruitment starts, we would like to request a kickoff call with Perigean to align on recruitment criteria and terminology for screener questions in the survey and emails that will be sent to Veterans. We would also like to discuss the relative priorities of recruitment criteria and how the criteria are prioritized when recruiting replacements for participants who cancel in advance.

Tina and Dave are available for a kickoff call during any of these times:

* Week of Sept 29, 2025

Please invite Tina (tina.kambil@agile6.com) and Dave (dave.pickett@civicactions.com)) to the kickoff call.

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.

**Pilot 1**

* Pilot participant email: TBD  
* Date and time of pilot session: TBD

**Pilot 2 (with AT user)**

* Pilot participant email: Sarah Koomson (Sarah.Koomson@oddball.io) on a screen reader  
* Date and time of pilot session: TBD

### Research sessions

* Planned dates of research: October 6-Oct 10 2025

### Length of sessions

* Session length: 1 hour  
* Buffer time between sessions: 1 hour  
* Maximum Sessions per day: 3

### Length of sessions for AT

* Session length: 1.5 hours  
* Buffer time between sessions: 1 hour  
* Maximum Sessions per day: 3

### Availability

| Team Availability | Time Slots (ET) |
| :---- | :---- |
| TBD | TBD |
| TBD | TBD |
| TBD | TBD |
| TBD | TBD |
| TBD | TBD |
| TBD | TBD |
| TBD | TBD |

## **Team Roles**

Please list the people who will be serving in each role.

* Moderator: Tina Kambil (617-949-0174, tina.kambil@agile6.com)  
* Research guide writing and task development (usually but not always same as moderator): Tina Kambil  
* Participant recruiting & screening: Perigean  
* Project point of contact: Tina Kambil & Dave Pickett  
* Participant(s) for pilot test: TBD  
* Accessibility specialist (for sessions where support for assistive technology may be needed): TBD  
* Note-takers: Perigean  
* Observers: Will need to sign up so we can limit the number of observers per session, and Jordan will add them to the invites that she receives from Perigean. The Sitewide team will be invited to observe.

## **Approvals**

* Jon Katora (Product Owner)
* * Michelle Middaugh (Product Owner)
* Shane Strassberg (VA Research Ops) 
