# VA Event Stream

## Background
The VA Mobile App team is creating an API endpoint to ingest events from MHV Secure Messaging. These events would then trigger push notifications in the app via VEText. 

This single use case (MHV Secure Messaging to VEText) is unlikely to be the last connection the mobile app needs to support. We are therefore designing the system as an event stream. This design will allow us to accelerate the onboarding of event producers, expedite the creation of consumers, and decouple the one-to-one connection between producers and consumers. Once placed on the stream, multiple event consumers may independently read an event and decide how to react to it.


## Team
The team for this project is the same as the [VA Mobile App team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app).
