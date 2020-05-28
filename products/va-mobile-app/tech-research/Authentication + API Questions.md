# VA Mobile App Authentication + API Questions

May 14, 2020

## Authentication: Why not use SSOe or cookie-auth?
In March, we presented three different options for login and ultimately recommended an OAuth implementation. This is because:
- SSOe does not allow for biometric authentication. It allows a 15-30 min session before users are required to re-enter their username/PW and complete 2FA again
- Cookie authentication is only possible with hybrid applications, rather than native apps

## API Integrations: Why not go to vets-api directly? 
Our assumption is that the VA mobile app will need to access a combination of API endpoints in both Lighthouse and vets-api in order to provide a robust feature set to users. Given our recommended strategy for authentication, we need the API endpoints to allow authentication with OAuth.
Today, Lighthouse allows authentication with OAuth, but the vets-api endpoints do not.  So for the mobile app to also be able to access vets-api endpoints, we have two options:

1. Onboard these endpoints to Lighthouse
2. Add OAuth to these endpoints within vets-api

### We see a few advantages to (1) onboarding endpoints to Lighthouse:
The program already has third-party governance structures in place that would ensure the mobile app can leverage the newest integrations and benefit from maintenance and stability of the platform
Opportunity to leverage existing integrations, ATO and hosting without having to move in lockstep with the program

### Whereas we see a few risks for (2) adding OAuth to endpoints within vets-api:
Lack of suitability of payloads/endpoints for mobile: These apis were designed for VA.gov on the web, not mobile or 3rd parties
Instability: VA.gov is designed for continuous deployment, which does not work with a mobile app release schedule (we cannot guarantee that all users will always have the most up to date app version). This means that a mobile app using VA.gov endpoints would introduce significant friction to the VA.gov development process.


## Future Mobile-only API: Is there an advantage to building a mobile-only API?
It is almost certain that the mobile app will require its own specific endpoints, such as for status requests or token refreshes. These endpoints could be:
Built in Lighthouse 
Built on their own in a mobile-only API layer. 
- Advantages: mobile team would own the dataflow
- Disadvantages: could be duplicative over the long term; would present challenges in handling hosting, governance, and technical debt

## Diagram
Finally, here is a diagram that illustrates the various ways the mobile app could access existing endpoints in vets-api and Lighthouse as well as build new endpoints in a mobile-only API. As discussed, there are strengths and weaknesses to these approaches and ultimately, we could end up using a hybrid approach.
![API Integration Layers](https://user-images.githubusercontent.com/58053619/81984919-221edf80-95fb-11ea-8f0b-cafdd68f41cf.png)



