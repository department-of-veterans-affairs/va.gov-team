## When releasing to production in chunks, do we use Flipper UI or implimentation switches?

Progressive rollout is totally optional. Some teams use progressive rollout on some features but it is not a hard and fast rule.
If we want to do it progressively we can use Flipper UI -

https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-flags/

As an example progressive rollout was used with direct deposit because they were unsure how many errors they
users would recieve as well as the types of errors they would recieve so they wanted to release the feature
to a small percentage of users to monitor errors closely.

Flipper UI is essentially a React component that we use to wrap our components and can gate our components for
a percentage of users. It provides a value to the front end that we can use to conditionally show some other
component to those users so that they do not see nothing when the page loads.

Flipper UI works based on some data in out database, not EVSS

## When deploying the static page on Drupal, do we release in chunks?

Static pages on Drupal are completely stqtic, there is no progressive deployment with our Drupal implimentation.
Thus our content would need to be adjusted to account for both users that have access to the feature and also
account for users that do not have access to the feature.


## Possible solution paths

Some of the common scenarios for building experiences on VA.gov lend themselves to a particular solution with
Flipper UI. Here are some of those scenarios - 

### Unauthenticated page leading to a full page React app

When we need to give the user some information before they enter a full page React app we often do it with an unauthenticated page. This presents a difficulty with using Flipper UI for a progressive rollout since we can't block the user from getting to the unauthenticated page. A possible solution, and most likely the most simple solution, is to make the content on the unauthenticated page agnostic as to if the user will have access to the feature. This prepares them for the idea that when they hit the React app they may not see the information they are looking for. An example of this is the implimentation path taken by the direct deposit team where they did exactly this.

Another possible solution, albeit a more complicated one, is to isolate the area of the unauthenticated page that has content that specifically links to the React app and wrap this content inside a React [widget](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-widget) and then wrap that widget inside a Flipper UI component. This will allow you to access the flipper value throgh redux and change this peice of content for users who are gated from the feature. 
