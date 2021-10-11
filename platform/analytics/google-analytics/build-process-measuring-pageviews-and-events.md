----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/Google-Analytics-and-Google-Tag-Manager.1857978529.html#GoogleAnalyticsandGoogleTagManager-GoogleTagManager) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# Build Process: Measuring Pageviews and Events

The primary audience for this resource is for front-end engineers who want to understand how pageview and other interaction data is sent to Google Analytics. Tracking for each VFS tool is customized based on product requirements, but this overview will highlight considerations for the build process. 

Before reading this resource, please review the following:
- [Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/rules-of-engagement-analytics-implementation-qa.md)
- [Analytics-Insights Request Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request%2C+collaboration-cycle%2C+collab-cycle-review%2C+gtm&template=analytics-implementation-and-qa-request-template.md&title=Analytics+Implementation+or+QA+Support+for+%5BTeam+Name+-+Feature+Name%5D)

By the end of this document, you should be able to:

- Understand the purpose of Google Tag Manager
- Learn about the core tracking that is sent to Google Analytics for pageviews and events
- Identify tracking nuances

## Google Tag Manager Overview

Google Tag Manager is a tag management platform that utilizes a small code snippet to execute Google Analytics (and also has the ability to manage other marketing platforms like Facebook Pixels). This provides the Platform Analytics team more ways to control and define what is sent to Google Analytics (via Google Tag Manager *tags*) and when it should occur (via Google Tag Manager *triggers*). We are able to deploy analytics tracking to the non-production environments first during the build and QA processes.

Google Tag Manager also has version controls, which allows us to rollback any tracking should we need to revert.

## Pageviews

### Overview:

Pageviews is one of the core metrics measured by Google Analytics. Within Google Tag Manager, we have a basic pageview tag that sends data to our Non-Production or Production Google Analytics properties on page load. 

### Example:

For example, within their visit to the site, a user comes to our homepage, goes to `/health-care/`, and then back to the homepage, Google Analytics will record the activity like so: 

| Interaction | Pageview | 
| :--- | :--- | 
| Veteran visits VA.gov | 1 Pageview |
| Veteran visits www.va.gov/health-care | 1 Pageview | 
| Veteran returns to homepage | Records a 2nd pageview for the homepage|

### Instrumentation by Engineering:

For normal pageview tracking that happens on page load, engineers will not need to implement any further tracking since Google Tag Manager will handle the pageview. 

To support our React-based single page apps, we have turned on reporting of History Change API calls to measure pageviews. This means that we treat the routes in the React code as if they were "real" pages from an analytics perspective. If we did not, then as "single page" apps we would only report the initial page landing. 

*Within the build process, consider the number of routes for each step within your tool. Multiple routes could inflate pageviews. Check-in with the Platform Analytics team on how this might impact your product data.*

## Event Tracking

### Overview: 

We also send custom event tracking via JavaScript to report on user actions like downloads, successful or failed form submissions, _etc_. Since Event tracking is more customized than the pageview tracking, it relies on defining and instrumenting a dataLayer event. We are also able to send other non-PII/PHI values like `errorKeys` into Google Analytics for further measurement.

During the Discovery phase, your VFS team should have defined key performance indicators and other metrics you'd like to track. In the build phase, we will work with you to define these requirements for Event Tracking. The good news is that many interactions automatically generate Google Analytics events:


#### Component Library

The component-library is an npm package of reusable components used on VA.gov.  Many of these components are programmed to emit a CustomEvent during certain interactions. VA.gov listens for these events and pushes a corresponding event to the dataLayer, which then triggers an event in Google Tag Manager.

For example, the AlertBox component calls the dispatchAnalyticsEvent helper function, which emits a CustomEvent on the document.body element.   The listener on VA.gov matches the componentName and action in the analyticsEvents lookup table to get an event like  'nav-alert-box-link-click'.  The rest of the fields in the CustomEvent's details are given a prefix of the componentName (kebab format) and sent along with the event. 
If you're a FE developer wanting to get an idea of the data/metadata automatically collected for a specific design system component -- check out the "With Analytics" labeled components in [Storybook](https://design.va.gov/storybook), execute the `monitorEvents(document.body, 'component-library-analytics')` in the console and expand the `detail` properties in the `CustomEvent` object

##### Other important things:

