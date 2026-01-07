# VA Notify, Enterprise Notification Platform

**Mission**
Facilitate an excellent communications experience from VA Business Lines to Veterans across any digital channel.

**Vision**
To be the core VA notification platform that helps increase utilization and visibility of VA services, while also improving the Veteran’s experience.

**North Star**
Provide Veterans with actionable, timely notifications in the manner that is most convenient for them.

# Contact Us!
Please read the Playbook below to get started if you're interested in onboarding to VA Notify.

Find us on DSVA slack in [#va-notify-public](https://dsva.slack.com/archives/C010R6AUPHT)

Email us at **VA Notify** (oitoctovanotify@va.gov)

Reserve a spot at our **Office Hours** - Tuesdays and Thursdays at 2:30 PM ET (30 minutes each) - contact Ksenia Belikova and/or Evan Parish.
Sign-ups close 24 hours before each session. If no one signs up, that slot will be skipped and the next available time can be booked.

Office hours are a chance to:
- Hold a kick-off session once your intake has been submitted
- Ask onboarding or integration questions
- Request quick demos of features
- Get help with specific issues or blockers


# Points of Contact
**Product**
- Dave Conlon, VA PO - VA Notify, Platform & Experience
- Samantha Jennings, Product Manager - Notify Experience Team
- Ksenia Belikova, Product Manager - Notify Platform Team


**Engineering**
- Evan Parish, Tech Lead - Notify Platform Team
- Nathan Wright, Tech Lead - Notify Experience Team

# Playbook

## Who we are
VA Notify is a notifications platform dedicated to improving the Veteran’s notification experience by providing actionable, unified communications on the VA services they utilize. Our notification service is available to any business line/team inside the VA or with an ATO.
## What we are
VA Notify is designed to be a passthrough system. We do not store Veteran information, but we do store your notification templates and settings. We partner with VA Profile and va.gov to provide communication preferences that the Veteran can see and manage. VA Notify checks these preferences before notifying a Veteran.

VA Notify is located within the VAEC. We provide a REST OpenAPI, which your system can call each time a notification is needed. We also provide a self-service web application, which is behind the network (PIV or GFE required) so you can directly create and maintain your notification templates. Aggregated message metrics are provided. Google Analytics (UTM trackers) can and should be used for all message links that point to va.gov, so clicks can be captured. 

## What we aren’t

VA Notify does not…
- Pull data to trigger notification events
- Provide notification scheduling services, though we may throttle or queue notifications based on volume concerns
- Support newsletter notifications
- Store Veteran data
- Track analytics per Veteran

## Supported notification channels (types)
Currently we support email, text messaging (SMS) and push notifications with the Flagship Mobile App. 
Read our [VA Standard Operating Procedures for SMS](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf).

## Onboarding to VA Notify
Welcome! Please submit an [intake form](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=davidconlon%2C+GitSamJennings%2C+kbelikova-oddball&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) to kick off the process. This lets us know a little bit more about you and what you’re trying to accomplish to ensure VA Notify is a good fit. From there we may schedule a kick-off meeting to learn more and guide you through next steps.

## Getting access to our Self Service Portals
The VA Notify self service portal empowers your team to create and manage notification templates, while also providing helpful documentation and tips for your notification journey.

We provide Staging and Production access. Staging should be used for testing purposes and can be connected to one or more of your lower environments (e.g. dev and qa). Once you feel everything is working as expected, you can push the content into Production. We will provision your user and provide an API key per environment via an encrypted VA email to one of your technical team members. We may provide initial access via our Test Service on Staging depending where you’re at in the process.

Please note: to access a lower environment with PIV, i.e. Staging, your user must be provisioned with a SecID in the [IAM system](https://dvagov.sharepoint.com/sites/OITEPMOIAM/playbooks/Pages/ssoi/SSOi%20Setup.aspx) within the appropriate environment. VA Notify Staging is integrated with the SQA IAM environment. Every user automatically gets provisioned in Production, so no extra step is needed there. You can request this yourself or ask VA Notify to help!

**How do I sign in to staging?**
1. Go to https://staging.notifications.va.gov while connected to the VA Network
2. Sign in with your PIV using the button at the top right
3. Let us know you’ve signed in, send us your va.gov email address, and we will assign you to the right service for your team.

**How do I sign in to production?**
1. Go to https://notifications.va.gov while connected to the VA Network
2. Sign in with your PIV using the button at the top right
3. Let us know you’ve signed in, send us your va.gov email address, and we will assign you to the right service for your team.

## Timeframe
The exact timing depends on your team’s schedule and the type of notification.

Email is much quicker to launch than SMS because there are less steps. SMS requires us to acquire sender phone number(s) for your use case (short codes or 10DLCs), which can take up to 12 weeks. If communication preferences are needed, we must account for scheduling with the VA Profile and Authenticated Experience teams to add this. Outside of these tasks, the timeline really comes down to your engineering effort and how quickly a Privacy Officer can do a content review. Please note we collaborate with all of our users on their content to ensure it meets VA standards. For SMS, please review our [standard operating procedures](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf).

If your notification requires VA Notify engineering work, we will review and provide a schedule.

## General Steps 
Please note, this may differ based on your use case.
(*) = Your team, (**) = Joint effort between your team and VA Notify

- Submit the [intake form](https://github.com/department-of-Veterans-affairs/va.gov-team/issues/new?assignees=davidconlon%2C+GitSamJennings%2C+kbelikova-oddball&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D) *
- Have your technical team review the VA Notify API docs *
- Kick-off with VA Notify **
    - During our office hours - Tuesday and Thursday at 2:30pm ET 
- Get access to the Self Service Portal **
- Budget approval for notifications *
- Create your notification content (Privacy Officer review required) *
- VA Notify submits a communication preference intake for your team (if applicable)
    - Please note, if you have a new communication preference your team will need to determine a plan to communicate this to Veterans so they know a new notification is available to opt into.
- SMS only: VA Notify requests applicable phone number(s)
- Build your notification code to call the VA Notify API *
- Test your notification *
- Launch your notification **
- Evaluate business outcomes and make revisions as needed *

## Billing
VA Notify is currently paid for by OIT and there’s currently no charge to our partners. At this time we don’t have plans on cost recovery.

## Reviewing our API docs
Your technical team can review the [API documentation](https://staging.notifications.va.gov/developer/api_docs) and other technical information on our Self Service Portal.

To send a notification, you must first create a template in our Self Service Portal. There are different template types available (email/SMS). Once created, you can find a template ID under template details. This will be used in the API call to trigger the notification. Please note, if you use personalisations (dynamic content) in your template(s) you must include them in the notification request body.

### vets-api
For teams using vets-api to trigger notification requests, please see https://github.com/department-of-Veterans-affairs/vets-api/blob/master/modules/va_notify/README.md

## Delivery Status Callbacks
Callbacks provide status updates per notification sent, so your team can track individual successes and failures. 

### Service-Level Callback Requirements
- Provide a webhook URL for Staging and Production
- VA Notify uses bearer tokens for authenticating with services when making a callback. The bearer token can be any form that the called service endpoint accepts. These should be long-lived, but not permanent, bearer tokens.
    - This should be sent to VA Notify via encrypted VA email
    - Each service will have their own policy for updating a long-lived bearer token. Contact VA Notify if an updated bearer token is required to meet security policies.
    - We recommend not hardcoding acceptance of only a single bearer token, so bearer token updates are not disruptive.

### Request-Level Callback Requirements
- Provide a webhook URL in the `callback_url` field of your request to VA Notify
- Validate the signature in the headers: `x-enp-signature`

#### Callback URL Validation
1. Collect `x-enp-signature` value
2. Collet all parameters in the json response (will have all fields from the sample below)
3. URL encode all parameters
4. Use the API key used for the request and HMAC-SHA256 to create a signature
5. Validate the generated signature matches the one sent by VA Notify

Python example, and how we generate signatures:
```python
signature = HMAC(
        get_unsigned_secret(api_key_id).encode(),
        urlencode(callback_params).encode(),
        digestmod=hashlib.sha256,
    ).hexdigest()
```
Please reach out to [va-notify-public](https://dsva.slack.com/archives/C010R6AUPHT) in OCTO slack if you need assistance.

### Sample Information Included in Callbacks
```
"id":"6ba01111-f3ee-4a45-9d04-234asdfb6abbb9a",  -- this is the notification id
"reference":null,  
"to":"",  -- this is the recipient's contact info
"status":"delivered",  -- this will specify the delivery status of the notification
"created_at":"2023-01-10T00:04:25.273410Z",  
"completed_at":"2023-01-10T00:05:33.255911Z",  
"sent_at":"2023-01-10T00:04:25.775363Z",  
"notification_type":"SMS",   -- this is the channel/type of notification
"status_reason": "", -- populated if there's additional context on the delivery status
"provider":"pinpoint"
```

### Delivery Status Reasons
*Temporary failure*
- Retryable - Notification is unable to be processed at this time. Replay the request to VA Notify.

*Permanent failure*
- Undeliverable - Phone number is invalid
- Undeliverable - Individual unreachable
- Undeliverable - Individual or carrier has blocked the request
- Undeliverable - Preferences declined in VA Profile
- Undeliverable - No VA Profile contact information
- Undeliverable - No VA Profile found in MPI
- Undeliverable - Identifier not found in MPI
- Undeliverable - Individual is deceased
- Undeliverable - Unable to deliver

## FAQ
### Business & Process FAQ

**Are there any blackout hours for sending SMS?**
- Yes. SMS messages are subject to legally required “courtesy hours,” also known as quiet hours. Messages should generally be sent only between 8:00 AM and 9:00 PM in the recipient’s local time. Please plan your notifications accordingly to remain compliant.

**How can Veterans opt in and opt out of SMS messages?**

- The following applies only to use cases that use VA Profile to store SMS communication preferences and integrate with VA Notify for contact and preference lookups. Typically, the front-end system managing the Veteran's communication preferences is VA.gov, however, other systems can integrate with VA Profile as its preference backend. For the sake of this example, we're going to use VA.gov.

  Veterans can manage their SMS preferences in two ways:

  #### Opt-in:
  - Veterans can check the communication permission box in VA Profile to subscribe to SMS messages by use case.
  - If the use case is using implicit/default consent logic, then explicit consent (checking the box) is not required to begin sending messages. For   more information, see the [VA SOP](https://github.com/department-of-Veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf) for SMS.

  #### Opt-out:
  - Veterans can uncheck the box on VA.gov to stop receiving messages, **or**
  - Reply `STOP` to an SMS message directly.
    - Once a Veteran has replied `STOP`, they must reply `START` to the applicable phone number to opt back in.

  **Important Note:** These two opt-out methods are not fully synced. If a Veteran replies `STOP` by text, that blocks all messages being sent from    the applicable phone number to the opted-out mobile number. Re-checking the box in VA Profile does not automatically resume delivery. The Veteran    must reply `START` via SMS to unblock message delivery.

  Services that do not rely on VA Profile for preferences (e.g., those managing opt-in/out independently) are responsible for handling their own SMS   subscription logic.


### Technical FAQ
**What type of API is VA Notify?**
- We offer a REST API

**How does VA Notify work?**

![](images/vanotifydiagram.png)

Tech Stack

| Application          | Infrastructure  | Monitoring & Security |
|:---------------------|:----------------|:----------------------|
| Python               | Terraform       | Datadog               |
| Flask                | GitHub Actions  | PagerDuty             |
| Celery               | AWS Fargate     | Twistlock             |
|                      | Bandit          |                       |

**Where is VA Notify hosted?**
- VA Notify is located in AWS VAEC GovCloud West behind the VA Network, but we do offer both public and private URLs for API calls

**What is the authentication method for your API?**
- Our API authentication method is JWT

**How can we begin sending requests through VA Notify?**
- VA Notify provides API keys for both staging and production. Keys are issued directly by the VA Notify team and delivered over encrypted email to VA.gov addresses of the technical contacts assigned to the service. VA Notify initially provides a staging key so teams can build and test their integration, and a production key is issued once teams are ready to launch.
*Each API key expires 180 days after creation.* Keys must be rotated before expiration to ensure service continuity and avoid notification failures.
If multiple teams use the same service, they may request separate API keys. Each key must follow the same rotation schedule.

**How to configure Push Notifications?**
- The client service must integrate with the VA Flagship Mobile App Service.
- The client team must reach out to the VA Notify team to request a new API key that will be associated with the VA Flagship Mobile App Service. This key will be used by the client’s system to authenticate push notification requests.
- As part of the same onboarding process, the client team must work with the VEText team to create a push notification template and applicable mobile app notification preference. The template and notification preference must be created and approved before any push messages are sent.

**What endpoints will my team need to use?**
- You will only need to use our API for notification specific actions:
    - Triggering a notification send (email, sms, or push)
    - Checking a message status during testing

**Does VA Notify integrate with any other VA systems?**
- VA Notify integrates with MPI and VA Profile to lookup the Veteran's deceased status, contact information, and opt-in status via a person identifier you provide. If you're interested in this option you'll need to provide a supported recipient_identifier id_type.
- Supported ID Types:
    - ICN
    - PID (participant id)
    - EDIPI
    - BIRLSID (also known as file number)
    - VAPROFILEID

**What environments does VA Notify have?**
- We onboard notification partners to our Staging and Production environments. You can connect one or more of your lower environments to our Staging environment.
    - Please note, our Staging environment maps to MPI's SQA environment and VA Profile's QA environment.

**Will any of my configurations differ by environment?**
- Template id(s), Service id, and API Key differ by environment.

**Is there anything our team can use for local testing to get familiar with VA Notify prior to building the notification trigger code?**
- See our [postman collection](https://github.com/department-of-Veterans-affairs/notification-api/tree/master/documents/postman).

**Sample Email request with personalisation**
`{{notification-api-url}}/v2/notifications/email`

    {
       "template_id": "{{email-template-id}}",
       "email_address": "sample@gmail.com",
       "personalisation": {
           "Name": "Jane"
       }
    }

**Sample SMS request with personalisation**
`{{notification-api-url}}/v2/notifications/sms`
   
    {
       "template_id": "{{template-id}}",
       "phone_number": "+11234567890",
       "sms_sender_id": "{{sms-sender-id}}",
       "personalisation": {
           "Name": "Jane"
       }
    }

**Sample Push request with personalisation**
`{{notification-api-url}}/v2/notifications/push`

    {
        "mobile_app": "VA_FLAGSHIP_APP",
        "template_id": "123ID",
        "recipient_identifier": {
            "id_type": "ICN",
            "id_value": "value"
        },
        "personalisation": {
            "appointment_date": "date",
            "appointment_time": "time"
        }
    }
