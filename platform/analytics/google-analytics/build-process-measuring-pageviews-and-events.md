# Build Process: Measuring Pageviews and Events

The primary audience for this resource is for front-end engineers who want to understand how pageview and other interaction data is sent to Google Analytics. Tracking for each VFS tool is customized based on product requirements, but this overview will highlight considerations for the build process. 

Before reading this resource, please review the following:
- [Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/rules-of-engagement-analytics-implementation-qa.md)
- [Analytics-Insights Request Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban%2C+jonwehausen%2C+nedierecel&labels=analytics-insights%2C+analytics-request&template=analytics-implementation-and-qa-request-template.md&title=Analytics+Implementation+or+QA+Support+for+%5BProduct%5D)

By the end of this document, you should be able to:

- Understand the purpose of Google Tag Manager
- Learn about the core tracking that is sent to Google Analytics for pageviews and events
- Identify tracking nuances

## Google Tag Manager Overview

Google Tag Manager is a tag management platform that utilizes a small code snippet to execute Google Analytics (and also has the ability to manage other marketing platforms like Facebook Pixels). This provides the Analytics-Insights team more ways to control and define what is sent to Google Analytics (via Google Tag Manager *tags*) and when it should occur (via Google Tag Manager *triggers*). We are able to deploy analytics tracking to the non-production environments first during the build and QA processes.

Google Tag Manager also has version controls, which allows us to rollback any tracking should we need to revert.

## Pageviews

_Overview:_ 

Pageviews is one of the core metrics measured by Google Analytics. Within Google Tag Manager, we have a basic pageview tag that sends data to our Non-Production or Production Google Analytics properties on page load. 

_Example_: 

For example, within their visit to the site, a user comes to our homepage, goes to `/health-care/`, and then back to the homepage, Google Analytics will record the activity like so: 

| Interaction | Pageview | 
| --- | --- | 
| Veteran visits www.va.gov | 1 Pageview |
| Veteran visits www.va.gov/health-care | 1 Pageview | 
| Veteran returns to homepage | Records a 2nd pageview for the homepage|

_Instrumentation by Engineering:_

For normal pageview tracking that happens on page load, engineers will not need to implement any further tracking since Google Tag Manager will handle the pageview. 

To support our React-based single page apps, we have turned on reporting of History Change API calls to measure pageviews. This means that we treat the routes in the React code as if they were "real" pages from an analytics perspective. If we did not, then as "single page" apps we would only report the initial page landing. 

*Within the build process, consider the number of routes for each step within your tool. Multiple routes could inflate pageviews. Check-in with the Analytics-Insights team on how this might impact your product data.*

## Event Tracking

_Overview:_ 

We also send custom event tracking from our JavaScript to report on user actions, like downloads, successful or failed form submissions, etc. Since Event tracking is more customized than the pageview tracking it relies on defining and instrumenting a dataLayer event. We are also able to send other non-PII values, like `errorKeys` into Google Analytics for further measurement.

During the Discovery phase, your VFS team should have worked with Analytics-Insights to define the key performance indicators you'd like to track. In the build phase, we will work with you to define these requirements for Event Tracking. 

_Example:_

Your VFS team is building a new feature for the Profile page and wants to track how many times users submitted an information change for this section. You would structure this event like `window.dataLayer.push({ event: 'profile-transaction'})`. Within Google Tag Manager, we would define a more readable format for an Event Category of "Transactions", Event Action of "Profile Saved", and an Event Label of "profile-transaction". 


_Instrumentation:_

The code snippets takes on a format like `window.dataLayer.push({ event: 'vets-custom-event'})`. Here is the process we take to implement this tracking. 

1. Analytics-Insights will guide you in the naming convention. 
1. FE teams will implement this into code.
1. In parallel, we update Google Tag Manager to pick up these events. We define an Event Category, Event Action, and Event Label that translates the dataLayer event into a more readable format for Google Analytics users. 
1. Once the code is on staging, we will QA that it is working correctly. 

The naming convention for products begins with these prefixes:

|Product|Prefix|
|---|---|
|Claims Tracker | `claims-`|
|Sign-on | `login-`, `logout-`, `register-`, `verify-`|
|Navigation | `nav-` |
|Terms and Conditions | `terms-` |
|Facility Locator | `fl-` |
|Education Applications | `edu-`,  `edu-1990e-`, `edu-1990n-`, `edu-1995-`, `edu-5490-`, `edu-5495-`|
|Health Care Applications | `hca-`, `vaos-` |
|GIBCT| `gibct-`|
|Post 9-11 Benefits Status| `post911-`|
|Health Records| `health-record-` |
|VA Letters| `letter-`|
|Secure Messaging| `sm-` |
|Prescription Refills| `rx-`|
|Burials|`burials-530-`, `preneed-`|
|Pensions|`pensions-`|
|Veteran ID Card| `vic-`|
|Discharge Upgrade| `discharge-upgrade-`|
