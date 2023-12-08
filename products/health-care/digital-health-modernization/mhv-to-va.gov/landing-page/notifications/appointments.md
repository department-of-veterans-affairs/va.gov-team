# Appointment notifications

The current landscape of appointment-related notifications is complex, and the appointments team has put together extensive documentation and research to describe when and how Veteran patients get notified about various appointment reminders, schedule changes, cancellations, and when pending appointment requests become scheduled. 

## Summary
Because at least one type of appointment notification will not work well with the lightweight notification dot component, and there are at least three types of notifications to explore for the Appointments product alone, it is likely that we will need to iterate on this design and explore definitions between notification styles (dot/badge indicator vs. onsite notification card component). The dot alone cannot effectively be used to express all three types of notifications within the Appointments product. More detail about this is included in the discovery research section below.

Updates (decisions): 
* We will only display the dot for new/unread/reminder type notifications, where the meaning of the dot is straightforward/clear.
* For appointments, we will only solve for appointment reminders at this stage; our design will not scale to other appointment notification types
* If we cannot clear the dot, we should not implement it. Perpetual dots are not helpful to users if they do not signal something truly new and/or upcoming.

**Related resources about appointments**
  * [VA Appointment Notifications Service Map Research](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md)
  * [Veteran appointment notification service map](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1649696758581/a12e35b635ef11d25ff389fe6651b1e63026b68c?wid=0-1664898146419&outline=open&sender=uf94a77a19aaf687331c09367)
  * [Appointments content brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/content-briefs/appointments-content-brief.md) (what language to use when, where)
  * [MyVA Healthcare Use Case - Appointments documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/health-care-use-cases/health-care-appointments.md)

## Types of appointment reminders
* Appointment reminders
* Appointment cancellations (by VA)
* Pending appointments

## Discovery research

Per our working document on [notification definitions and working principles ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/notifications/notification_definitions_and_ux_principles.md), the lightweight dot or badge notification design is a simple indicator that that intends to signal new or unread content in a relevant area on either MyVA or the MHV on VA.gov landing page. This design is being implemented for secure messages, but may not scale to all types of notifications, particularly those that require additional context to make sense (when a dot next to specific link text does not clearly express what the dot is referencing). 

Possible future problems with scaling the lightweight dot notification to all appointment notifications: 
* The dot will not support appointment cancellations, which cannot clearly be linked to or indicated with simple link text on the existing MHV to VA.gov landing page. Additional context will be necessary to convey a cancelled appointment, and may need to include CTAs, such as next steps for the Veteran to reschedule the cancelled appointment.
* The dot will also not be able to support pending appointments for the same reason - this notification is less straightforward and will require content/context to make sense.
* With 3 types of notifications for appointments alone, is it confusing that each has a different notification type? Will users understand which notification type the dot is referencing? How will they tell the difference?

### 1. Appointment reminders 
```Status: In Design Phase```

#### UX analysis: 
We believe that a reminder about an upcoming appointment is very similar to the current implementation of the dot notification to signal a new or unread secure message. This indicator next to specific link text such as "Upcoming Appointments" that indicates exactly what the dot references would be fairly intuitive, and users could likely follow the dot pattern down to that product to see their upcoming appointments. We also know that this notification is technically feasible to deliver to users.

