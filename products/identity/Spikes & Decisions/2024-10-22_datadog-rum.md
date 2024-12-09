# Datadog Real User Monitoring

## Description

The purpose of this document is to record the technical analysis of what Datadog Real User Monitoring (RUM) can offer Identity. This offers to answer the question is if RUM provides a more consistent and accurate user satisfaction score. And it will allow the Identity team insights in better understand the user experience with the authentication process on VA.gov

> [Spike ticket VI-488](https://jira.devops.va.gov/browser/VI-488)

## Technical Analysis

- **What is Datadog Real User Monitoring?**

Datadog Real User Monitoring is a tool in Datadog that provides deep insights into a web application's frontend performance. It is used to monitor real user data to optimize web performance and provide exceptional user experiences.

In short it allows us to monitor and measure web app performance, identify errors, use user behaviors to contextualize performance investigations, collect custom user and performance data, and resolve issues through its insights of the user experience.

- **What is Datadog RUM's user frustration tracking?**

Datadog detects and visualize user pain points by including user frustration signals. When frustrations are detected, they automatically populate in Datadog. This enables us to spot issues quickly.

It helps to uncover underlying user interface (UI) issues that are causing frustrations.

What will be useful:

- Type of user frustration (see below)
- User frustration count
- Possibility of session replay
- A "What happened" section (drill-down)
- Location of user user frustration

- **How is the user frustration tracking measured?**

Datadog lumps user frustrations into 3 categories:

| User frustration                                                                                                  | Description                                                           |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Rage clicks](https://www.datadoghq.com/blog/analyze-user-experience-frustration-signals-with-rum/#rage-clicks)   | When a user clicks on the same element 3+ times in less than a second |
| [Dead clicks](https://www.datadoghq.com/blog/analyze-user-experience-frustration-signals-with-rum/#dead-clicks)   | When a user clicks on an element behaves different than expected      |
| [Error clicks](https://www.datadoghq.com/blog/analyze-user-experience-frustration-signals-with-rum/#error-clicks) | When a user clicks on an element that produces a JavaScript error     |

It is also important to note that these alone should not be used to address issues. We will have to use these user frustrations along with "where" and "why" to determine actual issues.

- **What is Datadog RUM's session replay feature?**

Datadog's session replay will allow us to review, analyze and fix user experience (UX) issues faster so we can see live user sessions. This will significantly cut down the need for minor UX research studies (like surveys). By being able to see

- **Does the session replay work cross-site / cross domain?**

No. While Datadog does use cookies, they are not cross domain and do NOT track users outside of the application.

Example:
| Action | Tracked |
| --- | --- |
| User navigates to VA.gov | Yes |
| Clicks the Sign in Modal > clicks Login.gov button | Yes |
| User navigates to Login.gov | No |
| User enters Login.gov credentials | No |
| User lands back on VA.gov authenticated | Yes |

- **Does the session get maintained across sites/domains?**

Yes. The session uses a cookie scoped to the application's domain. (see above table)

- **Will Datadog RUM slow down user authentication?**

No. None of my research concluded that the addition of Datadog SDK to authentication would cause a bottleneck.

- **What performance metrics does Datadog RUM measure?**

Datadog measures multiple different kinds of performance for pages, resources, and web vitals.

| Performance type     | Description                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| Page performance     | Includes Google's Core Web Vitals: LCP, INP, CLS to determine site's user experience. See more below |
| Performance vitals   | Not covered in our current version of Datadog                                                        |
| Resource performance | Collection of API requests, images, CSS/JS assets                                                    |

<details>
  <summary>Page performance</summary>

| Metric                          | Focus            | Description                                                                                 | Target value |
| ------------------------------- | ---------------- | ------------------------------------------------------------------------------------------- | ------------ |
| LCP - Largest Contentful Pain   | Load performance | Moment in the page load timeline in which the larget DOM object in the viewport is rendered | < 2.5s       |
| INP - Interaction to Next Paint | Interactivity    | Longest duration between user interaction with page and next paint                          | < 200ms      |
| CLS - Cumlative Layout Shift    | Visual stability | Quantifies unexpected page movement due to dynamically loaded content                       | < 0.1        |

</details>

<details>
  <summary>Resource performance</summary>

- This uncovers long loading resources in API
- Large JavaScript and/or CSS files
- Large images and fonts

</details>

- **What other Datadog RUM features are there?**

Datadog also includes:

- Collecting and analyzing browser errors
- Error tracking between browser and mobile
  - Will also include Content Security Policy violations and mobile-specific errors
- Session replays with the ability to save it to a playlist (this could be useful to validate UI and UX decisions)
- Have the ability to generate custom metrics

## Recommendations

The addition of Datadog Real User Monitoring can have a net-positive effect for the Identity team. It can do so in the following

- Identify and fix authentication errors more quickly by allowing us to view real sessions with Session Replay
- Audit sign-in user experiences by analyzing User Frustration Signals
- Validate user experiences move in the correct direction by using Session Replay playlists
- Improve VA.gov authentications by measuring and fixing web performance
- Allow greater insights into VA.gov's authenticated experiences

## Next steps
- Update Identity's Datadog [frustration signals dashboard](https://vagov.ddog-gov.com/dashboard/k65-sji-dku/identity-frustration-signals?fromUser=false&refresh_mode=sliding&from_ts=1730471405246&to_ts=1730475005246&live=true) so that its easier to understand by our team and scoped appropriately between different environments, as well as filtering unsupported user frustrations (aka users using web extensions that have errors count against us in user frustration)
- Use metrics to develop a web performance plan
- Use metrics to develop a frustration reduction plan
- Use web performance plan to improve web performance of Identity-owned code
- Use frustration reduction plan to inform user research opportunities (UX) and/or improvement plan (Engineering)
- Develop a policy & workflow to continuously evaluate user frustrations
  - How many frustrations before Identity fixes an issue?
  - Are they "real" frustrations?
  - How can we inform other teams about user frustrations?
- Use the user frustrations metrics together with the Domo survey data to better inform our POs

## Details

Conducted by [Alexander Garcia](https://github.com/asg5704) on October 22, 2024.
