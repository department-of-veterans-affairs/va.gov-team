# Sign-in Service (SiS) overview

SiS is a fast, secure, and reliable authentication solution for 
applications that use VA.gov resources.

## What is Sign-in Service?

Sign-in Service (SiS) is a client service that authenticates login credentials, and grants access to vets-api resources. SiS is [documented for developers on Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs).

__SiS provides 2 products for applications:__
  1. User authentication
  2. System authentication

### What is authentication and authorization?

Authentication is one part of your application that:
  1. confirms the identity of the person or application logging in
  2. gives them access to VA resources based on rules you define

Learn more about [authentication and authorization](https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization).

### What are the requirements for using SiS?

SiS works as an authentication solution for Veterans and their beneficiaries. It works with any application logging in or accessing these resources. 

## Benefits of SiS
- __Security:__ uses [OAuth 2.0](https://oauth.net/2/) for industry-leading security and an intuitive user - experience.
- __24/7 monitoring:__ Identity team monitors and supports issues with authentication. We notify your team of other issues related to your application so you can fix them right away.
- __Performance:__ users log in faster with fewer redirects, and have less downtime compared to other authentication solutions.
- __Visibility:__ monitor errors and performance with default dashboards you can customize. 
- __Consistency:__ user authentication can leverage our [Unified Sign-in Page (USiP) that appears on VA.gov](https://www.va.gov/?next=loginModal) for the frontend experience.

## How do I get started?

Identity team works with you to customize your onboarding experience:
- Submit your contact details and brief project description.
- Book a meeting with us to scope out the project based on your use cases.
- Collaborate with our engineers to finalize requirements for the project.
- After requirements are approved, it usually takes 1-2 sprints to complete the project.
- You can track your progress in [Github](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/2) issues along the way. 

Learn more about [each step of the process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/stepByStep.md) and [answers to common questions](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service#how-does-the-onboarding-process-work). There's also a [troubleshooting FAQ for developers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/SiS%20FAQ.md).

# SiS onboarding overview

Identity team provides documentation, validation guides, 1x1 meetings, and [office hours](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Support/README.md) to support you through every step. You’ll track your progress in Github issues along the way.

## Estimated timeline for integrating with SiS (6-8 weeks)

| Steps | Your team | Identity team | Timeline |
| --- | --- | --- | --- |
| Planning | • Submit your contact details and brief project description<br /><br /> • Book a meeting with the Identity team product owner<br /><br /> • Developers review [enginering documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service) and [FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/SiS%20FAQ.md)| • Share an overview of the process<br /><br/> • Discuss your use cases and specific needs | 1-hour meeting scheduled within 1-2 weeks |
| Developing requirements | • Document what users or systems need to access in detail<br /><br/> • Identify what you may want to track and if any custom tracking is needed | • 1:1 meetings with Identity team to discuss requirements with backend engineers and frontend engineers (if needed)</br></br> • Register the client configuration or service configuration | 1-hour meetings scheduled within 1 week |
| Project approval | • Development team product owner and Identity team product owner sign off on requirements | • Connect with Identity team engineers [during office hours](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Support) or [book additional pairing meetings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Support) as needed | 1-hour meeting scheduled at earliest convenience |
| Implementation | • Build your integration with SiS based on the documentation for the authentication method for your application | • SiS provides access tokens for authentication and sessions | 1-2 sprints |
| Testing & QA | • Test your application in staging and production environments<br/></br> • Validate users can log in as expected | • Provides a guide for basic validation testing<br/></br> • Assists your team with QA | 1 sprint |
| Maintenance | • Monitor [Datadog dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/SiS%20FAQ.md#data-and-monitoring) for performance analytics</br></br> • Resolve issues related to your integration (not authentication)</br></br> • Provide feedback on SiS onboarding experience | • Identity team provides 24/7 monitoring of authentication and alerts your team of issues</br></br>• Troubleshooting help via Slackbot in [the Identity team channel](https://dsva.slack.com/archives/CSFV4QTKN).</br></br> • [Office hours as needed](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Support) | Verify your client application owner every 6 months |


## How does the onboarding process work?
- __What work does my team need to complete?__
  - You’ll need to create the authentication controls for your application routes. An engineer will need to understand how your backend code will restrict access to your endpoints based on a standard authentication.
  - Your team will facilitate the client side of the authentication process (calling/authorize, then receiving a one-time use code and calling /token). 
  - Learn more about how SiS works in our [Github documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs).

- __How long will this project take?__
  - Depending on how much you want to build or customize, the project takes ~6-8 weeks to complete, which includes:
    - [1-hour kickoff meeting to learn more and start scoping out your project](https://docs.google.com/presentation/d/17JuRrXlMTNT1qLfDPLwWcuJKv5_n6wfN0ux6eB0Nsuw/edit#slide=id.g2b946ccaa94_0_314).
    - 1-hour meetings with your backend developers and frontend developers to develop requirements.
  - A final sign-off meeting to approve the work.
  - After the Identity team registers your client configuration or service configuration, we estimate it will take 1-2 sprints worth of effort to build, test, and deploy your integration.
  - Check out [a detailed timeline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service#estimated-timeline-for-integrating-with-sis-6-8-weeks) and a [visual timeline](https://docs.google.com/presentation/d/17JuRrXlMTNT1qLfDPLwWcuJKv5_n6wfN0ux6eB0Nsuw/edit#slide=id.g2b946ccaa94_0_1019) of key milestones.

- __What information does the Identity team need from our team?__
  - Team members, including: your product owner, developer, and OCTO Product owner.
  - Values for your application, such as redirect_uri (if not within vets-api).
  - Fields for client configuration or service account configuration.
  - Qualities of SiS token on their application to confirm authenticated routes (for example, making sure token is properly signed by SiS, confirm token is not expired, etc).
  - A public certificate (for service account setup or private key JWT).

- __When do the details in the requirements document need to be finalized?__
  - We’ll establish the basic requirements for the project with your frontend and backend developers during 2 dedicated meetings. We can continue to refine the requirements over time based on the needs of your team.

- __What role does the Identity team play in the process?__
  - You’ll schedule meetings with our product and engineering teams to discuss your project and plan out your use cases.
  - The Identity team provides [24/7 monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Identity%20Dashboard/Identity_Dashboard/Managing%20Teams%20and%20Users.md) of the client application. We resolve issues with authentication, and alert your team of any issues with other parts of your integration.
  - Office hours with the Identity team [insert support process details here].

- __How can I track the progress of my project? How will I be notified about updates?__
  - You can track your progress in [Github issues](https://github.com/orgs/department-of-veterans-affairs/projects/1183/views/1) for your specific SiS onboarding project. 
  - You’ll get Slack notifications about any issues that come up after the project is over.

- __Who is responsible for making updates in the future?__
  - Your team can request user attribute rule updates anytime you need. All authentication route changes are to be completed by your team with assistance provided by the Identity team upon request.
  - Questions about best practices for authentication or security? Get in touch with the Identity team in #vsp-identity or attend our [office hours](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Support/README.md).

- __How will my existing app users be impacted?__
  - Users will observe a significantly faster login experience with fewer redirects.
  - The only difference is that if you currently have an auto-auth functionality with other SSOe apps that are not using Sign-in Service (SiS), users may need to login again to all non-SiS applications. This should be a temporary constraint as more applications implement SiS. Auto auth between SiS apps is in place today for all applications that request it.

### What does maintenance and support look like?
- __How will I know my integration is working properly?__
  - The Identity team provides [24/7 monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Identity%20Dashboard/Identity_Dashboard/Managing%20Teams%20and%20Users.md) of the application. We resolve issues with authentication, and alert your team of any issues with other parts of your integration. Every 6 months you’ll confirm the primary point of contact to receive these alerts.
  - The Identity team provides [default Datadog dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/SiS%20FAQ.md#data-and-monitoring) for monitoring performance.
  - Additional tracking will be set up by the Identity team which allows your team to monitor your applications authentication performance.

- __Will I be alerted if anything goes wrong?__
  - The Identity team provides 24/7 monitoring of the application. We resolve issues with authentication, and alert your team of any issues with other parts of your integration. Every 6 months you’ll confirm the right point of contact is listed to receive these alerts.
  - There’s also a troubleshooting Slackbot in #vsp-identity.
    - type `/auth-help`, fill out the details of your issue or request and an identity engineer will reach out.

- __Do I need any special permission to access Datadog dashboards?__
  - Work with the Platform team to ensure you have [access to Datadog](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog).
  - The Identity team provides an [overview of the default SiS dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/SiS%20FAQ.md#data-and-monitoring) available.

- __Are there any other self-service tools available?__
  - There’s also a troubleshooting Slackbot in #vsp-identity.
  - We have [office hours with the Identity team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Support/README.md).
  - There are definitions for technical terminology in our [SiS glossary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/glossary.md)