**Comments from appointments team members:**
* Ben Brasso: Also worth noting, the vast majority of Veterans, today, check in with an MSA at the clinic. Many Veterans arrive for their appts an hour or more ahead of time (either because that's what their provider instructed or because "it's an all day event," e.g., at least a few appts at the same facility).

* Peter Russo: The day of would definitely be too late. A push notification the day before is a pretty common pattern outside of VA. Since this is more of a passive reminder where you're hoping to catch people when they're managing their health, showing it earlier would be better to increase the chances of doing that.
But yeah like you said we didn't find a standard pattern when we looked at notifications in that [study](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md#scheduling-systems-often-send-excessive-notifications)

**Relevant slack threads:**
* [Where can I see content for appointment reminders' push notification? when they show up in relation to an appointment?](https://dsva.slack.com/archives/C018V2JCWRJ/p1684422303312129)


##### Outstanding questions: 
  * Should an appointment reminder include additional information that the dot indicator cannot provide (such as a link to pre check-in or directions to the appointment?)
  * Do we need to work with the Appointments Team to implement the dot on their page for upcoming appointments in order for this pattern to accurately lead users from the notification dot on the landing page to the upcoming appointments it is referencing?
   
##### UX Decisions:
* "Upcoming appointments" will be considered appointments that are scheduled within the next 48 hours.
  * The dot should appear 2 days prior to an upcoming appointment, matching the time the VEText notification is also pushed to end-users (most facilities use 8am the time of the facility as the trigger point).
  * VEText push notifications alert the user at 7, 2, and 1 days prior to appointments. Since the notifications study revealed that there isn't a clear pattern across notification types and tools, we will pattern-match the push notifications from mobile, starting at 2 days prior to an appointment.
* The dot should go away 1 hour after the appointment start time. 


#### Technical analysis:
The appointments team has shared that this is a feasible notification type at present. There are many ways that Veterans are notified about upcoming appointments. See related resources above for additional context into notifications work.

It is important to note that there is already a lot of dupliation around appointment notifications, and not all modes are comprehensive. There are up to 15 different ways a Veteran can get reminded about a single appointment according to the VAOS team's research.

Currently, there are many policies in place (but no single source of truth) around how VA staff need to notify Veterans about their appointments. See [this document for more details](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md#appendix-policies-and-procedures). 

* Text:
  * VEText
  * Annie app (is this duplicative / the same as VEText?) 
* Email:
  * VA Video Service (if a telehealth appointment) will email the Veteran before the appointment
  * MHV Email will email the Veteran before the appointment
* Phone:
  *  Robotext

##### Technical decisions: 
* Notification dot should begin display at 8am the time of the local facility, which matches the pattern of other push-notifications coming from VEText.
Pattern here (for context see link to slack thread below, under related resources:
```
 {
 	"default": "Appointment Reminder Default",
 	"APNS": "{\"aps\":{\"alert\": {\"title\":\"VA Appointment Reminder\",\"body\":\"You have an upcoming VA appointment.\"}},\"appt\":\"%APPOINTMENT%\"}",
     "APNS_SANDBOX": "{\"aps\":{\"alert\": {\"title\":\"VA Appointment Reminder\",\"body\":\"You have an upcoming VA appointment.\"}},\"appt\":\"%APPOINTMENT%\"}",
 	"GCM": "{\"notification\": {\"title\": \"VA Appointment Reminder\",\"body\":\"You have an upcoming VA appointment.\"},\"data\": {\"appt\": \"%APPOINTMENT%\"}}"
 }
```
 
Frequency: Notifications are sent out at 8am (at the time of the facility) for each day they are configured to be sent. VEText default frequency is 7-2-1 days before appointment, but it is configurable per clinic, stop code by the site so there are many per site configurations that are different. Push notifications are sent by VEText on the same configuration the site sets for SMS notifications at the same frequency (per Shane Elliott). See [slack thread here](https://dsva.slack.com/archives/C03CGTDLTFF/p1694009165975579).

##### Related resources (engineering) 
Engineering-related Slack thread: 
* [Could you share the appointment reminders template with me? Also is there a specific time those are sent out or do they coincide with whatever the station has set for the reminder interval?](https://dsva.slack.com/archives/C01CSM3EZGT/p1684426783786359)
* Variability of configurations: https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/bf6248a7-ae15-49f3-893b-73b65f38a7fd/ReportSectionf09450dc35eef3baa8a5?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf


### 2. Appointment cancellations
```Status: On Hold```

#### UX analysis:
Appointment cancellations can mean one of two things: 1.) The Veteran cancels their own appointment or 2.) A VA or community care facility cancels the appointment. Based on our current UX principles, we will not deliver notifications that are simply a confirmation of a user action, which should already be confirmed with a success alert on-page when the user action is taken. Thus, only the second type of appointment cancellation fits our criteria for exploration. 

At present, our lightweight notification dot design does not scale to support this. On the current MHV to VA.gov landing page, the Appointments section does not have any specific link or link text related to cancelled appointments, or that could easily direct users there. 



#### Techncial analysis:
* The appointments team tells us that this is a technically feasible type of notification. Currently, appointments cancelled by the VA or a community care facility trigger notifications depending on the time-frame in which the cancellation occurs:
* More than 30 days in advance: the Veteran gets a letter mailed to them about the cancelled appointment
* Less than 15 days: The Veteran gets an email notification

Clinic appointment cancellations must be communicated to Veterans in different ways if the first method of contact is not successful: 
    1. Automated communications (e.g., VEText) used to notify the Veteran of their appointment is cancelled may be used as the first scheduling contact attempt.
    2. The second contact attempt must be a telephone call to personalize the communication due to the inconvenience of the clinic canceling the appointment
    NOTE: This applies to cases where the Veteran has a telephone. Staff must use contact methods most appropriate to the Veteran's specific situation when it is not possible to reach the patient using traditional methods (e.g., homeless outreach or certified mail).” [Source document here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md)

### 3. Pending appointments 
```Status: On Hold```

#### UX analysis:
Pending appointments are complicated and not enough is known or understood about this to explore notifications at present. 

#### Technical analysis:

