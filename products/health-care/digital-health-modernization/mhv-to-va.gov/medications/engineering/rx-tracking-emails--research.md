# Medications | Emails

## Current Architecture

SQL and [cron](https://en.wikipedia.org/wiki/Cron)

MHV SQL procedures live at [department-of-veterans-affairs/mhv-do-db-oracle-scripts](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts).

[Analysis doc](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts/blob/master/discovery-docs/Deep_Dive_Analysis.md)

SQL procedure for building MHV Prescription Package emails

- [`RX_TRACKING_CMOP_EMAIL_BODY`](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts/blob/master/releases/2025/X/MHV_070116/04_MHV_070116_evault_rxproc.sql)

`send_email` column

- [`EVAULT.RX_TRACKING_CMOP.SEND_EMAIL`](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts/blob/master/MHV_CODE/TABLES/EVAULT/rx_tracking_cmop.sql#L84)
- [Not checking `send_email` value, as of 06/25/2025](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts/blob/50ac9cd9646abc855416439a979b3daebbc473fe/releases/2025/X/MHV_070116/04_MHV_070116_evault_rxproc.sql#L55)

SQL procedure for Rx Shipment Email _likely_ triggered by other SQL procedure that integrates CMOP tracking data.

- [`rx_tracking_cmop_prc`](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts/blob/master/MHV_CODE/PROCEDURES/EVAULT/rx_tracking_cmop_prc.prc)
- [`rx_tracking_cmop_schedule`](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts/blob/master/MHV_CODE/SCHEDULED_SCHEDULES/EVAULT/rx_tracking_cmop_schedule.sql)
- [`update_rx_from_cmop`](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts/blob/master/MHV_CODE/PROCEDURES/EVAULT/update_rx_from_cmop.prc)
- [`update_rx_from_cmop_schedule`](https://github.com/department-of-veterans-affairs/mhv-do-db-oracle-scripts/blob/master/MHV_CODE/SCHEDULED_SCHEDULES/EVAULT/update_rx_from_cmop_schedule.sql)


## Proposed Architecture

event-based -- [[dsva.slack.com discussion](https://dsva.slack.com/archives/C059Q28DV99/p1759348793863999?thread_ts=1759258976.899839&cid=C059Q28DV99)]

```
CMOP --> lambda --> SQS queue --> lambda --> VA Notify --> patient
```

## CMOP - Consoidated Mail Outpatient Pharmacy

Batch processor of medications dispensed by the VA. 80% of VA prescriptions are
filled by the CMOP program. The remainder are filled by local VA hospitals.

CMOPs processed 120M prescriptions in 2019! Typical processing time is about
4 days from request to delivery.

Prescription packages are delivered via one of the following carriers:

- US Postal Service
- United Parcel Service
- FedEx
- DHL

[va/mhv-cmop-data-service](https://github.com/department-of-veterans-affairs/mhv-cmop-data-service#readme) performs ETL operations on Medication Dispense HL7 data from CMOP and loads data into a Postgres instance.

## Amazon Lambda - Function as a Service

Example usage: process data, make a POST request, write to a DB table

[AWS Docs | Lambda sample applications](https://docs.aws.amazon.com/lambda/latest/dg/lambda-samples.html)


## Amazon SQS - Simple Queue Service

A distributed message queuing service.

[AWS Docs | What is SQS?](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)


## VA Profile | Get/Update SMS/Email delivery settings

Configure notifications settings at `va.gov/profile/notifications`.

- vets-api: `api.va.gov/v0/profile/communication_preferences`
- OpenAPI spec: `https://api.va.gov/v0/apidocs.json`
- OpenAPI/Swagger viewer: `https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/`


## VA Notify | Email Tempate | "Multiple Prescriptions Tracking"

```
// payload.json
{
  "template_id": "$uuid",
  "email_address": "someone@somewhere.net",
  // "recipient_identifier": "some unique identifier", // if email is not specified
  "personalisation": {
    "tracking_info": "<h2>Prescription Package No. 1</h2><ul><li>Prescription ending in 0123<li>..."
  }
}
```

```
$ curl \
    --request POST https://staging.notifications.va.gov/v2/notifications/email \
    --data @payload.json
```

- [jwt.io](https://www.jwt.io/)
- [jwt bearer tokens example](https://nieldw.medium.com/using-curl-to-authenticate-with-jwt-bearer-tokens-55b7fac506bd)

## Resources

- [Wikipedia | CMOP](https://en.wikipedia.org/wiki/Consolidated_Mail_Outpatient_Pharmacy)
- [VA Notify](https://staging.notifications.va.gov/)
- [VA Enterprise Event Bus](https://department-of-veterans-affairs.github.io/ves-event-bus-developer-portal/)
- [va/mhv-cmop-data-service](https://github.com/department-of-veterans-affairs/mhv-cmop-data-service#readme)

## Questions

- What are the small steps we can execute in order to achieve the goal of Rx Tracking Emails being sent via VA Notify and logging the "Rx Tracking Email Sent" event to AAL?
