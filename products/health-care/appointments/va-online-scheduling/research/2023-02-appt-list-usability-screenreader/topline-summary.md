# April 2023 Appointments Usability Study - Topline Summary

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-02-appt-list-usability-screenreader/research-plan.md#research-plan-for-vaos-appointments-list-screenreader-usability-test)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-02-appt-list-usability-screenreader/conversation-guide.md)

This topline summary is a high level, top of mind summary of trends found in the sessions, but is not the final result of working with the data discovered. The information in this document may change following a deeper review and analysis of the data gathered.

**The goal of this document is:**

* To make sure everyone who observed the study is in alignment with the perceived findings
* To gain insight from team/stakeholder/designers and determine specific directions to pursue as we analyze the data
* To jump start synthesis by quickly organizing high level themes


## Initial Findings


### Recruiting screen reader users was a challenge

We set this up as a study of screen reader users. Perigean recruited 12 participants and we were able to speak to nine:

* Four were screen reader users.
    * Two were not able to test the feature due to login issues. We included their feedback about login and general comments about VA.gov screen reader usability.
    * The other two were advanced screen reader users.
* Five were not screen reader users.

How did this affect the study? We were unable to validate our [hypotheses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-02-appt-list-usability-screenreader/research-plan.md#hypotheses), which were centered on screen reader users.

However, the seven users we were able to test the feature with provided enough data to answer our [research questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-02-appt-list-usability-screenreader/research-plan.md#research-questions) from the perspective of screen reader and non-screenreader users. We will recommend testing in the future with screen reader users in the final report.

### Most participants easily navigated to and understood the upcoming and past appointment lists

Upcoming and past appointments were easy to find and understand for all but one participant:

* All participants were able to recognize appointments in the lists and understand the information that was presented.
* No participants were confused by the layout of days with multiple appointments.
* We did see an issue with one screen reader not announcing the date and time information, but this was repeated when they navigated to the details link. 

> “A lot of times you want to see what your future is. But they're all right here for you and at least you know the day and the time and all the information. So I think that's good. From being able to see what's upcoming and past as well. I like the future of seeing all the year or even a certain time frame if you're trying to narrow down your search.” - P4

> “The layout of the appointment list, how they have things arranged; all of that is very neat, it's to the point, and it helps the Voiceover to not be jumbled. I'm able to swipe, double-tap, navigate, and hear clearly what I'm tapping on. And if I need to get any further information, you can quickly double-tap the details and it'll let you know everything about that appointment. So everything is clear for a visually impaired person to navigate on an iPhone or on a computer. It's simple, it's straight to the point.” - P9, Screen reader user

### Participants struggled to navigate to and understand appointment requests

Four participants were unable to find the link to appointment requests without help from the study facilitator:

* None of those had previously requested an appointment.
* Only one participant in the study confirmed that they had requested appointments before. They stopped because  the facility never responded to their requests. 

> “I'm sorry I don't use online that much. I think it should just be scheduled. If it needs to be rescheduled or canceled, that makes sense, but it shouldn't be pending. I've never seen that before. I wouldn't have a pending like that. Because it's showing 13 pending appointments. That don't make sense to me” - P2 (Facilitator shared list on staging).


### Missing appointment information makes the list difficult to use

While participants were able to understand appointment information that they were provided, they pointed out some information that was clearly missing:

* As we’ve heard in many other studies, participants needed **type of care**  to understand their appointments. They also noted:
    * Clinic name and physical location
    * Provider name
* When appointments are missing this information  they can be very difficult to identify in the list, especially past appointments.
* Missing appointments also create challenges. Participants said they trust the list less when it doesn’t represent a full picture of their appointments, and tend not to use it as a source of truth. They call the facility instead.
* Three participants opened video appointments that were missing almost all information. Even the instructions dropdown, when clicked, was empty.

> “I mean if you're doing a video connect appointment, this tells you nothing. Who am I meeting with and what's this for? Because there aren't aren't many veterans who come to the VA who aren't there for multiple different appointments for different things. **So this doesn't really help. It gives you the date and time. Those are important. But it kind of needs the five W's. Not just two W's.**” - P7

## Logging in was the most difficult workflow for participants

* All but one participant experienced difficulties logging in.
*  Three could not log in at all.  
    * Two of these were screen reader participants. 
    * One was not using a screen reader, and the facilitator was able to share their screen while that participant drove.
    * This points to a bias toward non-AT users in our methodology. While we should continue to test on production, we should also provide an accessible back-up method when that fails.

> “Unfortunately it's not like one system necessarily reads the other so it makes you sign in twice. That's so weird but it happens all the time.” - P7

> “I mean don't get me wrong I know you're trying to keep things secure but I don't need Fort Knox to get into my own stuff.” - P12, screen reader user


### Participants equated requesting appointments with Secure Messaging

When prompted to look for pending appointments, four participants started by searching for Secure Messaging.

> **Facilitator:** Have you ever requested appointments before?
> 
> **Participant 1:** Oh that's through the Secure Messaging, right?


> **Facilitator:** If you did put in an appointment request where would you expect to see it here? Like if you had gone online and said “hey I need an appointment please call me back to confirm?”
> 
> **Participant 5:** I would go back to where you send your primary care doctor a message.
>
> **Facilitator:**  Oh yeah in Secure Messaging?
>
> **Participant 5:** Yeah I would send a message letting them know that I needed to see the doctor and why I needed to see the doctor.