# Datadog Authentication Metrics

This document outlines what you can expect to start with in Datadog when you create an integration with the OCTO Identity team on VA.gov. The following sections are examples which may not apply to all integrations however the performance of your integration and its up time are the focus of these metrics.

## USiP Integrations

These integrations will include a datadog widget section which displays the number of attempts and number of successful logins. This is useful in understanding how many people are accessing your application as an authenticated user, by type of CSP, and provides a mechanism to get an early indication if something is wrong with the integration with the Identity team. 

![Screenshot 2024-03-29 at 17 48 00](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/4d54318a-3f6d-401e-a11d-e842d9d11e28)

## MAP STS Integration

These integrations will include data for each of the STS calls your app makes that has a downstream dependency with MAP. Our service takes care of the integration and token generation, your service just consumes the resulting token and uses it within your api calls to internal VA systems such as RX. The key attributes will be attempts to call the service and number of successful token generations. You can use this as a good indication to determine if your having issues interacting with a downstream system that utilizes these tokens. From an Identity team perspective we will ensure the service connection between vets-api and MAP is always functional and therefore will not publish the direct interaction stats within a team page unless requested.

![Screenshot 2024-03-29 at 17 48 15](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/9025b501-f030-4b2e-a276-03a7c54f41c1)

## Logs

The final standard offering section will allow you to see all the logs in relation to your applications integration. The sections above are built using statsd and have some limitations when it comes to troubleshooting issues. This section provides another view at all the above actions with more context. The definitions of what each field in the log means or refers to is out of scope from our service offering, however we will list out any relevant Identity related attributes and their definitions within our Datadog Identity Attribute glossary [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/Logging_Monitoring/auth-events-catalog.md).

![Screenshot 2024-03-29 at 17 48 33](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/96a1f318-8f4a-4c66-b698-87a605cb7887)
