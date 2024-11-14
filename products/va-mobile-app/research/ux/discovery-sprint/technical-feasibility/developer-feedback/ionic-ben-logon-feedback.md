# Ionic Technical Feasibility - VA.gov Logon

### Accomplishments and findings

1. Exploration of login using Vets-API directly. This is not supported unless modifications are made to the API to support a mobile consumer. The login fails at the final callback stage due to domain restrictions and callback URL settings on Vets-API
2. Successfully implemented login using Lighthouse API - OAuth based flow. The app will successfully fetch a code the API. The final step of obtaining an access token fails due to intentional CORS restrictions on the API that cannot be lifted.
3. Deployed prototype to Firebase https://valogin-ionicproto-31419.firebaseapp.com/
4. Github repo https://github.com/bshyong/adhoc-VAIonic-proto


### Blockers for login

#### Implicit login flow is currently not supported by Lighthouse

For mobile applications and non-server to server applications, there is an implicit flow that should be used to keep the client secret private. Using the current server-to-server authentication mechanism is *not safe for use in production.*

> The [VA API] program recently got cut in half and combined with another contract (Liberty). This OAuth work has been moved to one of Liberty's teams. But I can tell you that the original plan was to implement PKCE which would make this mobile-safe without implicit flow.


#### CORS is intentionally enabled for server to server auth

This means that it is not possible to directly consume the VA Lighthouse API, until the implicit login flow is supported. A ticket has been filed to prioritize the work for supporting mobile. The responsible team is named Pivot. They are with Liberty IT Solutions on the Lighthouse (VA APIs) contract.  It is only possible to support a login flow for mobile by doing the additional work to stand up a proxy server for server to server authentication with Lighthouse VA API.


## Questions
### Tooling
What were the challenges with tooling?
Some learning curve with code organization, adding libraries, etc. but surmountable. Was not too bad to work with after getting everything set up. Styles seem a bit difficult to work with depending on how complex.

### What is the "reload/feedback loop" like?
Worked relatively well. Some things could not be tested locally and needed to be deployed on Firebase, so the reload/feedback loop took longer. But Firebase deploys were fast enough that it was possible to test.

### What is your feeling about Ionic as a framework?
- it was ok
