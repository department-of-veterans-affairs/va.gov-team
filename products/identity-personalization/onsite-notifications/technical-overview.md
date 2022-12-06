# Onsite Notifications Technical Overview

- [Overview](#overview)
- [Logical Workflow](#logical-workflow)
- [VANotify](#vanotify)
- [VA.gov](#vagov)
  - [Securing Communication](#securing-communication)
  - [Creating Onsite Notifications](#creating-onsite-notifications)
  - [Displaying Onsite Notifications](#displaying-onsite-notifications)
- [End-to-End Testing](#end-to-end-testing)
- [References](#references)
  - [JWT](#jwt)
  - [BIRLS](#birls)


# Overview
The purpose of this document is to provide a high-level overview of VA.gov onsite-notification features.  It provides a birds-eye view of the process and explains system-to-system communication (particularly between VANotify and VA.gov).

![image](https://user-images.githubusercontent.com/92328831/164318304-45987348-a84f-4642-8678-55e498a70e1b.png)

This document is a work in progress.

# Logical Workflow
The following diagram shows the onsite-notification process at a high-level.  More details are provided in the following sections.

![logical_workflow](./images/logical-workflow.png)

<!--
Paste the following into https://sequencediagram.org/ to generate diagram. Use https://sequencediagram.org/instructions.html as reference.

DMC->DMC:Batch Job
DMC->VANotify:Trigger Notification
VANotify->VANotify:Verify Template
VANotify<->MPI:Deceased Check
VANotify->VA.gov:Create Onsite Notification
VA.gov->VA.gov:Validate Template
VA.gov->VA.gov:Save Onsite Notification
actor #green:0.5 Veteran
Veteran<-VA.gov:Show Onsite Notification
-->

# VANotify
The intent of this section is to to highlight the core steps that VANotify executes in relation to the overall notification process; some of the steps outlined may be incomplete. A deep-dive into the inner workings of VANotify is beyond the scope of this document.

The following diagram shows a more detailed view of the VANotify Platform.

![vanotify](./images/vanotify.png)

DMC identifies notifications through a daily batch job that runs at 6:40pm CT.  This batch job will trigger notifications to be sent to VANotify.  DMC must send a veteran identifier (ICN or BIRLS ID) in order for VANotify to retrieve a VA Profile ID (which will be used by VA.gov).

> *Note: BIRLS ID = File Number*

VANotify performs the following checks before sending the onsite-notification to VA.gov:

- Ensure the template is enabled with onsite notifications.
- Ensure the veteran is not deceased.
- Ensure contact information is valid.
- Ensure MPI Profile exists (and has a correlated VA Profile ID).

# VA.gov
This section will describe the core responsiblities of the VA.gov system:
- Securing Communication
- Creating Onsite Notifications
- Displaying Onsite Notifications

## Securing Communication
Communication between VANotify and VA.gov is encrypted over HTTPS (TLS) and digitally signed using JSON Web Token (JWT).  Encryption ensures that the message is only readable by certain parties, while the signature verifies the integrity of the message and ensures that the request came from the intended party. 

**JSON Web Token (JWT)** is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 

It is essentially a claim (or set of claims) that can be transferred between two parties. The claim is digitally signed by the issuer of the token (VANotify), and the party receiving this token (VA.gov) can use this digital signature to prove the ownership of the claim.

VANotify has generated a private and public key for the communication. The private key is only known to VANotify and is used to digitally sign requests. VA.gov holds the public key which is used to decode and verify the request in vets-api.

![digital-signature](./images/digital-signature.png)

The VA.gov platform uses AWS SSM Parameter Store to store the public key.  For more information on storing secret information, see [Store a secret in Parameter Store](https://depo-platform-documentation.scrollhelp.site/developer-docs/store-a-secret-in-parameter-store) in the VA Platform documentation.

## Creating Onsite Notifications
Once VANotify has verified the onsite notification, it will make a secure request to the VA.gov API.  

The request is sent to `/v0/onsite_notifications` and contains the `template_id` and `va_profile_id`.  Template IDs are stored in [env].settings.yml.

![vanotify-request](./images/vanotify-request.png)

If successful, the response will return a status code of `200` with the complete record that was created in VA.gov:

![vagov-response](./images/vagov-response.png)

The swagger docs for the [onsite notification controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/onsite_notifications_controller.rb) can be found [here](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/my_va).

Onsite Notification records are stored in the `onsite_notification_table`.  The following fields are stored:

| Column Name   | Type      | Description              |
| ------------- | --------- | -------------------------|
| id            | integer   | primary key              |
| template_id   | integer   | The template ID          |
| va_profile_id | integer   | The user's VA Profile ID |
| dismissed     | boolean   | Dismissed by user        |             

When a user dismisses an onsite notification, the record is saved with the `dismissed` field set to `false` so the notification does not reappear for the user.

### Error Codes and Responses
The following table lists common errors that may be encountered in the response when attempting to create an onsite notification:

| Status Code | Description |
|----|----|
| 422 | Template is not included in the list. |
| 403 | Invalid Authorization header |
| 403 | Expired Token |
| 403 | Missing Issued At |
| 403 | Missing Expiration |

### Logging
All requests to the `v0/onsite_notifications` controller are logged to Loki. Errors are logged to Sentry.  The following bookmarks can be used as a quick reference:

- [Sentry Staging Logging](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?display=daily&environment=staging&field=url&field=issue&field=sign_in_method&field=issue&name=Errors+by+URL&query=event.type%3Aerror+url%3Ahttps%3A%2F%2Fstaging-api.va.gov%2Fv0%2Fonsite_notifications&sort=-url&statsPeriod=30d&widths=-1&widths=-1&widths=-1&widths=-1)
- [Sentry Production Logging](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?display=daily&environment=production&field=url&field=issue&field=sign_in_method&field=issue&name=Errors+by+URL&query=event.type%3Aerror+url%3Ahttps%3A%2F%2Fapi.va.gov%2Fv0%2Fonsite_notifications&sort=-url&statsPeriod=30d&widths=-1&widths=-1&widths=-1&widths=-1)

## Displaying Onsite Notifications
Once VA.gov receives and validates the onsite notification, it is stored in the system.  

Notifications are displayed on the My VA page based on the user’s VA Profile ID and the VA Notify Template ID.

![myva-page](./images/myva-page.png)

# End-to-End Testing
As of July 2022, end-to-end testing has presented some challenges:

- The DMC Pre-production environment contains production data.  Because of this environment containing sensitive PII data, it is not a suitable environment for testing.
- VA.gov staging is unable to connect with the DMC Test environment due to VA firewall rules.  Connections made to the DMC Test environment use a non-standard port (8443) which is blocked by VA.gov.

Because of the above challenges, the communication between systems in the testing environment is as follows:

![testing-env](./images/testing-env.png)

Until these environments are fully connected, testers must be aware that the data in **VA Debt** might not match the on-site notification in **My VA**.  For example, even when an on-site notification is triggered for a test user, there may not be any debt showing for that test user in the debt section of the VA.gov website. To sync this data manually, a request will need to be made to the VA.gov Debt team ([#benefits-team-2](https://dsva.slack.com/archives/CPE4AJ6Q0)) to add mock data that matches.

To connect to the [DMC Test environment](https://staging.va.gov/manage-va-debt/summary), an [ESECC Request](https://vfs.atlassian.net/wiki/spaces/CLOUD/pages/2231926890/ESECC+Request) must be made to allow traffic over port 8443.

Once VA.gov staging is connected with DMC Test, integrated testing is a two step process:

1. Make a request that debts be added to particular file numbers (File Number = BIRLS ID).
2. Make a request for the notification batch to be manually triggered after the debts are added.

# References
## JWT
More information about the JWT standard can be found here.

A JWT is made of 3 parts: the **header**, the **payload** and the **signature**. The following is an example of what a request to create an onsite notification might look:

HEADER
```json
{
  "user": "va_notify",
  "iat": 1658883694,
  "exp": 1658883754,
  "alg": "ES256"
}
```
BODY
```json
{
  "va_profile_id": "12345",
  "template_id": "xxxx-xxxx-xxxxx-xxxx"
}
```
SIGNATURE
```
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9
q9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==
-----END PUBLIC KEY-----
```

The following table provides explanations for the header keys used in the request:

| Claim | Description |
|-------|-------------| 
| user  | The user is the client making the request (should be va_notify). |
| iat | The issued at Claim The "iat" (issued at) claim identifies the time at which the JWT was issued. This claim can be used to determine the age of the JWT. Its value MUST be a number containing a NumericDate value. |
| exp | The expiration time claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing. The processing of the "exp" claim requires that the current date/time MUST be before the expiration date/time listed in the "exp" claim. |
| alg | The algorithm used to sign or encrypt the JWT. |

## BIRLS
The Beneficiary Identification Records Locator Subsystem (BIRLS) is an electronic information system used and administered by the U.S. Department of Veterans Affairs (VA) Veterans Benefits Administration (VBA). 

Veteran eligibility status and related information is entered into BIRLS when applying for any benefit (e.g., compensation and pension, education, medical, etc.) from VA.
