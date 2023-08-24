# Appointment notifications

The current landscape of appointment-related notifications is complex, and the appointments team has put together extensive documentation and research to describe when and how Veteran patients get notified about various appointment reminders, schedule changes, cancellations, and when appointment requests become scheduled. 

**Related resources about appointments**
  * [VA Appointment Notifications Service Map Research](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md)
  * [Veteran appointment notification service map](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1649696758581/a12e35b635ef11d25ff389fe6651b1e63026b68c?wid=0-1664898146419&outline=open&sender=uf94a77a19aaf687331c09367)
  * [Appointments content brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/content-briefs/appointments-content-brief.md) (what language to use when, where)

## Types of appointment reminders
* Appointment reminders
* Appointment cancellations (by VA)
* Pending appointments

## Discovery research

Per our working document on [notification definitions and working principles ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/notifications/notification_definitions_and_ux_principles.md), the lightweight dot or badge notification design is a simple indicator that that intends to signal new or unread content in a relevant area on either MyVA or the MHV on VA.gov landing page. This design is being implemented for secure messages, but may not scale to all types of notifications, particularly those that require additional context to make sense (when a dot next to specific link text does not clearly express what the dot is referencing). 

### 1. Appointment reminders 
```Status: In Design Phase```

#### UX analysis: 
We believe that a reminder about an upcoming appointment is very similar to the current implementation of the dot notification to signal a new or unread secure message. This indicator next to link text such as "Upcoming Appointments" would be fairly intuitive, and users could likely follow the dot pattern down to that product to see their upcoming appointments. We also know that this is technically feasible to deliver to users.

* Outstanding questions: 
  * When will the dot indicator go away for an appointment notification? When the date/time of the appointment has passed?
  * Should an appointment reminder include additional information that the dot indicator cannot provide (such as a link to pre check-in or directions to the appointment?)
  * Do we need to work with the Appointments Team to implement the dot on their page for upcoming appointments in order for this pattern to accurately lead users from the notification dot on the landing page to the upcoming appointments it is referencing?
  * What is the definition of "upcoming"? How many days/hours in advance of the appointment does this notification get triggered?

#### Technical analysis:
The appointments team has shared that this is a feasible notification type at present. There are many ways that Veterans are notified about upcoming appointments. See related resources above for additional context into notifications work.

### 2. Appointment cancellations
```Status: On Hold```

#### UX analysis:
Appointment cancellations can mean one of two things: 1.) The Veteran cancels their own appointment or 2.) A VA or community care facility cancels the appointment. Based on our current UX principles, we will not deliver notifications that are simply a confirmation of a user action, which should already be confirmed with a success alert on-page when the user action is taken. Thus, only the second type of appointment cancellation fits our criteria for exploration. 

At present, our lightweight notification dot design does not scale to support this 



#### Techncial analysis:
* The appointments team tells us that this is a technically feasible type of notification. Currently, appointments cancelled by the VA or a community care facility trigger notifications depending on the time-frame in which the cancellation occurs:
* More than 30 days in advance: the Veteran gets a letter mailed to them about the cancelled appointment
* Less than 15 days: The Veteran gets an email notification
* 

### 3. Pending appointments 
```Status: On Hold```

#### UX analysis:

#### Technical analysis:

