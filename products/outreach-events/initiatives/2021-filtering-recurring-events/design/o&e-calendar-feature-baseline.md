# Outreach and events calendar baseline/design discovery
**VSA Public Websites team | October 2021**

`Cassandra Allen & James Adams, designers`

---

### Users
This document will consider VA.gov end-user functionality--specifically relating to Veterans, service members, caregivers and dependents. 

All Outreach & Events pages are public so users so any visitor to VA .gov can view their content. A quick review of Google analytics for all Outreach pages form the last six months (April to October 2021) gives some insights:

[Outreach Dashboard in GA](https://analytics.google.com/analytics/web/?authuser=1#/dashboard/nJHHfkWCR3S4ti7gjyDrtw/a50123418w177519031p176188361/_u.date00=20210418&_u.date01=20211017/)
- A lot of traffic to Outreach pages is from email links
- Google is a top referral source
- Most visits are from desktop computers (65%), mobile visits are significant (32%)
- Visitors who view the Events page do use the stepper and typically go just a few pages deep
- Visit follow a cycle with traffic peaking Wednesday/Thursday, and dropping-off significantly over the weekend
- Visits have increased noticeably beginning in July 2021 
- Users often return to Outreach pages

### Current feature flows
The Outreach & Events hub contains several pages outlined in the diagram below.

---

<details>
  <summary><strong>Outreach & Events current users flow</strong> (Click to show diagram)</summary>
  
  ![Outreach & Events current users flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/initiatives/2021-filtering-recurring-events/design/O%26E_User_Paths_1.png)
</details>

---

### Current functionality
The Outreach & Events section has several types of pages:

- [Outreach and events](https://www.va.gov/outreach-and-events/) is the sections's "hub" page
- [Outreach materials](https://www.va.gov/outreach-and-events/outreach-materials/) has cards with videos and downloadable PDFs, videos and other filetypes
- [Outreach events](https://www.va.gov/outreach-and-events/events/) serves as a calendar of events with push-button filtering for upcoming and past events
- [Email updates](https://public.govdelivery.com/accounts/USVA/subscriber/new?topic_id=USVA_46) allows users to sign-up for updates

The focus of this document is the **Outreach & Events calendar** page. 
- Page initially shows 10 events sorted by most immediate current event
- Event listing is paginated
- Push-button filtering will toggle between future and past events

### User stories

#### As a user of the Outreach & Events calendar:

- I want to find events by date (month, day) and time so that I know what's happening based on my schedule/availability.
- I want to find events by location so that I know what's happening in my area (e.g. at my VAMC).
- I want to find events by event type so that I know what's happening in-person vs. online/virtual.
- I want to find events by interest/need so that I know if there events of special interest to me (e.g. VA benefits, education, Community Care etc.).
- I want to find events based on my status (Veteran, beneficiary, caregiver, etc.) so that I can find events relevant to my role.

### Proposed use cases
A user of the VA.gov Outreach events page wants to:

- Find relevant upcoming events by most immediate date
- Find relevant events within a date range or timeframe
- Find online or on-site events
- Find events by a specific keyword
- Find events relevant to their status/role (g.g. Veteran, dependent, active duty, etc.)
- Find events defined by multiple criteria
- Know if a given event in singular or recurring

## Recommendations

### Proposed functionality
To address the uses cases above, new functionality will need to be implemented.
- Filter events by specified timeframe (Map to start and end dates)
- Filter events by event type (Map to "country" or "none" in address for on-site or online)
- Filter events by multiple criteria (Implement multiple filters)
- Identify serial events as recurring (Map to "Make recurring")

#### Functionality needing further investigation
- Filter events by keyword--refine to "category" (Map to teaser description?)
- Filter events by their status/role (Unknown criteria)

#### A note on calendars/datepickers
We recommend avoiding a calendar or datepicker feature for several reasons:
- While a datepicker is more specific in choosing a date, it represents a lot of additional functional "overhead" for the user
- Calendars and datepickers are notorious for introducing accessibility features
- Our hypothesis is user will often be considering general timeframes vs. specific dates when finding events
- An optionlist that filters on timeframe is easier to implement for an MVP

### Other recommendations
- Conduct discovery interviews or early usability studies to uncover how users want to find particular events and by what criteria
- Refine and better organize event lists and content to address accessibility needs
- Remove the Upcoming/Past events toggle; place "past" option in the timframe selector
- Design all new features together; implement new functionality iteratively--start with When and Where (online vs. on-site)
- Rework the Outreach hub page to have more relevant content
- Refine/revise content on all "Outreach" pages to align with tone, voice and language mandates
- Consider making inbound links to the Outreach and event page more prominent

### Proposed feature flows

[Outreach & events Mural board, including use cases and feature flows (External link)](https://app.mural.co/t/vsa8243/m/vsa8243/1634651992163/439beeb6c6f54295c81a2b62d2d4c766f6b23205?sender=u7ad68f2a3a694c00d8a38130)

[Initial wireframing of filtering feature (External link)](https://xd.adobe.com/view/32a7ce8e-7df2-4a7e-ad3f-ef42fa09c753-67f4/)

---

<details>
  <summary><strong>Outreach & Events initial wireframing of filtering feature</strong> (Click to show diagram)</summary>
  
  ![Outreach & Events Use cases/flows](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/initiatives/2021-filtering-recurring-events/design/O&E_Usecase_Workflows_1.png)
</details>

---

### Wireframing

[Initial wireframing of filtering feature (External link)](https://xd.adobe.com/view/32a7ce8e-7df2-4a7e-ad3f-ef42fa09c753-67f4/screen/f1253770-f429-4ef3-86e0-8980e8c4b3a1)

---

<details>
  <summary><strong>Outreach & Events screen concepts</strong> (Click to show diagram)</summary>
  
  ![Wireframes of MVP filtering feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/initiatives/2021-filtering-recurring-events/design/O&E_Wireframes_2.png)
  
  ![Wireframes of future state filtering feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/initiatives/2021-filtering-recurring-events/design/O&E_Wireframes_3.png)
</details>

---
