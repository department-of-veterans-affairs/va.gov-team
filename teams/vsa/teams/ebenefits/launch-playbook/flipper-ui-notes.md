# Flipper Notes
## Background
### When releasing to production in chunks, do we use Flipper UI or implimentation switches?

Progressive rollout is totally optional. Some teams use progressive rollout on some features but it is not a hard and fast rule.
If we want to do it progressively we can use Flipper UI -

https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-flags/

As an example progressive rollout was used with direct deposit because they were unsure how many errors they
users would recieve as well as the types of errors they would recieve so they wanted to release the feature
to a small percentage of users to monitor errors closely.

Flipper UI is essentially some conditional logic that we use to wrap our components and can gate our components for
a percentage of users. It provides a value to the front end that we can use to conditionally show some other
component to those users so that they see somthing other than the feature when the page loads.

Flipper UI works based on data in our database, not EVSS

### When deploying the static page on Drupal, do we release the page progressively?

Static pages on Drupal are completely static, there is no progressive deployment on a page level with our Drupal implimentation. 


### Possible solution paths

Some of the common scenarios for building experiences on VA.gov lend themselves to a particular solution with
Flipper UI. Here are some of those scenarios - 

#### Unauthenticated page leading to a full page React app

When we need to give the user some information before they enter a full page React app we often do it with an unauthenticated page. This presents a difficulty with using Flipper UI for a progressive rollout since we can't block the user from getting to the unauthenticated page. A possible solution, and most likely the most simple solution, is to make the content on the unauthenticated page agnostic as to if the user will have access to the feature. This prepares them for the idea that when they hit the React app they may not see the information they are looking for. An example of this is the implimentation path taken by the direct deposit team where they did exactly this.

Another possible solution, albeit a more complicated one, is to isolate the area of the unauthenticated page that has content that specifically links to the React app and wrap this content inside a React [widget](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-widget) and then wrap that widget inside some Flipper UI code. This will allow you to access the flipper value throgh redux and change this peice of content for users who are gated from the feature. 

## Using Flipper on Drupal (Epic Draft)
### Story
VSA Teams need a way to deploy features on Drupal where there are static pages using a method that gives full and granular control over who sees resulting pages and when so that a gradual launch can get create the most amount of feedback with the least amount of exposure.

Flipper does a really great job of giving this control based on traffic percentage but only on components that are built using React, not static pages written in the Drupal CMS.

### Proposed Solution A
- Embed a React component in the static landing page that acts as an A/B switch between the legacy and new application.  This entrance would most likely look exactly like a login or action button that, upon clicking, is informed by Flipper which page to send the user to.

### Considerations
Eventually we may want to present the application directly and without authentication and to do this, we would operate Flipper with its intended behavior and wrap the application so a percentage of traffic moves through the new code vs redirected to the previous application.
- In GA, use a `no-follow` tag?
- Limit entrance pathways?
- Simply not allow direct/unauthenticated access until more UAT is complete?

### Pilot Tasks
- Create a high level thumbnail view of the different potential pathways and highlight where the React components would be located.
- Document the procedure and order of events for unwinding any necessary Flipper components after allowing 100% of traffic through.
  - Leave in place to act as a future "valve"? 
  - What is the precedent?
- React Components to be built  `TODO:`
  - Landing page has an embed of....
  - Flipper configuration considerations `TODO:`
- Test
  - RBPS
  - Stakeholders
  - GA
  - Errors in Sentry
  - Call Center
  
### Potential Acceptance Criteria
- [ ] As an authenticated (LOA3) user, I can see on the static landing page a login button
  - [ ] Some percentage of the time, I will be presented with the new application, else, be sent to existing application as if nothing happened.
- [ ] The process is well documented and repeatable by other teams.
