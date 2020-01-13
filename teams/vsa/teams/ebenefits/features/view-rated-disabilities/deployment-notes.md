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
