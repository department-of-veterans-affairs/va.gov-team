# Outreach and events calendar baseline
**VSA Public Websites team | October 2021**

`Cassandra Allen & James Adams, designers`

---

### Users
This document will consider VA.gov end-user funtionality--specifically relating to Veterans, service members, caregivers and dependents. 

All Outreach & Events pages are public so users so any visitor to VA .gov can view their content. A quick review of Google analytics for all Outreach pages form the last six months (April to Octber 2021) gives some insights:

[Outreach Dashboard in GA](https://analytics.google.com/analytics/web/?authuser=1#/dashboard/nJHHfkWCR3S4ti7gjyDrtw/a50123418w177519031p176188361/_u.date00=20210418&_u.date01=20211017/)
- A lot of traffic to Outreach pages is from email links
- Google is a top referral source
- Most vists are from desktop computers (65%), mobile vists are significant (32%)
- Visitors who view the Events page do use the stepper and typically go just a few pages deep
- Visit follow a cycle with traffic peaking Wednesday/Thursday, and dropping-off significanly over the weekend
- Visits have increased noticibly beginning in July 2021 
- Users often return to Outreach pages

### Current feature flows
The Outreach & Events hub contains several pages:

![Outreach & Events current users flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/outreach-and-events/design/O%26E_User_Paths_1.png)

### Current functionality
The Outreach & Events section has several types of pages:

- [Outreach and events](https://www.va.gov/outreach-and-events/) is the sections's "hub" page
- [Outreach materials](https://www.va.gov/outreach-and-events/outreach-materials/) has cards with videos and downloadable PDFs, videos and other filetypes
- [Outreach events](https://www.va.gov/outreach-and-events/events/) serves as a calendar of events with push-button filtering for upcoming and past events
- [Email updates](https://public.govdelivery.com/accounts/USVA/subscriber/new?topic_id=USVA_46) allows users to sign-up for updates

The focus of this document is the **Outreach & Events calendar** page. 
- Page initially shows 10 events sorted by most immediate current event
- Event listing is paginated
- Push-button filering will toggle between future and past events

### User stories

#### As a user of the Outreach & Events calendar:

- I want to find events by date (month, day) and time so that I know what's happening based on my schedule/availability.
- I want to find events by location so that I know what's happening in my area (e.g. at my VAMC).
- I want to find events by event type so that I know what's happening in-person vs. online/virtual.
- I want to find events by interest/need so that I know if there events of special interest to me (e.g. VA benefits, education, Community Care etc.).
- I want to find events based on my status (Veteran, beneficiary, caregiver, etc.) so that I can find events relevant to my role.

### Proposed use cases

- User wants to find relevant upcoming events by most recent
- User wants to find relevant events by date/time range
- User wants to find relevant event by type
- User wants to find event by keyword
- User wants to find event by their status/role
- User wants to find event by multiple criteria
- User wants to know if an eveny in singular or recurring

## Recommendations

### Proposed functionality
To address the uses cases above, new functionalityl will need to be implemented.
- Filter events by date or date range (Map to start and end dates)
- Filter events by event type (Map to "country" or "none" in address for on-site or online)
- Filter events by keyword (Map to teaser description)
- Filter events by their status/role (Unknown criteria)
- Filter events by multiple criteria (Impliment multiple filters)
- Identify serial events as recurring (Map to "Make recurring")

### Proposed feature flows

---

