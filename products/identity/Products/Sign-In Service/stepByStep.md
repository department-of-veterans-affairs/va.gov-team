# Sign-In Service Step-by-Step Guide

This document contains process steps for onboarding with Sign-in Service. Each section maps to an issue in the [Github project template](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2) we use to track new Sign-in Service integrations.

---

## Conduct project planning

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52736009)

Sign-in Service (SiS) is a modern authentication solution designed to enhance the login and access experience for users of VA.gov, including Veterans who seek to access their health records and benefits information through applications such as the VA mobile app. By addressing the limitations of previous authentication systems, SiS provides a faster, more reliable, and cost-effective method for users to securely log in and access their personal data.

Integrating with Sign-in Service provides your application with robust authentication. However, you’ll need to do some up-front planning to ensure the success of your project implementation. We recommend that you consider the following when conducting your project planning:

- Document use case
- Define timelines and scope of project
- Get stakeholder approval
- To learn more about planning your project feel free to check out the [Sign-In Service FAQs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/SiS%20FAQ.md) . 

To get started, we’ll need the following information from your team:

- Team name
- Name of the primary point of contact
- Email address
    - Project manager
    - Engineering lead
    - Product manager
- Product owner (VA employee)

Send these details through one of these channels:

- Send us a message in the [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN) channel of the OCTO Slack workspace.
- Send an email to Mike King at mike.king@oddball.io.
- Use the `/identity-support` command in `#vsp-identity` slack and select "Sign-in Service Integration" as your issue type.

Here’s an example use case that illustrates how Sign-in Service can add value to your application. Consider what types of similar use cases your application has related to logging in and accessing information for Veterans.

### Example use case: Veteran accessing health records on VA Mobile App

- **User action**: A Veteran opens the VA mobile app to sign in.
- **Authentication flow selection**: The app uses the [Proof Key for Code Exchange (PKCE)](https://dropbox.tech/developers/pkce--what-and-why-) authentication flow to ensure a high level of security by using a dynamically generated secret.
- **Authentication process**:
    - The Veteran is directed to the VA.gov Identity team's OAuth /authorize endpoint, starting the sign-in process.
    - They’re redirected to a Credential Service Provider (CSP) to securely enter their credentials.
    - After successful authentication, the CSP informs SiS, which sends a unique code to the mobile app.
    - The app exchanges this code at the SiS token endpoint for an access token, a refresh token, and an anti-CSRF token.
- **Access granted**: with the access token, the Veteran can securely access their health records and benefits information within the app.
- **Session maintenance**: The app uses the refresh token to seamlessly obtain new access tokens as needed. This keeps the Veteran logged in without needing to reauthenticate.

## Kick-off meeting with Identity team

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52736133)

Set up a meeting with our team by selecting an available time from our [calendar](https://calendar.app.google/a4yGP1qcStNxC1Am8) that works for your team. This meeting will cover both technical and non-technical aspects of integrating with Sign-in Service, so we recommend your team lead and an engineering representative attend.

We’ll walk you through the capabilities of Sign-in Service and start scoping out the requirements for your integration. The questionnaire below covers what we’ll discuss, and includes helpful links to our developer documentation.

At the end of the meeting, we’ll set up some follow-up pairing sessions with our engineering teams to refine your requirements.

### Onboarding questionnaire

1. Do end users interact with the application?

- If they do, you will most likely need to [configure your integration as a client application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/configuration/client_config.md).
- If not, your integration will likely need to be [configured as a service account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/configuration/service_account.md). (move to next step)

2. Do you need to use our Unified Sign-in Page (USiP)?

- If so, you’ll need to [set up the USiP for your application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Unified%20Sign%20In%20Pages/README.md).
- If not, proceed to the next question.

3. Is the application used in a web browser?

- If so, your application will need.
    - Is your authentication facilitated by a frontend or a secure backend?
        - If frontend, reference the [cookie-based integration guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/cookie_oauth.md) and complete all the steps for PKCE authentication.
        - If backend, reference the [cookie-based integration guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/cookie_oauth.md), but register a public certificate for [private key JWT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/private_key_jwt.md).
- If not, your application will need to [authenticate via API](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/api_oauth.md).
    - Is your authentication facilitated by a frontend or a secure backend?
        - If frontend, reference the [API integration guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/api_oauth.md) and complete all the steps for PKCE authentication.
        - If backend, reference the [API integration guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/api_oauth.md), but register a public certificate for [private key JWT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/private_key_jwt.md).

## Pairing session with Identity backend engineers

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52736559)

