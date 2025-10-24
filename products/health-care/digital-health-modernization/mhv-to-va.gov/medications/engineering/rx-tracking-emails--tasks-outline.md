# Rx Tracking Emails -- Tasks

Goal State:

- Rx Tracking emails are sent via VA Notify (staging.notifications.va.gov, notifications.va.gov)
- Rx Tracking emails are no longer sent from the MHV backend
- Upon successful a delivery event of an Rx Tracking email, an Account Activity Logging (AAL) event is logged.

## Tasks/Tickets

### Discovery: How does MHV currently deliver Rx tracking emails?

- What repository manages this code?
- How do we turn it off?

### Task: Turn off MHV Rx tracking emails

- Dependent on above discovery
- Create PR/steps for disabling MHV Rx tracking email delivery

### Discovery: Plan changes to mhv-cmop-data-service for Rx tracking email delivery via VA Notify

mhv-cmop-data-service (using python, liquibase, postgres, AWS lambdas) stores CMOP HL7 Medication Dispense events in a database.

- What is the current database schema? (tables, columns)
- What triggers an update of data?
- Plan changes to accomodate the following...
  - Grouping Medication Dispense events by Patient identifier, then by Tracking number. (probably a `SELECT` SQL statement)
  - Indicating that a Medication Dispense event has an associated email delivery request via VA Notify. (store `notification_id` from VA Notify).
  - Indicating that a Medication Dispense event has an associated email delivery that was completed or indicating that email delivery failed. (request notification status by `notification_id`).
- Obtain staging/production authorization keys for VA Notify.
- How will we store VA Notify authorization keys? (probably AWS Secrets Manager)
- What library will be used to make HTTP API calls?
- How will we check VA Profile for communication preferences? (will VA Notify handle this, or will our code?)

[VA Notify | API Docs](https://staging.notifications.va.gov/developer/api_docs)

[VA GitHub | mhv-cmop-data-service](https://github.com/department-of-veterans-affairs/mhv-cmop-data-service#readme)

### Task: Implement planned changes to mhv-cmop-data-service for Rx tracking email delivery

- Dependent on above discovery
- Create PR/steps for enabling mhv-cmop-data-service Rx tracking email delivery

### Task: Add calls to AAL for Rx tracking email delivery events

- When an Rx tracking email has been delivered via VA Notify has been confirmed, POST AAL event.

---

Alternate approach

### Plan/implement changes to mhv-cmop-data-service to publish CMOP HL7 Medication Dispense events to the VA Enterprise Event Bus

What changes need to be made in order to publish these events to the event bus?

Should we group Medication Dispense events by Patient identifier/Tracking number at this point, or later?

[VA | Enterprise Event Bus](https://department-of-veterans-affairs.github.io/ves-event-bus-developer-portal/)

### Plan/implement changes to vets-api to consume Medication Dispense events from VA Enterprise Event Bus

- What changes need to be made in order to consume these events from the event bus?
- Queue up sidekiq job to send email via VA Notify (Patient identifier, Tracking number(s), Rx number last 4).
- Check patient communication preferences via VA Profile
- Queue up sidekiq job to request delivery status by `notification_id` from VA Notify, create AAL event.