*   Some components are **opt-out** and you need to add a `disableAnalytic`s param to the component to disable analytics.  These are: Accordions, Additional Info, Alert Boxes, Breadcrumbs, Modal, Pagination, Promo Banner.
*   Others (specifically form controls) are **opt-in**.  Due to the risk of PII/PHI, you must add an `enableAnalytics` flag to these components to get the CustomEvent to emit.  These are:  Text Box, Text Area, Select Box, Checkbox, Checkbox Group, and Radio Button.
*   Some components are extremely high input and are opt-in to prevent massive amounts of events.  These are Progress Bar, Segmented Progress Bar, Loading Indicator. 
*   We try to match the names of the additional params to their component counterparts.  this.props.label would be label while this.props.options label would be optionLabel.
*   There's a lot of boilerplate in the unit tests for these in the component-library, so use the helper function if possible.
*   Helpful links:

    *   https://design.va.gov/components/
    *   https://github.com/department-of-veterans-affairs/component-library/
    *   https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/site-wide/component-library-analytics-setup.js
    *   https://github.com/department-of-veterans-affairs/component-library/blob/master/src/helpers/analytics.js
    *   https://github.com/department-of-veterans-affairs/component-library/blob/master/src/helpers/test-helpers.js
* https://github.com/department-of-veterans-affairs/va.gov-team/blob/b7ba80bb0f7a93eac5cfb2b599007379f5c59859/teams/vsp/teams/insights-analytics/ga-events-data-dictionaries.md#design-system-component-tracking

#### Forms System

There are several analytics events baked into actions in the forms-system.  If you look in the primary actions.js file, you will see dataLayer pushes (via helper function recordEvent) for submission, successful submission, and others.  Keep in mind you will need to use a product prefix we have allowed in GTM.
For a complete list of our existing forms library events, please see our documentation [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/tracking-form-events.md). 

#### Static Sites pages

Static content (such as Drupal content) on VA.gov is run through an application called static-pages.  Because most of these pages can not use components from the component-library, we have implemented several application-wide event listeners for things like CTA buttons and Action Links.  These can be [found in this directory](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/static-pages/analytics).  We also have added several events [into several Liquid templates](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/includes/breadcrumbs.drupal.liquid) used by the static pages.

One important development is the transition of the component-library from React components to [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).  These new web components should be able to be used in static pages.


### Example:

Your VFS team is building a new feature for the Profile page and wants to track how many times users submitted an information change for this section. You would structure this event like: 

```js
window.dataLayer.push({
  event: 'profile-transaction',
  'profile-section': 'edu-direct-deposit-information',
  'profile-addressSuggestionUsed': 'no',
});
```
Within Google Tag Manager, we would define a more readable format for an Event Category of "Transactions," Event Action of "EDU Direct Deposit Information," and an Event Label of "profile-transaction." 


### Instrumentation:

The code snippets takes on a format like `window.dataLayer.push({ event: 'vets-custom-event'})`. Here is the process we take to implement this tracking. 

1. Platform Analytics will guide you in the naming convention. 
2. FE teams will implement this into code.  There is a [helper function that can be used](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/monitoring/record-event.js).
3. In parallel, we update Google Tag Manager to pick up these events. We define an Event Category, Event Action, and Event Label that translates the dataLayer event into a more readable format for Google Analytics users. 
4. Once the code is on staging, we will QA that it is working correctly. 

The naming convention for products begins with these prefixes:

|Product|Prefix|
|:---|:---|
|Burials|`burials-530-`, `preneed-`|
|Claims Tracker | `claims-`|
|Discharge Upgrade| `discharge-upgrade-`|
|Education Applications | `edu-`,  `edu-1990e-`, `edu-1990n-`, `edu-1995-`, `edu-5490-`, `edu-5495-`|
|Facility Locator | `fl-` |
|GIBCT| `gibct-`|
|Health Care Applications | `hca-`, `vaos-` |
|Health Records| `health-record-` |
|Interactions | `int-` |
|Navigation | `nav-` |
|Pensions|`pensions-`|
|Post 9-11 Benefits Status| `post911-`|
|Prescription Refills| `rx-`|
|Profile | `profile-`|
|Secure Messaging| `sm-` |
|Sign-on | `login-`, `logout-`, `register-`, `verify-`|
|Terms and Conditions | `terms-` |
|VA Letters| `letter-`|
|Veteran ID Card| `vic-`|
|Request a Board Appeal| `10182-board-appeal-`