Set up a meeting with our team by selecting an available time from our [calendar](https://calendar.app.google/a4yGP1qcStNxC1Am8) that works for your team. This meeting will cover backend details of integrating with Sign-in Service, so we recommend at least one of your team’s backend engineers attend.

In this step, you’ll work with the Identity backend engineering team to refine the details of your client or service account configuration. Then, we’ll register your configuration into the staging environment. This allows your team to begin authenticating with Sign-in Service by using Postman or the curl utility. In the next step, we’ll work with you to get started integrating your client application with Sign-in Service.

## Pairing session with Identity frontend engineers

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52737014)

Set up a meeting with our team by selecting an available time from our [calendar](https://calendar.app.google/wqo8m541CsAvjvhA7) that works for your team. This meeting will cover frontend details of integrating with Sign-in Service, so we recommend at least one of your team’s frontend engineers attend.

After the backend engineers load the configuration into staging, you can pair with the Identity frontend engineers to determine what steps you’ll need to take to integrate your frontend application with Sign-in Service. We’ll offer tips and guidance to help you get started.

Fill out the [USiP onboarding questionnaire](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Product%20Documentation/Unified%20Sign%20in%20Page/onboarding.md) to prepare for your integration.

## Get project approval

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=53434297)

We’ll set up a meeting between your team, our team, your product owner, and our product owner. In this meeting, we’ll review the documented requirements, level of effort, and timeline. This ensures everyone is on the same page and understands what’s expected of the integration project. Once approved, you can begin integrating your application.

## Implement integration with Sign-in Service

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52736839)

Now that your project is approved and you have a Sign-in Service configuration loaded in the staging environment, you can start integrating your application with SiS. This step covers all the work you’ll need to do. You'll probably want to break this work down into smaller work items that you track using your team’s project management software.

To get started, review a few sample integrations:

- [Example of a JavaScript integration](https://github.com/department-of-veterans-affairs/sign-in-service-client-js).
- [Example of a Ruby integration](https://github.com/department-of-veterans-affairs/sign-in-service-client-sinatra).

The Identity team is here to help! We're dedicated to ensuring your integration with Sign-in Service goes off without a hitch. If you run into any issues, you have several options for getting support:

- Review the [primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/readme.md).
- Check out our [frequently asked questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/SiS%20FAQ).
- Join us in our scheduled [office hours](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Support/README.md) meeting.
- Start a thread in the [#vsp-identity channel](https://dsva.slack.com/archives/CSFV4QTKN) of the OCTO Slack workspace.
- Send an email to Mike King at mike.king@oddball.io.

## Perform integration testing

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52737665)

After deploying your integration to the staging environment, you’ll perform integration testing to ensure everything is functioning as expected.

Some key validations to consider:

- Can users sign in to your client application?
    - Are the appropriate cookies being set (cookie-based authentication)?
    - Does the payload returned include valid tokens (API-based authentication)?
- Do users have access to resources within your application they should have access to?
- If your application requires terms of use acceptance, does it redirect to the terms of use URL?

## Deploy Sign-in Service integration to production

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52737636)

After integration testing in the staging environment, you can deploy your integration to production. We’re here to provide any assistance you may need.

First, coordinate with the Identity team to ensure your client or service account configuration has been loaded into the production environment. Send us a Slack message in the [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN) channel, or you can set up a meeting with our team by selecting an available time-slot from our [calendar](https://calendar.app.google/a4yGP1qcStNxC1Am8) to pair with a backend developer.

Then, follow the deployment process for your application. We recommend using a feature flag to toggle between your existing authentication scheme and the new authentication scheme provided by Sign-in Service, just in case something goes wrong.

## Verify production integration and monitor

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52737712)

Almost there! Now that your integration is successfully deployed to production, it’s time to verify everything is in working order. If you used a feature flag to toggle authentication schemes, you’ll want to enable the feature now. Then, perform a validation to ensure users can log-in to your client application using Sign-in Service.

If your validation fails, you’ll want to toggle the feature flag off. Reach out to your Identity team point of contact to coordinate troubleshooting.

The Identity team provides [default Datadog dashboards](http://url/) for monitoring performance. This will help you monitor your integration for errors and assist in troubleshooting any issues that may arise.

## Leave feedback on your experience integrating with Sign-in Service

[Github draft issue](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2?pane=issue&itemId=52738066)

We’d love to hear any feedback you have about your experience integrating with Sign-in Service. Please take [this short survey](https://dj540s05.optimalworkshop.com/questions/1b248e78752dbb7c3103add453df0aed) so we can improve our process in the future.
